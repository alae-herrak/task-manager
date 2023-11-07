import Sidebar from "@/components/Sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      {children}
    </div>
  );
}
