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
