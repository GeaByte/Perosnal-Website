import { createWebHistory, createRouter } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import ProjectsInfo from "@/components/ProjectsInfo.vue";
import AboutMe from "@/components/AboutMe.vue";
const routes = [
    {
        path:'/',
        alias: '/home',
        name:'homePage',
        component: HomePage
    },
    {
        path:"/projects",
        name:"projectsInfo",
        component: ProjectsInfo
    },
    {
        path:"/about",
        name:"aboutMe",
        component: AboutMe
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;