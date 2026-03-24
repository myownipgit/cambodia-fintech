import { ArticleContent } from '../types';

export const whatIsCamInvoice: ArticleContent = {
  slug: 'what-is-caminvoice',
  title: 'What is CamInvoice and Who Must Comply?',
  description: 'CamInvoice is Cambodia\'s mandatory e-invoicing system operated by the General Department of Taxation, requiring UBL XML format electronic invoices for B2G and B2B transactions under a phased 2025-2027 rollout.',
  type: 'learn',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-03-25',
  readingTime: 6,
  schema: 'Article',
  relatedSlugs: ['caminvoice', 'gdt', 'supply-chain-finance'],
  lead: 'CamInvoice is Cambodia\'s mandatory electronic invoicing system, operated by the General Department of Taxation (GDT) under the Ministry of Economy and Finance. Launched as part of Cambodia\'s Revenue Mobilization Strategy 2019-2023 and extended through the Digital Government Policy 2022-2035, CamInvoice requires businesses to submit structured electronic invoices in real time to the GDT clearance platform before they are considered legally valid. The system uses the Universal Business Language (UBL) 2.1 XML standard and follows a clearance model where the GDT validates and stamps each invoice before it reaches the buyer. Compliance is mandatory and phased by business size, with significant penalties for non-compliance.',
  claims: [
    { stat: 'Cambodia\'s tax-to-GDP ratio stood at approximately 18.2% in 2023, with the government targeting 20% by 2027 through improved tax administration including mandatory e-invoicing.', source: 'International Monetary Fund Article IV Consultation', year: '2023' },
    { stat: 'Countries that implement mandatory e-invoicing typically see VAT compliance gaps narrow by 10-15 percentage points within three years of full rollout.', source: 'World Bank Tax Administration Diagnostic Assessment', year: '2024' },
    { stat: 'The GDT registered approximately 160,000 active taxpayer entities as of 2024, of which the largest 5,000 account for over 80% of total tax revenue collected.', source: 'General Department of Taxation Annual Report', year: '2024' },
  ],
  faqs: [
    { question: 'When does CamInvoice become mandatory for my business?', answer: 'CamInvoice compliance follows a phased timeline based on annual turnover. Phase 1 (2025) covers large taxpayers with annual turnover above KHR 2 billion. Phase 2 (2026) extends to medium taxpayers with turnover above KHR 500 million. Phase 3 (2027) covers all registered taxpayers. Check with the GDT or consult CamFinTech to confirm your specific compliance deadline.' },
    { question: 'What are the penalties for non-compliance with CamInvoice?', answer: 'Non-compliance penalties include fines of 10-25% of the invoice value for failure to issue compliant e-invoices, suspension of VAT refund claims, and potential business license revocation for repeat offenders. Additionally, non-compliant invoices cannot be used as tax deductions by the buyer, creating commercial pressure from trading partners.' },
    { question: 'Can I use my existing accounting software with CamInvoice?', answer: 'Yes, if your accounting software supports UBL 2.1 XML export and API integration. Most major ERP systems including SAP, Oracle, and QuickBooks can be configured to generate CamInvoice-compliant XML. For systems without native support, middleware or API gateway solutions can bridge the gap. CamFinTech provides integration consulting for all major platforms.' },
  ],
  sections: [
    {
      heading: 'The GDT Mandate and Legal Basis',
      content: 'CamInvoice is mandated under Prakas No. 1125 issued by the Ministry of Economy and Finance, which establishes the legal requirement for electronic invoicing across all registered taxpayers in Cambodia. The regulation builds on the existing Law on Taxation and gives the GDT authority to specify the technical format, submission process, and compliance timeline.\n\nThe policy objective is twofold. First, to close the VAT compliance gap by ensuring every commercial transaction generates a verifiable tax document in real time. The IMF estimates that Cambodia loses approximately 3-5% of GDP annually to tax evasion and informal transactions. Second, to create a structured digital data trail that enables automated tax auditing, reducing the GDT\'s reliance on manual inspections and paper-based record keeping.',
    },
    {
      heading: 'UBL XML Format and Invoice Structure',
      content: 'CamInvoice uses the Universal Business Language (UBL) 2.1 XML standard, an internationally recognized format maintained by OASIS. Each invoice must include mandatory fields such as supplier TIN, buyer TIN, invoice number, issue date, line item descriptions, unit prices, VAT amounts, and total payable amount.\n\nThe UBL format provides machine-readable structure that enables automated processing by both the GDT clearance system and the buyer\'s accounting systems. This is a significant departure from the PDF or paper invoices that have historically dominated Cambodian commerce. The structured format also enables downstream applications like supply chain finance, where verified invoice data can serve as collateral for working capital lending.',
      table: {
        caption: 'CamInvoice UBL 2.1 Required Fields',
        headers: ['Field', 'UBL Element', 'Description', 'Validation'],
        rows: [
          ['Supplier TIN', 'AccountingSupplierParty/TaxID', 'GDT-registered tax identification number', 'Real-time TIN validation via CamDX'],
          ['Buyer TIN', 'AccountingCustomerParty/TaxID', 'Buyer tax identification number', 'TIN format check'],
          ['Invoice Number', 'ID', 'Unique sequential identifier', 'Uniqueness check per supplier'],
          ['Line Items', 'InvoiceLine', 'Product/service description and quantity', 'At least one line required'],
          ['VAT Amount', 'TaxTotal/TaxAmount', 'Calculated VAT per applicable rate', 'Rate validation (10% standard)'],
          ['Total Payable', 'LegalMonetaryTotal/PayableAmount', 'Total including VAT', 'Arithmetic consistency check'],
        ],
      },
    },
    {
      heading: 'The Clearance Model Explained',
      content: 'CamInvoice uses a clearance model, also known as a pre-clearance or real-time validation model. In this model, the supplier submits the electronic invoice to the GDT platform BEFORE sending it to the buyer. The GDT system validates the invoice against its rules engine, checking TIN validity, format compliance, arithmetic accuracy, and duplicate detection.\n\nIf the invoice passes validation, the GDT stamps it with a unique clearance code and returns it to the supplier, who then forwards it to the buyer. Only cleared invoices are considered legally valid tax documents. This contrasts with the post-audit model used in many countries, where invoices are submitted to tax authorities after the fact. The clearance model gives the GDT real-time visibility into all commercial transactions, enabling immediate fraud detection.',
    },
    {
      heading: 'Phased Rollout Timeline 2025-2027',
      content: 'The CamInvoice mandate follows a three-phase rollout designed to give businesses time to implement the required technical systems. The phased approach prioritizes large taxpayers first, where the revenue impact and compliance infrastructure are greatest, before extending to smaller enterprises.\n\nEach phase includes a six-month grace period during which businesses can submit invoices in parallel (both electronic and paper) while testing their integration. After the grace period, electronic submission becomes the sole accepted format. CamFinTech recommends that businesses in Phase 2 and Phase 3 begin technical preparation at least 12 months before their mandatory compliance date.',
      table: {
        caption: 'CamInvoice Mandatory Compliance Timeline',
        headers: ['Phase', 'Effective Date', 'Taxpayer Category', 'Annual Turnover Threshold', 'Estimated Entities'],
        rows: [
          ['Phase 1', 'January 2025', 'Large taxpayers', 'Above KHR 2 billion (~USD 500,000)', '~5,000'],
          ['Phase 2', 'January 2026', 'Medium taxpayers', 'Above KHR 500 million (~USD 125,000)', '~25,000'],
          ['Phase 3', 'January 2027', 'All registered taxpayers', 'No threshold', '~160,000'],
          ['B2G Mandatory', 'July 2025', 'Government suppliers', 'All government contracts', '~10,000'],
        ],
      },
    },
    {
      heading: 'B2G and B2B Integration Phases',
      content: 'The CamInvoice rollout distinguishes between business-to-government (B2G) and business-to-business (B2B) invoicing. B2G invoicing, covering all suppliers to government ministries and state-owned enterprises, becomes mandatory in mid-2025 and serves as the proving ground for the platform.\n\nB2B e-invoicing follows the phased timeline by taxpayer size. The B2G phase is strategically important because the government is both the regulator and the buyer, meaning compliance can be enforced through procurement contracts. Enterprises that fail to submit compliant electronic invoices for government contracts will not receive payment, creating an immediate and powerful incentive. The lessons learned from B2G implementation will inform the broader B2B rollout.',
    },
    {
      heading: 'API Integration and Technical Architecture',
      content: 'The CamInvoice platform exposes RESTful APIs for invoice submission, status queries, and clearance code retrieval. Businesses can integrate directly using the GDT-published API specification or through certified middleware providers. The API supports both synchronous submission with immediate clearance response and asynchronous batch submission for high-volume invoicers.\n\nAuthentication uses OAuth 2.0 with API keys issued by the GDT during the onboarding process. All API communication is encrypted with TLS 1.3. For enterprises using ERP systems, integration typically involves building an adapter layer that transforms internal invoice data into UBL 2.1 XML and calls the CamInvoice API. CamFinTech provides pre-built adapter templates for SAP, Oracle, and popular Cambodian accounting software packages.',
    },
    {
      heading: 'Penalties and Enforcement Mechanisms',
      content: 'The GDT enforcement framework for CamInvoice includes both financial penalties and operational consequences. Direct financial penalties range from 10% to 25% of the invoice value for non-compliant invoices, with escalating penalties for repeat offenses. Persistent non-compliance can result in suspension of the business\'s VAT registration and, in severe cases, revocation of the business operating license.\n\nIndirect enforcement mechanisms are equally powerful. Non-compliant invoices cannot be claimed as input tax credits by the buyer. This means that buyers will increasingly refuse to accept invoices from non-compliant suppliers, as doing so would increase their own tax burden. This market-driven enforcement creates a cascading compliance incentive through the entire supply chain.',
    },
    {
      heading: 'SME Impact and CamFinTech Advisory',
      content: 'Small and medium enterprises face the greatest compliance challenge because many lack accounting software, ERP systems, or dedicated IT staff. The GDT has committed to providing a free web portal for manual invoice entry, but this is impractical for businesses processing more than a handful of invoices per day.\n\nCamFinTech addresses the SME compliance gap through affordable integration solutions, including lightweight API connectors for popular Cambodian accounting tools, cloud-based UBL conversion services, and training programs for finance teams. We also advise SMEs on the supply chain finance opportunities that CamInvoice creates: verified electronic invoices become bankable assets that can be discounted or used as collateral for working capital facilities, turning a compliance burden into a financing advantage.',
    },
  ],
};
