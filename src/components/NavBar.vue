<template>
  <nav :class="['site-nav', { scrolled: isScrolled }]">
    <div class="nav-inner">
      <a class="nav-logo" @click.prevent="navigateTo('homePage')" href="/">
        Ray<span class="accent-dot">.</span>
      </a>

      <button class="nav-hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
        <span></span><span></span><span></span>
      </button>

      <ul :class="['nav-links', { open: menuOpen }]">
        <li><a @click.prevent="nav('homePage')" href="/">Home</a></li>
        <li><a @click.prevent="nav('aboutMe')" href="/about">About</a></li>
        <li><a @click.prevent="nav('projectsInfo')" href="/projects">Projects</a></li>
        <li>
          <a class="nav-cta" href="https://github.com/GeaByte" target="_blank" rel="noopener">
            GitHub ↗
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const router = useRouter();
    const isScrolled = ref(false);
    const menuOpen = ref(false);

    const onScroll = () => { isScrolled.value = window.scrollY > 40; };
    onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
    onUnmounted(() => window.removeEventListener('scroll', onScroll));

    const navigateTo = (name) => router.push({ name });
    const nav = (name) => { menuOpen.value = false; router.push({ name }); };

    return { isScrolled, menuOpen, navigateTo, nav };
  },
};
</script>

<style scoped>
.site-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  padding: 1.2rem 0;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, background 0.3s, backdrop-filter 0.3s;
}
.site-nav.scrolled {
  border-color: var(--border);
  background: rgba(11,14,17,0.9);
  backdrop-filter: blur(14px);
}
.nav-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.35rem;
  color: var(--text);
  cursor: pointer;
  text-decoration: none;
}
.accent-dot { color: var(--accent); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}
.nav-links a {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  transition: color 0.2s;
  cursor: pointer;
}
.nav-links a:hover { color: var(--accent); }

.nav-cta {
  color: var(--accent) !important;
  border: 1px solid rgba(200,240,77,0.3);
  border-radius: 6px;
  padding: 0.4rem 1rem !important;
  transition: background 0.2s, color 0.2s !important;
}
.nav-cta:hover {
  background: var(--accent) !important;
  color: #0b0e11 !important;
}

/* Hamburger */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: 0.2s;
}

@media (max-width: 768px) {
  .nav-hamburger { display: flex; }
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 1.5rem 2rem;
    gap: 1.25rem;
  }
  .nav-links.open { display: flex; }
}
</style>
