import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { deleteTask } from "@/lib/actions";

export default function DeleteTask({ id }: { id: string }) {
  const deleteTaskWithId = deleteTask.bind(null, id);

  return (
    <form action={deleteTaskWithId}>
      <Button variant="ghost">
        <TrashIcon className="h-4 w-4 text-red-500" />
      </Button>
    </form>
  );
}
