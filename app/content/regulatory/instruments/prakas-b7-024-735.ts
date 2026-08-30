import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against the NBC's own official English translation
 * (8 pages, nbc.gov.kh). Every article reference below was read in that text.
 *
 * Note for future editors: the 5% / 3% CET1 figures are Article 16 verbatim.
 * The research this section was built from asserted them as a headline finding
 * while citing three sources, NONE of which stated them — they turned out to be
 * right, but nobody had checked. That is why this file cites the instrument.
 */
export const prakasB7024735: RegulatoryInstrument = {
  slug: 'prakas-b7-024-735',
  // The instrument is stamped "B7-024-735 Prokor" — "Prokor" being the Khmer
  // word for Prakas, which `kind` already records. The bare number is what is
  // cited everywhere and what a search will match, so that is the identifier.
  number: 'B7-024-735',
  title: 'Prakas on Transaction Related to Cryptoassets',
  kind: 'prakas',
  issuer: 'National Bank of Cambodia',
  issued: '2024-12-26',
  effective: '2024-12-26',
  force: 'in-force',
  forceNote:
    'Article 26 gives the Prakas effect from its signing date. Article 24 repeals all provisions contrary to it.',
  sectors: ['Banking', 'Payments', 'Digital assets'],
  summary:
    'Sets the terms on which Cambodian commercial banks and payment service institutions may hold cryptoasset exposures or act as cryptoasset service providers — permitting tokenised assets and qualifying stablecoins within hard capital limits, and barring unbacked cryptoassets from bank balance sheets entirely.',
  binds:
    'Commercial banks and payment service institutions under NBC supervisory authority that intend to hold cryptoasset exposures or provide cryptoasset services as CASPs (Article 2). It does not bind unlicensed persons.',
  requires: [
    'Classifies cryptoassets into Group 1a (tokenised traditional assets), Group 1b (stablecoins with an effective stabilisation mechanism) and Group 2 (everything else, including unbacked cryptoassets).',
    'Group 1b qualification is demanding: reserve assets at least equal to the aggregate peg value, minimal market and credit risk, reserves denominated and proportioned as the peg, value disclosed daily and composition at least weekly, redemption completable within five calendar days, and an issuer supervised by a central bank or supervisory authority (Article 6).',
    'Cryptoassets on permissionless ledgers cannot meet the Group 1 classification conditions (Article 6).',
    'Prior NBC approval is required before a bank takes cryptoasset exposure for its own account; providing cryptoasset services to customers requires a separate authorisation (Article 11). The NBC decides within 60 working days (Article 14).',
    'Article 12 bars commercial banks, for their own account, from issuing cryptoassets and from any direct or indirect Group 2 exposure — including derivatives whose underlying is a Group 2 asset.',
    'Article 16 caps exposures before risk-weighting: Group 1a at 5 percent of Common Equity Tier 1 capital, Group 1b at 3 percent of CET1.',
    'Prudential treatment follows the principle "same activities, same risks, same regulations" (Article 15). Quarterly reporting on the nature and value of exposures is required (Article 18).',
    'CASPs are prohibited from using customers’ cryptoassets for their own business purposes, from facilitating lending or staking of customer cryptoassets, from promoting cryptoassets as a means of payment for goods and services, and from advertising specific cryptoassets (Article 21).',
    'Fines under Article 23: KHR 500,000,000 per transaction for breaching Article 12; KHR 20,000,000 to KHR 500,000,000 for breaching the Article 16 thresholds; KHR 1,000,000 per day for reporting failures; KHR 3,000,000 per day for other breaches from the NBC’s corrective-action deadline.',
  ],
  doesNotCover: [
    'Digital assets held for investment purposes. That regime is Prakas 093, administered by SERC under the NBFSA — a different regulator with a different perimeter.',
    'The conduct of persons who are not NBC-supervised institutions. This Prakas governs what banks and payment service institutions may do, not what the public may hold.',
    'Licensing criteria for cryptoasset service providers. Article 19 requires a CASP licence from the NBC but states that the criteria and conditions are set in a separate Prakas.',
    'Authorisation requirements for banks offering cryptoasset services to customers — also deferred to a separate Prakas (Article 19).',
    'Any general legalisation of cryptoassets as a means of payment. Article 21 prohibits CASPs from promoting that use.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'National Bank of Cambodia',
      label: 'Prakas on Transaction Related to Cryptoassets — official English translation (PDF)',
      url: 'https://www.nbc.gov.kh/download_files/legislation/prakas_eng/20241226_PrakasonCryptoassetactivities-Eng.pdf',
      tier: 'primary',
    },
    {
      publisher: 'Rajah & Tann Asia',
      label: 'Prakas on Transactions Related to Cryptoassets — analysis',
      url: 'https://www.rajahtannasia.com/viewpoints/prakas-on-transactions-related-to-cryptoassets/',
      tier: 'commentary',
    },
    {
      publisher: 'HBS Law',
      label: 'Prakas on Transactions Related to Cryptoassets — update',
      url: 'https://hbslaw.asia/updates/prakas-on-transactions-related-to-cryptoassets/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['prakas-b14-017-161', 'law-on-banking'],
  relatedContent: ['cambodia-fintech-regulation', 'fintech-license-cambodia'],
};
