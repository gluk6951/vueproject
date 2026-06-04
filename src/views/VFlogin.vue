<template>
<v-card class="pa-4"> 
<v-card-title>Login Form</v-card-title>    
<v-card-item>    
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent="submit">
      <v-text-field v-for="text in text_fields"
        :variant="text.variant"
        :prepend-inner-icon="text.icon"
        :v-model= "text.modelf"
        :label="text.labelf"
      ></v-text-field>
      <v-text-field
        variant="solo"
        type="password"
        prepend-inner-icon="mdi-key"
        v-model="form.passWord"
        label="Password"
      ></v-text-field>
       <v-checkbox 
       label="Remember Me"
       v-model ="form.remember"
       ></v-checkbox>
      <v-btn class="mt-2" color="red" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
 </v-card-item> 
 <v-card-actions>
    <v-btn class="mt-2" to="/register" block>
      Register
    </v-btn>
 </v-card-actions>
 </v-card> 
</template>
<script setup>
  import { ref } from 'vue'
  
  const form = ref({
     userName : "",
     firstName : "",
     passWord : "",
     remember : ""
  })

  const text_fields = ref([
          { labelf: 'Username', modelf: form.userName , variant :'solo', icon : 'mdi-email'},
          { labelf: 'Firstname', modelf: form.firstName , variant :'solo', icon : 'mdi-account'},
   ]);

  function submit(){
    alert(JSON.stringify(form.value))
  }
  
</script>