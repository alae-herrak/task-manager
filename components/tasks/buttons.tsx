import { deleteTask } from "@/lib/actions";

export default function DeleteTaskButton({ id }: { id: string }) {
  const deleteTaskWithId = deleteTask.bind(null, id);

  return (
    <form action={deleteTaskWithId}>
      <button className="w-full text-red-500 text-start">Delete task</button>
    </form>
  );
}
