import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "記事が見つかりません | エーワンロード株式会社",
      description: "お探しの記事は存在しません。",
    };
  }

  return {
    title: `${post.title} | エーワンロード株式会社`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["エーワンロード株式会社"],
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Organization",
          name: "エーワンロード株式会社",
          url: "https://a1road.com",
        },
        publisher: {
          "@type": "Organization",
          name: "エーワンロード株式会社",
          logo: {
            "@type": "ImageObject",
            url: "https://a1road.com/logo.png",
          },
        },
      }),
    },
  };
}
