<script setup>

const { greeting } = useGreeting()
const user = useSupabaseUser()
const name = user.value.email.split('@')[0]


</script>


<template>
    <div class="greet">
        <h1 class="text-2xl text-primary-300">{{ greeting(name) }}</h1>
    </div>
</template>