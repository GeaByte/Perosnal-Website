<template>
    <b-navbar toggleable="lg" light>
        <b-navbar-brand class="mx-auto" @click="navigateTo('homePage')">
            <!-- <b-img v-bind="mainProps" src="/favicon.ico" rounded="circle" alt="icon"></b-img> &nbsp; -->
            <h1 class="title">Raymond Portfolio</h1>

        </b-navbar-brand>

        <!-- <b-navbar-nav class="mr-12">
            <b-nav-item @click="navigateToNext('homePage')">Home</b-nav-item>
            <b-nav-item-dropdown text="Projects" @click="navigateToNext('projectsInfo')">
                <b-dropdown-item v-for="(project, index) in projects" :key="index">{{ project.title }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item @click="navigateToNext('aboutMe')"> About</b-nav-item>
        </b-navbar-nav> -->
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