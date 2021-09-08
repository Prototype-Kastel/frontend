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
          <h3 class="mb-0">Update Data Room</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="update()">
            <!-- Form groups used in grid -->
            <div class="form-group">
              <label for="">No Room</label>
              <input type="text" class="form-control" v-model="rooms.no_room" />
            </div>
            <div class="form-group">
              <label for="">Room Type </label>
              <select v-model="rooms.roomType_id" class="form-control">
                <option
                  v-for="(roomType, index) in roomtypes.data"
                  :key="index"
                  :value="roomType.id"
                >
                  {{ roomType.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="">Floor</label>
              <input type="text" class="form-control" v-model="rooms.floor" />
            </div>
            <div class="form-group">
              <label for="">Room Status</label>
              <select v-model="rooms.room_status" class="form-control">
                <option :value="rooms.room_status">
                  {{ rooms.room_status }}
                </option>
                <option value="Vacant_Dirty">Vacant Dirty</option>
                <option value="Vacant_Clean">Vacant Clean</option>
                <option value="Occupied">Occupied</option>
                <option value="Lost_of_Order">Lost Of Order</option>
              </select>
            </div>
            <div class="form-group">
              <label for="">Smooking Area</label>
              <select v-model="rooms.smooking_area" class="form-control">
                <option :value="1">Ya</option>
                <option :value="0">Tidak</option>
              </select>
            </div>
            <div class="form-group">
              <label for="">Notes</label>
              <textarea
                name=""
                class="form-control"
                id=""
                cols="30"
                rows="5"
                v-model="rooms.notes"
              ></textarea>
            </div>
            <div>
              <button type="submit" class="btn btn-primary btn-sm">Save</button>
              <button type="reset" class="btn btn-neutral btn-sm">Reset</button>
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
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

export default {
  name: "editRoom",
  components: {
    v_footer,
    navbar,
  },
  setup() {
    //   data binding
    let rooms = reactive({
      no_room: "",
      roomType_id: "",
      floor: "",
      room_status: "",
      smooking_area: "",
      notes: "",
    });

    let roomtypes = ref([]);

    const validation = ref([]);
    //   redirect setelah store
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      axios
        .get("api/roomtype")
        .then((result) => {
          roomtypes.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });

      axios
        .get(`api/room/${route.params.id}/show`)
        .then((result) => {
          rooms.no_room = result.data.data.no_room;
          rooms.roomType_id = result.data.data.roomType_id;
          rooms.floor = result.data.data.floor;
          rooms.room_status = result.data.data.room_status;
          rooms.notes = result.data.data.notes;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    });
    function update() {
      axios
        .put(`api/room/${route.params.id}/update`, rooms)
        .then(() => {
          router.push({
            name: "room",
          });
        })
        .catch((err) => {
          validation.value = err.response.data;
        });
    }
    return {
      rooms,
      roomtypes,
      validation,
      router,
      route,
      update,
    };
  },
};
</script>
