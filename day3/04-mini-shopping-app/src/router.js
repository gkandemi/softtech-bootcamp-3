import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/Home"),
  },
  {
    name: "Cart",
    path: "/cart",
    component: () => import("@/views/Cart"),
  },
  {
    name: "NewProduct",
    path: "/new-product",
    component: () => import("@/views/Admin/NewProduct"),
  },
  {
    name: "ProductList",
    path: "/product-list",
    component: () => import("@/views/Admin/ProductList"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
