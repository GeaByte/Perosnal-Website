<template>
  <div class="about-page">
    <div class="container-main">

      <!-- Hero -->
      <div class="about-hero">
        <span class="section-label">Background</span>
        <h1 class="about-title">About <em>Raymond</em></h1>
        <p class="about-lead">
          Full-Stack Engineer based in Vancouver, BC. I combine a rigorous Computer Science education
          with real-world production experience to build systems that actually ship.
        </p>
      </div>

      <!-- Main grid -->
      <div class="about-grid">

        <!-- Left: bio cards -->
        <div class="about-bio">
          <div
            v-for="card in bioCards"
            :key="card.title"
            class="bio-card glass-card"
          >
            <div class="bio-card-icon">{{ card.icon }}</div>
            <h3 class="bio-card-title">{{ card.title }}</h3>
            <p class="bio-card-body" v-html="card.body"></p>
          </div>
        </div>

        <!-- Right: sidebar -->
        <div class="about-sidebar">

          <!-- Experience -->
          <div class="sidebar-section glass-card">
            <h3 class="sidebar-heading">Experience</h3>
            <div v-for="exp in experience" :key="exp.company" class="exp-item">
              <div class="exp-top">
                <div>
                  <div class="exp-role">{{ exp.role }}</div>
                  <div class="exp-company">{{ exp.company }}</div>
                </div>
                <div class="exp-date">{{ exp.date }}</div>
              </div>
              <ul class="exp-bullets">
                <li v-for="bullet in exp.bullets" :key="bullet" v-html="bullet"></li>
              </ul>
              <div class="exp-tags">
                <span v-for="tag in exp.tags" :key="tag" class="tech-tag">{{ tag }}</span>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="sidebar-section glass-card">
            <h3 class="sidebar-heading">Education</h3>
            <div v-for="edu in education" :key="edu.school" class="edu-item">
              <div class="edu-degree">{{ edu.degree }}</div>
              <div class="edu-school">{{ edu.school }}</div>
              <div class="edu-date">{{ edu.date }}</div>
              <div v-if="edu.honours" class="edu-honours">
                <span v-for="h in edu.honours" :key="h" class="honour-badge">{{ h }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  setup() {
    const bioCards = [
      {
        icon: '👋',
        title: 'Introduction',
        body: `I'm <strong>Raymond</strong>, a passionate engineer who enjoys creating engaging and functional
               software solutions. Graduated from <strong>Douglas College</strong> (Post-Baccalaureate Diploma
               in Computer and Information Systems) with a <strong>3.98 GPA</strong> and consecutive Dean's List honours.`,
      },
      {
        icon: '⚡',
        title: 'Learning & Growth',
        body: `I take pride in learning fast in high-pressure environments. I regularly dive into personal side
               projects to deepen expertise — from building a Python link auditor to architecting multi-tenant
               SaaS platforms. I enjoy reading others' code as much as writing my own.`,
      },
      {
        icon: '🔬',
        title: 'Programming Approach',
        body: `Detail-oriented and methodical. I tend to write fewer bugs by thinking through edge cases before
               touching the keyboard. When things break, I trace root causes systematically rather than applying
               patches. Clean, readable code is non-negotiable.`,
      },
      {
        icon: '🎯',
        title: 'What I\'m Looking For',
        body: `Open to all software roles — full-stack, backend, frontend, data engineering, or DevOps.
               I'm excited about working on systems that scale, collaborating with strong teams, and continuing
               to grow as an engineer.`,
      },
    ];

    const experience = [
      {
        role: 'Full-Stack Engineer',
        company: 'WAEE French Learning · Vancouver, BC',
        date: 'Aug 2025 – Present',
        bullets: [
          'Sole developer owning the full <strong>SDLC</strong> across multiple web applications.',
          'Custom invoicing system → <strong>75% reduction</strong> in admin processing time.',
          'SEO overhaul with Rich Results → <strong>+100% organic impressions</strong>.',
          '<strong>Stripe API</strong> integration: subscriptions, inventory, VOD — all metadata-driven.',
          'Career Management Portal with secure Admin dashboard for non-technical staff.',
        ],
        tags: ['Symfony', 'PHP', 'Vue.js', 'Stripe', 'MySQL', 'OVHCloud'],
      },
      {
        role: 'Peer Tutor — Computer & Information Systems',
        company: 'Douglas College · New Westminster, BC',
        date: 'Sep 2024 – Aug 2025',
        bullets: [
          '<strong>Python web crawler</strong> — scanned 1,488 links, flagged 54 broken in <5 min.',
          '100+ tutoring sessions across programming, data structures, and algorithms.',
        ],
        tags: ['Python', 'Teaching'],
      },
    ];

    const education = [
      {
        degree: 'Post Degree Diploma — Computer & Information Systems',
        school: 'Douglas College · New Westminster, BC',
        date: 'Graduated Aug 2025',
        honours: ['⭐ GPA 3.98', "🏅 Dean's List ×2", '🎖 Honour Roll ×3'],
      },
      {
        degree: 'Bachelor of Science — Economics',
        school: 'Penn State University · PA, USA',
        date: 'Graduated May 2019',
        honours: [],
      },
    ];

    return { bioCards, experience, education };
  },
};
</script>

<style scoped>
.about-page {
  padding-top: 9rem;
  padding-bottom: 6rem;
}

/* Hero */
.about-hero { margin-bottom: 4rem; }
.about-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 1rem;
}
.about-title em { font-style: italic; color: var(--accent); }
.about-lead {
  color: var(--muted);
  font-size: 1.05rem;
  font-weight: 300;
  max-width: 580px;
  line-height: 1.75;
}

/* Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  align-items: start;
}

/* Bio cards */
.bio-card {
  padding: 1.75rem;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.bio-card-icon { font-size: 1.5rem; }
.bio-card-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text);
}
.bio-card-body {
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.7;
}

/* Sidebar */
.sidebar-section {
  padding: 1.75rem;
  margin-bottom: 1.5rem;
}
.sidebar-heading {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

/* Experience */
.exp-item { margin-bottom: 2rem; }
.exp-item:last-child { margin-bottom: 0; }
.exp-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}
.exp-role {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
}
.exp-company {
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.15rem;
}
.exp-date {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--muted);
  white-space: nowrap;
  margin-top: 0.15rem;
}
.exp-bullets {
  list-style: none;
  margin-bottom: 0.75rem;
}
.exp-bullets li {
  display: flex;
  gap: 0.6rem;
  font-size: 0.84rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 0.4rem;
}
.exp-bullets li::before {
  content: '→';
  color: var(--accent);
  font-family: var(--font-mono);
  flex-shrink: 0;
}
.exp-tags { display: flex; flex-wrap: wrap; }

/* Education */
.edu-item { margin-bottom: 1.5rem; }
.edu-item:last-child { margin-bottom: 0; }
.edu-degree {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 0.25rem;
}
.edu-school {
  font-size: 0.82rem;
  color: var(--accent);
  font-family: var(--font-mono);
  margin-bottom: 0.2rem;
}
.edu-date {
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 0.6rem;
}
.edu-honours { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.honour-badge {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent2);
  background: rgba(61,232,160,0.08);
  border: 1px solid rgba(61,232,160,0.2);
  border-radius: 100px;
  padding: 0.2rem 0.6rem;
}

/* Responsive */
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
}
</style>
