import { getServerSession } from "next-auth";
import { CompleteTodo } from "../actions/completeTdod";
import { getTodos } from "../actions/getTodos"
import { authOptions } from "../api/auth/[...nextauth]/options";

export const DisplayTodos = async () => {

  const session = await getServerSession(authOptions);
  const id = session?.user?.id
  const todos = await getTodos(id);
  return (
    <div className="p-10 grid grid-cols-3">
      {todos.map((todo) => (<div className=" m-2 p-2 border-2 border-black bg-slate-200">
        <label className="font-bold">Title</label>
        <div>
          {todo.title}
        </div>
        <label className="font-bold">Description</label>
        <div>
          {todo.description}
        </div>
        {!todo.completed && (
          <form action={CompleteTodo}>
            <input type="hidden" name="id" value={todo.id}>
            </input>
            <button type="submit" className="bg-slate-400 text-white w-24 rounded-2xl p-2">{todo.completed ? "Completed" : "Complete"}</button>
          </form>
        )}
      </div>
      ))}
    </div>
  )
}