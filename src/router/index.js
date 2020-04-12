import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import ("views/home/Home")
const Profile = () => import ("views/profile/Profile")
const ShopCat = () => import ("views/shopCat/ShopCat")
const About = () => import ("views/about/About")

Vue.use(VueRouter)

  const routes = [
    {
      path : "/",
      redirect : "/home"
    },{ 
      path : "/home",
      component : Home
    },{
      path : "/about",
      component : About
    },{
      path : "/shopCat" ,
      component : ShopCat
    },{
      path : "/profile",
      component : Profile
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
