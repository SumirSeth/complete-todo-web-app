<template>
  <div>
    <UContainer>
      <div class="py-8 sm:py-12 md:py-16 text-center flex flex-col items-center justify-center h-screen">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Welcome to Your Todo App</h1>
        <p class="text-lg sm:text-xl mb-4 sm:mb-6 md:mb-8">Stay organized and boost your productivity</p>
        <div class="button-container">
          <UButton
            size="md"
            sm:size="lg"
            color="primary"
            class="w-full sm:w-auto justify-center mr-2 sm:mr-4 md:mr-6"
            to="/app"
            variant="soft"
          >
            Go to App
          </UButton>
          <UButton
            size="md"
            sm:size="lg"
            color="primary"
            class="w-full sm:w-auto justify-center mt-2 sm:mt-0"
            to="/auth/login"
            variant="soft"
          >
            Login
          </UButton>
          <UButton
            size="md"
            sm:size="lg"
            color="primary"
            class="w-full sm:w-auto justify-center sm:ml-4 md:ml-6 mt-2 sm:mt-0"
            to="/profile"
            variant="soft"
          >
            Profile
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>