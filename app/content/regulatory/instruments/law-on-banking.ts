import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31. Number and date are taken from the preamble to the NBC's
 * own Prakas B7-024-735 (official English translation), which cites it as
 * "Royal Kram NS/RKM/1199/13 of November 18, 1999 promulgating the Law on
 * Banking and Financial Institutions".
 *
 * Contents are stated narrowly and only where a primary text supports them.
 * The scope and penalty articles below are both load-bearing in the NBC's own
 * drafting, which is how they can be cited at all. Capital thresholds and
 * licence categories that circulate for this law trace to an industry tracker
 * and are deliberately absent.
 */
export const lawOnBanking: RegulatoryInstrument = {
  slug: 'law-on-banking',
  number: 'NS/RKM/1199/13',
  title: 'Law on Banking and Financial Institutions',
  kind: 'law',
  issuer: 'National Assembly of Cambodia',
  issued: '1999-11-18',
  force: 'in-force',
  sectors: ['Banking', 'Payments'],
  summary:
    'The parent statute for banking and financial activity in Cambodia. Almost every NBC Prakas a FinTech encounters is made under it, and its penalty article is the one the NBC reaches for when a Prakas is breached.',
  binds:
    'Banks and financial institutions operating in Cambodia, and the activities its Articles 2 to 4 define as banking and financial activity.',
  requires: [
    'Articles 2 to 4 define the scope of banking and financial activity. Prakas made under the law take their perimeter from those articles — the NBC’s cryptoasset Prakas states in its own Article 1 that it manages cryptoasset transactions "in accordance with Article 2 to 4" of this law.',
    'Article 52 carries the penalty regime. Where an NBC Prakas is breached, the sanctions applied are those of Article 52 — the cryptoasset Prakas points there expressly at its Article 22.',
  ],
  doesNotCover: [
    'Non-bank financial services. Securities, insurance, trusts, accounting and real estate sit under the NBFSA and its own 2021 law, not this one.',
    'Digital assets held for investment, which are securities activity under SERC.',
    'Commercial and e-commerce permissions, which belong to the Ministry of Commerce.',
    'Operational detail of any kind. This is a framework statute; the requirements a FinTech actually meets live in the Prakas made under it.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'National Bank of Cambodia',
      label:
        'Cited by number and date in the preamble to Prakas B7-024-735 (official English translation, PDF)',
      url: 'https://www.nbc.gov.kh/download_files/legislation/prakas_eng/20241226_PrakasonCryptoassetactivities-Eng.pdf',
      tier: 'primary',
    },
  ],
  relatedInstruments: ['prakas-b14-017-161', 'prakas-b7-024-735'],
  relatedContent: ['fintech-license-cambodia', 'cambodia-fintech-regulation'],
};
