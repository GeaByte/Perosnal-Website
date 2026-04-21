<template>
  <div class="projects-page">
    <div class="container-main">
      <!-- Header -->
      <div class="page-header">
        <span class="section-label">Portfolio</span>
        <h1 class="page-title">All <em>Projects</em></h1>
        <p class="page-sub">
          A mix of side projects and course work — each tackling real problems with modern tooling.
        </p>

        <!-- Filter -->
        <div class="filter-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            :class="['filter-btn', { active: activeTab === tab.value }]"
            @click="activeTab = tab.value"
          >{{ tab.label }}</button>
        </div>
      </div>

      <!-- Grid -->
      <div class="all-projects-grid">
        <ProjectPreview
          v-for="project in filtered"
          :key="project.id"
          :project="project"
        />
      </div>

      <div v-if="filtered.length === 0" class="empty-state">
        <p>No projects in this category yet.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import ProjectPreview from './ProjectPreview.vue';

export default {
  name: 'ProjectsInfo',
  components: { ProjectPreview },
  setup() {
    const store = useStore();
    const activeTab = ref('all');

    const tabs = [
      { value: 'all',          label: 'All' },
      { value: 'sideProject',  label: 'Side Projects' },
      { value: 'courseProject',label: 'Course Projects' },
    ];

    const filtered = computed(() => {
      const all = store.getters.allProjects;
      if (activeTab.value === 'all') return all;
      return all.filter(p => p.category === activeTab.value);
    });

    return { activeTab, tabs, filtered };
  },
};
</script>

<style scoped>
.projects-page {
  padding-top: 9rem;
  padding-bottom: 6rem;
}

.page-header {
  margin-bottom: 3.5rem;
}
.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3.8rem);
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 1rem;
}
.page-title em { font-style: italic; color: var(--accent); }

.page-sub {
  color: var(--muted);
  font-weight: 300;
  max-width: 520px;
  margin-bottom: 2rem;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s;
}
.filter-btn:hover { border-color: var(--muted); color: var(--text); }
.filter-btn.active {
  background: var(--accent);
  color: #0b0e11;
  border-color: var(--accent);
}

.all-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: var(--muted);
  font-family: var(--font-mono);
}
</style>
