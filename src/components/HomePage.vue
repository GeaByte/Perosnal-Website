<template>
    <div>
        <h1>Portfolio Gallery</h1>
        <div className="home-page">
            <p>Welcome to my portfolio! This site, created by Raymond using Vue,
                showcases a collection of my programming projects.
                Please note that this is a static website, meaning it does not involve a backend or database.
            </p>
            <p>For this project, I utilized various packages,
                including Bootstrap for responsive design and styling, ensuring a smooth user experience.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "homePage",
}
</script>

<style scoped>
    .home-page{
        text-align:center;
        margin:auto;
        width: 80%;
    }
</style>