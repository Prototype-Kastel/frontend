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
            <form @submit.prevent="" >
              <div class="row">
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-body">
                          <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">No Booking</label>
                          <input type="text"  class="form-control">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Booking Date</label>
                          <input type="date" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">Order By</label>
                      <div class='input-group date' id='datetimepicker1'>
                        <input type='text' class="form-control" />
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
                          <input type="text" class="form-control" value="umum">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Order Via</label>
                          <select name="" id="" class="form-control">

                            <option value="" selected>Online</option>
                            <option value="">Offline</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="">ID Card Type</label>
                            <select name="" id="" class="form-control"> 
                              <option value="" selected disabled>Choose yout ID Card</option>
                              <option value="SiM">SIM</option>
                              <option value="KTP">KTP</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="">ID Card Number</label>
                            <input type="number" class="form-control">
                          </div>
                        </div>
                    </div>
                    <div class="form-group">
                      <label for="">ID Card Photo</label>
                      <input type="file" class="form-control">
                    </div>
                      
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Check In</label>
                              <input type="date" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label for="">Check Out</label>
                            <input type="date" class="form-control">
                          </div>
                      </div>
                      </div>
                    </div>
                  
                </div>

                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="form-group">
                        <label for="">No Kamar</label>
                        <select  v-model="booking.room_id" @change="dataroom" class="form-control">
                            <option value="" selected disabled>Choose your Room</option>
                            <option v-for="(rooms,index) in this.room" :key="index" :value="rooms.id">{{rooms.no_room}}</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="">Room Type</label>
                        <input type="text" class="form-control" disabled>
                      </div>
                       <div class="form-group">
                        <label for="">Price</label>
                        <input type="text" class="form-control" disabled>
                      </div>
                       <div class="form-group">
                        <label for="">Ekstra Service</label>
                         <select name="" id="" class="form-control" multiple>
                          <option value="" selected disabled>Choose Esktra Service</option>
                          <option v-for="(services,index) in ekstraservice" :key="index" :value="services.id" >{{services.name}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>         
              <div>
                <button class="btn btn-primary ">Save</button>
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

export default {
  name: "addBooking",
  components: {
    v_footer,
    navbar,
  },
  data(){
    return{
      booking:{
        no_booking:'',
        market_segment:'',
        booking_type:'',
        idcard_type:'',
        idcard_number:'',
        idcard_photo:'',
        price_total:'',
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
        room_id:'',
        service:[]
      },
      room:[],
      ekstraservice:[],
    }
  },
  mounted() {
    this.getRoom();
    this.getEkstraService();
  },
  methods: {
    async getRoom(){
      let response = await axios.get('api/room/getroomavailable');
      if (response.status == 200) {
          this.room = response.data.data
      } else {
          console.log('data tidak dapat diambil');
      }
    },
    dataroom(e){
        let data = e.target.data;
        console.log(data);
    },
    async getEkstraService(){
      let response = await axios.get('api/services/ekstraservice');
      if (response.status == 200) {
          this.ekstraservice = response.data.data
      } else {
          console.log('data tidak dapat diambil');
      }
    }
    
  },
};
</script>
