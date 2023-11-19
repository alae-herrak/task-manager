import { authOptions } from "@/auth";
import Breadcrumbs from "@/app/components/breadcrumbs";
import CreateTaskForm from "@/app/components/tasks/CreateTaskForm";
import { getServerSession } from "next-auth";

export default async function NewTaskPage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Tasks", href: "/dashboard/tasks" },
          {
            label: "Create Task",
            href: "/dashboard/tasks/create",
            active: true,
          },
        ]}
      />
      <CreateTaskForm session={session} />
    </>
  );
}
