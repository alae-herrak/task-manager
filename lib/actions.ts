"use server";

import { authOptions } from "@/auth";
import { db } from "@/firebase";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Session, getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask({
  title,
  priority,
  description,
  session,
}: {
  title: string;
  priority: "low" | "medium" | "high";
  description: string;
  session: Session | null;
}) {
  const tasksCollectionRef = collection(db, "tasks");

  try {
    await addDoc(tasksCollectionRef, {
      title,
      priority,
      description,
      userId: session?.user.id,
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Task.",
    };
  }

  revalidatePath("/dashboard/tasks");
  redirect("/dashboard/tasks");
}

export async function editTask({
  id,
  title,
  priority,
  description,
}: {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
  description: string;
}) {
  const taskDocRef = doc(db, "tasks", id);

  try {
    await updateDoc(taskDocRef, {
      title,
      priority,
      description,
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Task.",
    };
  }

  revalidatePath("/dashboard/tasks");
  redirect("/dashboard/tasks");
}

export async function deleteTask(id: string) {
  try {
    await deleteDoc(doc(db, "tasks", id));
    revalidatePath("/dashboard/tasks");
    return { message: "Deleted Task" };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Task." };
  }
}
