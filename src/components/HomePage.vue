<template>
    <div className="home-page">
        <h5>Welcome to my portfolio! This site showcases a collection of my programming projects.</h5>
    </div>

    <div class="container-fluid">
        <div class="row">
            <!-- left side -->
            <div class="col-md-8 bg-light p-4">
                <ProjectPreview v-for="(project) in projects" :key="project.id" :project="project"/>
            </div>
            <!-- right side -->
            <div class="col-md-4 bg-about-me p-4">
                <b-card title="About Me" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
                    tag="article" class="mb-3 rightCard shadow">
                    <b-card-text>
                        Currently, enrolled in a two-year program in Computer and Information Systems.
                    </b-card-text>
                    <div class="d-flex justify-content-end">
                        <b-button variant="outline-secondary" size="sm" @click="navigateTo('aboutMe')"
                            style="position: absolute; bottom: 0.5rem; right: 1rem;">READ MORE</b-button>
                    </div>
                </b-card>
                <b-card title="Skills" class="mb-3 shadow">
                    <b-card-text>
                        <span v-for="(tech) in techs" :key="tech" 
                        class="badge bg-skills text-dark rounded-pill me-2 fs-6 mb-2">
                        {{ tech }}</span>
                    </b-card-text>
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
const techs = new Set(
    projects.flatMap(project => project.technology
    ));
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

.bg-about-me{
    background-color: beige;
}
.bg-skills{
    background-color: rgba(255, 140, 0, 1);
}
</style>