<template>
  <!--<v-app-bar title="Application bar"></v-app-bar>-->
   <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title text="">{{ appTitle }}</v-toolbar-title>
       <v-btn to="/vflogin" color="#E91E6" variant="outlined" size="small">Login</v-btn>
    </v-toolbar>
</template>



<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "Header",
  data(){
    return {
      appTitle: 'Vuetify',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' }
     ]
    }
  },
};
</script>

