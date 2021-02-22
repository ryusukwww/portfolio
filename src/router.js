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


Vue.use(Router);

export default new Router({
    mode : 'history',
    routes: [{path:'/',component: Top},{path:'/profile',component: Profile},{path:'/work',component: Work},{path:'/portfolio',component: Portfolio},{path:'/log',component: Log},{path:'/logadmin',component: LogAdmin},{path:'/Calender',component: Calender},{ path: '/*', component: NotFound }],
    base: process.env.BASE_URL,
});