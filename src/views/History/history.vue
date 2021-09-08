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
            <h6 class="h2 text-white d-inline-block mb-0">History</h6>
            <nav
              aria-label="breadcrumb"
              class="d-none d-md-inline-block ml-md-4"
            >
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item">
                  <a href="datatables.html#"><i class="fas fa-home"></i></a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  History
                </li>
              </ol>
            </nav>
          </div>
          <!-- <div class="col-lg-6 col-5 text-right">
              <a href="addRoomStatus.html" class="btn btn-sm btn-neutral">Tambah Data</a>
            </div> -->
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
            <h3 class="mb-0">Datatable History</h3>
          </div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-buttons">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Foto</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Zudha Pratama</td>
                  <td>zudhapratama@gmail.com</td>
                  <td>085784260416</td>
                  <td>
                    <!-- <img src="../assets/img/theme/team-1.jpg" class="avatar rounded-circle mr-3"> -->
                  </td>
                  <td>
                    <button class="btn btn-primary btn-sm">
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
                <tr>
                  <td>1</td>
                  <td>Budi Pratama</td>
                  <td>budiprtm@gmail.com</td>
                  <td>085896405623</td>
                  <td>
                    <!-- <img src="../assets/img/theme/team-1.jpg" class="avatar rounded-circle mr-3"> -->
                  </td>
                  <td>
                    <button class="btn btn-primary btn-sm">
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
  </div>
</template>

<script>
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import sidebar from "@/components/Sidebar.vue";
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "history",
  components: {
    sidebar,
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
