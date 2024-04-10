import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Homepage from "../pages/HomePage.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import CategoryPage from "../pages/CategoryPage.vue";
import CartPage from "../pages/CartPage.vue";
import Login from "../pages/Login.vue"
import ProductsManager from "../pages/ProductsManager.vue"

const routes: Array<RouteRecordRaw> = [
  { path: "/login", component: Login },
  { path: "/", component: Homepage },
  { path: "/product", component: ProductDetail },
  { path: "/category", component: CategoryPage },
  { path: "/cart", component: CartPage },
  { path: "/products-manager", component: ProductsManager },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;