import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <div className="border border-white/10 p-12 md:p-20 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Let's build something meaningful.
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
          Interested in internships, collaborations, or discussing
          software engineering, AI, and product development?
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="border border-white/20 px-6 py-3"
          >
            Contact Me
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="bg-white text-black px-6 py-3"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}