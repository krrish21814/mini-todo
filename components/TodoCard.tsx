"use client"

import { Todobro } from "@prisma/client"

export const TodoCard = ({todos,onUpdate}: {todos:Todobro[], onUpdate:(id: number, completed: boolean)=> Promise<void>})=> {
    return <div>
        <div>
            {todos.map((todo: Todobro)=>(
                <div className="w-max h-max border-2 p-5" key={todo.id}>
                    <div className="font-bold text-3xl">Title</div>
                    <div className="font-semibold text-2xl">{todo.title}</div>
                    <div className="font-semibold text-xl">{todo.description}</div>
                    <button onClick={()=>onUpdate(todo.id, !todo.completed)} className="w-max p-2 h-max rounded-2xl bg-blue-300 hover:bg-blue-500 hover:text-white">{todo.completed?"completed":"Not completed"}</button>
                </div>
            ))}
        </div>
    </div>
}