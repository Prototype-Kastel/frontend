<template>
  <navbar-customer />
  <!-- Hero Section Begin -->
  <section
    class="hero-section"
    style="background-image: url('img/hero/hero-1.jpg')"
  >
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
        <h1 style="text-align: center">Booking Your Hotel</h1>
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
          <router-link to="/customer/roomSearch"><button type="submit">Check Availability</button></router-link>
          
        </div>
      </div>
    </form>
    <br />
    <hr class="line" />
  </div>



  <!-- Card Room -->
  <div class="container p-3">
    <br />
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title">
          <span>Search Result</span>
          <h2>2 Room type Available</h2>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="row card-room">
      <div style="padding: 0px" class="col-md-3 img-cover">
        <img
          style="border-radius: 8px 0px 0p 8px"
          src="img\room\room-aura-kostel\Loft-Room-lb.bulus.png"
          alt="room"
        />
      </div>
      <div class="col-md-5">
        <h1>Loft Room</h1>
        <p>
          Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus, Kec. Cilandak, Kota
          Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440, Indonesia
        </p>
        <p class="facilities">Facilities :</p>
        <div class="img-facilities">
          <img src="img\fasilitas\image 20.png" alt="fasilitas1" />
          <img src="img\fasilitas\image 21.png" alt="fasilitas2" />
          <img src="img\fasilitas\image 22.png" alt="fasilitas3" />
          <img src="img\fasilitas\image 23.png" alt="fasilitas4" />
          <img src="img\fasilitas\image 24.png" alt="fasilitas5" />
        </div>
        <div style="clear: both; padding-top: 10px">
          <p class="badge badge-info">1 room available</p>
          <p class="badge badge-success">promo</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="harga-room">
          <p>Starting From</p>
          <h2><b>Rp 2.700.000</b></h2>
          <p>/room/night</p>
        </div>
       <router-link to="/customer/roomDetails">Book Now</router-link>
      </div>
    </div>
    <br />
    <div class="row card-room">
      <div style="padding: 0px" class="col-md-3 img-cover">
        <img
          style="border-radius: 8px 0px 0p 8px"
          src="img\room\room-aura-kostel\Standard-Room-lb.bulus.png"
          alt="room"
        />
      </div>
      <div class="col-md-5">
        <h1>Standard Room</h1>
        <p>
          Jl. Pertanian III No.12, RT.5/RW.4, Lb. Bulus, Kec. Cilandak, Kota
          Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440, Indonesia
        </p>
        <p class="facilities">Facilities :</p>
        <div class="img-facilities">
          <img src="img\fasilitas\image 20.png" alt="fasilitas1" />
          <img src="img\fasilitas\image 21.png" alt="fasilitas2" />
          <img src="img\fasilitas\image 23.png" alt="fasilitas4" />
          <img src="img\fasilitas\image 24.png" alt="fasilitas5" />
        </div>
        <div style="clear: both; padding-top: 10px">
          <p class="badge badge-info">2 room available</p>
          <p class="badge badge-success">promo</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="harga-room">
          <p>Starting From</p>
          <h2><b>Rp 2.200.000</b></h2>
          <p>/room/night</p>
        </div>
         <router-link to="/customer/roomDetails">Book Now</router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
import NavbarCustomer from "@/components/NavbarCustomer.vue";
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "room",
  components: {
    NavbarCustomer
  },
};
</script>
