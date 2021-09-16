<template>
  <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar />
  </div>
  <div class="container-fluid mt--6">
    <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">Add Data Customer</h3>
            </div>
            <div class="card-body">
            <form @submit.prevent="addBookingCustomer()">            
                 
                      <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" v-model="customer.name">
                      </div>

                       <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" class="form-control" v-model="customer.email">
                      </div>

                      <div class="row">
                          <div class="col-md-6">
                               <div class="form-group">
                                    <label for="">Birthday</label>
                                    <input type="date" class="form-control" v-model="customer.birthday">
                                </div>
                          </div>
                          <div class="col-md-6">
                               <div class="form-group">
                                    <label for="">Phone</label>
                                    <input type="text" class="form-control" v-model="customer.phone">
                                </div>
                          </div>
                      </div>

                       <div class="row">
                          <div class="col-md-6">
                               <div class="form-group">
                                    <label for="">City</label>
                                    <input type="text" class="form-control" v-model="customer.city">
                                </div>
                          </div>
                          <div class="col-md-6">
                               <div class="form-group">
                                    <label for="">Province</label>
                                    <input type="text" class="form-control" v-model="customer.province">
                                </div>
                          </div>
                      </div>

                       <div class="row">
                          <div class="col-md-6">
                               <div class="form-group">
                                    <label for="">Region</label>
                                    <input type="text" class="form-control" v-model="customer.region">
                                </div>
                          </div>
                          <div class="col-md-6">
                               <div class="form-group">
                                    <label for="">Postal Code</label>
                                    <input type="text" class="form-control" v-model="customer.postal_code">
                                </div>
                          </div>
                      </div>
                       <div class="form-group">
                        <label for="">Photo</label>
                        <input type="file" class="form-control" @change="previewPhoto">
                      </div>

                       <div class="form-group">
                        <label for="">Address</label>
                        <textarea name=""  class="form-control"  id="" cols="30" rows="3" v-model="customer.address"> </textarea>
                      </div>
                     
                   
                  <div class=" form-group d-flex align-items-center ">
                            <button type="submit" class="btn btn-primary d-flex align-items-center ">
                              Save
                              <template v-if="loading">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.6081871345029237s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(30 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.461988304093567s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(60 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.3157894736842104s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.1695906432748537s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(120 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-1.023391812865497s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(150 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.8771929824561403s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.7309941520467835s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(210 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.5847953216374269s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(240 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.43859649122807015s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.29239766081871343s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(300 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="-0.14619883040935672s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(330 50 50)"> <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#cee8ed"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.7543859649122806s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> <!-- [ldio] generated by https://loading.io/ --></svg>
                             </template>
                            </button>
                            <button class="btn btn-neutral">Reset</button>
                  </div>     
               </form>
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
import { useRouter } from "vue-router";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: "addcheckinCustomer",
  components: {
    v_footer,
    navbar,
  },
  data(){
    return{
        router:useRouter(),
        customer:{
            name:'',
            email:'',
            birthday:'',
            postal_code:'',
            region:'',
            city:'',
            address:'',
            photo:''
        },
        loading : false
    }
  },
  methods: {
      previewPhoto(e){
        this.customer.photo = e.target.files[0];
        console.log(this.customer.photo);
      },
      async addBookingCustomer(){
            this.loading = true;
            let fd = new FormData();
            fd.append('name',this.customer.name);
            fd.append('phone',this.customer.phone);
            fd.append('email',this.customer.email);
            fd.append('birthday',this.customer.birthday);
            fd.append('postal_code',this.customer.postal_code);
            fd.append('region',this.customer.region);
            fd.append('city',this.customer.city);
            fd.append('address',this.customer.address);
            fd.append('photo',this.customer.photo);

            try {
                let response = await axios.post(`api/booking/${this.$route.params.id}/addcustomer`,fd);
                if (response.status == 200) {
                    this.loading = false;
                    createToast('data berhasil diubah',
                    {
                        showIcon: 'true',
                        position: 'top-right',
                        type: 'success',
                        transition: 'bounce',
                    });

                    this.$router.push({
                            name : 'booking.edit'
                    })
                } else {
                     this.loading = false;
                     createToast('data gagal diubah',
                    {
                        showIcon: 'true',
                        position: 'top-right',
                        type: 'error',
                        transition: 'bounce',
                    });
                }
            } catch (error) {
                this.loading = false;
                console.log(error);
            }
      }
  },
};
</script>

