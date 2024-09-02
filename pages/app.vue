<template>
 
  <div class="main flex flex-col justify-center items-center h-[85vh]  border-primary rounded-lg m-2 sm:m-4 md:m-8 lg:m-16 md:-translate-y-6" id="main">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-5">Todos</h1>
    <div class="flex flex-row gap-8 flex-wrap justify-center">
      <div :class="['p-4 ','','border-primary','rounded-lg', 'greet-div']" id="greet-div">
        <MultiGreeting />
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


const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo('/auth/login')
    }
  })
})

</script>

<style scoped>

@media (min-width: 780px) {
  .greet-div{
    flex-basis: 30%;
  }}



</style>
