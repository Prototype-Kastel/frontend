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
                <router-link to="/LostFound/addLostFound">Tambah Data</router-link>
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
            <h3 class="mb-0">Datatable Lost Found</h3>
          </div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-basic">
              <thead class="thead-light">
                <tr>
                  
                  <th>Name Room</th>
                  <th>Type Room</th>
                  <th>Lost</th>
                  <th>Found</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                    <tr v-for="(bookings,index) in bookingDetail" :key="index">
                       <template v-if="bookings.booking != null">
                         
                         <td>{{bookings.room.no_room}}</td>
                         <td>{{bookings.room.room_type.name}}</td>
                         <template v-if="bookings.lostfound != ''">
                            <td>
                              <span></span>
                            </td>
                         </template>
                         <template v-else>
                            <td><span class="badge badge-primary">Empty</span></td>
                            <td><span class="badge badge-primary">Empty</span></td>
                         </template>
                         <td>{{bookings.room.room_status}}</td>
                         <td>
                          <router-link to="/roomstatus"><span class="btn btn-info btn-sm mr-1"><i class="fas fa-eye"></i></span></router-link>
                          <router-link :to=" {name: 'lostfound.edit', params:{id:bookings.id} } "><span class="btn btn-success btn-sm mr-1"><i class="fas fa-edit"></i></span></router-link>
                          <button class="btn btn-danger btn-sm" @click.prevent=""><i class="fas fa-trash"></i></button>
                         </td>
                       </template>

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
  name: "LostFound",
  components: {
    sidebar,
    v_footer,
    navbar,
  },
  data(){
    return{
      bookingDetail:[],
      lostfound:[],
      count:1,
    }
  },
  mounted() {
     this.getLostFound();
  },
  methods: {
    async getLostFound(){
      let response = await axios.get(`api/lostfound`);
      if (response.status ==200) {
          this.bookingDetail = response.data.data
          this.lostfound = response.data.data.lostfound
          
          
      } else {
        console.log('gagal ambil');
      }
    },
  },
 
};
</script>
