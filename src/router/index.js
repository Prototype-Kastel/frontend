import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Room from '../views/Room/Room.vue';
import RoomType from '../views/Room_Type/roomType.vue';
import roomprice from '../views/Room_Price/roomPrice.vue';
import Service from '../views/Service/service.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room',
    name: 'room',
    component: Room
  },
  {
    path: '/room/create',
    name: 'room.create',
    component: import("@/views/Room/addRoom.vue")
  },
  {
    path: '/room/editroom/:id',
    name: 'room.edit',
    component: () => import("@/views/Room/editRoom.vue")
  },
  {
    path: '/roomType',
    name: 'roomtype',
    component: RoomType
  },
  {
    path: '/roomType/create',
    name: 'roomtype.create',
    component: () => import("@/views/Room_Type/addRoomType.vue")
  },
  {
    path: '/roomType/editRoomType/:id',
    name: 'roomtype.edit',
    component: () => import("@/views/Room_Type/editRoomType.vue")
  },
  {
    path: '/roomprice',
    name: 'roomprice',
    component: roomprice
  },
  {
    path: '/roomprice/create',
    name: 'roomprice.create',
    component: import("@/views/Room_Price/addPrice.vue")
  },
  {
    path: '/roomprice/edit/:id',
    name: 'roomprice.edit',
    component: import("@/views/Room_Price/editPrice.vue")
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/service/create',
    name: 'service.create',
    component: () => import("@/views/Service/addService.vue")
  },
  {
    path: '/service/edit/:id',
    name: 'service.edit',
    component: () => import("@/views/Service/editService.vue")
  },
  // {
  //   path: '/booking',
  //   name: 'Booking',
  //   component: Booking
  // },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import("@/views/Checkout/checkout.vue")
  },
  {
    path: '/checkout/edit/:id',
    name: 'checkout.edit',
    component: () => import("@/views/Checkout/editcheckout.vue")
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import("@/views/payment/payment.vue")
  },
  {
    path: '/payment/create',
    name: 'payment.create',
    component: () => import("@/views/payment/addPayment.vue")
  },
  {
    path: '/payment/edit/:id',
    name: 'payment.edit',
    component: () => import("@/views/payment/editPayment.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

