import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Room from '../views/Room/Room.vue';
import RoomType from '../views/Room_Type/roomType.vue';
import roomprice from '../views/Room_Price/roomPrice.vue';
import Service from '../views/Service/service.vue';
import Booking from '../views/Booking/Booking.vue';
import addBooking from '../views/Booking/addBooking.vue';
import editBooking from '../views/Booking/editBooking.vue';
import LostFound from '../views/Lost_Found/LostFound.vue';
import addLostFound from '../views/Lost_Found/addLostFound.vue';
import editLostFound from '../views/Lost_Found/editLostFound.vue';
import History from '../views/History/history.vue';
import RoomStatus from '../views/Room_Status/RoomStatus.vue';
import addRoomStatus from '../views/Room_Status/addRoomStatus.vue';
import editRoomStatus from '../views/Room_Status/editRoomStatus.vue';


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
    path: '/Booking',
    name: 'Booking',
    component: Booking
  },
  {
    path: '/Booking/addBooking',
    name: 'addBooking',
    component: addBooking
  },
  {
    path: '/Booking/editBooking',
    name: 'editBooking',
    component: editBooking
  },
  {
    path: '/LostFound',
    name: 'LostFound',
    component: LostFound
  },
  {
    path: '/LostFound/addLostFound',
    name: 'addLostFound',
    component: addLostFound
  },
  {
    path: '/LostFound/editLostFound',
    name: 'editLostFound',
    component: editLostFound
  },
  {
    path: '/History',
    name: 'history',
    component: History
  },
  {
    path: '/RoomStatus',
    name: 'RoomStatus',
    component: RoomStatus
  },
  {
    path: '/RoomStatus/addRoomStatus',
    name: 'addRoomStatus',
    component: addRoomStatus
  },
  {
    path: '/RoomStatus/edit/:id',
    name: 'roomstatus.edit',
    component: editRoomStatus
  },
  // {
  //   path: '/checkin',
  //   name: 'ChenkIn',
  //   component: ChenkIn
  // },
  // {
  //   path: '/checkout',
  //   name: 'Checkout',
  //   component: Checkout
  // },
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

