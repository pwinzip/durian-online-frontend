<template>
    <div>
    <Navbar /> 
    <!-- // เอา navbar จาก landing page -->
    <!-- BEGIN: Content -->
      <div class="content">
        <router-view />
      </div>
      <!-- END: Content -->
      <Footer /> 
      <!-- เอา footer จาก landing page -->
    </div>
</template>

<script>

import Navbar from "@/components/frontend/Navbar.vue"
import Footer from "@/components/frontend/Footer.vue"

export default {
    name: "FrontendLayout",
    components: {
        Navbar,
        Footer,
    }
}
</script>