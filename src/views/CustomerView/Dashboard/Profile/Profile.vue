<template>
 <sidebarcustomer/>
  <div class="main-content " id="panel">
        <div class="header-mobile header bg-primary pb-6">
           <navbar/>
        </div>

        <div class="container-fluid mt--4 ">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <!-- Card header -->
                        <div class="card-header">
                            <h3 class="mb-0">Profile</h3>
                        </div>
                        <div class="card-body">
                             <div class="container">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="img/room/room-1.jpg" class="img-fluid shadow shadow-lg--hover w-75" >
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">Nama</label>
                                            <input type="text" class="form-control" value="Zudha Pratama" disabled>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Birthday</label>
                                            <input type="text" class="form-control" value="21/05/2021" disabled>  
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">Email</label>
                                            <input type="text" class="form-control" value="zudhaPratama123@gmail.com" disabled>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Telephone</label>
                                            <input type="text" class="form-control" value="0857845671092" disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">City</label>
                                            <input type="text" class="form-control" value="zudhaPratama123@gmail.com" disabled>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">Region</label>
                                            <input type="text" class="form-control" value="zudhaPratama123@gmail.com" disabled>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">Province</label>
                                            <input type="text" class="form-control" value="zudhaPratama123@gmail.com" disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Address</label>
                                    <textarea name="" id="" cols="30" rows="4" class="form-control" disabled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit temporibus, nihil accusamus harum natus labore, voluptas quos beatae nulla modi maxime assumenda, debitis et earum eum reiciendis iure laborum?</textarea>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-primary btn-sm mt-2" data-toggle="modal" data-target="#exampleModal">Button</button> <br>
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
import sidebarcustomer from '@/components/SidebarCustomer.vue';
import v_footer from '@/components/v_footer.vue';
import navbar from "@/components/Navbar.vue";
export default {
    name:'Profile',
    components:{
        sidebarcustomer,
        v_footer,
        navbar
        
    }
}
</script>