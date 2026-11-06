import { ArticleContent } from '../types';

/*
 * Revised 2026-11-07 (CamInvoice correction pass; see
 * insights/caminvoice-rollout-impact.ts for the fuller record).
 *
 * CamInvoice-as-GDT claims, all FALSE and removed. MEF Prakas 075 of
 * 22 January 2025, Article 4, makes the MEF's General Department of Digital
 * Economy (GDDE), not the GDT, the secretariat that manages, operates,
 * supervises and monitors the Cambodia E-Invoicing System; the GDT appears in
 * none of the four MEF documents (Prakas 075; Circulars 003, 012, 017):
 * - "administering CamInvoice e-invoicing" (description), "responsible for
 *   administering the CamInvoice mandatory e-invoicing system" (lead), "The
 *   GDT also operates the CamInvoice mandatory e-invoicing system" (FAQ 1),
 *   "every invoice is cleared by the GDT in real-time" (FAQ 2), "The
 *   centerpiece of this transformation is CamInvoice" (section 1).
 * - "issue every invoice through the CamInvoice platform according to the
 *   phased rollout schedule", the "CamInvoice Impact" table column ("real-time
 *   invoice clearance required", "auto-populates returns", "linked to cleared
 *   invoice records", "registration linked to CamInvoice access"), "UBL XML",
 *   "the 2027 deadline for universal SME compliance", "the GDT ... is working
 *   with technology providers to offer simplified CamInvoice access tools" and
 *   "penalties for invoice non-compliance under CamInvoice regulations" — no
 *   primary; the B2B timeline and universality are not in the MEF documents.
 *
 * Unsourced GDT figures also removed (none was read in a fetched primary on
 * this page; restore only from the Law on Taxation or a GDT instrument, with
 * where it was read recorded in `claims`):
 * - VAT 10%; corporate income tax 20% (standard rate); withholding tax 4-15%;
 *   patent tax USD 300-3,000 a year; filing frequencies in the table
 *   (monthly / annual with quarterly prepayment).
 * - Late-filing penalties "typically 10-25% of tax due"; interest 1.5% a month.
 * - "real regime (large and medium) and estimated regime (small)" — taxpayer
 *   classification stated without a source and possibly out of date. Removed.
 * - "tax payment through E-Payment integration with Bakong" — the Bakong link
 *   is unsourced; the GDT home page lists e-Payment but not Bakong.
 * - "dramatically reduces the tax gap / opportunities for tax evasion" — hype.
 *
 * Kept: the GDT's tax role in qualitative terms, and its e-Tax Portal,
 * e-Filing, e-Payment and registration services, which appear on the GDT home
 * page (tax.gov.kh/en, fetched 2026-11-06). The "Tax Compliance Programmes"
 * section offered tax structuring, transfer pricing and VAT registration —
 * reserved work for licensed tax agents — and has been rewritten.
 */
