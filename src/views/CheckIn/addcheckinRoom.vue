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
              <h3 class="mb-0">Tambah Data Booking</h3>
            </div>
            <div class="card-body">
            <form @submit.prevent="addBooking()">
                
                  <div class="card">
                    <div class="card-header">
                      Total Biaya
                    </div>
                    <div class="card-body bg-primary">
                      <div class="container ">
                            <h5 class="text-white">Total Biaya Ekstra service adalah : {{price}}</h5>
                            <h5 class="text-white">Total Biaya Ekstra service adalah : {{totalservice}}</h5> <br>
                            <h5 class="text-white">Total Biaya room adalah : {{totalroom}} x {{duration}} hari =  {{totalprice}} </h5>
                            <h5 class="text-white">Total Durasi adalah : {{duration}} hari  </h5>
                            <template v-if="totalprice !== NaN">
                                <h5 class="text-white">Total Biaya  adalah : {{this.addprice}} </h5>
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
                  <div class=" form-group d-flex align-items-center ">
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
</template>

<script>
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: "addcheckinRoom",
  components: {
    v_footer,
    navbar,
  },
  data(){
    return{
      booking:{
        roomtype_id:'',
        room_id:'',
        price_id:'',
        service_id:[],
      },
      roomtype:[],
      ekstraservice:[],
      dataRoom:[],
      dataPrice:[],
      totalservice:0,
      totalroom:0,
      loading : false,
      router: useRouter(),
      duration:'',
      price:0,
      addprice:0
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
    this.addprice = (parseInt(this.totalroom) * this.duration)  + parseInt(this.totalservice) + parseInt(this.price);
  },
  computed: {
    totalprice(){
     return  (parseInt(this.totalroom) * this.duration)  + parseInt(this.totalservice) ;  
    },
  },
  mounted() {
    this.getRoom();
    this.getEkstraService();
    this.getBooking();
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
    async getBooking(){
      let response = await axios.get(`api/booking/${this.$route.params.id}/show`)
      if (response.status == 200) {
         this.duration = response.data.data.duration;
         this.price = response.data.data.price_total;
      }
    },
    priceservice(price){
      this.totalservice = parseInt(this.totalservice) + parseInt(price);
    },

    async addBooking(){
      this.loading = true;
      let fd = new FormData();
   
      fd.append('price_total',this.addprice);
      fd.append('addcost',this.totalprice);
      fd.append('room_id',this.booking.room_id);
      fd.append('roomPrice_id',this.booking.price_id);
      fd.append('roomtype_id',this.booking.roomtype_id);
      
      for (let index = 0; index < this.booking.service_id.length; index++) {
         fd.append('service_id[]',this.booking.service_id[index])
      }

      try {
          let response = await axios.post(`api/booking/${this.$route.params.id}/addroom`,fd);  
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
                    name : 'booking.edit'
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

  },
};
</script>
