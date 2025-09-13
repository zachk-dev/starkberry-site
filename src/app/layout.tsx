// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "StarkBerry Software",
  description: "Solo studio shipping Apps, VR games, and Chrome extensions.\nSiteUnderConstruction",
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
              <text> --- </text>
              <a
                href="https://www.linkedin.com/in/zachary---kushner"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-gray-600"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
                          2.76 2.24 5 5 5h14c2.76 0 
                          5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                          19h-3v-10h3v10zm-1.5-11.27c-.97 
                          0-1.75-.79-1.75-1.76s.78-1.75 
                          1.75-1.75 1.75.78 
                          1.75 1.75-.78 1.76-1.75 
                          1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 
                          0-2.17 1.46-2.17 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 
                          1.38-1.54 2.84-1.54 3.04 0 3.6 
                          2 3.6 4.59v5.58z"/>
                </svg>
                <span className="hidden sm:inline">LinkedIn</span>
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
              <a
                href="https://www.linkedin.com/in/zachary---kushner/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-gray-600"
              >
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true"
                >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
                            2.76 2.24 5 5 5h14c2.76 0 
                            5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                            19h-3v-10h3v10zm-1.5-11.27c-.97 
                            0-1.75-.79-1.75-1.76s.78-1.75 
                            1.75-1.75 1.75.78 
                            1.75 1.75-.78 1.76-1.75 
                            1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 
                            0-2.17 1.46-2.17 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 
                            1.38-1.54 2.84-1.54 3.04 0 3.6 
                            2 3.6 4.59v5.58z"/>
                </svg>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}