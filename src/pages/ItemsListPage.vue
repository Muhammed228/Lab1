<template>
  <div class="items-list-page">
    <div class="page-header">
      <h1 class="page-title">Каталог проєктів</h1>
      <p class="page-description">
        Перегляньте всі доступні проєкти та дізнайтеся більше про кожен з них
      </p>
    </div>

    <div class="projects-grid">
      <article 
        v-for="project in projects" 
        :key="project.id" 
        class="project-card"
      >
        <div class="card-header">
          <h2 class="project-title">{{ project.title }}</h2>
          <span class="project-year">{{ project.year }}</span>
        </div>

        <p class="project-description">
          {{ project.shortDescription }}
        </p>

        <div class="project-technologies">
          <span 
            v-for="tech in project.technologies.slice(0, 3)" 
            :key="tech" 
            class="tech-badge"
          >
            {{ tech }}
          </span>
          <span 
            v-if="project.technologies.length > 3" 
            class="tech-badge more"
          >
            +{{ project.technologies.length - 3 }}
          </span>
        </div>

        <div class="card-footer">
          <span class="status-badge" :class="statusClass(project.status)">
            {{ project.status }}
          </span>
          <router-link 
            :to="`/items/${project.id}`" 
            class="details-link"
          >
            Детальніше →
          </router-link>
        </div>
      </article>
    </div>

    <div v-if="projects.length === 0" class="empty-state">
      <p>Проєктів поки що немає</p>
    </div>
  </div>
</template>

<script setup>
import { projects } from '../data/projects.js'

const statusClass = (status) => {
  return status === 'Завершено' ? 'completed' : 'in-progress'
}
</script>

<style scoped>
.items-list-page {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-title {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 15px;
}

.page-description {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
}

.project-title {
  font-size: 1.5rem;
  color: var(--text-color);
  margin: 0;
  flex: 1;
}

.project-year {
  background: var(--bg-light);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  background: rgba(66, 185, 131, 0.1);
  color: var(--primary-color);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.tech-badge.more {
  background: var(--bg-light);
  color: #666;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.status-badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-badge.completed {
  background: rgba(46, 213, 115, 0.1);
  color: #2ed573;
}

.status-badge.in-progress {
  background: rgba(255, 165, 2, 0.1);
  color: #ffa502;
}

.details-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: gap 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.details-link:hover {
  gap: 10px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    padding: 20px;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>