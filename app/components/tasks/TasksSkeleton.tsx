import { Skeleton } from "@/app/components/ui/skeleton";

export default function TasksSkeleton() {
  return (
    <div className="mt-8 flex flex-col gap-4">
      <div className="flex w-full justify-between">
        <Skeleton className="h-8 w-80" />
        <Skeleton className="h-8 w-20" />
      </div>
      <Skeleton className="h-20 w-full md:h-8" />
      <Skeleton className="h-20 w-full md:h-8" />
      <Skeleton className="h-20 w-full md:h-8" />
      <Skeleton className="h-20 w-full md:h-8" />
    </div>
  );
}
