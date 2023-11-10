"use client";

import { Task } from "@/lib/definitions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import {
  ArrowsUpDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";
import DeleteTask from "./buttons";
import { useToast } from "./ui/use-toast";

export default function TasksTable({ tasks }: { tasks: Task[] }) {
  const { toast } = useToast();

  const [data, setData] = useState(tasks);
  const [sortDirection, setSortDirection] = useState<"htl" | "lth">("htl");
  const [deletedId, setDeletedId] = useState("");

  function handleSortPriority() {
    const sorted = [
      ...data.filter(
        (e) => e.priority === (sortDirection === "htl" ? "high" : "low"),
      ),
      ...data.filter((e) => e.priority === "medium"),
      ...data.filter(
        (e) => e.priority === (sortDirection === "htl" ? "low" : "high"),
      ),
    ];
    setData(sorted);
    setSortDirection(sortDirection === "htl" ? "lth" : "htl");
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-auto">Title</TableHead>
          <TableHead className="w-[100px]">
            <Button
              className="bg-inherit p-0 text-inherit hover:bg-inherit hover:text-black dark:hover:text-white"
              onClick={handleSortPriority}
            >
              Priority
              <ArrowsUpDownIcon className="ms-1 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead className="text-start">Description</TableHead>
          <TableHead className="w-20">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(
          (task) =>
            task.id !== deletedId && (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell
                  className={clsx(
                    task.priority === "high"
                      ? "text-red-500"
                      : task.priority === "medium"
                      ? "text-yellow-500"
                      : "text-green-500",
                  )}
                >
                  {task.priority}
                </TableCell>
                <TableCell className="text-start">{task.description}</TableCell>
                <TableCell className="flex">
                  <Link href={`/dashboard/tasks/${task.id}/edit`}>
                    <Button variant="ghost">
                      <PencilSquareIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                  <div
                    onClick={() =>
                      setTimeout(() => {
                        setDeletedId(task.id);
                        toast({
                          description: "Deleted Task.",
                        });
                      }, 100)
                    }
                  >
                    <DeleteTask id={task.id} />
                  </div>
                </TableCell>
              </TableRow>
            ),
        )}
      </TableBody>
    </Table>
  );
}
