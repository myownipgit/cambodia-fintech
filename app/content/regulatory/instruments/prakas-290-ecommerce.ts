import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against Sithisak Law Office.
 *
 * Correction carried here: the research this section was built from described a
 * flat "3-year licensing and permit regime". The two are different instruments
 * with different durations and different holders — permit 2 years for natural
 * persons, licence 3 years for legal entities and foreign branches.
 */
export const prakas290ECommerce: RegulatoryInstrument = {
  slug: 'prakas-290-ecommerce',
  number: '290',
  title: 'Prakas on the Granting of E-Commerce Permits or Licences',
  kind: 'prakas',
  issuer: 'Ministry of Commerce',
  issued: '2020-10-09',
  force: 'in-force',
  sectors: ['E-commerce', 'Digital platforms'],
  summary:
    'The Ministry of Commerce rules for actually obtaining an e-commerce permit or licence — including the distinction most often got wrong, that permits run two years and licences three.',
  binds:
    'Natural persons and sole proprietors (permit), and legal entities and branches of foreign companies (licence), providing e-commerce services in Cambodia.',
  requires: [
    'An e-commerce permit for natural persons and sole proprietors, valid for two years.',
    'An e-commerce licence for legal entities and branches of foreign companies, valid for three years.',
    'Operating without the applicable permit or licence exposes the operator to a ban on operating and to monetary penalties.',
  ],
  doesNotCover: [
    'Any financial permission. An e-commerce licence is a commercial authorisation; taking payments as a service still requires an NBC licence.',
    'The classification of who needs which, which comes from Sub-Decree 134.',
    'The specific penalty amounts, which are set by Joint Prakas 316.',
    'Data protection obligations, which Cambodia has not yet consolidated into a general law.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'Sithisak Law Office',
      label:
        'Legal Compliance Alert: reminder on applying for permits or licences for e-commerce',
      url: 'https://sithisak-lawoffice.com/resource-legals-news/legal-compliance-alert-reminder-on-the-applying-for-permits-or-licenses-for-e-commerce/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['sub-decree-134-ecommerce', 'joint-prakas-316-ecommerce', 'law-on-e-commerce'],
  relatedContent: [],
};
