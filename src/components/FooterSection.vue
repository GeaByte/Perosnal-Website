<template>
    <footer class="bg-dark text-white p-3">
        <div class="container">
            Copyright {{ currentYear }}
            <p>created by Raymond using Vue</p>
            <small>Please note that this is a static website, meaning it does not involve a backend or database.
            For this project, I utilized various packages,
            including Bootstrap for responsive design and styling, ensuring a smooth user experience.</small>
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