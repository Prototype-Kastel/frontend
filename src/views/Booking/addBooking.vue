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
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">No Booking</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">Tanggal Booking</label>
                    <input type="date" class="form-control">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">Dipesan Oleh</label>
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
                  <label for="">Order Via</label>
                  <select name="" id="" class="form-control">

                    <option value="" selected>Online</option>
                    <option value="">Offline</option>
                  </select>
                </div>
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
              <label for="">Tambah Pesanan Kamar</label>
              <div class="form-group" style="float: right">
                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addkamar">Tambah
                  Data</button>
              </div>
              <div class="table-responsive py-4">
                <table class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th>No</th>
                      <th>Room Type</th>
                      <th>Room Number</th>
                      <th>Floor</th>
                      <th>Price</th>
                      <th>Exstra Service</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="py-3">1</td>
                      <td>
                        Medium
                      </td>
                      <td>B17</td>
                      <td>3</td>
                      <td>Rp.300.000</td>
                      <td>Kipas Angin , Megicom , Setrika</td>
                      <td class="py-3">
                        <button type="button" class="btn btn-success btn-sm" data-toggle="modal"
                          data-target="#addkamar"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>

                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <br><br>
              <label for="">Tambah Tamu</label>
              <div class="form-group" style="float: right">
                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addtamu">Tambah
                  Data</button>
              </div>
              <div class="table-responsive py-4">
                <table class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th>No</th>
                      <th>Nama Tamu</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>id card photo </th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="py-3">1</td>
                      <td>
                        Zudha Pratama
                      </td>
                      <td>Kediri</td>
                      <td>zudhapratama123@gmail.com</td>
                      <td>+6285784260416</td>
                      <td></td>
                      <td class="py-3">
                        <button type="button" class="btn btn-success btn-sm" data-toggle="modal"
                          data-target="#addtamu"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>

                      </td>
                    </tr>
                    <div class="Tamu"></div>
                  </tbody>
                </table>
              </div>
              <br><br>
              <div>
                <button class="btn btn-primary ">Save</button>
                <button class="btn btn-neutral">Reset</button>
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
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "addBooking",
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
