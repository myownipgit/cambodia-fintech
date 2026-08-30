import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticlesByType, getArticleByTypeAndSlug } from '@/app/content/registry';
import ArticleLayout from '@/app/components/ArticleLayout';

interface Props {
  // params is a Promise in Next 16 — see app/knowledge/[slug]/page.tsx for what
  // the pre-2026-06 signature does at runtime (404 body served at HTTP 200).
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getArticlesByType('insights');
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleByTypeAndSlug('insights', slug);
  if (!article) return {};

  return {
    title: `${article.title} — CamFinTech Insights`,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/insights/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default async function InsightsArticle({ params }: Props) {
  const { slug } = await params;
  const article = getArticleByTypeAndSlug('insights', slug);
  if (!article) notFound();

  return <ArticleLayout article={article} />;
}
