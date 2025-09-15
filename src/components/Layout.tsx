import Link from "next/link";
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr]">
      <aside className="hidden md:block sidebar">
        <Sidebar />
      </aside>

      <div className="min-w-0">
        <header className="md:hidden wrap py-6 border-b border-[--color-divider]">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-sm tracking-normal text-[--color-muted] hover:underline underline-offset-4">
              Shalin Mehta
            </Link>
            <div className="flex items-center gap-5">
              <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
              <Link href="/projects" className="hover:underline underline-offset-4">Projects</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="md:hidden wrap py-12 text-sm text-[--color-muted]">
          © {new Date().getFullYear()} Shalin Mehta
        </footer>
      </div>
    </div>
  );
}


