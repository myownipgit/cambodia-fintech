import Link from 'next/link';

const services = [
  { name: 'Compliance as a Service', href: '/#services', icon: 'verified' },
  { name: 'Payment Gateway Integration', href: '/#services', icon: 'payments' },
  { name: 'Core Banking Modernization', href: '/#services', icon: 'account_balance' },
  { name: 'Lending & Credit Scoring', href: '/#services', icon: 'trending_up' },
  { name: 'API Development', href: '/#services', icon: 'api' },
  { name: 'Cybersecurity & Privacy', href: '/#services', icon: 'shield' },
];

export default function RelatedServices() {
  return (
    <section className="my-8 p-6 bg-card rounded-xl border border-line">
      <h2 className="text-lg font-semibold text-navy mb-3">
        How CamFinTech Can Help
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {services.map((service) => (
          <a
            key={service.name}
            href={service.href}
            className="flex items-center gap-2 text-sm text-navy/80 hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4 transition-colors"
          >
            <span className="material-symbols-outlined text-teal text-lg" aria-hidden="true">{service.icon}</span>
            {service.name}
          </a>
        ))}
      </div>
      <Link
        href="/#contact"
        className="inline-block mt-4 px-4 py-2 bg-teal text-navy font-medium rounded-lg hover:bg-teal/90 transition-colors text-sm"
      >
        Book a Consultation
      </Link>
    </section>
  );
}
