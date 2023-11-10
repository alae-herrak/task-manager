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
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function TasksTable({ tasks }: { tasks: Task[] }) {
  const [data, setData] = useState(tasks);
  const [sortDirection, setSortDirection] = useState<"htl" | "lth">("htl");

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
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((task) => (
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
