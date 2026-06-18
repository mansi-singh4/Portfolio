import { prisma } from "@/lib/prisma";
import { createProject } from "./actions";

export default async function AdminPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log("Projects:", projects);
 
//   const projects = await prisma.project.findMany();

// console.log(projects);

  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <form
  action={createProject}
  className="border border-white/10 p-6 mb-12 space-y-4"
>
  <h2 className="text-2xl font-semibold">
    Add Project
  </h2>

  <input
    name="title"
    placeholder="Project Title"
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <input
    name="slug"
    placeholder="project-slug"
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <input
    name="imageUrl"
    placeholder="/projects/project.png"
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <input
    name="githubUrl"
    placeholder="GitHub URL"
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <input
    name="liveUrl"
    placeholder="Live Demo URL"
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <input
    name="techStack"
    placeholder="Next.js, Prisma, PostgreSQL"
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <textarea
    name="description"
    placeholder="Short Description"
    rows={3}
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <textarea
    name="overview"
    placeholder="Overview"
    rows={4}
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <textarea
    name="problem"
    placeholder="Problem"
    rows={4}
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <textarea
    name="solution"
    placeholder="Solution"
    rows={4}
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <textarea
    name="challenges"
    placeholder="Challenges"
    rows={4}
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <textarea
    name="learnings"
    placeholder="Learnings"
    rows={4}
    className="w-full bg-transparent border border-white/10 p-3"
  />

  <label className="flex items-center gap-3">
    <input
      type="checkbox"
      name="featured"
    />
    Featured Project
  </label>

  <button
    type="submit"
    className="bg-white text-black px-6 py-3"
  >
    Create Project
  </button>
</form>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white/10 p-4"
          >
<div className="flex justify-between items-center">
  <div>
    <h3 className="font-semibold text-lg">
      {project.title}
    </h3>

    <p className="text-zinc-500">
      {project.slug}
    </p>
  </div>

  <div className="flex gap-3">
<div className="flex gap-3">
  <a
    href={`/projects/${project.slug}`}
    className="border border-white/10 px-4 py-2"
  >
    View
  </a>

  <a
    href={`/admin/edit/${project.id}`}
    className="border border-white/10 px-4 py-2"
  >
    Edit
  </a>
</div>
  </div>
</div>
          </div>
        ))}
      </div>
    </main>
  );
}