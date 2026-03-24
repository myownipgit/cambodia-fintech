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
    <section className="my-8 p-6 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark">
      <h2 className="text-lg font-semibold text-text-light dark:text-text-dark mb-3">
        How CamFinTech Can Help
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {services.map((service) => (
          <a
            key={service.name}
            href={service.href}
            className="flex items-center gap-2 text-sm text-text-light/80 dark:text-text-dark/80 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-lg">{service.icon}</span>
            {service.name}
          </a>
        ))}
      </div>
      <a
        href="/#contact"
        className="inline-block mt-4 px-4 py-2 bg-primary text-text-light font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm"
      >
        Book a Consultation
      </a>
    </section>
  );
}
