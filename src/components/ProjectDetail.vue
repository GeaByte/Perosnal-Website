<template>
    <div v-if="project">
        <b>Project Detail: {{ project.title }}</b><br />
        <button @click="navigateToPrev(project.id)">prev</button>
        <button @click="navigateToNext(project.id)">next</button>
    </div>
    <div v-else>
        <h1>Project Not Found</h1>
    </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "vue"
import { useRoute } from "vue-router"
import router from "@/router";
export default {
    name: "projectDetail",
    props:{
        projectId:{
            type: Number,
            required: true,
        },
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const projects = computed(()=> {
            return store.getters.allProjects;
        });
        const project = computed(() => {
            return store.getters.getProjectById(Number(route.params.projectId));
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
            project, projects, navigateToNext, navigateToPrev
        };
    },
};
</script>

<style></style>