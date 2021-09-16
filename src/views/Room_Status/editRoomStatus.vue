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
            <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4" >
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item">
                  <a href="dashboard.html#"><i class="fas fa-home"></i></a>
                </li>
                <li class="breadcrumb-item">
                  <a href="dashboard.html#">Dashboards</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Default
                </li>
              </ol>
            </nav>
          </div>
             <div class="col-lg-6 col-5 text-right">
                <a class="btn btn-sm btn-neutral">
                  <router-link to="/roomstatus">kembali</router-link>
                </a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt--6">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h3 class="mb-0">Edit Room Status</h3>
          </div>

          <div class="card-body">
            <div class="form-group">
              <label for="">Data Fasilitas</label>
            </div>
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
                 <tr v-for="(facility,index) in roomfacility" :key="index">
                  <td>{{facility.service.name}}</td>
                  <td>{{facility.status_facility}}</td>
                  <td>
                    <button class="btn btn-danger btn-sm"  @click.prevent="setStatus(facility.id,'Broken')">Broken</button>
                    <button class="btn btn-primary btn-sm"  @click.prevent="setStatus(facility.id,'Save')">Save</button>
                    <button class="btn btn-warning btn-sm"  @click.prevent="setStatus(facility.id,'Lost')">Lost</button>
                  </td>
                  <td>{{ getMoment(facility.updated_at) }}</td>
                 </tr>
                </tbody>
              </table>
            </div>
          <form @submit.prevent="roomStatus()">
            <div class="form-group">
              <label for="">Status Kamar</label>
              <select v-model="room.room_status" name="room_status" id="room_status" class="form-control">
                <option value="Vacant Clean">Vacant Clean</option>
                <option value="Vacant Dirty">Vacant Dirty</option>
                <option value="Occupied">Occupied</option>
                <option value="Out Of Order">Out Of Order</option>
              </select>
            </div>
            <div class="form-group d-flex">
              <button type="submit" class="btn btn-primary d-flex align-items-center">
                Save
                 <template v-if="loading">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.6081871345029237s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(30 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.461988304093567s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(60 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.3157894736842104s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.1695906432748537s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(120 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.023391812865497s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(150 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.8771929824561403s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.7309941520467835s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(210 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.5847953216374269s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(240 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.43859649122807015s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.29239766081871343s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(300 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.14619883040935672s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(330 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> <!-- [ldio] generated by https://loading.io/ --></svg>
                </template>
                </button>
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
              <input type="text" class="form-control" :value="room.updated_at" disabled />
            </div>
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
import sidebar from "@/components/Sidebar.vue";
import { useRouter } from "vue-router";
import moment from 'moment';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: "editRoomStatus",
  components: {
    sidebar,
    v_footer,
    navbar
    
  },
 data() {
   return {
     room:[],
     roomfacility:[],
     loading:false,
     roomtype:'',
     setfacility:{
       status_facility:'',
       room_status:''
     },
     status_room:'',
     router : useRouter()
   }
 },
 mounted() {
   this.getRoom();
 },
 methods: {
   async getRoom(){
     let response = await axios.get(`api/room/${this.$route.params.id}/show`)
     if (response.status == 200) {
        this.room = response.data.data;
        this.setfacility.room_status = response.data.data.room_status
        this.roomtype = response.data.data.room_type
        this.roomfacility =response.data.data.room_type.room_type_facility

        console.log(this.room);
     } else {
       console.log('gagal');
     }
   },
  async setStatus(id,status){
     this.setfacility.status_facility = status; 
     let response = await axios.put(`api/room/${id}/setstatus`,this.setfacility);
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
   getMoment(date){
     return moment(date).fromNow();
   },
   async roomStatus(){
     this.loading = true;
     this.status_room = this.room.room_status;
     let fd = new FormData();
     fd.append('room_status',this.status_room);
     
     let response = await axios.post(`api/room/setStatusRoom/${this.$route.params.id}`,fd)
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
                    name : 'roomstatus'
              })
     } else {
       this.loading = false;
        createToast('data gagal diubah',
              {
              showIcon: 'true',
              position: 'top-right',
              type: 'error',
              transition: 'bounce',
              });
     }
   }

 },
};
</script>
