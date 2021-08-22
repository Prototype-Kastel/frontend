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
                            <router-link to="/checkout">kembali</router-link>
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
              <h3 class="mb-0">Datatable Service</h3>
            </div>
            <div class="card-body">
                
                <div class="row">
                    <div class="col-md-6">
                        
                            <div class="card">
                                <div class="card-header">
                                    History Booking
                                </div>
                                <div class="card-body">
                                    <p><span class="text-blue"><b>No Booking</b></span> : {{booking.no_booking}} </p>   
                                    <p><span class="text-blue"><b> Check In</b></span> : <span>{{booking.check_in}}</span></p>
                                    <p><span class="text-blue"><b>Check Out</b></span> : <span>{{booking.check_out}}</span></p>                                      
                                    <p><span class="text-blue"><b>Tanggal Booking</b></span> : <span>{{booking.booking_date}}</span></p>                                      
                                    <p><span class="text-blue"><b>Tipe Booking</b></span> : <span>{{booking.booking_type}}</span></p>                                      
                                    <p><span class="text-blue"><b>Tipe Id Card</b></span> : <span>{{booking.idcard_type}}</span></p>
                                    <p><span class="text-blue"><b>No Id Card</b></span> : <span>{{booking.idcard_number}}</span></p>
                                    <p ><span class="text-blue"><b>Biaya Tambahan</b></span> : <span class="badge badge-danger">Rp.300.0000</span></p> 
                                </div>
                           
                           
                            </div>
                      
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">Data Check Out</div>
                            <div class="card-body">
                                    <form  @submit.prevent="setCheckout()">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for=""><span class="text-blue"> <b>Status Check Out</b></span> </label>
                                                    <input type="date" class="form-control" v-model="check_out_at" required>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                <label for=""><span class="text-blue"> <b>Status Room</b></span> </label>
                                                    <input type="text" class="form-control"  readonly placeholder="Vacant Clean">
                                                </div>
                                            </div>
                                        </div>
                                            <div>
                                                 <button type="submit" class="btn btn-primary btn-block d-flex align-items-center">
                                                    Update Checkout
                                                    <template v-if="loading">
                                                       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.6081871345029237s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(30 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.461988304093567s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(60 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.3157894736842104s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.1695906432748537s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(120 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.023391812865497s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(150 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.8771929824561403s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.7309941520467835s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(210 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.5847953216374269s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(240 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.43859649122807015s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.29239766081871343s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(300 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.14619883040935672s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(330 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> <!-- [ldio] generated by https://loading.io/ --></svg>
                                                    </template>                                                    
                                                 </button>
                                            </div>
                                    </form>       
                        </div>
                        
                    </div>
                </div>
            </div>
                
             <div class="card">
                 <div class="card-body">
                     <label for="" class="text-blue"><b>Data Facility</b></label>
                    <div class="table-responsive py-4">
                        <table class="table table-flush">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Name Service</th>
                                <th>Service Type</th>
                                <th>Price</th>
                                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="booking.booking_service === null">
                                <span class="aler alert-danger">Data Empty</span>
                            </tr>
                            <tr v-else v-for="(bookings,index) in booking.booking_service" :key="index">
                                <td>{{index + 1}}</td>
                                <td>{{bookings.service.name}}</td>
                                <td>{{bookings.service.category}}</td>
                                <td>{{bookings.service.type}}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>


                <label for="" class="text-blue"><b>Data Room</b></label>
                <div class="table-responsive py-4">
                    <table class="table table-flush">
                    <thead class="thead-light">
                        <tr>
                        <th>No Room</th>
                        <th>Floor</th>
                        <th>Room Status</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr v-for="(bookings,index) in booking.booking_detail" :key="index">
                                <td>{{bookings.room.no_room}}</td>
                                <td>{{bookings.room.floor}}</td>
                                <td>{{bookings.room.room_status}}</td>
                        </tr>        
                    </tbody>
                    </table>
                </div>

                <label for="" class="text-blue">Data Tamu</label>
                <div class="table-responsive py-4">
                    <table class="table table-flush">
                    <thead class="thead-light">
                        <tr>
                            <th>nama tamu</th>
                            <th>Alamat</th>
                            <th>telefon</th>
                            <th>Email</th>
                            <th> ID Card photos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(customers,index) in booking.booking_customer" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{customers.customer.name}}</td>
                            <td>{{customers.customer.phone}}</td>
                            <td>{{customers.customer.email}}</td>                
                            <th>belum ada</th>
    
                        </tr>    
                    </tbody>
                  </table>
                </div>
                 </div>
             </div>    
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
import { useRouter} from 'vue-router';

export default {
  name: "addService",
  components:{
    v_footer,
    navbar
  },
  data(){
      return{
          booking:[],
          dataCheckout:{
              check_out_at:''
          },
          router :useRouter(),
          loading : false
      }
  },
  mounted(){
      this.getBooking();
  },
  methods: {
      async getBooking(){
          let response = await axios.get(`api/checkout/${this.$route.params.id}/show`)
          if (response.status == 200) {
              this.booking = response.data.data
          } else {
              console.log('gagal');
          }
      },
      async setCheckout(){
          this.loading = true;
          this.dataCheckout.check_out_at = this.check_out_at;
          try {
            let response = await axios.post(`api/checkout/setCheckout/${this.$route.params.id}`,this.dataCheckout)
            if (response.status ===200) {
                this.loading = false;
                this.router.push({
                        name : 'checkout'
                })
            }else{
                console.log('gagal');
            }
          } catch (error) {
              console.log(error.response.data);
          }
         
      }
      
  }
}
</script>
