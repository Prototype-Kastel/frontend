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
                            <h3 class="mb-0">Katalog</h3>
                        </div>
                        <div class="card-body">
                           <Carousel :settings="settings" :breakpoints="breakpoints"  :autoplay="2000">
                                <Slide v-for="slide in 10" :key="slide"> 
                                    <div class="carousel__item " >
                                        <div class="card mr-4 text-left">
                                            <!-- Card image -->
                                            <img class="card-img-top" src="img/room/room-5.jpg" alt="Image placeholder">
                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <button type="menu" class="btn btn-outline-primary btn-sm" disabled>Male</button>
                                                    <button disabled="disabled" class="btn btn-primary btn-sm">Available</button>
                                                </div>
                                                <h6 class="h2 card-title mb-0">Standard Room</h6>
                                                <h5 class="card-text"> Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus..</h5>
                                                <h4 class="card-text"> <b>Jakarta Selatan</b></h4>
                                                <small class="text-muted">Kamar Mandi,Wifi,Dapur,Parkir</small>
                                                <h4 class="card-text"><b>Rp.300.000/Nigth</b></h4>
                                                <a href="room-details.html" class="btn btn-outline-primary btn-sm mt-2">Detail Rooms</a>
                                            </div>
                                        </div>                
                                    </div>
                                </Slide>

                                <template #addons>
                                    <Navigation />
                                    <Pagination />
                                </template>
                            </Carousel>
                            
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
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css';
import sidebarcustomer from '@/components/SidebarCustomer.vue';
import v_footer from '@/components/v_footer.vue';
import navbar from "@/components/Navbar.vue";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';


export default defineComponent({
    name:'dashboard',
    components:{
        sidebarcustomer,
        v_footer,
        navbar,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
             settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                },
    
            breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
            },
        }
    },
});
</script>
