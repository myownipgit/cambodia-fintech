import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against Phnom Penh Post, The Star and IPS Cambodia.
 *
 * Date correction: the research this section was built from dated this
 * "8 August 2026". It was SIGNED on 8 July 2026 and made public on 10 August —
 * the research conflated the two.
 *
 * `force: 'non-binding'` because it creates no obligation on any private
 * business. It is binding on the ministries it constitutes, which the note
 * records. Emitted as CreativeWork, not Legislation.
 */
export const decisionVirtualAssetsWorkingGroup: RegulatoryInstrument = {
  slug: 'decision-virtual-assets-working-group',
  number: null,
  title:
    'Decision establishing the Inter-Ministerial Working Group on the Law on the Management of Virtual Assets / Digital Assets',
  kind: 'decision',
  issuer: 'Prime Minister of the Kingdom of Cambodia',
  issued: '2026-07-08',
  force: 'non-binding',
  forceNote:
    'Signed 8 July 2026 and made public on 10 August 2026. It constitutes a working group and binds the ministries that staff it; it creates no obligation on any private business and changes no existing rule.',
  sectors: ['Digital assets', 'Legislative pipeline'],
  summary:
    'The signal that Cambodia intends to replace its current patchwork of digital asset rules with a single law — worth watching precisely because nothing about it is binding yet.',
  binds:
    'Nobody in the private sector. It establishes a 26-member inter-ministerial working group, co-chaired by a secretary of state of the Ministry of Economy and Finance and a deputy governor of the National Bank of Cambodia.',
  requires: [
    'The working group is tasked with preparing and drafting the Law on the Management of Virtual Assets / Digital Assets and related legal instruments.',
    'It is to study existing Cambodian regulations alongside international law, regulatory systems and best practice.',
    'It is to hold regular internal meetings on drafting progress, run consultations with relevant partners, and invite recommendations.',
  ],
  doesNotCover: [
    'Anything currently in force. Prakas 093, Notification 083/25 and NBC Prakas B7-024-735 continue to apply unchanged until a new law is enacted.',
    'Any timetable. Neither a draft date nor an enactment date is set.',
    'What the eventual law will say. The formation of a drafting group is not a policy commitment on classifications, licensing or supervisory allocation.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'Phnom Penh Post',
      label: 'Cambodia moves toward regulating digital currency circulation',
      url: 'https://phnompenhpost.com/business/cambodia-moves-toward-regulating-digital-currency-circulation/',
      tier: 'commentary',
    },
    {
      publisher: 'IPS Cambodia',
      label: 'Cambodia digital assets regulation: new law planned',
      url: 'https://ips-cambodia.com/cambodia-digital-assets-regulation-new-law/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['prakas-093', 'prakas-b7-024-735'],
  relatedContent: [],
};
