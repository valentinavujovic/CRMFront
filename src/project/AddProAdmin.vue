<template>

    <form @submit="getPosts()">

      <div class="form-group">
        <label for="inputName">Project Title</label>
        <input type="name" v-model="name" class="form-control"   placeholder="Enter project title">
      </div>
      <div class="form-group">
        <label for="inputEmail">Project Description</label>
        <input type="text"  v-model="description" class="form-control"   placeholder="Enter project description">
      </div>
      <div class="form-group">
        <label for="inputPassword1">Project Deadline</label>
        <input type="date"  v-model="date" class="form-control"  placeholder="Enter Project Deadline">
      </div>
      <div class="form-group">
    <label for="status">Project Status</label>
    <select class="form-control" v-model="status">
      <option>Open</option>
      <option>In Progress</option>
      <option>Cancelled</option>
      <option>Completed</option>
      
    </select>
  </div>
      
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
       
    
     
    </template>
    <script>
    import axios from 'axios';
    import { router } from '../_helpers';
    import { userService, authenticationService } from '@/_services';
    export default {
     name: "AddPro",
      data() {
        return {
            currentUser: authenticationService.currentUserValue,
            userFromApi:null,
        name: "",
          description: "",
          date: "",
          status:"",
          
         
        };
      },
    created () {
        userService.getById(this.currentUser.id).then(user => this.userFromApi = user);
    },
      methods: {
       
        getPosts(){
       
            axios.post('http://localhost:4000/api/Project',{
                
                projectTitle:this.name,
                projectDescription:this.description,
                projectdeadline:this.date,
                projectStatus:this.status,
                users_id:localStorage.getItem('id')
            })
            alert("Project added");
            
            router.push('/pro');
           
        }
      }
      
    };
    
    </script>