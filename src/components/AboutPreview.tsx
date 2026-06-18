import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
        About
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Building products while learning how software scales.
      </h2>

      <p className="text-zinc-400 max-w-3xl leading-8 mb-8">
        I'm a Computer Science student at ABES Engineering College
        interested in full-stack development, AI-powered applications,
        automation, and modern software architecture.
      </p>

      <Link
        href="/about"
        className="uppercase tracking-widest text-sm"
      >
        Read More →
      </Link>
    </section>
  );
}