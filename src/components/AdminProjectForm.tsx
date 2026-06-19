"use client";

import { useState } from "react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

type Props = {
  action: (formData: FormData) => Promise<void>;
};

export default function AdminProjectForm({
  action,
}: Props) {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <form action={action} className="space-y-4">

      <input
        name="title"
        placeholder="Project Title"
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <input
        name="slug"
        placeholder="project-slug"
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <textarea
        name="description"
        placeholder="Short Description"
        rows={3}
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <input
        name="githubUrl"
        placeholder="GitHub URL"
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <input
        name="liveUrl"
        placeholder="Live Demo URL"
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <input
        name="techStack"
        placeholder="Next.js, Prisma, PostgreSQL"
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <textarea
        name="overview"
        placeholder="Overview"
        rows={4}
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <textarea
        name="problem"
        placeholder="Problem"
        rows={4}
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <textarea
        name="solution"
        placeholder="Solution"
        rows={4}
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <textarea
        name="challenges"
        placeholder="Challenges"
        rows={4}
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <textarea
        name="learnings"
        placeholder="Learnings"
        rows={4}
        className="w-full border border-white/10 p-3 bg-transparent"
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          name="featured"
        />
        Featured Project
      </label>

      <div className="space-y-3">
        <p className="text-sm text-zinc-400">
          Project Image
        </p>

        <UploadButton<OurFileRouter, "imageUploader">
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            const url = res?.[0]?.ufsUrl ?? "";
            setImageUrl(url);
          }}
        />

        <input
          type="hidden"
          name="imageUrl"
          value={imageUrl}
        />

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            className="w-64 rounded border border-white/10"
          />
        )}
      </div>

      <button
        type="submit"
        className="bg-white text-black px-6 py-3"
      >
        Create Project
      </button>

    </form>
  );
}