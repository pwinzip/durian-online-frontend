<template>
  <nav class="container flex flex-wrap items-center px-4 mx-auto leading-normal tracking-normal">
    <a class="text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl" href="#">
      <!-- <svg class="inline h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
        <rect
          fill="#2a2a31"
          x="16.539"
          y="425.626"
          width="479.767"
          height="50.502"
          transform="matrix(1,0,0,1,0,0)" />
        <path
          class="plane-take-off"
          d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z " />
      </svg> -->
      <img :src="require('@/assets/images/durian-logo.png')" class="inline h-16 fill-current" />

      Durain Online
    </a>
    <button
      id="nav-toggle"
      @click="activeMenu"
      class="px-3 py-2 ml-auto text-indigo-900 border-2 border-indigo-600 rounded-md  hover:bg-indigo-600 hover:text-white lg:hidden">
      <span class="block w-6 my-1 border-b-2 border-current"></span>
      <span class="block w-6 my-1 border-b-2 border-current"></span>
      <span class="block w-6 my-1 border-b-2 border-current"></span>
    </button>
    <div id="nav-content" class="hidden w-full ml-auto text-black rounded-b-2xl lg:block lg:w-auto">
      <router-link to="/" class="block px-4 py-2 font-medium hover:text-indigo-900 lg:inline-block"
        >หน้าหลัก</router-link
      >
      <router-link to="/login" class="block px-4 py-2 font-medium hover:text-indigo-900 lg:inline-block"
        >เข้าสู่ระบบ</router-link
      >
      <div class="inline-block px-4 py-2">
        <router-link
          to="/register"
          class="inline-block px-8 py-4 mx-auto mt-4 font-bold text-gray-200 transition duration-300 ease-in-out transform rounded-full shadow opacity-75  bg-theme-12 lg:mx-0 hover:no-underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
          >ลงทะเบียนผู้ใช้งาน</router-link
        >
      </div>
    </div>
    <hr class="py-0 my-0 border-b border-gray-100 opacity-25" />

    <!-- Frontend Mobile Menu -->
  </nav>
</template>



<script>
import { ref } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const toggleMenu = ref(false)

    return {
      toggleMenu
    }
  },
  methods: {
    activeMenu() {
      cash('#nav-content').toggleClass('hidden')
      // this.toggleMenu = !this.toggleMenu
      //   if (this.toggleMenu) {
      //     // show menu
      //     cash('.nav-toggle').removeClass('hidden')
      //   } else {
      //     cash('.nav-toggle').addClass('hidden')
      //   }
    }
  }
}
</script>