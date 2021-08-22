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
                            <router-link to="/room">Kembali</router-link>
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
              <h3 class="mb-0">Datatable Service</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="store()">
                    <div class="form-group">
                        <label for="">Name </label>
                        <input type="text" class="form-control" v-model="roomprice.name">
                        <div v-if="validation.name" class="text-danger">
                                {{validation.name[0]}}
                        </div>
                    </div>
                     <div class="form-group">
                        <label for="">Room Type </label>
                        <select v-model="roomprice.roomType_id" class="form-control" >
                            <option selected>Pilih Room Type</option>
                            <option v-for="(roomType,index) in roomtypes.data" :key="index" :value="roomType.id">
                              {{roomType.name}}
                            </option>
                        </select>
                          <div v-if="validation.roomType_id" class="text-danger">
                            {{validation.roomType_id[0]}}
                        </div>
                    </div>
                     <div class="form-group">
                        <label for="">Price Type </label>
                            <select class="form-control" v-model="roomprice.price_type">
                              <option value="Bulanan">Bulanan</option>
                              <option value="Harian">Harian</option>
                            </select>
                    </div>
                      <div class="form-group">
                        <label for="">Price </label>
                        <input type="number" class="form-control" v-model="roomprice.price">
                           <div v-if="validation.price" class="text-danger">
                            {{validation.price[0]}}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Promo Code </label>
                        <input type="text" class="form-control" v-model="roomprice.promo_code">
                         <div v-if="validation.promo_code" class="text-danger">
                            {{validation.notes[0]}}
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                           <div class="form-group">
                            <label for="">Start Date </label>
                            <input type="date" class="form-control" v-model="roomprice.start_date">

                              <div v-if="validation.start_date" class="text-danger">
                                {{validation.start_date[0]}}
                              </div>
                         </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                            <label for="">End Date </label>
                            <input type="date" class="form-control" v-model="roomprice.end_date">

                            <div v-if="validation.end_date" class="text-danger">
                            {{validation.end_date[0]}}
                            </div>
                          </div>
                      </div>
                    </div>
                      <div class="form-group">
                        <label for="">Default Price </label>
                        <select class="form-control" v-model="roomprice.default">
                          <option value="1">iya</option>
                          <option value="0">tidak</option>
                        </select>
                         <div v-if="validation.promo_code" class="text-danger">
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
import {useRouter} from 'vue-router';
import axios from 'axios';

export default {
  name: "addService",
  components:{
    v_footer,
    navbar
  },
  setup() {
    //   data binding
      const roomprice = reactive({
         name :'',
         roomType_id :'',
         price_type:'',
         price:'',
         promo_code:'',
         start_date:'',
         end_date:'',
         default:''
      });

      const validation = ref([]);

      const roomtypes = ref([]);
    //   redirect setelah store
      const router = useRouter();

    //get data from room type
    onMounted(() => {
        axios.get('api/roomtype')
        .then((result) => {
            roomtypes.value = result.data
        }).catch((err) => {
            console.log(err.response);
        });
    })

    function store() { 
        axios.post(
            'api/roomprice/store',
             roomprice
        )
        .then(() => {
            router.push({
                name : 'roomprice'
            })
        }).catch((err) => {
            validation.value = err.response.data
        })
     }
     return {
         store,
         validation,
         router,
         roomtypes,
         roomprice
     }

  }
  

}
</script>
