
<template>
    <form @submit="getPosts">
      <div class="form-group">
        <label for="inputName">Client Name</label>
        <input type="name" v-model="name" class="form-control"   placeholder="Enter client name">
      </div>
      <div class="form-group">
        <label for="inputEmail">Client Email</label>
        <input type="email"  v-model="email" class="form-control"   placeholder="Enter client email">
      </div>
      <div>Default password will be: password</div>
   
      
      <button type="submit" class="btn btn-primary">Edit</button>
    </form>
    
     
    </template>
    <script>
    import axios from 'axios';
    import { router } from '../_helpers';
    import data from '@/project/AllClients';
    export default {
     name: "EditClient",
      data() {
        return {
            data,
        name: "",
          email: "",
          passwordHash: "password"
         
        };
      },
      methods: {
        getPosts(){
       
            axios.post('http://localhost:4000/api/Client',{
                name:this.name,
                email:this.email,
                passwordHash:this.passwordHash
            })
           
        }
      }
      
    };