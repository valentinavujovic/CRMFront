
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
  <br>
 <div>Password will be default : password</div>
  <br>
  <button type="submit"  class="btn btn-primary">Add</button>
</form>

 
</template>
<script>
import axios from 'axios';
import { router } from '../_helpers';
export default {
 name: "ModalClient",
  data() {
    return {
    name: "",
      email: "",
      passwordHash: ""
     
    };
  },
  methods: {
    reloadPage() {
    window.location.reload();
  },
    getPosts(){
   
        axios.post('http://localhost:4000/api/Client',{
            name:this.name,
            email:this.email,
            passwordHash:"password"
        })
        alert("User added");
        router.push('/client');
       
    }
  }
  
};

</script>