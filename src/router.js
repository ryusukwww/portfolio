import Vue from "vue";
import Router from "vue-router";
import Top from "./views/Top.vue";
import Profile from "./views/Profile.vue";
import Work from "./views/Work.vue";
import Portfolio from "./views/Portfolio.vue";
import Log from "./views/Log.vue";
import LogAdmin from "./views/LogAdmin.vue";
import Calender from "./views/Calender.vue";
import NotFound from "./views/NotFound.vue";
import Login from "./views/Login.vue";
import Resister from "./views/Resister.vue";
import Success from "./views/Success.vue";
import store from './store';

Vue.use(Router);

export default new Router({
    mode : 'history',
    routes: [
        {
            path:'/',
            component: Top
        },
        {
            path:'/profile',
            component: Profile
        },
        {
            path:'/work',
            component: Work
        },
        {
            path:'/portfolio',
            component: Portfolio
        },
        {
            path:'/log',
            component: Log
        },
        {
            path:'/logadmin',
            component: LogAdmin,
            beforeEnter(to, from, next){
                if(store.getters.idToken){
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path:'/calender',
            component: Calender
        },
        {
            path:'/login',
            component: Login
        },
        {
            path:'/resister',
            component: Resister
        },
        {
            path:'/success',
            component: Success
        },
        { 
            path: '/*',
            component: NotFound
        }
    ],
    base: process.env.BASE_URL,
});