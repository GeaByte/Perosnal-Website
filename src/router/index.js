import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ProjectsInfo from '@/components/ProjectsInfo.vue';
import AboutMe from '@/components/AboutMe.vue';
import ProjectDetail from '@/components/ProjectDetail.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  { path: '/', alias: '/home', name: 'homePage', component: HomePage },
  { path: '/projects', name: 'projectsInfo', component: ProjectsInfo },
  { path: '/about', name: 'aboutMe', component: AboutMe },
  { path: '/projects/:projectId', name: 'projectDetail', component: ProjectDetail, props: true },
  { path: '/:catchAll(.*)', name: 'notFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
