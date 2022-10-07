import{createRouter,createWebHistory} from 'vue-router'

const LoginComponent=()=>import("./components/Login.vue")
const DashBoard=()=>import("./components/DashBoard.vue")
const routes=[
    {
        path: "/",
        redirect:{
        name:"Login",
        }
    },
    {path:"/login",
name:"Login",
component:LoginComponent
},
    {
        path:"/dashboard",
        name:"DashBoard",
        component:DashBoard,
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
router.beforeEach((to,from,next)=>{
    const publicPages=['Login'];
    const authRequired=!publicPages.includes(to.path);
    const loggedIn=localStorage.getItem('token');
    if(authRequired && !loggedIn){
        next('/Login');
    }else{
        next();
    }
    if(authRequired){
        next('/Login')
    }else{
        next();
    }
});
export default router;