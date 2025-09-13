// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const stats = [
    { label: "Apps", value: 6 },
    { label: "VR Games", value: 7 },
    { label: "Extensions", value: 0 },
  ];

  return (
    <div className="space-y-10">
      <section className="text-center space-y-6">
                {/* Accessible, SEO-friendly hidden heading */}
        <h1 className="sr-only">StarkBerry Software</h1>

        <div className="flex justify-center">
          <Image
            src="/logo.png"     // or "/logo.svg"
            alt="StarkBerry Software logo"
            width={360}         // tweak size as needed
            height={360}
            priority
          />
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Solo studio shipping small, sharp tools — Apps, VR games, and Web Extensions — to learn fast and help people faster.
        </p>
        <p>
          <em>Site Under Construction</em>
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