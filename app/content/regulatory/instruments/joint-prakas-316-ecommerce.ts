import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against Sithisak Law Office. Absent from the research
 * this section was built from — surfaced during the verification pass.
 */
export const jointPrakas316ECommerce: RegulatoryInstrument = {
  slug: 'joint-prakas-316-ecommerce',
  number: '316',
  title: 'Joint Prakas on Penalties for Unauthorised E-Commerce Transactions',
  kind: 'joint-prakas',
  issuer: 'Ministry of Commerce and Ministry of Economy and Finance',
  issued: '2021-05-12',
  force: 'in-force',
  sectors: ['E-commerce'],
  summary:
    'What it costs to trade online in Cambodia without the permit or licence — the fine attached to the e-commerce regime, which the regime itself does not state.',
  binds: 'Persons conducting e-commerce transactions without the required permit or licence.',
  requires: [
    'Fines of KHR 10,000,000 (approximately USD 2,500) for unauthorised e-commerce transactions.',
  ],
  doesNotCover: [
    'Who needs a permit or licence in the first place — that is Sub-Decree 134 and Prakas 290.',
    'Financial-sector penalties, which come from the Law on Banking and Financial Institutions and the NBC’s own Prakas.',
    'Consumer-protection remedies, which arise separately.',
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
  relatedInstruments: ['sub-decree-134-ecommerce', 'prakas-290-ecommerce'],
  relatedContent: [],
};
