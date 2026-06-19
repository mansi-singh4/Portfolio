import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { updateProject,deleteProject } from "../../actions";
import EditImageUpload from "@/components/EditImageUpload";

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
    <main className="max-w-5xl mx-auto px-8 py-16">

      <div className="mb-12">
        <a
          href="/admin"
          className="text-zinc-500 hover:text-white transition"
        >
          ← Back to Dashboard
        </a>

        <h1 className="text-5xl font-bold mt-4">
          Edit Project
        </h1>

        <p className="text-zinc-400 mt-3">
          Update project details and case study content.
        </p>
      </div>

      <form
        action={updateProject.bind(null, project.id)}
        className="space-y-10"
      >

        {/* Basic Info */}

        <section className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Basic Information
          </h2>

          <div className="space-y-4">

            <input
              name="title"
              defaultValue={project.title}
              placeholder="Project Title"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

            <input
              name="slug"
              defaultValue={project.slug}
              placeholder="project-slug"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

            <textarea
              name="description"
              defaultValue={project.description}
              rows={4}
              placeholder="Short Description"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

          </div>
        </section>

        {/* Links */}

        <section className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Links
          </h2>

          <div className="space-y-4">

            <input
              name="githubUrl"
              defaultValue={project.githubUrl}
              placeholder="GitHub URL"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

            <input
              name="liveUrl"
              defaultValue={project.liveUrl}
              placeholder="Live Demo URL"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

          </div>
        </section>

        {/* Tech Stack */}

        <section className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Tech Stack
          </h2>

          <input
            name="techStack"
            defaultValue={project.techStack.join(", ")}
            placeholder="Next.js, Prisma, PostgreSQL"
            className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
          />
        </section>

        {/* Image */}

        <section className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Project Image
          </h2>

<EditImageUpload
  initialUrl={project.imageUrl}
/>
        </section>

        {/* Case Study */}

        <section className="border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Case Study Content
          </h2>

          <div className="space-y-6">

            <textarea
              name="overview"
              defaultValue={project.overview}
              rows={6}
              placeholder="Overview"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

            <textarea
              name="problem"
              defaultValue={project.problem}
              rows={6}
              placeholder="Problem"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

            <textarea
              name="solution"
              defaultValue={project.solution}
              rows={6}
              placeholder="Solution"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

            <textarea
              name="challenges"
              defaultValue={project.challenges}
              rows={6}
              placeholder="Challenges"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

            <textarea
              name="learnings"
              defaultValue={project.learnings}
              rows={6}
              placeholder="Learnings"
              className="w-full rounded-xl border border-white/10 bg-zinc-900/50 p-4"
            />

          </div>
        </section>

        {/* Featured */}

        <section className="border border-white/10 rounded-2xl p-6">
          <label className="flex items-center gap-3 text-lg">
            <input
              type="checkbox"
              name="featured"
              defaultChecked={project.featured}
            />

            Featured Project
          </label>
        </section>

        <button
          type="submit"
          className="bg-white text-black px-8 py-4 rounded-xl font-medium"
        >
          Save Changes
        </button>

        

      </form>
      <div className="pt-4 border-t border-white/10">
  <form action={deleteProject.bind(null, project.id)}>
    <button
      type="submit"
      className="px-6 py-3 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl transition"
    >
      Delete Project
    </button>
  </form>
</div>
    </main>
  );
}