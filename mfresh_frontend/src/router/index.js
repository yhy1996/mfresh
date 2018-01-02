import Vue from 'vue'
import Router from 'vue-router'
import news from '@/components/news'
import news_details from '@/components/news_details'
import About from '@/components/About'
import Index from '@/components/Index'
import product from '@/components/product'
import product_details from '@/components/product_details'
import contact from '@/components/contact'
import login from '@/components/login'
import register from '@/components/register'
import cart from '@/components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Index},
    {path: '/index', component: Index},
    {path: '/about', component: About},
    {path: '/news', component: news},
    {path: '/news_details', component: news_details},
    {path: '/product', component: product},
    {path: '/product_details', component: product_details},
    {path: '/contact', component: contact},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/cart', component: cart},
  ]
})
