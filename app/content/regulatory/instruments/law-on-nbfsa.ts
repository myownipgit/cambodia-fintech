import { RegulatoryInstrument } from '../types';

/** Verified 2026-08-31 against TSM Law Group. */
export const lawOnNbfsa: RegulatoryInstrument = {
  slug: 'law-on-nbfsa',
  number: 'NS/RKM/0121/003',
  title:
    'Law on the Organization and Functioning of the Non-Bank Financial Services Authority',
  kind: 'law',
  issuer: 'National Assembly of Cambodia',
  issued: '2021-01-16',
  force: 'in-force',
  sectors: ['Non-bank finance', 'Securities', 'Insurance', 'Trusts'],
  summary:
    'The law that consolidated Cambodia’s non-bank financial regulators under one authority — and therefore the reason a digital asset business answers to SERC under the NBFSA rather than to the central bank.',
  binds:
    'The non-bank financial sectors it brings under NBFSA oversight, and the sector regulators that supervise them day to day.',
  requires: [
    'Establishes the NBFSA as an independent regulatory body integrating and overseeing the non-bank financial services sectors.',
    'Brings six sectors under that umbrella: insurance and private pensions; securities and exchange; social security; trusts; accounting and auditing; and real estate and pawnshops.',
    'States aims of effectiveness, transparency and stability in regulation and supervision, uniform regulatory standards, consumer protection, and support for FinTech development.',
  ],
  doesNotCover: [
    'Banking, payments and e-money, which remain with the National Bank of Cambodia. The split between the two is the first thing a FinTech needs to establish about itself.',
    'The operating rules of any sector. Those come from the Prakas each sector regulator issues — Prakas 093 for digital assets, the trust instruments for fiduciary services.',
    'Tax, commerce or telecommunications, which sit with other ministries entirely.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'TSM Law Group',
      label:
        'Law on the Organization and Functioning of the Non-Bank Financial Services Authority',
      url: 'https://tsmlawgroup.com.kh/law-on-the-organization-and-functioning-of-the-non-bank-financial-services-authority/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['prakas-093', 'law-on-trust', 'law-on-banking'],
  relatedContent: ['cambodia-fintech-regulation'],
};
