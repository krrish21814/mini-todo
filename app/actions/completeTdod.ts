"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"


export const CompleteTodo = async (formData: FormData) => {
  const id = formData.get("id")
  const numberID = Number(id)
 try{
  const completedTodo = await prisma.todobro.update({
    where: {id: numberID},
    data:{completed: true}
  })
  revalidatePath("/")
  return 
 
}catch(error){
return
  }
}