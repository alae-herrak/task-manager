import { authOptions } from "@/auth";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main className="darkto-slate-950 flex h-screen flex-col items-center justify-center gap-10 bg-gradient-to-bl from-sky-200 via-zinc-200 to-slate-200 dark:from-sky-950 dark:via-zinc-950 dark:to-slate-950">
      <div>
        <h1 className="text-4xl font-semibold text-black dark:text-white">
          TaskSwift
        </h1>
        <p className="text-center font-serif text-gray-700 dark:text-gray-300">
          By Alae Herrak
        </p>
      </div>
      <Link href="/dashboard">
        <Button variant="outline">Sign in</Button>
      </Link>
    </main>
  );
}
