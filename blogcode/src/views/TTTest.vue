<template>
  <div class="bg-amber-300">
    <div class="flex justify-center align-middle">
      <h2>TTTestpage</h2>
      <hr />
      <p class="">{{ abcd }}</p>

      <q-chip class="glossy" color="orange" text-color="white" icon-right="star"> Star</q-chip>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
        <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
      </div>

      <br />
      <div class="row">
        <q-card v-for="c in 10" :key="c">
          <div class="text-center bg-primary text-amber">멤버</div>
          <q-card-section> 홍길동</q-card-section>
        </q-card>
      </div>
    </div>

    <div class="p-20">
      <q-btn @click="getUserData" color="primary" icon="mail" label="getUserData" />
      <p class="text-xl">{{ result }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getUserFromChatID } from '@/fb/user'

const abcd = ref('abcd')
const result = ref('result')

const getUserData = async () => {
  const data = await getUserFromChatID('6507416005')
  console.log('--func--data: ', data)
  result.value = data
}
</script>

<style lang="scss"></style>
