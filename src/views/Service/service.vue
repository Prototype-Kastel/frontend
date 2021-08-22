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
                          <a href="" class="btn btn-sm btn-neutral">
                            <router-link to="/service/create">Tambah Data</router-link>
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
            <div class="table-responsive py-4">
              <table class="table table-flush" id="datatable-basic">
                <thead class="thead-light">
                  <tr>
                    <th>No</th>
                    <th>Name </th>
                    <th>Category </th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(service,index) in services.data" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{service.name}}</td>
                    <td>{{service.category}}</td>
                    <td>{{service.price}}</td>
                    <td>{{service.stock}}</td>
                    <td>
                        <router-link to="/service"><span class="btn btn-info btn-sm mr-1"><i class="fas fa-eye"></i></span></router-link>
                        <router-link :to=" {name: 'service.edit', params:{id:service.id} } "><span class="btn btn-success btn-sm mr-1"><i class="fas fa-edit"></i></span></router-link>
                        <router-link to="/service"><span class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></span></router-link>
                    </td>
                  </tr>     
                </tbody>
              </table>
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
import axios from 'axios';
import {onMounted,ref} from "vue";

export default {
  name: "service",
  components:{
    v_footer,
    navbar
  },
  setup(){
    // state reactive
      let services = ref([]);

      onMounted(() => {
        // get data from axios in services
        axios.get('api/services')
        .then((result) => {
            services.value = result.data;
        }).catch((err) => {
            console.log(err.response);
        });
    });
    return {
      services
    }
    
    
  }

}
</script>
