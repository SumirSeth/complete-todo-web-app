<template>
  <div>
    <USelectMenu v-model="selectedColumns" :options="columns" multiple  />
    <UTable 
      v-model="selectedTodos"
      @select="onSelect"
      sort-asc-icon="i-heroicons-arrow-up-20-solid"
      sort-desc-icon="i-heroicons-arrow-down-20-solid"
      :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'soft', size: '2xs', square: false }"
      :rows="rows" 
      :columns="selectedColumns"
    >
      <template #description-data="{ row }">
        <div class="whitespace-normal break-words max-w-xs">{{ row.description }}</div>
      </template>
    </UTable>
    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page" :page-count="pageCount" :total="todos.length" :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }">
        <template #prev="{ onClick }">
          <UTooltip text="Previous Page">
            <UButton @click="onClick" icon="i-heroicons-arrow-left-20-solid" class="rounded-full rtl:[&_span:first-child]:rotate-180 me-2" color="primary" size="xs" />
          </UTooltip>
        </template>
        <template #next="{ onClick }">
          <UTooltip text="Next Page">
            <UButton @click="onClick" icon="i-heroicons-arrow-right-20-solid" class="rounded-full rtl:[&_span:last-child]:rotate-180 ms-2" color="primary" size="xs" />
          </UTooltip>
        </template>
      </UPagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { todos, getTodos } = useTodos()

onMounted(async () => {
  await getTodos()
})

const selectedTodos = ref<any[]>([])

const onSelect = (row: any) => {
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

const page = ref(1)
const pageCount = 3

const rows = computed(() => {
  const count = pageCount
  return todos.value.slice((page.value - 1) * count, page.value * count)
})

</script>

<style>

</style>