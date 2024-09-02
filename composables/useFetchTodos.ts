export const useFetchTodos = () => {
  const todos = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
      completed: false,
      priority: '1',
      class: '',
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Description 2',
      completed: false,
      priority: '2',
      class: '',
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Description 3',
      completed: false,
      priority: '3',
      class: '',
    },
    {
      id: 4,
      title: 'Todo 4',
      description: 'Description 4',
      completed: false,
      priority: '1',
      class: '',
    },
    {
      id: 5,
      title: 'Todo 5',
      description: 'Description 5',
      completed: false,
      priority: '2',
      class: '',
    },
    {
      id: 6,
      title: 'Todo 6',
      description: 'Description 6',
      completed: false,
      priority: '3',
      class: '',
    },
    {
      id: 7,
      title: 'Todo 7',
      description: 'Description 7',
      completed: false,
      priority: '1',
      class: '',
    },
    
  ]




  return ref(todos)
}
