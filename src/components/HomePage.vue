<template>
  <div class="home-page">

    <!-- HERO -->
    <section class="hero">
      <div class="container-main">
        <div class="hero-grid">
          <div class="hero-left">
            <div class="hero-badge">
              <span class="pulse-dot"></span>Available · Vancouver, BC
            </div>
            <h1 class="hero-title">
              Full-Stack<br>
              <em>Engineer</em><br>
              &amp; Problem Solver
            </h1>
            <p class="hero-sub">
              I build <strong>end-to-end web systems</strong> — from Symfony backends and React
              frontends to Stripe integrations, custom portals, and SEO-optimised platforms.
              Open to <strong>all software roles</strong>.
            </p>
            <div class="hero-actions">
              <a class="btn-primary-custom" @click.prevent="navigateTo('aboutMe')" href="/about">
                About me →
              </a>
              <a class="btn-outline-custom" @click.prevent="navigateTo('projectsInfo')" href="/projects">
                View projects
              </a>
            </div>
          </div>

          <div class="hero-right">
            <div class="hero-stats-card">
              <div class="stats-grid">
                <div class="stat-box">
                  <div class="stat-num">75%</div>
                  <div class="stat-label">Admin time saved via custom invoicing</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">2×</div>
                  <div class="stat-label">Organic impressions after SEO overhaul</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">1.4k</div>
                  <div class="stat-label">URLs crawled by Python link auditor</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">3.98</div>
                  <div class="stat-label">GPA · Dean's List · Honour Roll</div>
                </div>
              </div>
              <hr class="stat-divider" />
              <p class="stat-stack">
                Core: <span>Symfony · PHP · React · Vue · Python</span><br>
                Infra: <span>OVHCloud · MySQL · Firebase · Stripe</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section-skills">
      <div class="container-main">
        <span class="section-label">Capabilities</span>
        <h2 class="section-title">Technical <em>Skills</em></h2>
        <div class="skills-grid">
          <div class="skill-group glass-card" v-for="group in skillGroups" :key="group.title">
            <div class="skill-group-title">{{ group.title }}</div>
            <div class="tags-wrap">
              <span
                v-for="tag in group.tags"
                :key="tag.name"
                :class="['tech-tag', { hot: tag.hot }]"
              >{{ tag.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RECENT PROJECTS -->
    <section class="section-projects">
      <div class="container-main">
        <span class="section-label">Featured work</span>
        <div class="projects-header">
          <h2 class="section-title">Projects</h2>
          <a class="btn-outline-custom" href="/projects" @click.prevent="navigateTo('projectsInfo')">
            View all →
          </a>
        </div>
        <div class="projects-preview-grid">
          <ProjectPreview
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import ProjectPreview from './ProjectPreview.vue';

export default {
  name: 'HomePage',
  components: { ProjectPreview },
  setup() {
    const router = useRouter();
    const store = useStore();
    const navigateTo = (name) => router.push({ name });

    const featuredProjects = computed(() => store.getters.allProjects.slice(0, 3));

    const skillGroups = [
      { title: 'Languages', tags: [
        { name: 'PHP', hot: true }, { name: 'JavaScript ES6+', hot: true },
        { name: 'Python', hot: true }, { name: 'Java' }, { name: 'Kotlin' }, { name: 'SQL' },
      ]},
      { title: 'Frontend', tags: [
        { name: 'React', hot: true }, { name: 'Vue.js', hot: true },
        { name: 'HTML5' }, { name: 'CSS3 / SASS' }, { name: 'Bootstrap' },
      ]},
      { title: 'Backend', tags: [
        { name: 'Symfony', hot: true }, { name: 'Laravel', hot: true },
        { name: 'Node.js' }, { name: 'Express' }, { name: 'Spring Boot' }, { name: 'Firebase' },
      ]},
      { title: 'Databases', tags: [
        { name: 'MySQL', hot: true }, { name: 'MongoDB', hot: true },
        { name: 'MSSQL' }, { name: 'SQLite' }, { name: 'Firestore' },
      ]},
      { title: 'Data & ML', tags: [
        { name: 'Scikit-Learn' }, { name: 'Pandas' }, { name: 'Matplotlib' },
        { name: 'Tableau' }, { name: 'Power BI' },
      ]},
      { title: 'Tools & Infra', tags: [
        { name: 'Git', hot: true }, { name: 'OVHCloud', hot: true },
        { name: 'Stripe API' }, { name: 'RESTful APIs' }, { name: 'Android Studio' },
      ]},
    ];

    onMounted(() => {
      const reveals = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      reveals.forEach(el => io.observe(el));
    });

    return { navigateTo, featuredProjects, skillGroups };
  },
};
</script>

<style scoped>
/* ── HERO ─────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 4rem;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(200,240,77,0.08);
  border: 1px solid rgba(200,240,77,0.2);
  border-radius: 100px;
  padding: 0.35rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent);
  letter-spacing: 0.06em;
  margin-bottom: 1.5rem;
}
.pulse-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%,100% { opacity:1; transform:scale(1); }
  50%      { opacity:0.5; transform:scale(0.7); }
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5vw, 4.4rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}
.hero-title em { font-style: italic; color: var(--accent); }

.hero-sub {
  color: var(--muted);
  font-size: 1.05rem;
  font-weight: 300;
  max-width: 460px;
  margin-bottom: 2.5rem;
  line-height: 1.75;
}
.hero-sub strong { color: var(--text); font-weight: 500; }

.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Stats card */
.hero-stats-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}
.hero-stats-card::before {
  content: '';
  position: absolute;
  top: -60px; right: -60px;
  width: 200px; height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200,240,77,0.12), transparent 70%);
  pointer-events: none;
}
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
.stat-box {
  padding: 1.1rem;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 10px;
}
.stat-num {
  font-family: var(--font-display);
  font-size: 2.1rem;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.25rem;
}
.stat-label {
  font-size: 0.75rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.4;
}
.stat-divider { border: none; border-top: 1px solid var(--border); margin: 1.5rem 0; }
.stat-stack {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.7;
}
.stat-stack span { color: var(--accent2); }

/* ── SKILLS ───────────────────────────────────────── */
.section-skills {
  padding: 5rem 0;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 400;
  margin-bottom: 2.5rem;
  line-height: 1.15;
}
.section-title em { font-style: italic; color: var(--accent); }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}
.skill-group {
  padding: 1.5rem;
}
.skill-group-title {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}
.tags-wrap { display: flex; flex-wrap: wrap; }

.tech-tag.hot {
  color: var(--accent);
  border-color: rgba(200,240,77,0.25);
  background: rgba(200,240,77,0.07);
}

/* ── PROJECTS ─────────────────────────────────────── */
.section-projects { padding: 5rem 0; }
.projects-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}
.projects-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* ── RESPONSIVE ───────────────────────────────────── */
@media (max-width: 768px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-stats-card { display: none; }
}
</style>
