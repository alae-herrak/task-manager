import { fetchTaskById } from "@/lib/data";
import { notFound } from "next/navigation";
import EditTaskForm from "@/components/tasks/EditTaskForm";
import Breadcrumbs from "@/components/breadcrumbs";

export default async function EditTaskPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const task = await fetchTaskById(id);

  if (!task) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Tasks", href: "/dashboard/tasks" },
          {
            label: "Edit Task",
            href: `/dashboard/tasks/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditTaskForm task={task} />
    </>
  );
}
