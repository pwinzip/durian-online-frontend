<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <router-link to="/" class="flex items-center pt-5 -intro-x">
            <img alt="Icewall Tailwind HTML Admin Template" class="w-6" :src="require(`@/assets/images/logo.svg`)" />
            <span class="ml-3 text-lg text-white">Durian online</span>
          </router-link>
          <div class="my-auto">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="w-1/2 -mt-16 -intro-x"
              :src="require(`@/assets/images/illustration.svg`)"
            />
            <div class="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
              A few more clicks to
              <br />sign in to your account.
            </div>
            <div
              class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-gray-500"
            >Manage all your e-commerce accounts in one place</div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <div
            class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-dark-1 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2 class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">เข้าสู่ระบบ</h2>
            <div class="mt-2 text-center text-gray-500 intro-x xl:hidden">
              A few more clicks to sign in to your account. Manage all your
              e-commerce accounts in one place
            </div>
            <div class="mt-8 intro-x">
              <input
                type="text"
                class="block px-4 py-3 border-gray-300 intro-x login__input form-control"
                placeholder="ชื่อผู้ใช้งาน"
              />
              <input
                type="password"
                class="block px-4 py-3 mt-4 border-gray-300 intro-x login__input form-control"
                placeholder="รหัสผ่าน"
              />
            </div>
            <div class="flex mt-4 text-xs text-gray-700 intro-x dark:text-gray-600 sm:text-sm">
              <div class="flex items-center mr-auto">
                <input id="remember-me" type="checkbox" class="mr-2 border form-check-input" />
                <label class="cursor-pointer select-none" for="remember-me">Remember me</label>
              </div>
              <a href>ลืมรหัสผ่าน</a>
            </div>
            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <button @click="loginBtn" class="w-full px-4 py-3 align-top btn btn-primary xl:w-32 xl:mr-3">เข้าสู่ระบบ</button>
              <button
                @click="registerBtn"
                class="w-full px-4 py-3 mt-3 align-top btn btn-outline-secondary xl:w-36 xl:mt-0"
              >ลงทะเบียนผู้ใช้งาน</button>
            </div>
            <div class="mt-10 text-center text-gray-700 intro-x xl:mt-24 dark:text-gray-600 xl:text-left">
              By signin up, you agree to our
              <br />
              <router-link to="/" class="text-theme-1 dark:text-theme-10">Terms and Conditions></router-link>&
              <router-link to="/" class="text-theme-1 dark:text-theme-10">Privacy Policy</router-link>
            </div>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
// import Http from "vue-axios";

export default defineComponent({
  components: {
    DarkModeSwitcher
  },
  setup() {
    onMounted(() => {
      cash("body")
        .removeClass("main")
        .removeClass("error-page")
        .removeClass("bg-theme-2")
        .removeClass("p-0")
        .addClass("login");
    });
  },
  methods: {
    loginBtn: function() {},

    registerBtn: function() {
      this.$router.push({ name: "Register" });
    }
  }
});
</script>
