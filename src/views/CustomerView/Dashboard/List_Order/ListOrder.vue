<template>
 <sidebarcustomer/>
  <div class="main-content " id="panel">
        <div class="header-mobile header bg-primary pb-6">
           <navbar/>
        </div>

        <div class="container-fluid  mt--4 ">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <!-- Card header -->
                        <div class="card-header">
                            <h3 class="mb-0">Your Order</h3>
                        </div>
                        <div class="card-body">
                                <div class="row">
                    <div class="col">
                        <div class="card">
                           <div class="card-body">
                               <div class="row">
                                   <div class="col-md-4">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                          <div class="carousel-item active">
                                            <img class="d-block w-100" src="img/room/room-1.jpg" alt="First slide" />
                                          </div>
                                          <div class="carousel-item">
                                            <img class="d-block w-100" src="img/room/room-2.jpg" alt="Second slide" />
                                          </div>
                                          <div class="carousel-item">
                                            <img class="d-block w-100" src="img/room/room-3.jpg" alt="Third slide" />
                                          </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                          <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                          <span class="sr-only">Next</span>
                                        </a>
                                      </div>
                                   </div>
                                   <div class="col-md-4">  
                                     <h6 class="h2 card-title mb-0">No Pesanan : B0001</h6>
                                     <h4 class="text-muted">Standard Room</h4>
                                     <h5 class="text-muted">No Room : <span class="badge badge-info">B17</span></h5>
                                     <small class="text-muted">Check In : 31 Mei 2021</small><br>
                                     <small class="text-muted">Check Out : 09 Juni 2021</small> <br>
                                     <h4><b>Total : Rp.300.000</b></h4>
                                     <h5>Status  : <span class="badge badge-warning badge-md">Occupied</span></h5>
                                     <h5>Request Ekstra Service : <span class="badge badge-primary badge-md">None</span></h5>
                                     
                                    </div>
                                    <div class="col-md-4">
                                        
        
                                        <button type="button" class="btn btn-primary btn-sm mt-2" data-toggle="modal" data-target="#exampleModal">Request Ekstra Service</button> <br>
                                        
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
            <!-- Footer -->
           <v_footer/>
        </div>
    </div>
</template>
<script>
import sidebarcustomer from '@/components/SidebarCustomer.vue'
import v_footer from '@/components/v_footer.vue';
import navbar from "@/components/Navbar.vue";
export default {
    name:'ListOrder',
    components:{
        sidebarcustomer,
        v_footer,
        navbar
    }
}
</script>