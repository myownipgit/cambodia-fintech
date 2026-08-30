import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against three independent firm analyses — DFDL, Rajah &
 * Tann and HBS Law — which agree on every material fact below. No primary text
 * was located; the NBFSA does not appear to publish an English translation.
 * Statements are therefore confined to what at least one of the three states
 * expressly, and the governance-role list and the 15% guarantee deposit that
 * circulate elsewhere are omitted because none of the three carried them.
 */
export const prakas093: RegulatoryInstrument = {
  slug: 'prakas-093',
  number: '093',
  title: 'Prakas on the Licensing and Management of Digital Asset Business',
  kind: 'prakas',
  issuer: 'Non-Bank Financial Services Authority (NBFSA)',
  issued: '2025-12-30',
  force: 'in-force',
  forceNote:
    'Operationalised by SERC Notification 083/25 the following day, which restricts applicants to graduates of the SERC FinTech Regulatory Sandbox.',
  sectors: ['Digital assets', 'Securities'],
  summary:
    'The licensing regime for digital asset businesses in Cambodia — administered by SERC, built for digital assets held as investments, and explicitly not reaching their use as a means of payment.',
  binds:
    'Businesses providing digital asset services in Cambodia for investment purposes, and the natural persons who act for them. Licences run two years initially and three years on renewal.',
  requires: [
    'A Digital Asset Service Provider (DASP) licence for the business, with permitted activities covering trading, wallet services, borrowing and lending, and asset management.',
    'A Digital Asset Agent (DAA) licence for natural persons acting for a DASP.',
    'Successful testing in the securities regulatory sandbox before a licence application — direct entry is not available.',
    'Minimum capital of KHR 40 billion (approximately USD 10 million) for trading, borrowing and lending, and management businesses; KHR 4 billion (approximately USD 1 million) for wallet businesses.',
    'Conversion between digital assets and money only through authorised payment settlement agents recognised by the SERC. A DASP may not perform the conversion itself.',
    'Notification to the regulator within 7 days where a qualified person is absent for 7 consecutive days without reason, or on receipt of their resignation.',
  ],
  doesNotCover: [
    'Digital assets used as a means of payment in Cambodia. The Prakas expressly excludes payment transactions involving digital or virtual assets — that space belongs to the National Bank of Cambodia, and unbacked cryptoassets remain barred from bank balance sheets under Prakas B7-024-735.',
    'What a commercial bank may hold. Bank exposure to cryptoassets is governed by the NBC, not by this Prakas.',
    'How the fiat leg actually settles. The Prakas requires an authorised settlement agent; it does not resolve how a DASP dealing in unbacked assets obtains banking support when banks are separately barred from holding those assets for their own account. That gap is real and unresolved — see the note below.',
    'Any activity outside investment purposes.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'DFDL',
      label: 'Cambodia: Prakas 093 on the Licensing and Management of Digital Asset Businesses',
      url: 'https://www.dfdl.com/insights/legal-and-tax-updates/cambodia-prakas-093-on-the-licensing-and-management-of-digital-asset-businesses/',
      tier: 'commentary',
    },
    {
      publisher: 'Rajah & Tann Asia',
      label: 'Prakas on the Issuance of Licence and Management of Digital Asset Business',
      url: 'https://www.rajahtannasia.com/viewpoints/prakas-on-the-issuance-of-licence-and-management-of-digital-asset-business/',
      tier: 'commentary',
    },
    {
      publisher: 'HBS Law',
      label: 'Digital Asset Licensing Management',
      url: 'https://hbslaw.asia/updates/digital-asset-licensing-management/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['notification-083-25', 'prakas-b7-024-735', 'law-on-nbfsa'],
  relatedContent: ['cambodia-fintech-regulation', 'fintech-license-cambodia'],
};
