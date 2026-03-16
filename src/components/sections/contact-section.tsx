import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { contactLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Available for backend engineering, platform, and financial systems opportunities"
              description="If you are hiring for backend, distributed systems, or financial platform work, I am happy to discuss the role, architecture scope, and delivery expectations."
            />

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                      {link.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white sm:text-base">{link.value}</p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 text-slate-300" />
                </Link>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                Resume
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Download the latest resume for a concise version of experience, project context,
                and core technologies.
              </p>
              <Link
                href={siteConfig.resumePath}
                target="_blank"
                rel="noreferrer"
                download
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download resume
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
