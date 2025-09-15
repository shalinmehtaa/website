import Prose from "@/components/Prose";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const processed = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify)
    .process(post.content);

  const html = processed.toString();

  return (
    <main className="wrap py-16 md:py-24">
      <article>
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight">{post.title}</h1>
          <p className="text-sm text-[--color-muted] mt-2">{post.date}</p>
        </header>
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Prose>
      </article>
    </main>
  );
}


