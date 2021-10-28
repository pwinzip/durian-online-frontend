<template>
  <div>
    <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
      <h2 class="mr-auto text-lg font-medium text-center">ราคาซื้อขายทุเรียนตลาดออนไลน์กลาง</h2>
    </div>
    <div>
      <h2 class="text-lg font-medium text-center">
        <span>ทุเรียนพันธุ์ {{ gene_txt }}</span>
      </h2>
      <h2 class="text-lg font-medium text-center">
        <span>ประเภท {{ torn_txt }}</span>
      </h2>
    </div>

    <div class="intro-y">
      <div class="w-full mb-8 overflow-hidden shadow-sm rounded-2xl">
        <div class="overflow-auto intro-y lg:overflow-visible">
          <table class="table mt-2 divide-y table-auto">
            <thead class="bg-theme-21 dark:bg-dark-3 dark:text-gray-200">
              <tr>
                <td>เกรด</td>
                <td>จำนวนที่ล้งรับซื้อ (kg)</td>
                <td>ราคาที่ล้งรับซื้อ (บาท)</td>
                <td>จำนวนที่ประมูลขาย</td>
              </tr>
            </thead>
            <tbody class="divide-y dark:bg-dark-5">
              <tr class="">
                <td rowspan="5">
                  <div>{{ grade_txt }}</div>
                </td>
              </tr>
              <tr v-show="offers.length == 0" class="text-center text-primary-3">
                <td colspan="3">ไม่มีข้อมูลรับซื้อ</td>
              </tr>
              <tr v-for="(offer, index) in offers" :key="index" class="text-gray-700 dark:text-gray-400">
                <td>{{ offer.val.sum_amount }}</td>
                <td>{{ offer.val.price }}</td>
                <td>
                  <input
                    type="number"
                    v-model="offer.name"
                    min="0"
                    :max="offer.val.sum_amount"
                    step="1000"
                    class="w-full form-control" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-show="offers.length > 0" @click="onclickBid" class="flex w-full mt-4 sm:w-auto sm:mt-0">
        <button class="mx-auto shadow-md btn btn-primary">ประมูลขายทุเรียน</button>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/services/BackendService'

export default {
  props: {
    gene_id: String,
    torn_id: String,
    grade_id: String,
    location_id: String
  },
  data() {
    return {
      offers: [],
      gene_txt: '',
      torn_txt: '',
      grade_txt: '',
      location_txt: ''
    }
  },
  mounted() {
    if (!this.gene_id && !this.grade_id && !this.torn_id && !this.location_id) {
      this.$router.go(-1)
    } else {
      if (this.gene_id == 1) this.gene_txt = 'หมอนทอง'
      else if (this.gene_id == 2) this.gene_txt = 'ชะนี'
      else if (this.gene_id == 3) this.gene_txt = 'ก้านยาว'
      else if (this.gene_id == 4) this.gene_txt = 'พวงมณี'

      if (this.torn_id == 1) this.torn_txt = 'หนามแดง'
      else if (this.torn_id == 2) this.torn_txt = 'หนามเขียว'

      if (this.grade_id == 1) this.grade_txt = 'เกรด AB'
      else if (this.grade_id == 2) this.grade_txt = 'เกรด C'
      else if (this.grade_id == 3) this.grade_txt = 'เกรด D'
      else if (this.grade_id == 4) this.grade_txt = 'ตกไซต์'
      else if (this.grade_id == 5) this.grade_txt = 'ห้องเย็น'

      http
        .post('getalloffer', {
          gene_id: this.gene_id,
          torn_id: this.torn_id,
          grade_id: this.grade_id,
          location_id: this.location_id
        })
        .then(res => {
          let responseOffer = res.data
          responseOffer.forEach(el => {
            this.offers.push({ name: '', val: el })
          })
          console.log(this.offers)
        })
    }
  },
  methods: {
    onclickBid() {
      console.log(this.offers)
      let insertsell = []
      this.offers.forEach(el => {
        if (el.name != '') {
          var data = {
            gene_id: el.val.gene_id,
            torn_id: el.val.torn_id,
            grade_id: el.val.grade_id,
            location_id: el.val.location_id,
            bid_price: el.val.price,
            amount: el.val.sum_amount,
            bid_amount: el.name
          }
          insertsell.push(data)
        }
      })
      let submitdata = {
        userid: JSON.parse(localStorage.getItem('user'))['user'].id,
        selldata: insertsell
      }

      http.post('bid-sell', submitdata).then(res => {
        console.log(res.data)
        this.offers.forEach(el => {
          el.name = ''
        })
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
          title: 'ประมูลการขายเรียบร้อย'
        })
        // this.$router.go(-1)
      })
    }
  }
}
</script>