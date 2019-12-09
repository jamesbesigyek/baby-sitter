<template>
    <!--  form login -->
<div class="card">

  <h5 class="card-header info-color white-text text-center py-4">
    <strong>Sign in</strong>
  </h5>

  <!--Card content-->
  <div class="card-body px-lg-5 pt-0">

    <!-- Form -->
    <form class="text-center" style="color: #757575;" action="#!" @submit.prevent="loginUser">

      <!-- Email -->
      <div class="md-form">
        <input type="email" id="LoginFormEmail" class="form-control" v-model="post.email">
        <label for="LoginFormEmail">E-mail</label>
      </div>

      <!-- Password -->
      <div class="md-form">
        <input type="password" id="LoginFormPassword" class="form-control" v-model="post.password">
        <label for="LoginFormPassword">Password</label>
      </div>

      <div class="d-flex justify-content-around">
        <div>
          <!-- Remember me -->
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="LoginFormRemember" v-model="post.remember">
            <label class="form-check-label" for="LoginFormRemember">Remember me</label>
          </div>
        </div>
        <div>
          <!-- Forgot password -->
          <a href="">Forgot password?</a>
        </div>
      </div>

      <!-- Sign in button -->
      <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

      <!-- Register -->
      <p>Not a member?
        <a href="">Register</a>
      </p>

      
    </form>
    <!-- Form -->

  </div>

</div>
<!--  form login -->

    
</template>
<script>
export default {
  data(){
        return {
          post:{}
        }
  },
  methods: {
      loginUser(){
        let uri = 'http://localhost:4000/login/login';
        this.axios.post(uri, this.post).then(() => {
          this.$router.push({name: 'posts'})
        })
      }
    }
    
}
</script>
<style>

</style>