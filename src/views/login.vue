<template>
  <div class="row login">
    <div style="display:inline-block;padding:50px" class="col-md-6 form">
            <img src="img/logo.png" alt="">
            <h1 style="margin-top:30px">Login</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
    </div>
    <div class="col-md-6" style="display:inline-block">
        <div class="image-login">
            <img src="img/hero/hero-2.jpg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  name: "login",
  components: {},
};
</script>
