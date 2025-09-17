import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <header className="wrap py-5">
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="font-light tracking-tight text-[--color-foreground] hover:underline underline-offset-4">
            Shalin Mehta
          </Link>
          <Link href="/blog" className="font-light hover:underline underline-offset-4">Writing</Link>
          <Link href="/projects" className="font-light hover:underline underline-offset-4">Projects</Link>
          <Link href="/research" className="font-light hover:underline underline-offset-4">Research</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}


