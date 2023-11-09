"use server";

export async function createTask({
  title,
  priority,
  description,
}: {
  title: string;
  priority: "low" | "medium" | "high";
  description: string;
}) {
  console.log(title, priority, description);
}
