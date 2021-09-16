 <template>
  <sidebar />
  <div class="main-content mt-10" id="panel">
    <div class="header bg-primary pb-6">
      <!-- for navbar -->
      <navbar />
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
              <nav
                aria-label="breadcrumb"
                class="d-none d-md-inline-block ml-md-4"
              >
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item">
                    <a href="dashboard.html#"><i class="fas fa-home"></i></a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="dashboard.html#">Dashboards</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Default
                  </li>
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
        <h3 class="mb-0">Tambah Data Room Type</h3>
      </div>
        
      <!-- Card body -->
      <div class="card-body">
        <!-- Form groups used in grid -->
        <form @submit.prevent="store()" >
         
            <div class="form-group">
              <label for="">Name </label>
              <input type="text" class="form-control" v-model="name" />
              <div v-if="validation.name" class="text-danger">
                {{ validation.name[0] }}
              </div>
              </div>
          
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                  <label for="">Bed Type </label>
                  <input type="text" class="form-control" v-model="bed_type" />
                  <div v-if="validation.bed_type" class="text-danger">
                    {{ validation.bed_type[0] }}
                  </div>
              </div>
            </div>
            <div class="col-md-6">
                 <div class="form-group">
                    <label for="">Size </label>
                    <input type="text" class="form-control" v-model="size" />
                    <div v-if="validation.size" class="text-danger">
                      {{ validation.size[0] }}
                    </div>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Capacity </label>
                <input type="number" class="form-control" v-model="capacity" />
                <div v-if="validation.capacity" class="text-danger">
                  {{ validation.capacity[0] }}
                </div>
             </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                  <label for="">Gender </label>
                  <select class="form-control" v-model="gender">
                    <option value="male" selected>Male</option>
                    <option value="female">Female</option>
                    <option value="all">All</option>
                  </select>
                  <div v-if="validation.gender" class="text-danger">
                    {{ validation.gender[0] }}
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Gender </label>
                      <select
                        class="form-control"
                        v-model="itemRoomType.gender"
                      >
                        <option value="male" selected>Male</option>
                        <option value="female">Female</option>
                        <option value="all">All</option>
                      </select>
                      <div v-if="validation.gender" class="text-danger">
                        {{ validation.gender[0] }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="">Esktra Service </label>
                   <select name="" id="" class="form-control"  v-model="room_type_facility" multiple>
                     <option selected >Choose your Faciliy</option>
                     <option  v-for="(services,index) in service" :key="index" :value="services.id">{{services.name}}</option>
                   </select>
                  <div v-if="validation.room_type_facility" class="text-danger">
                    {{ validation.room_type_facility[0] }}
                  </div>
              </div>  
          <div class="form-group">
            <label for="">Notes</label>
            <textarea type="text" class="form-control" v-model="notes" />
            <div v-if="validation.notes" class="text-danger">
              {{ validation.notes[0] }}
            </div>
          </div>
            </div>
            <div class="col-md-6">
             <div class="form-group">
               <label for="">Gallery</label>
               <input type="file" name="galleries" id="galleries" @change="previewFiles"  class="form-control" multiple>
             </div>
            </div>

          </div>
          <div class="form-group">
            <button class="btn btn-primary d-flex align-items-center">
              Submit
               <template v-if="loading">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.6081871345029237s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(30 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.461988304093567s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(60 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.3157894736842104s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.1695906432748537s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(120 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.023391812865497s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(150 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.8771929824561403s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.7309941520467835s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(210 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.5847953216374269s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(240 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.43859649122807015s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.29239766081871343s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(300 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.14619883040935672s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(330 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> <!-- [ldio] generated by https://loading.io/ --></svg>
              </template>
            </button>
            
          </div>
        </form>
      </div>
        <v_footer />
    </div>
  </div>
  </div>
</template>

<script>
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import sidebar from "@/components/Sidebar.vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: "addRoomType",
  components: {
    sidebar,
    v_footer,
    navbar
    
  },
 data() {
   return{
          name: '',
          bed_type: '',
          capacity: '',
          gender: '',
          size: '',
          room_type_facility :[],
          galleries: [],
          notes: '', 
          router : useRouter(),
          service :[],
          loading : false,
          validation:[]
          
   }
},
   mounted() {
     this.getServices();
   },
   methods: {
     async getServices(){
       let response = await axios.get('api/services/facility');
       if (response.status == 200) {
         this.service = response.data.data

         console.log(this.service);
       }
     },

     previewFiles(event){
        let dataPhoto = event.target.files;
        this.galleries = dataPhoto;
     },
     async store(){
       this.loading = true;
        let fd = new FormData();
        try {
            fd.append('name',this.name);
            fd.append('bed_type',this.bed_type);
            fd.append('capacity',this.capacity);
            fd.append('gender',this.gender);
            fd.append('size',this.size);
            
            for (let index = 0; index < this.room_type_facility.length; index++) {
              fd.append('room_type_facility[]',this.room_type_facility[index]); 
            }
            for (let index = 0; index < this.galleries.length; index++) {
              fd.append('galleries[]',this.galleries[index])
            }
            fd.append('notes',this.notes);

           let response = await axios.post('api/roomtype/store',fd)
           if (response.status == 200) {
             this.loading = true;
              createToast('Data berhasil ditambahkan',
                {
                  type: 'success',
                  showIcon: 'true',
                  transition: 'zoom',
                })
              this.router.push({
                    name : 'roomtype'
                })
           }
        } catch (e) {
           this.validation = e.response.data.errors
          
           createToast('Data Ada yang tidak valid',
            {
            type: 'danger',
            showIcon: 'true',
            transition: 'zoom',
            })
        }
        this.loading = false; 
      
     },
     
   }
 }

</script>
<style src="@vueform/multiselect/themes/default.css"></style>

