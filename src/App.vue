import {RouterLink , RouterView} from 'vue-router'


<template>
  <v-app>
     <HeaderView />
      <v-main class="d-flex align-center justify-center" height="300">
        <v-container>
           <RouterView/>
         </v-container>
      </v-main>  
      
  </v-app>
</template>

<!--<template>
<header>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse float-right" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/home">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/students">Students</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/login">Login</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
 </header> 
 
<RouterView/>
</template>-->

<script>
    import HeaderView from '../src/components/Header.vue';
  
    export default {
      name: 'App',
      components: {
        HeaderView // Register the component for use in the template
      }
    };
    </script>