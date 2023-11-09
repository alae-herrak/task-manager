import { authOptions } from "@/auth";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) redirect('/dashboard')

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-10 bg-gradient-to-bl from-sky-950 via-zinc-950 to-slate-950">
      <div>
        <h1 className="text-4xl font-semibold dark:text-white">Task Manager</h1>
        <p className="text-center font-serif text-gray-300">By Alae Herrak</p>
      </div>
      <Link href="/dashboard">
        <Button variant="outline">Sign in</Button>
      </Link>
    </main>
  );
}
