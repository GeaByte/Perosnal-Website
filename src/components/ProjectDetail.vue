<template>
    <div v-if="project">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div v-for="(imgSrc, index) in project.imgSrc" :key="index" class="carousel-item"
                    :class="{ active: index === currentIndex }">
                    <img :src="require(`@/assets/${imgSrc}`)" class="d-block " alt="image">
                    <div class="carousel-caption d-none d-md-block text-white">
                        <p v-html="project.imgCaption[index]" class="bg-caption d-inline"></p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
                @click="prevImage">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
                @click="nextImage">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <br />
        <div class="projectDescription">
            <h3>{{ project.title }}</h3><br />
            <h4>Description: </h4>
            <p v-for="(paragraph, index) in description()" :key="index" v-html="paragraph"></p>
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
import { computed, ref, watch } from "vue"
import router from "@/router";

const props = defineProps(['projectId']);
const store = useStore();

const projects = computed(() => store.getters.allProjects);
const project = computed(() => store.getters.getProjectById(Number(props.projectId)));
const currentIndex = ref(0);

//split project description by '/n'
const description = () => {
    if (project.value && project.value.content) {
        return project.value.content.split('\n');
    }
    return [];
}

// Navigate to the next project
const navigateToNext = (id) => {
    let currentId = Number(id);
    let nextId = (currentId + 1) % projects.value.length;
    router.push({ name: "projectDetail", params: { projectId: nextId } });
}

// Navigate to the previous project
const navigateToPrev = (id) => {
    let currentId = Number(id);
    let prevId = (currentId - 1 + projects.value.length) % projects.value.length;
    router.push({ name: "projectDetail", params: { projectId: prevId } });
}

// Reset currentIndex when project changes
watch(project, (newProject) => {
    if (newProject) {
        currentIndex.value = 0; // Reset to first image when project changes
    }
});

// Carousel navigation methods
const prevImage = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
}

const nextImage = () => {
    if (currentIndex.value < project.value.imgSrc.length - 1) {
        currentIndex.value++;
    }
}
</script>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
    background-color: black;
    /* Change the background color to black */
}

.carousel-item {
    width: 100%;
    height: 30rem;
}

.projectDescription {
    margin: auto;
    width: 80%;
}

img {
    width: 80%;
    height: auto;
    max-height: 100%;
    margin: auto;
}
.bg-caption{
    background-color: rgba(0, 0, 0, 0.5);
}
</style>