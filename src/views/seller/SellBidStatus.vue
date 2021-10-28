<template>
  <div>
    <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
      <h2 class="mr-auto text-lg font-medium text-center">สถานะการรับซื้อ</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- Offer status in progress -->
      <div class="col-span-12 lg:col-span-4 2xl:col-span-4">
        <!-- status = 0 รอดำเนินการ && status = 1 กำลังคัดทุเรียน -->
        <div class="mt-5 intro-y box lg:mt-0">
          <div class="relative flex items-center p-5 border-b border-gray-200 dark:border-gray-600">
            <div class="ml-4 mr-auto">
              <div class="font-medium text-theme-11">รอดำเนินการ</div>
            </div>
          </div>
          <!-- show offer status list -->
          <div v-for="value in inProgress" :key="value.id" class="p-5">
            <div class="relative flex items-center">
              <div class="mr-auto w-28">
                <div class="font-medium">{{ value.genes.gene }}</div>
                <div class="text-gray-600">{{ value.torns.torn_name }}</div>
              </div>
              <div class="-ml-1 text-gray-900 dark:text-gray-200">{{ value.grades.grade }}</div>
              <div class="ml-2 font-medium text-center text-gray-900 dark:text-gray-200">
                {{ value.bid_amount }} kg
              </div>
              <div class="ml-2 text-center text-gray-900 dark:text-gray-200">{{ value.bid_price }} ฿</div>
              <div class="ml-2 mr-3 text-center text-gray-900 dark:text-gray-200">
                {{ formatDate(value.created_at) }}
              </div>
              <!-- orange if status = 0,  blue if status = 1 -->
              <div v-if="value.status == 0" class="ml-auto text-theme-11">
                {{ convertStatus(value.status) }}
              </div>
              <div v-if="value.status == 1" class="ml-auto text-theme-1">
                {{ convertStatus(value.status) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Offer status matched -->
      <div class="col-span-12 lg:col-start-4 2xl:col-span-4">
        <div class="mt-5 intro-y box lg:mt-0">
          <div class="relative flex items-center p-5 border-b border-gray-200">
            <div class="ml-4 mr-auto">
              <div class="font-medium text-theme-1 dark:text-theme-10">กำลังคัดทุเรียน</div>
            </div>
          </div>
          <!-- show offer status list -->
          <div v-for="value in matched" :key="value.id" class="p-5">
            <div class="relative flex items-center">
              <div class="mr-auto w-28">
                <div class="font-medium">{{ value.genes.gene }}</div>
                <div class="text-gray-600">{{ value.torns.torn_name }}</div>
              </div>
              <div class="-ml-1 text-gray-900 dark:text-gray-200">{{ value.grades.grade }}</div>
              <div class="ml-2 font-medium text-center text-gray-900 dark:text-gray-200">
                {{ value.bid_amount }} kg
              </div>
              <div class="ml-2 text-center text-gray-900 dark:text-gray-200">{{ value.bid_price }} ฿</div>
              <div class="ml-2 mr-3 text-center text-gray-900 dark:text-gray-200">
                {{ formatDate(value.created_at) }}
              </div>
              <!-- orange if status = 0,  blue if status = 1 -->
              <div v-if="value.status == 0" class="ml-auto text-theme-11">
                {{ convertStatus(value.status) }}
              </div>
              <div v-if="value.status == 1" class="ml-auto text-theme-1">
                {{ convertStatus(value.status) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Offer status completed -->
      <div class="col-span-12 lg:col-start-4 2xl:col-span-4">
        <div class="mt-5 intro-y box lg:mt-0">
          <div class="relative flex items-center p-5 border-b border-gray-200">
            <div class="ml-4 mr-auto">
              <div class="font-medium text-primary-4">เสร็จสมบูรณ์</div>
            </div>
          </div>
          <!-- show offer status list -->
          <div v-for="value in completed" :key="value.id" class="p-5">
            <div class="relative flex items-center">
              <div class="mr-auto">
                <div class="font-medium">{{ value.genes.gene }}</div>
                <div class="text-gray-600">{{ value.torns.torn_name }}</div>
              </div>
              <div class="text-gray-900 align-middle">{{ value.grades.grade }}</div>
              <div class="ml-auto">
                <div class="font-medium text-gray-900">{{ value.bid_amount }} kg</div>
                <div class="text-gray-600">{{ value.bid_price }} ฿</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/services/BackendService'
import moment from 'moment'

export default {
  data() {
    return {
      inProgress: [],
      matched: [],
      completed: []
    }
  },
  mounted() {
    let userid = JSON.parse(localStorage.getItem('user'))['user'].id
    http.get('user-bid-sell/' + userid).then(res => {
      let responseData = res.data
      this.inProgress = responseData.inprogress
      this.matched = responseData.matched
      this.completed = responseData.completed
      console.log(responseData)
    })
  },
  methods: {
    convertStatus(status) {
      if (status == 0) return 'รอดำเนินการ'
      else if (status == 1) return 'กำลังคัดทุเรียน'
    },
    formatDate(value) {
      return moment(value)
        .add(543, 'year')
        .format('ll')
    }
  }
}
</script>