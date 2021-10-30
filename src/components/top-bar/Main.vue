<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumb -->
    <div class="hidden mr-auto -intro-x breadcrumb sm:flex">
      <a href="">Durian Online</a>
      <ChevronRightIcon class="breadcrumb__icon" />
      <a href="" class="breadcrumb--active">{{ `${title}` }}</a>
    </div>
    <!-- END: Account Menu -->

    <!-- BEGIN: Account Menu -->

    <div class="w-8 h-8 intro-x dropdown">
      <div
        class="w-8 h-8 overflow-hidden rounded-full shadow-lg dropdown-toggle image-fit zoom-in"
        role="button"
        aria-expanded="false">
        <img alt="Online" :src="require(`@/assets/images/profile-1.jpg`)" />
      </div>
      <div class="w-56 dropdown-menu">
        <div class="text-white dropdown-menu__content box bg-theme-26 dark:bg-dark-6">
          <div class="p-4 border-b border-theme-27 dark:border-dark-3">
            <div class="font-medium">{{ username }}</div>
            <div class="text-xs text-theme-28 mt-0.5 dark:text-gray-600">Role</div>
          </div>
          <div class="p-2">
            <router-link
              to=""
              class="flex items-center p-2 transition duration-300 ease-in-out rounded-md  hover:bg-theme-1 dark:hover:bg-dark-3">
              <UserIcon class="w-4 h-4 mr-2" /> Profile
            </router-link>
            <router-link
              to=""
              class="flex items-center p-2 transition duration-300 ease-in-out rounded-md  hover:bg-theme-1 dark:hover:bg-dark-3">
              <LockIcon class="w-4 h-4 mr-2" /> Reset Password
            </router-link>
          </div>
          <!-- <div class="p-2 border-t border-theme-27 dark:border-dark-3">
            <button
              @click="onclickLogout"
              class="flex items-center w-full p-2 transition duration-300 ease-in-out rounded-md hover:bg-theme-1 dark:hover:bg-dark-3">
              <ToggleRightIcon class="w-4 h-4 mr-2" /> Logout
            </button>
            
          </div> -->
        </div>
      </div>
    </div>
    <div class="items-center ml-3">
      <button @click="onclickLogout" class="w-32 mr-2 btn btn-elevated-rounded-danger">
        <LockIcon class="w-4 h-4 mr-2" />ออกจากระบบ
      </button>
    </div>

    <!-- END: Breadcrumb -->
    <!-- BEGIN: Search -->
    <!-- <div class="relative mr-3 intro-x sm:mr-6">
      <div class="hidden search sm:block">
        <input
          type="text"
          class="border-transparent search__input form-control placeholder-theme-13"
          placeholder="Search..."
          @focus="showSearchDropdown"
          @blur="hideSearchDropdown"
        />
        <SearchIcon class="search__icon dark:text-gray-300" />
      </div>
      <a class="notification sm:hidden" href="">
        <SearchIcon class="notification__icon dark:text-gray-300" />
      </a>
      <div class="search-result" :class="{ show: searchDropdown }">
        <div class="search-result__content">
          <div class="search-result__content__title">Pages</div>
          <div class="mb-5">
            <a href="" class="flex items-center">
              <div
                class="flex items-center justify-center w-8 h-8 rounded-full bg-theme-18 text-theme-9"
              >
                <InboxIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Mail Settings</div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div
                class="flex items-center justify-center w-8 h-8 rounded-full bg-theme-17 text-theme-11"
              >
                <UsersIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Users & Permissions</div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div
                class="flex items-center justify-center w-8 h-8 rounded-full bg-theme-14 text-theme-10"
              >
                <CreditCardIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Transactions Report</div>
            </a>
          </div>
          <div class="search-result__content__title">Users</div>
          <div class="mb-5">
            <a
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              href
              class="flex items-center mt-2"
            >
              <div class="w-8 h-8 image-fit">
                <img
                  alt="Icewall Tailwind HTML Admin Template"
                  class="rounded-full"
                  :src="require(`@/assets/images/${faker.photos[0]}`)"
                />
              </div>
              <div class="ml-3">{{ faker.users[0].name }}</div>
              <div
                class="w-48 ml-auto text-xs text-right text-gray-600 truncate"
              >
                {{ faker.users[0].email }}
              </div>
            </a>
          </div>
          <div class="search-result__content__title">Products</div>
          <a
            v-for="(faker, fakerKey) in $_.take($f(), 4)"
            :key="fakerKey"
            href
            class="flex items-center mt-2"
          >
            <div class="w-8 h-8 image-fit">
              <img
                alt="Icewall Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${faker.images[0]}`)"
              />
            </div>
            <div class="ml-3">{{ faker.products[0].name }}</div>
            <div class="w-48 ml-auto text-xs text-right text-gray-600 truncate">
              {{ faker.products[0].category }}
            </div>
          </a>
        </div>
      </div>
    </div> -->
    <!-- END: Search -->
    <!-- BEGIN: Notifications -->
    <!-- <div class="mr-auto intro-x dropdown sm:mr-6">
      <div
        class="cursor-pointer dropdown-toggle notification notification--bullet"
        role="button"
        aria-expanded="false"
      >
        <BellIcon class="notification__icon dark:text-gray-300" />
      </div>
      <div class="pt-2 notification-content dropdown-menu">
        <div
          class="notification-content__box dropdown-menu__content box dark:bg-dark-6"
        >
          <div class="notification-content__title">Notifications</div>
          <div
            v-for="(faker, fakerKey) in $_.take($f(), 5)"
            :key="fakerKey"
            class="relative flex items-center cursor-pointer"
            :class="{ 'mt-5': fakerKey }"
          >
            <div class="flex-none w-12 h-12 mr-1 image-fit">
              <img
                alt="Icewall Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${faker.photos[0]}`)"
              />
              <div
                class="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-theme-9"
              ></div>
            </div>
            <div class="ml-2 overflow-hidden">
              <div class="flex items-center">
                <a href="javascript:;" class="mr-5 font-medium truncate">{{
                  faker.users[0].name
                }}</a>
                <div class="ml-auto text-xs text-gray-500 whitespace-nowrap">
                  {{ faker.times[0] }}
                </div>
              </div>
              <div class="w-full truncate text-gray-600 mt-0.5">
                {{ faker.news[0].shortContent }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- END: Notifications -->
  </div>
  <!-- END: Top Bar -->
</template>

<script>
// import { defineComponent, ref } from 'vue'
import { defineComponent } from 'vue'
import http from '@/services/BackendService'

export default defineComponent({
  data() {
    let userdata = JSON.parse(localStorage.getItem('user'))
    return {
      username: userdata['user']['fullname']
    }
  },
  props: {
    title: String
  },
  setup() {
    // const searchDropdown = ref(false)
    // const showSearchDropdown = () => {
    //   searchDropdown.value = true
    // }
    // const hideSearchDropdown = () => {
    //   searchDropdown.value = false
    // }
    // return {
    //   searchDropdown,
    //   showSearchDropdown,
    //   hideSearchDropdown
    // }
  },
  methods: {
    onclickLogout() {
      localStorage.removeItem('user')
      //   this.$router.push('/login')
      http.post('logout').then(res => {
        console.log(res.data)
      })
      this.$router.push({ name: 'Login' })
    }
  }
})
</script>
