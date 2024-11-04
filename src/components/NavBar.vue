<template>
    <b-navbar class="mb-3" toggleable="lg" light style="background-color: #FF8C00">
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
    transform: scale(1.01);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}
</style>