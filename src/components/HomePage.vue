<template>
    <div></div>
</template>

<script>

export default {
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