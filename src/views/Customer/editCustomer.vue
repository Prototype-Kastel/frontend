 <template>
  <sidebar />
  <div class="main-content mt-10" id="panel">
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
              <h3 class="mb-0">Datatable Customer</h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="">Nama Lengkap</label>
                <input type="text" class="form-control" />
              </div>

              <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" />
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">phone</label>
                    <input type="date" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">birthday</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">City</label>
                    <input type="date" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">Region</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">City</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  class="form-control"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="">Notes</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  class="form-control"
                ></textarea>
              </div>

              <div class="form-group">
                <button class="btn btn-primary">Save</button>
                <button class="btn btn-neutral">Reset</button>
              </div>
            </div>
          </div>
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
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "editCustomer",
  components: {
    sidebar,
    v_footer,
    navbar,
  },
  //   setup() {
  //     let rooms = ref([]);

  //     onMounted(() => {
  //       // get data from api endpoint
  //       axios
  //         .get("api/room")
  //         .then((result) => {
  //           rooms.value = result.data;
  //         })
  //         .catch((err) => {
  //           console.log(err.response);
  //         });
  //     });

  //     return {
  //       rooms,
  //     };
  //   },
};
</script>
