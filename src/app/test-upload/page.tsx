"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter }
from "@/app/api/uploadthing/core";

export default function TestUploadPage() {
  return (
    <main className="p-10">
      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log(res);
          alert(res?.[0]?.url);
        }}
      />
    </main>
  );
}