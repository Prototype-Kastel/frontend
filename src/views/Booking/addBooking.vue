<template>
  <sidebar />
  <div class="main-content mt-10" id="panel">
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
              <h3 class="mb-0">Tambah Data Booking</h3>
            </div>
            <div class="card-body">
            <form @submit.prevent="addBooking()">
              <div class="row">
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-body">  
                        <div class="form-group">
                          <label for="">Booking Date</label>
                          <input type="date" v-model="booking.booking_date" class="form-control">
                        </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Segmen</label>
                          <input type="text"  class="form-control" value="Umum" readonly>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Order Via</label>
                          <select name="" id="" v-model="booking.booking_type" class="form-control">
                            <option value="" selected disabled>Choose Booking type</option>
                            <option value="Online" >Online</option>
                            <option value="Offline">Offline</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="">ID Card Type</label>
                            <select name="" id="" v-model="booking.idcard_type" class="form-control"> 
                              <option value="" selected disabled>Choose yout ID Card</option>
                              <option value="SiM">SIM</option>
                              <option value="KTP">KTP</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="">ID Card Number</label>
                            <input type="number" v-model="booking.idcard_number" class="form-control">
                          </div>
                        </div>
                    </div>
                    <div class="form-group">
                      <label for="">ID Card Photo</label>
                      <input type="file" name="idcard_photo" id="idcard_photo" @change="previewIdCard" class="form-control">
                    </div>
                      
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Check In</label>
                              <input type="date" v-model="booking.check_in" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label for="">Check Out</label>
                            <input type="date" v-model="booking.check_out" class="form-control">
                          </div>
                      </div>

                      <div class="form-group">
                        <label for="durations">Durations</label>
                        <template v-if="duration == null">
                             <input type="text" class="form-control" placeholder="empty data" readonly v-model="duration">   
                        </template>
                        <template v-else>
                               <input type="text" class="form-control" @change="setduration(duration)" readonly v-model="duration">   
                        </template>
                       
                      </div>
                      </div>
                    </div>
                  
                </div>

                <div class="col-md-6">
                  <div class="card">
                    <div class="card-header">
                      Total Biaya
                    </div>
                    <div class="card-body bg-primary">
                      <div class="container ">
                            <h5 class="text-white">Total Biaya Ekstra service adalah : {{totalservice}}</h5> <br>
                            <h5 class="text-white">Total Biaya room adalah : {{totalroom}} </h5>
                            <template v-if="duration !== NaN">
                              <h5 class="text-white">Total Durasi adalah : {{duration}} hari  </h5>
                            </template>
                            <template v-if="totalprice !== NaN">
                                <h5 class="text-white">Total Biaya  adalah : {{totalprice}}</h5>
                            </template>
                            
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <div class="form-group">
                        <label for="">Room Type</label>
                        <select  v-model="booking.roomtype_id"  class="form-control" >
                            <option value="" selected disabled>Choose your Room</option>
                            <option v-for="(rooms,index) in roomtype" :key="index"  :value="rooms.id"> {{rooms.name}}</option>
                        </select>
            
                      </div>
                      <div class="form-group">
                        <label for="">No Room</label>
                        <template v-if="this.dataRoom == 0">
                            <input type="text" class="form-control" placeholder="Empty Data" readonly>    
                        </template>
                        <template v-else>
                            <select v-model="booking.room_id" class="form-control"> 
                              <option value="" selected  disabled>Choose your room</option>
                              <option v-for="(data,index) in dataRoom" :key="index" :value="data.id">
                                      {{data.no_room}} / {{data.room_status}}
                              </option>
                            </select>
                        </template>
                        
                      </div>
                       <div class="form-group">
                        <label for="">Price</label>
                         <template v-if="this.dataPrice == 0">
                            <input type="text" class="form-control" placeholder="Empty Data" readonly>    
                        </template>
                        <template v-else>
                            <input type="text"    :placeholder="dataPrice[0].price" class="form-control" readonly>
                        </template>
                        
                      </div>
                       <div class="form-group">
                      <label for="">Ekstra Service</label>
                         <select name="" id="" v-model="booking.service_id" class="form-control"  multiple>
                          <option value="" selected disabled>Choose Esktra Service</option>
                          <option v-for="(services,index) in ekstraservice" :key="index" @click="priceservice(services.price)"  :value="services.id" >{{services.name}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
              <div class="row">
                <div class="col-md-6">
                <div class="card">
                  <div class="card-header">Customer</div>
                  <div class="card-body">
                       <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                      <label for="">Name</label>
                      <input type="text" v-model="booking.name" class="form-control">
                    </div>
                    </div>
                     <div class="col-md-6">
                      <div class="form-group">
                      <label for="">Email</label>
                      <input type="text" v-model="booking.email" class="form-control">
                    </div>
                    </div>
                  </div>
                    <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                      <label for="">Phone</label>
                      <input type="text" v-model="booking.phone" class="form-control">
                    </div>
                    </div>
                     <div class="col-md-6">
                      <div class="form-group">
                      <label for="">Birthday</label>
                      <input type="date" v-model="booking.birthday" class="form-control">
                    </div>
                    </div>
                  </div>
                    <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                      <label for="">City</label>
                      <input type="text"  v-model="booking.city" class="form-control">
                    </div>
                    </div>
                     <div class="col-md-6">
                      <div class="form-group">
                      <label for="">Province</label>
                      <input type="text"   v-model="booking.province" class="form-control">
                    </div>
                    </div>
                  </div>
                    <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">Postal Code</label>
                        <input type="text"  v-model="booking.postal_code" class="form-control">
                      </div>
                    </div>
                     <div class="col-md-6">
                      <div class="form-group">
                      <label for="">Region</label>
                      <input type="text"  v-model="booking.region" class="form-control">
                    </div>
                    </div>
                  </div>
                    <div class="form-group">
                      <label for="">Address</label>
                      <textarea name="" id=""  v-model="booking.address" cols="30" rows="3" class="form-control"></textarea>
                    </div>
                  </div>
              </div> 
                </div>
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-header">Payment Booking</div>
                    <div class="card-body">
                          <div class="form-group">
                            <label for="">Payment Type </label>
                            <select v-model="booking.payment_type"  class="form-control" required>
                                <option value="" selected disabled>Choose Payment Type</option>
                                <option value="Cash">Cash</option>
                                <option value="Dana">Dana</option>
                                <option value="Ovo">Ovo</option>
                                <option value="Gopay">Gopay</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Debit Card">Debit Card</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">Tax (%) </label>
                            <input type="number"  disabled  placeholder="0%" class="form-control" >
                         </div> 

                         <template v-if="totalprice !== 0">
                              <div class="form-group">
                            <label for="">Payment Total </label>
                            <input type="number"  disabled  :value="totalprice" class="form-control" >
                         </div>
                         </template>
                        
                        <template v-if="booking.payment_type == 'Cash'">
                            <div class="form-group">
                                <label for="">Amount </label>
                                <input type="number" v-model="booking.amount"  class="form-control" >
                            </div> 
                        </template>
                        <template v-else-if="booking.payment_type == 'Ovo'">
                            <div class="form-group">
                              <label for="">Phone Number </label>
                              <input type="number" v-model="booking.phone_number"  class="form-control" >
                          </div> 
                        </template>

                        <template v-else-if="booking.payment_type == 'Gopay'">
                             <div class="form-group">
                              <label for="">Phone Number </label>
                              <input type="number" v-model="booking.phone_number"  class="form-control" >
                           </div> 
                        </template>

                         <template v-else-if="booking.payment_type == 'Dana'">
                             <div class="form-group">
                              <label for="">Phone Number </label>
                              <input type="number" v-model="booking.phone_number"  class="form-control" >
                           </div> 
                        </template>

                        <template v-else-if="booking.payment_type == 'Credit Card'">
                                <div class="form-group">
                                  <label for="">Account Number </label>
                                  <input type="number" v-model="booking.no_cc" class="form-control" >
                               </div> 
                              
                              <div class="form-group">
                                <label for="">Bank </label>
                                <input type="text" v-model="booking.bank" class="form-control" >
                             </div>

                             <div class="row">
                               <div class="col-md-6">
                                    <div class="form-group">
                                      <label for="">Expired Date </label>
                                      <input type="date" v-model="booking.expired_date"  class="form-control">
                                    </div> 
                               </div>
                               <div class="col-md-6">
                                      <div class="form-group">
                                        <label for="">CVV </label>
                                        <input type="number" v-model="booking.cvv"  class="form-control" >
                                      </div> 
                               </div>
                             </div>

                        </template>

                        <template v-else-if="booking.payment_type == 'Debit Card'">
                                <div class="form-group">
                                  <label for="">Account Number </label>
                                  <input type="number" v-model="booking.no_cc" class="form-control" >
                               </div> 
                              
                              <div class="form-group">
                                <label for="">Bank </label>
                                <input type="text" v-model="booking.bank" class="form-control" >
                             </div>
                        </template>
               
                      <div class="form-group">
                        <label for="">Attachment</label>
                        <input type="file" name="attachment" id="attachment" @change="previewAttachment" class="form-control" >
                      </div>

                    <div class="form-group">
                        <label for="">Status</label>
                        <select  v-model="booking.payment_status" class="form-control" >
                            <option value="" selected disabled>Choose Status Payment</option>
                            <option value="" >Unpaid</option>
                            <option value="DP">Dp</option>
                            <option value="Deposite">Deposite</option>
                            <option value="Pelunasan">Pelunasan</option>
                        </select>
                    </div>
                  
                    </div>
                  </div>       
                </div>
              </div>        
              <div>
                <button type="submit" class="btn btn-primary d-flex align-items-center ">
                  Save
                  <template v-if="loading">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.6081871345029237s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(30 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.461988304093567s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(60 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.3157894736842104s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.1695906432748537s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(120 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.023391812865497s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(150 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.8771929824561403s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.7309941520467835s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(210 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.5847953216374269s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(240 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.43859649122807015s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.29239766081871343s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(300 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.14619883040935672s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(330 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> <!-- [ldio] generated by https://loading.io/ --></svg>
                </template>
                </button>
                <button class="btn btn-neutral">Reset</button>
              </div>
               </form>
            </div>
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
import { useRouter } from "vue-router";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import sidebar from "@/components/Sidebar.vue";
export default {
  name: "addBooking",
  components: {
    sidebar,
    v_footer,
    navbar,
  },
  data(){
    return{
      booking:{
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
        payment_type:'',
        phone_number:'',
        account_number:'',
        no_cc:'',
        no_dc:'',
        expired_date:'',
        cvv:'',
        bank:'',
        pay_at:'',
        deposit:'',
        attachment:'',
        payment_status:'',
        roomtype_id:'',
        amount:'',
        room_id:'',
        price_id:'',
        service_id:[],
        name:'',
        email:'',
        phone:'',
        birthday:'',
        city:'',
        province:'',
        postal_code:'',
        region:'',
        address:''
      },
      roomtype:[],
      ekstraservice:[],
      dataRoom:[],
      dataPrice:[],
      totalservice:0,
      totalroom:0,
      loading : false,
      router: useRouter(),
      totalduration:0
    }
  },
  updated() {
    for (let index = 0; index < this.roomtype.length; index++) {
        if (this.roomtype[index].id == this.booking.roomtype_id) {
          this.dataRoom = this.roomtype[index].room;
          this.dataPrice = this.roomtype[index].room_price;
          this.totalroom = this.dataPrice[0].price;
          this.booking.price_id = this.dataPrice[0].id;
          break;
        }
    }

      let miliday = 24 * 60 * 60 * 1000;
      let date1 = new Date(this.booking.check_in);
      let date2 = new Date(this.booking.check_out);
      this.totalduration = (Date.parse(date2) - Date.parse(date1))/miliday;

  },
  computed: {
    totalprice(){
      if (this.totalduration == 0) {
        return  parseInt(this.totalroom)  + parseInt(this.totalservice) ;   
      }else{
        return  (parseInt(this.totalroom) * this.totalduration)  + parseInt(this.totalservice) ;   
      }
        
    },
    
    duration(){
      let miliday = 24 * 60 * 60 * 1000;
      let date1 = new Date(this.booking.check_in);
      let date2 = new Date(this.booking.check_out);
      return (Date.parse(date2) - Date.parse(date1))/miliday;
    }
  },
  mounted() {

    this.getRoom();
    this.getEkstraService();
  },
  methods: {
    async getRoom(){
      let response = await axios.get('api/roomtype');
      if (response.status == 200) {
          this.roomtype = response.data.data
      } else {
          console.log('data tidak dapat diambil');
      }
    },
    async getEkstraService(){
      let response = await axios.get('api/services/ekstraservice');
      if (response.status == 200) {
          this.ekstraservice = response.data.data
      } else {
          console.log('data tidak dapat diambil');
      }
    },

    priceservice(price){
      this.totalservice = parseInt(this.totalservice) + parseInt(price);
    },

    previewIdCard(e){
      this.booking.idcard_photo = e.target.files[0];
      console.log(this.booking.idcard_photo);
    },

      previewAttachment(e){
      this.booking.attachment = e.target.files[0];
      console.log(this.booking.attachment);
    },

    async addBooking(){
      this.loading = true;
      let fd = new FormData();
      fd.append('booking_date',this.booking.booking_date);
      fd.append('market_segment',"Umum");
      fd.append('booking_type',this.booking.booking_type);
      fd.append('idcard_type',this.booking.idcard_type);
      fd.append('idcard_number',this.booking.idcard_number);
      fd.append('idcard_photo',this.booking.idcard_photo);
      fd.append('check_in',this.booking.check_in);
      fd.append('check_out',this.booking.check_out);
      fd.append('price_total',this.totalprice);
      fd.append('less_cost',this.totalprice);
      fd.append('room_id',this.booking.room_id);
      fd.append('duration',this.totalduration);
      fd.append('roomPrice_id',this.booking.price_id);
      fd.append('roomtype_id',this.booking.roomtype_id);
      
      for (let index = 0; index < this.booking.service_id.length; index++) {
         fd.append('service_id[]',this.booking.service_id[index])
      }

      fd.append('name',this.booking.name);
      fd.append('email',this.booking.email);
      fd.append('phone',this.booking.phone);
      fd.append('birthday',this.booking.birthday);
      fd.append('city',this.booking.city);
      fd.append('province',this.booking.province);
      fd.append('postal_code',this.booking.postal_code);
      fd.append('region',this.booking.region);
      fd.append('address',this.booking.address);
      
      fd.append('payment_type',this.booking.payment_type);
      fd.append('tax',0);
      fd.append('amount',this.booking.amount);
      fd.append('phone_number',this.booking.phone_number);
      fd.append('no_cc',this.booking.no_cc);
      fd.append('no_dc',this.booking.no_dc);
      fd.append('bank',this.booking.bank);
      fd.append('attachment',this.booking.attachment);
      fd.append('payment_status',this.booking.payment_status); 
      fd.append('deposit',this.booking.deposit); 
      
      try {
          let response = await axios.post('api/booking/checkout',fd);  
          if (response.status == 200) {
              this.loading = false;
             createToast('data berhasil diubah',
              {
                showIcon: 'true',
                position: 'top-right',
                type: 'success',
                transition: 'bounce',
              });
             this.router.push({
                    name : 'booking'
              })
          }else{
            this.loading = false;
            console.log("gagal");
          }
      } catch (error) {
         this.loading = false;
         console.log(error);
      }
      
    },
    setduration(duration){
      this.totalduration = duration;
    }


  },
};
</script>
