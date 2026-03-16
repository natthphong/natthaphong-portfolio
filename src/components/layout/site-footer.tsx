import Link from "next/link";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <Container className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-slate-400">
            Backend engineer portfolio focused on financial systems, distributed services, and AWS delivery.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
          <Link href={siteConfig.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}
