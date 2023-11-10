import { authOptions } from "@/auth";
import Breadcrumbs from "@/components/Breadcrumbs";
import CreateTaskForm from "@/components/tasks/CreateTaskForm";
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
