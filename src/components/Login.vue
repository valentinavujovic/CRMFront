<template>
    <div class = "col-md-12">
        <div class="container">
            <h3 class="e-shop-font">Login page</h3>
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input v-model="user.username" ref="username" type="text" class="form-control" placeholder="Enter username" name="username"/>
                        </div>
                        <div class="form-group">
                            <label for="psw">Password</label>
                            <input v-model="user.password" ref="psw" type="password" class="form-control" placeholder="Enter password" name="psw"/>
                        </div>
                        <div class="form group form-check">
                            <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember">Remember me
                            </label>
                        </div>
                        <div class="clearfix">
                            <button type="button" class="signin" v-on:click="login">Sign in</button>

                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
import Swal from 'sweetalert2'
export default{
    name:"LoginComponent",
    data(){
        return{
            user:{
                username:"",
                password:""
            }
        }
    },
    methods:{
login(){
    if(this.checkValidation()){
        axios.get(this.hostname+"/api/client" + this.user.username+"/"+ this.user.password)
        .then(response=>{
                if(response.data.Id>0){
                    localStorage.setItem('token',JSON.stringify(response.data.token));
                    response.data.token="";
                    localStorage.setItem('user',JSON.stringify(response.data));
                    this.$router.push({name:"DashBoard"});
                }
            })
        }
    },
checkValidation(){
    if(!this.user.username){
        this.$refs.username.focus();
        Swal.fire("Give username");
        return;
    }
    if(!this.user.password){
        this.$refs.password.focus();
        Swal.fire("Give password");
        return;
    }
    return true;
}
    }
}
</script>