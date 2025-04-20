import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { getWorkById } from "@/actions/works";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";

export default async function WorkDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const workId = Number.parseInt(id);

  if (isNaN(workId)) {
    notFound();
  }

  const work = await getWorkById(workId);

  if (!work) {
    notFound();
  }

  return (
    <div className="pt-24 blob-bg">
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>

      <article className="container-custom relative z-10">
        <AnimatedSection>
          <div className="mb-8">
            <Link
              href="/works"
              className="text-primary hover:underline flex items-center text-sm font-medium"
            >
              <FaArrowLeft className="mr-1 h-4 w-4" />
              実績一覧に戻る
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {work.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">{work.title}</h1>
        </AnimatedSection>

        {work.image_url && (
          <AnimatedSection delay={200}>
            <div className="mb-8 relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src={work.image_url}
                alt={work.title}
                width={1200}
                height={600}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={300}>
          <div className="glass-card p-8 rounded-2xl mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">課題</h2>
                <p>{work.challenge}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">ソリューション</h2>
                <p>{work.solution}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">成果</h2>
                <ul className="space-y-1">
                  {work.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">使用技術</h2>
                <div className="flex flex-wrap gap-2">
                  {work.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-beige-200 text-foreground px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-12 border-t pt-8">
            <h2 className="text-xl font-bold mb-4">関連情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/works">他の実績を見る</Link>
              </Button>
              <Button asChild className="rounded-full">
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </article>
    </div>
  );
}
