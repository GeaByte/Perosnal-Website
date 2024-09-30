<template>
        <b-navbar toggleable="lg" variant="primary" light>
            <b-navbar-brand href="/">
                <b-img v-bind="mainProps" src="/favicon.ico" rounded="circle" alt="icon"></b-img> &nbsp;
                Raymond Portfolio
            </b-navbar-brand>

            <b-navbar-nav class="mr-12">
                <b-nav-item @click="navigateToNext('homePage', $event)">Home</b-nav-item>
                <b-nav-item-dropdown text="Projects">
                    <b-dropdown-item @click="navigateToNext('projectsInfo', $event)">Projects</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item @click="navigateToNext('aboutMe', $event)"> About Me</b-nav-item>
            </b-navbar-nav>
            
        </b-navbar>
</template>

<script>
export default {
    name: "navBar",
    data(){
        return {
            mainProps: { width: 50, height: 50 }
        }
    },
    methods: {
        navigateToNext(page, event){
            event.preventDefault();
            this.$router.push({ name: page });
        }
    }
}
</script>

<style>
</style>