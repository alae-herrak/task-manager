import { authOptions } from "@/auth";
import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/create-task-form";
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
      <Form session={session} />
    </>
  );
}
