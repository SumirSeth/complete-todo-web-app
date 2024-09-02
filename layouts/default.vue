<template>
  <div>
    <ClientOnly>
      <div class="flex items-center">
        <UHorizontalNavigation :links="links" class="" />
        <USelectMenu v-model="selectedColor" :options="colors" class="mr-3">
          <template #option="{ option }"> 
            <span :class="['inline-block', 'w-3', 'h-3','md:w-4','md:h-4' , 'rounded-full', `bg-${option.value}-400`]" @click="changeColor(option.value)"></span>
          </template>
          <template #leading>
            <span :class="['inline-block', 'w-3', 'h-3','md:w-4','md:h-4' , 'rounded-full', `bg-${selectedColor.value}-400`]"></span>
          </template>
        </USelectMenu>
      </div>
    </ClientOnly>
      <slot />
    
  </div>
</template>

<script lang="ts" setup>

const client = useSupabaseClient()
const user = useSupabaseUser()

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const isLoggedIn = computed(() => user.value !== null)


const links = ref([
  {
    label: 'Home',
    icon: 'i-heroicons:home',
    to: '/',
  },
  {
    label: 'ToDos',
    icon: 'i-heroicons:list-bullet',
    to: '/app',
  },
  /*
  {
    label: 'Login',
    icon: 'i-heroicons:arrow-left-end-on-rectangle-16-solid',
    to: '/auth/login',
  },
  */
  
  {
    label: 'LogOut',
    icon: 'i-heroicons:arrow-right-end-on-rectangle-16-solid',
    click: () => {
      client.auth.signOut()
      useToast().add(
        isLoggedIn.value ?
        {title: 'Logged out successfully', description: 'Login again to continue!', icon: 'i-octicon-desktop-download-24'}
        :
        {title: 'You are already logged out!', description: 'Login to continue!', icon: 'i-octicon-desktop-download-24'}
      )
    },
  },
  {
    icon: isDark.value ? 'i-heroicons:moon' : 'i-heroicons:sun',
    click: () => {
      isDark.value = !isDark.value
    },
    label: isDark.value ? '' : '',
  },
  
  
])


watchEffect(() => {
  if (!isLoggedIn.value) {
    links.value.splice(2,0,{
      label: 'Login',
      icon: 'i-heroicons:arrow-left-end-on-rectangle-16-solid',
      to: '/auth/login',
    })
  
  } else{
    const loginIndex = links.value.findIndex(link => link.label === 'Login');
    if (loginIndex !== -1) {
      links.value.splice(loginIndex, 1);
    }
  }
})

const colors = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Purple', value: 'purple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pink', value: 'pink' },
  { label: 'Cyan', value: 'cyan' },
  { label: 'Lime', value: 'lime' },
  { label: 'Indigo', value: 'indigo' },
  { label: 'Teal', value: 'teal' },
]

const selectedColor = ref(colors[2]) 

const appConfig = useAppConfig()
const changeColor = (color: string) => {
  selectedColor.value = colors.find(c => c.value === color) || colors[1]
  appConfig.ui.primary = color
}



</script>

<style>

</style>