import { authOptions } from "@/auth";
import { fetchUserTasks } from "@/lib/data";
import { getServerSession } from "next-auth";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Tasks() {
  const session = await getServerSession(authOptions);
  const tasks = await fetchUserTasks(session?.user.id || "");

  return tasks.length ? <DataTable columns={columns} data={tasks} /> : null;
}
