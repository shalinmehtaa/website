export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const items = [
    { title: "Building LLMs from scratch", tag: "Research & Engineering", href: "#" },
  ];
  return (
    <main className="wrap py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((it) => (
          <a key={it.title} href={it.href} className="card p-6 transition-transform hover:-translate-y-0.5">
            <div className="text-[--color-muted] text-sm mb-2">{it.tag}</div>
            <div className="text-lg md:text-xl">{it.title}</div>
          </a>
        ))}
      </div>
    </main>
  );
}


