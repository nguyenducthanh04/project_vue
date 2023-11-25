import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About1 from "../components/About1.vue";
import callapi from "../components/callapi.vue";
import test from "../components/test.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about1",
    name: "about1",
    component: About1,
  },
  {
    path: "/callapi",
    name: "callapi",
    component: callapi,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/websites",
    name: "website.home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/websites/home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
