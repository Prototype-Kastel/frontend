<template>
  <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar />
    
  </div>
  <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">Edit Data Booking</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-header">Data Booking</div>
                    <div class="card-body">
                      <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">No Booking</label>
                              <input type="text" v-model="booking.no_booking" class="form-control" readonly>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Booking Date</label>
                              <input type="date" v-model="booking.booking_date" class="form-control" readonly>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Dipesan Oleh</label>
                          <div class='input-group date' id='datetimepicker1'>
                            <input type='text' class="form-control" v-model="booking.name" readonly/>
                            <span class="input-group-addon input-group-append">
                              <button class="btn btn-outline-primary" type="button" id="button-addon2"> <i
                                  class="ni ni-circle-08"></i></button>
                            </span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Segmen</label>
                              <input type="text"  class="form-control" v-model="booking.market_segment" readonly>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label for="">Order Via</label>
                            <input type="text" class="form-control" v-model="booking.booking_type" readonly>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Check In</label>
                              <input type="date" class="form-control" v-model="booking.check_in" readonly>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label for="">Check Out</label>
                            <input type="date" class="form-control" v-model="booking.check_out" readonly>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  
                    <div class="card card-stats">
                <!-- Card body -->
                      <div class="card-body">
                        <div class="row">
                          <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Total Price</h5>
                            <span class="h2 font-weight-bold mb-0">Rp.{{ new Intl.NumberFormat().format(booking.price_total) }} </span>
                          </div>
                          <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                              <i class="ni ni-money-coins"></i>
                            </div>
                          </div>
                        </div>
                        <p class="mt-3 mb-0 text-sm">
                          <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> Status Payment</span>
                          <span class="text-nowrap badge badge-primary">{{booking.payment_status}}</span>
                        </p>
                      </div>
                    </div>
  
                    <div class="card">
                      <div class="card-header">Data ID Card</div>
                      <div class="card-body">
                        <div class="form-group">
                           <label for="">ID Card Type</label>
                           <input type="text" class="form-control" v-model="booking.idcard_type">
                        </div>
                         <div class="form-group">
                           <label for="">ID Card Number</label>
                           <input type="text" class="form-control" v-model="booking.idcard_number">
                        </div>
                         <div class="form-group">
                           <label for="">ID Card Photo</label> <br>
                           <img :src="booking.idcard_photo" style="width:100px;height:100px" alt="">
                        </div>
                      </div>
                    </div>
              
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                   <label for="">Tambah Pesanan Kamar</label>
                    <div class="form-group" style="float: right">
                          <router-link :to=" this.booking.id + '/addbookingRoom'"><span class="btn btn-primary btn-sm mb--2"><i class="fas fa-plus"></i> Tambah
                          Data</span></router-link> 
                    </div>
                    <div class="table-responsive py-4">
                      <table class="table table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th>No</th>
                            <th>Room Type</th>
                            <th>Room Number</th>
                            <th>Floor</th>
                            <th>Price</th>
                            <th>Exstra Service</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="(rooms,index) in booking.room" :key="index"> 
                            <td>{{index + 1}}</td>
                            <td>{{rooms.room.roomtype.name}}</td>
                            <td>{{rooms.room.no_room}}</td>
                            <td>{{rooms.room.floor}}</td>
                            <td>Rp.{{ new Intl.NumberFormat().format(rooms.room_price.price) }} </td>
                            <td>
                              <template v-for="(services,index) in booking.service" :key="index">
                                    <template v-if="rooms.id == services.bookingDetail_id">
                                          <span>{{services.service.name}}</span> , 
                                    </template>
                                    
                              </template>
                            </td>
                            <td class="py-3">
                              <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#addkamar"><i class="fas fa-edit"></i></button>
                              <button class="btn btn-danger btn-sm" @click.prevent="deleteRoom(rooms.id,index,rooms.room.roomtype.id)"><i class="fas fa-trash"></i></button>

                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                </div>
              </div>

              <div class="card">
                  <div class="card-body">
                     <label for="">Tambah Tamu</label>
                      <div class="form-group" style="float: right">
                        <router-link :to=" this.booking.id + '/addbookingcustomer'"><span class="btn btn-primary btn-sm mb--2"><i class="fas fa-plus"></i> Tambah
                          Data</span></router-link> 
                      </div>
                      <div class="table-responsive py-4">
                        <table class="table table-flush">
                          <thead class="thead-light">
                            <tr>
                              <th>No</th>
                              <th>Nama Tamu</th>
                              <th>Address</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>id card photo </th>
                              <th>Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(customers,index) in booking.customer" :key="index">
                              <td>{{ index+1 }}</td>
                              <td>{{customers.customer.name}}</td>
                              <td>{{customers.customer.address}}</td>
                              <td>{{customers.customer.email}}</td>
                              <td>{{customers.customer.phone}}</td>
                              <td>
                                <img :src="customers.customer.photo" :alt="customers.customer.name" style="width:100px;height:100px">
                              </td>
                              <td class="py-3">
                                <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#addtamu"><i class="fas fa-edit"></i></button>
                                <button class="btn btn-danger btn-sm" @click.prevent="deleteCustomer(customers.customer.id,index)"><i class="fas fa-trash"></i></button>

                              </td>
                            </tr>
                            <div class="Tamu"></div>
                          </tbody>
                        </table>
                      </div>
                  </div>
              </div>
              <div>
                <button class="btn btn-primary ">Save</button>
                <button class="btn btn-neutral">Reset</button>
              </div>
            </div>
          </div>


        </div>
      </div>

    <v_footer />
  </div>

