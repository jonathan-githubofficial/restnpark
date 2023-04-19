import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/users/Profile.vue'
import Registration from '../views/users/UserRegistration.vue'
import Login from '../views/auth/Login.vue'
import UserBio from '../components/users/UserBio.vue'
import InputImage from '../components/users/InputImage.vue'
import PaymentMethod from '../components/users/PaymentMethod.vue'
import InputLocation from '../components/users/InputLocation.vue'
import ProfileReady from '../components/users/ProfileReady.vue'
import UserInfo from '../components/users/UserInfo.vue'
import Reservations from '../components/users/Reservations.vue'
import Parkings from '../components/users/Parkings.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },


    {path: '/Profile', component: Profile},
    {path: '/register', component: Registration},
    {path: '/Login', component: Login},
    {path: '/UserBio', component: UserBio},
    {path: '/InputImage', component: InputImage},
    {path: '/PaymentMethod', component: PaymentMethod},
    {path: '/InputLocation', component: InputLocation},
    {path: '/ProfileReady', component: ProfileReady},
    {path: '/userInfo', component: UserInfo},
    {path: '/Reservations', component: Reservations},
    {path: '/Parkings', component: Parkings},
  ]
})

export default router
