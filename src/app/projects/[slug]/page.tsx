import type { Metadata } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectCarousel } from "@/components/projects/project-carousel";
import { Container } from "@/components/ui/container";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      images: [
        {
          url: project.images[0]?.src ?? "/images/hero-image.png",
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeader />
      <main className="pb-20 pt-24">
        <Container>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div className="space-y-8">
              <div>
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

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  {project.description}
                </p>
              </div>

              <ProjectCarousel
                images={project.images}
                title={project.title}
                priority
                className="shadow-ambient"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                    Key highlights
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                    Delivered capabilities
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                  Project snapshot
                </p>
                <div className="mt-5 space-y-4 text-sm text-slate-300">
                  {project.role ? (
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Role</p>
                      <p className="mt-1 text-white">{project.role}</p>
                    </div>
                  ) : null}
                  {project.timeframe ? (
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Timeline</p>
                      <p className="mt-1 text-white">{project.timeframe}</p>
                    </div>
                  ) : null}
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Category</p>
                    <p className="mt-1 text-white">{project.category}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                  Tech stack
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 text-sm font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-ambient">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                  Focus areas
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
