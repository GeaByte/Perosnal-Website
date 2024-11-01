<template>
    <div class="mx-auto" style="width: 80%"><hr></div>
    <footer>
        Copyright {{ currentYear }}
        <p>created by Raymond using Vue</p>
    </footer>
    
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
    footer{
        margin:auto;
        text-align:center;
    }
</style>