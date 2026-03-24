import { ArticleContent } from '../types';

export const nbc: ArticleContent = {
  slug: 'nbc',
  title: 'National Bank of Cambodia: Central Bank, Bakong Operator, and FinTech Regulator',
  description: 'The National Bank of Cambodia (NBC) is Cambodia\'s central bank, operating the Bakong CBDC, regulating financial institutions, and managing the FinTech regulatory sandbox.',
  type: 'glossary',
  cluster: 'compliance',
  publishedAt: '2026-03-25',
  updatedAt: '2026-03-25',
  readingTime: 3,
  schema: 'DefinedTerm',
  relatedSlugs: ['bakong', 'khqr', 'gdt'],
  lead: 'The National Bank of Cambodia (NBC) is Cambodia\'s central bank responsible for monetary policy, financial institution supervision, and payment system regulation. The NBC operates the Bakong CBDC and KHQR payment infrastructure, and administers the FinTech Regulatory Sandbox that governs innovation in Cambodia\'s financial services sector.',
  claims: [
    { stat: 'The NBC supervises over 80 commercial banks, specialized banks, and microfinance institutions operating in Cambodia, with total banking sector assets exceeding $75 billion.', source: 'National Bank of Cambodia', year: '2025' },
    { stat: 'Cambodia\'s FinTech regulatory sandbox has evaluated over 20 innovative financial products since its establishment, with several receiving full operating licenses.', source: 'National Bank of Cambodia', year: '2024' },
    { stat: 'Cambodia maintains one of the highest financial inclusion growth rates in ASEAN, with formal financial access increasing from 18% in 2011 to over 75% by 2024.', source: 'World Bank Global Findex Database', year: '2024' },
  ],
  faqs: [
    { question: 'What does the National Bank of Cambodia regulate?', answer: 'The NBC regulates all financial institutions in Cambodia including commercial banks, specialized banks, microfinance deposit-taking institutions, microfinance institutions, payment service providers, and electronic money issuers. It also regulates the Bakong payment system, sets KHQR technical standards, administers the FinTech regulatory sandbox, and manages Cambodia\'s monetary policy including the exchange rate stability between KHR and USD.' },
    { question: 'What is the NBC FinTech regulatory sandbox?', answer: 'The NBC FinTech Regulatory Sandbox is a controlled testing environment where innovative financial service providers can trial new products under NBC supervision with relaxed regulatory requirements. Companies accepted into the sandbox operate under temporary conditions that allow them to test business models, technology, and consumer response before applying for a full license. The sandbox covers areas including digital lending, insurance technology, and payment innovations.' },
    { question: 'How does NBC licensing affect foreign fintech companies?', answer: 'Foreign fintech companies must obtain appropriate NBC licenses to operate financial services in Cambodia. License categories include Payment Service Provider, Electronic Money Issuer, and Specialized Bank licenses. The sandbox provides an entry pathway for testing before full licensing. CamFinTech assists foreign fintech firms with NBC licensing strategy, regulatory compliance architecture, and sandbox application preparation.' },
  ],
  sections: [
    {
      heading: 'NBC\'s Role in Cambodia\'s Digital Economy',
      content: 'The National Bank of Cambodia has positioned itself as one of the most forward-looking central banks in Southeast Asia. Beyond traditional monetary policy and banking supervision, the NBC has taken direct responsibility for building Cambodia\'s payment infrastructure through Bakong and KHQR.\n\nThis dual role as both regulator and infrastructure operator is intentional. By building Bakong as a public good rather than leaving payment infrastructure to private competition, the NBC ensures universal interoperability and prevents market fragmentation. The NBC also actively promotes financial inclusion through policies that encourage mobile banking, agent banking, and digital payment adoption in rural areas.',
    },
    {
      heading: 'Regulatory Framework and Licensing',
      content: 'The NBC maintains a tiered licensing framework that governs different categories of financial service providers. Each license type carries specific capital requirements, reporting obligations, technology standards, and consumer protection mandates. The framework has evolved significantly to accommodate digital business models while maintaining systemic stability.\n\nFor enterprises entering Cambodia\'s financial services market, understanding the NBC licensing landscape is critical. Choosing the wrong license category can result in regulatory delays, while underestimating compliance requirements risks enforcement action. The NBC has increased its supervisory capacity significantly in recent years, with dedicated teams for digital finance oversight.',
      table: {
        caption: 'NBC Financial Service License Categories',
        headers: ['License Type', 'Minimum Capital', 'Key Requirements', 'Typical Applicants'],
        rows: [
          ['Commercial Bank', '$75 million', 'Full prudential regulation, deposit insurance', 'Large domestic and foreign banks'],
          ['Specialized Bank', '$15 million', 'Limited banking activities, sector focus', 'Niche lenders, digital banks'],
          ['MFI (Deposit-taking)', '$2.5 million', 'Microfinance focus, rural coverage mandates', 'Microfinance operators'],
          ['Payment Service Provider', '$1 million', 'Payment processing, Bakong connectivity', 'Fintech companies, processors'],
          ['E-Money Issuer', '$1.5 million', 'Electronic wallet, float management', 'Mobile money operators'],
        ],
      },
    },
    {
      heading: 'FinTech Sandbox and Innovation Policy',
      content: 'The NBC FinTech Regulatory Sandbox represents Cambodia\'s commitment to balancing innovation with financial stability. Launched to provide a structured pathway for new financial technologies, the sandbox allows companies to operate under tailored regulatory conditions for a defined testing period, typically 12 to 24 months.\n\nSandbox participants benefit from direct NBC mentorship, reduced initial capital requirements, and flexibility on certain regulatory provisions. In return, they must provide detailed reporting on operations, consumer outcomes, and risk metrics. Successful sandbox graduates receive expedited consideration for full licensing. The sandbox has been particularly active in evaluating digital lending platforms, cross-border payment solutions, and insurtech products.',
    },
    {
      heading: 'Regulatory Compliance with CamFinTech',
      content: 'CamFinTech provides specialized regulatory consulting for enterprises navigating NBC requirements. Our services include license strategy assessment, compliance architecture design, sandbox application preparation, and ongoing regulatory reporting system implementation.\n\nFor banks and financial institutions, CamFinTech designs technology systems that satisfy NBC prudential reporting requirements, Bakong integration mandates, and AML/CFT compliance standards. For fintech companies, we provide end-to-end support from sandbox application through full license acquisition. CamFinTech\'s regulatory expertise ensures clients meet NBC expectations efficiently while minimizing compliance costs and timeline risks.',
    },
  ],
};
