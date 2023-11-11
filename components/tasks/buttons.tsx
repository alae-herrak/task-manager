import { deleteTask } from "@/lib/actions";

export default function DeleteTaskButton({ id }: { id: string }) {
  const deleteTaskWithId = deleteTask.bind(null, id);

  return (
    <form action={deleteTaskWithId}>
      <button className="text-red-500">Delete task</button>
    </form>
  );
}
