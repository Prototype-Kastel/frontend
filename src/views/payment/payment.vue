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
                       <div class="col-lg-6 col-5 text-right">
                          <a href="" class="btn btn-sm btn-neutral">
                            <router-link to="/payment/create">Tambah Data</router-link>
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
              <h3 class="mb-0">Datatable Payment</h3>
            </div>
            <div class="table-responsive py-4">
              <table class="table table-flush" id="datatable-basic">
                <thead class="thead-light">
                  <tr>
                    <th>No</th>
                    <th>No Booking</th>
                    <th>Nama Tamu </th>
                    <th>No Room </th>
                    <th>Cost Less </th>
                    <th>Status</th>
                    <th>Action</th>  
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(payments,index) in payment" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{payments.booking.no_booking}}</td>
                    <td>{{payments.booking.booking_customer[0].customer.name}}</td>
                    <td>{{payments.booking.booking_detail[0].room.no_room}}</td> 
                    <td>Rp.{{new Intl.NumberFormat().format(payments.booking.less_cost) }}</td> 
                    <td v-if=" payments.payment_status == null && payments.attachment_payment == ''"><span class="badge badge-danger">Unpaid</span></td>
                    <td v-else-if="payments.payment_status == null && payments.attachment_payment !== ''"><span class="badge badge-info">On Process</span></td>
                    <td v-else-if="payments.payment_status == 'Cancelled'"><span class="badge badge-warning">Cancelled</span></td>
                    <td v-else><span class="badge badge-primary">{{payments.payment_status}}</span></td>           
                    <td>
                        <router-link to="/service"><span class="btn btn-info btn-sm mr-1"><i class="fas fa-eye"></i></span></router-link>
                        <router-link :to=" {name: 'payment.edit', params:{id:payments.id} } " ><span class="btn btn-success btn-sm mr-1"><i class="fas fa-edit"></i></span></router-link> 
                        <button class="btn btn-danger btn-sm" @click.prevent="deletePayment(payments.id,index)"><i class="fas fa-trash"></i></button>
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
// import {ref,onMounted} from "vue";
 import { createToast } from 'mosha-vue-toastify';

import 'mosha-vue-toastify/dist/style.css'   

export default {
  name: "service",
  components:{
    v_footer,
    navbar
  },
  data(){
      return{
          payment:[],
      }
  },
  mounted() {
      this.getPayment();
  },
  methods: {

     async getPayment(){
       let response = await axios.get('api/payment');
       if (response.status == 200) {
          this.payment = response.data.data
          console.log(this.payment);
       } else {
         console.log("gagal fetch api");
       }
     },

      deletePayment(id,index){
        let response  = window.confirm('apakah anda yakin ?');
        if (response == true) {
            axios.delete(`api/payment/${id}/destroy`)
            .then(() => {
               createToast('data berhasil dihapus',
                  {
                  showIcon: 'true',
                  position: 'top-right',
                  type: 'success',
                  transition: 'bounce',
                  });
                this.payment.splice(index,1);
              
            }).catch(() => {
              console.log('gagal');
            });
        } else {
           this.addToastFailed();
        }  
       },
  },

  
 

}
</script>