import { prisma } from "@/lib/prisma";
import { createProject } from "./actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminProjectForm
from "@/components/AdminProjectForm";

export default async function AdminPage() {

   const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }
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

      <AdminProjectForm
  action={createProject}
/>

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