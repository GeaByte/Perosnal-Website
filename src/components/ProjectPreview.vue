<template>
    <!-- img-src="https://placekitten.com/300/300" -->
    <b-card :img-src="require(`@/assets/${project.imgSrc[0]}`)" img-alt="Card image" img-left
        class="mb-3 leftCard shadow">
        <b-card-text>
            <div class="d-flex justify-content-between align-items-center">
                <h3 class="d-inline">{{ title }}</h3>
                <b-link :href="props.project.githubUrl" target="_blank" rel="noopener noreferrer" class="tech-text">Github</b-link>
            </div>
            <p v-html="formatContent()"></p>
            <h3>Technology:</h3>
            <div class="d-flex flex-wrap" style="width: 60%; text-align: justify;">
                <p v-for="(tech) in techs" :key="tech" class="d-inline tech-text mb-1">{{ tech }}&nbsp;&nbsp;</p>
            </div>
        </b-card-text>
        <div class="d-flex justify-content-end">
            <b-button variant="outline-secondary" @click="navigateTo"
                style="position: absolute; bottom: 1rem; right: 1rem;">READ MORE</b-button>
        </div>
    </b-card>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['project']);
const title = computed(() => props.project.title);
const content = computed(() => props.project.content);
const formatContent = () => {
    if (content.value.length > 100) {
        return content.value.slice(0, 100) + '...';
    }
    return content.value;
}
const techs = computed(() => props.project.technology);
const router = useRouter();
const navigateTo = () => {
    router.push({
        name: 'projectDetail', params: { projectId: props.project.id }
    })
}
</script>

<style scoped>
.leftCard img {
    width: 40%;
    height: 15rem;
}

.tech-text {
    color: rgba(255, 100, 0, 1)
}
</style>