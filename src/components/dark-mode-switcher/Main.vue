<template>
  <!-- BEGIN: Dark Mode Switcher-->
  <div
    class="fixed bottom-0 right-0 z-50 flex items-center justify-center w-40 h-12 mb-10 mr-10 border rounded-full shadow-md cursor-pointer dark-mode-switcher box dark:bg-dark-2"
    @click="switchMode"
  >
    <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
    <div
      :class="{ 'dark-mode-switcher__toggle--active': darkMode }"
      class="border dark-mode-switcher__toggle"
    ></div>
  </div>
  <!-- END: Dark Mode Switcher-->
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const darkMode = computed(() => store.state.main.darkMode)

    const setDarkModeClass = () => {
      darkMode.value
        ? cash('html').addClass('dark')
        : cash('html').removeClass('dark')
    }

    const switchMode = () => {
      store.dispatch('main/setDarkMode', !darkMode.value)
      setDarkModeClass()
    }

    onMounted(() => {
      setDarkModeClass()
    })

    return {
      switchMode,
      darkMode
    }
  }
})
</script>
