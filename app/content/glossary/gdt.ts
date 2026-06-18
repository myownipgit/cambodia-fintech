import { ArticleContent } from '../types';

export const gdt: ArticleContent = {
  slug: 'gdt',
  title: 'What is the General Department of Taxation (Cambodia)?',
  description: 'The General Department of Taxation (GDT) is Cambodia\'s tax authority administering CamInvoice e-invoicing, VAT collection, and tax compliance for all registered businesses.',
  type: 'glossary',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-06-18',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['caminvoice', 'nbc', 'supply-chain-finance'],
  lead: 'The General Department of Taxation (GDT) is Cambodia\'s national tax authority under the Ministry of Economy and Finance, responsible for administering the CamInvoice mandatory e-invoicing system, collecting value-added tax (VAT), corporate income tax, and overseeing tax compliance for all registered businesses in Cambodia.',
  claims: [
    { stat: 'Cambodia\'s tax revenue collection reached approximately $4.5 billion in 2024, with the GDT targeting 20% growth through improved digital compliance tools including CamInvoice.', source: 'General Department of Taxation Cambodia', year: '2025' },
    { stat: 'The GDT has registered over 150,000 taxpaying businesses in its system, with SMEs accounting for more than 85% of registered entities.', source: 'General Department of Taxation Cambodia', year: '2024' },
    { stat: 'Digital tax administration systems in developing countries have demonstrated the ability to reduce compliance costs for businesses by 30-50% while increasing government revenue by 10-25%.', source: 'International Monetary Fund Fiscal Affairs', year: '2024' },
  ],
  faqs: [
    { question: 'What is the GDT and what taxes does it administer?', answer: 'The General Department of Taxation (GDT) is Cambodia\'s primary tax authority operating under the Ministry of Economy and Finance. The GDT administers value-added tax (VAT at 10%), corporate income tax (20% standard rate), withholding tax, specific tax on certain goods, and property tax. The GDT also operates the CamInvoice mandatory e-invoicing system and manages taxpayer registration, audit, and enforcement activities.' },
    { question: 'How does CamInvoice change GDT tax compliance?', answer: 'CamInvoice transforms GDT compliance from periodic self-reporting to real-time transaction visibility. Previously, businesses submitted monthly and annual tax returns that the GDT could only verify through audits. With CamInvoice, every invoice is cleared by the GDT in real-time, enabling automated VAT reconciliation, cross-matching of buyer and seller declarations, and immediate detection of discrepancies. This shift dramatically reduces the tax gap.' },
    { question: 'What are the penalties for non-compliance with GDT requirements?', answer: 'GDT penalties include late filing fees (typically 10-25% of tax due), interest on unpaid tax (1.5% per month), penalties for invoice non-compliance under CamInvoice regulations, and in severe cases, business license suspension. As CamInvoice becomes mandatory, failure to issue electronic invoices will carry specific financial penalties. CamFinTech navigates the readiness pathway and runs the compliance programme that keeps businesses out of the penalty zone — the underlying system build is coordinated with accredited Service Providers.' },
  ],
  sections: [
    {
      heading: 'GDT\'s Digital Transformation',
      content: 'The GDT has undergone significant digital modernization over the past decade, moving from paper-based tax administration to an increasingly digital operation. The centerpiece of this transformation is CamInvoice, which converts invoice issuance from an uncontrolled business activity into a government-supervised digital process.\n\nBeyond CamInvoice, the GDT has digitized taxpayer registration through the E-Registration system, monthly tax filing through the E-Filing portal, and tax payment through E-Payment integration with Bakong and commercial banks. This digital stack gives the GDT comprehensive real-time visibility into Cambodia\'s formal economy and dramatically reduces opportunities for tax evasion.',
    },
    {
      heading: 'Tax Obligations for Businesses in Cambodia',
      content: 'Understanding GDT requirements is essential for any business operating in Cambodia. The tax regime applies to both domestic and foreign-owned entities, with specific obligations varying by business size, sector, and taxpayer classification. The GDT categorizes taxpayers into real regime (large and medium) and estimated regime (small) categories, each with distinct filing and documentation requirements.\n\nCamInvoice compliance adds a new layer to these obligations. Businesses must not only calculate and pay taxes correctly but also issue every invoice through the CamInvoice platform according to the phased rollout schedule. Integration between accounting systems and CamInvoice is becoming a core business requirement rather than an optional technology upgrade.',
      table: {
        caption: 'Key GDT Tax Obligations for Businesses in Cambodia',
        headers: ['Tax Type', 'Rate', 'Filing Frequency', 'CamInvoice Impact'],
        rows: [
          ['VAT', '10%', 'Monthly', 'Real-time invoice clearance required'],
          ['Corporate Income Tax', '20%', 'Annually (quarterly prepayment)', 'Invoice data auto-populates returns'],
          ['Withholding Tax', '4-15%', 'Monthly', 'Linked to cleared invoice records'],
          ['Specific Tax', 'Varies by product', 'Monthly', 'Product-level invoice tracking'],
          ['Patent Tax', '$300-$3,000/year', 'Annually', 'Registration linked to CamInvoice access'],
        ],
      },
    },
    {
      heading: 'SME Compliance Challenges',
      content: 'While large enterprises typically have the resources to implement CamInvoice and meet GDT digital requirements, small and medium enterprises face significant challenges. Many Cambodian SMEs operate with basic accounting systems or manual bookkeeping that cannot generate UBL XML invoices natively.\n\nThe GDT has recognized this gap and is working with technology providers to offer simplified CamInvoice access tools for SMEs, including mobile applications and web portals. However, businesses with any meaningful transaction volume will need proper system integration. The 2027 deadline for universal SME compliance means businesses should begin preparation now to avoid last-minute implementation pressures.',
    },
    {
      heading: 'Tax Compliance Programmes with CamFinTech',
      content: 'CamFinTech delivers fee-only GDT compliance programmes for businesses operating in Cambodia. Our services cover tax structure scoping within legal frameworks, CamInvoice readiness assessment, the compliance architecture that E-Filing and E-Payment setup must satisfy, and ongoing programme delivery to ensure businesses meet GDT obligations on time.\n\nFor foreign enterprises entering Cambodia, we navigate entity structuring, transfer pricing documentation, withholding tax management, and VAT registration. The technical build — CamInvoice system integration, E-Filing/E-Payment connectivity, accounting-system middleware — is coordinated with accredited Service Providers. CamFinTech is fee-only and never holds client funds.',
    },
  ],
};
