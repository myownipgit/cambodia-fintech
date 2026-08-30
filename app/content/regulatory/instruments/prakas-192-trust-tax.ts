import { RegulatoryInstrument } from '../types';

/**
 * Verified 2026-08-31 against Tilleke & Gibbins.
 *
 * IMPORTANT correction carried in this file. The research this section was
 * built from described a "20% tax on trustee fees". There is no such rate.
 * The 20% is the ordinary income tax rate on the taxable income of legal
 * persons under Article 20 of the Law on Taxation; trustee fees are ordinary
 * deductible business expenses. Restating the general rate as a special levy
 * would misdescribe a tax obligation on a page a reader might act on.
 */
export const prakas192TrustTax: RegulatoryInstrument = {
  slug: 'prakas-192-trust-tax',
  number: '192',
  title: 'Prakas on Tax Rules and Procedures for Trust',
  kind: 'prakas',
  issuer: 'Ministry of Economy and Finance',
  issued: '2025-03-12',
  force: 'in-force',
  sectors: ['Trusts', 'Taxation'],
  summary:
    'How trust transactions are taxed in Cambodia — the treatment of trust income, the deductibility of trustee fees, and the withholding due when after-tax income is remitted to a non-resident.',
  binds: 'Trusts, trustees and the tax treatment of trust transactions in Cambodia.',
  requires: [
    'Income tax on the taxable income of legal persons applies at 20 percent under Article 20 of the Law on Taxation, with a progressive scale for individuals.',
    'Trustee fees are treated as ordinary deductible business expenses under standard Cambodian tax principles — there is no separate rate applied to them.',
    'Where after-tax income is remitted to a non-resident taxpayer, the trustee must record the remittance and pay withholding tax of 14 percent on the transaction.',
  ],
  doesNotCover: [
    'Whether a particular structure is a trust at all, or the licensing of trustees — both belong to the Law on Trust and the Trust Regulator.',
    'Trustee conduct standards, which are Prakas 004.',
    'Capital gains, which are dealt with separately under Prakas 496 and 1130.',
    'Any advice on how a specific arrangement should be treated. Tax positions are reserved work for a licensed tax agent, and this page is not one.',
  ],
  asAt: '2026-08-31',
  sources: [
    {
      publisher: 'Tilleke & Gibbins',
      label: 'Cambodia Issues New Tax Rules for Trust Operations',
      url: 'https://www.tilleke.com/insights/cambodia-issues-new-tax-rules-for-trust-operations/4/',
      tier: 'commentary',
    },
  ],
  relatedInstruments: ['law-on-trust', 'prakas-004-trustee-ethics', 'prakas-496-1130-cgt'],
  relatedContent: [],
};
