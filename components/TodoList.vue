<template>
  <div>
    <USelectMenu v-model="selectedColumns" :options="columns" multiple  />
    <UTable 
    v-model="selectedTodos"
    @select="onSelect"
    sort-asc-icon="i-heroicons-arrow-up-20-solid"
    sort-desc-icon="i-heroicons-arrow-down-20-solid"
    :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'outline', size: '2xs', square: false }"
    :rows="todos" :columns="selectedColumns" />
  </div>
</template>

<script lang="ts" setup>
const todos = useFetchTodos()
const selectedTodos = ref<any[]>([])

const onSelect = (row: any) => {

  /*
  const index = selectedTodos.value.findIndex((item) => item.id === row.id)
  if (index === -1) {
    selectedTodos.value.push(row)
  } else {
    selectedTodos.value.splice(index, 1)
  };
  */
  
  const rowID = row.id
  const task:any = todos.value.find((item) => item.id == rowID)
  task.completed = !task.completed
  task.class = task.completed ? 'line-through' : ''
}
const columns = [
  {
    label: 'ID',
    key: 'id'
  },

  {
    label: 'Title',
    key: 'title'
  },
  {
    label: 'Description',
    key: 'description'
  },
  {
    label: 'Completed',
    key: 'completed'
  },
  {
    label: 'Priority',
    key: 'priority',
    sortable: true,
  }
]

const selectedColumns = ref(columns.slice(1))

</script>

<style>

</style>