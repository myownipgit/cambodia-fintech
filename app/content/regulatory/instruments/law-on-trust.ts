import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against the Trust Regulator's own English translation
 * (23pp, trustregulator.gov.kh). Articles 1-9 were read.
 *
 * The research this section was built from had this instrument wrong three
 * ways: as "Law on Trusts" (the title is singular), numbered NS/RKM/0819/014,
 * dated 2 August 2019. It is NS/RKM/0119/002, adopted by the National Assembly
 * on 13 December 2018 and promulgated in January 2019. The August 2019 date
 * belongs to a different instrument — the Sub-Decree on Trust Registration.
 *
 * Article 9 lists FOUR trust types. A widely-cited commentary lists five, adding
 * "financial trusts"; the primary text does not.
 */
export const lawOnTrust: RegulatoryInstrument = {
  slug: 'law-on-trust',
  number: 'NS/RKM/0119/002',
  title: 'Law on Trust',
  kind: 'law',
  issuer: 'National Assembly of Cambodia',
  issued: '2019-01-02',
  force: 'in-force',
  forceNote:
    'Adopted by the National Assembly on 13 December 2018 and reviewed by the Senate on 25 December 2018, then promulgated by Royal Kram NS/RKM/0119/002.',
  sectors: ['Trusts', 'Fiduciary services', 'Escrow'],
  summary:
    'The statute establishing trusts in Cambodia — the rules for creating, registering, managing and controlling them, and the foundation of the licensed fiduciary sector that escrow and asset-holding structures depend on.',
  binds:
    'Trusts established in the Kingdom of Cambodia, and their parties. Article 5 identifies three essential parties — settler, trustee and beneficiary — with others able to join, such as a contributor of the trust fund and a replacement settler.',
  requires: [
    'Article 9 divides trusts into four types: commercial, public, social and individual.',
    'Article 7: where a settler creates the trust, the settler must transfer property or funds to the trustee through a trust instrument certifying the specific purpose and confirming the beneficiary’s identity.',
    'Article 8: a trust takes effect for implementation when the trustee agrees in writing to accept the appointment.',
    'Article 6: the trust must have a legal subject and must not be contrary to public order.',
    'Minimum capital for legal-entity trustees is reported at KHR 6 billion for a public trust, KHR 4 billion commercial, KHR 2 billion social and KHR 600 million individual, with a security bond of 15 percent of minimum capital held at the National Bank of Cambodia. These figures come from professional commentary rather than the statute text and should be confirmed with the Trust Regulator.',
  ],
  doesNotCover: [
    'The professional conduct of trustees, which is set separately by Prakas 004 on the Code of Professional Ethics for Trustees.',
    'The tax treatment of trust income and distributions, which sits in MEF Prakas 192.',
    'Digital assets. Holding tokens in trust does not convert a trust into a digital asset business, nor exempt one from Prakas 093.',
    'Banking or payment activity. A trustee is not thereby licensed to take deposits or provide payment services.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'Trust Regulator, Cambodia',
      label: 'Law on Trust — Preah Reach Kram NS/RKM/0119/002, English translation (PDF)',
      url: 'https://www.trustregulator.gov.kh/storage/lawregulations/January2024/Ko8e0it5UbPMSXND7No2.pdf',
      tier: 'primary',
    },
    {
      publisher: 'BNG Legal',
      label: 'Types of Trusts, Trust Registration, and Trust Licenses under the Cambodian Trust Law',
      url: 'https://bnglegal.com/index.php/types-of-trusts-trust-registration-and-trust-licenses-under-the-cambodian-trust-law-2019-mar-2024/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['prakas-004-trustee-ethics', 'prakas-192-trust-tax', 'law-on-nbfsa'],
  relatedContent: [],
};
