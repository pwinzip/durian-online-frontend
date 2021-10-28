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
        <div class="grid grid-cols-12 gap-6">
          <!-- หนามแดง -->
          <div class="col-span-12 lg:col-span-6-6 2xl:col-span-6">
            <div
              class="flex items-center justify-between p-4 mt-5 text-sm font-semibold text-white rounded-lg shadow-md  bg-theme-6 focus:outline-none">
              หนามแดง
            </div>
            <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
              <div class="overflow-auto intro-y lg:overflow-visible">
                <table class="table mt-2 table-report">
                  <thead>
                    <tr>
                      <th class="text-center">เกรด</th>
                      <th class="text-center">จำนวนที่ล้งรับซื้อ (kg)</th>
                      <th class="text-center">ราคาที่ดีที่สุดที่ล้งรับซื้อ (บาท)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- หมอนทอง นามแดง 0-5 -->
                    <tr
                      v-for="(value, index) in bestPrice.slice(0, 5)"
                      :key="index"
                      class="cursor-pointer intro-x"
                      @click="onClickCell(value.gene_id, value.torn_id, value.grade_id, value.location_id)">
                      <td class="w-40 text-center">{{ printGrade(value.grade_id) }}</td>

                      <td
                        v-if="value.sum_amount == null || value.max_price == null"
                        colspan="2"
                        class="text-center text-primary-3">
                        ไม่มีข้อมูลการรับซื้อ
                      </td>
                      <td
                        v-show="value.sum_amount != null && value.max_price != null"
                        class="w-40 text-center">
                        {{ value.sum_amount }}
                      </td>
                      <td
                        v-show="value.sum_amount != null && value.max_price != null"
                        class="w-40 text-center">
                        {{ value.max_price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- หนามเขียว -->
          <div class="col-span-12 lg:col-span-6-6 2xl:col-span-6">
            <div
              class="flex items-center justify-between p-4 mt-5 text-sm font-semibold text-white rounded-lg shadow-md  bg-theme-9 focus:outline-none">
              หนามเขียว
            </div>
            <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
              <div class="overflow-auto intro-y lg:overflow-visible">
                <table class="table mt-2 table-report">
                  <thead>
                    <tr>
                      <th class="text-center">เกรด</th>
                      <th class="text-center">จำนวนที่ล้งรับซื้อ (kg)</th>
                      <th class="text-center">ราคาที่ดีที่สุดที่ล้งรับซื้อ (บาท)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- หมอนทอง นามเขียว 5-10 -->
                    <tr
                      v-for="(value, index) in bestPrice.slice(5, 10)"
                      :key="index"
                      class="cursor-pointer intro-x"
                      @click="onClickCell(value.gene_id, value.torn_id, value.grade_id, value.location_id)">
                      <td class="w-40 text-center">{{ printGrade(value.grade_id) }}</td>
                      <td
                        v-if="value.sum_amount == null || value.max_price == null"
                        colspan="2"
                        class="text-center text-primary-3">
                        ไม่มีข้อมูลการรับซื้อ
                      </td>
                      <td v-else class="w-40 text-center">
                        {{ value.sum_amount }}
                      </td>
                      <td v-if="value.sum_amount != null && value.max_price != null" class="w-40 text-center">
                        {{ value.max_price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ชะนี -->
      <div id="durian2" class="tab-pane" role="tabpanel" aria-labelledby="durian2-tab">
        <div class="grid grid-cols-12 gap-6">
          <!-- หนามแดง -->
          <div class="col-span-12 lg:col-span-6-6 2xl:col-span-6">
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
                      <th class="text-center whitespace-nowrap">จำนวนที่ล้งรับซื้อ (kg)</th>
                      <th class="text-center whitespace-nowrap">ราคาที่ดีที่สุดที่ล้งรับซื้อ (บาท)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- ชะนี นามแดง 10-15 -->
                    <tr
                      v-for="(value, index) in bestPrice.slice(10, 15)"
                      :key="index"
                      class="cursor-pointer intro-x"
                      @click="onClickCell(value.gene_id, value.torn_id, value.grade_id, value.location_id)">
                      <td class="w-40 text-center">{{ printGrade(value.grade_id) }}</td>

                      <td
                        v-if="value.sum_amount == null || value.max_price == null"
                        colspan="2"
                        class="text-center text-primary-3">
                        ไม่มีข้อมูลการรับซื้อ
                      </td>
                      <td
                        v-show="value.sum_amount != null && value.max_price != null"
                        class="w-40 text-center">
                        {{ value.sum_amount }}
                      </td>
                      <td
                        v-show="value.sum_amount != null && value.max_price != null"
                        class="w-40 text-center">
                        {{ value.max_price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- หนามเขียว -->
          <div class="col-span-12 lg:col-span-6-6 2xl:col-span-6">
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
                      <th class="text-center whitespace-nowrap">จำนวนที่ล้งรับซื้อ (kg)</th>
                      <th class="text-center whitespace-nowrap">ราคาที่ดีที่สุดที่ล้งรับซื้อ (บาท)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- ชะนี นามเขียว 15-20 -->
                    <tr
                      v-for="(value, index) in bestPrice.slice(15, 20)"
                      :key="index"
                      class="cursor-pointer intro-x"
                      @click="onClickCell(value.gene_id, value.torn_id, value.grade_id, value.location_id)">
                      <td class="w-40 text-center">{{ printGrade(value.grade_id) }}</td>
                      <td
                        v-if="value.sum_amount == null || value.max_price == null"
                        colspan="2"
                        class="text-center text-primary-3">
                        ไม่มีข้อมูลการรับซื้อ
                      </td>
                      <td v-else class="w-40 text-center">
                        {{ value.sum_amount }}
                      </td>
                      <td v-if="value.sum_amount != null && value.max_price != null" class="w-40 text-center">
                        {{ value.max_price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ก้านยาว -->
      <div id="durian3" class="tab-pane" role="tabpanel" aria-labelledby="durian3-tab">
        <div class="grid grid-cols-12 gap-6">
          <!-- หนามแดง -->
          <div class="col-span-12 lg:col-span-6-6 2xl:col-span-6">
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
                      <th class="text-center whitespace-nowrap">จำนวนที่ล้งรับซื้อ (kg)</th>
                      <th class="text-center whitespace-nowrap">ราคาที่ดีที่สุดที่ล้งรับซื้อ (บาท)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- ก้านยาว นามแดง 20-25 -->
                    <tr
                      v-for="(value, index) in bestPrice.slice(20, 25)"
                      :key="index"
                      class="cursor-pointer intro-x"
                      @click="onClickCell(value.gene_id, value.torn_id, value.grade_id, value.location_id)">
                      <td class="w-40 text-center">{{ printGrade(value.grade_id) }}</td>

                      <td
                        v-if="value.sum_amount == null || value.max_price == null"
                        colspan="2"
                        class="text-center text-primary-3">
                        ไม่มีข้อมูลการรับซื้อ
                      </td>
                      <td
                        v-show="value.sum_amount != null && value.max_price != null"
                        class="w-40 text-center">
                        {{ value.sum_amount }}
                      </td>
                      <td
                        v-show="value.sum_amount != null && value.max_price != null"
                        class="w-40 text-center">
                        {{ value.max_price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- หนามเขียว -->
          <div class="col-span-12 lg:col-span-6-6 2xl:col-span-6">
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
                      <th class="text-center whitespace-nowrap">จำนวนที่ล้งรับซื้อ (kg)</th>
                      <th class="text-center whitespace-nowrap">ราคาที่ดีที่สุดที่ล้งรับซื้อ (บาท)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- ก้านยาว นามเขียว 25-30 -->
                    <tr
                      v-for="(value, index) in bestPrice.slice(25, 30)"
                      :key="index"
                      class="cursor-pointer intro-x"
                      @click="onClickCell(value.gene_id, value.torn_id, value.grade_id, value.location_id)">
                      <td class="w-40 text-center">{{ printGrade(value.grade_id) }}</td>
                      <td
                        v-if="value.sum_amount == null || value.max_price == null"
                        colspan="2"
                        class="text-center text-primary-3">
                        ไม่มีข้อมูลการรับซื้อ
                      </td>
                      <td v-else class="w-40 text-center">
                        {{ value.sum_amount }}
                      </td>
                      <td v-if="value.sum_amount != null && value.max_price != null" class="w-40 text-center">
                        {{ value.max_price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- พวงมณี -->
      <div id="durian4" class="tab-pane" role="tabpanel" aria-labelledby="durian4-tab">
        <div class="grid grid-cols-12 gap-6">
          <!-- หนามแดง -->
          <div class="col-span-12 lg:col-span-6-6 2xl:col-span-6">
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
                      <th class="text-center whitespace-nowrap">จำนวนที่ล้งรับซื้อ (kg)</th>
                      <th class="text-center whitespace-nowrap">ราคาที่ดีที่สุดที่ล้งรับซื้อ (บาท)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- พวงมณี นามแดง 30-35 -->
                    <tr
                      v-for="(value, index) in bestPrice.slice(30, 35)"
                      :key="index"
                      class="cursor-pointer intro-x"
                      @click="onClickCell(value.gene_id, value.torn_id, value.grade_id, value.location_id)">
                      <td class="w-40 text-center">{{ printGrade(value.grade_id) }}</td>

                      <td
                        v-if="value.sum_amount == null || value.max_price == null"
                        colspan="2"
                        class="text-center text-primary-3">
                        ไม่มีข้อมูลการรับซื้อ
                      </td>
                      <td
                        v-show="value.sum_amount != null && value.max_price != null"
                        class="w-40 text-center">
                        {{ value.sum_amount }}
                      </td>
                      <td
                        v-show="value.sum_amount != null && value.max_price != null"
                        class="w-40 text-center">
                        {{ value.max_price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- หนามเขียว -->
          <div class="col-span-12 lg:col-span-6-6 2xl:col-span-6">
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
                      <th class="text-center whitespace-nowrap">จำนวนที่ล้งรับซื้อ (kg)</th>
                      <th class="text-center whitespace-nowrap">ราคาที่ดีที่สุดที่ล้งรับซื้อ (บาท)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- พวงมณี นามเขียว 35-40 -->
                    <tr
                      v-for="(value, index) in bestPrice.slice(35, 40)"
                      :key="index"
                      class="cursor-pointer intro-x"
                      @click="onClickCell(value.gene_id, value.torn_id, value.grade_id, value.location_id)">
                      <td class="w-40 text-center">{{ printGrade(value.grade_id) }}</td>
                      <td
                        v-if="value.sum_amount == null || value.max_price == null"
                        colspan="2"
                        class="text-center text-primary-3">
                        ไม่มีข้อมูลการรับซื้อ
                      </td>
                      <td v-else class="w-40 text-center">
                        {{ value.sum_amount }}
                      </td>
                      <td v-if="value.sum_amount != null && value.max_price != null" class="w-40 text-center">
                        {{ value.max_price }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Tab-durian-4 -->
    </div>
    <!-- END: Tab-Content -->
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
  computed: {},
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
    },

    printGrade(id) {
      let txt = ''
      if (id == 1) txt = 'AB'
      else if (id == 2) txt = 'C'
      else if (id == 3) txt = 'D'
      else if (id == 4) txt = 'ตกไซต์'
      else txt = 'ห้องเย็น'
      return txt
    }
  }
})
</script>