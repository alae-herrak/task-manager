import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function TasksPage() {
  return (
    <main>
      <div className="flex w-full items-center justify-between">
        <h1 className="font-serif text-xl dark:text-white md:text-2xl">
          Tasks
        </h1>
        <Link href="/dashboard/tasks/create">
          <Button>
            Create Task <PlusIcon className="ms-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
