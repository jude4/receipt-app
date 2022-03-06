import { createWebHistory, createRouter } from "vue-router";
import Home from "../Pages/Home.vue";
import Receipt from "../Pages/Receipt.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/receipt/:id", name: "receipt", component: Receipt },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
