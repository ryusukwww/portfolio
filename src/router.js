import Vue from "vue";
import Router from "vue-router";
import Top from "./views/Top.vue";
import Profile from "./views/Profile.vue";
import Work from "./views/Work.vue";
import Portfolio from "./views/Portfolio.vue";
import Log from "./views/Log.vue";
import Calender from "./views/Calender.vue";


Vue.use(Router);

export default new Router({
    mode : 'history',
    routes: [{path:'/',component: Top},{path:'/profile',component: Profile},{path:'/work',component: Work},{path:'/portfolio',component: Portfolio},{path:'/log',component: Log},{path:'/Calender',component: Calender}],
    base: process.env.BASE_URL,
});