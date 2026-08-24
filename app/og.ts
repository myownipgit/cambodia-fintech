// Shared Open Graph / Twitter card image.
//
// `app/opengraph-image.tsx` generates the site's social card via the Next.js file
// convention, and routes that do NOT declare their own `openGraph` block inherit it
// automatically (/, /glossary, /learn). A route that DOES declare `openGraph` loses
// that inheritance unless it sets `images` explicitly — which is why 21 of 24 routes
// shipped with no og:image until 2026-08-24. Reference this constant from every
// route that defines its own `openGraph`/`twitter` metadata.
//
// The `alt` text is kept in sync with `export const alt` in app/opengraph-image.tsx.
export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "CamFinTech — Cambodia DPI Approval-Navigation & Compliance. Fee-only. Never hold client funds. Never operate a rail.",
};
