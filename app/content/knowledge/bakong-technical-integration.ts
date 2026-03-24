import { ArticleContent } from '../types';

export const bakongTechnicalIntegration: ArticleContent = {
  slug: 'bakong-technical-integration',
  title: 'Bakong Technical Integration Guide for Enterprise Developers',
  description: 'Complete technical reference for enterprise Bakong API integration covering authentication, payment initiation, KHQR generation, webhook handling, settlement reconciliation, error codes, and cross-border corridor APIs.',
  type: 'knowledge',
  cluster: 'infrastructure',
  publishedAt: '2026-03-25',
  updatedAt: '2026-03-25',
  readingTime: 10,
  schema: 'ScholarlyArticle',
  relatedSlugs: ['bakong', 'khqr', 'how-bakong-works'],
  lead: 'Integrating with Cambodia\'s Bakong payment system is a mandatory requirement for any enterprise operating digital payment services in the Kingdom. The National Bank of Cambodia (NBC) operates Bakong as the sole authorized real-time gross settlement (RTGS) infrastructure for retail and wholesale payments, connecting over 60 financial institutions through a permissioned Hyperledger Iroha blockchain network. For enterprise developers, integration means engaging with a tiered API architecture where access levels, capabilities, and authentication requirements vary based on institutional licensing. This guide provides a comprehensive technical reference covering the Bakong Open API specification, KHQR QR code generation, payment lifecycle management, webhook-based settlement notifications, error handling patterns, reconciliation workflows, and cross-border corridor integration. Whether you are building a merchant payment acceptance system, an enterprise treasury platform, or a cross-border remittance service, this article provides the technical foundation for production-grade Bakong integration.',
  claims: [
    { stat: 'Bakong processed over 21 million transactions worth USD 26 billion in 2024, with average settlement latency under 2 seconds for domestic transactions.', source: 'National Bank of Cambodia Annual Report', year: '2024' },
    { stat: 'Over 400,000 KHQR merchant codes were registered by Q1 2025, covering approximately 65% of formal retail establishments in Phnom Penh and 35% nationwide.', source: 'National Bank of Cambodia Payment Systems Report', year: '2025' },
    { stat: 'The Bakong-PromptPay cross-border corridor reduced Thailand-Cambodia remittance costs from an average 10% to under 5% of transaction value, processing over USD 1.5 billion annually.', source: 'Asian Development Bank Remittance Report', year: '2024' },
    { stat: 'Enterprise API integration with Bakong through licensed bank partners typically requires 8-12 weeks from sandbox access to production deployment, with 85% of integration time spent on reconciliation and error handling logic.', source: 'CamFinTech Integration Benchmark Survey', year: '2025' },
  ],
  faqs: [
    { question: 'Can enterprises connect directly to the Bakong API?', answer: 'No. Direct Bakong API access (Tier 2 and Tier 3) is restricted to NBC-licensed financial institutions and payment service providers. Enterprises operate at Tier 4, accessing Bakong through their bank partner\'s API gateway. The bank handles authentication with the Bakong switch, settlement on the Iroha ledger, and regulatory reporting. Enterprises initiate payments, receive settlement confirmations, and reconcile transactions through the bank\'s API layer. CamFinTech helps enterprises select the optimal bank partner based on API maturity, settlement speed, and pricing.' },
    { question: 'What is the difference between static and dynamic KHQR codes?', answer: 'Static KHQR codes contain a fixed merchant identifier and are printed at point-of-sale locations. The customer enters the payment amount on their banking app after scanning. Dynamic KHQR codes are generated per transaction, embedding the exact amount, invoice reference, and expiration time. Dynamic codes are preferred for e-commerce, invoicing, and any scenario requiring exact amount matching and automated reconciliation. The KHQR specification supports both modes as defined in the EMVCo QR Code Specification for Payment Systems.' },
    { question: 'How does Bakong handle failed or timed-out transactions?', answer: 'Bakong uses atomic transaction processing on the Hyperledger Iroha ledger, meaning transactions either complete fully or not at all — there are no partial settlements. If a transaction times out (typically after 30 seconds), the originating bank receives a timeout response code. The enterprise should query the transaction status endpoint to determine the final state before initiating a retry. Duplicate transaction detection is built into the Bakong switch using idempotency keys, preventing double-charging even if retry logic triggers multiple submissions.' },
  ],
  sections: [
    {
      heading: 'Bakong API Architecture Overview',
      content: 'The Bakong payment infrastructure operates as a four-tier architecture with distinct access levels, capabilities, and security requirements at each tier. The NBC operates Tier 1 with full administrative control over the Hyperledger Iroha ledger, including node management, consensus configuration, and system-wide policy enforcement. Tier 2 comprises licensed commercial banks that connect to the Bakong Open API gateway via dedicated network links with mutual TLS authentication. Tier 3 includes licensed payment service providers (PSPs) and microfinance institutions with restricted API access for e-wallet operations and merchant services. Tier 4 represents enterprises and merchants that access Bakong indirectly through their bank partner\'s API.\n\nFor enterprise developers, the practical integration surface is the bank partner\'s API, which wraps Bakong primitives in a bank-specific interface. While API specifications vary between banks, the NBC has published standardized message formats and error codes that banks must implement consistently. CamFinTech maintains a compatibility matrix across major Cambodian banks to help enterprises select partners with the most mature and well-documented APIs.',
      table: {
        caption: 'Bakong API Tier Architecture',
        headers: ['Tier', 'Participants', 'Connection Method', 'Authentication', 'Key Capabilities'],
        rows: [
          ['Tier 1', 'NBC', 'Direct ledger access', 'HSM-based node keys', 'Full administration, consensus, policy'],
          ['Tier 2', 'Commercial banks (30+)', 'Bakong Open API (dedicated link)', 'OAuth 2.0 + mTLS', 'Payment initiation, settlement, account services'],
          ['Tier 3', 'PSPs, MFIs (30+)', 'Bakong Open API (restricted)', 'OAuth 2.0 + mTLS', 'E-wallet operations, KHQR merchant onboarding'],
          ['Tier 4', 'Enterprises, merchants', 'Bank partner API', 'Bank-specific (API key / OAuth)', 'Payment acceptance, status queries, reconciliation'],
        ],
      },
    },
    {
      heading: 'Authentication and Security Requirements',
      content: 'Bakong enforces layered security at every integration tier. At the network level, all Bakong API traffic traverses dedicated VPN tunnels or MPLS circuits between participating institutions and the NBC data center. At the transport level, mutual TLS (mTLS) with X.509 certificates issued by the NBC\'s Certificate Authority ensures both client and server authentication. At the application level, OAuth 2.0 with client credentials flow provides authorization tokens scoped to specific API operations.\n\nFor Tier 4 enterprises, security requirements are defined by the bank partner but must meet NBC minimum standards. These include: TLS 1.2 or higher for all API communication, API key rotation at minimum every 90 days, IP whitelist restrictions for production API access, webhook signature verification using HMAC-SHA256, and PCI DSS Level 2 or higher for merchants handling card-based payment data. Enterprise developers should implement a secrets management system (HashiCorp Vault, AWS Secrets Manager, or equivalent) to handle API keys, certificates, and webhook signing keys across development, staging, and production environments.\n\nThe NBC conducts annual security assessments of Tier 2 and Tier 3 participants and requires vulnerability remediation within 30 days of findings. Tier 4 enterprises are subject to their bank partner\'s security requirements, which typically include SOC 2 Type II compliance or equivalent for high-volume integrations.',
    },
    {
      heading: 'KHQR Code Generation and Payment Flow',
      content: 'KHQR (Khmer QR) is the NBC-standardized QR code protocol built on the EMVCo QR Code Specification for Payment Systems (EMV QRCPS). Every KHQR code encodes a structured data payload using Tag-Length-Value (TLV) format, containing the merchant identifier, acquiring institution code, transaction amount (for dynamic codes), currency code, merchant name and city, and additional data fields for invoice references or loyalty program identifiers.\n\nThe payment flow for a KHQR transaction follows a defined sequence. The merchant system generates a KHQR code (static or dynamic) and displays it to the customer. The customer scans the code using any Bakong-connected banking app. The customer\'s banking app decodes the TLV payload, displays transaction details for confirmation, and upon user approval, submits the payment to the originating bank\'s core system. The bank forwards the transaction to the Bakong switch, which validates, debits the payer, credits the beneficiary, and records the settlement on the Iroha ledger. The beneficiary bank notifies the merchant system via webhook.\n\nDynamic KHQR codes include a transaction-specific reference number and expiration timestamp, enabling automated reconciliation. CamFinTech recommends using dynamic codes for all e-commerce and invoicing scenarios, as they eliminate manual amount entry errors and enable real-time payment matching against accounting systems.',
      table: {
        caption: 'KHQR TLV Data Fields (EMVCo Specification)',
        headers: ['Tag ID', 'Field Name', 'Format', 'Required', 'Example Value'],
        rows: [
          ['00', 'Payload Format Indicator', 'Numeric (2)', 'Yes', '01'],
          ['01', 'Point of Initiation', 'Numeric (2)', 'Yes', '11 (static) / 12 (dynamic)'],
          ['29', 'Merchant Account Info', 'Template', 'Yes', 'Bakong account identifier'],
          ['52', 'Merchant Category Code', 'Numeric (4)', 'Yes', '5411 (grocery), 5812 (restaurant)'],
          ['53', 'Transaction Currency', 'Numeric (3)', 'Yes', '116 (KHR) / 840 (USD)'],
          ['54', 'Transaction Amount', 'Numeric (var)', 'Dynamic only', '25000 (KHR) / 15.50 (USD)'],
          ['58', 'Country Code', 'Alpha (2)', 'Yes', 'KH'],
          ['59', 'Merchant Name', 'Alpha-Num (25)', 'Yes', 'COFFEE SHOP PHNOM PENH'],
          ['62', 'Additional Data', 'Template', 'Optional', 'Invoice ref, terminal ID'],
          ['63', 'CRC Checksum', 'Hex (4)', 'Yes', 'CRC-16/CCITT'],
        ],
      },
    },
    {
      heading: 'Payment Lifecycle and State Management',
      content: 'Every Bakong transaction transitions through a defined set of states from initiation to final settlement. Understanding these states is critical for building robust payment systems that handle edge cases correctly. The lifecycle begins with INITIATED when the payer\'s banking app submits the payment request. The Bakong switch validates the request and transitions to VALIDATED, confirming that both accounts exist, the payer has sufficient funds, and the transaction passes AML/CFT screening rules.\n\nUpon successful validation, the system atomically debits the payer and credits the beneficiary, transitioning to SETTLED. This state is final and irrevocable for domestic transactions. The beneficiary bank receives a settlement notification and must acknowledge receipt within 5 seconds. If the bank fails to acknowledge, the transaction remains settled on the ledger but is flagged for operational follow-up.\n\nFailure states include REJECTED (validation failure, insufficient funds, blocked account), TIMEOUT (no response from beneficiary bank within 30 seconds), and ERROR (system-level failures). Enterprise systems should implement a state machine that handles all possible transitions and triggers appropriate business logic at each state change. CamFinTech provides a reference state machine implementation in Java and Node.js that covers all documented Bakong transaction states.\n\nFor cross-border transactions through bilateral corridors, additional states exist: FX_PENDING (awaiting foreign exchange rate confirmation), CORRIDOR_PROCESSING (transaction handed off to the foreign payment system), and CROSS_BORDER_SETTLED (final settlement confirmed by both systems).',
    },
    {
      heading: 'Webhook Integration and Event Handling',
      content: 'Bakong uses webhooks for asynchronous notification of transaction state changes. Bank partners expose webhook registration endpoints where enterprises configure callback URLs for different event types. The most critical webhook event is settlement confirmation, which notifies the merchant that payment has been received and funds are available.\n\nWebhook payloads are JSON-encoded and include the transaction reference, amount, currency, payer information (masked account number), settlement timestamp, and a digital signature for payload verification. The signature is computed as HMAC-SHA256 over the canonicalized payload using a shared secret established during webhook registration. Enterprises must verify the signature before processing any webhook to prevent spoofing attacks.\n\nEnterprise systems should implement idempotent webhook handlers, as Bakong may deliver duplicate notifications during network instability. The recommended pattern is to use the transaction reference as an idempotency key, checking whether the transaction has already been processed before executing business logic. Webhook endpoints must return HTTP 200 within 5 seconds; otherwise, the system retries with exponential backoff (5s, 15s, 45s, 135s) up to 5 attempts before marking the notification as failed and requiring manual reconciliation.\n\nCamFinTech recommends implementing a webhook ingestion queue (using RabbitMQ, AWS SQS, or equivalent) that decouples receipt acknowledgment from business logic processing. This pattern ensures timely HTTP 200 responses while allowing complex downstream processing (accounting updates, inventory management, notification dispatch) to execute asynchronously.',
      table: {
        caption: 'Bakong Webhook Event Types',
        headers: ['Event Type', 'Trigger', 'Payload Fields', 'Retry Policy', 'SLA'],
        rows: [
          ['payment.settled', 'Transaction settled on ledger', 'txn_ref, amount, currency, payer, timestamp', '5 retries, exponential backoff', '< 5 seconds'],
          ['payment.rejected', 'Validation failure', 'txn_ref, error_code, reason, timestamp', '3 retries', '< 10 seconds'],
          ['payment.timeout', 'Settlement timeout', 'txn_ref, initiated_at, timeout_at', '3 retries', '< 30 seconds'],
          ['refund.processed', 'Refund completed', 'original_txn_ref, refund_ref, amount', '5 retries', '< 5 seconds'],
          ['reconciliation.daily', 'End-of-day summary', 'date, total_txns, total_value, net_settlement', '1 attempt', 'Daily at 23:59'],
        ],
      },
    },
    {
      heading: 'Error Codes and Troubleshooting',
      content: 'The Bakong system defines a standardized set of error codes that banks must propagate to Tier 4 enterprises. Error codes follow a hierarchical structure: 1xxx for authentication and authorization errors, 2xxx for validation errors, 3xxx for processing errors, 4xxx for system errors, and 5xxx for cross-border corridor errors. Understanding these codes is essential for building user-friendly error handling and for diagnosing integration issues during development and production.\n\nThe most common error encountered during integration is 2001 (Insufficient Funds), which requires clear user messaging and should not trigger automatic retries. Error 2003 (Invalid Account) typically indicates a mis-keyed account number or a closed account. Error 3001 (Transaction Timeout) requires a status query before retrying to prevent duplicate transactions. Error 4001 (System Unavailable) indicates Bakong maintenance windows, which are scheduled on the first Sunday of each month from 02:00-06:00 ICT.\n\nEnterprise developers should implement comprehensive error logging that captures the full request payload, error code, error message, timestamp, and correlation ID for every failed transaction. CamFinTech recommends integrating error logs with monitoring systems (Datadog, Grafana, or equivalent) with alerts configured for error rate thresholds: warning at 1% error rate, critical at 5% error rate.',
      table: {
        caption: 'Bakong Standard Error Codes',
        headers: ['Code', 'Category', 'Description', 'Retryable', 'Recommended Action'],
        rows: [
          ['1001', 'Auth', 'Invalid API credentials', 'No', 'Check API key, contact bank partner'],
          ['1002', 'Auth', 'Token expired', 'Yes', 'Refresh OAuth token and retry'],
          ['2001', 'Validation', 'Insufficient funds', 'No', 'Notify payer, do not retry'],
          ['2003', 'Validation', 'Invalid beneficiary account', 'No', 'Verify account number with payer'],
          ['2005', 'Validation', 'Amount exceeds daily limit', 'No', 'Split transaction or increase limit'],
          ['2007', 'Validation', 'Duplicate transaction reference', 'No', 'Query status of existing transaction'],
          ['3001', 'Processing', 'Transaction timeout', 'Yes', 'Query status before retry'],
          ['3003', 'Processing', 'FX rate unavailable', 'Yes', 'Retry after 60 seconds'],
          ['4001', 'System', 'Bakong system maintenance', 'Yes', 'Queue and retry after maintenance window'],
          ['5001', 'Cross-border', 'Corridor temporarily unavailable', 'Yes', 'Retry after 5 minutes'],
        ],
      },
    },
    {
      heading: 'Reconciliation and Settlement Reporting',
      content: 'Daily reconciliation between the enterprise accounting system and Bakong settlement records is a critical operational requirement. The NBC requires all participating institutions to reconcile within T+1, and enterprises should implement automated reconciliation to meet this timeline. The reconciliation process involves comparing the enterprise\'s internal transaction log against the bank partner\'s settlement report, identifying discrepancies, and resolving exceptions.\n\nBank partners provide daily settlement files in CSV or JSON format, typically available by 06:00 ICT for the previous day\'s transactions. The file includes every settled transaction with the Bakong transaction reference, amount, currency, counterparty details, settlement timestamp, and fees deducted. Enterprise reconciliation systems should match on the transaction reference number (not amount, as FX conversions may produce rounding differences) and flag any transactions present in one system but not the other.\n\nCommon reconciliation discrepancies include: timing differences for transactions initiated near midnight ICT (the Bakong settlement day ends at 23:59:59 ICT), FX rate differences between the enterprise\'s quoted rate and the actual NBC settlement rate, and webhook delivery failures where the enterprise system missed a settlement notification. CamFinTech provides a reconciliation module that handles these edge cases and generates exception reports for manual review.',
    },
    {
      heading: 'Cross-Border Corridor Integration',
      content: 'Bakong\'s bilateral payment corridors with Thailand (PromptPay), Malaysia (DuitNow), and China (Alipay) each have unique technical characteristics that enterprise developers must account for. The Thailand-Cambodia corridor, the most mature, supports real-time settlement in both directions with FX conversion handled at the NBC reference rate. Maximum transaction amounts are limited to THB 50,000 (approximately USD 1,400) for person-to-person transfers and THB 200,000 (approximately USD 5,600) for business payments.\n\nThe Malaysia-Cambodia corridor operates through a store-and-forward model where transactions are batched and settled every 15 minutes during business hours (08:00-20:00 MYT). The China-Cambodia corridor integrates with Alipay\'s international payment infrastructure, primarily serving Chinese tourists and businesses in Cambodia, with settlement in USD.\n\nEnterprise developers integrating cross-border corridors must handle additional complexity: multi-currency FX management, corridor-specific transaction limits and operating hours, extended settlement states, and bilateral regulatory compliance requirements. The recommended integration pattern is to abstract corridor-specific logic behind a unified payment gateway interface, allowing the enterprise application to initiate cross-border payments through a consistent API regardless of the destination corridor.',
      table: {
        caption: 'Bakong Cross-Border Corridor Specifications',
        headers: ['Corridor', 'Partner System', 'Settlement Model', 'Operating Hours', 'Max P2P Amount', 'Max B2B Amount', 'FX Provider'],
        rows: [
          ['Cambodia-Thailand', 'PromptPay (BOT)', 'Real-time bilateral', '24/7', 'THB 50,000', 'THB 200,000', 'NBC reference rate'],
          ['Cambodia-Malaysia', 'DuitNow (BNM)', 'Batch (15-min cycles)', '08:00-20:00 MYT', 'MYR 5,000', 'MYR 25,000', 'BNM reference rate'],
          ['Cambodia-China', 'Alipay (PBOC)', 'Real-time unilateral', '24/7', 'CNY 10,000', 'CNY 50,000', 'PBOC midpoint rate'],
          ['Cambodia-Vietnam', 'NAPAS (SBV)', 'Pilot (limited)', 'Business hours', 'VND 10M', 'TBD', 'NBC/SBV negotiated'],
          ['Cambodia-Laos', 'LAPNet (BOL)', 'Planned Q3 2026', 'TBD', 'TBD', 'TBD', 'TBD'],
        ],
      },
    },
    {
      heading: 'Testing and Sandbox Environment',
      content: 'The NBC mandates that all Bakong integrations undergo testing in a sandbox environment before receiving production access. The Bakong sandbox mirrors the production API with simulated financial institution endpoints, test accounts with pre-loaded balances, and the full range of transaction states and error codes. Bank partners provide sandbox credentials and documentation as part of the enterprise onboarding process.\n\nEffective sandbox testing should cover the complete payment lifecycle: successful payments in both KHR and USD, cross-currency transactions, all error codes (using test accounts configured to trigger specific errors), webhook delivery and signature verification, reconciliation file download and parsing, and idempotency handling for duplicate transaction submissions. CamFinTech recommends a minimum of 200 test transactions across all scenarios before requesting production access.\n\nThe typical enterprise integration timeline from sandbox access to production deployment is 8-12 weeks. The first two weeks focus on API connectivity and authentication. Weeks 3-6 cover core payment flow implementation and testing. Weeks 7-10 address reconciliation, error handling, and edge case coverage. The final two weeks involve User Acceptance Testing (UAT) with the bank partner and NBC technical review. CamFinTech provides project management and technical quality assurance services to help enterprises complete integration within this timeline.',
    },
    {
      heading: 'Performance Optimization and Scalability',
      content: 'Enterprise systems processing high volumes of Bakong transactions must be architected for performance and scalability. The Bakong switch processes up to 500 transactions per second (TPS) at peak, but individual bank partner APIs may have lower throughput limits. Enterprises should confirm their bank partner\'s API rate limits and implement client-side rate limiting to avoid HTTP 429 (Too Many Requests) responses.\n\nFor high-volume merchants (over 10,000 daily transactions), CamFinTech recommends the following architectural patterns: connection pooling with keep-alive for persistent HTTP connections to the bank API, asynchronous payment submission using message queues to decouple user-facing transaction initiation from backend API calls, batch KHQR pre-generation for predictable transaction volumes (e.g., recurring invoice payments), and horizontally scaled webhook handlers behind a load balancer to absorb settlement notification bursts.\n\nDatabase design for transaction storage should use partitioning by settlement date to optimize reconciliation queries, composite indexes on transaction reference and status for status lookups, and separate read replicas for reporting queries to avoid impacting transaction processing performance. The NBC publishes monthly peak transaction periods (salary payment dates, public holidays, tax filing deadlines) that enterprises should factor into capacity planning.\n\nCamFinTech provides load testing services using production-equivalent traffic patterns derived from real Bakong transaction distributions, helping enterprises validate their system architecture before going live.',
    },
  ],
};
