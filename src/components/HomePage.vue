<template>
    <NavBar />
    <FooterSection />
</template>

<script>
import NavBar from './NavBar.vue';
import FooterSection from './FooterSection.vue';

export default {
    components: { NavBar, FooterSection },
    name: "homePage",
        data(){
        return{

        }
    },
    methods: {
        eventHandler(event){
            event.preventDefault();
            this.$router.push({ name: "vueWelcome" });
        }
    }
}
</script>

<style></style>