import { ArticleContent } from '../types';

export const caminvoice: ArticleContent = {
  slug: 'caminvoice',
  title: 'What is CamInvoice?',
  description: 'CamInvoice is Cambodia\'s mandatory electronic invoicing system administered by the GDT, requiring businesses to submit UBL XML invoices through a clearance model.',
  type: 'glossary',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-06-18',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['gdt', 'gaap', 'supply-chain-finance'],
  lead: 'CamInvoice is Cambodia\'s mandatory electronic invoicing system administered by the General Department of Taxation (GDT). Using the UBL XML standard and a clearance model, CamInvoice requires businesses to submit invoices electronically for real-time tax authority validation before they become legally valid.',
  claims: [
    { stat: 'Cambodia\'s CamInvoice rollout targets large taxpayers from 2025 with full SME coverage by 2027, covering an estimated 150,000+ registered businesses.', source: 'General Department of Taxation Cambodia', year: '2025' },
    { stat: 'Countries implementing mandatory e-invoicing have seen VAT compliance improvements of 15-30% and significant reductions in tax fraud.', source: 'International Monetary Fund', year: '2024' },
    { stat: 'Cambodia\'s tax-to-GDP ratio stood at approximately 18.5% in 2024, with e-invoicing expected to increase collection efficiency by reducing the informal economy gap.', source: 'World Bank Cambodia Economic Update', year: '2024' },
  ],
  faqs: [
    { question: 'What is CamInvoice and when does it become mandatory?', answer: 'CamInvoice is Cambodia\'s mandatory electronic invoicing system operated by the General Department of Taxation (GDT). The rollout follows a phased timeline: large taxpayers (annual revenue above $2 million) from 2025, medium taxpayers from 2026, and all remaining registered businesses including SMEs by 2027. Once mandatory for your taxpayer category, all B2B and B2G invoices must be submitted through CamInvoice.' },
    { question: 'What is the UBL XML format required by CamInvoice?', answer: 'UBL (Universal Business Language) XML is an international standard for electronic business documents maintained by OASIS. CamInvoice requires invoices to be structured in UBL 2.1 XML format, which includes standardized fields for seller/buyer identification, line items, tax calculations, and payment terms. This machine-readable format enables automated tax validation and cross-referencing by the GDT.' },
    { question: 'How does the CamInvoice clearance model work?', answer: 'In a clearance model, invoices must be submitted to and approved by the tax authority before they are legally valid. When a business issues an invoice, it is first sent to the CamInvoice platform where the GDT validates the tax calculations and assigns a unique invoice reference number. Only after clearance can the invoice be sent to the buyer. This differs from post-audit models where invoices are reported after issuance.' },
  ],
  sections: [
    {
      heading: 'How CamInvoice Works',
      content: 'CamInvoice operates on a real-time clearance model where every invoice must pass through the GDT platform before becoming legally binding. The process begins when a seller generates an invoice in UBL XML format and submits it to CamInvoice via API or web portal. The GDT system validates the invoice structure, tax calculations, and seller registration status.\n\nUpon successful validation, CamInvoice assigns a unique cryptographic reference number and returns the cleared invoice to the seller. The seller then transmits the cleared invoice to the buyer. This real-time clearance approach gives the GDT immediate visibility into economic transactions, enabling automated VAT reconciliation and significantly reducing tax fraud opportunities.',
    },
    {
      heading: 'Phased Rollout Timeline',
      content: 'The GDT has structured CamInvoice adoption in three phases to allow businesses adequate preparation time. Each phase expands the mandate to a broader segment of the taxpayer base, ultimately achieving universal electronic invoicing coverage across Cambodia\'s formal economy.\n\nBusinesses approaching their mandatory compliance date must ensure their accounting systems can generate UBL XML invoices, establish API connectivity with the CamInvoice platform, and train staff on the new invoicing workflows. Early preparation is critical as non-compliance carries financial penalties and potential business license implications.',
      table: {
        caption: 'CamInvoice Mandatory Adoption Timeline',
        headers: ['Phase', 'Taxpayer Category', 'Revenue Threshold', 'Compliance Deadline'],
        rows: [
          ['Phase 1', 'Large Taxpayers', 'Above $2 million annual revenue', '2025'],
          ['Phase 2', 'Medium Taxpayers', '$250,000 - $2 million annual revenue', '2026'],
          ['Phase 3', 'Small Taxpayers & SMEs', 'All registered taxpayers', '2027'],
        ],
      },
    },
    {
      heading: 'Supply Chain Finance Opportunities',
      content: 'CamInvoice creates a transformative opportunity for supply chain finance in Cambodia. Because every invoice is validated and timestamped by the GDT, cleared CamInvoice records serve as trusted, tamper-proof proof of trade. Financial institutions can use these verified invoices as the basis for invoice financing, factoring, and supply chain credit products.\n\nThis is particularly significant for Cambodian SMEs that traditionally lack the documentation and credit history needed to access trade finance. A GDT-cleared CamInvoice record provides the verifiable receivable data that banks need to extend working capital financing, potentially unlocking billions in previously inaccessible credit for small businesses.',
    },
    {
      heading: 'Enterprise Approval-Navigation with CamFinTech',
      content: 'CamFinTech navigates the SP-accreditation pathway and CamInvoice readiness assessment, and runs the compliance programme that keeps enterprises approved. Our work covers ERP-system gap assessment, UBL XML mapping requirements, GDT-side certification sequencing, and staff training for the transition to mandatory e-invoicing.\n\nThe technical build itself — middleware that converts internal invoice data to UBL XML, API integration with the CamInvoice platform, lending-platform architecture that consumes verified CamInvoice records via CamDX for supply-chain finance — is coordinated with accredited Service Providers. CamFinTech is fee-only and never holds client funds.',
    },
  ],
};
