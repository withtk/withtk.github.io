<template>
  <div>
    <button v-for="(ee, i) in list" :key="i" type="button" @click="goto(i)" style="margin: 4px">{{ ee }}</button>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue';
import page_list  from '../node/page_list.json'


const exceptionList = ['ls','lscode','blogcode', 'milkcode', 'moviecode']  // 제외할 디렉토리
console.log('--func--page_list: ', page_list);

const list : Ref = ref<Array<string>>([])
list.value =  page_list.filter(element => !exceptionList.includes(element));

console.log('--func--list.value: ', list.value);

const goto = (index: number) => {
  const url = 'https://withtk.github.io/' + list.value[index];
  window.open(url, '_blank');
};

</script>

<style scoped></style>
