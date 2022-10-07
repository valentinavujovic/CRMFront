import{createRouter,createWebHistory} from 'vue-router'
import Login from "./components/Login.vue"
const Dashboard=()=>import("./components/Dashboard.vue")
const routes=[
    {
        path: "/",
        alias:['/login'],
        name:"Login",
        component:Login,
    },
    {
        path:"/dashboard",
        name:"Dashboard",
        component:Dashboard,
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
router.beforeEach((to,from,next)=>{
    const publicPages=['login'];
    const authRequired=!publicPages.includes(to.path);
    const loggedIn=localStorage.getItem('token');
    if(authRequired && !loggedIn){
        next('/login');
    }else{
        next();
    }
    if(authRequired){
        next('/login')
    }else{
        next();
    }
});
export default router;