import { createWebHistory, createRouter } from "vue-router";
import Cart from "../pages/cartPage.vue";
import Home from "../pages/homePage.vue";
import Products from "../pages/productsPage.vue";
import Product from "../pages/productPage.vue";
import NotFound from "../pages/notFound.vue";

const routes = [
    {path:'/', component: Home},
    {path:'/products',component: Products, name: 'products'},
    {path:'/cart', component: Cart},
    {path:'/products/:id', component: Product, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;