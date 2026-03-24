import { ArticleContent } from './types';
// Glossary
import { bakong } from './glossary/bakong';
import { camdigikey } from './glossary/camdigikey';
import { camdx } from './glossary/camdx';
import { caminvoice } from './glossary/caminvoice';
import { khqr } from './glossary/khqr';
import { gaap } from './glossary/gaap';
import { nbc } from './glossary/nbc';
import { gdt } from './glossary/gdt';
import { supplyChainFinance } from './glossary/supply-chain-finance';
import { embeddedInsurance } from './glossary/embedded-insurance';
// Learn — Infrastructure
import { howBakongWorks } from './learn/how-bakong-works';
import { whatIsCamDigiKey } from './learn/what-is-camdigikey';
import { howCamDXWorks } from './learn/how-camdx-works';
import { whatIsCamInvoice } from './learn/what-is-caminvoice';
import { howToAcceptKHQR } from './learn/how-to-accept-khqr';
import { whatIsCambodiaGaaP } from './learn/what-is-cambodia-gaap';
// Learn — Investment
import { cambodiaFintechLandscape } from './learn/cambodia-fintech-landscape';
import { supplyChainFinanceCambodia } from './learn/supply-chain-finance-cambodia';
import { complianceAsAService } from './learn/compliance-as-a-service';
// Learn — Compliance
import { fintechLicenseCambodia } from './learn/fintech-license-cambodia';
import { cambodiaAmlRequirements } from './learn/cambodia-aml-requirements';
import { crossBorderPaymentsBakong } from './learn/cross-border-payments-bakong';
// Knowledge Base
import { cambodiaGaapArchitecture } from './knowledge/cambodia-gaap-architecture';
import { bakongTechnicalIntegration } from './knowledge/bakong-technical-integration';
import { cambodiaFintechRegulation } from './knowledge/cambodia-fintech-regulation';
import { cambodiaScfOpportunity } from './knowledge/cambodia-scf-opportunity';
import { caminvoiceTechnicalCompliance } from './knowledge/caminvoice-technical-compliance';
import { cambodiaDigitalIdentity } from './knowledge/cambodia-digital-identity';
import { cambodiaPaymentEcosystem } from './knowledge/cambodia-payment-ecosystem';
import { aseanDigitalEconomyComparison } from './knowledge/asean-digital-economy-comparison';
// Insights
import { cambodiaDigitalPaymentGrowth } from './insights/cambodia-digital-payment-growth';
import { smeDigitalReadiness } from './insights/sme-digital-readiness';
import { aseanFintechInvestment } from './insights/asean-fintech-investment';
import { bakongAdoptionMetrics } from './insights/bakong-adoption-metrics';
import { caminvoiceRolloutImpact } from './insights/caminvoice-rollout-impact';
import { cambodiaVsRegionalFintech } from './insights/cambodia-vs-regional-fintech';

const allArticles: ArticleContent[] = [
  // Glossary
  bakong,
  camdigikey,
  camdx,
  caminvoice,
  khqr,
  gaap,
  nbc,
  gdt,
  supplyChainFinance,
  embeddedInsurance,
  // Learn
  howBakongWorks,
  whatIsCamDigiKey,
  howCamDXWorks,
  whatIsCamInvoice,
  howToAcceptKHQR,
  whatIsCambodiaGaaP,
  cambodiaFintechLandscape,
  supplyChainFinanceCambodia,
  complianceAsAService,
  fintechLicenseCambodia,
  cambodiaAmlRequirements,
  crossBorderPaymentsBakong,
  // Knowledge Base
  cambodiaGaapArchitecture,
  bakongTechnicalIntegration,
  cambodiaFintechRegulation,
  cambodiaScfOpportunity,
  caminvoiceTechnicalCompliance,
  cambodiaDigitalIdentity,
  cambodiaPaymentEcosystem,
  aseanDigitalEconomyComparison,
  // Insights
  cambodiaDigitalPaymentGrowth,
  smeDigitalReadiness,
  aseanFintechInvestment,
  bakongAdoptionMetrics,
  caminvoiceRolloutImpact,
  cambodiaVsRegionalFintech,
];

export function getAllArticles() {
  return allArticles;
}

export function getArticlesByType(type: string) {
  return allArticles.filter((a) => a.type === type);
}

export function getArticleBySlug(slug: string) {
  return allArticles.find((a) => a.slug === slug);
}

export function getArticleByTypeAndSlug(type: string, slug: string) {
  return allArticles.find((a) => a.type === type && a.slug === slug);
}
