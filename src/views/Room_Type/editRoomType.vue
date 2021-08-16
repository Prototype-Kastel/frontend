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
          <h3 class="mb-0">Update Data Room Type</h3>
        </div>
        
       <!-- Card body -->
          <div class="card-body">
          <!-- Form groups used in grid -->
          <div class="row">
            <div class="col-md-6">
            <div class="form-group">
                <label for="">Name Type</label>
                <input type="text" class="form-control" value="">
            </div>
           
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <div class="form-group">
                    <label for="">Bed Type</label>
                    <input type="text" class="form-control" value="">
                </div>
              </div>
            </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">Size</label>
                  <input type="text" class="form-control" value="">
              </div>
              </div>
            </div>
            
         
            <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                      <label for="">Gender</label>
                      <select name="" id="" class="form-control">
                      <option value="" selected>All</option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                      </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="">Capacity</label>
                  <input type="text" class="form-control">
                </div>
            </div>
            <!-- <input type="text" class="form-control" value="Bucharest, Cluj, Iasi, Timisoara, Piatra Neamt" data-toggle="tags" /> -->
            <div class="form-group">
                <label for="">Facilities</label>
                
                <select name="" type="text" id="tags" class="form-control"  multiple>
                    <option value="1">Wifi</option>
                    <option value="2">Kamar Mandi Dalam</option>
                    <option value="3">Parkir luas</option>
                    <option value="4">Dapur</option>
                    <option value="5">Jemuran</option>
                    <option value="6">Ruang Belajar</option>
                    <option value="7">Setrika</option>
                </select>
            </div>
            <div class="form-group">
                <label for="">Notes</label>
                <textarea name="text" id="" cols="30" rows="5" class="form-control" > </textarea>
            </div>
            </div>
            <div class="col-md-6">
                <div class="form-group"> 
                    <label for="">Gallery</label>
                    <div class="dropzone dropzone-multiple" data-toggle="dropzone" data-dropzone-multiple data-dropzone-url="http://">
                  <div class="fallback">
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="customFileUploadMultiple" multiple>
                      <label class="custom-file-label" for="customFileUploadMultiple">Choose file</label>
                    </div>
                  </div>
                  <ul class="dz-preview dz-preview-multiple list-group list-group-lg list-group-flush">
                    <li class="list-group-item px-0">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <div class="avatar">
                            <img class="avatar-img rounded" src="https://demos.creative-tim.com/argon-dashboard-pro/pages/forms/..." alt="..." data-dz-thumbnail>
                          </div>
                        </div>
                        <div class="col ml--3">
                          <h4 class="mb-1" data-dz-name>...</h4>
                          <p class="small text-muted mb-0" data-dz-size>...</p>
                        </div>
                        <div class="col-auto">
                          <div class="dropdown">
                            <a href="components.html#" class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="fe fe-more-vertical"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a href="components.html#" class="dropdown-item" data-dz-remove>
                                Remove
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                </div>
            </div>
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
  name: "editRoomType",
  components:{
    v_footer,
    navbar
  }

}
</script>
