<template>
    <div className="home-page">
        <p>Welcome to my portfolio! This site showcases a collection of my programming projects.
            Please note that this is a static website, meaning it does not involve a backend or database.
            For this project, I utilized various packages,
            including Bootstrap for responsive design and styling, ensuring a smooth user experience.
        </p>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8 bg-light p-4">
                <ProjectPreview v-for="(project) in projects" :key="project.id" :project="project" />
            </div>
            <div class="col-md-4 bg-secondary text-white p-4">
                <b-card title="About Me" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
                    tag="article" class="mb-2 myCard">
                    <b-card-text>
                        I'm a student enrolled in a two-year program in Computer and Information Systems.
                    </b-card-text>
                    <div class="d-flex justify-content-end">
                        <b-button variant="outline-primary" size="sm" @click="navigateTo('aboutMe')"
                            style="position: absolute; bottom: 0.5rem; right: 1rem;">READ MORE</b-button>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProjectPreview from './ProjectPreview.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

const router = useRouter();
const store = useStore();
const projects = store.getters.allProjects;
const navigateTo = (page) => {
    router.push({ name: page });
}

</script>

<style scoped>
.home-page {
    text-align: center;
    margin: auto;
    width: 80%;
}

.myCard {
    width: 100%;
    height: 20rem;
}
</style>