// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  const stats = [
    { label: "Apps", value: 6 },
    { label: "VR Games", value: 7 },
    { label: "Extensions", value: 0 },
  ];

  return (
    <div className="space-y-10">
      <section className="text-center space-y-6">
        <h1 className="text-7xl sm:text-9xl font-bold tracking-tight">StarkBerry Software</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Solo studio shipping small, sharp tools — Apps, VR games, and Web Extensions — to learn fast and help people faster.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link className="btn btn-primary" href="/projects">See projects</Link>
          <Link className="btn" href="/blog">Read devlogs</Link>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card text-center">
            <div className="text-8xl font-semibold text-black">{s.value}</div>
            <div className="text-gray-600">{s.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}