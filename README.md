# Покрокова інструкція з розгортання проєкту

##  Передумови

Перед початком переконайтеся, що у вас встановлено:
- **Node.js** версії 16 або вище (перевірити: `node --version`)
- **npm** версії 7 або вище (перевірити: `npm --version`)
- **Git** (перевірити: `git --version`)

##  Крок 1: Ініціалізація проєкту

### Варіант A: Створення з нуля

```bash
# Створення проєкту через Vite
npm create vite@latest my-spa -- --template vue

# Перехід в директорію
cd my-spa

# Встановлення базових залежностей
npm install

# Встановлення Vue Router
npm install vue-router
```

### Варіант B: Клонування репозиторію

```bash
# Клонування репозиторію
git clone <your-repository-url>
cd my-spa

# Встановлення залежностей
npm install
```

##  Крок 2: Створення структури проєкту

Створіть наступну структуру директорій у папці `src/`:

```
src/
├── components/
│   ├── AppHeader.vue
│   └── AppFooter.vue
├── layouts/
│   └── MainLayout.vue
├── pages/
│   ├── HomePage.vue
│   ├── ItemsListPage.vue
│   └── ItemDetailsPage.vue
├── router/
│   └── index.js
├── data/
│   └── projects.js
├── App.vue
├── main.js
└── style.css
```

##  Крок 3: Копіювання файлів

Скопіюйте вміст кожного файлу з наданих артефактів:

1. **main.js** - точка входу додатку
2. **App.vue** - головний компонент
3. **style.css** - глобальні стилі
4. **router/index.js** - налаштування маршрутизації
5. **data/projects.js** - дані проєктів
6. **components/AppHeader.vue** - компонент хедера
7. **components/AppFooter.vue** - компонент футера
8. **layouts/MainLayout.vue** - загальний layout
9. **pages/HomePage.vue** - головна сторінка
10. **pages/ItemsListPage.vue** - сторінка зі списком
11. **pages/ItemDetailsPage.vue** - сторінка деталей

##  Крок 4: Налаштування конфігурації

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

### package.json

Переконайтеся, що у вас є правильні скрипти:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

##  Крок 5: Запуск проєкту

### Режим розробки

```bash
npm run dev
```

Відкрийте браузер за адресою: `http://localhost:5173`

### Збірка для продакшену

```bash
npm run build
```

Збірка буде створена в папці `dist/`

### Перегляд продакшен-збірки

```bash
npm run preview
```