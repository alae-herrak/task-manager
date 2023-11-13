"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Session } from "next-auth";

import {
  PresentationChartBarIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
import { ThemeToggle } from "@/components/sidebar/ThemeToggle";
import UserButton from "@/components/sidebar/UserButton";

export default function Sidebar({ session }: { session: Session | null }) {
  return (
    <div className="w-full shadow-xl dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700 lg:h-screen lg:max-w-[23rem] lg:p-4">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-2 text-xl font-semibold lg:mb-2 lg:p-4">
          TaskSwift
          <div className="flex items-center gap-2">
            <UserButton session={session} />
            <ThemeToggle />
          </div>
        </div>
        {session && (
          <div className="flex h-full flex-1 gap-1 rounded-md p-1 text-lg text-neutral-600 dark:text-inherit lg:flex-col lg:bg-zinc-50 lg:p-4 dark:lg:bg-slate-800/50">
            <SidebarLink href="/dashboard" title="Dashboard">
              <PresentationChartBarIcon className="h-7 w-7 lg:h-5 lg:w-5" />
            </SidebarLink>
            <SidebarLink href="/dashboard/tasks" title="Tasks">
              <ClipboardDocumentListIcon className="h-7 w-7 lg:h-5 lg:w-5" />
            </SidebarLink>
          </div>
        )}
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
