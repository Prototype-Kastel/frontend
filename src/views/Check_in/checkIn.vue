<template>
  <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar />
    <div class="container-fluid">
      <div class="header-body">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 col-7">
            <h6 class="h2 text-white d-inline-block mb-0">Check In</h6>
            <nav
              aria-label="breadcrumb"
              class="d-none d-md-inline-block ml-md-4"
            >
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item">
                  <a href="dashboard.html#"><i class="fas fa-home"></i></a>
                </li>
                <li class="breadcrumb-item">
                  <a href="dashboard.html#">Tables</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Check In
                </li>
              </ol>
            </nav>
          </div>
          <div class="col-lg-6 col-5 text-right">
            <a class="btn btn-sm btn-neutral">
              <router-link to="/roomprice/create">Tambah Data</router-link>
            </a>
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
            <h3 class="mb-0">Datatable Room Price</h3>
          </div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-basic">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>Room Type</th>
                  <th>Name Price</th>
                  <th>Price Type</th>
                  <th>Price</th>
                  <th>Start Date</th>
                  <th>Promo Code</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(itemCheckIn, index) in checkIn.data" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{ itemCheckIn.no_booking }}
                  </td>
                  <td>
                    {{ itemCheckIn.customer.name }}
                  </td>
                  <td>{{ itemCheckIn.check_in }}</td>
                  <td>{{ itemCheckIn.check_out }}</td>
                  <td>
                    <!-- <router-link to="/roomprice"
                      ><span class="btn btn-info btn-sm mr-1"
                        ><i class="fas fa-eye"></i></span
                    ></router-link>
                    <router-link
                      :to="{
                        name: 'roomprice.edit',
                        params: { id: itemRoomPrice.id },
                      }"
                      ><span class="btn btn-success btn-sm mr-1"
                        ><i class="fas fa-edit"></i></span
                    ></router-link>
                    <router-link to="/roomprice"
                      ><span class="btn btn-danger btn-sm"
                        ><i class="fas fa-trash"></i></span
                    ></router-link> -->
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
import navbar from "@/components/Navbar.vue";
import v_footer from "@/components/v_footer.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  name: "RoomPrice",
  components: {
    navbar,
    v_footer,
  },
  setup() {
    //  state reactuve
    let checkIn = ref([]);

    onMounted(() => {
      axios
        .get("api/booking")
        .then((result) => {
          checkIn.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });
    return {
      checkIn,
    };
  },
};
</script>

<style scoped>
</style>