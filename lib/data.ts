import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { unstable_noStore as noStore } from "next/cache";
import { Task } from "./definitions";

export async function fetchUserTasks(userId: string) {
  noStore();

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let tasks: Task[] = [];

    const q = query(
      collection(db, "tasks"),
      where("userId", "==", userId),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() } as Task);
    });

    return tasks;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tasks.");
  }
}
