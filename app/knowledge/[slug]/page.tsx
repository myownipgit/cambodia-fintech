import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticlesByType, getArticleByTypeAndSlug } from '@/app/content/registry';
import { ogImage } from '@/app/og';
import ArticleLayout from '@/app/components/ArticleLayout';

// params is a Promise in Next 16. The pre-2026-06 version of this file declared it
// as a plain object, which typechecks against its own wrong declaration and then
// resolves slug to undefined at runtime — every article 404s while the route still
// returns 200. Keep this signature in step with app/learn/[slug]/page.tsx.
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getArticlesByType('knowledge');
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleByTypeAndSlug('knowledge', slug);
  if (!article) return {};

  return {
    title: `${article.title} — CamFinTech Knowledge Base`,
    description: article.description,
    alternates: { canonical: `/knowledge/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/knowledge/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [ogImage],
    },
  };
}

export default async function KnowledgeArticle({ params }: Props) {
  const { slug } = await params;
  const article = getArticleByTypeAndSlug('knowledge', slug);
  if (!article) notFound();

  return <ArticleLayout article={article} />;
}
