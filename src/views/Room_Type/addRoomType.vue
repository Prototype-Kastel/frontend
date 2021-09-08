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
          <form @submit.prevent="store()">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">Name </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="itemRoomType.name"
                  />
                  <div v-if="validation.name" class="text-danger">
                    {{ validation.name[0] }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Bed Type </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="itemRoomType.bed_type"
                      />
                      <div v-if="validation.bed_type" class="text-danger">
                        {{ validation.bed_type[0] }}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Size </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="itemRoomType.size"
                      />
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
                      <input
                        type="number"
                        class="form-control"
                        v-model="itemRoomType.capacity"
                      />
                      <div v-if="validation.capacity" class="text-danger">
                        {{ validation.capacity[0] }}
                      </div>
                    </div>
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
                  <select
                    class="form-control"
                    multiple
                    v-model="itemRoomType.room_type_facility"
                  >
                    <option selected>masukan pilihan anda</option>
                    <option
                      v-for="(services, index) in service.data"
                      :key="index"
                      :value="services.id"
                    >
                      {{ services.name }}
                    </option>
                  </select>
                  <div v-if="validation.gender" class="text-danger">
                    {{ validation.gender[0] }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="">Notes</label>
                  <textarea
                    type="text"
                    class="form-control"
                    v-model="itemRoomType.notes"
                  />
                  <div v-if="validation.category" class="text-danger">
                    {{ validation.category[0] }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">Gallery</label>
                  <input
                    type="file"
                    @change="previewFiles"
                    multiple
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <button class="btn btn-primary">Submit</button>
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
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "addRoomType",
  components: {
    sidebar,
    v_footer,
    navbar,
  },
  setup() {
    //   data binding
    const itemRoomType = reactive({
      name: "",
      bed_type: "",
      capacity: "",
      gender: "",
      size: "",
      room_type_facility: [],
      galleries: [],
      notes: "",
    });

    let service = ref([]);
    let dataPhoto = ref([]);
    const validation = ref([]);
    //   redirect setelah store
    const router = useRouter();

    onMounted(() => {
      axios
        .get("api/services/facility")
        .then((result) => {
          service.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function previewFiles(event) {
      dataPhoto = event.target.files;

      let formData = new FormData();
      formData.append(dataPhoto);
      itemRoomType.galleries.append(formData);
    }

    function store() {
      console.log(itemRoomType);
      axios
        .post("api/roomtype/store", itemRoomType)
        .then(() => {
          router.push({
            name: "roomtype",
          });
        })
        .catch((err) => {
          validation.value = err.response.data;
        });
    }
    return {
      itemRoomType,
      validation,
      router,
      store,
      service,
      previewFiles,
    };
  },
};
</script>
