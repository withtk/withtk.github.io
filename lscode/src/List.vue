<template>
  <div>
    <button v-for="(ee, i) in list" :key="i" type="button" @click="goto(i)" style="margin: 4px">{{ ee }}</button>
  </div>
</template>

<script setup lang="ts">
import list  from '../node/page_list.json'

const goto = (index: number) => {
  const url = 'https://withtk.github.io/' + list[index];
  window.open(url, '_blank');
};

</script>

<style scoped></style>
