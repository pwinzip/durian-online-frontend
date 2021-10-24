<template>
  <div>
    <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
      <h2 class="mr-auto text-lg font-medium text-center">ราคาซื้อขายทุเรียนตลาดออนไลน์กลาง</h2>
    </div>
    <div class="px-5 pt-5 mt-5 intro-y box">
      <div class="flex-col justify-center nav nav-tabs sm:flex-row lg:justify-start" role="tablist">
        <a
          id="durian1-tab"
          data-toggle="tab"
          data-target="#durian1"
          href="javascript:;"
          class="py-4 sm:mr-8 active"
          role="tab"
          aria-controls="durian1"
          aria-selected="true">
          หมอนทอง
        </a>
        <a
          id="durian2-tab"
          data-toggle="tab"
          data-target="#durian2"
          href="javascript:;"
          class="py-4 sm:mr-8"
          role="tab"
          aria-selected="false">
          ชะนี
        </a>
        <a
          id="durian3-tab"
          data-toggle="tab"
          data-target="#durian3"
          href="javascript:;"
          class="py-4 sm:mr-8"
          role="tab"
          aria-selected="false">
          ก้าวยาว
        </a>
        <a
          id="durian4-tab"
          data-toggle="tab"
          data-target="#durian4"
          href="javascript:;"
          class="py-4 sm:mr-8"
          role="tab"
          aria-selected="false">
          พวงมณี
        </a>
        <div class="flex w-full mt-4 mb-2 ml-auto mr-2 sm:w-auto sm:mt-0">
          <button class="shadow-md btn btn-primary">ดูทุเรียนยะลา</button>
        </div>
      </div>
    </div>

    <div class="mt-5 intro-y tab-content">
      <!-- หมอนทอง -->
      <div id="durian1" class="tab-pane active" role="tabpanel" aria-labelledby="durian1-tab">
        <div
          class="flex items-center justify-between p-4 mt-5 text-sm font-semibold text-white rounded-lg shadow-md  bg-theme-6 focus:outline-none">
          หนามแดง
        </div>
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
          <div class="overflow-auto intro-y lg:overflow-visible">
            <table class="table mt-2 table-report">
              <thead>
                <tr>
                  <th class="text-center whitespace-nowrap">เกรด</th>
                  <th class="text-center whitespace-nowrap">จำนวนที่ล้งรับซื้อ</th>
                  <th class="text-center whitespace-nowrap">ราคาที่ดีที่สุดที่ล้งรับซื้อ</th>
                </tr>
              </thead>
              <tbody>
                <!-- หมอนทอง นามแดง 0-5 -->
                <tr
                  v-for="(value, index) in bestPrice.slice(0, 5)"
                  :key="index"
                  class="cursor-pointer intro-x"
                  @click="onClickCell(1, 1, index + 1, 1)">
                  <td v-if="(index + 1) % 5 == 1" class="w-40 text-center">AB</td>
                  <td v-if="(index + 1) % 5 == 2" class="w-40 text-center">C</td>
                  <td v-if="(index + 1) % 5 == 3" class="w-40 text-center">D</td>
                  <td v-if="(index + 1) % 5 == 4" class="w-40 text-center">ตกไซต์</td>
                  <td v-if="(index + 1) % 5 == 0" class="w-40 text-center">ห้องเย็น</td>

                  <td v-if="value.length == 0" colspan="2" class="text-center text-primary-3">ไม่มีข้อมูล</td>
                  <td v-else class="w-40 text-center">{{ value[0].offer_remain_amount }}</td>
                  <td v-if="value.length > 0" class="w-40 text-center">{{ value[0].offer_price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          class="flex items-center justify-between p-4 mt-5 text-sm font-semibold text-white rounded-lg shadow-md  bg-theme-9 focus:outline-none">
          หนามเขียว
        </div>
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
          <div class="overflow-auto intro-y lg:overflow-visible">
            <table class="table mt-2 table-report">
              <thead>
                <tr>
                  <th class="text-center whitespace-nowrap">เกรด</th>
                  <th class="text-center whitespace-nowrap">จำนวนที่ล้งรับซื้อ</th>
                  <th class="text-center whitespace-nowrap">ราคาที่ดีที่สุดที่ล้งรับซื้อ</th>
                </tr>
              </thead>
              <tbody>
                <!-- หมอนทอง นามเขียว 5-10 -->
                <tr
                  v-for="(value, index) in bestPrice.slice(5, 10)"
                  :key="index"
                  class="cursor-pointer intro-x"
                  @click="onClickCell(1, 2, index + 1, 1)">
                  <td v-if="(index + 1) % 5 == 1" class="w-40 text-center">AB</td>
                  <td v-if="(index + 1) % 5 == 2" class="w-40 text-center">C</td>
                  <td v-if="(index + 1) % 5 == 3" class="w-40 text-center">D</td>
                  <td v-if="(index + 1) % 5 == 4" class="w-40 text-center">ตกไซต์</td>
                  <td v-if="(index + 1) % 5 == 0" class="w-40 text-center">ห้องเย็น</td>

                  <td v-if="value.length == 0" colspan="2" class="text-center text-primary-3">ไม่มีข้อมูล</td>
                  <td v-else class="w-40 text-center">{{ value[0].offer_remain_amount }}</td>
                  <td v-if="value.length > 0" class="w-40 text-center">{{ value[0].offer_price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import http from '@/services/BackendService'

export default defineComponent({
  data() {
    return {
      bestPrice: []
    }
  },
  mounted() {
    http
      .get('bestofferprice/1')
      .then(res => {
        let bestPriceResponse = res.data
        this.bestPrice = bestPriceResponse
        console.log(bestPriceResponse)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onClickCell(gene, torn, grade, location) {
      this.$router.push({
        name: 'sell-bid-detail',
        params: {
          gene_id: gene,
          torn_id: torn,
          grade_id: grade,
          location_id: location
        }
      })
    }
  }
})
</script>