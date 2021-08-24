<template>
  <div class="header bg-primary pb-6">
    <navbar />
  </div>
  <div class="container-fluid mt--4">
    <v_footer />
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
import v_footer from "@/components/v_footer.vue";
export default {
  components: {
    navbar,
    v_footer,
  },
};
</script>

<style scoped>
</style>