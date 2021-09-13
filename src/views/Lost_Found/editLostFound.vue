<template>
  <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar />
    <div class="container-fluid"></div>
  </div>
  <div class="container-fluid mt--6">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h3 class="mb-0">Edit Lost Found</h3>
          </div>
        
          <div class="card-body">
           
            <div class="form-group">
              <label for="">Data Fasilitas</label>

              <div class="table-responsive py-4">
                <table class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th>Fasilitas</th>
                      <th>Deskripsi</th>
                      <th>Check</th>
                      <th>Updated At</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(facilities,index) in facility" :key="index">
                         <td>{{facilities.service.name}}</td>
                        <td>{{facilities.status}}</td>
                        <td>
                          <button class="btn btn-danger btn-sm"  @click.prevent="setStatus(facilities.id,'Broken')">Broken</button>
                          <button class="btn btn-primary btn-sm"  @click.prevent="setStatus(facilities.id,'Save')">Save</button>
                          <button class="btn btn-warning btn-sm"  @click.prevent="setStatus(facilities.id,'Lost')">Lost</button>
                        </td>
                        <td>{{ getMoment(facilities.updated_at) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          <form >
            <template v-if="lostfound == ''">
                  <div class="form-group">
                    <label>Found</label>
                    <input type="text" class="form-control" v-model="service.datafound" multiple>
                    
                </div>
            </template>
            <template v-else>
                  <div class="table-responsive py-4">
                <table class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th>Found</th>
                      <th>Status</th>
                      <th>Updated At</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(lostFound,index) in lostfound" :key="index">
                        <td>{{lostfound.service.name}}</td>
                        <td>{{lostfound.status}}</td>
                        <td>
                          <button class="btn btn-danger btn-sm"  @click.prevent="setStatus(lostfound.id,'Broken')">Broken</button>
                          <button class="btn btn-primary btn-sm"  @click.prevent="setStatus(lostfound.id,'Save')">Save</button>
                          <button class="btn btn-warning btn-sm"  @click.prevent="setStatus(lostfound.id,'Lost')">Lost</button>
                        </td>
                        <td>{{ getMoment(lostfound.updated_at) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>

            <div class="form-group">
              <label for="">Status Kamar</label>
              <select v-model="room.room_status" name="room_status" id="room_status" class="form-control">
                <option value="Vacant Clean">Vacant Clean</option>
                <option value="Vacant Dirty">Vacant Dirty</option>
                <option value="Occupied">Occupied</option>
                <option value="Out Of Order">Out Of Order</option>
              </select>
            </div>

            <div class="form-group">
              <button  class="btn btn-primary">Save</button>
              <button class="btn btn-neutral">Reset</button>
            </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Data Room</h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="">Room Type</label>
              <input type="text" class="form-control" :value="roomtype.name" disabled />
            </div>
            <div class="form-group">
              <label for="">No Room</label>
              <input type="text" class="form-control" :value="room.no_room" disabled />
            </div>
            <div class="form-group">
              <label for="">Floor</label>
              <input type="text" class="form-control" :value="room.floor" disabled />
            </div>
            <div class="form-group">
              <label for="">Status Room</label>
              <input type="text" class="form-control" :value="room.room_status" disabled />
            </div>
             <div class="form-group">
              <label for="">Update On</label>
              <input type="text" class="form-control" :value=" getMoment(room.updated_at) " disabled />
            </div>
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
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import moment from 'moment';




export default {
  name: "editLostFound",
  components: {
    v_footer,
    navbar
  },
 data(){
   return{
     lostfound:[],
     facility:[],
     room:[],
     roomtype:[],
     bookingDetail:[],
     service:{
       status:'',
       datafound:[]
     },
    
     
   }
 },
 updated() {
   console.log(this.service.datafound);
 },
 mounted() {
   this.getBooking();
 },
 methods: {
   async getBooking(){
       let response = await axios.get(`api/lostfound/${this.$route.params.id}`);
      if (response.status ==200) {
          this.bookingDetail = response.data.data
          this.room = response.data.data.room
          this.facility = response.data.data.room.room_facility
          this.roomtype = response.data.data.room.room_type
          this.lostfound = response.data.data.lostfound
          
      }else{
        console.log('gagal');
      }

   },
    getMoment(date){
     return moment(date).fromNow();
   },
   async setStatus(id,status){

     this.service.status = status; 
     let response = await axios.put(`api/lostfound/setstatus/${id}`,this.service);
     if (response.status == 200) {
        console.log("sukses");
        createToast('data berhasil diubah',
              {
              showIcon: 'true',
              position: 'top-right',
              type: 'success',
              transition: 'bounce',
              });
        
     }else{
       console.log("gagal");
     } 
   },
    upload(){
     console.log(this.service.lostfound);
   }
 },
};
</script>

