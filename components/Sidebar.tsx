"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  PresentationChartBarIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { ModeToggle } from "./ThemeToggle";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full shadow-xl dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 md:h-screen md:max-w-[20rem] md:p-4">
      <div className="flex items-center p-2 text-xl font-semibold md:mb-2 md:p-4 justify-between">
        Task Manager
        <ModeToggle />
      </div>
      <div className="flex gap-1 p-1 text-lg text-neutral-600 dark:text-inherit md:flex-col md:p-4">
        <Link
          href="/dashboard"
          className={clsx(
            "flex items-center gap-5 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-slate-700",
            pathname === "/dashboard" && "bg-gray-100 dark:bg-slate-700",
          )}
        >
          <PresentationChartBarIcon className="h-7 w-7 md:h-5 md:w-5" />
          <span className="hidden md:block">Dashboard</span>
        </Link>
        <Link
          href="/dashboard/new-task"
          className={clsx(
            "flex items-center gap-5 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-slate-700",
            pathname === "/dashboard/new-task" && "bg-gray-100 dark:bg-slate-700",
          )}
        >
          <PlusIcon className="h-7 w-7 md:h-5 md:w-5" />
          <span className="hidden md:block">New task</span>
        </Link>
        <Link
          href="/dashboard/new-task"
          className="flex items-center gap-5 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <ArrowRightOnRectangleIcon className="h-7 w-7 md:h-5 md:w-5" />
          <span className="hidden md:block">Logout</span>
        </Link>
      </div>
    </div>
  );
}
