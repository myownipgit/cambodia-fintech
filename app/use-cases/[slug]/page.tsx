import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticlesByType, getArticleByTypeAndSlug } from '@/app/content/registry';
import ArticleLayout from '@/app/components/ArticleLayout';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const articles = getArticlesByType('use-cases');
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleByTypeAndSlug('use-cases', params.slug);
  if (!article) return {};

  return {
    title: `${article.title} — CamFinTech Use Cases`,
    description: article.description,
    alternates: { canonical: `/use-cases/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/use-cases/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default function UseCaseArticle({ params }: Props) {
  const article = getArticleByTypeAndSlug('use-cases', params.slug);
  if (!article) notFound();

  return <ArticleLayout article={article} />;
}
