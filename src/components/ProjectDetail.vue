<template>
    <nav-bar />
    <div v-if="project">
        <b>Project Detail: {{ this.project.title }}</b><br />
        <button @click="navigateToPrev(project.id)">prev</button>
        <button @click="navigateToNext(project.id)">next</button>
    </div>
    <div v-else>
        <h1>Project Not Found</h1>
    </div>
    <footer-section />
</template>

<script>
import NavBar from "./NavBar.vue";
import FooterSection from "./FooterSection.vue"
import { useStore } from "vuex"
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
export default {
    name: "projectDetail",
    components: { NavBar, FooterSection },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const projects = computed(()=> {
            return store.getters.allProjects;
        });
        const project = computed(() => {
            const projectId = Number(route.params.projectId);
            return store.getters.getProjectById(projectId);
        });
        const navigateToNext = (id) => {
            let currentId = Number(id);
            let nextId = (currentId+1) % projects.value.length;
            router.push({
                name: "projectDetail",
                params: { projectId: nextId }
            });
        }
        const navigateToPrev = (id) => {
            let currentId = Number(id);
            let prevId = (currentId-1 + projects.value.length) % projects.value.length;
            router.push({
                name: "projectDetail",
                params: { projectId: prevId}
            });
        }
        return {
            project, navigateToNext, navigateToPrev
        };
    },
};
</script>

<style></style>