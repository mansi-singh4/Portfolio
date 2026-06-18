import { getProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default async function FeaturedProjects() {
  const projects = await getProjects();

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <div className="flex justify-between items-center mb-16">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
            Selected Work
          </p>

          <h2 className="text-5xl font-semibold">
            Featured Projects
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
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
    </section>
  );
}