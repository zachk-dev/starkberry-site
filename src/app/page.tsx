// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  const stats = [
    { label: "Apps", value: 0 },
    { label: "VR Games", value: 0 },
    { label: "Extensions", value: 0 },
  ];

  return (
    <div className="space-y-10">
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">StarkBerry Software</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Solo studio shipping small, sharp tools—Apps, VR games, and Chrome extensions—to learn fast and help people faster.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link className="btn btn-primary" href="/projects">See projects</Link>
          <Link className="btn" href="/blog">Read devlogs</Link>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card text-center">
            <div className="text-4xl font-semibold">{s.value}</div>
            <div className="text-gray-600">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="card">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Latest post</h2>
          <Link href="/blog" className="text-sm underline">View all</Link>
        </div>
        <p className="text-gray-700">No posts yet. First devlog coming soon.</p>
      </section>
    </div>
  );
}