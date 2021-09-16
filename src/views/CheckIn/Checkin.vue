<template>
  <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar />
    <div class="container-fluid">
      <div class="header-body">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 col-7">
            <h6 class="h2 text-white d-inline-block mb-0">Booking</h6>
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4" >
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item">
                  <a href="datatables.html#"><i class="fas fa-home"></i></a>
                </li>
                <li class="breadcrumb-item">
                   
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Booking
                </li>
              </ol>
            </nav>
          </div>
          <div class="col-lg-6 col-5 text-right">
            <a class="btn btn-sm btn-neutral">
                <router-link to="/Booking/addBooking">Tambah Data</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt--6">
    <div class="row">
      <div class="col">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h3 class="mb-0">Datatable Check In</h3>
          </div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-basic">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>No Booking</th>
                  <th>Nama Tamu</th>
                  <th>Room Type</th>
                  <th>No Room</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Room Status</th>
                  <th>Payment Status</th>
                  <th>Status Check In</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                
                <tr v-for="(checkins,index) in checkin" :key="index">
                  <td>{{ index + 1}}</td>
                  <td>{{checkins.no_booking}}</td>
                  <td>{{checkins.booking_customer[0].customer.name}}</td>
                  <td>{{checkins.booking_detail[0].room.room_type.name}}</td> 
                  <td>{{checkins.booking_detail[0].room.no_room}}</td> 
                  <td>{{checkins.check_in}}</td>
                  <td>{{checkins.check_out}}</td>
                  <td>{{checkins.booking_detail[0].room.room_status}}</td>  
                   <td v-if="checkins.booking_payment[0].payment_status == null"><span class="badge badge-warning">Unpaid</span></td> 
                  <td v-if="checkins.booking_payment[0].payment_status !== null && checkins.booking_payment[0].attachment_payment == null"><span class="badge badge-info">On Process</span></td>
                  <td v-if="checkins.booking_payment[0].payment_status !== null  && checkins.booking_payment[0].attachment_payment !== null"><span class="badge badge-primary">{{checkins.booking_payment[0].payment_status}}</span></td> 
                  <td v-if="checkins.check_in_at == null"><span class="badge badge-danger">Belum Check In</span></td>
                  <td v-else-if="checkins.check_out_at !== null"><span class="badge badge-info">Sudah Check Out</span></td>
                  <td v-else-if="checkins.check_in_at !== null"><span class="badge badge-primary">{{checkins.check_in_at}}</span></td>
                
                   <td>
                       <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></button>
                       <router-link :to=" {name: 'checkin.edit', params:{id:checkins.id} } "><span class="btn btn-success btn-sm mr-1"><i class="fas fa-edit"></i></span></router-link> 
                       <button class="btn btn-danger btn-sm" @click.prevent="destroy(checkins.id,index)"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
              </tbody>
            </table>
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
// import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css' 
export default {
  name: "Booking",
  components: {
    v_footer,
    navbar,
  },
  data(){
    return{
      checkin:[],
      payment_status:''
    }
  },
  mounted() {
    this.getBooking();
  },
  methods:{
    async getBooking(){
      let response = await axios.get('api/checkin');
      if (response.status ==200) {
        this.checkin = response.data.data;
        console.log(this.checkin);
      } else {
        console.log('error');
      }
    }

  }

};
</script>
