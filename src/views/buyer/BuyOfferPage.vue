<template>
  <div>
    <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
      <h2 class="mr-auto text-lg font-medium text-center">ราคาซื้อขายทุเรียนตลาดออนไลน์กลาง</h2>
      <!-- <div class="flex w-full mt-4 mr-2 sm:w-auto sm:mt-0">
        <button class="shadow-md btn btn-primary">ดูทุเรียนยะลา</button>
      </div> -->
      <!-- <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
        <button @click="onclickOfferBuy" class="mr-2 shadow-md btn btn-primary">เสนอซื้อทุเรียน</button>
      </div> -->
    </div>

    <div class="px-5 pt-2 mt-4 intro-y box">
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
        <div class="flex w-full mt-2 mb-2 ml-4 mr-2 sm:w-auto sm:mt-0">
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
                      <th class="text-center">จำนวนทุเรียนในตลาด</th>
                      <th class="text-center">ราคาซื้อ</th>
                      <th class="text-center">จำนวนทุเรียนที่ต้องการซื้อ</th>
                      <th class="text-center">ราคาที่ต้องการซื้อ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(offer, index) in bestPrice.slice(0, 5)" :key="index" class="intro-x">
                      <td class="w-40 text-center">{{ printGrade(offer.val.grade_id) }}</td>
                      <td
                        class="text-center text-primary-3"
                        v-if="!offer.val.sum_amount && !offer.val.max_price"
                        colspan="2">
                        ไม่มีข้อมูลการรับซื้อทุเรียน
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.sum_amount">
                        {{ offer.val.sum_amount }}
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.max_price">{{ offer.val.max_price }}</td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.amount" class="w-full form-control" />
                      </td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.price" class="w-full form-control" />
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
                  <thead class="">
                    <tr>
                      <th class="text-center">เกรด</th>
                      <th class="text-center">จำนวนทุเรียนในตลาด</th>
                      <th class="text-center">ราคาซื้อ</th>
                      <th class="text-center">จำนวนทุเรียนที่ต้องการซื้อ</th>
                      <th class="text-center">ราคาที่ต้องการซื้อ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(offer, index) in bestPrice.slice(5, 10)" :key="index" class="intro-x">
                      <td class="w-40 text-center">{{ printGrade(offer.val.grade_id) }}</td>
                      <td
                        class="text-center text-primary-3"
                        v-if="!offer.val.sum_amount && !offer.val.max_price"
                        colspan="2">
                        ไม่มีข้อมูลการรับซื้อทุเรียน
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.sum_amount">
                        {{ offer.val.sum_amount }}
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.max_price">{{ offer.val.max_price }}</td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.amount" class="w-full form-control" />
                      </td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.price" class="w-full form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
          <button @click="onclickOfferBuy(1)" class="mx-auto shadow-md btn btn-primary">
            รับซื้อทุเรียนหมอนทอง
          </button>
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
                      <th class="text-center">เกรด</th>
                      <th class="text-center">จำนวนทุเรียนในตลาด</th>
                      <th class="text-center">ราคาซื้อ</th>
                      <th class="text-center">จำนวนทุเรียนที่ต้องการซื้อ</th>
                      <th class="text-center">ราคาที่ต้องการซื้อ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(offer, index) in bestPrice.slice(10, 15)" :key="index" class="intro-x">
                      <td class="w-40 text-center">{{ printGrade(offer.val.grade_id) }}</td>
                      <td
                        class="text-center text-primary-3"
                        v-if="!offer.val.sum_amount && !offer.val.max_price"
                        colspan="2">
                        ไม่มีข้อมูลการรับซื้อทุเรียน
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.sum_amount">
                        {{ offer.val.sum_amount }}
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.max_price">{{ offer.val.max_price }}</td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.amount" class="w-full form-control" />
                      </td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.price" class="w-full form-control" />
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
                  <thead class="">
                    <tr>
                      <th class="text-center">เกรด</th>
                      <th class="text-center">จำนวนทุเรียนในตลาด</th>
                      <th class="text-center">ราคาซื้อ</th>
                      <th class="text-center">จำนวนทุเรียนที่ต้องการซื้อ</th>
                      <th class="text-center">ราคาที่ต้องการซื้อ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(offer, index) in bestPrice.slice(15, 20)" :key="index" class="intro-x">
                      <td class="w-40 text-center">{{ printGrade(offer.val.grade_id) }}</td>
                      <td
                        class="text-center text-primary-3"
                        v-if="!offer.val.sum_amount && !offer.val.max_price"
                        colspan="2">
                        ไม่มีข้อมูลการรับซื้อทุเรียน
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.sum_amount">
                        {{ offer.val.sum_amount }}
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.max_price">{{ offer.val.max_price }}</td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.amount" class="w-full form-control" />
                      </td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.price" class="w-full form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
          <button @click="onclickOfferBuy(2)" class="mx-auto shadow-md btn btn-primary">
            รับซื้อทุเรียนชะนี
          </button>
        </div>
      </div>

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
                      <th class="text-center">เกรด</th>
                      <th class="text-center">จำนวนทุเรียนในตลาด</th>
                      <th class="text-center">ราคาซื้อ</th>
                      <th class="text-center">จำนวนทุเรียนที่ต้องการซื้อ</th>
                      <th class="text-center">ราคาที่ต้องการซื้อ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(offer, index) in bestPrice.slice(20, 25)" :key="index" class="intro-x">
                      <td class="w-40 text-center">{{ printGrade(offer.val.grade_id) }}</td>
                      <td
                        class="text-center text-primary-3"
                        v-if="!offer.val.sum_amount && !offer.val.max_price"
                        colspan="2">
                        ไม่มีข้อมูลการรับซื้อทุเรียน
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.sum_amount">
                        {{ offer.val.sum_amount }}
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.max_price">{{ offer.val.max_price }}</td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.amount" class="w-full form-control" />
                      </td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.price" class="w-full form-control" />
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
                  <thead class="">
                    <tr>
                      <th class="text-center">เกรด</th>
                      <th class="text-center">จำนวนทุเรียนในตลาด</th>
                      <th class="text-center">ราคาซื้อ</th>
                      <th class="text-center">จำนวนทุเรียนที่ต้องการซื้อ</th>
                      <th class="text-center">ราคาที่ต้องการซื้อ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(offer, index) in bestPrice.slice(25, 30)" :key="index" class="intro-x">
                      <td class="w-40 text-center">{{ printGrade(offer.val.grade_id) }}</td>
                      <td
                        class="text-center text-primary-3"
                        v-if="!offer.val.sum_amount && !offer.val.max_price"
                        colspan="2">
                        ไม่มีข้อมูลการรับซื้อทุเรียน
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.sum_amount">
                        {{ offer.val.sum_amount }}
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.max_price">{{ offer.val.max_price }}</td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.amount" class="w-full form-control" />
                      </td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.price" class="w-full form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
          <button @click="onclickOfferBuy(3)" class="mx-auto shadow-md btn btn-primary">
            รับซื้อทุเรียนก้านยาว
          </button>
        </div>
      </div>
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
                      <th class="text-center">เกรด</th>
                      <th class="text-center">จำนวนทุเรียนในตลาด</th>
                      <th class="text-center">ราคาซื้อ</th>
                      <th class="text-center">จำนวนทุเรียนที่ต้องการซื้อ</th>
                      <th class="text-center">ราคาที่ต้องการซื้อ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(offer, index) in bestPrice.slice(30, 35)" :key="index" class="intro-x">
                      <td class="w-40 text-center">{{ printGrade(offer.val.grade_id) }}</td>
                      <td
                        class="text-center text-primary-3"
                        v-if="!offer.val.sum_amount && !offer.val.max_price"
                        colspan="2">
                        ไม่มีข้อมูลการรับซื้อทุเรียน
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.sum_amount">
                        {{ offer.val.sum_amount }}
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.max_price">{{ offer.val.max_price }}</td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.amount" class="w-full form-control" />
                      </td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.price" class="w-full form-control" />
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
                  <thead class="">
                    <tr>
                      <th class="text-center">เกรด</th>
                      <th class="text-center">จำนวนทุเรียนในตลาด</th>
                      <th class="text-center">ราคาซื้อ</th>
                      <th class="text-center">จำนวนทุเรียนที่ต้องการซื้อ</th>
                      <th class="text-center">ราคาที่ต้องการซื้อ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(offer, index) in bestPrice.slice(35, 40)" :key="index" class="intro-x">
                      <td class="w-40 text-center">{{ printGrade(offer.val.grade_id) }}</td>
                      <td
                        class="text-center text-primary-3"
                        v-if="!offer.val.sum_amount && !offer.val.max_price"
                        colspan="2">
                        ไม่มีข้อมูลการรับซื้อทุเรียน
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.sum_amount">
                        {{ offer.val.sum_amount }}
                      </td>
                      <td class="w-40 text-center" v-if="offer.val.max_price">{{ offer.val.max_price }}</td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.amount" class="w-full form-control" />
                      </td>
                      <td class="w-40 text-center">
                        <input type="number" v-model="offer.price" class="w-full form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
          <button @click="onclickOfferBuy(4)" class="mx-auto shadow-md btn btn-primary">
            รับซื้อทุเรียนพวงมณี
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import http from '@/services/BackendService'

