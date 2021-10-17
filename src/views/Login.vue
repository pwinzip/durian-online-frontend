<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <router-link to="/" class="flex items-center pt-5 -intro-x">
            <img alt="Icewall Tailwind HTML Admin Template" class="w-6" :src="require(`@/assets/images/logo.svg`)" />
            <span class="ml-3 text-lg text-white">Du<span class="font-medium">rian online</span></span>
          </router-link>
          <div class="my-auto">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="w-1/2 -mt-16 -intro-x"
              :src="require(`@/assets/images/illustration.svg`)" />
            <div class="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
              A few more clicks to
              <br />sign in to your account.
            </div>
            <div class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-gray-500">
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <div
            class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md  xl:ml-20 dark:bg-dark-1 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">เข้าสู่ระบบ</h2>

            <div class="mt-2 text-center text-gray-500 intro-x xl:hidden">
              A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place
            </div>

            <form @submit.prevent="onSubmit">
              <div class="mt-8 intro-x">
                <input
                  v-model="username"
                  type="text"
                  class="block px-4 py-3 border-gray-300 intro-x login__input form-control"
                  placeholder="ชื่อผู้ใช้งาน" />
                <div v-if="v$.username.$error" class="mt-2 text-sm text-primary-3">
                  {{ v$.username.$errors[0].$message }}
                </div>
                <input
                  v-model="password"
                  type="password"
                  class="block px-4 py-3 mt-4 border-gray-300 intro-x login__input form-control"
                  placeholder="รหัสผ่าน" />
                <div v-if="v$.password.$error" class="mt-2 text-sm text-primary-3">
                  {{ v$.password.$errors[0].$message }}
                </div>
              </div>

              <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                <button @click="submitLogin" class="w-full px-4 py-3 align-top btn btn-primary xl:w-full">
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
            <div class="flex mt-4 text-xs text-theme-20 intro-x dark:text-gray-600 sm:text-sm">
              <router-link to="/register">สมัครสมาชิกใหม่</router-link>
            </div>
            <div class="flex mt-4 text-xs text-theme-20 intro-x dark:text-gray-600 sm:text-sm">
              <router-link to="#">ฉันลืมรหัสผ่าน</router-link>
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
import { defineComponent, onMounted } from 'vue'
import DarkModeSwitcher from '@/components/dark-mode-switcher/Main.vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

import http from '@/services/AuthService'

export default defineComponent({
  name: 'Login',
  components: {
    DarkModeSwitcher
  },
  setup() {
    onMounted(() => {
      cash('body')
        .removeClass('main')
        .removeClass('error-page')
        .removeClass('bg-theme-2')
        .removeClass('p-0')
        .addClass('login')
    })
  },
  data() {
    return {
      v$: useVuelidate(),
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogin() {
      this.v$.$validate()
      if (!this.v$.$error) {
        // เรียกใช้งาน api Login ของ Laravel
        http
          .post('login', {
            username: this.username,
            password: this.password
          })
          .then(res => {
            console.log(res.data)

            // เก็บข้อมูล user ลงใน local storage
            localStorage.setItem('user', JSON.stringify(res.data))

            const Toast = this.$swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              didOpen: toast => {
                toast.addEventListener('mouseenter', this.$swal.stopTimer)
                toast.addEventListener('mouseleave', this.$swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'เข้าสู่ระบบสำเร็จ'
            }).then(() => {
              // เมื่อ log in ผ่านให้เช็คว่า user มีสิทธิเป็นอะไร
              let userRole = res.data['user']['role']
              if (userRole == '0') {
                this.$router.push('/admin')
              } else if (userRole == '1') {
                this.$router.push('/seller-main')
              } else if (userRole == '2') {
                this.$router.push('/buyer-main')
              } else {
                this.$router.push('error-page')
              }
              //   window.location.href = '/backend'
            })
          })
          .catch(error => {
            if (error.response) {
              //   console.log(error.response.data)
              //   console.log(error.response.status)
              //   console.log(error.response.headers)

              // เรียกใช้งาน popup ของ Sweetalert2
              if (error.response.status == '401') {
                const Toast = this.$swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true,
                  didOpen: toast => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                  }
                })

                Toast.fire({
                  icon: 'error',
                  title: 'ข้อมูลสมาชิกไม่ถูกต้อง'
                })
              }
            }
          })
      } else {
        // validate failed
      }
    },

    registerBtn() {
      this.$router.push('/register')
    }
  },

  validations() {
    return {
      username: {
        required: helpers.withMessage('กรุณาใส่ชื่อผู้ใช้งาน', required)
      },
      password: {
        required: helpers.withMessage('กรุณาใส่รหัสผ่าน', required),
        minLength: helpers.withMessage(
          ({ $params }) => `กรุณากรอกรหัสผ่านอย่างน้อย ${$params.min} ตัวอักษร`,
          minLength(6)
        )
      }
    }
  }
})
</script>
