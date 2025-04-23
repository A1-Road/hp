import { MediaArticle } from "@/types/media";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

async function getArticles(): Promise<MediaArticle[]> {
  const response = await fetch(`/data/media.json`);
  const data = await response.json();
  return data.articles.sort(
    (a: MediaArticle, b: MediaArticle) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default async function MediaPage() {
  const articles = await getArticles();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">メディア掲載</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.id} href={`/media/${article.id}`} className="group block">
            <article className="h-full bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <time dateTime={article.date}>{formatDate(article.date, true)}</time>
                  <span className="mx-2">•</span>
                  <span className="capitalize">{article.category}</span>
                </div>

                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>

                <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
