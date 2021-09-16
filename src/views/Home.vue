<template>
  <navbar-customer />
  <!-- Hero Section Begin -->
  <section class="hero-section" style="background-image:url('img/hero/hero-1.jpg')">
    <div background="img/hero/hero-3.jpg" class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="hero-text">
            <h1>Aura Kostel Home For You</h1>
            <p>
              We simplify your life by giving you comfortable, clean and
              affordable space in a boutique-style Kostel.
            </p>
            <a href="#" class="primary-btn">Book Now</a>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <!-- Hero Section End -->
  
  <div class="booking-form">
    <div class="row">
      <div class="col">
        <hr class="line" />
      </div>
      <div class="col">
        <h4>Booking Your Hotel</h4>
      </div>
      <div class="col">
        <hr class="line" />
      </div>
    </div>
    <form action="room.html">
      <div class="row">
        <div class="col-12 col-sm">
          <div class="select-option">
            <label for="location">Location:</label>
            <select id="location" class="form-control">
              <option value="">Lb.Bulus Jakarta</option>
              <option value="">Pamulang Tang-SeL</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-sm">
          <div class="select-option">
            <label for="kos-hotel">Kos/Hotel:</label>
            <select id="kos-hotel" class="form-control">
              <option value="">Hotel</option>
              <option value="">Kos</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-sm">
          <div class="check-date">
            <label for="date-in">Check In:</label>
            <input type="text" class="date-input form-control" id="date-in" />
            <i class="icon_calendar"></i>
          </div>
        </div>
        <div class="col-12 col-sm">
          <div class="select-option">
            <label for="duratoin">Duration:</label>
            <select id="duratoin" class="form-control">
              <option value="">1 Night</option>
              <option value="">2 Night</option>
              <option value="">3 Night</option>
              <option value="">4 Night</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-sm">
          <div class="select-option">
            <label for="room">Room:</label>
            <select id="room" class="form-control">
              <option value="">1 Room</option>
              <option value="">2 Room</option>
              <option value="">3 Room</option>
              <option value="">4 Room</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-sm">
          <button type="submit">Check Availability</button>
        </div>
      </div>
    </form>
    <br />
    <hr class="line" />
  </div>
  <div class="row">
    <div class="col-lg-12">
      <div class="section-title">
        <span>aura kostel</span>
        <h2>Our Room</h2>
      </div>
    </div>
  </div>
  <div class="container-fluid mt-6">
    <div class="row">
      <div class="col">
        <div class="card">
          <!-- Card header -->
          <div class="card-body">
            <div class="owl-carousel owl-carousel1 owl-theme">
              <div class="item">
                <div class="card">
                  <!-- Card image -->
                  <img
                    class="card-img-top"
                    src="img/room/room-5.jpg"
                    alt="Image placeholder"
                  />
                  <!-- Card body -->
                  <div class="card-body">
                    <div class="form-group">
                      <button
                        type="menu"
                        class="btn btn-outline-primary btn-sm"
                        disabled
                      >
                        Male
                      </button>
                      <button
                        disabled="disabled"
                        class="btn btn-primary btn-sm"
                      >
                        Available
                      </button>
                    </div>
                    <h6 class="h5 card-title mb-0"><b>Standard Room</b></h6>
                    <p class="card-text">
                      Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus..
                    </p>
                    <h4 class="card-text"><b>Jakarta Selatan</b></h4>
                    <small class="text-muted"
                      >Kamar Mandi,Wifi,Dapur,Parkir</small
                    >
                    <p class="card-text"><b>Rp.300.000/Nigth</b></p>
                    <a
                      href="room-details.html"
                      class="btn btn-outline-primary btn-sm mt-2"
                      >Detail Rooms</a
                    >
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="card">
                  <!-- Card image -->
                  <img
                    class="card-img-top"
                    src="img/room/room-3.jpg"
                    alt="Image placeholder"
                  />
                  <!-- Card body -->
                  <div class="card-body">
                    <div class="form-group">
                      <button
                        type="menu"
                        class="btn btn-outline-primary btn-sm"
                        disabled
                      >
                        Male
                      </button>
                      <button
                        disabled="disabled"
                        class="btn btn-primary btn-sm"
                      >
                        Available
                      </button>
                    </div>
                    <h6 class="h5 card-title mb-0"><b>Standard Room</b></h6>
                    <p class="card-text">
                      Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus..
                    </p>
                    <h4 class="card-text"><b>Jakarta Selatan</b></h4>
                    <small class="text-muted"
                      >Kamar Mandi,Wifi,Dapur,Parkir</small
                    >
                    <p class="card-text"><b>Rp.300.000/Nigth</b></p>
                    <a
                      href="room-details.html"
                      class="btn btn-outline-primary btn-sm mt-2"
                      >Detail Rooms</a
                    >
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="card">
                  <!-- Card image -->
                  <img
                    class="card-img-top"
                    src="img/room/room-4.jpg"
                    alt="Image placeholder"
                  />
                  <!-- Card body -->
                  <div class="card-body">
                    <div class="form-group">
                      <button
                        type="menu"
                        class="btn btn-outline-primary btn-sm"
                        disabled
                      >
                        Male
                      </button>
                      <button
                        disabled="disabled"
                        class="btn btn-primary btn-sm"
                      >
                        Available
                      </button>
                    </div>
                    <h6 class="h5 card-title mb-0"><b>Standard Room</b></h6>
                    <p class="card-text">
                      Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus..
                    </p>
                    <h4 class="card-text"><b>Jakarta Selatan</b></h4>
                    <small class="text-muted"
                      >Kamar Mandi,Wifi,Dapur,Parkir</small
                    >
                    <p class="card-text"><b>Rp.300.000/Nigth</b></p>
                    <a
                      href="room-details.html"
                      class="btn btn-outline-primary btn-sm mt-2"
                      >Detail Rooms</a
                    >
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="card">
                  <!-- Card image -->
                  <img
                    class="card-img-top"
                    src="img/room/room-1.jpg"
                    alt="Image placeholder"
                  />
                  <!-- Card body -->
                  <div class="card-body">
                    <div class="form-group">
                      <button
                        type="menu"
                        class="btn btn-outline-primary btn-sm"
                        disabled
                      >
                        Male
                      </button>
                      <button
                        disabled="disabled"
                        class="btn btn-primary btn-sm"
                      >
                        Available
                      </button>
                    </div>
                    <h6 class="h5 card-title mb-0"><b>Standard Room</b></h6>
                    <p class="card-text">
                      Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus..
                    </p>
                    <h4 class="card-text"><b>Jakarta Selatan</b></h4>
                    <small class="text-muted"
                      >Kamar Mandi,Wifi,Dapur,Parkir</small
                    >
                    <p class="card-text"><b>Rp.300.000/Nigth</b></p>
                    <a
                      href="room-details.html"
                      class="btn btn-outline-primary btn-sm mt-2"
                      >Detail Rooms</a
                    >
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="card">
                  <!-- Card image -->
                  <img
                    class="card-img-top"
                    src="img/room/room-2.jpg"
                    alt="Image placeholder"
                  />
                  <!-- Card body -->
                  <div class="card-body">
                    <div class="form-group">
                      <button
                        type="menu"
                        class="btn btn-outline-primary btn-sm"
                        disabled
                      >
                        Male
                      </button>
                      <button
                        disabled="disabled"
                        class="btn btn-primary btn-sm"
                      >
                        Available
                      </button>
                    </div>
                    <h6 class="h5 card-title mb-0"><b>Standard Room</b></h6>
                    <p class="card-text">
                      Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus..
                    </p>
                    <h4 class="card-text"><b>Jakarta Selatan</b></h4>
                    <small class="text-muted"
                      >Kamar Mandi,Wifi,Dapur,Parkir</small
                    >
                    <p class="card-text"><b>Rp.300.000/Nigth</b></p>
                    <a
                      href="room-details.html"
                      class="btn btn-outline-primary btn-sm mt-2"
                      >Detail Rooms</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About Us Section Begin -->
  <section class="aboutus-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="about-text">
            <div class="section-title">
              <span>About Us</span>
              <h2>Aura Kostel <br />Kos & Hotel</h2>
            </div>
            <p class="f-para">
              Sesuai dengan slogan Aura Kostel " Home For You, comfortable,
              clean and affordable " kami menyewakan tempat tinggal yang
              memberikan sarana tempat yang bersih , nyaman dengan harga
              terjangkau.
            </p>
            <p class="s-para">
              Konsep kamar - kamar Aura kostel sangat beragam dengan variasi
              kamar berkonsep urban, industrial di padu padankan dengan
              komposisi modern design, membuat Aura kostel memberikan kesan dan
              kelas tersendiri di jajaran penginapan kost lainnya.
            </p>
            <a href="#" class="primary-btn about-btn">Read More</a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-pic">
            <div class="row">
              <div class="col-sm-6">
                <img src="img/about/about-1.png" alt="" />
              </div>
              <div class="col-sm-6">
                <img src="img/about/about-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Us Section End -->

  <!-- Testimonial Section Begin -->
  <section class="testimonial-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <span>Testimonials</span>
            <h2>What Customers Say?</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <carousel class="testimonial-slider">
            <div class="ts-item">
              <p>
                This is my first time staying at Aura Kost and guest house, I
                stayed here almost 5 months, the room is like a 3 stars hotel
                include facilities (AC, wifi, bed, table, chair, lamp, cupboard,
                etc) and the area nearby tangerang selatan hospital and close to
                the main road is perfect. Thanks for Service during my stay
              </p>
              <div class="ti-author">
                <div class="rating">
                  <i class="icon_star"></i>
                  <i class="icon_star"></i>
                  <i class="icon_star"></i>
                  <i class="icon_star"></i>
                  <i class="icon_star-half_alt"></i>
                </div>
                <h5>- Andreas Oktavalentino Sirait</h5>
              </div>
            </div>
            <div class="ts-item">
              <p>
                Nyaman, bersih, rapi, dan yg jelas bikin betah banget, akses
                fasilitas umum jg deket
              </p>
              <div class="ti-author">
                <div class="rating">
                  <i class="icon_star"></i>
                  <i class="icon_star"></i>
                  <i class="icon_star"></i>
                  <i class="icon_star"></i>
                  <i class="icon_star-half_alt"></i>
                </div>
                <h5>- Putri Monica</h5>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </section>
  <!-- Testimonial Section End -->
</template>

<script>
import NavbarCustomer from "@/components/NavbarCustomer.vue";
import carousel from 'vue-owl-carousel';
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "dashboard",
  components: {
    NavbarCustomer,
    carousel
  },
};
</script>
