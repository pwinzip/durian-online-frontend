<template>
  <div>
    <DarkModeSwitcher />
    <div class="container">
      <!-- BEGIN: Error Page -->
      <div class="flex flex-col items-center justify-center h-screen text-center error-page lg:flex-row lg:text-left">
        <div class="-intro-x lg:mr-20">
          <img
            alt="Icewall Tailwind HTML Admin Template"
            class="h-48 lg:h-auto"
            :src="require(`@/assets/images/error-illustration.svg`)"
          />
        </div>
        <div class="mt-10 text-white lg:mt-0">
          <div class="font-medium intro-x text-8xl">404</div>
          <div class="mt-5 text-xl font-medium intro-x lg:text-3xl">Oops. This page has gone missing.</div>
          <div class="mt-3 text-lg intro-x">You may have mistyped the address or the page may have moved.</div>
          <button
            @click="backHome"
            class="px-4 py-3 mt-10 text-white border-white intro-x btn dark:border-dark-5 dark:text-gray-300"
          >Back to Home</button>
        </div>
      </div>
      <!-- END: Error Page -->
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";

export default defineComponent({
  components: {
    DarkModeSwitcher
  },
  setup() {
    onMounted(() => {
      cash("body")
        .removeClass("main")
        .removeClass("login")
        .removeClass("bg-theme-2")
        .removeClass("p-0")
        .addClass("error-page");
    });
  },
  methods: {
    backHome() {
      this.$router.push("/");
    }
    // backHome: function() {
    //   this.$router.push("/");
    //   //   this.$router.push({ path: "/" });
    //   // not working with css
    //   //   this.$router.push({ name: "Home" });
    // }
  }
});
</script>
