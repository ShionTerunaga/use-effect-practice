export interface Todo {
  id: number
  text: string
  completed: boolean
}

let nextId = 0
let calls = 0

export function getVisibleTodos(todos: Array<Todo>, showActive: boolean) {
  console.log(`getVisibleTodos() was called ${++calls} times`)

  const activeTodos = todos.filter((todo) => !todo.completed)
  const visibleTodos = showActive ? activeTodos : todos

  return visibleTodos
}

export function createTodo({
  text,
  completed = false,
}: {
  text: string
  completed?: boolean
}) {
  return {
    id: nextId++,
    text,
    completed,
  }
}

export const initialTodos: Array<Todo> = [
  createTodo({ text: 'Get apples', completed: true }),
  createTodo({ text: 'Get oranges', completed: true }),
  createTodo({ text: 'Get carrots' }),
]
