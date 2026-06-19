import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-2xl"
        >
          Mansi
        </Link>

        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>

<Link
  href="/resume/Mansi_Singh_Resume.pdf"
  target="_blank"
  className="border border-white/20 px-5 py-2 text-xs uppercase tracking-widest hover:border-white transition"
>
  Resume
</Link>
      </div>
    </header>
  );
}