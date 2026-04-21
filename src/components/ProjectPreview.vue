<template>
  <div class="proj-card glass-card" @click="navigateTo">
    <div class="proj-card-inner">
      <div class="proj-header">
        <div class="proj-icon">
          <img
            v-if="project.imgSrc && project.imgSrc[0]"
            :src="getImg(project.imgSrc[0])"
            :alt="project.title"
            class="proj-thumb"
          />
          <div v-else class="proj-thumb-fallback">{{ project.title.charAt(0) }}</div>
        </div>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener"
          class="github-link"
          @click.stop
        >
          GitHub ↗
        </a>
      </div>

      <h3 class="proj-title">{{ project.title }}</h3>
      <p class="proj-desc" v-html="truncated"></p>

      <div class="proj-footer">
        <div class="proj-tags">
          <span v-for="tech in project.technology.slice(0,4)" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        <span class="proj-category">{{ categoryLabel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ProjectPreview',
  props: ['project'],
  setup(props) {
    const router = useRouter();
    const navigateTo = () => router.push({ name: 'projectDetail', params: { projectId: props.project.id } });

    const truncated = computed(() => {
      const text = props.project.content.replace(/<[^>]*>/g, '');
      return text.length > 120 ? text.slice(0, 120) + '...' : text;
    });

    const categoryLabel = computed(() =>
      props.project.category === 'sideProject' ? 'Side Project' : 'Course Project'
    );

    const getImg = (src) => {
      try { return require(`@/assets/${src}`); } catch { return null; }
    };

    return { navigateTo, truncated, categoryLabel, getImg };
  },
};
</script>

<style scoped>
.proj-card {
  cursor: pointer;
  overflow: hidden;
}
.proj-card-inner {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.proj-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.proj-icon {
  width: 56px; height: 56px;
  border-radius: 10px;
  overflow: hidden;
  background: var(--surface2);
  border: 1px solid var(--border);
  flex-shrink: 0;
}
.proj-thumb {
  width: 100%; height: 100%;
  object-fit: cover;
}
.proj-thumb-fallback {
  width: 100%; height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--accent);
}

.github-link {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s;
}
.github-link:hover { color: var(--accent); }

.proj-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.proj-desc {
  font-size: 0.87rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.65;
  flex: 1;
  margin-bottom: 1.5rem;
}

.proj-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.proj-tags { display: flex; flex-wrap: wrap; gap: 0; }

.proj-category {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--accent2);
  background: rgba(61,232,160,0.08);
  border: 1px solid rgba(61,232,160,0.2);
  border-radius: 100px;
  padding: 0.2rem 0.65rem;
  white-space: nowrap;
}
</style>
