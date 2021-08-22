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
          notes:''
      });

      const validation = ref([]);
    //   redirect setelah store
      const router = useRouter();
      const route = useRoute();

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
            axios.put(
                `api/services/${route.params.id}/update`,
                service
            )
            .then(() => {
                router.push({
                    name : 'service'
                })
            }).catch((err) => {
                validation.value = err.response.data
            })
        }
        return {
            service,
            validation,
            router,
            update
        }

  }
  

}
</script>
