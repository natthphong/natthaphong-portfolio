import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { heroHighlights, siteConfig } from "@/data/site";
import { ResumeDownloadLink } from "@/components/ui/resume-download-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">
              Backend Developer with 2+ years of experience
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.05]">
                Backend Developer building{" "}
                <span className="bg-gradient-to-r from-white via-sky-100 to-cyan-200 bg-clip-text text-transparent">
                  scalable financial systems
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I design secure, high-performance backend services for core banking, trading,
                and real-time operational workflows. My recent delivery spans Java, Go, Python,
                distributed messaging, and AWS-backed infrastructure for systems that need
                correctness, resilience, and clear operational behavior.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
              >
                View Projects
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <ResumeDownloadLink
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download Resume
              </ResumeDownloadLink>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:text-white"
              >
                <EnvelopeIcon className="h-4 w-4" />
                Contact Me
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white sm:text-base">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-ambient">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                    Engineer Profile
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Backend systems across banking, trading, and operational platforms.
                  </p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
                  Open to roles
                </span>
              </div>

              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_46%)]" />
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/hero-image.png"
                      alt={`${siteConfig.name} portfolio visual`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 36vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 backdrop-blur">
                    <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                      {siteConfig.role}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Core banking, trading systems, and production-grade APIs
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                      Location
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
