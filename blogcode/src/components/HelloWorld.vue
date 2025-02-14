<template>
  <div class="greetings text-center">
    <h2>{{ msg }}</h2>
    <h5 class="text-center">
      프로토타입
<!--      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> + <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?-->
    </h5>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<style scoped>
/*
h3 {
  font-size: 1.2rem;
}
 */

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
