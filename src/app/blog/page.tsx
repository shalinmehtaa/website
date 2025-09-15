import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="wrap py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Writing</h1>
      <div className="space-y-4">
        {posts.map((p) => (
          <PostCard key={p.slug} post={{ slug: p.slug, title: p.title, date: p.date, summary: p.summary }} />
        ))}
      </div>
    </main>
  );
}


