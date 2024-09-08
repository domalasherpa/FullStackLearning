import { createWebHistory, createRouter } from "vue-router";
import Cart from "../pages/cartPage.vue";
import Home from "../pages/homePage.vue";
import Products from "../pages/productsPage.vue";
import Product from "../pages/productPage.vue";
import NotFound from "../pages/notFound.vue";

const routes = [
    {path:'/', name:'home', component: Home},
    {path:'/products', name:'products', component: Products, name: 'products'},
    {path:'/cart', name:'cart', component: Cart},
    {path:'/products/:id', name:'productDetails', component: Product}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;