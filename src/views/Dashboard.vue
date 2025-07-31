<template>
   <div class="container mt-5">
       <div class="card">
          <div class="card-header">
             <h1 v-if="name" class="text-center mt-2">Welcome, {{ name }}!</h1>
          </div>
          <div class="card-body">
            <div class="mb-3">
                    <button @click="logout" class="btn btn-primary" v-if="isLoggedIn">Logout</button>
            </div> 
          </div>
        </div>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   name : 'Dashoard', 
   data(){
        return { 
            name : '',
        }
    },
   methods: {
     logout() {
      localStorage.removeItem('authToken');
      this.isLoggedIn = false;
      this.$router.push('/login'); // Redirect to login page
    }
   }, 
  created() {
    
   /* const response_jwt_token = await axios.get('user',{
        headers:{
            Authorization : 'Bearer ' + localStorage.getItem('authToken')
        }
    })*/
        // Check for existing token on component creation
    if (localStorage.getItem('authToken')) {
        this.isLoggedIn = true;
         this.name = localStorage.getItem('authToken');
        }else{
         this.$router.push('/login'); // Redirect to login page
        }
  }
}

</script>