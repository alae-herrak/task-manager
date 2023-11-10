import { authOptions } from "@/auth";
import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar session={session} />
      <div className="flex-grow p-6 lg:overflow-y-auto lg:p-12 lg:h-screen">{children}</div>
    </div>
  );
}
