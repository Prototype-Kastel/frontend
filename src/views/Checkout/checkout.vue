<template>
    <div class="header bg-primary pb-6">
            <!-- for navbar -->
              <navbar/>
              <div class="container-fluid">
                  <div class="header-body">
                  <div class="row align-items-center py-4">
                      <div class="col-lg-6 col-7">
                      <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
                      <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                          <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                          <li class="breadcrumb-item"><a href="dashboard.html#"><i class="fas fa-home"></i></a></li>
                          <li class="breadcrumb-item"><a href="dashboard.html#">Dashboards</a></li>
                          <li class="breadcrumb-item active" aria-current="page">Default</li>
                          </ol>
                      </nav>
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
              <h3 class="mb-0">Datatable Checkout</h3>
            </div>
            <div class="table-responsive py-4">
              <table class="table table-flush" id="datatable-basic">
                <thead class="thead-light">
                  <tr>
                    <th>No</th>
                    <th>No Booking</th>
                    <th>Nama Tamu </th>
                    <th>No Room </th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Status</th>
                    <th>Action</th>  
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(booking,index) in bookings.data" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{booking.no_booking}}</td>
                    <td>{{booking.booking_customer[0].customer.name}}</td>
                    <td>{{booking.no_booking}}</td>
                    <td>{{booking.check_in}}</td>
                    <td>{{booking.check_out}}</td>
                    <td v-if="booking.check_out_at === null"><span class="badge badge-danger">Belum Check Out</span></td>
                    <td v-else ><span class="badge badge-primary">{{booking.check_out_at}}</span></td>  
                    <td>
                        <router-link to="/service"><span class="btn btn-info btn-sm mr-1"><i class="fas fa-eye"></i></span></router-link>
                        <template v-if="booking.check_out_at !== null">
                            <button class="btn btn-success btn-sm mr-1" disabled><i class="fas fa-edit"></i></button>
                        </template>
                        <template v-else>
                             <router-link :to="'/checkout/edit/'+ booking.id "><span class="btn btn-success btn-sm mr-1"><i class="fas fa-edit"></i></span></router-link>
                        </template>
                       
                        <!-- <button class="btn btn-danger btn-sm" @click.prevent="destroy(service.id,index)"><i class="fas fa-trash"></i></button> -->
                    </td>
                  </tr>     
                </tbody>
              </table>
            </div>
          </div>  
        </div>
      </div> 
        <v_footer/>
      </div>
</template>

<script>
import v_footer from '@/components/v_footer.vue';
import navbar from '@/components/Navbar.vue';
import axios from 'axios';
import {ref,onMounted} from "vue";
// import { createToast } from 'mosha-vue-toastify';

import 'mosha-vue-toastify/dist/style.css'   

export default {
  name: "service",
  components:{
    v_footer,
    navbar
  },
  setup() {
      let bookings = ref([]);
      onMounted(() => {
         

         axios.get('api/checkout')
        .then((result) => {
            bookings.value = result.data;
            
        }).catch((err) => {
            console.log(err.response);
        }); 
      })

    return {
      bookings
    }
  }

  
 

}
</script>

