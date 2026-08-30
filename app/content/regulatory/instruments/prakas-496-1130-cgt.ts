import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against KPMG Cambodia and Emerhub.
 *
 * THIS IS THE ENTRY THE VERIFICATION PASS EXISTED FOR. The research this
 * section was built from stated a flat "20% CGT on asset disposals, In Force",
 * dated Prakas 1130 to "2026", and asserted in its executive summary that
 * capital gains on DIGITAL ASSETS are taxed at 20%.
 *
 * All three are wrong or unsupported. Prakas 496's effective dates were
 * suspended. Commencement has been deferred more than once. Immovable property
 * does not commence until 1 January 2027. And neither cited source mentions
 * cryptocurrency or digital assets at all — the crypto link exists only in the
 * research's own summary.
 *
 * `force: 'partially-in-force'` is the accurate value and maps to
 * schema.org/PartiallyInForce. Do not simplify it.
 */
export const prakas4961130Cgt: RegulatoryInstrument = {
  slug: 'prakas-496-1130-cgt',
  number: '1130 MEF.Prk.GDT (superseding 496 MEF.PRK)',
  title: 'Prakas on Capital Gains Tax',
  kind: 'prakas',
  issuer: 'Ministry of Economy and Finance',
  issued: '2025-12-31',
  force: 'partially-in-force',
  forceNote:
    'Commencement is phased and has been deferred repeatedly. Prakas 496 of 18 July 2025 was superseded by Prakas 1130 of 31 December 2025, and 496’s effective dates were suspended. Capital gains on assets other than immovable property apply from 1 January 2026; capital gains on immovable property do not apply until 1 January 2027. Check the current position before relying on any date here.',
  sectors: ['Taxation'],
  summary:
    'Cambodia’s capital gains tax — a 20 percent rate whose commencement has been postponed more than once, and which still does not reach immovable property until 2027.',
  binds: 'Taxpayers realising capital gains on the categories of capital asset the Prakas names.',
  requires: [
    'A flat 20 percent rate on net capital gains.',
    'Reported categories of capital asset are leases and subleases, investment assets such as shares, bonds and securities, goodwill, intellectual property, and foreign currency.',
    'Capital gains other than on immovable property apply from 1 January 2026; immovable property from 1 January 2027.',
    'A 14 percent withholding tax on retained earnings is reported as applying to certain transactions.',
  ],
  doesNotCover: [
    'Cryptocurrency or digital assets, which are not named in either source checked. A practice of treating tokens as intangible property is described in secondary commentary, but no instrument reviewed here says so — treat any assertion that CGT applies to digital assets as unsettled.',
    'Indirect share transfers, reported as a gap in Prakas 496 rather than a covered case.',
    'Immovable property before 1 January 2027.',
    'Any advice on a specific disposal. Tax positions are reserved work for a licensed tax agent.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'KPMG Cambodia',
      label: 'Technical Update January 2026 — New capital gains tax (CGT) Prakas',
      url: 'https://kpmg.com/kh/en/insights/2026/01/new-capital-gain-tax--cgt--prakas.html',
      tier: 'commentary',
    },
    {
      publisher: 'Emerhub',
      label: 'Capital Gains Tax in Cambodia — what foreign investors must know',
      url: 'https://emerhub.com/cambodia/capital-gains-tax-in-cambodia/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['prakas-192-trust-tax'],
  relatedContent: [],
};
