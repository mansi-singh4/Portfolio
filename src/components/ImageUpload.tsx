"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

type Props = {
  onUploadComplete: (url: string) => void;
};

export default function ImageUpload({
  onUploadComplete,
}: Props) {
  return (
    <UploadButton<OurFileRouter, "imageUploader">
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        if (!res?.[0]) return;

        onUploadComplete(res[0].url);
      }}
    />
  );
}