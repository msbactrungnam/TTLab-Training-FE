import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Homepage from "../pages/HomePage.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import CartPage from "../pages/CartPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Homepage },
  { path: "/product", component: ProductDetail },
  { path: "/category", component: CategoryPage },
  { path: "/cart", component: CartPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;