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
                  <th class="text-center whitespace-nowrap">จำนวนทุเรียนในตลาด</th>
                  <th class="text-center whitespace-nowrap">ราคาซื้อ</th>
                  <th class="text-center whitespace-nowrap">จำนวนทุเรียนที่ต้องการซื้อ</th>
                  <th class="text-center whitespace-nowrap">ราคาที่ต้องการซื้อ</th>
                </tr>
              </thead>
              <tbody>
                <tr class="intro-x">
                  <td class="w-40 text-center">AB</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_1_red.offeramount[0]" class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_red.offerprice[0]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">C</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_1_red.offeramount[1]" class="w-full form-control" />
                  </td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_1_red.offerprice[1]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="text-center intro-x">
                  <td class="w-40">D</td>
                  <td class="w-40">10,000</td>
                  <td class="w-40">103</td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_1_red.offeramount[2]" class="w-full form-control" />
                  </td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_1_red.offerprice[2]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">ตกไซต์</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_red.offeramount[3]" class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_red.offerprice[3]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">ห้องเย็น</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_red.offerprice[4]" class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_red.offerprice[4]" class="w-full form-control" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          class="flex items-center justify-between p-4 mt-5 mb-5 text-sm font-semibold text-white rounded-lg shadow-md  bg-theme-9 focus:outline-none">
          หนามเขียว
        </div>
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
          <div class="overflow-auto intro-y lg:overflow-visible">
            <table class="table mt-2 table-report">
              <thead class="">
                <tr>
                  <th class="text-center whitespace-nowrap">เกรด</th>
                  <th class="text-center whitespace-nowrap">จำนวนทุเรียนในตลาด</th>
                  <th class="text-center whitespace-nowrap">ราคาซื้อ</th>
                  <th class="text-center whitespace-nowrap">จำนวนทุเรียนที่ต้องการซื้อ</th>
                  <th class="text-center whitespace-nowrap">ราคาที่ต้องการซื้อ</th>
                </tr>
              </thead>
              <tbody>
                <tr class="intro-x">
                  <td class="w-40 text-center">AB</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40 text-center">
                    <input
                      type="number"
                      v-model="durian_1_green.offeramount[0]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_green.offerprice[0]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">C</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input
                      type="number"
                      v-model="durian_1_green.offeramount[1]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_green.offerprice[1]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">D</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input
                      type="number"
                      v-model="durian_1_green.offeramount[2]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_green.offerprice[2]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">ตกไซต์</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input
                      type="number"
                      v-model="durian_1_green.offeramount[3]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_green.offerprice[3]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">ห้องเย็น</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input
                      type="number"
                      v-model="durian_1_green.offeramount[4]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_1_green.offerprice[4]" class="w-full form-control" />
                  </td>
                </tr>
              </tbody>
            </table>
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
        <div
          class="flex items-center justify-between p-4 mt-5 text-sm font-semibold text-white rounded-lg shadow-md  bg-theme-6 focus:outline-none">
          หนามแดง
        </div>
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
          <div class="overflow-auto intro-y lg:overflow-visible">
            <table class="table mt-2 table-report">
              <thead class="">
                <tr>
                  <th class="text-center whitespace-nowrap">เกรด</th>
                  <th class="text-center whitespace-nowrap">จำนวนทุเรียนในตลาด</th>
                  <th class="text-center whitespace-nowrap">ราคาซื้อ</th>
                  <th class="text-center whitespace-nowrap">จำนวนทุเรียนที่ต้องการซื้อ</th>
                  <th class="text-center whitespace-nowrap">ราคาที่ต้องการซื้อ</th>
                </tr>
              </thead>
              <tbody>
                <tr class="intro-x">
                  <td class="w-40 text-center">AB</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_2_red.offeramount[0]" class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_2_red.offerprice[0]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">C</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_2_red.offeramount[1]" class="w-full form-control" />
                  </td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_2_red.offerprice[1]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="text-center intro-x">
                  <td class="w-40">D</td>
                  <td class="w-40">10,000</td>
                  <td class="w-40">103</td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_2_red.offeramount[2]" class="w-full form-control" />
                  </td>
                  <td class="w-40 text-center">
                    <input type="number" v-model="durian_2_red.offerprice[2]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">ตกไซต์</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input type="number" v-model="durian_2_red.offeramount[3]" class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_2_red.offerprice[3]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">ห้องเย็น</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input type="number" v-model="durian_2_red.offeramount[4]" class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_2_red.offerprice[4]" class="w-full form-control" />
                  </td>
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
              <thead class="">
                <tr>
                  <th class="text-center whitespace-nowrap">เกรด</th>
                  <th class="text-center whitespace-nowrap">จำนวนทุเรียนในตลาด</th>
                  <th class="text-center whitespace-nowrap">ราคาซื้อ</th>
                  <th class="text-center whitespace-nowrap">จำนวนทุเรียนที่ต้องการซื้อ</th>
                  <th class="text-center whitespace-nowrap">ราคาที่ต้องการซื้อ</th>
                </tr>
              </thead>
              <tbody>
                <tr class="intro-x">
                  <td class="w-40 text-center">AB</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40 text-center">
                    <input
                      type="number"
                      v-model="durian_2_green.offeramount[0]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_2_green.offerprice[0]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">C</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input
                      type="number"
                      v-model="durian_2_green.offeramount[1]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_2_green.offerprice[1]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">D</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input
                      type="number"
                      v-model="durian_2_green.offeramount[2]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_2_green.offerprice[2]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">ตกไซต์</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input
                      type="number"
                      v-model="durian_2_green.offeramount[3]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input type="number" v-model="durian_2_green.offerprice[3]" class="w-full form-control" />
                  </td>
                </tr>
                <tr class="intro-x">
                  <td class="w-40 text-center">ห้องเย็น</td>
                  <td class="w-40 text-center">10,000</td>
                  <td class="w-40 text-center">103</td>
                  <td class="w-40">
                    <input
                      type="number"
                      v-model="durian_2_green.offeramount[4]"
                      class="w-full form-control" />
                  </td>
                  <td class="w-40">
                    <input
                      type="number"
                      pattern="[0-9]+([\.,][0-9]+)?"
                      v-model="durian_2_green.offerprice[4]"
                      class="w-full form-control" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
          <button @click="onclickOfferBuy(2)" class="mx-auto shadow-md btn btn-primary">
            รับซื้อทุเรียนชะนี
          </button>
        </div>
      </div>
      <div id="durian3" class="tab-pane" role="tabpanel" aria-labelledby="durian3-tab">ก้าวยาว</div>
      <div id="durian4" class="tab-pane" role="tabpanel" aria-labelledby="durian4-tab">พวงมณี</div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <!-- <div class="p-5 mt-5 intro-y box">
      <div class="flex flex-col pb-3 sm:flex-row sm:items-end xl:items-start">
        <div class="items-center sm:flex sm:mr-4">
          <h2 class="mr-auto text-lg font-medium">ประเภทหนามแดง</h2>
        </div>
      </div>
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
            <thead class="bg-theme-1">
              <tr
                class="font-semibold tracking-wide text-left text-gray-200 uppercase dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th class="px-4 py-3 text-center">พันธุ์ทุเรียน</th>
                <th class="px-4 py-3 text-center">จำนวนที่มีในตลาด (กิโลกรัม)</th>
                <th class="px-4 py-3 text-center">ราคาซื้อ (ต่อกิโลกรัม)</th>
                <th class="px-4 py-3 text-center">จำนวนที่รับซื้อ (กิโลกรัม)</th>
                <th class="px-4 py-3 text-center">ราคาที่รับซื้อ (ต่อกิโลกรัม)</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div><p class="font-semibold">หมอนทอง</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">10,000</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">102</p></div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_amount_greendurian_1" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_price_greendurian_1" />
                  </div>
                </td>
              </tr>
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div><p class="font-semibold">ชะนี</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">10,000</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">102</p></div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_amount_greendurian_2" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_price_greendurian_2" />
                  </div>
                </td>
              </tr>
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div><p class="font-semibold">ก้าวยาว</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">10,000</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">102</p></div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_amount_greendurian_3" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_price_greendurian_3" />
                  </div>
                </td>
              </tr>
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div><p class="font-semibold">พวงมณี</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">10,000</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">102</p></div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_amount_greendurian_4" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_price_greendurian_4" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> -->
    <!-- END: HTML Table Data -->
    <!-- BEGIN: HTML Table Data -->
    <!-- <div class="p-5 mt-5 intro-y box">
      <div class="flex flex-col pb-3 sm:flex-row sm:items-end xl:items-start">
        <div class="items-center sm:flex sm:mr-4">
          <h2 class="mr-auto text-lg font-medium">ประเภทหนามเขียว</h2>
        </div>
      </div>
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
            <thead class="bg-theme-1">
              <tr
                class="font-semibold tracking-wide text-left text-gray-200 uppercase dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th class="px-4 py-3 text-center">พันธุ์ทุเรียน</th>
                <th class="px-4 py-3 text-center">จำนวนที่มีในตลาด (กิโลกรัม)</th>
                <th class="px-4 py-3 text-center">ราคาซื้อ (ต่อกิโลกรัม)</th>
                <th class="px-4 py-3 text-center">จำนวนที่รับซื้อ (กิโลกรัม)</th>
                <th class="px-4 py-3 text-center">ราคาที่รับซื้อ (ต่อกิโลกรัม)</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div><p class="font-semibold">หมอนทอง</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">10,000</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">102</p></div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_amount_reddurian_1" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_price_reddurian_1" />
                  </div>
                </td>
              </tr>
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div><p class="font-semibold">ชะนี</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">10,000</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">102</p></div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_amount_reddurian_2" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_price_reddurian_2" />
                  </div>
                </td>
              </tr>
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div><p class="font-semibold">ก้าวยาว</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">10,000</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">102</p></div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_amount_reddurian_3" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_price_reddurian_3" />
                  </div>
                </td>
              </tr>
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div><p class="font-semibold">พวงมณี</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">10,000</p></div>
                </td>
                <td class="px-4 py-3 text-center">
                  <div><p class="">102</p></div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_amount_reddurian_4" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div>
                    <input type="text" class="w-full form-control" name="buy_price_reddurian_4" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> -->
    <!-- END: HTML Table Data -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import http from '@/services/BackendService'

