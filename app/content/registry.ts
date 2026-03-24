import { ArticleContent } from './types';
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

const allArticles: ArticleContent[] = [
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