</template>

<script>
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import axios from "axios";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: "editBooking",
  components: {
    v_footer,
    navbar
  },
  data() {
    return {
      booking:{
        id:'',
        no_booking:'',
        booking_date:'',
        market_segment:'',
        booking_type:'',
        idcard_type:'',
        idcard_number:'',
        idcard_photo:'',
        price_total:'',
        less_cost:'',
        check_in:'',
        check_out:'',
        payment_status:'',
        name:'',
        customer:[],
        room:[],
        service:[]
      }
    }
  },
  mounted() {
    this.getBooking();
    
  },
  methods: {
      async getBooking(){
          let response = await axios.get(`api/booking/${this.$route.params.id}/show`);
          if (response.status == 200) {
              this.booking.id = this.$route.params.id;
              this.booking.no_booking = response.data.data.no_booking;
              this.booking.booking_date = response.data.data.booking_date;
              this.booking.name = response.data.data.booking_customer[0].customer.name;
              this.booking.market_segment = response.data.data.market_segment;
              this.booking.market_segment = response.data.data.market_segment;
              this.booking.booking_type = response.data.data.booking_type;
              this.booking.check_in = response.data.data.check_in;
              this.booking.check_out = response.data.data.check_out;
              this.booking.duration = response.data.data.duration;
              this.booking.room = response.data.data.booking_detail;
              this.booking.idcard_type = response.data.data.idcard_type;
              this.booking.idcard_number = response.data.data.idcard_number;
              this.booking.idcard_photo = response.data.data.idcard_photo;
              this.booking.price_total = response.data.data.price_total;
              this.booking.expired_at = response.data.data.expired_at;
              this.booking.less_cost = response.data.data.less_cost;
              this.booking.service = response.data.data.bookingservice;
              this.booking.customer = response.data.data.booking_customer;            
              
              for (let index = 0; index < response.data.data.booking_payment.length; index++) {
                  this.booking.payment_status = response.data.data.booking_payment[index].payment_status;
              }

          }else{
            console.log(response.error);
          }
      },
     deleteRoom(id,index,roomtype_id){
        let response  = window.confirm('apakah anda yakin ?');
        if (response == true) {
            axios.delete(`api/booking/${id}/${roomtype_id}/deleteroom`)
            .then(() => {
               createToast('data berhasil dihapus',
                  {
                    showIcon: 'true',
                    position: 'top-right',
                    type: 'success',
                    transition: 'bounce',
                  });

                this.booking.room.splice(index,1);
              
            }).catch(() => {
              console.log('gagal');
            });
        } else {
              createToast('data gagal dihapus',
                  {
                  showIcon: 'true',
                  position: 'top-right',
                  type: 'error',
                  transition: 'bounce',
                  });
        }  
       },

       deleteCustomer(customer_id,index){
          let response  = window.confirm('apakah anda yakin ?');
        if (response == true) {
            axios.delete(`api/booking/${customer_id}/deletecustomer`)
            .then(() => {
               createToast('data berhasil dihapus',
                  {
                    showIcon: 'true',
                    position: 'top-right',
                    type: 'success',
                    transition: 'bounce',
                  });

                this.booking.customer.splice(index,1);
              
            }).catch(() => {
              console.log('gagal');
            });
        } else {
              createToast('data gagal dihapus',
                  {
                  showIcon: 'true',
                  position: 'top-right',
                  type: 'error',
                  transition: 'bounce',
                  });
        }  
       }
    
  },

};
</script>

