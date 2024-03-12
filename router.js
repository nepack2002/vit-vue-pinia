import { createRouter, createWebHistory } from "vue-router"

import Home from "./src/components/Home.vue"
import Product from "./src/components/Product.vue"
import About from "./src/components/About.vue"
import Contact from "./src/components/Contact.vue"
import Login from "./src/components/Login.vue"
import Register from "./src/components/Register.vue"
import ProductDetails from "./src/components/Product-details.vue"
import PageNotFound from "./src/components/404.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "detail",
    component: ProductDetails,
  },
  {
    path: "/product/category/:category",
    name: "ProductCategory",
    component: Product,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/:pathMatch(.*)",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
