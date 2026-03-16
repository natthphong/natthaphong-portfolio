import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { ProjectCarousel } from "@/components/projects/project-carousel";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-ambient">
      <div className="border-b border-white/10 p-4">
        <ProjectCarousel images={project.images} title={project.title} priority={priority} />
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100">
                {project.category}
              </span>
              {project.featured ? (
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
                  Featured
                </span>
              ) : null}
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                {project.summary}
              </p>
            </div>
          </div>

          {(project.role || project.timeframe) && (
            <div className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-slate-300">
              {project.role ? <p className="font-medium text-white">{project.role}</p> : null}
              {project.timeframe ? <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{project.timeframe}</p> : null}
            </div>
          )}
        </div>

        <ul className="space-y-3 text-sm leading-7 text-slate-300">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
          >
            View case study
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
          {project.links?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
            >
              {link.label}
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
