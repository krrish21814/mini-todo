"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { title } from "process"

export const createUSer = async (
    data:{title: string, description:string},userId:string) => {
    try{
        await prisma.todobro.create({
            data:{
                title: data.title,
                description: data.description,
                authorId: Number(userId)
            }
        })
    revalidatePath('/')
    return {success:true,data: "todo created"};
}catch(error){
    return{success: false, error: "Failed to create Todo"}
}
}