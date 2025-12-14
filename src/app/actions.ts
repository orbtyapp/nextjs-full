"use server";

import { revalidatePath } from "next/cache";

export async function incrementCounter(): Promise<void> {
  // Simula incremento de contador
  revalidatePath("/");
}

export async function createTodo(formData: FormData): Promise<void> {
  const title = formData.get("title") as string;
  
  // Simula criação de todo (em produção, usar Supabase)
  console.log("Creating todo:", title);
  
  revalidatePath("/todos");
}

export async function toggleTodo(id: string, completed: boolean): Promise<void> {
  // Simula toggle de todo
  console.log("Toggle todo:", id, completed);
  
  revalidatePath("/todos");
}

export async function deleteTodo(id: string): Promise<void> {
  // Simula delete de todo
  console.log("Delete todo:", id);
  
  revalidatePath("/todos");
}
