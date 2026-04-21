<template>
  <footer class="site-footer">
    <div class="container-main">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="logo">Ray<span class="accent-dot">.</span></span>
          <p>Full-Stack Engineer · Vancouver, BC</p>
        </div>
        <div class="footer-links">
          <a href="https://github.com/GeaByte" target="_blank" rel="noopener">GitHub</a>
          <a href="https://linkedin.com/in/raymond-wang-bc" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <p class="footer-copy">&copy; {{ year }} Raymond. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  setup() {
    return { year: new Date().getFullYear() };
  },
};
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  padding: 2.5rem 0;
  margin-top: 4rem;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.footer-brand .logo {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--text);
}
.accent-dot { color: var(--accent); }
.footer-brand p {
  font-size: 0.82rem;
  color: var(--muted);
  margin-top: 0.2rem;
  font-family: var(--font-mono);
}
.footer-links {
  display: flex;
  gap: 1.5rem;
}
.footer-links a {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--accent); }
.footer-copy {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
}
</style>
