<template>
    <footer class="bg-dark text-white p-3">
        <div class="container">
            <p>&copy; {{ currentYear }} Raymond. All rights reserved.</p>
            <p>Website created and developed by <strong>Raymond</strong></p>
            <small>Built with Vue.js and Bootstrap for a responsive, static web experience.</small>
        </div>
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