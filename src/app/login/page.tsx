import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="border border-white/10 px-6 py-3"
        >
          Sign in with Google
        </button>
      </form>
    </main>
  );
}