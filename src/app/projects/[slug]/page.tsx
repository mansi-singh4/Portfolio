import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;
  

const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-8 py-24">

      {/* Hero */}

      <div className="mb-16">
        <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
          Case Study
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {project.title}
        </h1>

        <p className="text-xl text-zinc-400 max-w-3xl">
          {project.description}
        </p>
      </div>

      {/* Screenshot */}

      <div className="relative h-[500px] mb-20 overflow-hidden border border-white/10">
  {project.imageUrl ? (
    <Image
      src={project.imageUrl}
      alt={project.title}
      fill
      className="object-cover"
    />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-500">
      No Project Image
    </div>
  )}
</div>
      {/* Tech Stack */}

{/* Tech Stack */}

<div className="flex flex-wrap gap-3 mb-8">
  {project.techStack.map((tech) => (
    <span
      key={tech}
      className="border border-white/10 px-4 py-2 text-sm"
    >
      {tech}
    </span>
  ))}
</div>

{/* Project Links */}

<div className="flex gap-4 mb-20">
  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white/10 px-5 py-3 hover:border-white/30 transition"
  >
    GitHub
  </a>

  <a
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white/10 px-5 py-3 hover:border-white/30 transition"
  >
    Live Demo
  </a>
</div>
      

      {/* Content */}

      <div className="space-y-16">

        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Overview
          </h2>

          <p className="text-zinc-400 leading-8">
            {project.overview}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Problem
          </h2>

          <p className="text-zinc-400 leading-8">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Solution
          </h2>

          <p className="text-zinc-400 leading-8">
            {project.solution}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Challenges
          </h2>

          <p className="text-zinc-400 leading-8">
            {project.challenges}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Key Learnings
          </h2>

          <p className="text-zinc-400 leading-8">
            {project.learnings}
          </p>
        </section>
      </div>

    </main>
  );
}