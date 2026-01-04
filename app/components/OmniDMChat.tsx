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

// Helper function to open chat from other components
export function openChat(message?: string) {
  if (window.OmniDM) {
    window.OmniDM.open();
    if (message) {
      window.OmniDM.sendMessage(message);
    }
  }
}
