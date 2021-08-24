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
                      <div class="col-lg-6 col-5 text-right">
                          <a class="btn btn-sm btn-neutral">
                            <router-link to="/service">kembali</router-link>
                          </a>
                        
                      </div>
                  </div>
                  </div>
              </div>
      </div>
      <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
        <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">Update Data Service</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="update()">
                    <div class="form-group">
                        <label for="">Name </label>
                        <input type="text" class="form-control" v-model="service.name">
                        <div v-if="validation.name" class="text-danger">
                                {{validation.name[0]}}
                        </div>
                    </div>
                     <div class="form-group">
                        <label for="">Category </label>
                        <select class="form-control" v-model="service.category">
                            <option value="Facility" selected>Facility</option>
                            <option value="Ekstra Service">Ekstra Service</option>
                        </select>
                          <div v-if="validation.category" class="text-danger">
                            {{validation.category[0]}}
                        </div>
                    </div>
                     <div class="form-group">
                        <label for="">Price </label>
                        <input type="number" class="form-control" v-model="service.price">
                          <div v-if="validation.price" class="text-danger">
                            {{validation.price[0]}}
                        </div>
                    </div>
                      <div class="form-group">
                        <label for="">Stock </label>
                        <input type="number" class="form-control" v-model="service.stock">
                           <div v-if="validation.stock" class="text-danger">
                            {{validation.stock[0]}}
                        </div>
                    </div>
                     <div class="form-group">
                        <label for="">Notes </label>
                        <input type="text" class="form-control" v-model="service.notes">
                         <div v-if="validation.notes" class="text-danger">
                            {{validation.notes[0]}}
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary " type="submit">Save</button>
                         <template v-if="loading">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.6081871345029237s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(30 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.461988304093567s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(60 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.3157894736842104s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.1695906432748537s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(120 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.023391812865497s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(150 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.8771929824561403s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.7309941520467835s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(210 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.5847953216374269s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(240 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.43859649122807015s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.29239766081871343s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(300 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.14619883040935672s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(330 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> <!-- [ldio] generated by https://loading.io/ --></svg>
                          </template>
                    </div>
                </form>
            </div>
          </div>  
        </div>
      </div> 
        <v_footer/>
      </div>
   
</template>

<script>
import v_footer from '@/components/v_footer.vue';
import navbar from '@/components/Navbar.vue';
import {reactive,ref,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import axios from 'axios';

export default {
  name: "addService",
  components:{
    v_footer,
    navbar
  },
  setup() {
    //   data binding
      let service = reactive({
          name : '',
          category :'',
          price :'',
          stock:'',
          notes:'' ,
          
      });

      const validation = ref([]);
    //   redirect setelah store
      const router = useRouter();
      const route = useRoute();
      let loading = ref(false);
      
      
        onMounted(() => {
            axios.get(`api/services/${route.params.id}`)
            .then((result) => {
                service.name = result.data.data.name
                service.category = result.data.data.category
                service.price = result.data.data.price
                service.stock = result.data.data.stock
                service.notes = result.data.data.notes
            }).catch((err) => {
                console.log(err.response.data);
            });
        })
        function update() {   
           loading = true;
            axios.put(
                `api/services/${route.params.id}/update`,
                service
            )
            .then(() => {
                loading = false
                createToast('Data berhasil diubah',
                    {
                    type: 'success',
                    showIcon: 'true',
                    transition: 'zoom',
                    })
                router.push({
                    name : 'service'
                })
            }).catch((err) => {
                validation.value = err.response.data.errors
                 createToast('Data Ada yang tidak valid',
                    {
                    type: 'danger',
                    showIcon: 'true',
                    transition: 'zoom',
                    })
                 loading = false
            })
        }
        return {
            service,
            validation,
            router,
            update,
            loading
        }

  }
  

}
</script>
