import Link from "next/link";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO
  summary?: string;
};

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group">
      <div className="flex gap-6 items-baseline">
        <time className="w-24 shrink-0 text-sm text-[--color-muted]" dateTime={post.date}>
          {post.date}
        </time>
        <div>
          <Link href={`/blog/${post.slug}`} className="inline-flex items-center">
            <h3 className="text-lg md:text-xl group-hover:underline underline-offset-4">{post.title}</h3>
          </Link>
          {post.summary && (
            <p className="mt-1 text-[--color-muted]">{post.summary}</p>
          )}
        </div>
      </div>
    </article>
  );
}


