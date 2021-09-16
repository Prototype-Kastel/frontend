<template>
  <sidebar />
  <div class="main-content mt-10" id="panel">
    <div class="header bg-primary pb-6">
      <!-- for navbar -->
      <navbar />
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Booking</h6>
              <nav
                aria-label="breadcrumb"
                class="d-none d-md-inline-block ml-md-4"
              >
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item">
                    <a href="datatables.html#"><i class="fas fa-home"></i></a>
                  </li>
                  <li class="breadcrumb-item"></li>
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
  </div>
  <div class="container-fluid mt--6">
    <div class="row">
      <div class="col">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h3 class="mb-0">Datatable Booking</h3>
          </div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-basic">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>No Booking</th>
                  <th>Dipesan oleh</th>
                  <th>Nama Tamu</th>
                  <th>Check in</th>
                  <th>Check Out</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                
                <tr v-for="(bookings,index) in booking" :key="index">
                  <td>{{ index + 1}}</td>
                  <td>{{bookings.no_booking}}</td>
                  <td>{{bookings.booking_customer[0].customer.name}}</td>
                  <td>{{bookings.booking_customer[0].customer.name}}</td>
                  <td>{{bookings.check_in}}</td>
                  <td>{{bookings.check_out}}</td>
                  <td v-if="bookings.booking_payment[0].payment_status == null"><span class="badge badge-warning">Unpaid</span></td>
                  <td v-if="bookings.booking_payment[0].payment_status !== null && bookings.booking_payment[0].attachment_payment == null"><span class="badge badge-info">On Process</span></td>
                  <td v-if="bookings.booking_payment[0].payment_status !== null  && bookings.booking_payment[0].attachment_payment !== null"><span class="badge badge-primary">{{bookings.booking_payment[0].payment_status}}</span></td>
                   <td>
                       <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></button>
                      <router-link :to=" {name: 'booking.edit', params:{id:bookings.id} } "><span class="btn btn-success btn-sm mr-1"><i class="fas fa-edit"></i></span></router-link> 
                       <button class="btn btn-danger btn-sm" @click.prevent="destroy(bookings.id,index)"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <v_footer />
    </div>
  </div>
</template>

<script>
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import axios from "axios";
// import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css' 
import sidebar from "@/components/Sidebar.vue";
export default {
  name: "Booking",
  components: {
    sidebar,
    v_footer,
    navbar,
  },
  data(){
    return{
      booking:[]
    }
  },
  mounted() {
    this.getBooking();
  },
  methods:{
    async getBooking(){
      let response = await axios.get('api/booking');
      if (response.status ==200) {
        this.booking = response.data.data;
        console.log(this.booking)
      } else {
        console.log('error');
      }
    }

  }

};
</script>
