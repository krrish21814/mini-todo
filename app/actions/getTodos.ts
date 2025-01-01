"use server"

import prisma from "@/lib/prisma"

export const getTodos = async(id: string) => {
    const allTodos = await prisma.todobro.findMany({
        where:{
            authorId: Number(id)
        }
    });
    return allTodos
}