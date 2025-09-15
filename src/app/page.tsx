import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);
  return (
    <main className="wrap py-14 md:py-16">
      <section className="space-y-6">
        <h1 className="text-[28px] md:text-[32px] font-medium tracking-tight">Hello!</h1>
        <p className="max-w-2xl text-[17px] leading-8 text-[--color-foreground]">
          I&apos;m Shalin. I am a quant researcher based in London. I am currently working on building products and doing research with AI.
        </p>
        <p className="max-w-2xl text-[17px] leading-8 text-[--color-foreground]">
          I also enjoy taking pictures and long walks.
        </p>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[15px] font-medium text-[--color-muted]">Writing</h2>
          <Link href="/blog" className="text-[14px] text-[--color-muted] hover:underline underline-offset-4">See all →</Link>
        </div>
        <div className="rounded-xl border border-[--color-divider] overflow-hidden bg-white/60 dark:bg-white/5">
          {posts.map((p, idx) => (
            <div key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="row">
                <div className="flex items-baseline gap-6">
                  <span className="text-sm text-[--color-muted] w-28 shrink-0">{format(new Date(p.date), "MMM d, yyyy")}</span>
                  <span>{p.title}</span>
                </div>
              </Link>
              {idx < posts.length - 1 && <div className="divider" />}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
