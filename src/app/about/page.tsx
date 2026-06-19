export default function AboutPage() {
  const aboutPoints = [
  "Computer Science student at ABES Engineering College focused on Full-Stack Development, AI Applications, and Software Engineering.",
  "Passionate about building production-ready applications that solve real-world problems and deliver meaningful user experiences.",
  "Experienced in developing end-to-end solutions using Next.js, TypeScript, PostgreSQL, FastAPI, and Machine Learning.",
  "Built projects spanning Full-Stack Development, AI Automation, Recommendation Systems, and Developer Tools.",
  "Core Organizer of Smart ABES Hackathon (SAH) 2.0 and contributor to multiple large-scale technical events.",
  "Served as Overall Student Track Coordinator for the IEEE Conference and represented ACM-W at the ACM Regional Summit.",
  "Led technical events, hackathons, conferences, and community initiatives impacting hundreds of students.",
  "Continuously exploring scalable systems, intelligent agents, modern web technologies, and software architecture."
];
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-32">
    <main className="max-w-5xl mx-auto px-8 py-24">
      <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
        About
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-10">
        Mansi Singh
      </h1>

      <div className="space-y-8 max-w-3xl">
        <p className="text-zinc-400 leading-8">
I'm Mansi Singh, a Computer Science student at ABES Engineering College
 with a strong interest in full-stack development, artificial intelligence,
  and building technology that solves real-world problems. I enjoy transforming 
  ideas into production-ready applications, from designing scalable backends and 
  intuitive user interfaces to integrating AI-powered workflows. Alongside software
   development, I've actively led and contributed to technical communities through
    ACM and ACM-W, organizing hackathons, conferences, outreach initiatives, and 
    events that have impacted hundreds of students.

        </p>

        <ul className="space-y-4 text-zinc-400">
  {aboutPoints.map((point) => (
    <li key={point} className="flex gap-3">
      <span className="text-white">•</span>
      <span>{point}</span>
    </li>
  ))}
</ul>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
 "Next.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Python",
  "FastAPI",
  "LangChain",
  "CrewAI",
  "Scikit-Learn",
  "Vercel",
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
  </section>
  );
}