// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "StarkBerry Software",
  description: "Solo studio shipping Apps, VR games, and Chrome extensions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <nav className="mx-auto max-w-6xl px-4 flex h-14 items-center justify-between">
            <Link href="/" className="font-semibold">StarkBerry</Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/projects">Projects</Link>
              {/* GitHub link with icon */}
              <a
                href="https://github.com/zachk-dev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-gray-600"
              >
                <Github size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm">
            <p>© {new Date().getFullYear()} StarkBerry Software</p>
            <div className="flex gap-4">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="https://github.com/zachk-dev" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}