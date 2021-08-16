<template>
  <div class="header bg-primary pb-6">
          <!-- for navbar -->
            <navbar/>
            <div class="container-fluid">
                <div class="header-body">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 col-7">
                    <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
                    <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                        <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                        <li class="breadcrumb-item"><a href="dashboard.html#"><i class="fas fa-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="dashboard.html#">Dashboards</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Default</li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
    </div>

    <div class="container-fluid mt--6">
    <div class="card mb-4">
        <!-- Card header -->
        <div class="card-header">
          <h3 class="mb-0">Tambah Data Room</h3>
        </div>
        
        <!-- Card body -->
        <div class="card-body">
          <!-- Form groups used in grid -->
          <div class="form-group">
            <label for="">No Room</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for="">Room Type</label>
            <select name="" id="" class="form-control">
                <option value="" disabled selected>choose one</option>
                <option value="">Small</option>
                <option value="">Medium</option>
                <option value="">Large</option>
            </select>
          </div>
          <div class="form-group">
            <label for="">Floor</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
              <label for="">Notes</label>
              <textarea name="" class="form-control" id="" cols="30" rows="5"></textarea>
          </div>
          <div>
              <button type="submit" class="btn btn-primary btn-sm" >Save</button>
              <button type="reset" class="btn btn-neutral btn-sm">Reset</button>
          </div>    
        </div>
      </div>
        <v_footer/>
      </div>
</template>

<script>
import v_footer from '@/components/v_footer.vue';
import navbar from '@/components/Navbar.vue';
export default {
  name: "addRoom",
  components:{
    v_footer,
    navbar
  }

}
</script>
