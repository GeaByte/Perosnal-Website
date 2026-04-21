<template>
  <div class="not-found-page">
    <div class="container-main">
      <span class="section-label">Error</span>
      <h1 class="nf-title">404</h1>
      <p class="nf-sub">This page doesn't exist.</p>
      <router-link class="btn-primary-custom" to="/">← Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default { name: 'NotFound' };
</script>

<style scoped>
.not-found-page {
  padding-top: 14rem;
  text-align: center;
}
.nf-title {
  font-family: var(--font-display);
  font-size: clamp(5rem, 14vw, 10rem);
  color: var(--accent);
  opacity: 0.25;
  line-height: 1;
  margin-bottom: 1rem;
}
.nf-sub {
  color: var(--muted);
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
}
</style>