export const gdt: ArticleContent = {
  slug: 'gdt',
  title: 'What is the General Department of Taxation (Cambodia)?',
  description: 'The General Department of Taxation (GDT) is Cambodia\'s tax administration under the Ministry of Economy and Finance, responsible for tax registration, filing, collection and compliance. It does not operate CamInvoice, which sits with the MEF\'s General Department of Digital Economy.',
  type: 'glossary',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-11-07',
  readingTime: 2,
  schema: 'DefinedTerm',
  relatedSlugs: ['caminvoice', 'nbc', 'supply-chain-finance'],
  lead: 'The General Department of Taxation (GDT) is Cambodia\'s national tax administration under the Ministry of Economy and Finance, responsible for taxpayer registration, the filing and collection of taxes including value-added tax (VAT) and corporate income tax, and tax compliance. It is a separate department from the MEF\'s General Department of Digital Economy, which operates the CamInvoice e-invoicing system.',
  // Claims removed 2026-08-31. This array previously carried figures attributed
  // to named institutional reports with no URL, access date or page reference.
  // A verified sample was wrong more often than not — including a Cambodian FATF
  // mutual evaluation that never took place, and citations to bodies that do not
  // exist under the names given. Restore an entry only when its figure has been
  // read in a fetched primary, on the same evidence bar as app/content/regulatory,
  // and record where it was read. See vault ADR-007.
  claims: [],
  sources: [
    { publisher: 'General Department of Taxation', label: 'Prakas index (Khmer)', url: 'https://www.tax.gov.kh/kh/prakas', tier: 'primary' },
    { publisher: 'General Department of Taxation', label: 'Official site (home page)', url: 'https://www.tax.gov.kh/en', tier: 'primary' },
    { publisher: 'Ministry of Economy and Finance', label: 'Prakas 075 on the launch of the Cambodia E-Invoicing System (PDF, Khmer, Open Development Cambodia copy)', url: 'https://data.opendevelopmentcambodia.net/en/dataset/a57a86ff-1c53-481e-a4f0-8b32fe96b6cf/resource/e433f7a7-0bd0-4407-8d58-c5f346be20dd/download/mef_prakas-075_launching-of-cambodia-e-invoicing-system_kh_2025.pdf', tier: 'primary' },
  ],
  sourcesAsAt: '2026-11-06',
  faqs: [
    { question: 'What is the GDT and what taxes does it administer?', answer: 'The General Department of Taxation (GDT) is Cambodia\'s tax administration, operating under the Ministry of Economy and Finance. It administers the taxes set by Cambodia\'s tax law, including value-added tax (VAT), corporate income tax, withholding tax, specific tax and patent tax, and manages taxpayer registration, filing, audit and enforcement. Current rates and obligations are set in the law and the GDT\'s own instruments, which are the place to read them.' },
    { question: 'Does the GDT operate CamInvoice?', answer: 'No. CamInvoice, the Cambodia E-Invoicing System, was launched by MEF Prakas 075 of 22 January 2025, which makes the MEF\'s General Department of Digital Economy the secretariat that manages, operates and monitors it. The GDT is not named in the Prakas or in the implementing circulars. The circulars do give strengthening compliance with tax regulations as one of the system\'s purposes, and the Prakas annex sets out what a tax invoice must contain.' },
    { question: 'What are the penalties for non-compliance with GDT requirements?', answer: 'Penalties and interest for late or incorrect filing and payment are set in Cambodia\'s tax law and the GDT\'s instruments, and this page does not restate them. A business with a question about its own position should take it to a licensed tax agent.' },
  ],
  sections: [
    {
      heading: 'The GDT\'s Digital Services',
      content: 'Much of the GDT\'s interaction with taxpayers now runs online. Its website lists an e-Tax Portal, e-Filing for tax returns, e-Payment for paying tax, and registration services, and it publishes its Prakas, notifications and training courses on these systems.\n\nCamInvoice is not one of these services. It is the MEF\'s e-invoicing platform, operated by the General Department of Digital Economy, and its first phase covers suppliers invoicing the budget entities of designated ministries.',
    },
    {
      heading: 'Tax Obligations for Businesses in Cambodia',
      content: 'Businesses operating in Cambodia, domestic and foreign-owned, register with the GDT and file and pay the taxes that apply to them. Which taxes, how often they are filed, and at what rates depend on the business\'s activity and classification, and are set in the tax law and the GDT\'s instruments. Those documents, read in their current form, are the reliable guide; this page does not restate rates or deadlines.\n\nWhere a business is also a supplier to a ministry covered by CamInvoice Phase 1, it has a separate obligation, set by the MEF\'s circulars, to invoice that ministry through the e-invoicing system.',
    },
    {
      heading: 'Where CamFinTech\'s Work Sits',
      content: 'Tax advice, tax structuring and representation before the GDT are reserved work, and belong with a licensed tax agent. CamFinTech\'s work is on the systems side: building the client side of integrations between a business\'s accounting or ERP system and government platforms such as CamInvoice, for a fee, handed over for the business to operate. The business remains the taxpayer, and its registration, filings and tax positions are its own.',
    },
  ],
};
