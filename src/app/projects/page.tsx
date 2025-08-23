// src/app/projects/page.tsx
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <article key={p.name} className="card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{p.name}</h3>
              <span className="badge">{p.status}</span>
            </div>
            <p className="text-gray-600 mb-3">{p.summary}</p>
            <div className="text-sm flex gap-3">
              <span className="badge">{p.type}</span>
              {p.link && (
                <a className="underline" href={p.link} target="_blank" rel="noreferrer">
                  Link
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}