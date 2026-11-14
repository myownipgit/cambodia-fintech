import { MetadataRoute } from "next";
import { getAllArticles } from "./content/registry";
import { getAllInstruments } from "./content/regulatory/registry";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.camfintech.com";
  const articles = getAllArticles();
  const instruments = getAllInstruments();

  // lastModified must be a real content date, never the build time. Until
  // 2026-11-14 the twelve static and index URLs used `new Date()`, so each one
  // claimed to change on every deploy. Google learns to ignore a lastmod that
  // is always "now", which takes away one of the few hints a young site gives
  // its crawler. The rules now:
  //  - a section index takes the newest date among its own entries
  //  - the homepage, which lists all sections, takes the newest date on the site
  //  - a page with no recorded content date has no lastModified at all,
  //    because no date is better than a wrong one
  const newest = (dates: string[]) =>
    dates.length ? new Date(dates.reduce((a, b) => (a > b ? a : b))) : undefined;
  const sectionDate = (type: string) =>
    newest(articles.filter((a) => a.type === type).map((a) => a.updatedAt));
  const regulatoryDate = newest(instruments.map((i) => i.asAt));
  const siteDate = newest([
    ...articles.map((a) => a.updatedAt),
    ...instruments.map((i) => i.asAt),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: siteDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/products/dasp`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/publication`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/glossary`, lastModified: sectionDate("glossary"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/learn`, lastModified: sectionDate("learn"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/insights`, lastModified: sectionDate("insights"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/knowledge`, lastModified: sectionDate("knowledge"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/use-cases`, lastModified: sectionDate("use-cases"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/regulatory`, lastModified: regulatoryDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.4 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/${article.type}/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Regulatory instruments. `asAt` — the date the entry was last verified
  // against its source — is the correct lastModified: it is the only date on
  // these pages that reflects when the content was actually checked.
  const instrumentPages: MetadataRoute.Sitemap = instruments.map((instrument) => ({
    url: `${baseUrl}/regulatory/${instrument.slug}`,
    lastModified: new Date(instrument.asAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages, ...instrumentPages];
}
