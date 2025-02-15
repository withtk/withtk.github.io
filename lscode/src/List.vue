<template>
  <div>
    <button v-for="(ee, i) in list" :key="i" type="button" @click="onLink(i)" style="margin: 4px">{{ ee }}</button>
  </div>
</template>

<script setup lang="ts">
const list: string[] = ['blog', 'agGrid', 'bootstrap', 'camelCase', 'ck2nd', 'csv', 'custom', 'editor', 'handsontable', 'jquery', 'jqueryui', 'tailwind', 'toast-ui-editor', 'nginx'];
const onLink = (index: number) => {
  const url = 'https://withtk.github.io/' + list[index];
  window.open(url, '_blank');
};
</script>

<style scoped></style>
