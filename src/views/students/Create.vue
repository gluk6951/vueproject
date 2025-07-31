<template>
    <div class="container mt-5">
       <div class="card">
          <div class="card-header">
             <h4 class="text-center mt-2">Add Student</h4>
          </div>
          <div class="card-body">
             <div class="mb-3">
                <label for="">Name</label>
                <input type="text" v-model="model.student.name" class="form-control">
             </div>
             <div class="mb-3">
                <label for="">Email</label>
                <input type="text" v-model="model.student.email" class="form-control">
             </div>
             <div class="mb-3">
                <label for="">Phone</label>
                <input type="text" v-model="model.student.phone" class="form-control">
             </div>
             <div class="mb-3">
                <button type="button" v-on:click="saveStudent" class="btn btn-primary">
                Save
                </button>
             </div>
          </div>
       </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name : 'StudentCreate',
    data(){
        return{
            model:{
                student:{
                    name: '',
                    email: '',
                    phone: '',
                }
            }
        }
    },
    methods:{
     saveStudent(){
             axios.post('addStudent', this.model.student)
                .then(res=>{
                            console.log(res.data);
                            this.$router.push('/students'); 
                            this.model.student = {
                                    name: '',
                                    email: '',
                                    phone: ''
                            }                           
                        }).catch(function (error){
                               console.log(error);
                        })
        }
    }
}

</script>