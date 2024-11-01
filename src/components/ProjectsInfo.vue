<template>
    <div v-for="(project) in projects" :key="project.id" @click="navigateTo('projectDetail', project.id)">
        <b>{{ project.title }}</b><br />
        <img :src="require(`../assets/${project.imgSrc[0]}`)" alt="project image" />: {{ project.content }}
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();

const navigateTo = (page, id) => {
    router.push({
        name: page,
        params: { projectId: id }
    });
}

const projects = store.getters.allProjects;
</script>

<style></style>