import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap py-16">
      <h1 className="text-2xl font-medium tracking-tight">Page not found</h1>
      <p className="mt-4 text-[--color-muted]">The page you were looking for doesnt exist.</p>
      <div className="mt-6">
        <Link href="/" className="hover:underline underline-offset-4">Go home</Link>
      </div>
    </main>
  );
}


