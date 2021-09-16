<template>
  <div class="row login">
    <div style="display:inline-block;padding:50px" class="col-md-6 form">
            <img src="img/logo.png" alt="">
            <h1 style="margin-top:30px">Registrasi</h1>
            <form>
                <div class="form-group">
                    <label for="nama">Nama Lengkap</label>
                    <input type="text" class="form-control" id="nama" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                    <label for="nomor-hp">Nomer HP</label>
                    <input type="text" class="form-control" id="nomor-hp">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password">
                </div>
                <div class="form-group">
                    <label for="password">Konfirmasi Password</label>
                    <input type="password" class="form-control" id="password">
                </div>
                <button type="submit" class="btn btn-primary">Daftar</button>
            </form>
    </div>
    <div class="col-md-6" style="display:inline-block">
        <div class="image-login">
            <img src="img/hero/hero-3.jpg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "register",
  components: {},
};
</script>
