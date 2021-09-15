<template>
  <navbar-customer />
  <!-- Hero Section Begin -->
  
  <div class="main-content " id="panel">
    <div class="header bg-primary pb-6">
      <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <!-- Navbar links -->
            <ul class="navbar-nav align-items-center ml-md-auto">
              <li class="nav-item d-xl-none">
                <!-- Sidenav toggler -->
                <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin"
                  data-target="#sidenav-main">
                  <div class="sidenav-toggler-inner">
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>

    <div class="container-fluid mt-3 ">
      <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">Pesanan Anda</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="">No Pesanan</label>
                    <input type="text" class="form-control" value="B10007">
                  </div>
                  <div class="form-group">
                    <label for="">Tanggal Booking</label>
                    <input type="text" class="form-control" value="29 Mei 2021">
                  </div>
                  <div class="form-group">
                    <label for="">Nama Pemesan</label>
                    <input type="text" class="form-control" value="Zudha Pratama">
                  </div>
                  <div class="form-group">
                    <label for="">Ekstra Service</label>
                    <form action="" style="border: 0.5px solid grey;">
                      <div>
                        <input type="text" class="form-control" value="Wifi , Kamar Mandi , Setrika "
                          data-toggle="tags" />
                      </div>
                    </form>
                  </div>
                  <div class="form-group">
                    <label for="">Status Pembayaran</label>
                    <p class="mt-2"><span class="badge badge-danger badge-lg">Unpaid</span></p>
                    <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target="#exampleModal">
                      Upload Bukti Pembayaran
                    </button>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="card mt-3">
                    <div class="card-body">
                      <h3 class="card-title">Payment Detail</h3>
                      <hr>
                      <table>
                        <thead>
                          <tr>
                            <th class="col">Jenis Biaya</th>
                            <th class="col">Harga</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="col">Harga Kamar</td>
                            <td class="col">Rp.300.000</td>
                          </tr>
                          <tr>
                            <td class="col">Kode Unik</td>
                            <td class=" col text-success">+ 0.014</td>
                          </tr>
                          <tr class="bg-info text-white">
                            <td class="col">Total</td>
                            <td class="col"> Rp.300.014</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <label for=""><b>Kamar yang di pesan</b> </label>
                  <div class="owl-carousel owl-theme">
                    <div class="item">
                      <div class="card">

                        <!-- Card image -->
                        <img class="card-img-top h-25" src="img/room/room-5.jpg" alt="Image placeholder">
                        <!-- Card body -->
                        <div class="card-body">
                          <div class="form-group">
                            <button type="menu" class="btn btn-outline-primary btn-sm" disabled>Male</button>
                            <button disabled="disabled" class="btn btn-primary btn-sm">Available</button>
                          </div>
                          <h6 class="h2 card-title mb-0">Flutter Room</h6>
                          <h5 class="card-text"> Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus..</h5>
                          <h4 class="card-text"> <b>Jakarta Selatan</b></h4>
                          <small class="text-muted">Kamar Mandi,Wifi,Dapur,Parkir</small>
                          <h4 class="card-text"><b>Rp.300.000/Nigth</b></h4>

                        </div>

                      </div>
                    </div>
                    <div class="item">
                      <div class="card">

                        <!-- Card image -->
                        <img class="card-img-top h-25" src="img/room/room-4.jpg" alt="Image placeholder">
                        <!-- Card body -->
                        <div class="card-body">
                          <div class="form-group">
                            <button type="menu" class="btn btn-outline-primary btn-sm" disabled>Male</button>
                            <button disabled="disabled" class="btn btn-primary btn-sm">Available</button>
                          </div>
                          <h6 class="h2 card-title mb-0">Medium Room</h6>
                          <h5 class="card-text"> Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus..</h5>
                          <h4 class="card-text"> <b>Jakarta Selatan</b></h4>
                          <small class="text-muted">Kamar Mandi,Wifi,Dapur,Parkir</small>
                          <h4 class="card-text"><b>Rp.300.000/Nigth</b></h4>

                        </div>

                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavbarCustomer from "@/components/NavbarCustomer.vue";
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "CustomerDetailBooking",
  components: {
    NavbarCustomer,
  },
};
</script>
