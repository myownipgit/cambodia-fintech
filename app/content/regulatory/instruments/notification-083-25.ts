import { RegulatoryInstrument } from '../types';

/** Verified 2026-08-31 against Andersen in Cambodia's Law Digest 2025. */
export const notification08325: RegulatoryInstrument = {
  slug: 'notification-083-25',
  number: '083/25',
  title:
    'Notification on the Implementation of the Prakas on Licensing and Management of Digital Asset Businesses',
  kind: 'notification',
  issuer: 'Securities and Exchange Regulator of Cambodia (SERC)',
  issued: '2025-12-31',
  force: 'in-force',
  sectors: ['Digital assets'],
  summary:
    'The one-line rule that decides how a digital asset business enters the Cambodian market: only sandbox graduates may apply for a licence, so the sandbox is the door rather than an alternative to it.',
  binds: 'Anyone intending to apply to SERC for a digital asset business licence.',
  requires: [
    'Only individuals or entities that have successfully completed the SERC FinTech Regulatory Sandbox are eligible to apply for a digital asset business licence.',
  ],
  doesNotCover: [
    'The licensing criteria themselves, which are set by Prakas 093.',
    'Admission to the sandbox. Being required to graduate from it says nothing about how a firm gets in, or how long it takes.',
    'Any activity outside the digital asset regime — this does not touch payments, e-money or banking licensing.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'Andersen in Cambodia',
      label: 'Law Digest 2025',
      url: 'https://kh.andersen.com/law-digest/law-digest-2025/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['prakas-093'],
  relatedContent: ['fintech-license-cambodia'],
};
