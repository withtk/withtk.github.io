<template>
  <div class="app-wrap">
    <div class="bg-grid"></div>
    <div class="bg-glow"></div>
    
    <div class="container">
      <header>
        <h1>
          <a href="https://withtk.github.io/" class="home">with<span>tk</span></a>
        </h1>
        <p class="subtitle">Page List <span class="version">v{{ version }}</span></p>
      </header>

      <List />

      <footer>
        <p>&copy; 2026 withtk. Built with passion.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import List from './List.vue'
import { version } from '@root/package.json'
</script>

<style scoped>
.app-wrap {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

.bg-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: -1;
  pointer-events: none;
  animation: grid-move 20s linear infinite;
}

.bg-glow {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  z-index: -1;
  filter: blur(80px);
  opacity: 0.5;
}

.container {
  max-width: 1000px;
  width: 100%;
  padding: 6rem 1.5rem 2rem;
  z-index: 1;
  animation: fade-in 0.8s ease-out forwards;
}

header {
  margin-bottom: 3rem;
  text-align: center;
}

h1 {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  margin-bottom: 0.5rem;
}

h1 a {
  color: var(--fg);
}

h1 span {
  color: var(--accent);
}

.subtitle {
  font-size: 1rem;
  color: var(--muted);
  font-weight: 400;
}

.version {
  font-size: 0.8rem;
  opacity: 0.5;
  margin-left: 0.5rem;
}

footer {
  margin-top: 4rem;
  padding: 2rem 0;
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
}

@media (max-width: 480px) {
  .container {
    padding-top: 4rem;
  }
}
</style>