export default defineComponent({
  mounted() {},

  data() {
    return {
      // หมอนทอง
      durian_1_red: {
        grade: ['AB', 'C', 'D', 'ตกไซต์', 'ห้องเย็น'],
        amount: ['', '', '', '', ''],
        price: ['', '', '', '', ''],
        offeramount: ['', '', '', '', ''],
        offerprice: ['', '', '', '', '']
      },
      // หมอนทอง
      durian_1_green: {
        grade: ['AB', 'C', 'D', 'ตกไซต์', 'ห้องเย็น'],
        amount: ['', '', '', '', ''],
        price: ['', '', '', '', ''],
        offeramount: ['', '', '', '', ''],
        offerprice: ['', '', '', '', '']
      },
      // ชะนี
      durian_2_red: {
        grade: ['AB', 'C', 'D', 'ตกไซต์', 'ห้องเย็น'],
        amount: ['', '', '', '', ''],
        price: ['', '', '', '', ''],
        offeramount: ['', '', '', '', ''],
        offerprice: ['', '', '', '', '']
      },
      // ชะนี
      durian_2_green: {
        grade: ['AB', 'C', 'D', 'ตกไซต์', 'ห้องเย็น'],
        amount: ['', '', '', '', ''],
        price: ['', '', '', '', ''],
        offeramount: ['', '', '', '', ''],
        offerprice: ['', '', '', '', '']
      },
      // ก้านยาว
      durian_3_red: {
        grade: ['AB', 'C', 'D', 'ตกไซต์', 'ห้องเย็น'],
        amount: ['', '', '', '', ''],
        price: ['', '', '', '', ''],
        offeramount: ['', '', '', '', ''],
        offerprice: ['', '', '', '', '']
      },
      // ก้านยาว
      durian_3_green: {
        grade: ['AB', 'C', 'D', 'ตกไซต์', 'ห้องเย็น'],
        amount: ['', '', '', '', ''],
        price: ['', '', '', '', ''],
        offeramount: ['', '', '', '', ''],
        offerprice: ['', '', '', '', '']
      },
      // พวงมณี
      durian_4_red: {
        grade: ['AB', 'C', 'D', 'ตกไซต์', 'ห้องเย็น'],
        amount: ['', '', '', '', ''],
        price: ['', '', '', '', ''],
        offeramount: ['', '', '', '', ''],
        offerprice: ['', '', '', '', '']
      },
      // พวงมณี
      durian_4_green: {
        grade: ['AB', 'C', 'D', 'ตกไซต์', 'ห้องเย็น'],
        amount: ['', '', '', '', ''],
        price: ['', '', '', '', ''],
        offeramount: ['', '', '', '', ''],
        offerprice: ['', '', '', '', '']
      }
    }
  },
  methods: {
    onclickOfferBuy(param) {
      let insertdurian = []
      // Red, AB
      for (let i = 0; i < 5; i++) {
        if (this.durian_1_red.offeramount[i] != '' && this.durian_1_red.offerprice[i] != '') {
          insertdurian.push({
            gene: 1,
            torn: 1,
            grade: i + 1,
            offeramount: this.durian_1_red.offeramount[i],
            offerprice: this.durian_1_red.offerprice[i],
            location: 1
          })
        }
        if (this.durian_1_green.offeramount[i] != '' && this.durian_1_green.offerprice[i] != '') {
          insertdurian.push({
            gene: 1,
            torn: 2,
            grade: i + 1,
            offeramount: this.durian_1_green.offeramount[i],
            offerprice: this.durian_1_green.offerprice[i],
            location: 1
          })
        }

        if (this.durian_2_red.offeramount[i] != '' && this.durian_2_red.offerprice[i] != '') {
          insertdurian.push({
            gene: 2,
            torn: 1,
            grade: i + 1,
            offeramount: this.durian_2_red.offeramount[i],
            offerprice: this.durian_2_red.offerprice[i],
            location: 1
          })
        }
        if (this.durian_2_green.offeramount[i] != '' && this.durian_2_green.offerprice[i] != '') {
          insertdurian.push({
            gene: 2,
            torn: 2,
            grade: i + 1,
            offeramount: this.durian_2_green.offeramount[i],
            offerprice: this.durian_2_green.offerprice[i],
            location: 1
          })
        }

        if (this.durian_3_red.offeramount[i] != '' && this.durian_3_red.offerprice[i] != '') {
          insertdurian.push({
            gene: 3,
            torn: 1,
            grade: i + 1,
            offeramount: this.durian_3_red.offeramount[i],
            offerprice: this.durian_3_red.offerprice[i],
            location: 1
          })
        }
        if (this.durian_3_green.offeramount[i] != '' && this.durian_3_green.offerprice[i] != '') {
          insertdurian.push({
            gene: 3,
            torn: 2,
            grade: i + 1,
            offeramount: this.durian_3_green.offeramount[i],
            offerprice: this.durian_3_green.offerprice[i],
            location: 1
          })
        }

        if (this.durian_4_red.offeramount[i] != '' && this.durian_4_red.offerprice[i] != '') {
          insertdurian.push({
            gene: 4,
            torn: 1,
            grade: i + 1,
            offeramount: this.durian_4_red.offeramount[i],
            offerprice: this.durian_4_red.offerprice[i],
            location: 1
          })
        }
        if (this.durian_4_green.offeramount[i] != '' && this.durian_4_green.offerprice[i] != '') {
          insertdurian.push({
            gene: 4,
            torn: 2,
            grade: i + 1,
            offeramount: this.durian_4_green.offeramount[i],
            offerprice: this.durian_4_green.offerprice[i],
            location: 1
          })
        }
      }

      let submitdata = {
        userid: JSON.parse(localStorage.getItem('user'))['user'].id,
        buydata: insertdurian
      }

      console.log(param)
      console.log(JSON.parse(localStorage.getItem('user'))['user'].id)
      console.log(submitdata)
      http.post('offer-buy', submitdata).then(res => {
        console.log(res.data)

        // redirect to sumary of own offer
      })
    }
  }
})
</script>