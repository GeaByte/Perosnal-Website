<template>
    <b-navbar toggleable="lg" variant="primary" light>
        <b-navbar-brand href="/">
            <b-img v-bind="mainProps" src="/favicon.ico" rounded="circle" alt="icon"></b-img> &nbsp;
            Raymond Portfolio
        </b-navbar-brand>

        <b-navbar-nav class="mr-12">
            <b-nav-item @click="navigateToNext('homePage')">Home</b-nav-item>
            <b-nav-item-dropdown text="Projects" @click="navigateToNext('projectsInfo')">
                <b-dropdown-item v-for="(project, index) in projects" :key="index">{{ project.title }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item @click="navigateToNext('aboutMe')"> About</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "vue"
export default {
    name: "navBar",
    data() {
        return {
            mainProps: { width: 50, height: 50 },
        }
    },
    methods: {
        navigateToNext(page) {
            this.$router.push({ name: page });
        },
    },
    setup() {
        const store = useStore();
        const projects = computed(() => {
            return store.getters.allProjects;
        });
        return { projects };
    }
}
</script>

<style></style>