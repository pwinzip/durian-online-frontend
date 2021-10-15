import { createRouter, createWebHistory } from "vue-router";

// Import layouts
import FrontendLayout from "@/layouts/Frontend.vue";

// Import views
import ErrorPage from "@/views/ErrorPage.vue";
// Frontend
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";

// Backend

const routes = [
  {
    path: "/",
    name: "Home",
    component: FrontendLayout,
    children: [
      {
        path: "",
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
