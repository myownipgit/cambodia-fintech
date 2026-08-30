import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticlesByType, getArticleByTypeAndSlug } from '@/app/content/registry';
import ArticleLayout from '@/app/components/ArticleLayout';

interface Props {
  // params is a Promise in Next 16. The version of this file deleted in
  // c5b5201 declared it as a plain object; restoring that signature typechecks
  // against its own wrong declaration and then resolves slug to undefined at
  // runtime — every article serves a 404 body at HTTP 200, which curl does not
  // catch. Keep this in step with app/insights/[slug]/page.tsx.
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getArticlesByType('use-cases');
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleByTypeAndSlug('use-cases', slug);
  if (!article) return {};

  return {
    title: `${article.title} — CamFinTech Engagement Scenarios`,
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

export default async function UseCaseArticle({ params }: Props) {
  const { slug } = await params;
  const article = getArticleByTypeAndSlug('use-cases', slug);
  if (!article) notFound();

  return <ArticleLayout article={article} />;
}
