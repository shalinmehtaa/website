import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { format } from "date-fns";

export type PostFrontmatter = {
  title: string;
  date: string; // ISO
  summary?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content", "posts");

export function listPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/i, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const filepathMd = path.join(postsDir, `${slug}.md`);
  const filepathMdx = path.join(postsDir, `${slug}.mdx`);
  const filepath = fs.existsSync(filepathMd) ? filepathMd : fs.existsSync(filepathMdx) ? filepathMdx : null;
  if (!filepath) return null;
  const raw = fs.readFileSync(filepath, "utf8");
  const parsed = matter(raw);
  const content = parsed.content;
  const fm = parsed.data as Record<string, unknown>;

  const title = typeof fm.title === "string" ? fm.title : slug;
  const summary = typeof fm.summary === "string" ? fm.summary : "";
  const value = fm.date;
  let normalizedDate: string;
  if (value instanceof Date) {
    normalizedDate = format(value, "yyyy-MM-dd");
  } else if (typeof value === "string") {
    normalizedDate = value;
  } else {
    normalizedDate = new Date().toISOString().slice(0, 10);
  }
  return { slug, title, date: normalizedDate, summary, content };
}

export function getAllPosts(): Post[] {
  return listPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => Boolean(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}


