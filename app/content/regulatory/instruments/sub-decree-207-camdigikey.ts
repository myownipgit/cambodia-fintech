import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against the Open Development Cambodia legal record.
 * Re-read 2026-11-14 from ODC's English text (unofficial translation) to add
 * who leads and operates CamDigiKey, and how a business may use its eKYC:
 * Arts. 4-6, 15-16 and 18. Several site pages had named the Ministry of Post
 * and Telecommunications as operator; the Sub-Decree gives that role to the
 * MEF and the CamDX operator.
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
    'Sets out the mechanisms, principles and procedures for managing the Cambodia Digital Key, framed around security, accountability and transparency (Art. 1).',
    'The Ministry of Economy and Finance leads and manages CamDigiKey on behalf of the Royal Government (Art. 4).',
    'The operator of CamDX operates CamDigiKey on the Ministry’s behalf: it creates accounts, handles corrections and deletions, and may collect fees for eKYC authentication and data sharing (Art. 5).',
    'The Ministry of Interior supplies personal identification data to verify the creation of CamDigiKey accounts (Art. 6).',
    'A commercial company or association that wants to use CamDigiKey eKYC must be a member of CamDX, and an applied member must request permission from the CamDX operator (Arts. 15–16).',
    'The account owner must consent each time their data is used through CamDigiKey, and has the right to know how it is used (Art. 18).',
  ],
  doesNotCover: [
    'Any obligation on a private business to adopt CamDigiKey. Integration is a route to satisfying identity verification duties that arise elsewhere — chiefly under AML/CFT obligations — not a duty this sub-decree creates.',
    'The technical integration terms themselves, which are set by the platform operator rather than by this instrument.',
    'Personal data protection generally. Cambodia has no enacted comprehensive data protection law.',
  ],
  asAt: '2026-11-14',
  sources: [
    {
      publisher: 'Open Development Cambodia',
      label: 'Sub-decree No. 207 on the management of CamDigiKey platform — legal record (Khmer and English)',
      url: 'https://data.opendevelopmentcambodia.net/en/laws_record/sub-decree-no-207-on-the-management-of-camdigikey-platform',
      tier: 'primary',
    },
    {
      publisher: 'Open Development Cambodia',
      label: 'Sub-decree No. 207 on the management of CamDigiKey platform, unofficial English translation (PDF)',
      url: 'https://data.opendevelopmentcambodia.net/en/dataset/214f5476-6075-405a-8226-2d02b5504b56/resource/e95ace4a-57ec-4f90-936b-6629fdd2ae0f/download/rgc_sub-decree-207_the-management-of-camdigikey-platform_en.pdf',
      tier: 'primary',
    },
  ],
  relatedInstruments: [],
  relatedContent: ['what-is-camdigikey', 'camdigikey', 'cambodia-digital-identity', 'embedded-insurance'],
};
