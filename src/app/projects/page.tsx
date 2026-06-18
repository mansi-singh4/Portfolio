import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="max-w-7xl mx-auto px-8 py-24">
      <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
        Archive
      </p>

      <h1 className="text-6xl md:text-8xl font-bold mb-16">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imageUrl={project.imageUrl}
            slug={project.slug}
          />
        ))}
      </div>
    </main>
  );
}