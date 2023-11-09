"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  PresentationChartBarIcon,
  ClipboardDocumentListIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { ModeToggle } from "./ThemeToggle";

export default function Sidebar() {
  return (
    <div className="w-full shadow-xl dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700 md:h-screen md:max-w-[20rem] md:p-4">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-2 text-xl font-semibold md:mb-2 md:p-4">
          Task Manager
          <ModeToggle />
        </div>
        <div className="flex h-full flex-1 gap-1 rounded-md p-1 text-lg text-neutral-600 dark:text-inherit md:flex-col md:bg-zinc-50 md:p-4 dark:md:bg-slate-800/50">
          <SidebarLink href="/dashboard" title="Dashboard">
            <PresentationChartBarIcon className="h-7 w-7 md:h-5 md:w-5" />
          </SidebarLink>
          <SidebarLink href="/dashboard/tasks" title="Tasks">
            <ClipboardDocumentListIcon className="h-7 w-7 md:h-5 md:w-5" />
          </SidebarLink>
          <Link
            href="/dashboard/new-task"
            className="ms-auto mt-auto flex items-center gap-5 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-slate-700 md:ms-0"
          >
            <ArrowRightOnRectangleIcon className="h-7 w-7 md:h-5 md:w-5" />
            <span className="hidden md:block">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-5 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-slate-700",
        pathname === href && "bg-gray-200 dark:bg-slate-700",
      )}
    >
      {children}
      <span className="hidden md:block">{title}</span>
    </Link>
  );
}
