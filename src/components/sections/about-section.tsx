import { aboutParagraphs, aboutStats, certifications, education } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const strengths = [
  "Distributed system integration and message-driven workflows",
  "Backend APIs for financial products and high-integrity transactions",
  "Cloud delivery with AWS services, Docker, Jenkins, and Kubernetes",
  "Maintainable production systems with strong operational clarity",
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Engineering profile built around reliable backend delivery"
          description="The portfolio is intentionally focused on the work recruiters and engineering managers care about most: complex domain delivery, systems thinking, and production execution."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-ambient sm:p-8">
            <div className="space-y-5">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-300 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                Education
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">{education.school}</h3>
              <p className="mt-2 text-sm text-slate-300">{education.degree}</p>
              <p className="mt-4 text-sm text-slate-400">GPA {education.gpa}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                Specialized focus
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                Selected certifications
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
