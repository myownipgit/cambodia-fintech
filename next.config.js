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

  // 301 redirects for content tree decommission (D2 Option E):
  //   selected /knowledge/* → /products/dasp where topically relevant
  //   retired routes with no topical replacement → /
  // Section indexes /knowledge, /insights, /use-cases → / (sections retired entirely)
  //
  // 2026-08-24 (GEO audit H7): nine of the → / redirects were repointed at real
  // destinations. The original "no good 1:1 topical replacement" note was true when
  // written, but the June /learn and /glossary build-out created those pages.
  // Redirect-to-root reads as a soft 404 and discards the source URL's authority.
  // /learn/fintech-license-cambodia deliberately still → / : it is the best-performing
  // legacy URL and has no clean match; the open decision is to rebuild it as a page.
  async redirects() {
    return [


      // Insights — pending staleness audit (2026 market data). Interim topical targets
      // where one exists; the four below have no live equivalent yet.
      { source: '/insights/cambodia-digital-payment-growth', destination: '/', permanent: true },
      { source: '/insights/sme-digital-readiness', destination: '/', permanent: true },
      { source: '/insights/asean-fintech-investment', destination: '/', permanent: true },
      { source: '/insights/bakong-adoption-metrics', destination: '/learn/how-bakong-works', permanent: true },
      { source: '/insights/caminvoice-rollout-impact', destination: '/learn/what-is-caminvoice', permanent: true },
      { source: '/insights/cambodia-vs-regional-fintech', destination: '/', permanent: true },

      // Use cases — being rewritten as labelled scenarios; the originals named
      // clients that did not exist, so they are not restored as-is.
      { source: '/use-cases/sme-compliance-automation', destination: '/products/dasp', permanent: true },
      { source: '/use-cases/cross-border-payment-optimization', destination: '/', permanent: true },
      { source: '/use-cases/digital-lending-platform', destination: '/', permanent: true },
      { source: '/use-cases/enterprise-bakong-integration', destination: '/learn/how-bakong-works', permanent: true },


      // Section indexes still retired (/knowledge is restored, so it is not here)
      { source: '/insights', destination: '/', permanent: true },
      { source: '/use-cases', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
