import { experience } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Work shaped by transaction-heavy systems and operational reliability"
          description="Recent delivery spans core banking, bond sales, service operations, and real-time trading. The common thread is backend ownership for systems where correctness and flow orchestration matter."
        />

        <div className="relative mt-12">
          <div className="absolute left-3 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-cyan-300 via-slate-500/40 to-transparent lg:block" />
          <ol className="space-y-8">
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.period}`} delay={index * 0.05}>
                <li className="grid gap-4 lg:grid-cols-[1.5rem_1fr] lg:gap-6">
                  <div className="hidden pt-2 lg:flex">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    </span>
                  </div>

                  <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                          {item.project ?? item.company}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                          {item.role}
                        </h3>
                        <p className="mt-2 text-sm text-slate-300">{item.company}</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                          {item.period}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-base leading-8 text-slate-300">{item.summary}</p>

                    <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-xs font-medium text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
