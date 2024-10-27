<template>
    <div v-for="(project) in projects" :key="project.id" @click="navigateToNext('projectDetail', project.id)">
        <b>{{ project.title }}</b><br />
        <img :src="require(`../assets/${project.imgSrc[0]}`)" alt="project image" />: {{ project.content }}
    </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "vue"
export default {
    name: "projectsInfo",
    methods: {
        navigateToNext(page, id) {
            this.$router.push({
                name: page,
                params: { projectId: id }
            });
        }
    },
    setup() {
        const store = useStore();
        const projects = computed(() => store.getters.allProjects);
        return {
            projects,
        };
    },
}
</script>

<style></style>