<template>
  <div>
      <div class="card">
         <div class="card-header">
           <h4>
           Students
           <RouterLink to="/students/create" class="btn btn-primary float-end"> 
           Add Student 
           </RouterLink>
           </h4>
         </div>
         <div class="card-body">
           <table class="table table-bordered">
             <thead>
               <th>Id</th>
               <th>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Action</th>
             </thead>
             <tbody>
              <tr v-for="(student,index) in this.students" :key="index">
                <td>{{ student.student_id }}</td>
                <td>{{ student.student_name }}</td>
                <td>{{ student.student_email }}</td>
                <td>{{ student.student_phone }}</td>
                <td>
                  <RouterLink :to="{path : '/students/'+student.student_id+'/edit' }" class="btn btn-info"> 
                        Edit Student 
                  </RouterLink>
                  <button class="btn btn-danger" @click="deleteStudent(student.student_id)" type="button">
                    Delete Student
                  </button>
                </td>
              </tr>
             </tbody>
           </table>
            
           <!--<button @click="gotToPage(currentPage - 1)" :class="{disabled : currentPage === 1}">Previous</button>-->
           <button v-for="page in pages" :key="page" @click="gotToPage(page)" :class="{ active:page === currentPage}"> 
              {{ page }}
           </button>
            <!--<button @click="gotToPage(currentPage + 1)" :class="{disabled : currentPage === totalPages}">Next</button>-->

          </div>

      </div>
  </div>
</template>


<script>

import axios from 'axios';

export default {
    name : 'students',
    data(){
        return { 
            students : [],
            currentPage : 1,
            perPage : 5,
            totalPages : 1,
        }
    },
    computed:{
      pages(){
        const pagesArray = [];
        for(let i = 1; i <= this.totalPages; i++){
          pagesArray.push(i);
        }
        return pagesArray;
      }
    },
    mounted(){
        this.getStudens();
    },
    methods:{
        getStudens(){
            axios.get(`studentList&page=${this.currentPage}&limit=${this.perPage}`).then(res=>{
            this.students = res.data.students;
            this.currentPage = res.data.current_page;
            this.perPage = res.data.per_page;
            this.totalPages = res.data.total_pages;  

           // this.totalPages = res.data.pagination.total_pages          
            })
        },
        /*
        For auth header

         getStudens(){
           const test_token = 'D9AC8CF575C44061AC41C697104F22D8298866D847AB4B15827CE101B7E49BB3';
            axios.get(`studentList&page=${this.currentPage}&limit=${this.perPage}`,{
              headers:{
                  Authorization : 'Bearer ' + test_token
              }
            }).then(res=>{
            this.students = res.data.students;
            this.currentPage = res.data.current_page;
            this.perPage = res.data.per_page;
            this.totalPages = res.data.total_pages;  

           // this.totalPages = res.data.pagination.total_pages          
            })
        },
        */
        deleteStudent(studentId){
 axios.delete('deleteStudent&id='+studentId).then(res=>{
            
             this.getStudens();         
            })
        },
        gotToPage(page){
          console.log(page);
          if(page >=1 && page <= this.totalPages){
            this.currentPage = page;
            this.getStudens();
          }
        }
    }
}
</script>
<style scoped>
.active{
  font-weight: bold;
}
</style>