<template>
    <b-navbar toggleable="lg" light>
        <b-navbar-brand class="mx-auto" @click="navigateTo('homePage')">
            <h1 class="title">Raymond Portfolio</h1>
        </b-navbar-brand>
    </b-navbar>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const navigateTo = (page) => {
    router.push({ name: page });
}
</script>

<style>
.title:hover {
    background-color: grey;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>