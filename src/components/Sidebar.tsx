"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

const items: NavItem[] = [
  { label: "Writing", href: "/blog" },
  { label: "Projects", href: "/projects" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 h-screen flex flex-col justify-between">
      <div>
        <div className="px-6 py-6">
          <Link href="/" className="text-[18px] font-medium tracking-normal text-[--color-foreground] hover:underline underline-offset-4">Shalin Mehta</Link>
          <div className="mt-3 flex items-center gap-3 text-[--color-muted]">
            <a href="https://github.com/shalinmehtaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="opacity-70 hover:opacity-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.23.68-.5 0-.25-.01-.92-.01-1.8-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.52-1.13-1.52-.93-.65.07-.64.07-.64 1.02.07 1.55 1.07 1.55 1.07.91 1.59 2.38 1.13 2.96.86.09-.68.36-1.13.66-1.39-2.22-.26-4.56-1.13-4.56-5 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.04.8-.23 1.65-.35 2.5-.35s1.7.12 2.5.35c1.9-1.31 2.74-1.04 2.74-1.04.56 1.43.21 2.49.11 2.75.64.71 1.03 1.61 1.03 2.72 0 3.88-2.34 4.73-4.57 4.98.37.33.71.98.71 1.99 0 1.44-.01 2.6-.01 2.95 0 .28.18.61.69.5A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/shalin-mehta-a9831812a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-70 hover:opacity-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM10 9h3.8v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.06V21h-4v-5.33c0-1.27-.02-2.91-1.77-2.91-1.78 0-2.05 1.38-2.05 2.81V21h-4z"/>
              </svg>
            </a>
            <a href="https://x.com/shalinmehtaaa" target="_blank" rel="noopener noreferrer" aria-label="X" className="opacity-70 hover:opacity-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.25 2h3.02l-6.6 7.55 7.75 11.45h-6.06l-4.74-6.79L6 21H2.98l7.06-8.07L2.5 2h6.2l4.28 6.13L18.25 2zm-1.06 19h1.67L8.93 4.13H7.2L17.19 21z"/>
              </svg>
            </a>
          </div>
        </div>
        <nav className="px-3 space-y-1">
          {items.map((it) => {
            const isActive = pathname?.startsWith(it.href);
            const base = "flex items-center rounded-md px-3 py-2 text-sm";
            const state = isActive
              ? "bg-black/5 text-black dark:bg-white/10 dark:text-white"
              : "hover:bg-black/5 dark:hover:bg-white/10";
            return (
              <Link key={it.href} href={it.href} className={`${base} ${state}`}>
                <span>{it.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}


