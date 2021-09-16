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
            <h6 class="h2 text-white d-inline-block mb-0">Room Status</h6>
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4" >
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item">
                  <a href="datatables.html#"><i class="fas fa-home"></i></a>
                </li>
                <li class="breadcrumb-item">
                  <a href="datatables.html#">Tables</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Room Status
                </li>
              </ol>
            </nav>
          </div>
          <div class="col-lg-6 col-5 text-right">
            <a class="btn btn-sm btn-neutral">
                <router-link to="/RoomStatus/addRoomStatus">Tambah Data</router-link>
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
            <h3 class="mb-0">Datatable Room Status</h3>
          </div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-basic">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>No Room</th>
                  <th>Type Room</th>
                  <th>Floor</th>
                  <th>Tanggal Update</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(rooms,index) in room" :key="index">
                  <td>{{index + 1}}</td>
                  <td>{{rooms.no_room}}</td>
                  <td>{{rooms.room_type.name}}</td>
                  <td>{{rooms.floor}}</td>
                  <td>{{rooms.updated_at}}</td>
                  <td v-if="rooms.room_status == 'Vacant Clean'"> <span class="badge badge-primary">{{rooms.room_status}}</span></td>
                  <td v-else-if="rooms.room_status == 'Occupied'"> <span class="badge badge-info">{{rooms.room_status}}</span></td>
                  <td v-else-if="rooms.room_status == 'Vacant Dirty'"> <span class="badge badge-warning">{{rooms.room_status}}</span></td>
                  <td v-else-if="rooms.room_status == 'Out Of Order'"> <span class="badge badge-danger">{{rooms.room_status}}</span></td>
                  <td>
                    <router-link to="/roomstatus"><span class="btn btn-info btn-sm mr-1"><i class="fas fa-eye"></i></span></router-link>
                    <router-link :to=" {name: 'roomstatus.edit', params:{id:rooms.id} } "><span class="btn btn-success btn-sm mr-1"><i class="fas fa-edit"></i></span></router-link>
                    <button class="btn btn-danger btn-sm" @click.prevent=""><i class="fas fa-trash"></i></button>
                  </td>
                </tr>
               
              </tbody>
            </table>
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


export default {
  name: "RoomStatus",
  components: {
    sidebar,
    v_footer,
    navbar,
  },
 data(){
   return{
     room:[],
   }
 },
 mounted() {
   this.getRoom();
 },
 methods: {
   async getRoom(){
     let response = await axios.get('api/room')
     if (response.status == 200) {
        this.room = response.data.data
     } else {
       console.log('gagal');
     }
   }
 },
};
</script>
