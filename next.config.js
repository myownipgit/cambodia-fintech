/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ],
      },
    ];
  },

  // 301 redirects for content tree decommission (D2 Option E):
  //   selected /knowledge/* → /products/dasp where topically relevant
  //   all other retired routes → / (no good 1:1 topical replacement under DPI positioning)
  // Section indexes /knowledge, /insights, /use-cases → / (sections retired entirely)
  async redirects() {
    return [
      // Specific knowledge → DASP product page (closest DPI mapping)
      { source: '/knowledge/cambodia-gaap-architecture', destination: '/products/dasp', permanent: true },
      { source: '/knowledge/cambodia-fintech-regulation', destination: '/products/dasp', permanent: true },
      { source: '/knowledge/caminvoice-technical-compliance', destination: '/products/dasp', permanent: true },
      { source: '/knowledge/cambodia-scf-opportunity', destination: '/products/dasp', permanent: true },

      // Other knowledge → homepage (no clear topical match under DPI positioning)
      { source: '/knowledge/bakong-technical-integration', destination: '/', permanent: true },
      { source: '/knowledge/cambodia-digital-identity', destination: '/', permanent: true },
      { source: '/knowledge/cambodia-payment-ecosystem', destination: '/', permanent: true },
      { source: '/knowledge/asean-digital-economy-comparison', destination: '/', permanent: true },

      // Insights → homepage (Phase 7 follow-up: migrate publication-shaped pieces to riel.report)
      { source: '/insights/cambodia-digital-payment-growth', destination: '/', permanent: true },
      { source: '/insights/sme-digital-readiness', destination: '/', permanent: true },
      { source: '/insights/asean-fintech-investment', destination: '/', permanent: true },
      { source: '/insights/bakong-adoption-metrics', destination: '/', permanent: true },
      { source: '/insights/caminvoice-rollout-impact', destination: '/', permanent: true },
      { source: '/insights/cambodia-vs-regional-fintech', destination: '/', permanent: true },

      // Use cases → homepage (pre-logo discipline per DPI vault 57)
      { source: '/use-cases/sme-compliance-automation', destination: '/products/dasp', permanent: true },
      { source: '/use-cases/cross-border-payment-optimization', destination: '/', permanent: true },
      { source: '/use-cases/digital-lending-platform', destination: '/', permanent: true },
      { source: '/use-cases/enterprise-bakong-integration', destination: '/', permanent: true },

      // Retired learn pages → homepage
      { source: '/learn/cambodia-fintech-landscape', destination: '/', permanent: true },
      { source: '/learn/supply-chain-finance-cambodia', destination: '/', permanent: true },
      { source: '/learn/compliance-as-a-service', destination: '/products/dasp', permanent: true },
      { source: '/learn/fintech-license-cambodia', destination: '/', permanent: true },
      { source: '/learn/cambodia-aml-requirements', destination: '/products/dasp', permanent: true },
      { source: '/learn/cross-border-payments-bakong', destination: '/', permanent: true },

      // Section indexes retired entirely
      { source: '/knowledge', destination: '/', permanent: true },
      { source: '/insights', destination: '/', permanent: true },
      { source: '/use-cases', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
