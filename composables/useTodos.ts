export const useTodos = () => {
  const todos = ref<any[]>([])

  const client = useSupabaseClient()

  const getTodos = async () => {
    const { data, error } = await client.from('todos').select('*')
    if (error) {
      console.error(error)
    }
    if (data) {
      todos.value = data
    }
  }

  const addTodo = async (newTodo: any) => {
    const { data, error } = await client.from('todos').insert(newTodo)
    if (error) {
      console.error(error)
    }
    if (data) {
      await getTodos() // Refresh the todos after adding
    }
  }

  return {
    todos,
    getTodos,
    addTodo
  }
}