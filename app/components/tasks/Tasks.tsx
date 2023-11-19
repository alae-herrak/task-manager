import { authOptions } from "@/auth";
import { fetchUserTasks } from "@/app/lib/data";
import { getServerSession } from "next-auth";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Tasks() {
  const session = await getServerSession(authOptions);
  const tasks = await fetchUserTasks(session?.user.id || "");

  return tasks.length ? (
    <DataTable columns={columns} data={tasks} />
  ) : (
    <div className="p-10 text-center text-gray-700 dark:text-gray-300">
      Looks empty around here...
      <br />
      Start by creating a new task!
    </div>
  );
}
