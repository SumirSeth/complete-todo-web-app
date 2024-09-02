<template>
  <div>
    <UContainer>
      <div class="py-8 sm:py-12 md:py-16 text-center flex flex-col items-center justify-center h-screen">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Profile Page</h1>
        <p class="mb-4 sm:mb-6 md:mb-8">Email : {{ user?.email }}</p>
        <UButton @click="testFunction">Logs</UButton>
        

      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser()
const client = useSupabaseClient()

const testFunction = async() => {
  const { data, error } = await client.from('todos').select('*')
  console.log(data)
}
</script>

<style>

</style>