import Link from 'next/link';

/**
 * Footer block on every article page. Rendered by ArticleLayout.
 *
 * Rewritten 2026-08-31. It had been shipping the six build-flavoured services
 * that were removed from the site on 2026-06-18 ("Payment Gateway Integration",
 * "Core Banking Modernization", "Lending & Credit Scoring", "API Development",
 * "Cybersecurity & Privacy") — none of which have existed as offerings since,
 * on the footer of every /learn, /glossary, /knowledge, /insights and
 * /use-cases page. Logged as NEW-M2 on 2026-08-29; the 62010 pivot was
 * predicted to sweep it up and did not.
 *
 * This list is the SRV taxonomy from the homepage grid (app/page.tsx, the
 * `#services` section), reproduced in full rather than sampled — sampling
 * would mean choosing favourites, and the omissions would drift out of step
 * the same way the old array did. `63_OBR…` §7 locks the 11-SRV numbering, so
 * if a service is added or renamed there, mirror it here.
 *
 * No icons. The Material Symbols ligature text sits in the DOM and is read by
 * text extractors even under aria-hidden — that is GEO finding H3, and putting
 * an icon next to each link produced "verifiedCompliance as a Service" style
 * contamination six times per article page. Do not reintroduce them here
 * without the inline-SVG replacement that H3 is waiting on.
 */
interface Service {
  id: string;
  name: string;
  /** Defaults to the homepage services anchor. Only SRV-11 has its own page. */
  href?: string;
  flagship?: boolean;
}

const serviceGroups: { group: string; services: Service[] }[] = [
  {
    group: 'Core Rail Integrations',
    services: [
      { id: 'SRV-01', name: 'CamDX / eKYC Enablement' },
      { id: 'SRV-02', name: 'Bakong / KHQR Integration' },
      { id: 'SRV-03', name: 'CamInvoice Readiness' },
      { id: 'SRV-04', name: 'CamInvoice SP-Enablement' },
    ],
  },
  {
    group: 'Strategic Services',
    services: [
      { id: 'SRV-05', name: 'Licensing-Readiness' },
      { id: 'SRV-06', name: 'Market-Entry Consulting' },
    ],
  },
  {
    group: 'Risk & Security',
    services: [
      { id: 'SRV-07', name: 'AML-Programme Design' },
      { id: 'SRV-08', name: 'Security / Pentesting' },
      { id: 'SRV-09', name: 'Data-Protection Protocols' },
      { id: 'SRV-11', name: 'DASP Approval-Readiness', href: '/products/dasp', flagship: true },
    ],
  },
  {
    group: 'Enablement',
    services: [{ id: 'SRV-10', name: 'Professional Training & Knowledge Transfer' }],
  },
];

export default function RelatedServices() {
  return (
    <section className="my-8 p-6 bg-card rounded-xl border border-line">
      <h2 className="text-lg font-semibold text-navy mb-4">
        How CamFinTech Can Help
      </h2>

      <div className="space-y-4">
        {serviceGroups.map(({ group, services }) => (
          <div key={group}>
            <p className="text-xs font-bold text-navy uppercase tracking-wider px-2 py-1 rounded bg-teal/10 inline-block mb-2">
              {group}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href ?? '/#services'}
                    className="text-sm text-navy/80 hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors"
                  >
                    {service.name}
                    {service.flagship && (
                      <span className="ml-1 text-xs text-navy/50">· flagship</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs text-navy/55 italic">
        Fee-only. We build the client-side integration ourselves, or bring in an
        accredited Service Provider as a disclosed sub-contract. We never hold
        client funds and never operate a rail.
      </p>

      <Link
        href="/#contact"
        className="inline-block mt-4 px-4 py-2 bg-teal text-navy-deep font-medium rounded-lg hover:bg-teal/90 transition-colors text-sm"
      >
        Book a Consultation
      </Link>
    </section>
  );
}
