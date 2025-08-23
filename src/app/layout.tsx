// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-black text-white">Contact</Link>
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