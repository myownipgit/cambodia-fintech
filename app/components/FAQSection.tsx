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
      <h2 className="text-xl font-semibold text-navy mb-4">
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
            className="border border-line rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-navy hover:bg-teal/5"
              aria-expanded={openIndex === i}
            >
              <span>{faq.question}</span>
              {/* Inline SVG, not a Material Symbols ligature. The ligature text
                  ("expand_more") stays in the DOM where text extractors read it,
                  and aria-hidden does not remove it — GEO finding H3. */}
              <svg
                className="ml-2 h-5 w-5 shrink-0 text-teal transition-transform duration-200"
                style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-navy/80">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
