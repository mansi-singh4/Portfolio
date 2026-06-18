export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-24">
      <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
        About
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-10">
        Mansi Singh
      </h1>

      <div className="space-y-8 max-w-3xl">
        <p className="text-zinc-400 leading-8">
          I'm a Computer Science student at ABES Engineering College
          with an interest in full-stack development, AI-powered
          applications, and building products that solve real-world
          problems.
        </p>

        <p className="text-zinc-400 leading-8">
          Over the past year, I've built projects ranging from
          college discovery platforms to AI-powered job automation
          systems while exploring modern web technologies such as
          Next.js, PostgreSQL, Prisma, and TypeScript.
        </p>

        <p className="text-zinc-400 leading-8">
          I'm currently focused on becoming a stronger full-stack
          engineer by learning scalability, system design, security,
          accessibility, SEO, caching, and modern software
          architecture.
        </p>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Java",
            "Python",
            "PostgreSQL",
            "Prisma",
            "Tailwind CSS",
            "Git",
            "GitHub",
          ].map((tech) => (
            <span
              key={tech}
              className="border border-white/10 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}