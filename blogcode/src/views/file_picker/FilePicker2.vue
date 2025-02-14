<template>
  <div class="bg-amber-400">
    <div class="flex justify-center align-middle">
      <h4>----piker2----</h4>
    </div>

    <div class="p-2">
      <input type="file" ref="fileInput" style="display: none" @change="addImage" multiple />
      <q-btn @click.prevent.stop="openFilePicker" color="secondary" label="픽커 열기" />
      <p v-for="(ee, i) in files" :key="i">{{ ee.name }}</p>
      <img v-for="(ee, i) in arrPath" :key="i" :src="ee" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue' // 타입 전용 임포트
import { ref } from 'vue'

const fileInput: Ref<HTMLElement | null> = ref(null)
const files: Ref = ref([])
const arrPath = ref<Array<string>>([])

const openFilePicker = () => {
  fileInput?.value?.click()
}

const addImage = (e: Event) => {
  console.log('--addImage--e.target: ', e.target)
  const target = e.target as HTMLInputElement
  if (target.files) {
    console.log(target.files)
    const _arrFile = Array.from(target.files) // FileList를 배열로 변환
    files.value = _arrFile

    let newList = []
    for (let i = 0; i < _arrFile.length; i++) {
      newList.push(URL.createObjectURL(_arrFile[i]))
    }
    arrPath.value = newList
    console.log('--arrPath-- : ', arrPath.value)
  }
}
</script>

<style lang="scss"></style>
