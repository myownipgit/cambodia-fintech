import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against the official portal at fintech.fsa.gov.kh.
 *
 * `force: 'non-binding'` is the honest classification. A development policy
 * creates no obligation on any private business — but it shapes what regulators
 * approve, which is why it earns a page rather than being left out. It is
 * emitted as CreativeWork, not Legislation.
 *
 * The policy's own definition of "digital asset" is frequently quoted, including
 * in the research this section was built from. It is NOT reproduced here: the
 * definition sits inside the linked PDF, which was not read. Cite the document,
 * not a summary of it.
 */
export const fintechDevelopmentPolicy: RegulatoryInstrument = {
  slug: 'fintech-development-policy',
  number: null,
  title: 'Cambodia Financial Technology Development Policy 2023-2028',
  kind: 'policy',
  issuer: 'Financial Services Authority — FinTech Center',
  issued: '2023-01-01',
  force: 'non-binding',
  forceNote:
    'A development policy, not a binding instrument. It creates no obligation on a private business, but it sets the direction regulators are working to and informs discretionary decisions such as sandbox admission.',
  sectors: ['FinTech policy', 'Digital assets', 'Financial inclusion'],
  summary:
    'The national FinTech policy running to 2028 — the document that signals where Cambodian regulation is heading, and the reference point later instruments are drafted against.',
  binds:
    'Nobody, directly. It is government policy rather than law. Its practical weight is in how regulators exercise discretion.',
  requires: [
    'States the policy direction as developing financial technology through enhanced financial inclusion, maintenance of financial sector stability, and promotion of financial innovation, in support of Cambodia’s digital economy.',
    'Published by the FinTech Center of the General Secretariat of the Financial Services Authority, with the full policy document available from the official portal.',
  ],
  doesNotCover: [
    'Any enforceable obligation. Nothing in a development policy can be breached.',
    'Licensing requirements, which are set by the Prakas made under the relevant law.',
    'A guarantee of what will be enacted. The policy signals direction; the instruments that follow set the rules.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'Financial Services Authority (FSA), Cambodia',
      label: 'Cambodia FinTech Development Policy — official portal and full document',
      url: 'https://fintech.fsa.gov.kh/cambodia-fintech-development-policy?lang=en',
      tier: 'primary',
    },
  ],
  relatedInstruments: [],
  relatedContent: ['cambodia-fintech-landscape'],
};
