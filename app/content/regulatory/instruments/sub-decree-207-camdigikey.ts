import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against the Open Development Cambodia legal record.
 *
 * Not present in the research this section was built from, and it should have
 * been: CamDigiKey is one of the four rails CamFinTech integrates against, and
 * this is the instrument that governs it.
 */
export const subDecree207CamDigiKey: RegulatoryInstrument = {
  slug: 'sub-decree-207-camdigikey',
  number: '207 ANKr.BK',
  title: 'Sub-Decree on the Management of the Cambodia Digital Key (CamDigiKey)',
  kind: 'sub-decree',
  issuer: 'Royal Government of Cambodia',
  issued: '2023-07-26',
  force: 'in-force',
  sectors: ['Digital identity', 'Digital government'],
  summary:
    'The instrument governing CamDigiKey, Cambodia’s national digital identity platform — the mechanisms, principles and procedures for its management, and therefore the legal footing under any eKYC integration that relies on it.',
  binds:
    'The management of the CamDigiKey platform, with the stated aim of ensuring security, accountability and transparency in its operation.',
  requires: [
    'Sets out the mechanisms, principles and procedures for managing the Cambodia Digital Key.',
    'Frames the platform’s management around security, accountability and transparency.',
  ],
  doesNotCover: [
    'Any obligation on a private business to adopt CamDigiKey. Integration is a route to satisfying identity verification duties that arise elsewhere — chiefly under AML/CFT obligations — not a duty this sub-decree creates.',
    'The technical integration terms themselves, which are set by the platform operator rather than by this instrument.',
    'Personal data protection generally. Cambodia has no enacted comprehensive data protection law.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'Open Development Cambodia',
      label: 'Sub-decree No. 207 on the management of CamDigiKey platform — legal record (Khmer and English)',
      url: 'https://data.opendevelopmentcambodia.net/en/laws_record/sub-decree-no-207-on-the-management-of-camdigikey-platform',
      tier: 'primary',
    },
  ],
  relatedInstruments: [],
  relatedContent: ['what-is-camdigikey', 'camdigikey', 'cambodia-digital-identity'],
};
