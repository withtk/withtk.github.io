<template>
  <div class="container">
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h1>
      <a href="https://withtk.github.io/" class="home">with<span class="tk">tk</span></a> Page List
    </h1>
    <List />
    <div style="flex: 1"></div>
  </div>
</template>

<script setup lang="ts">
import List from './List.vue'
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  height: 100vh; /* 뷰포트 높이로 설정 */
  justify-content: space-between;
  padding: 2rem;
  background-image: linear-gradient(to top, #cee4f1 0%, #e2ebf0 100%);
}

a.home {
  text-decoration: none;
  font-family: inherit; /* 부모의 font-family를 상속받음 */
  font-size: inherit; /* 부모의 font-size를 상속받음 */
  font-weight: inherit;
  color: inherit; /* 부모의 color를 상속받음 */
}

span.tk {
  color: #070360;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
