import { notFound } from "next/navigation";
import { Article } from "@/lib/types/article";
import articleJson from "@/data/articleData.json";
import ArticleView from "@/components/pages/ArticleView";

export default async function ArticlePage({
  params,
}: {
  params: { articleID: string };
}) {
  const { articleID } = await params;

  const articles: Article[] = articleJson.articleData.article;

  const targetArticle = articles.find((article) => article.id === articleID);

  if (!targetArticle) return notFound(); // Optional 404 handling

  return (
    <div>
      <ArticleView article={targetArticle} />
    </div>
  );
}
