import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-6">
              Computer Science Student • Full Stack Developer
            </p>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
              Mansi
              <br />
              Singh
            </h1>

            <p className="mt-8 text-lg text-zinc-400 max-w-xl">
              Building modern web applications with
              Next.js, PostgreSQL, Prisma and AI.
            </p>
            <p className="mt-4 text-zinc-500 text-sm uppercase tracking-widest">
  Seeking Software Engineering Internships
</p>

            <div className="flex gap-4 mt-10">
              <Link href="/projects">
              <button className="bg-white text-black px-6 py-3 text-sm uppercase tracking-widest font-medium hover:bg-zinc-200 transition">
                View Projects
              </button>
              </Link>


              <Link
  href="/resume.pdf"
  target="_blank"
  className="border border-white/20 px-6 py-3 text-sm uppercase tracking-widest hover:border-white transition"
>
  Resume
</Link>

            </div>
          </div>

          {/* Right Side */}
          <div className="relative hidden lg:flex justify-center items-end">
            <div className="absolute w-[450px] h-[450px] rounded-full bg-white/5 blur-3xl" />

            <Image
              src="/images/mansi.png"
              alt="Mansi Singh"
            width={550}
height={750}
              priority
              className="relative object-contain z-10 translate-y-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}