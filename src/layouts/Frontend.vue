<template>
  <div class="w-full gradient">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style>
.gradient {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}
</style>

<script>
import { defineComponent, onMounted } from "vue";
import Navbar from "@/components/frontend/Navbar.vue";
import Footer from "@/components/frontend/Footer.vue";

export default defineComponent({
  name: "FrontendLayout",
  components: {
    Navbar,
    Footer
  },
  setup() {
    onMounted(() => {
      cash("body")
        .removeClass("main")
        .removeClass("error-page")
        .removeClass("login")
        .addClass("bg-theme-2")
        .addClass("p-0");
    });
  }
});
</script>
