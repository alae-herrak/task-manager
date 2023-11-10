import { authOptions } from "@/auth";
import { fetchUserTasks } from "@/lib/data";
import { getServerSession } from "next-auth";
import TasksTable from "./tasks-table";

export default async function Tasks() {
  const session = await getServerSession(authOptions);
  const tasks = await fetchUserTasks(session?.user.id || "");

  return tasks.length ? <TasksTable tasks={tasks} /> : null;
}
