export type Task = {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
  description: string;
  userId: string;
};
