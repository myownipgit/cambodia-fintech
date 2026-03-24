import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticlesByType, getArticleByTypeAndSlug } from '@/app/content/registry';
import ArticleLayout from '@/app/components/ArticleLayout';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const articles = getArticlesByType('glossary');
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleByTypeAndSlug('glossary', params.slug);
  if (!article) return {};

  return {
    title: `${article.title} — CamFinTech Glossary`,
    description: article.description,
    alternates: { canonical: `/glossary/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/glossary/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default function GlossaryArticle({ params }: Props) {
  const article = getArticleByTypeAndSlug('glossary', params.slug);
  if (!article) notFound();

  return <ArticleLayout article={article} />;
}
