import { RegulatoryInstrument } from '../types';

/**
 * THE NUMBER ON THIS INSTRUMENT MATTERS. Verified 2026-08-31.
 *
 * The research this section was built from listed the payments Prakas as
 * `B7-017-282`, titled "Management of Payment Service Providers". Both are
 * wrong. The NBC cites it in the preamble of its own cryptoasset Prakas as
 * "Prakas N° B14-017-161 P.K of June 14, 2017 on the Management of Payment
 * Service Institutions", the NBC hosts it under that number, and Cambodia's
 * National Trade Repository lists it under that title. No trace of B7-017-282
 * exists anywhere.
 *
 * Contents are stated conservatively: the NBC publishes only a Khmer text at
 * this number, so what appears below is what the National Trade Repository's
 * English record states. Capital tiers are deliberately absent — the figures in
 * circulation trace to an industry tracker, not to the instrument.
 */
export const prakasB14017161: RegulatoryInstrument = {
  slug: 'prakas-b14-017-161',
  number: 'B14-017-161 P.K',
  title: 'Prakas on the Management of Payment Service Institutions',
  kind: 'prakas',
  issuer: 'National Bank of Cambodia',
  issued: '2017-06-14',
  effective: '2017-06-14',
  force: 'in-force',
  // Added during R2: the National Trade Repository record states "This Prakas
  // shall have effect from this signing date", signed by Governor Chea Chanto.
  forceNote: 'Takes effect from its signing date.',
  sectors: ['Payments', 'E-money'],
  summary:
    'The licensing regime for non-bank payment service institutions in Cambodia — the instrument a payments business, e-wallet or remittance operator is licensed under, and the foundation the later Bakong and cryptoasset rules are built on top of.',
  binds:
    'Legal persons intending to provide payment services in Cambodia. Any such person must hold an NBC licence.',
  requires: [
    'A licence from the National Bank of Cambodia before conducting payment services in Cambodia.',
    'Covers services enabling deposit and withdrawal of money in payment accounts; carrying out payment transactions including transfers of funds; issuing payment instruments including electronic money; domestic and overseas transfers; and other payment services as the NBC defines.',
    'Stated purposes are the safety and reliability of payment services, fair competition and innovation, and public confidence in payment services.',
  ],
  doesNotCover: [
    'Banking activity. A payment service institution licence is not a banking licence, and the two sit under different parts of the Law on Banking and Financial Institutions.',
    'Cryptoasset services. Those were brought in separately by Prakas B7-024-735 in December 2024, which added a CASP licence and cross-refers back to this Prakas.',
    'Digital assets held for investment. That is SERC territory under Prakas 093.',
    'E-commerce permits and licences, which are a Ministry of Commerce matter under Sub-Decree 134 and Prakas 290 and are commercial rather than financial.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'National Bank of Cambodia',
      label: 'Prakas NBC14-017-161 on Payment Service Institutions — Khmer text (PDF)',
      url: 'https://www.nbc.gov.kh/download_files/legislation/prakas_kh/Prakas_NBC14_017_161_Payment-Service-Provider_Khmer.pdf',
      tier: 'primary',
    },
    {
      publisher: 'Cambodia National Trade Repository',
      label: 'Prakas on the Management of Payment Service Institution — official record',
      url: 'https://cambodiantr.gov.kh/en/document/?title=prakas-on-the-management-of-payment-service-institution',
      tier: 'primary',
    },
    {
      publisher: 'National Bank of Cambodia',
      label:
        'Cited by number and title in the preamble to Prakas B7-024-735 (official English translation, PDF)',
      url: 'https://www.nbc.gov.kh/download_files/legislation/prakas_eng/20241226_PrakasonCryptoassetactivities-Eng.pdf',
      tier: 'primary',
    },
  ],
  relatedInstruments: ['prakas-b7-024-735', 'law-on-banking'],
  relatedContent: ['how-bakong-works', 'how-to-accept-khqr', 'fintech-license-cambodia'],
};
