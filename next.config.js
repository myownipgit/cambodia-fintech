const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin workspace root — Next 15 auto-detects the outermost lockfile, which
  // can be a stray ~/package-lock.json unrelated to this project.
  outputFileTracingRoot: path.join(__dirname),

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  // Security headers — closes audit L1 (HSTS preload) and adds defence-in-depth.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.google-analytics.com https://lh3.googleusercontent.com; connect-src 'self' https://www.google-analytics.com; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'",
          },
        ],
      },
    ];
  },

  // No redirects. This list is deliberately empty as of 2026-08-31.
  //
  // History, because the empty array is the end of an argument rather than an
  // absence of one. The June 2026 content decommission (c5b5201) retired 24
  // article URLs and pointed them here; eleven went to `/`. Google treats a
  // topical URL 301'd to a homepage as a soft 404 and discards its authority, so
  // those eleven contributed nothing while looking like they had been handled.
  //
  // The 62010 pivot removed them by restoring or rewriting the pages instead:
  // Phase A (8ddc1d9) brought back /knowledge/* and six /learn/* articles at
  // their original URLs, Phase A5 (3997d6c) the six /insights/*, and Phase A4
  // rewrote the four /use-cases/* as labelled engagement scenarios. A live 200 at
  // the original URL preserves far more than any redirect can.
  //
  // If you are about to add a redirect to `/` here, restore or write the page
  // instead — that is the whole lesson of the preceding two months.
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
