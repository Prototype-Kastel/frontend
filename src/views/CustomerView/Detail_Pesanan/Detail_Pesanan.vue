<template>
  <navbar-customer />
  <!-- Hero Section Begin -->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <label for=""><b>Detail Pemesan</b></label> <br />
              <label for="">Nama</label>
              <p>Zudha Pratama</p>
              <label for="">Kontak</label>
              <p>+6285784260416</p>
              <label for="">Email</label>
              <p>Zudhapratama123@gmail.com</p>
            </div>
          </div>
          <div class="card mt-4" style="width: 18rem">
            <div class="card-body">
              <label for=""><b>Detail Tamu</b></label> <br />
              <label for="">Nama Tamu</label>
              <p>Zudha Pratama</p>
              <label for="">Kontak</label>
              <p>+6285784260416</p>
              <label for="">Email</label>
              <p>Zudhapratama123@gmail.com</p>
              <hr />
              <label for=""><b>Nomor Emergency</b></label
              ><br />
              <label for="">Nama </label>
              <p>Budi Sudarsono</p>
              <label for="">Kontak</label>
              <p>+6285784260416</p>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="media">
            <img src="img/kamar.jpg" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0 text-blue"><b>Bougenfill indah</b></h5>
              <div class="row mt-3">
                <div class="col-md-4">
                  <label for="">Check In</label>
                  <p>31 Mei 2021</p>
                </div>
                <div class="col-md-4">
                  <label for="">Check Out</label>
                  <p>08 Mei 2021</p>
                </div>
                <div class="col-md-4">
                  <label for="">Durasi</label>
                  <p>9 malam</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label for="">Status Kamar</label>
                    <p><span class="badge badge-primary">Available</span></p>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label for="">Gender</label>
                    <p><span>All</span></p>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label for="">Capacity</label>
                    <p><span>5 Orang</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mt-5">
              <div class="card-body">
                <label for=""><b>Ekstra Service Pesanan Anda</b></label> <br />
                <div class="row">
                  <div class="col-md-4">
                    <p>Setrika</p>
                    <p>Motor</p>
                    <p>Jemuran</p>
                    <p>Hanger</p>
                  </div>
                  <div class="col-md-4">
                    <p>Setrika</p>
                    <p>Motor</p>
                    <p>Jemuran</p>
                    <p>Hanger</p>
                  </div>
                  <div class="col-md-4">
                    <p>Setrika</p>
                    <p>Motor</p>
                    <p>Jemuran</p>
                    <p>Hanger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mt-5">
              <div class="card-body">
                <label for=""><b>Detail Harga</b></label> <br />
                <div class="container">
                  <div class="row">
                    <div class="col-md-8">
                      <label for="">1x Kamar Bougenfill Indah</label>
                    </div>
                    <div class="col-md-4">
                      <p>Rp.500.000</p>
                    </div>
                    <div class="col-md-8">
                      <label for="">5x Ekstra Service</label>
                    </div>
                    <div class="col-md-4">
                      <p>Rp.500.000</p>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <div class="card-footer bg-primary border-default">
                <div class="container">
                  <div class="row text-white">
                    <div class="col-md-8">
                      <label for="">total</label>
                    </div>

                    <div class="col-md-4">
                      <p>Rp.1000.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mt-5 mb-10">
              <div class="card-body">
                <label for=""><b>Kebijakan Hotel dan Kamar</b></label>
                <h5>Kebijakan Pembatalan</h5>
              </div>
            </div>
          </div>
          <div class="form-group mt-3" style="">
            <router-link to="/bookinguser"> <a href="#" class="btn btn-primary">Lanjut Ke Detail Pesanan</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Testimonial Section End -->
</template>

<script>
import NavbarCustomer from "@/components/NavbarCustomer.vue";
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "CustomerDetailPesanan",
  components: {
    NavbarCustomer,
  },
};
</script>
