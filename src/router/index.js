import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeAdmin from '../views/HomeAdmin.vue'
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
import Customer from '../views/Customer/Customer.vue';
import addCustomer from '../views/Customer/addCustomer.vue';
import editCustomer from '../views/Customer/editCustomer.vue';

// Customer View

import CustomerDetailPesanan from '../views/CustomerView/Detail_Pesanan/Detail_Pesanan.vue';
import CustomerRoomDetails from '../views/CustomerView/Room_Details/Room_Details.vue';
import CustomerDetailBooking from '../views/CustomerView/Detail_Booking/Detail_Booking.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Admin',
    name: 'HomeAdmin',
    component: HomeAdmin
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
    name: 'booking',
    component: Booking
  },
  {
    path: '/Booking/addBooking',
    name: 'addBooking',
    component: addBooking
  },
  {
    path: '/Booking/editBooking/:id',
    name: 'booking.edit',
    component: editBooking
  },
  {
    path: '/Booking/editBooking/:id/addbookingRoom',
    name: 'booking.addbookingroom',
    component: () => import("@/views/Booking/addbookingRoom.vue")
  },
  {
    path: '/Booking/editBooking/:id/addbookingcustomer',
    name: 'booking.addbookingCustomer',
    component: () => import("@/views/Booking/addbookingCustomer.vue")
  },
  {
    path: '/Booking/editBooking/:id',
    name: 'booking.edit',
    component: editBooking
  },
  {
    path: '/checkin',
    name: 'checkin',
    component: () => import("@/views/CheckIn/Checkin.vue")
  },
  {
    path: '/checkin/edit/:id',
    name: 'checkin.edit',
    component: () => import("@/views/CheckIn/editCheckin.vue")
  },
  {
    path: '/checkin/edit/:id/addcheckincustomer',
    name: 'checkin.addbookingCustomer',
    component: () => import("@/views/CheckIn/addcheckinCustomer.vue")
  }, 
  {
    path: '/checkin/edit/:id/addcheckinRoom',
    name: 'checkin.addcheckinroom',
    component: () => import("@/views/CheckIn/addcheckinRoom.vue")
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
    path: '/LostFound/editLostFound/:id',
    name: 'lostfound.edit',
    component: editLostFound
  },
  {
    path: '/History',
    name: 'history',
    component: History
  },
  {
    path: '/RoomStatus',
    name: 'roomstatus',
    component: RoomStatus
  },
  {
    path: '/RoomStatus/addRoomStatus',
    name: 'roomstatus.create',
    component: addRoomStatus
  },
  {
    path: '/RoomStatus/edit/:id',
    name: 'roomstatus.edit',
    component: editRoomStatus
  },
  {
    path: '/Customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/Customer/addCustomer',
    name: 'addCustomer',
    component: addCustomer
  },
  {
    path: '/Customer/editCustomer',
    name: 'editCustomer',
    component: editCustomer
  },
// CUSTOMER VIEW

  {
    path: '/customer/detailPesanan',
    name: 'customer.detailpesanan',
    component: CustomerDetailPesanan
  },
  {
    path: '/customer/roomDetails',
    name: 'customer.roomdetails',
    component: CustomerRoomDetails
  },
  {
    path: '/customer/detailBooking',
    name: 'customer.detailBooking',
    component: CustomerDetailBooking
  },
  {
    path: '/dashboarduser',
    name: 'dashboarduser',
    component: () => import("@/views/CustomerView/Dashboard/dashboard.vue")
  },
  {
    path: '/bookinguser',
    name: 'bookinguser',
    component: () => import("@/views/CustomerView/Dashboard/Booking/Booking.vue")
  },
  {
    path: '/bookinguser/detailbooking',
    name: 'bookinguser.detailbooking',
    component: () => import("@/views/CustomerView/Dashboard/Booking/DetailBooking.vue")
  },
  {
    path: '/listorder',
    name: 'listorder',
    component: () => import("@/views/CustomerView/Dashboard/List_Order/ListOrder.vue")
  },
  {
    path: '/profileuser',
    name: 'profileuser',
    component: () => import("@/views/CustomerView/Dashboard/Profile/Profile.vue")
  },
 
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

