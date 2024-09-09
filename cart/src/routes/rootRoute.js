import { createWebHistory, createRouter } from "vue-router";
import Cart from "../pages/CartPage.vue";
import Home from "../pages/HomePage.vue";
import Products from "../pages/ProductsPage.vue";
import Product from "../pages/ProductPage.vue";
import NotFound from "../pages/NotFound.vue";

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