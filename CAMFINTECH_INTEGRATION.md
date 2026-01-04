# CamFinTech Chat Widget Integration Guide

## Overview

This guide explains how to integrate the OmniDM chat widget into the CamFinTech website (camfintech.com). The widget provides an AI-powered chat assistant that helps visitors with FinTech integration inquiries.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    camfintech.com (Next.js)                  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  <OmniDMChat /> Component                              │ │
│  │                                                        │ │
│  │  1. Sets window.OmniDMConfig with token & settings     │ │
│  │  2. Dynamically loads widget script                    │ │
│  │  3. Widget auto-initializes and renders chat bubble    │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          │ HTTPS (Fetch API)
                          ▼
┌─────────────────────────────────────────────────────────────┐
│              automation.omnidm.ai                            │
│                                                              │
│  Static Files (nginx)                                        │
│  └── /static/widget/v1/omnidm-chat.min.js (14KB)            │
│                                                              │
│  Webhook API (n8n)                                           │
│  └── POST /webhook/platform/embed/incoming?token=xxx        │
│       │                                                      │
│       ▼                                                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  G12.00D Web Embed Adapter                             │ │
│  │                                                        │ │
│  │  1. Validates token (camfintech-embed-2026)            │ │
│  │  2. Checks Origin header (camfintech.com)              │ │
│  │  3. Resolves tenant from database                      │ │
│  │  4. Transforms to UnifiedMessage format                │ │
│  │  5. Routes to G12.01-MT orchestrator                   │ │
│  │  6. Returns JSON response to widget                    │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## Configuration Details

### Tenant Information

| Property | Value |
|----------|-------|
| Tenant ID | `b2c4e6f8-1234-5678-9abc-def012345678` |
| Tenant Name | CamFinTech |
| Tenant Slug | camfintech |
| Default Flow | CONSULTATIVE (assisted onboarding) |
| Subscription | Enterprise |

### Platform Configuration

| Property | Value |
|----------|-------|
| Platform Type | web-embed |
| Webhook Token | `camfintech-embed-2026` |
| Rate Limit | 100 requests/minute |
| Allowed Origins | `https://camfintech.com`, `https://www.camfintech.com`, `http://localhost:3000` |

### Widget URLs

| Resource | URL |
|----------|-----|
| Widget Script | `https://automation.omnidm.ai/static/widget/v1/omnidm-chat.min.js` |
| API Endpoint | `https://automation.omnidm.ai/webhook/platform/embed/incoming?token=camfintech-embed-2026` |

---

## Integration Steps

### Step 1: Create the React Component

Create a new file at `components/OmniDMChat.tsx`:

```tsx
'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    OmniDMConfig: {
      token: string;
      baseUrl: string;
      position: string;
      title: string;
      welcomeMessage: string;
    };
    OmniDM?: {
      open: () => void;
      close: () => void;
      toggle: () => void;
      sendMessage: (text: string) => void;
    };
  }
}

export default function OmniDMChat() {
  useEffect(() => {
    // Skip if already loaded
    if (window.OmniDM) return;

    // Configure the widget
    window.OmniDMConfig = {
      token: 'camfintech-embed-2026',
      baseUrl: 'https://automation.omnidm.ai',
      position: 'bottom-right',
      title: 'CamFinTech Assistant',
      welcomeMessage: 'សួស្តី! Welcome to CamFinTech. How can we help you with your FinTech integration today?'
    };

    // Load the widget script
    const script = document.createElement('script');
    script.src = 'https://automation.omnidm.ai/static/widget/v1/omnidm-chat.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="omnidm-chat"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}
```

### Step 2: Add to Root Layout

Edit your `app/layout.tsx` (App Router) or `pages/_app.tsx` (Pages Router):

**For App Router (`app/layout.tsx`):**

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import OmniDMChat from '@/components/OmniDMChat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CamFinTech - FinTech Solutions for Cambodia',
  description: 'Strategic FinTech consulting for Bakong, CamDigiKey, and digital transformation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <OmniDMChat />
      </body>
    </html>
  );
}
```

**For Pages Router (`pages/_app.tsx`):**

```tsx
import type { AppProps } from 'next/app';
import OmniDMChat from '@/components/OmniDMChat';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <OmniDMChat />
    </>
  );
}
```

### Step 3: Test Locally

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
# Chat bubble should appear in bottom-right corner
```

### Step 4: Deploy to Production

```bash
# Build and deploy as normal
npm run build
npm run start

# Or deploy to Vercel/other hosting
vercel deploy --prod
```

---

## Widget Configuration Options

The `window.OmniDMConfig` object supports these options:

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `token` | string | Yes | - | Webhook token for authentication |
| `baseUrl` | string | No | `https://automation.omnidm.ai` | API base URL |
| `position` | string | No | `bottom-right` | Widget position: `bottom-right` or `bottom-left` |
| `title` | string | No | `Chat with us` | Header title in chat window |
| `welcomeMessage` | string | No | `Hello! How can I help?` | Initial bot message |
| `autoOpen` | boolean | No | `false` | Auto-open chat on page load |
| `timeout` | number | No | `30000` | Request timeout in milliseconds |

