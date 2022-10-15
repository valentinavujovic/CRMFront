<template>
   <div>
    <router-link to="/components"><button type="button" class="btn btn-primary">
  AddClient
</button></router-link>
    <table class="table table-striped">
        
        <thead>
         
            <tr>
                <th>
                    User Id
                </th>
                <th>
                    Client Name
                </th>
                <th>
                    Client Email
                </th>
                <th>
                    Projects
                </th>
                <th>
                    Options
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="u in users">
                <td>{{u.id}}</td>
                <td>{{u.name}}</td>
                <td>{{u.email}}</td>
              
                
                <td>
                    <router-link to="/pro"><button type="button" @click="proj(u.id)" class="btn btn-ligh mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">
  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
</svg></button></router-link>
                </td>
                <td>
                    <button type ="button" @click="editCli(u.id,u.name,u.email,u.passwordHash)"  class="btn btn-light mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
                    <button type ="button" @click="delClick(u.id)" class="btn btn-light mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>

                </td>
                <td>
                    <button type="button" @click="editPass(u.id,u.name,u.email)">Change password for client</button>
                </td>
            </tr>

        </tbody>
    </table>
    
 
</div>
</template>
<script>

import { authenticationService, userService } from '@/_services';
import { toHandlers } from '@vue/runtime-core';
import axios from 'axios';

export default {

    data () {
        return {
            users: [],
            
        };
    },
    methods:{
        proj(id){
        localStorage.setItem('id', id) ;
        },
        editCli(id,name,email,password){
        var namee= prompt("Change Client Name", name);
         var emaill=prompt("Change Client email", email);

         axios.put('http://localhost:4000/api/Client',{
            id: id,
            name:namee,
            email:emaill,
            passwordHash:password
        })
        location.reload();
        alert("Changed");
        },
        editPass(id,name,email){
        var passwordd= prompt("Change Client password");
         axios.put('http://localhost:4000/api/Client',{
            id: id,
            name:name,
            email:email,
            passwordHash:passwordd
        })
        location.reload();
        alert("Changed password to:"+ passwordd);
        },
        
    reloadPage() {
    window.location.reload();
  },
        delClick(id){
    
          if(!confirm("Are you sure?")){
            return;
          }
         
          
          axios.delete('http://localhost:4000/api/Client/'+id)
          .then((res)=>{
        this.refreshData();
        alert(response.data);
          })
          location.reload();
          alert("Deleted!");
          
        },
        
        
   
    },
    created () {
        userService.getClients().then(users => this.users = users);
    
    }
};
</script>
