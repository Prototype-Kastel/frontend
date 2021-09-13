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
                          <a class="btn btn-sm btn-neutral">
                            <router-link to="/payment">kembali</router-link>
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
                     <h3 class="mb-0">Edit Data Payment</h3>
                </div>
                <div class="card-body">
                     <form @submit.prevent="setStatus()">
                    <div class="row">
                       
                        <div class="col-md-8">
                           
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">No Booking </label>
                                            <input type="text" class="form-control" v-model="this.booking" disabled>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="">Amount</label>
                                        <input type="number" v-model="payment.amount" class="form-control" disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                        <label for="">Payment Type </label>
                                        <input type="text" class="form-control" v-model="payment.payment_type" disabled>
                                    </div>
                                <div class="row">
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Tax (%) </label>
                                        <input type="number" v-model="payment.tax" disabled  placeholder="0%" class="form-control"  >
                                    </div> 
                                    </div>
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Phone Number </label>
                                        <input type="number" v-model="payment.phone_number" class="form-control" disabled>
                                    </div> 
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Account Number </label>
                                        <input type="text" v-model="payment.account_number" class="form-control" disabled >
                                    </div> 
                                </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">No CC </label>
                                        <input type="number" v-model="payment.no_cc"  class="form-control" disabled >
                                    </div> 
                                    </div>
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">Expired Date </label>
                                        <input type="date" v-model="payment.expired_date" class="form-control" disabled>
                                    </div> 
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">CVV </label>
                                            <input type="number" v-model="payment.cvv" class="form-control"  disabled>
                                        </div> 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="">Bank </label>
                                        <input type="text" v-model="payment.bank" class="form-control"  disabled>
                                    </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="">No DC </label>
                                        <input type="number" v-model="payment.no_dc" class="form-control"  disabled>
                                    </div> 
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Payment Date </label>
                                    <input type="date" v-model="payment.pay_at" class="form-control" disabled >
                                </div> 

                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header">Bukti Pembayaran</div>
                                <div class="card-body">
                                      
                                      
                                            <div class="form-group">
                                                <label for="">Bukti Pembayaran</label><br>
                                                <img :src="this.attachment" style="width:100px;height:100px" >
                                            </div>
                                      
                                       
                                        <div class="form-group">
                                            <label for="">Status</label>
                                            <select v-model="payment.payment_status" class="form-control" required>
                                                <option value="" selected disabled>Choose Status Payment</option>
                                                <option value= "DP">Dp</option>
                                                <option value= "Deposite">Deposite</option>
                                                <option value= "Pelunasan">Pelunasan</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Verifikasi Bukti Pembayaran</button>
                                        </div>
                                  
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                    </form>
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
import { useRouter } from "vue-router";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: "addService",
  components:{
    v_footer,
    navbar
  },
  data(){
      return{
          booking:'',
          payment:[],
          attachment:'',
          loading:false,
          status_payment:'',
          router : useRouter(),
          
      }
  },
  mounted(){
      this.getPayment();
  },
  methods: {

    async getPayment(){
        let response = await axios.get(`api/payment/${this.$route.params.id}/show`)
        if (response.status == 200) {
            this.payment = response.data.data
            this.booking = this.payment.booking.no_booking
            this.attachment = this.payment.attachment_payment[0].attachment;
        } else {
            console.log('gagal');
        }
    },
     async setStatus(){
      
        let response = await axios.put(`api/payment/setstatus/${this.$route.params.id}`,this.payment);
        if (response.status == 200) {
             createToast('Data berhasil ditambahkan',
            {
                type: 'success',
                showIcon: 'true',
                transition: 'zoom',
            })
            this.loading = false;
             this.router.push({
                    name : 'payment'
                })
        } else {
              createToast('Data gagal ditambahkan',
            {
                type: 'error',
                showIcon: 'true',
                transition: 'zoom',
            })
        }
        
  }



  },

 
}
</script>
