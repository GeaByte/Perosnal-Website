<template>
    <!-- img-src="https://placekitten.com/300/300" -->
    <b-card :img-src="require(`@/assets/${project.imgSrc[0]}`)" img-alt="Card image" img-left class="mb-3 leftCard">
        <b-card-text>
            <h3>{{ title }}</h3>
            <p>{{ content.slice(0, 100) }}{{ content.length > 20 ? '...' : '' }}</p>
        </b-card-text>
        <div class="d-flex justify-content-end">
            <b-button variant="outline-primary" @click="navigateTo" style="position: absolute; bottom: 1rem; right: 1rem;">READ MORE</b-button>
        </div>
    </b-card>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['project']);
const title = computed(() => props.project.title);
const content = computed(() => props.project.content);
const router = useRouter();
const navigateTo = () => {
    router.push({
        name: 'projectDetail', params: { projectId: props.project.id }
    })
}
</script>

<style>
.leftCard img {
    width: 40%;
    height: 15rem;
}
</style>