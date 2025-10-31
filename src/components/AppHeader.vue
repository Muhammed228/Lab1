<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <span class="logo-icon">🚀</span>
            <span class="logo-text">ProjectHub</span>
          </router-link>
        </div>
        
        <nav class="nav">
          <router-link to="/" class="nav-link">Головна</router-link>
          <router-link to="/items" class="nav-link">Каталог</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Компонент хедера з навігаційним меню
</script>

<style scoped>
.header {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.5rem;
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  background: linear-gradient(135deg, var(--primary-color), #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: var(--bg-light);
  color: var(--primary-color);
}

.nav-link.router-link-active {
  color: var(--primary-color);
  background: rgba(66, 185, 131, 0.1);
}

@media (max-width: 768px) {
  .header-content {
    height: 60px;
  }
  
  .logo-text {
    font-size: 1.2rem;
  }
  
  .nav {
    gap: 15px;
  }
  
  .nav-link {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style>