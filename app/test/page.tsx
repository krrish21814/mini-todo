import { getServerSession } from "next-auth";
import CreateTodo from "../components/CreateTodo";
import { DisplayTodos } from "../components/DisplayTodos";
import { authOptions } from "../api/auth/[...nextauth]/options";
import Home from "../page";

import prisma from "@/lib/prisma";


export default async function main() {


    const session = await getServerSession(authOptions);
    const userId = session?.user?.id


    return <div>
        <Home />

        <div>
            emai ==== {userId}
        </div>
        {JSON.stringify(session)}
        <CreateTodo />
        <DisplayTodos />
    </div>
}