<template>
  <div class="bg-amber-500">
    <div class="flex justify-center align-middle">
      <h4>----piker1----</h4>
    </div>

    <div class="p-2">
      <div class="q-pa-md">
        <q-file @update:model-value="onFFFF" v-model="files" label="Pick files" outlined use-chips multiple style="max-width: 300px" />
      </div>
      <q-btn @click.prevent.stop="onUpload" color="secondary" icon-right="mail" label="onUpload" />
      <q-img v-for="(ee, index) in urls" :key="index" :src="ee" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue' // 타입 전용 임포트
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { getUserFromChatID } from '@/fb/user'
import { getStRef, st, uploadSt } from '../../fb'

const files: Ref = ref([])
const urls = ref<Array<string>>([])

const onFFFF = (files: []) => {
  console.log('--onFFFF--files: ', files)
  files.map((file: any) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const imageUrl = e?.target?.result as string
      console.log('--onload--imageUrl: ', imageUrl)
      if (imageUrl) urls.value?.push(imageUrl)
    }
    reader.readAsDataURL(file)
  })
}

const onUpload = async () => {
  console.log('--onUpload--files: ', files.value)
  files.value?.forEach((f: File) => {
    const dddd = +new Date()
    const fName = f.name + dddd
    console.log('--onUpload--f: ', dddd, f)
    console.log('--onUplsdf: ', f.name + dddd)
    uploadSt(f, fName, (url: string) => {
      console.log('--url: ', url)
    })
  })
}
</script>

<style lang="scss"></style>
