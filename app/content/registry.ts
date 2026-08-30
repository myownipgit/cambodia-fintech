import { ArticleContent } from './types';
// Glossary (retained per D2 Option E — definitional content survives positioning change)
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
// Learn — retained factual pages per D2 Option E
import { howBakongWorks } from './learn/how-bakong-works';
import { whatIsCamDigiKey } from './learn/what-is-camdigikey';
import { howCamDXWorks } from './learn/how-camdx-works';
import { whatIsCamInvoice } from './learn/what-is-caminvoice';
import { howToAcceptKHQR } from './learn/how-to-accept-khqr';
import { whatIsCambodiaGaaP } from './learn/what-is-cambodia-gaap';
// Learn — restored 2026-08-31 (62010 pivot, Phase A3). Deleted 2026-06-18 in c5b5201.
import { cambodiaFintechLandscape } from './learn/cambodia-fintech-landscape';
import { supplyChainFinanceCambodia } from './learn/supply-chain-finance-cambodia';
import { complianceAsAService } from './learn/compliance-as-a-service';
import { fintechLicenseCambodia } from './learn/fintech-license-cambodia';
import { cambodiaAmlRequirements } from './learn/cambodia-aml-requirements';
import { crossBorderPaymentsBakong } from './learn/cross-border-payments-bakong';
// Insights — restored 2026-08-31 after a currency audit. Data is 2024/2025 and the
// leads say so; only one forward-looking claim had actually elapsed (the mid-2026
// Bakong-NAPAS/LAPNet corridor launch) and it was reframed rather than asserted.
import { aseanFintechInvestment } from './insights/asean-fintech-investment';
import { bakongAdoptionMetrics } from './insights/bakong-adoption-metrics';
import { cambodiaDigitalPaymentGrowth } from './insights/cambodia-digital-payment-growth';
import { cambodiaVsRegionalFintech } from './insights/cambodia-vs-regional-fintech';
import { caminvoiceRolloutImpact } from './insights/caminvoice-rollout-impact';
import { smeDigitalReadiness } from './insights/sme-digital-readiness';
// Knowledge — restored 2026-08-31 (62010 pivot, Phase A2). TechArticle deep-dives.
import { cambodiaGaapArchitecture } from './knowledge/cambodia-gaap-architecture';
import { bakongTechnicalIntegration } from './knowledge/bakong-technical-integration';
import { cambodiaFintechRegulation } from './knowledge/cambodia-fintech-regulation';
import { cambodiaScfOpportunity } from './knowledge/cambodia-scf-opportunity';
import { caminvoiceTechnicalCompliance } from './knowledge/caminvoice-technical-compliance';
import { cambodiaDigitalIdentity } from './knowledge/cambodia-digital-identity';
import { cambodiaPaymentEcosystem } from './knowledge/cambodia-payment-ecosystem';
import { aseanDigitalEconomyComparison } from './knowledge/asean-digital-economy-comparison';
// Use cases — REWRITTEN 2026-08-31 (62010 pivot, Phase A4), not restored. The four
// originals were fabricated case studies naming clients that did not exist, with
// invented outcome figures; two of them also described CamFinTech operating
// services across the design seam, and one carried an access claim. Nothing from
// that framing survives. These are labelled scoping documents — see
// app/components/ScenarioNotice.tsx, which the layout renders unconditionally for
// this content type.
import { enterpriseBakongIntegration } from './use-cases/enterprise-bakong-integration';
import { smeComplianceAutomation } from './use-cases/sme-compliance-automation';
import { crossBorderPaymentOptimization } from './use-cases/cross-border-payment-optimization';
import { digitalLendingPlatform } from './use-cases/digital-lending-platform';

// Restored 2026-08-31 (62010 pivot): /knowledge/* (8) and 6 /learn/* articles are
// back at their original URLs — a restored 200 preserves far more authority than any
// redirect. Their next.config.js redirects were removed in the same commit.
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
  // Learn (factual / educational — retained)
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
  // Insights (Article — market data and analysis)
  aseanFintechInvestment,
  bakongAdoptionMetrics,
  cambodiaDigitalPaymentGrowth,
  cambodiaVsRegionalFintech,
  caminvoiceRolloutImpact,
  smeDigitalReadiness,
  // Knowledge (TechArticle deep-dives)
  cambodiaGaapArchitecture,
  bakongTechnicalIntegration,
  cambodiaFintechRegulation,
  cambodiaScfOpportunity,
  caminvoiceTechnicalCompliance,
  cambodiaDigitalIdentity,
  cambodiaPaymentEcosystem,
  aseanDigitalEconomyComparison,
  // Engagement scenarios (Article — illustrative scoping documents)
  enterpriseBakongIntegration,
  smeComplianceAutomation,
  crossBorderPaymentOptimization,
  digitalLendingPlatform,
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
