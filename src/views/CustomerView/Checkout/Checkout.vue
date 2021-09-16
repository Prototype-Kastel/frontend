<template>
  <navbar-customer />
  
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="col-md-12">
                    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                        <div class="card-body">
                            <label for=""><b>Rincian Pemesanan Anda</b></label> <br>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="">Check In</label>
                                    <p>Rab , 29 Mei 2021</p>
                                </div>
                                <div class="col-md-6">
                                    <label for="">Check In</label>
                                    <p>Rab , 29 Mei 2021</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="">Durasi</label>
                                <p>1 Malam</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mt-4 shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                        <div class="card-body">
                            <label for=""><b>Total Biaya Menginap</b></label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="">Total Kamar</label>
                                        <label for="">Ekstra Service</label>
                                        <label for="">Total</label>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="">Rp.300.000</label>
                                    <label for="">Rp.500.000</label>
                                    <label for="">Rp.800.000</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
              
                <div class="col-md-8">
                    <div class="card shadow p-3 mb-5 bg-white rounded">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="img/kamar.jpg" class="mr-3 img-fluid" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <h5 class="mt-0 text-blue"><b>Bougenfill indah</b></h5>
                                    <div class="form-group">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ducimus illo ipsum soluta totam maiores illum error, accusamus, vero rerum magni vitae minima amet nisi voluptatem ab fuga dolorum perspiciatis!</p>
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
                        </div>
                    </div>
                    <div>
                        <div class="card mt-5 shadow-sm p-3 mb-5 bg-white rounded">
                            <div class="card-body">
                                <label for=""><b>Ekstra Service Pesanan Anda</b></label> <br>
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
                        <div class="card mt-5 shadow-sm p-3 mb-5 bg-white rounded">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="">Nama Tamu</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">No telepon</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">Email</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <label for="">Emergency Contact</label>
                                <div class="form-group">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium, adipisci quos nihil nulla debitis</p>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">Nama</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">Telepon</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="form-group mt-3 " style="">
                        <a href="detailPesanan.html" class="btn btn-primary">Lanjut Ke Detail Pesanan</a>
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
  name: "CustomerCheckout",
  components: {
    NavbarCustomer,
  },

};
</script>
