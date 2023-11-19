export type Task = {
  id: string;
  title: string;
  priority: "Low" | "Medium" | "Urgent";
  description: string;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
  status?: "ongoing" | "done";
};
