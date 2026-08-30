import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against the full English text (24 pages, Open Development
 * Cambodia). Number, title and the enactment dates below were read from the
 * Royal Kram front matter.
 *
 * `effective` is deliberately absent. A commencement date circulates for this
 * law but it was not visible in the pages checked, and an unstated effective
 * date is not a same-day one.
 */
export const lawOnECommerce: RegulatoryInstrument = {
  slug: 'law-on-e-commerce',
  number: 'NS/RKM/1119/017',
  title: 'Law on Electronic Commerce',
  kind: 'law',
  issuer: 'National Assembly of Cambodia',
  issued: '2019-11-02',
  force: 'in-force',
  forceNote:
    'Enacted by the National Assembly on 8 October 2019 and approved by the Senate on 18 October 2019, then promulgated by Royal Kram NS/RKM/1119/017.',
  sectors: ['E-commerce', 'Digital platforms', 'Electronic signatures'],
  summary:
    'The statute underneath Cambodia’s digital commerce framework — it gives legal effect to electronic records, contracts and signatures, and is the parent law for the e-commerce permit and licence regime.',
  binds:
    'Persons conducting commercial activity by electronic means in Cambodia, and the electronic records and signatures they rely on.',
  requires: [
    'Establishes the legal standing of electronic records, electronic contracts and electronic signatures.',
    'Provides the statutory basis on which the e-commerce permit and licence regime operates — the operational detail sits in Sub-Decree 134 and MOC Prakas 290.',
  ],
  doesNotCover: [
    'Financial licensing. Providing payment services still requires an NBC licence under Prakas B14-017-161; an e-commerce licence is a commercial permission, not a financial one.',
    'Personal data protection as a comprehensive regime. Cambodia has no enacted general data protection law; obligations sit in a patchwork rather than in this statute.',
    'Digital assets. Neither the investment regime (Prakas 093) nor the banking regime (Prakas B7-024-735) derives from this law.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'Open Development Cambodia',
      label: 'Law on Electronic Commerce — full English text (PDF)',
      url: 'https://data.opendevelopmentcambodia.net/en/dataset/01e7c661-fba8-4bed-820b-c7d5f1bf9f12/resource/b779a5aa-9ca9-47c8-8a12-55dd408e6171/download/ecommercelawen.pdf',
      tier: 'primary',
    },
  ],
  relatedInstruments: ['sub-decree-134-ecommerce', 'prakas-290-ecommerce'],
  relatedContent: [],
};
