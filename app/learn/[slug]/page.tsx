import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticlesByType, getArticleByTypeAndSlug } from '@/app/content/registry';
import { ogImage } from '@/app/og';
import ArticleLayout from '@/app/components/ArticleLayout';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getArticlesByType('learn');
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleByTypeAndSlug('learn', slug);
  if (!article) return {};

  return {
    title: `${article.title} — CamFinTech`,
    description: article.description,
    alternates: { canonical: `/learn/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/learn/${article.slug}`,
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

export default async function LearnArticle({ params }: Props) {
  const { slug } = await params;
  const article = getArticleByTypeAndSlug('learn', slug);
  if (!article) notFound();

  return <ArticleLayout article={article} />;
}
