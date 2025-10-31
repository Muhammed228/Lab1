<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="copyright">
          © {{ currentYear }} ProjectHub. Всі права захищені.
        </p>
        <p class="made-with">
          Зроблено з <span class="heart">❤️</span> на Vue 3
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  margin-top: auto;
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.copyright, .made-with {
  margin: 0;
  font-size: 0.9rem;
}

.heart {
  color: #e74c3c;
  animation: pulse 1.5s ease infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>