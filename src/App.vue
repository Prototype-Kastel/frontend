<template>
  <div id="app">
    <sidebar/>
     <div class="main-content mt-10" id="panel">
      <router-view/>   
     </div>
  </div>
</template>
<script>
import sidebar from "@/components/Sidebar.vue";

export default {
  name: 'app',
  components:{
    sidebar
  }
  
}
</script>