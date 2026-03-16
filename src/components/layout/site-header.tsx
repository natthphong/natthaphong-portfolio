"use client";

import {
  ArrowDownTrayIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 font-mono text-sm font-semibold text-cyan-200">
            NJ
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-wide text-white sm:text-base">
              {siteConfig.name}
            </span>
            <span className="block truncate text-xs uppercase tracking-[0.24em] text-slate-400">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.resumePath}
            target="_blank"
            rel="noreferrer"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            Resume
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-100 transition hover:border-cyan-300/30 hover:text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 lg:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="flex flex-col gap-2 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.04] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.resumePath}
            target="_blank"
            rel="noreferrer"
            download
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            Download resume
          </Link>
        </Container>
      </div>
    </header>
  );
}
