<template>
  <div class="card">

  <h5 class="card-header info-color white-text text-center py-4">
    <strong>Register Staff member</strong>
  </h5>

  <!--Card content-->
  <div class="card-body px-lg-5 pt-0">

    <!-- Form -->
    <form class="text-center" style="color: #757575;" action="#!" @submit.prevent="registerStaff">
      <!-- First Name -->
      <div class="md-form">
          <label for="staffFirstName">First Name</label>
        <input type="text" id="StaffFirstName" class="form-control" v-model="post.StaffFirstName">
      
      </div>
      <!-- Last Name -->
      <div class="md-form">
          <label for="staffLastName">Last Name</label>
        <input type="text" id="StaffLastName" class="form-control" v-model="post.StaffLastName">
      
      </div>

      <!-- Telephone Contact -->
      <div class="md-form">
          <label for="staffFirstName">Telephone</label>
        <input type="number" id="StaffTelephone" class="form-control" v-model="post.StaffTelephone">
      
      </div>



      <!-- Email -->
      <div class="md-form">
          <label for="LoginFormEmail">E-mail</label>
        <input type="email" id="StaffEmail" class="form-control" v-model="post.StaffEmail">
      
      </div>

      <!-- Password -->
      <div class="md-form">
        <label for="LoginFormPassword">Password</label>
        <input type="password" id="StaffPassword" class="form-control" v-model="post.StaffPassword">
        
      </div>

      

      <!-- Sign in button -->
      <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Register</button>

      <!-- Register -->
      

      
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
    registerStaff(){
      let uri = 'http://localhost:4000/register';
      this.axios.post(uri, this.post).then(() => {
        this.$router.push({name: 'registers'})  //registers is the collection name
      })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
