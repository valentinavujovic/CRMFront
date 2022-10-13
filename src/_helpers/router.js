import Vue from 'vue';
import Router from 'vue-router';

import { authenticationService } from '@/_services';
import { Role } from '@/_helpers';
import HomePage from '@/home/HomePage';
import AdminPage from '@/admin/AdminPage';
import LoginPage from '@/login/LoginPage';
import ProjectPage from '@/project/ProjectPage';
import ProjectPageAll from '@/project/ProjectPage';
import AllClients from '@/project/AllClients';
import ModalClient from '@/components/ModalClient'
import EditClient from '@/components/EditClient'
import AddPro from '@/project/AddPro';
import Pro from '@/project/Pro';
import AddProAdmin from '@/project/AddProAdmin';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: HomePage, 
            meta: { authorize: [] } 
        },
        {
            path: '/client', 
            component: AllClients, 
            meta: { authorize: [Role.Admin] } 
        },
        {
            path: '/project', 
            component: ProjectPage, 
            meta: { authorize: [Role.User] } 
        },
        {
            path: '/addpro', 
            component: AddPro, 
            meta: { authorize: [Role.User] } 
 
        },
        {
            path: '/addproadmin', 
            component: AddProAdmin, 
            meta: { authorize: [Role.Admin] } 
 
        },
        {
            path: '/pro',
            component: Pro, 
            meta: { authorize: [Role.Admin] } 
           
        },
        
        {
            path: '/components', 
            component: ModalClient
            
        },
        {
            path: '/project', 
            component: ProjectPageAll, 
        
            
        },
        {
            path: '/edit', 
            component: EditClient
           
        },
        { 
            path: '/admin', 
            component: AdminPage, 
            meta: { authorize: [Role.Admin] } 
        },
        { 
            path: '/login', 
            component: LoginPage 
        },

        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize } = to.meta;
    const currentUser = authenticationService.currentUserValue;
  
    if (authorize) {
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({ path: '/login', query: { returnUrl: to.path } });
        }

        // check if route is restricted by role
        if (authorize.length && !authorize.includes(currentUser.role)) {
            // role not authorised so redirect to home page
            return next({ path: '/' });
        }
    }

    next();
})