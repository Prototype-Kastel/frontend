<template>
  <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar />
    <div class="container-fluid">
      <div class="header-body">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 col-7">
            <h6 class="h2 text-white d-inline-block mb-0">Booking</h6>
            <nav
              aria-label="breadcrumb"
              class="d-none d-md-inline-block ml-md-4"
            >
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item">
                  <a href="datatables.html#"><i class="fas fa-home"></i></a>
                </li>
                <li class="breadcrumb-item">
                  <a href="datatables.html#">Tables</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Booking
                </li>
              </ol>
            </nav>
          </div>
          <div class="col-lg-6 col-5 text-right">
            <a class="btn btn-sm btn-neutral">
                <router-link to="/Booking/addBooking">Tambah Data</router-link>
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
            <h3 class="mb-0">Booking</h3>
          </div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-basic">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>No Booking</th>
                  <th>Dipesan oleh</th>
                  <th>Nama Tamu</th>
                  <th>Check in</th>
                  <th>Check Out</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                
                <tr>
                  <td>3</td>
                  <td>000015</td>
                  <td>Tanwirul Adam</td>
                  <td>Yudha Bachtiar</td>
                  <td>31 Mei 2021</td>
                  <td>08 Juni 2021</td>
                  <td><span class="badge badge-primary">Paid</span></td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <router-link to="/Booking/editBooking" class="mr-2">
                        <a href="editBooking.html" class="btn btn-success btn-sm">
                            <i class="fas fa-edit"></i>
                        </a>
                    </router-link>
                    
                    <button
                      class="btn btn-danger btn-sm"
                      data-toggle="sweet-alert"
                      data-sweet-alert="confirm"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>000015</td>
                  <td>Muhammad Qulub</td>
                  <td>Yudha Bachtiar</td>
                  <td>31 Mei 2021</td>
                  <td>08 Juni 2021</td>
                  <td><span class="badge badge-warning">Cancelled</span></td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <router-link to="/Booking/editBooking" class="mr-2">
                        <a href="editBooking.html" class="btn btn-success btn-sm">
                            <i class="fas fa-edit"></i>
                        </a>
                    </router-link>
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
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "Booking",
  components: {
    v_footer,
    navbar,
  },
//   setup() {
//     let rooms = ref([]);

//     onMounted(() => {
//       // get data from api endpoint
//       axios
//         .get("api/room")
//         .then((result) => {
//           rooms.value = result.data;
//         })
//         .catch((err) => {
//           console.log(err.response);
//         });
//     });

//     return {
//       rooms,
//     };
//   },
};
</script>