---

## Programmatic Control

After the widget loads, you can control it via `window.OmniDM`:

```javascript
// Open the chat window
window.OmniDM.open();

// Close the chat window
window.OmniDM.close();

// Toggle open/closed
window.OmniDM.toggle();

// Send a message programmatically
window.OmniDM.sendMessage('I need help with Bakong integration');
```

### Example: Open chat from a button

```tsx
export function ContactButton() {
  const handleClick = () => {
    if (window.OmniDM) {
      window.OmniDM.open();
      window.OmniDM.sendMessage('I want to learn about your services');
    }
  };

  return (
    <button onClick={handleClick} className="btn-primary">
      Chat with Us
    </button>
  );
}
```

---

## How It Works

### Message Flow

1. **User types message** in chat widget
2. **Widget sends POST request** to webhook endpoint with:
   ```json
   {
     "visitor_id": "v_abc123...",
     "session_id": "sess_xyz789...",
     "message": "How do I integrate Bakong?",
     "page_url": "https://camfintech.com/services"
   }
   ```
3. **G12.00D adapter validates** token and origin
4. **Tenant resolved** from database using token
5. **Message transformed** to UnifiedMessage format:
   ```json
   {
     "sender": {
       "platform_user_id": "WEB:v_abc123...",
       "platform_type": "web",
       "display_name": "Website Visitor"
     },
     "tenant": {
       "tenant_id": "b2c4e6f8-1234-5678-9abc-def012345678"
     },
     "content": {
       "type": "text",
       "text": "How do I integrate Bakong?"
     }
   }
   ```
6. **G12.01-MT orchestrator** processes message and generates response
7. **Response returned** to widget as JSON:
   ```json
   {
     "success": true,
     "response": {
       "text": "Bakong integration involves several steps...",
       "buttons": [
         {"id": "learn_more:bakong", "label": "Learn More"},
         {"id": "contact:sales", "label": "Contact Sales"}
       ]
     }
   }
   ```
8. **Widget renders** response with text and clickable buttons

### Session Persistence

- **Visitor ID**: Stored in `localStorage`, persists across browser sessions
- **Session ID**: Stored in `sessionStorage`, cleared when tab closes
- **Conversation context**: Maintained by backend using visitor_id

---

## Security

### Origin Validation

The backend only accepts requests from whitelisted origins:
- `https://camfintech.com`
- `https://www.camfintech.com`
- `http://localhost:3000` (development only)

Requests from other origins receive a `403 Forbidden` response.

### Token Security

- The webhook token (`camfintech-embed-2026`) is public and visible in client-side code
- This is intentional - the token only grants permission to send chat messages
- No sensitive data is exposed through the widget API
- Rate limiting (100 req/min) prevents abuse

### Data Privacy

- Visitor IDs are anonymous (randomly generated)
- No personal information is collected unless voluntarily provided in chat
- Conversation data is stored in the OmniDM database for continuity
- GDPR/PDPA compliance: Add privacy notice to your site as needed

---

## Troubleshooting

### Widget not appearing

1. **Check browser console** for JavaScript errors
2. **Verify script loaded**: Network tab should show 200 for `omnidm-chat.min.js`
3. **Check token**: Ensure `token` in OmniDMConfig matches backend configuration

### CORS errors

```
Access to fetch blocked by CORS policy
```

**Solution**: Ensure your domain is in the `allowed_origins` list. Contact admin to add new domains.

### Messages not sending

1. **Check network tab** for failed requests to `/webhook/platform/embed/incoming`
2. **Verify origin**: Request origin must match allowed origins
3. **Check token**: 404 response means token not recognized

### Widget styling conflicts

The widget uses isolated CSS with prefixed class names. If conflicts occur:
1. Check for global CSS resets affecting the widget
2. The widget container has ID `omnidm-chat-container`
3. Use `!important` in custom overrides if needed

---

## Testing

### Manual Test

```bash
# Test API directly
curl -X POST 'https://automation.omnidm.ai/webhook/platform/embed/incoming?token=camfintech-embed-2026' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://camfintech.com' \
  -d '{"visitor_id": "v_test_001", "message": "Hello"}'

# Expected response:
# {"success": true, "response": {"text": "..."}, "message_id": "resp-..."}
```

### Test Invalid Token

```bash
curl -X POST 'https://automation.omnidm.ai/webhook/platform/embed/incoming?token=invalid-token' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://camfintech.com' \
  -d '{"visitor_id": "v_test", "message": "test"}'

# Expected response:
# {"success": false, "error": "UNKNOWN_TOKEN", "message": "Webhook token not recognized"}
```

---

## Support

For issues with the widget integration:
- **Technical issues**: Check this guide and troubleshooting section
- **Token/configuration changes**: Contact OmniDM admin
- **Feature requests**: Submit to OmniDM development team

---

## Changelog

| Date | Change |
|------|--------|
| 2026-01-04 | Initial deployment of CamFinTech widget |
