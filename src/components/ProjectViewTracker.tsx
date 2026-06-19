"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function ProjectViewTracker({
  title,
}: {
  title: string;
}) {
  useEffect(() => {
    track("Project View", {
      project: title,
    });
  }, [title]);

  return null;
}