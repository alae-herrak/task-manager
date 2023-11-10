import { db } from "@/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { unstable_noStore as noStore } from "next/cache";
import { Task } from "./definitions";

export async function fetchUserTasks(userId: string) {
  noStore();

  try {
    let tasks: Task[] = [];

    const q = query(collection(db, "tasks"), where("userId", "==", userId));
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

export async function fetchTaskById(id: string) {
  noStore();

  try {
    const docRef = doc(db, "tasks", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id, ...docSnap.data() } as Task;
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch task.");
  }
}
