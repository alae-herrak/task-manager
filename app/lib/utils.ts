import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string | null | undefined) {
  if (!name) return "User";
  const arr = name.split(" ");
  let initials = "";
  arr.map((e) => {
    initials += e[0].toUpperCase();
  });
  return initials;
}
