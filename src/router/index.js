import { createRouter, createWebHistory } from "vue-router";

// Import layouts
import FrontendLayout from "@/layouts/Frontend.vue";

// Import views
// Frontend
import Home from "@/views/Home.vue";

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
