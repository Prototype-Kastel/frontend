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
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4" >
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
        <h3 class="mb-0">Update Data Room Type</h3>
      </div>

      <!-- Card body -->
      <div class="card-body">
        <!-- Form groups used in grid -->
       <form @submit.prevent="" >
          <div class="row">
            <div class="col-md-6">
							<div class="card">
								<div class="card-body">
                  <form @submit.prevent="updateData()">
                      	<div class="form-group">
                          <label for="">Name </label>
                          <input type="text" class="form-control" v-model="roomtype.name" />
                          <div v-if="validation.name" class="text-danger">
                            {{ validation.name[0] }}
                          </div>
						    			</div>
                      <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                              <label for="">Bed Type </label>
                              <input type="text" class="form-control" v-model="roomtype.bed_type" />
                              <div v-if="validation.bed_type" class="text-danger">
                                {{ validation.bed_type[0] }}
                              </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Size </label>
                                <input type="text" class="form-control" v-model="roomtype.size" />
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
                              <input type="number" class="form-control" v-model="roomtype.capacity" />
                              <div v-if="validation.capacity" class="text-danger">
                                {{ validation.capacity[0] }}
                              </div>
                          </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Gender </label>
                                <select class="form-control" v-model="roomtype.gender">
                                  <option selected :value="roomtype.gender">{{roomtype.gender}}</option>
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
										<label for="">Notes</label>
										<textarea type="text" class="form-control" v-model="roomtype.notes" />
										<div v-if="validation.notes" class="text-danger">
											{{ validation.notes[0] }}
										</div>
									</div>
									<div class="form-group">
											<button class="btn btn-primary d-flex align-items-center" type="submit">
												Submit
												<template v-if="loading">
                          	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.6081871345029237s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(30 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.461988304093567s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(60 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.3157894736842104s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.1695906432748537s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(120 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.023391812865497s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(150 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.8771929824561403s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.7309941520467835s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(210 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.5847953216374269s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(240 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.43859649122807015s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.29239766081871343s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(300 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.14619883040935672s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(330 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> <!-- [ldio] generated by https://loading.io/ --></svg>
                        </template>		
											</button>
									</div>
                  </form>
								
					  	 	</div>
					    </div>
              <div class="card">
                <div class="card-header">Data Facility</div>
                	<div class="card-body">
                    <form @submit.prevent="addService()">
                      <div class="form-group">
                        <label for="">Tambah Facility</label>
                       
                        <select v-model="itemService.id" class="form-control">
                           <option disable selected>Choose your Facility</option>   
                          <option v-for="(services,index) in service.data" :key="index" :value="services.id">{{services.name}}</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-outline btn-sm">Tambah Data</button>
                      </div>
                    </form>
                    <div class="table-responsive py-4">
                        <table class="table table-flush">
                        <thead class="thead-light">
                            <tr>
                                <th>Name Service</th>
                                <th>Action</th>		
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(roomfacility,index) in roomtype.room_type_facility" :key="index">
                                <td>{{roomfacility.service.name}}</td>
                                <td>
                                  <button class="btn btn-danger btn-outline btn-sm" ref="destroy"  @click.prevent="deleteService(roomfacility.id,index)"><i class="fas fa-trash"></i></button>
                                </td>														
                            </tr>
                        </tbody>
                        </table>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                    <form @submit.prevent="uploadImg()">
                      <div class="form-group">
                        <label for="">Gallery</label>
                        <input type="file" name="galleries"  @change="previewFiles"  class="form-control" >
                      </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-sm">Upload</button>
                      </div>
                    </form>
                      <div class="table-responsive py-4">
                        <table class="table table-flush">
                        <thead class="thead-light">
                            <tr>
                                <th>Name Service</th>
                                <th>Action</th>		
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="(gallery,index) in roomtype.gallery"  :key="index">
                                <td> <img :src="gallery.photo" style="width:100px;height:100px" ></td>
                                <td>
                                  <button class="btn btn-danger btn-outline btn-sm mt-4" ref="destroyGallery"  @click.prevent="deleteGallery(gallery.id,index)"><i class="fas fa-trash"></i></button>
                                </td>														
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                
              </div>
            
            </div>

          </div>
        
        </form>
      </div>
    </div>
    <v_footer />
    </div>
  </div>
</template>

<script>
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import sidebar from "@/components/Sidebar.vue";
import axios from "axios";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import {useRouter} from 'vue-router';

export default {
  name: "editRoomType",
  components: {
    sidebar,
    v_footer,
    navbar,
  },
  data() {
    return {
      roomtype:[],
      service:[],
      itemService:{
        id:''
      },
      gallery:'',
      loading:false,
      validation:[],
      router:useRouter()
    }
  },
  mounted() {
    this.getRoomType();
    this.getService();
  },
  methods: {
    async getRoomType(){
      let response = await axios.get(`api/roomtype/${this.$route.params.id}/show`);
      this.roomtype = response.data.data; 
    },

    async getService(){
      let response = await axios.get('api/services/facility');
      this.service = response.data;
    },
    
    async updateData(){
      this.loading = true;
      try {
          let response = await axios.put(`api/roomtype/${this.$route.params.id}/update`,this.roomtype)
          if(response.status == 200){
            this.loading = false;
            this.addToastSuccess();
            this.router.push({
                    name : 'roomtype'
                })
          }else{
            this.addToastFailed();
            this.loading = false;
          }
      } catch (e) {
        this.addToastFailed();
        this.validation = e.response.data.errors
        this.loading = false;
      }
    },

    previewFiles(e){
        this.gallery = e.target.files[0];
    },

    async uploadImg(){
      let fd = new FormData();
      fd.append('gallery',this.gallery)
        let response = await axios.post(`api/roomtype/addgallery/${this.$route.params.id}`,fd)
        if (response.status == 200) {
            this.galleries = ''
            this.addToastSuccess();
        } else {
           this.addToastFailed();
        }
     
    },
     async addService(){
        let fd = new FormData();
        fd.append('service_id',this.itemService.id);
        let response = await axios.post(`api/roomtype/addservice/${this.$route.params.id}`,fd);    
         if (response.status == 200) {
              this.itemService.id = "";
              this.addToastSuccess();
              
           } else {
             this.addToastFailed();
           }
       

    },
      addToastFailed(){
           createToast('inputan tidak valid',
              {
              showIcon: 'true',
              position: 'top-right',
              type: 'danger',
              transition: 'bounce',
              });
       },
       addToastSuccess(){
             createToast('data berhasil ditambah',
              {
              showIcon: 'true',
              position: 'top-right',
              type: 'success',
              transition: 'bounce',
              });
       },
       deleteService(id,index){
        let response  = window.confirm('apakah anda yakin ?');
        if (response == true) {
            axios.delete(`api/roomtype/deleteservice/${id}`)
            .then(() => {
               createToast('data berhasil dihapus',
                  {
                  showIcon: 'true',
                  position: 'top-right',
                  type: 'success',
                  transition: 'bounce',
                  });
                this.roomtype.room_type_facility.splice(index,1);
              
            }).catch(() => {
              console.log('gagal');
            });
        } else {
           this.addToastFailed();
        }  
       },
       deleteGallery(id,index){
         
          let response  = window.confirm('apakah anda yakin ?');
          if (response == true) {
              axios.delete(`api/roomtype/deletegallery/${id}`)
              .then(() => {
                createToast('data berhasil dihapus',
                    {
                    showIcon: 'true',
                    position: 'top-right',
                    type: 'success',
                    transition: 'bounce',
                    });
                    this.roomtype.gallery.splice(index,1);

              }).catch(() => {
                console.log('gagal');
              });
          } else {
            this.addToastFailed();
          }  
       },




  },
};
</script>

