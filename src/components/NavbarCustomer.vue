<template>
    <div class="offcanvas-menu-wrapper">
    <div class="canvas-close">
      <i class="icon_close"></i>
    </div>
    <nav class="mainmenu mobile-menu">
      <ul>
        <li><router-link to="/Admin"><a>Admin</a></router-link></li>
        <li><router-link to="/customer/roomDetails"><a>Rooms</a></router-link></li>
        <li><router-link to="/"><a>About Us</a></router-link></li>
        <!-- <li>
          <a href="./pages.html">Pages</a>
          <ul class="dropdown">
            <li><a href="./room-details.html">Room Details</a></li>
            <li><a href="#">Gallery Room</a></li>
          </ul>
        </li> -->

        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>
    <div class="header-configure-area">
      <a href="#" class="bk-btn">Booking Now</a>
    </div>
    <div id="mobile-menu-wrap"></div>
    <div class="top-social">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-tripadvisor"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
    <ul class="top-widget">
      <li><i class="fa fa-phone"></i> (12) 345 67890</li>
      <li><i class="fa fa-envelope"></i> info.colorlib@gmail.com</li>
    </ul>
  </div>
  <!-- Offcanvas Menu Section End -->

  <!-- Header Section Begin -->
  <header class="header-section">
    <div class="menu-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo">
              <a href="./index.html">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="nav-menu">
              <nav class="mainmenu">
                <ul>
                  <router-link to="/"><li><a href="./index.html">Home</a></li></router-link>
                  <router-link to="/"><li><a href="./about-us.html">About Us</a></li></router-link>
                  <router-link to="/Admin"><li><a>Admin</a></li></router-link>
                  <li>
                    <a href="./pages.html">Pages</a>
                    <ul class="dropdown">
                      <router-link to="/"><li><a href="./room-details.html">Room Details</a></li></router-link>
                      <router-link to="/"><li><a href="#">Gallery Room</a></li></router-link>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div class="nav-right search-switch">
                <router-link to="/login"><a class="login">Login</a></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>
<script>
export default {
    name:'NavbarCustomer'
}
</script>