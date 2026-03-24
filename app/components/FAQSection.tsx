'use client';

import { useState } from 'react';
import { FAQ } from '@/app/content/types';

export default function FAQSection({ faqs, pageUrl }: { faqs: FAQ[]; pageUrl: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">
        Frequently Asked Questions
      </h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-border-light dark:border-border-dark rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-text-light dark:text-text-dark hover:bg-primary/5"
              aria-expanded={openIndex === i}
            >
              <span>{faq.question}</span>
              <span className="material-symbols-outlined text-primary ml-2 transition-transform duration-200"
                style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                expand_more
              </span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-text-light/80 dark:text-text-dark/80">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
