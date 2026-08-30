import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against Sithisak Law Office.
 *
 * The revenue-threshold exemption that circulates for this Sub-Decree
 * (businesses under about USD 62,500) is NOT stated by the source checked and
 * is deliberately absent. It may well be right; it is not verified.
 */
export const subDecree134ECommerce: RegulatoryInstrument = {
  slug: 'sub-decree-134-ecommerce',
  number: '134',
  title:
    'Sub-Decree on Classification, Formalities and Procedures for Issuance of Permits to E-Commerce Providers',
  kind: 'sub-decree',
  issuer: 'Council of Ministers',
  issued: '2020-08-27',
  force: 'in-force',
  sectors: ['E-commerce', 'Digital platforms'],
  summary:
    'The instrument that turns the Law on Electronic Commerce into an operating requirement — classifying who needs a permit and who needs a licence, and the procedure for each.',
  binds:
    'Persons and entities providing e-commerce services in Cambodia, classified by whether they are natural persons or legal entities.',
  requires: [
    'A two-track regime: an e-commerce permit for natural persons and sole proprietors, and an e-commerce licence for legal entities and branches of foreign companies.',
    'Sets the classification, formalities and procedures under which the Ministry of Commerce issues each.',
  ],
  doesNotCover: [
    'Financial licensing. Holding an e-commerce permit or licence does not authorise payment services — that needs an NBC licence under Prakas B14-017-161.',
    'The permit and licence durations and application detail, which are set by MOC Prakas 290.',
    'Penalties, which come from Joint Prakas 316.',
    'Digital assets, which sit under a different authority entirely.',
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
  relatedInstruments: ['prakas-290-ecommerce', 'joint-prakas-316-ecommerce', 'law-on-e-commerce'],
  relatedContent: [],
};
