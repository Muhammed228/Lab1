<template>
  <router-view />
</template>

<script setup>
// Головний компонент, який рендерить поточний маршрут
</script>

<style>
:root {
  --primary-color: #42b983;
  --text-color: #2c3e50;
  --bg-light: #f5f5f5;
  --border-color: #e0e0e0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>