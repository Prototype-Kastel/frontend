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
                     <h3 class="mb-0">Add Data Payment</h3>
                </div>
                <div class="card-body">
                    <form @submit.prevent="uploadPayment()">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">No Booking </label>
                                <select v-model="payment.booking_id" id="" class="form-control">
                                  <option value="" disabled selected>Choose No Booking</option>
                                  <option v-for="(bookings,index) in booking" :key="index" :value="bookings.id">{{bookings.no_booking}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Amount</label>
                               <input type="number" v-model="payment.amount" class="form-control" >
                            </div>
                        </div>
                    </div>
                     <div class="form-group">
                            <label for="">Payment Type </label>
                            <select v-model="payment.payment_type" class="form-control" required>
                                <option value="" selected disabled>Choose Payment Type</option>
                                <option value="Cash">Cash</option>
                                <option value="Dana">Dana</option>
                                <option value="Ovo">Ovo</option>
                                <option value="Gopay">Gopay</option>
                                <option value="Kartu Kredit">Credit Card</option>
                                <option value="Kartu Kredit">Debit Card</option>
                            </select>
                        </div>
                    <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label for="">Tax (%) </label>
                            <input type="number" v-model="payment.tax" disabled  placeholder="0%" class="form-control" required>
                         </div> 
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                            <label for="">Phone Number </label>
                            <input type="number" v-model="payment.phone_number" class="form-control" >
                        </div> 
                    </div>
                      <div class="col-md-4">
                          <div class="form-group">
                              <label for="">Account Number </label>
                              <input type="number" v-model="payment.account_number" class="form-control" >
                          </div> 
                      </div>
                    </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label for="">No CC </label>
                            <input type="number" v-model="payment.no_cc"  class="form-control" >
                         </div> 
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                              <label for="">Expired Date </label>
                              <input type="date" v-model="payment.expired_date" class="form-control">
                          </div> 
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="">CVV </label>
                                <input type="number" v-model="payment.cvv" class="form-control" >
                            </div> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                        <div class="form-group">
                            <label for="">Bank </label>
                            <input type="text" v-model="payment.bank" class="form-control" >
                        </div>
                        </div>
                        <div class="col-md-6">
                             <div class="form-group">
                              <label for="">No DC </label>
                              <input type="number" v-model="payment.no_dc" class="form-control" >
                          </div> 
                        </div>
                    </div>
                      <div class="form-group">
                          <label for="">Payment Date </label>
                          <input type="date" v-model="payment.pay_at" class="form-control" required >
                      </div> 
               
                      <div class="form-group">
                        <label for="">Attachment</label>
                        <input type="file" name="attachment" id="attachment" @change="previewFiles" class="form-control" required>
                      </div>
                    
                    <div class="form-group">
                        
                        <label for="">Status</label>
                        <select v-model="payment.payment_status"  class="form-control" required>
                            <option value="" selected disabled>Choose Status Payment</option>
                            <option value="DP">Dp</option>
                            <option value="Deposite">Deposite</option>
                            <option value="Pelunasan">Pelunasan</option>
                        </select>
                    </div>
                    <div class="form-group d-flex align-items-center">    
                        <button type="submit"  class="btn btn-primary  d-flex align-items-center">
                          Save
                          <template v-if="loading">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.6081871345029237s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(30 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.461988304093567s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(60 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.3157894736842104s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.1695906432748537s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(120 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.023391812865497s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(150 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.8771929824561403s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.7309941520467835s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(210 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.5847953216374269s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(240 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.43859649122807015s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.29239766081871343s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(300 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.14619883040935672s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(330 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> <!-- [ldio] generated by https://loading.io/ --></svg>
                        </template>
                        </button>
                        <button type="reset" class="btn btn-neutral">Reset</button>
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
          booking:[],
          payment:{
            booking_id:'',
            payment_type:'',
            phone_number:'',
            account_number:'',
            no_cc:'',
            no_dc:'',
            expired_date:'',
            cvv:'',
            bank:'',
            tax:'',
            pay_at:'',
            amount:'',
            deposit:'',
            payment_status:'',
          },
          attachment:'',
          loading:false,
           router : useRouter(),
      }
  },
  mounted(){
      this.getBooking();
  },
  methods: {
     async getBooking(){
       let response = await axios.get('api/booking');
       if (response.status == 200) {
          this.booking =response.data.data
          console.log(this.booking);
       } else {
         console.log("gagal");
       }
     },
  

  previewFiles(event){
    this.attachment = event.target.files[0];
    console.log(this.attachment);
  },

  async uploadPayment(){
    this.loading = true;
      let fd = new FormData();
      fd.append('booking_id',this.payment.booking_id);
      fd.append('payment_type',this.payment.payment_type);
      fd.append('phone_number',this.payment.phone_number);
      fd.append('account_number',this.payment.account_number);
      fd.append('expired_date',this.payment.expired_date);
      fd.append('bank',this.payment.bank);
      fd.append('tax',this.payment.tax);
      fd.append('pay_at',this.payment.pay_at);
      fd.append('amount',this.payment.amount);
      fd.append('deposit',this.payment.deposit);
      fd.append('payment_status',this.payment.payment_status);
      fd.append('attachment',this.attachment);
      fd.append('no_cc',this.payment.no_cc);
      fd.append('no_dc',this.payment.no_dc);
      fd.append('cvv',this.payment.cvv);

    try {
        let response = await axios.post('api/payment/addpayment',fd)
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
          console.log('gagal')
          createToast('Data gagal ditambahkan',
            {
                type: 'error',
                showIcon: 'true',
                transition: 'zoom',
            })
        }
        
    } catch (error) {
      console.log(error.data);
      this.loading=false;
       
    }
  }

  },
}
</script>
