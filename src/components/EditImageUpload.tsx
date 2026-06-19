"use client";

import { useState } from "react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export default function EditImageUpload({
  initialUrl,
}: {
  initialUrl: string;
}) {
  const [imageUrl, setImageUrl] = useState(initialUrl);

  return (
    <div className="space-y-4">

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Project"
          className="w-full max-w-xl rounded-xl border border-white/10"
        />
      )}

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
    </div>
  );
}