 <template>
  <sidebar />
  <div class="main-content mt-10" id="panel">
    <div class="header bg-primary pb-6">
    <!-- for navbar -->
    <navbar />
    <div class="container-fluid"></div>
  </div>
  <div class="container-fluid mt--6">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h3 class="mb-0">Add Lost Found</h3>
          </div>

          <div class="card-body">
            <div class="form-group">
              <label for="">Data Fasilitas</label>

              <div class="table-responsive py-4">
                <table class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th>Fasilitas</th>
                      <th>check</th>
                      <th>Deskripsi</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Setrika</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary btn-sm"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          check
                        </button>
                      </td>
                      <td>Broken</td>
                    </tr>
                    <tr>
                      <td>Kompor</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary btn-sm"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          check
                        </button>
                      </td>
                      <td>Broken</td>
                    </tr>
                    <tr>
                      <td>Lampu</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary btn-sm"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          check
                        </button>
                      </td>
                      <td>Broken</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="form-group">
              <label for="">Found</label>
              <form action="" style="border: 0.5px solid grey">
                <div>
                  <input
                    type="text"
                    class="form-control"
                    value="Bucharest, Cluj, Iasi, Timisoara, Piatra Neamt"
                    data-toggle="tags"
                  />
                </div>
              </form>
            </div>

            <div class="form-group">
              <label for="">Status Kamar</label>
              <input type="text" class="form-control" />
            </div>

            <div class="form-group">
              <button class="btn btn-primary">Save</button>
              <button class="btn btn-neutral">Reset</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Data Room</h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="">Room Type</label>
              <input type="text" class="form-control" value="Medium" />
            </div>
            <div class="form-group">
              <label for="">No Room</label>
              <input type="text" class="form-control" value="B17" />
            </div>
            <div class="form-group">
              <label for="">Floor</label>
              <input type="text" class="form-control" value="3" />
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
  name: "addLostFound",
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
