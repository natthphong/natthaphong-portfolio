import { skillGroups } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical depth across backend delivery, cloud infrastructure, and financial domain work"
          description="The stack is presented by capability area rather than progress bars so it reads the way engineering teams evaluate experience in practice."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.05}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                {group.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-sm font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
