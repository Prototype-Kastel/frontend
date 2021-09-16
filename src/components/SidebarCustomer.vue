<template>
    <nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div class="scrollbar-inner">
            <!-- Brand -->
            <div class="sidenav-header d-flex align-items-center">

                <div class="ml-auto">
                    <!-- Sidenav toggler -->
                    <div class="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
                        <div class="sidenav-toggler-inner">
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <a class="navbar-brand" href="dashboard.html">

                <h4>Welcome</h4>
                <h2 class="text-blue">User Name </h2>
            </a>
            <div class="navbar-inner">
                <!-- Collapse -->
                <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                    <!-- Nav items -->
                    <ul class="navbar-nav">
                          <li class="nav-item">                                 
                            <router-link to="/dashboarduser"> 
                                <a class="nav-link">
                                    <i class="ni ni-shop text-primary"></i>
                                    <span class="nav-link-text text-default"> Dashboard </span>
                                </a>
                            </router-link>                                
                           </li>
                       
                        <li class="nav-item">
                            <router-link to="/bookinguser">
                                <a class="nav-link">
                                    <i class="ni ni-shop text-primary"></i>
                                    <span class="nav-link-text text-default"> Booking</span>
                                </a>
                            </router-link>                          
                         </li>

                        <li class="nav-item">
                                <router-link to="/listorder">
                                    <a class="nav-link">
                                        <i class="ni ni-chart-pie-35 text-info"></i>
                                        <span class="nav-link-text text-default"> List Order</span>
                                    </a>
                                </router-link>
                         </li>
                           <li class="nav-item">  
                                    <router-link to="/profileuser">
                                    <a href=""  class="nav-link">
                                        <i class="ni ni-chart-pie-35 text-danger"></i>
                                        <span class="nav-link-text text-default"> Profile</span>
                                    </a>
                                    </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="home.html">
                                <i class="ni ni-button-power text-orange"></i>
                                <span class="nav-link-text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
     name : 'SidebarCustomer',
}
</script>