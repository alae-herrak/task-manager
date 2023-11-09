import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/create-task-form";

export default function NewTaskPage() {
  return (
    <main>
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
      <Form />
    </main>
  );
}
