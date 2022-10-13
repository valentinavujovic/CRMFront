<template>
    <div>
        <h1>Home</h1>
        <p>You're logged in</p>
        <p>Your role is: <strong>{{da(currentUser.role)}}</strong></p>
        <p>Your id is: <strong>{{currentUser.id}}</strong></p>
       
        <div>
            Current user
            <ul v-if="userFromApi">
                <li>{{userFromApi.name}} </li>
                <li>Email: {{userFromApi.email}} </li>
            </ul>
        </div>
        <div>
          <button @click="chan(userFromApi.role,userFromApi.id,userFromApi.passwordHash,userFromApi.name,userFromApi.email)">Change My Password</button>
        </div>
    </div>
</template>

<script>
import { userService, authenticationService } from '@/_services';
import axios from 'axios';
export default {
    data () {
        return {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null,
            
        };
    
    },
    methods:{
        da(id){
        if(id==0){
            return 'Admin';
        }else if(id==1){
            return 'Client';
        }
        },
        chan(ro,id,pass,namee,emaill){
           var password=prompt("Enter your password");
            if(pass==password){
               var newpass=prompt("Enter new password");
            }else{
                alert("Incorect password, try again");
                return;
            }
          
            axios.put('http://localhost:4000/api/Client/users',{
            id: id,
            name:namee,
            email:emaill,
            passwordHash:newpass,
            role:ro
            
        })
        location.reload();
        alert("Changed");
           

        }
    },
    created () {
        userService.getById(this.currentUser.id).then(user => this.userFromApi = user);
    }
};
</script>