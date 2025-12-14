import { createTodo, toggleTodo, deleteTodo } from "../actions";

export const dynamic = "force-dynamic";

// Mock todos para demo (em produção, usar Supabase)
const mockTodos = [
  { id: "1", title: "Testar Server Actions", completed: true },
  { id: "2", title: "Deploy para Cloudflare", completed: false },
  { id: "3", title: "Configurar custom domain", completed: false },
];

async function getTodos() {
  return mockTodos;
}

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">📝 Todos (SSR + Server Actions)</h1>
        
        <form action={createTodo} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              name="title"
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium transition"
            >
              Add
            </button>
          </div>
        </form>

        <ul className="space-y-2">
          {todos.map((todo: { id: string; title: string; completed: boolean }) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 p-4 bg-gray-800 rounded"
            >
              <form action={toggleTodo.bind(null, todo.id, !todo.completed)}>
                <button
                  type="submit"
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    todo.completed
                      ? "bg-green-600 border-green-600"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                >
                  {todo.completed && "✓"}
                </button>
              </form>
              <span
                className={`flex-1 ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.title}
              </span>
              <form action={deleteTodo.bind(null, todo.id)}>
                <button
                  type="submit"
                  className="text-red-500 hover:text-red-400 transition"
                >
                  🗑️
                </button>
              </form>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No todos yet. Add one above!
          </p>
        )}

        <div className="mt-8 p-4 bg-gray-800 rounded text-sm text-gray-400">
          <p>✨ This page uses:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Server-Side Rendering (SSR) with <code>dynamic = &quot;force-dynamic&quot;</code></li>
            <li>Server Actions for mutations</li>
            <li>Supabase for database</li>
            <li>Runs on Cloudflare Workers Edge Runtime</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
