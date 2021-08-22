<template>
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
          <div class="col-lg-6 col-5 text-right">
             <a  class="btn btn-sm btn-neutral">
                  <router-link to="/roomprice/create">Tambah Data</router-link>
             </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt--4">
    <div class="row">
      <div class="col">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h3 class="mb-0">Datatable Room Price</h3>
          </div>
          <div class="table-responsive py-4">
            <table class="table table-flush" id="datatable-basic">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>Room Type</th>
                  <th>Name Price</th>
                  <th>Price Type</th>
                  <th>Price</th>
                  <th>Start Date</th>
                  <th>Promo Code</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(itemRoomPrice,index) in roomPrices.data"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>
                      {{ itemRoomPrice.room_type.name }}
                  </td>
                   <td>
                      {{ itemRoomPrice.name }}
                  </td>
                  <td>{{ itemRoomPrice.price_type }}</td>
                  <td>{{ itemRoomPrice.price }}</td>
                  <td>{{ itemRoomPrice.start_date }}</td>
                  <td>{{ itemRoomPrice.promo_code }}</td>
                  <td>
                   <router-link to="/roomprice"><span class="btn btn-info btn-sm mr-1"><i class="fas fa-eye"></i></span></router-link>
                   <router-link :to=" {name: 'roomprice.edit', params:{id:itemRoomPrice.id} } "><span class="btn btn-success btn-sm mr-1"><i class="fas fa-edit"></i></span></router-link>
                   <button class="btn btn-danger btn-sm" @click.prevent="destroy(itemRoomPrice.id,index)"><i class="fas fa-trash"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <v_footer />
  </div>
</template>

<script>
import v_footer from "@/components/v_footer.vue";
import navbar from "@/components/Navbar.vue";
import axios from "axios";
import {onMounted,ref} from "vue";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: "RoomPrice",
  components: {
    v_footer,
    navbar,
  },
  setup() {
    //  state reactuve
    let roomPrices = ref([]);

    onMounted(() => {
      axios.get('api/roomprice')
      .then((result) => {
        roomPrices.value = result.data;
        
      }).catch((err) => {
        console.log(err.response);
      });
    })

    function destroy(id,index) {
        let response  = window.confirm('apakah anda yakin ?');
        if (response == true) {
            axios.delete(`api/roomprice/${id}/destroy`)
            .then(() => {
              roomPrices.value.data.splice(index,1);
              createToast('Data Berhasil dihapus',
              {
                  showIcon: 'true',
                  position: 'top-right',
                  type: 'success',
                  transition: 'bounce',
              });
            }).catch((err) => {
              console.log(err.response.data);
            });
        } else {
           createToast('Anda tidak berhasil menghapus',
              {
                  showIcon: 'true',
                  position: 'top-right',
                  type: 'danger',
                  transition: 'zoom',
              });
        }  
    }
    return {
      roomPrices,
      destroy
    }
    
  }
};
</script>
