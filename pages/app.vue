<template>
 
  <div class="main flex flex-col justify-center items-center h-[85vh]  border-primary rounded-lg m-2 sm:m-4 md:m-8 lg:m-16 md:-translate-y-6 translate-y-20" id="main">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-5">Todos</h1>
    <div class="flex flex-row gap-8 flex-wrap justify-center">
      <div :class="['p-4 ','','border-primary','rounded-lg', 'greet-div', 'flex', 'flex-col', 'gap-2']" id="greet-div">
        <MultiGreeting />
        <div class="flex gap-2">
          <UInput v-model="task" label="Task" placeholder="Enter a task" />
          <USelect v-model="priority" :options="['Low(1)', 'Medium(2)', 'High(3)']" label="Priority" placeholder="Select a priority" />
          
          
        </div>
        <UInput v-model="description" label="Description" placeholder="Enter a description" />
        <UButton class="justify-center" @click="task.length!==0 ? addTask() : useToast().add({title: 'Task is empty', description: 'Please enter a task', icon: 'i-heroicons-exclamation-circle-20-solid'})" icon="i-heroicons-plus-20-solid">Add Task</UButton>
      </div>
      <div :class="['p-4 ','','border-primary','rounded-lg', 'todo-div']" id="todo-div">
        <!-- Todo list will go here -->
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  middleware: 'guard'
})

type Todo = {
  title: string;
  priority: string;
  description: string;
  user_id: string | null;
}

const user = useSupabaseUser()
const client = useSupabaseClient()
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo('/auth/login')
    }
  })
})

const task = ref('')
const priority = ref('')
const description = ref('')

const { addTodo } = useTodos()

const addTask = async() => {
  const numifyPriority = () => {
    if (priority.value === 'Low(1)') {
      return 1
    } else if (priority.value === 'Medium(2)') {
      return 2
    } else if (priority.value === 'High(3)') {
      return 3
    }
  }
  // const { data, error } = await client
  //   .from('todos')
  //   .insert({
  //     title: task.value,
  //     priority: numifyPriority(),
  //     description: description.value,
  //     user_id: user.value?.id ?? null
  //   })
  await addTodo({
    title: task.value,
    priority: numifyPriority(),
    description: description.value,
    user_id: user.value?.id ?? null
  })
  task.value = ""
  priority.value = ""
  description.value = ""
}

</script>

<style scoped>

@media (min-width: 780px) {
  .greet-div{
    flex-basis: 30%;
  }}

@media (min-width: 340px) {
  .greet-div{
    flex-basis: 30%;
  }
}



</style>
