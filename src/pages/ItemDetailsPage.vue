<template>
  <div class="item-details-page">
    <router-link to="/items" class="back-link">
      ← Повернутися до каталогу
    </router-link>

    <div v-if="project" class="project-details">
      <header class="details-header">
        <div class="header-top">
          <h1 class="project-title">{{ project.title }}</h1>
          <span class="status-badge" :class="statusClass(project.status)">
            {{ project.status }}
          </span>
        </div>
        <p class="project-year">Рік розробки: {{ project.year }}</p>
      </header>

      <section class="description-section">
        <h2 class="section-title">Опис проєкту</h2>
        <p class="full-description">{{ project.fullDescription }}</p>
      </section>

      <section class="technologies-section">
        <h2 class="section-title">Використані технології</h2>
        <div class="tech-grid">
          <span 
            v-for="tech in project.technologies" 
            :key="tech" 
            class="tech-item"
          >
            {{ tech }}
          </span>
        </div>
      </section>

      <section class="features-section">
        <h2 class="section-title">Ключовий функціонал</h2>
        <ul class="features-list">
          <li 
            v-for="(feature, index) in project.features" 
            :key="index" 
            class="feature-item"
          >
            <span class="feature-icon">✓</span>
            {{ feature }}
          </li>
        </ul>
      </section>

      <div class="action-buttons">
        <router-link to="/items" class="btn btn-secondary">
          Переглянути інші проєкти
        </router-link>
      </div>
    </div>

    <div v-else class="not-found">
      <div class="not-found-content">
        <h2>Проєкт не знайдено</h2>
        <p>На жаль, проєкт з таким ID не існує в нашому каталозі.</p>
        <router-link to="/items" class="btn btn-primary">
          Повернутися до каталогу
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()

const project = computed(() => {
  const id = parseInt(route.params.id)
  return projects.find(p => p.id === id)
})

const statusClass = (status) => {
  return status === 'Завершено' ? 'completed' : 'in-progress'
}
</script>

<style scoped>
.item-details-page {
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

.back-link {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
  transition: gap 0.3s ease;
  gap: 8px;
}

.back-link:hover {
  gap: 12px;
}

.project-details {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.details-header {
  padding-bottom: 30px;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 40px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 15px;
}

.project-title {
  font-size: 2.5rem;
  color: var(--text-color);
  margin: 0;
  flex: 1;
}

.status-badge {
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
}

.status-badge.completed {
  background: rgba(46, 213, 115, 0.1);
  color: #2ed573;
}

.status-badge.in-progress {
  background: rgba(255, 165, 2, 0.1);
  color: #ffa502;
}

.project-year {
  color: #666;
  font-size: 1.1rem;
}

.section-title {
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 20px;
  position: relative;
  padding-left: 15px;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 70%;
  background: var(--primary-color);
  border-radius: 2px;
}

.description-section {
  margin-bottom: 40px;
}

.full-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.technologies-section {
  margin-bottom: 40px;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tech-item {
  background: linear-gradient(135deg, rgba(66, 185, 131, 0.1), rgba(66, 185, 131, 0.2));
  color: var(--primary-color);
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid rgba(66, 185, 131, 0.3);
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(66, 185, 131, 0.3);
}

.features-section {
  margin-bottom: 40px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  margin-bottom: 12px;
  background: var(--bg-light);
  border-radius: 10px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #555;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(66, 185, 131, 0.1);
  transform: translateX(5px);
}

.feature-icon {
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.action-buttons {
  display: flex;
  gap: 15px;
  padding-top: 30px;
  border-top: 2px solid var(--border-color);
}

.btn {
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
}

.btn-secondary {
  background: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
}

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.not-found-content {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.not-found-content h2 {
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 15px;
}

.not-found-content p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .project-details {
    padding: 25px;
  }

  .header-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .tech-grid {
    gap: 8px;
  }

  .tech-item {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn {
    text-align: center;
  }
}
</style>