export default defineComponent({
  mounted() {
    http
      .get('bestofferprice/1') // 1 get normal location
      .then(res => {
        let bestPriceResponse = res.data
        bestPriceResponse.forEach(el => {
          this.bestPrice.push({
            amount: '',
            price: '',
            val: el
          })
        })
        console.log(this.bestPrice)
      })
      .catch(error => {
        console.log(error)
      })
  },

  data() {
    return {
      bestPrice: []
    }
  },
  methods: {
    printGrade(id) {
      let txt = ''
      if (id == 1) txt = 'AB'
      else if (id == 2) txt = 'C'
      else if (id == 3) txt = 'D'
      else if (id == 4) txt = 'ตกไซต์'
      else txt = 'ห้องเย็น'
      return txt
    },
    onclickOfferBuy(param) {
      let insertdurian = []
      if (param == 1) {
        this.bestPrice.slice(0, 10).forEach(el => {
          if (el.amount != '' && el.price != '') {
            insertdurian.push({
              gene: el.val.gene_id,
              torn: el.val.torn_id,
              grade: el.val.grade_id,
              location: el.val.location_id,
              offeramount: el.amount,
              offerprice: el.price
            })
          }
        })
      } else if (param == 2) {
        this.bestPrice.slice(10, 20).forEach(el => {
          if (el.amount != '' && el.price != '') {
            insertdurian.push({
              gene: el.val.gene_id,
              torn: el.val.torn_id,
              grade: el.val.grade_id,
              location: el.val.location_id,
              offeramount: el.amount,
              offerprice: el.price
            })
          }
        })
      } else if (param == 3) {
        this.bestPrice.slice(20, 30).forEach(el => {
          if (el.amount != '' && el.price != '') {
            insertdurian.push({
              gene: el.val.gene_id,
              torn: el.val.torn_id,
              grade: el.val.grade_id,
              location: el.val.location_id,
              offeramount: el.amount,
              offerprice: el.price
            })
          }
        })
      } else if (param == 4) {
        this.bestPrice.slice(30, 40).forEach(el => {
          if (el.amount != '' && el.price != '') {
            insertdurian.push({
              gene: el.val.gene_id,
              torn: el.val.torn_id,
              grade: el.val.grade_id,
              location: el.val.location_id,
              offeramount: el.amount,
              offerprice: el.price
            })
          }
        })
      }

      let submitdata = {
        userid: JSON.parse(localStorage.getItem('user'))['user'].id,
        buydata: insertdurian
      }

      http.post('offer-buy', submitdata).then(res => {
        console.log(res.data)
        // this.bestPrice.forEach(el => {
        //   el.amount = ''
        //   el.price = ''
        // })
        // notify something
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'กำหนดราคารับซื้อเรียบร้อย'
        })

        this.$forceUpdate()

        // redirect to sumary of own offer
      })
    }
  }
})
</script>