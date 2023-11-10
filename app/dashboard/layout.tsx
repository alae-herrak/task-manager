import { authOptions } from "@/auth";
import Sidebar from "@/components/sidebar/Sidebar";
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
      <div className="flex-grow p-6 lg:h-screen lg:overflow-y-auto lg:p-12">
        {children}
      </div>
    </div>
  );
}
