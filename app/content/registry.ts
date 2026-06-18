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

// Retired 2026-06-18 (DPI repositioning per D2 Option E):
//   /knowledge/*  (8 articles)  — 301 selected to /products/dasp; others → /
//   /insights/*   (6 articles)  — 410/404 (Phase 7 follow-up: migrate to riel.report)
//   /use-cases/*  (4 articles)  — 410/404 (pre-logo discipline per DPI vault 57)
//   /learn/cambodia-fintech-landscape, supply-chain-finance-cambodia, compliance-as-a-service,
//     fintech-license-cambodia, cambodia-aml-requirements, cross-border-payments-bakong (6)
// 301 redirects configured in next.config.js.

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
