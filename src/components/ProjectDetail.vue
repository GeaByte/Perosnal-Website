<template>
  <div class="project-detail-page">
    <div class="container-main" v-if="project">

      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <a @click.prevent="$router.push({ name: 'projectsInfo' })" href="/projects">← All Projects</a>
        <span>/</span>
        <span>{{ project.title }}</span>
      </div>

      <!-- Header -->
      <div class="detail-header">
        <div class="detail-meta">
          <span class="proj-category-badge">
            {{ project.category === 'sideProject' ? 'Side Project' : 'Course Project' }}
          </span>
          <h1 class="detail-title">{{ project.title }}</h1>
          <div class="detail-tags">
            <span v-for="tech in project.technology" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener"
            class="btn-primary-custom github-btn"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>

      <!-- Carousel -->
      <div v-if="project.imgSrc && project.imgSrc.length" class="carousel-wrap">
        <div class="carousel">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div
              class="carousel-slide"
              v-for="(src, i) in project.imgSrc"
              :key="i"
            >
              <img :src="getImg(src)" :alt="`Screenshot ${i+1}`" />
              <div v-if="project.imgCaption && project.imgCaption[i]" class="slide-caption">
                {{ project.imgCaption[i] }}
              </div>
            </div>
          </div>

          <button v-if="currentIndex > 0" class="carousel-btn prev" @click="prev">‹</button>
          <button v-if="currentIndex < project.imgSrc.length - 1" class="carousel-btn next" @click="next">›</button>

          <div class="carousel-dots">
            <span
              v-for="(_, i) in project.imgSrc"
              :key="i"
              :class="['dot', { active: i === currentIndex }]"
              @click="currentIndex = i"
            ></span>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="detail-content">
        <h2 class="content-heading">About this project</h2>
        <div class="content-body">
          <p
            v-for="(para, i) in paragraphs"
            :key="i"
            v-html="para"
          ></p>
        </div>
      </div>

      <!-- Navigation -->
      <div class="project-nav">
        <button class="btn-outline-custom" @click="navigatePrev">← Previous</button>
        <button class="btn-primary-custom" @click="navigateNext">Next →</button>
      </div>

    </div>

    <div v-else class="not-found">
      <h2>Project not found</h2>
      <a class="btn-primary-custom" @click.prevent="$router.push({ name: 'projectsInfo' })" href="/projects">
        Back to Projects
      </a>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'ProjectDetail',
  props: ['projectId'],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const currentIndex = ref(0);

    const projects = computed(() => store.getters.allProjects);
    const project = computed(() => store.getters.getProjectById(Number(props.projectId)));

    const paragraphs = computed(() => {
      if (!project.value) return [];
      return project.value.content.split('\n').filter(p => p.trim());
    });

    watch(project, () => { currentIndex.value = 0; });

    const prev = () => { if (currentIndex.value > 0) currentIndex.value--; };
    const next = () => { if (project.value && currentIndex.value < project.value.imgSrc.length - 1) currentIndex.value++; };

    const navigatePrev = () => {
      const id = Number(props.projectId);
      router.push({ name: 'projectDetail', params: { projectId: (id - 1 + projects.value.length) % projects.value.length } });
    };
    const navigateNext = () => {
      const id = Number(props.projectId);
      router.push({ name: 'projectDetail', params: { projectId: (id + 1) % projects.value.length } });
    };

    const getImg = (src) => {
      try { return require(`@/assets/${src}`); } catch { return ''; }
    };

    return { project, currentIndex, paragraphs, prev, next, navigatePrev, navigateNext, getImg };
  },
};
</script>

<style scoped>
.project-detail-page {
  padding-top: 9rem;
  padding-bottom: 6rem;
}

/* Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 2.5rem;
}
.breadcrumb a {
  color: var(--accent);
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s;
}
.breadcrumb a:hover { opacity: 0.75; }

/* Header */
.detail-header { margin-bottom: 3rem; }

.proj-category-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent2);
  background: rgba(61,232,160,0.08);
  border: 1px solid rgba(61,232,160,0.22);
  border-radius: 100px;
  padding: 0.25rem 0.75rem;
  margin-bottom: 1rem;
}

.detail-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.15;
  margin-bottom: 1.25rem;
}

.detail-tags { margin-bottom: 1.75rem; }

.github-btn { align-self: flex-start; }

/* Carousel */
.carousel-wrap {
  margin-bottom: 3.5rem;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
}
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-track {
  display: flex;
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.carousel-slide {
  min-width: 100%;
  position: relative;
}
.carousel-slide img {
  width: 100%;
  height: 480px;
  object-fit: contain;
  background: var(--surface2);
  display: block;
}
.slide-caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 0.75rem 1.25rem;
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(6px);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text);
  letter-spacing: 0.04em;
}

.carousel-btn {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  background: rgba(11,14,17,0.7);
  border: 1px solid var(--border);
  color: var(--text);
  width: 44px; height: 44px;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
  backdrop-filter: blur(6px);
  z-index: 10;
}
.carousel-btn:hover { background: var(--accent); color: #0b0e11; border-color: var(--accent); }
.carousel-btn.prev { left: 1rem; }
.carousel-btn.next { right: 1rem; }

.carousel-dots {
  position: absolute;
  bottom: 1rem; left: 50%; transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}
.dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.dot.active { background: var(--accent); transform: scale(1.3); }

/* Description */
.detail-content { margin-bottom: 3rem; }
.content-heading {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1.25rem;
  color: var(--text);
}
.content-body p {
  color: var(--muted);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 0.97rem;
}

/* Nav */
.project-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

/* Not found */
.not-found {
  padding-top: 9rem;
  text-align: center;
}
.not-found h2 {
  font-family: var(--font-display);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--muted);
}

@media (max-width: 600px) {
  .carousel-slide img { height: 240px; }
}
</style>
