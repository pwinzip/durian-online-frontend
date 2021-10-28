<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Register Info -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <a href="/" class="flex items-center pt-5 -intro-x">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="w-6"
              :src="require(`@/assets/images/durian-logo.svg`)" />
            <span class="ml-3 text-lg text-white"> Durian<span class="font-medium"> Online</span> </span>
          </a>
          <div class="my-auto">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="w-1/2 -mt-16 -intro-x"
              :src="require(`@/assets/images/illustration.svg`)" />
            <div class="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
              A few more clicks to <br />
              sign up to your account.
            </div>
            <div class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-gray-500">
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </div>
        <!-- END: Register Info -->
        <!-- BEGIN: Register Form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <div
            class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md  xl:ml-20 dark:bg-dark-1 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
              ลงทะเบียนผู้ใช้งาน
            </h2>
            <div class="mt-2 text-center text-gray-500 intro-x dark:text-gray-500 xl:hidden">
              A few more clicks to sign up to your account. Manage all your e-commerce accounts in one place
            </div>
            <div class="mt-8 intro-x">
              <input
                v-model="fullname"
                type="text"
                class="block px-4 py-3 border-gray-300 intro-x login__input form-control"
                placeholder="ชื่อ - นามสกุล" />
              <div v-if="v$.fullname.$error" class="mt-2 text-sm text-primary-3">
                {{ v$.fullname.$errors[0].$message }}
              </div>

              <textarea
                v-model="address"
                class="block px-4 py-3 mt-4 border-gray-300 intro-x login__input form-control"
                rows="2"
                placeholder="ที่อยู่"></textarea>
              <div v-if="v$.address.$error" class="mt-2 text-sm text-primary-3">
                {{ v$.address.$errors[0].$message }}
              </div>

              <input
                v-model="tel"
                type="tel"
                class="block px-4 py-3 mt-4 border-gray-300 intro-x login__input form-control"
                placeholder="เบอร์โทรศัพท์" />
              <div v-if="v$.tel.$error" class="mt-2 text-sm text-primary-3">
                {{ v$.tel.$errors[0].$message }}
              </div>
              <input
                v-model="username"
                type="text"
                class="block px-4 py-3 mt-4 border-gray-300 intro-x login__input form-control"
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

              <input
                v-model="confirmpassword"
                type="password"
                class="block px-4 py-3 mt-4 border-gray-300 intro-x login__input form-control"
                placeholder="ยืนยันรหัสผ่าน" />
              <div v-if="v$.confirmpassword.$error" class="mt-2 text-sm text-primary-3">
                {{ v$.confirmpassword.$errors[0].$message }}
              </div>

              <div class="block px-4 py-3 mt-4">
                <!-- <label>ประเภทผู้ใช้งาน</label> -->
                <div class="flex flex-col sm:flex-row">
                  <div class="mr-3 form-check">
                    <input
                      v-model="role"
                      id="radio-switch-2"
                      class="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="1" />
                    <label class="form-check-label" for="radio-switch-2">ชาวสวนทุเรียน</label>
                  </div>
                  <div class="mr-3 form-check sm:mt-0">
                    <input
                      v-model="role"
                      id="radio-switch-1"
                      class="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="2" />
                    <label class="form-check-label" for="radio-switch-1">ล้งทุเรียน</label>
                  </div>
                </div>
                <div v-if="v$.role.$error" class="mt-2 text-sm text-primary-3">
                  {{ v$.role.$errors[0].$message }}
                </div>
              </div>
            </div>
            <!-- <div class="flex items-center mt-4 text-xs text-gray-700 intro-x dark:text-gray-600 sm:text-sm">
              <input id="remember-me" type="checkbox" class="mr-2 border form-check-input" />
              <label class="cursor-pointer select-none" for="remember-me">I agree to the Envato</label>
              <a class="ml-1 text-theme-1 dark:text-theme-10" href="">Privacy Policy</a>.
            </div> -->
            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <button
                @click="submitRegister"
                class="w-full px-4 py-3 align-top btn btn-primary xl:w-32 xl:mr-3">
                ลงทะเบียน
              </button>
              <router-link
                to="/login"
                class="w-full px-4 py-3 mt-3 align-top btn btn-outline-secondary xl:w-32 xl:mt-0">
                เข้าสู่ระบบ
              </router-link>
            </div>
            <div class="mt-2 text-center text-theme-20 intro-x dark:text-gray-600 xl:mt-8 xl:text-left">
              <router-link to="/">กลับหน้าแรก</router-link>
            </div>
          </div>
        </div>
        <!-- END: Register Form -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import DarkModeSwitcher from '@/components/dark-mode-switcher/Main.vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, sameAs, helpers } from '@vuelidate/validators'

import http from '@/services/AuthService'

export default defineComponent({
  name: 'Register',
  components: {
    DarkModeSwitcher
  },
  data() {
    return {
      v$: useVuelidate(),
      fullname: '',
      tel: '',
      address: '',
      username: '',
      password: '',
      confirmpassword: '',
      role: ''
    }
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
  methods: {
    submitRegister() {
      this.v$.$validate()
      if (!this.v$.$error) {
        http.post('register', {
          fullname: this.fullname,
          adderss: this.address,
          telephone: this.tel,
          username: this.username,
          password: this.password,
          password_confirmation: this.confirmpassword,
          role: this.role
        })
      }
    }
  },

  validations() {
    return {
      fullname: {
        required: helpers.withMessage('กรุณาใส่ชื่อผู้ใช้งาน', required)
      },
      address: {
        required: helpers.withMessage('กรุณาใส่ที่อยู่', required)
      },
      tel: {
        required: helpers.withMessage('กรุณาใส่เบอร์โทรศัพท์', required)
      },
      username: {
        required: helpers.withMessage('กรุณาใส่ชื่อผู้ใช้งาน', required)
      },
      password: {
        required: helpers.withMessage('กรุณาใส่รหัสผ่าน', required),
        minLength: helpers.withMessage(
          ({ $params }) => `กรุณากรอกรหัสผ่านอย่างน้อย ${$params.min} ตัวอักษร`,
          minLength(6)
        )
      },
      confirmpassword: {
        required: helpers.withMessage('กรุณายืนยันรหัสผ่าน', required),
        sameAsPassword: helpers.withMessage('กรุณาใส่รหัสผ่านให้ตรงกัน', sameAs(this.password))
      },
      role: {
        required: helpers.withMessage('กรุณาเลือกประเภทของผู้ใช้งาน', required)
      }
    }
  }
})
</script>