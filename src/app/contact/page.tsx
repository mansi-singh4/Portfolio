export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">
      <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
        Get In Touch
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-8">
        Contact
      </h1>

      <p className="text-zinc-400 max-w-2xl mb-12">
        Interested in collaborating, discussing opportunities,
        or just saying hello? Feel free to reach out.
      </p>

      <div className="space-y-4 text-lg">
        <p>
          Email: your.email@example.com
        </p>

        <p>
          LinkedIn: linkedin.com/in/yourprofile
        </p>

        <p>
          GitHub: github.com/yourusername
        </p>
      </div>
    </main>
  );
}