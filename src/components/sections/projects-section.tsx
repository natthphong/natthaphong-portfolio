"use client";

import { useState } from "react";

import { projectFilters, projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that demonstrates backend depth, domain complexity, and product thinking"
          description="Project selection is intentionally biased toward systems design, financial workflows, event-driven integration, and backend ownership. Each entry is rendered from structured project data and supports its own screenshot set."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                activeFilter === filter
                  ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
