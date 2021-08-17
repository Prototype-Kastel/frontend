<template>
  <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar />
    <div class="container-fluid">
      <div class="header-body">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 col-7">
            <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
            <nav
              aria-label="breadcrumb"
              class="d-none d-md-inline-block ml-md-4"
            >
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
            <router-link to="/roomType/create">
              <span class="btn btn-neutral btn-sm">Tambah Data</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt--4">
    <div class="row">
      <div class="col">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h3 class="mb-0">Datatable Room Type</h3>
          </div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-basic">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Bed Type</th>
                  <th>Capacity</th>
                  <th>Size</th>
                  <th>Availability</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(itemRoomType, index) in roomType.data"
                  v-bind:key="index"
                >
                  <td>{{ itemRoomType.id }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info btn-sm"
                      data-toggle="modal"
                      data-target="#price"
                    >
                      {{ itemRoomType.name }}
                    </button>
                  </td>
                  <td>{{ itemRoomType.bed_type }}</td>
                  <td>{{ itemRoomType.capacity }}</td>
                  <td>{{ itemRoomType.size }}</td>
                  <td>
                    <span class="badge badge-info badge-lg"
                      >{{ itemRoomType.active }}/10</span
                    >
                  </td>
                  <td>
                    <router-link to="/service"><span class="btn btn-info btn-sm mr-1"><i class="fas fa-eye"></i></span></router-link>
                    <router-link :to=" {name: 'itemRoomType.edit', params:{id:itemRoomType.id} } "><span class="btn btn-success btn-sm mr-1"><i class="fas fa-edit"></i></span></router-link>
                    <router-link to="/service"><span class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></span></router-link>
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
  



</template>

<script>
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import axios from "axios";
import { onMounted, ref} from 'vue'
export default {
  name: "RoomType",
  components: {
    v_footer,
    navbar,
  },
  setup(){
    let roomType = ref([]);

    onMounted(() =>  {
      // get data from api endpoint
      axios.get('http://127.0.0.1:8000/api/roomtype')
      .then((result) => {
        roomType.value = result.data
      }).catch((err) =>{
        console.log(err.response)
      });
    });

    return {
      roomType
    }

  }
};
</script>
