<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Вітаємо в <span class="highlight">ProjectHub</span>
        </h1>
        <p class="hero-description">
          Ваш особистий каталог веб-проєктів та застосунків. Перегляньте портфоліо, 
          дізнайтеся про технології та функціонал кожного проєкту.
        </p>
        <router-link to="/items" class="cta-button">
          Переглянути каталог
        </router-link>
      </div>
    </section>

    <section class="features">
      <h2 class="section-title">Можливості платформи</h2>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3 class="feature-title">Адаптивний дизайн</h3>
          <p class="feature-description">
            Всі проєкти оптимізовані для роботи на будь-яких пристроях
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3 class="feature-title">Швидка навігація</h3>
          <p class="feature-description">
            SPA архітектура забезпечує миттєве перемикання між сторінками
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3 class="feature-title">Сучасні технології</h3>
          <p class="feature-description">
            Використання Vue 3, Vite та інших передових інструментів
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📖</div>
          <h3 class="feature-title">Детальна інформація</h3>
          <p class="feature-description">
            Докладний опис функціоналу та стеку технологій кожного проєкту
          </p>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="stat-item">
        <div class="stat-number">{{ projectsCount }}</div>
        <div class="stat-label">Проєктів у каталозі</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ technologiesCount }}+</div>
        <div class="stat-label">Використаних технологій</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">100%</div>
        <div class="stat-label">SPA досвід</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { projects } from '../data/projects.js'

const projectsCount = computed(() => projects.length)

const technologiesCount = computed(() => {
  const allTechs = new Set()
  projects.forEach(project => {
    project.technologies.forEach(tech => allTechs.add(tech))
  })
  return allTechs.size
})
</script>

<style scoped>
.home-page {
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

.hero {
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, rgba(66, 185, 131, 0.1), rgba(53, 73, 94, 0.1));
  border-radius: 20px;
  margin-bottom: 60px;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
  color: var(--text-color);
}

.highlight {
  color: var(--primary-color);
}

.hero-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.8;
}

.cta-button {
  display: inline-block;
  padding: 15px 40px;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(66, 185, 131, 0.4);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: var(--text-color);
}

.features {
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.feature-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.feature-description {
  color: #666;
  line-height: 1.6;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  padding: 40px;
  background: var(--primary-color);
  border-radius: 20px;
  color: white;
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
}
</style>