<template>
  <div>
    <UContainer>
      <div class="py-8 sm:py-12 md:py-16 text-center flex flex-col items-center justify-center h-screen">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Login</h1>
        <p class="text-lg sm:text-xl mb-4 sm:mb-6 md:mb-8">Login to your account to continue.</p>

        <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-4">
          <UFormGroup label="Email" name="email" :rules="['required', 'email']">
            <UInput v-model="state.email" type="email" />
          </UFormGroup>
          <UFormGroup label="Password" name="password" :rules="['required', 'min:8']">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>
        
        
          <UButton
            size="md"
            sm:size="lg"
            color="primary"
            variant="soft"
            class="w-full sm:w-auto justify-center"
            type="submit"
          >
            Login
          </UButton>
          
          
        </UForm>
        <UButton
            size="md"
            sm:size="lg"
            color="primary"
            variant="outline"
            class="w-full sm:w-auto justify-center mt-2 sm:mt-3 sm:ml-4"
            to="/auth/signup"
          >
            Don't have an account? Signup!
        </UButton>
          <p v-if="errorMessage" class="text-red-500">Error: {{ errorMessage }}!</p>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>

import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const schema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Please enter your email address"),
  password: z.string().min(8, "Password must be at least 8 characters").min(1, "Please enter your password"),
})

type Scheme = z.output<typeof schema>


const state = reactive({
  email: undefined,
  password: undefined,
})

const errorMessage = ref(false)

const client = useSupabaseClient()
const onSubmit = async (event: FormSubmitEvent<Scheme>) => {
  const { data, error } = await client.auth.signInWithPassword({
    email: event.data.email,
    password: event.data.password
  })
  if (error) {
    errorMessage.value = true
  }
}

const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/app')
    }
  })
})

</script>

<style>

</style>