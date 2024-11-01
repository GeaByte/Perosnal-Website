<template>
    <div v-if="project">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div v-for="(imgSrc, index) in project.imgSrc" :key="index" class="carousel-item"
                    :class="{ active: index === 0 }">
                    <img :src="require(`@/assets/${imgSrc}`)" class="d-block w-100" alt="image">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <br />
        <div class="projectDescription">
            <h3>{{ project.title }}</h3><br />
            <h4>Description: </h4>
            <p v-for="(paragraph, index) in description()" :key="index">{{ paragraph }}</p>
            <div class="d-flex justify-content-end">
                <b-button variant="light" size="lg" class="m-2" @click="navigateToPrev(project.id)">PREV</b-button>
                <b-button variant="dark" size="lg" class="m-2" @click="navigateToNext(project.id)">NEXT</b-button>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>Project Not Found</h1>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue"
import router from "@/router";

const props = defineProps(['projectId'])
console.log(props.projectId)
const store = useStore();

const projects = computed(() => {
    return store.getters.allProjects;
});
const project = computed(() => {
    return store.getters.getProjectById(Number(props.projectId));
});
const description = () => {
    if (project.value && project.value.content) {
        return project.value.content.split('\n');
    }
    return [];
}
const navigateToNext = (id) => {
    let currentId = Number(id);
    let nextId = (currentId + 1) % projects.value.length;
    router.push({
        name: "projectDetail",
        params: { projectId: nextId }
    });
}
const navigateToPrev = (id) => {
    let currentId = Number(id);
    let prevId = (currentId - 1 + projects.value.length) % projects.value.length;
    router.push({
        name: "projectDetail",
        params: { projectId: prevId }
    });
}
</script>

<style>
.carousel-control-prev-icon,
.carousel-control-next-icon {
    background-color: black;
    /* Change the background color to black */
}

.carousel-item {
    width: 100%;
    height: 40rem;
}

.projectDescription {
    margin: auto;
    width: 80%;
}
</style>