import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="font-semibold text-lg">
            Mansi Singh
          </h3>

          <p className="text-sm text-zinc-500 mt-1">
            Full Stack Developer • Computer Science Student
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            className="hover:text-zinc-300 transition"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            className="hover:text-zinc-300 transition"
          >
            LinkedIn
          </Link>

          <Link
            href="mailto:YOUR_EMAIL"
            className="hover:text-zinc-300 transition"
          >
            Email
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="hover:text-zinc-300 transition"
          >
            Resume
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 text-sm text-zinc-500 flex justify-between">
          <span>© 2026 Mansi Singh</span>

          <span>
            Built with Next.js, Prisma & PostgreSQL
          </span>
        </div>
      </div>
    </footer>
  );
}