import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { updateProject } from "../../actions";
import { deleteProject } from "../../actions";
import { toggleFeatured } from "../../actions";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProjectPage({
  params,
}: Props) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Edit Project
      </h1>

      <form
  action={updateProject.bind(null, project.id)}
  className="space-y-4"
>
        <input
  name="title"
  defaultValue={project.title}
  className="w-full border border-white/10 p-3 bg-transparent"
/>

<input
  name="slug"
  defaultValue={project.slug}
  className="w-full border border-white/10 p-3 bg-transparent"
/>

<textarea
  name="description"
  defaultValue={project.description}
  className="w-full border border-white/10 p-3 bg-transparent"
  rows={4}
/>
        <button
  type="submit"
  className="bg-white text-black px-6 py-3"
>
  Save Changes
</button>
      </form>

      <form action={deleteProject.bind(null, project.id)}>
  <button
    type="submit"
    className="border border-red-500/30 px-4 py-2 text-red-400"
  >
    Delete
  </button>
</form>

<form
  action={toggleFeatured.bind(
    null,
    project.id,
    project.featured
  )}
>
  <button
    type="submit"
    className={`px-4 py-2 border ${
      project.featured
        ? "border-green-500 text-green-400"
        : "border-zinc-700 text-zinc-500"
    }`}
  >
    {project.featured
      ? "Featured"
      : "Not Featured"}
  </button>
</form>
    </main>
  );
}