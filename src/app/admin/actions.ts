"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;

  const overview = formData.get("overview") as string;
  const problem = formData.get("problem") as string;
  const solution = formData.get("solution") as string;
  const challenges = formData.get("challenges") as string;
  const learnings = formData.get("learnings") as string;

  const githubUrl = formData.get("githubUrl") as string;
  const liveUrl = formData.get("liveUrl") as string;
  const imageUrl =
    (formData.get("imageUrl") as string) ||
    "/projects/placeholder.png";

  const techStack =
    (formData.get("techStack") as string)
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean);

  const featured =
    formData.get("featured") === "on";

  await prisma.project.create({
    data: {
      title,
      slug,
      description,

      overview,
      problem,
      solution,
      challenges,
      learnings,

      githubUrl,
      liveUrl,
      imageUrl,

      techStack,

      featured,
    },
  });

  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin");
}

export async function updateProject(
  id: string,
  formData: FormData
) {
  "use server";

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;

  await prisma.project.update({
    where: {
      id,
    },
    data: {
      title,
      slug,
      description,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/projects");
}

export async function deleteProject(id: string) {
  "use server";

  await prisma.project.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/projects");
  revalidatePath("/");
}