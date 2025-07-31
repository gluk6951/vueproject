<template>
   <div class="container mt-5">
       <div class="card">
          <div class="card-header">
             <h4 class="text-center mt-2">Login</h4>
          </div>
          <div class="card-body">
                <form @submit.prevent="login">
                     <div class="mb-3">
                         <label for="">Username</label>
                         <input type="text" v-model="username" class="form-control" placeholder="Username">
                     </div>
                     <div class="mb-3">
                         <label for="">Password</label>
                         <input type="password" v-model="password" class="form-control" placeholder="Password">
                     </div>
                    <div class="mb-3">
                         <button type="submit" class="btn btn-info">Login</button>
                    </div>             
                </form>
           </div>
       </div>
    </div>
            <!--<button @click="logout" v-if="isLoggedIn">Logout</button>-->
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false // In a real app, this would be managed by Vuex
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('login', {
          username: this.username,
          password: this.password
        });
       
        localStorage.setItem('authToken', response.data.login.username);
        this.isLoggedIn = true;
        this.$router.push('/dashboard'); // Redirect to dashboard
        
      } catch (error) {
        alert('Incorrect Username and Password!');
      }
    },
    logout() {
      localStorage.removeItem('authToken');
      this.isLoggedIn = false;
      this.$router.push('/login'); // Redirect to login page
    }
  },
  created() {
    // Check for existing token on component creation
    if (localStorage.getItem('authToken')) {
      this.isLoggedIn = true;
    }
  }
};
</script>