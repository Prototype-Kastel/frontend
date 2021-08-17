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
            <router-link to="/roomType/addRoomType">
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
          <div class="table-responsive py-4" v-if="roomtype.length > 0">
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
                  v-for="itemRoomType in roomtype"
                  v-bind:key="itemRoomType.id"
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
                    <button
                      type="button"
                      class="btn btn-info btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <a href="editCustomer.html" class="btn btn-success btn-sm"
                      ><i class="fas fa-edit"></i
                    ></a>
                    <button
                      class="btn btn-danger btn-sm"
                      data-toggle="sweet-alert"
                      data-sweet-alert="confirm"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
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
export default {
  name: "RoomType",
  components: {
    v_footer,
    navbar,
  },
  data() {
    return {
      roomtype: [],
    };
  },
  mounted() {
    axios
      .get("api/roomtype")
      .then((res) => (this.roomtype = res.data.data))
      .catch((err) => console.log(err));
  },
};
</script>
