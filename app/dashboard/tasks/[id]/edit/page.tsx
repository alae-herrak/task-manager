import Breadcrumbs from "@/components/breadcrumbs";
import { fetchTaskById } from "@/lib/data";
import { notFound } from "next/navigation";
import Form from "@/components/edit-task-form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function EditTaskPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
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
      <Form task={task} />
    </>
  );
}
