<template>
    <div class="offcanvas-menu-wrapper">
    <div class="canvas-close">
      <i class="icon_close"></i>
    </div>
    <nav class="mainmenu mobile-menu">
      <ul>
        <li class="active"><a href="Admin/Pages/dashboard.html">Admin</a></li>
        <li><a href="./rooms.html">Rooms</a></li>
        <li><a href="./about-us.html">About Us</a></li>
        <li>
          <a href="./pages.html">Pages</a>
          <ul class="dropdown">
            <li><a href="./room-details.html">Room Details</a></li>
            <li><a href="#">Gallery Room</a></li>
          </ul>
        </li>

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
                  <li class="active"><a href="./index.html">Home</a></li>
                  <li><a href="./about-us.html">About Us</a></li>
                  <li>
                    <a href="./pages.html">Pages</a>
                    <ul class="dropdown">
                      <li><a href="./room-details.html">Room Details</a></li>
                      <li><a href="#">Gallery Room</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div class="nav-right">
                <div class="profile">
                  <div class="row">
                    <div class="col-4">
                      <img src="img/user.png" alt="user_profile" />
                    </div>
                    <div class="col-8">
                      <p>Username</p>
                    </div>
                  </div>
                  <div class="dropdown-content">
                      <button class="btn btn-primary btn-sm"><router-link to="/dashboarduser">Dashboard</router-link></button> 
                      <a class="user-logout" href="#">Logout</a>
                  </div>
                </div>
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