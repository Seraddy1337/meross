import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  
import Product from './components/Product.vue';
import Home from './components/Home.vue';
import List from './components/List.vue';


const routes = [
    { path: '/product', component: Product},
    { path: '/product/list', component: List},
    { path: '', component: Home},
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
router.afterEach(()=>{
    window,scrollTo(0,0)
})

export default router