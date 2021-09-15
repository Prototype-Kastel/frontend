<template>
  <navbar-customer />
  <!-- Hero Section Begin -->
  <div class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text">
                        <h2>Our Rooms</h2>
                        <div class="bt-option">
                            <a href="./home.html">Home</a>
                            <span>Rooms</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section End -->

    <!-- Room Details Section Begin -->
    <section class="room-details-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="room-details-item">
                        <img src="img/room/room-details.jpg" alt="">
                        <div class="rd-text">
                            <div class="rd-title">
                                <h3>Loft Room</h3>
                                <div class="rdt-right">
                                    <div class="rating">
                                        <i class="icon_star"></i>
                                        <i class="icon_star"></i>
                                        <i class="icon_star"></i>
                                        <i class="icon_star"></i>
                                        <i class="icon_star-half_alt"></i>
                                    </div>
                                </div>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="r-o">Location:</td>
                                        <td>Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus, Kota Jakarta Selatan.</td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Room Available:</td>
                                        <td>2 Room</td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Size:</td>
                                        <td>25m<sup>2</sup></td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Facilities:</td>
                                        <td>Wifi, Television, Bathroom, AC, kompor listrik, lemari es, sink</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="f-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi dui, feugiat a auctor sit amet, imperdiet sit amet nisi. Etiam et dui vitae ligula molestie malesuada sit amet iaculis eros. Curabitur consectetur tristique
                                mattis. Integer mattis diam varius pharetra placerat. Aliquam vel sapien eleifend, fermentum ligula at, sollicitudin metus. Ut quis tortor in lectus condimentum tincidunt nec vel turpis. Mauris quis pulvinar libero, non
                                posuere arcu. Suspendisse a fringilla sem. Duis a imperdiet dui. Integer finibus ac diam sagittis fermentum.</p>
                            <p>Mauris mattis mauris a neque molestie luctus. Phasellus eleifend finibus lacinia. Pellentesque placerat ut turpis id hendrerit. Phasellus auctor nisl nulla, nec porttitor lacus tristique at. Aliquam molestie odio sed gravida
                                rhoncus. Quisque vel tincidunt nulla. Duis eget pharetra tellus, ac hendrerit sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="room-booking">
                        <h3 class="reservasi">Your Reservation</h3>
                        <form action="checkout.html">
                            <p>Ekstra Service :</p>
                            <label for="myCheck" class="check-harga">Bantal
                                <span class="harga-service">+20.000</span>
                                <input type="checkbox" id="myCheck" onclick="myFunction()">
                                <span class="checkmark"></span>
                            </label>
                            <label for="myCheck1" class="check-harga">Meja
                                <span class="harga-service">+25.000</span>
                                <input type="checkbox" id="myCheck1" onclick="myFunction1()">
                                <span class="checkmark"></span>
                            </label>
                            <label for="myCheck2" class="check-harga">Kasur
                                <span class="harga-service">+40.000</span>
                                <input type="checkbox" id="myCheck2" onclick="myFunction2()">
                                <span class="checkmark"></span>
                            </label>
                            <label for="myCheck3" class="check-harga">Kursi
                                <span class="harga-service">+30.000</span>
                                <input type="checkbox" id="myCheck3" onclick="myFunction3()">
                                <span class="checkmark"></span>
                            </label>

                            <div for="myCheck" class="select-option">
                                <label for="kos-hotel">Kos/Hotel:</label>
                                <select id="kos-hotel">
                                    <option value="">Hotel</option>
                                    <option value="">Kos</option>
                                </select>
                            </div>
                            <div class="select-option">
                                <label for="kos-hotel">Duration:</label>
                                <select id="kos-hotel">
                                    <option value="">1 Night</option>
                                    <option value="">2 Night</option>
                                </select>
                            </div>
                            <div class="select-option">
                                <label for="room">Room:</label>
                                <select id="room">
                                    <option value="">1 Room</option>
                                    <option value="">2 Room</option>
                                </select>
                            </div>
                            <h3>Rp.<span id="text">2700000</span></h3>
                            <p>/month/room</p>

                            <button type="submit">Book Now</button>
                        </form>
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
  name: "CustomerRoomDetails",
  components: {
    NavbarCustomer,
  },

};
</script>
