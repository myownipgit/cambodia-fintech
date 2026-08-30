import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against Rajah & Tann Asia. The research this section was
 * built from listed this instrument with no number and only a year; both the
 * number and the exact date come from the verification pass.
 */
export const prakas004TrusteeEthics: RegulatoryInstrument = {
  slug: 'prakas-004-trustee-ethics',
  number: '004',
  title: 'Prakas on the Code of Professional Ethics for Trustees',
  kind: 'prakas',
  issuer: 'Non-Bank Financial Services Authority (Trust Regulator)',
  issued: '2026-01-06',
  force: 'in-force',
  sectors: ['Trusts', 'Fiduciary services'],
  summary:
    'The conduct standard for licensed trustees — independence, confidentiality, conflict disclosure, segregation of trust accounts, and a seven-working-day duty to report irregularities.',
  binds: 'All trustees licensed by the Trust Regulator in Cambodia.',
  requires: [
    'Operating with honesty, integrity and independence, and maintaining professional confidentiality.',
    'Mechanisms for implementing trustor instructions promptly, and verification of authorised individuals before executing orders.',
    'Independent monitoring of transactions.',
    'Opening trust accounts at licensed commercial banks.',
    'Maintaining accurate accounting records, and notifying the regulator of irregularities within seven working days.',
    'Disclosing conflicts of interest and any benefit received from third parties.',
    'Explaining the terms of the trust deed to the trustor before providing services.',
    'Administrative fines for breach reported in the range of approximately USD 250 to USD 50,000.',
  ],
  doesNotCover: [
    'Who may become a trustee, or the capital required to be licensed as one — those sit under the Law on Trust and the Trust Regulator’s licensing rules.',
    'Tax treatment of trust income or trustee remuneration, which is MEF Prakas 192.',
    'The conduct of unlicensed persons holding assets for others. This binds licensed trustees.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'Rajah & Tann Asia',
      label: 'Prakas on the Code of Professional Ethics for Trustees',
      url: 'https://www.rajahtannasia.com/viewpoints/prakas-on-the-code-of-professional-ethics-for-trustees/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['law-on-trust', 'prakas-192-trust-tax'],
  relatedContent: [],
};
