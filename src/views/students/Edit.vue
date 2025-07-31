<template>
    <div class="container mt-5">
       <div class="card">
          <div class="card-header">
             <h4 class="text-center mt-2">Edit Student</h4>
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
                <button type="button" v-on:click="updateStudent" class="btn btn-primary">
                Update
                </button>
             </div>
          </div>
       </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name : 'StudentEdit',
    data(){
        return{
           studentId: '',
            model:{
                student:{
                    name: '',
                    email: '',
                    phone: '',
                }
            }
        }
    },
    mounted(){  
        this.studentId = this.$route.params.id;
        this.getStudentData(this.$route.params.id);
    },
    methods:{

      getStudentData(studentId){
           axios.get('getStudentData&id='+studentId).then(res =>{
                   console.log(res.data.student);  
                   this.model.student.name =  res.data.student.student_name;
                   this.model.student.email =  res.data.student.student_email;
                   this.model.student.phone =  res.data.student.student_phone;
           });
      },
     updateStudent(){
             axios.put('https://www.karurijewellers.com/index.php?route=api/order/updateStudent&id='+this.studentId, this.model.student)
                .then(res=>{
                            console.log(res.data);
                            this.$router.push('/students');                      
                        }).catch(function (error){
                               console.log(error);
                        })
        }
    }
}

</script>