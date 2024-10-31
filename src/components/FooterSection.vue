<template>
    <div class="mx-auto" style="width: 80%"><hr></div>
    <footer>
        Copyright {{ currentYear }}
    </footer>
    
</template>

<script>
export default{
    data(){
        return{
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>

<style scoped>
    footer{
        margin:auto;
        text-align:center;
    }
</style>