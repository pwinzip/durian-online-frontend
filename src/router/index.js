import { createRouter, createWebHistory } from "vue-router";

// Import Frontend layouts
import FrontendLayout from "@/layouts/Frontend.vue";

// Import Backend Layout
import SideMenuAdmin from "@/layouts/side-menu/SideAdmin.vue";
import SideMenuBuy from "@/layouts/side-menu/SideBuy.vue";
import SideMenuSell from "@/layouts/side-menu/SideSell.vue";

// Import views
// Frontend
import ErrorPage from "@/views/ErrorPage.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

// Backend
import AdminHome from "@/views/backend/AdminHomePage.vue";
import BuyOffer from "@/views/buyer/BuyOfferPage.vue";
import BuyOfferStatus from "@/views/buyer/BuyOfferStatus.vue";

import SellBid from "@/views/seller/SellBidPage.vue";
import SellBidDetail from "@/views/seller/SellBidDetail.vue";
import SellBidStatus from "@/views/seller/SellBidStatus.vue";

const routes = [
  // Frontend Route
  {
    path: "/",
    component: FrontendLayout,
    children: [
      {
        path: "",
        name: "Main",
        component: Home,
      },
    ],
    meta: {
      title: "หน้าแรก",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "เข้าสู่ระบบ",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "ลงทะเบียนผู้ใช้งาน",
    },
  },
  // Admin Route
  {
    path: "/admin",
    component: SideMenuAdmin,
    children: [
      {
        path: "",
        name: "admin-home",
        component: AdminHome,
        meta: {
          title: "ผู้ดูแลระบบ",
        },
      },
      {
        path: "manage",
        name: "admin-manage",
        component: AdminHome,
        meta: {
          title: "จัดการข้อมูล",
        },
      },
      {
        path: "approve",
        name: "admin-approve-transfer",
        component: AdminHome,
        meta: {
          title: "ตรวจสอบการโอนเงิน",
        },
      },
    ],
  },
  // Buy Route
  {
    path: "/buyer",
    component: SideMenuBuy,
    children: [
      // {
      //   path: "",
      //   name: "buy-home",
      //   component: BuyOffer,
      //   meta: {
      //     title: "ผู้ซื้อ",
      //   },
      // },
      // {
      //   path: "durian-1",
      //   name: "buy-durian-1",
      //   component: BuyOffer,
      //   meta: {
      //     title: "รับซื้อหมอนทอง",
      //   },
      // },
      {
        path: "",
        name: "buy-offer",
        component: BuyOffer,
        meta: {
          title: "รับซื้อทุเรียน",
        },
      },
      {
        path: "offerstatus",
        name: "buy-offer-status",
        component: BuyOfferStatus, // change view
        meta: {
          title: "สถานะรับซื้อทุเรียน",
        },
      },
      // {
      //   path: "bid",
      //   name: "buy-bid",
      //   component: BuyOffer, // change page
      //   meta: {
      //     title: "ประมูลซื้อทุเรียน",
      //   },
      // },
      {
        path: "transfer",
        name: "buy-transfer",
        component: BuyOffer, // chang view
        meta: {
          title: "โอนเงิน",
        },
      },
      {
        path: "offeryala",
        name: "buy-offer-yala",
        component: BuyOffer, // chang view
        meta: {
          title: "รับซื้อทุเรียนยะลา",
        },
      },
      {
        path: "offeryalastatus",
        name: "buy-offer-yala-status",
        component: BuyOffer, // chang view
        meta: {
          title: "สถานะรับซื้อทุเรียนยะลา",
        },
      },
    ],
  },
  // Sell Route
  {
    path: "/seller",
    component: SideMenuSell,
    children: [
      // {
      //   path: "",
      //   name: "sell-home",
      //   component: SellBid,
      //   meta: {
      //     title: "ผู้ขาย",
      //   },
      // },
      {
        path: "",
        name: "sell-bid",
        component: SellBid,
        meta: {
          title: "ประมูลขายทุเรียน",
        },
      },
      {
        path: "biddetail",
        name: "sell-bid-detail",
        component: SellBidDetail,
        props: true,
        meta: {
          title: "รายละเอียดประมูลขายทุเรียน",
        },
      },
      {
        path: "bidstatus",
        name: "sell-bid-status",
        component: SellBidStatus,
        meta: {
          title: "สถานะประมูลขายทุเรียน",
        },
      },
      {
        path: "transfer",
        name: "sell-transfer",
        component: SellBid,
        meta: {
          title: "โอนเงิน",
        },
      },
    ],
  },

  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
    meta: {
      title: "ไม่พบหน้านี้",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    meta: {
      title: "ไม่พบหน้านี้",
    },
  },
  //   {
  //     path: '/',
  //     name: 'Home',
  //     component: Home
  //   },
  //   {
  //     path: '/about',
  //     name: 'About',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
