import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  slug: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  imageUrl,
  slug,
  githubUrl,
  liveUrl
}: Props) {
  return (
    <div className="group border border-white/10 overflow-hidden hover:border-white/30 transition duration-300">

      <div className="relative h-56 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-500">
            No Image
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">
          {title}
        </h3>

        <p className="text-zinc-400 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs uppercase border border-white/10 px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mb-6">
  {githubUrl && (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm border border-white/10 px-3 py-2"
    >
      GitHub
    </a>
  )}

  {liveUrl && (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm border border-white/10 px-3 py-2"
    >
      Demo
    </a>
  )}
</div>

        <Link
          href={`/projects/${slug}`}
          className="uppercase text-sm tracking-widest hover:text-zinc-300 transition"
        >
          View Case Study →
        </Link>
      </div>
    </div>
  );
}