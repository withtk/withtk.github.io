<template>
  <div>
    <div class="about">
      <h2>This is an about page</h2>
      <hr/>
      <p>This is an about 111111</p>
    </div>
    <div class="example">
      <p>This is an about 3333</p>
    </div>
    <p>This is an about 44</p>
    <q-chip class="glossy" color="orange" text-color="white" icon-right="star">
      Star
    </q-chip>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" icon="mail" label="On Left" />
      <q-btn color="secondary" icon-right="mail" label="On Right" />
      <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
      <br>
      <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
    </div>
    <div class="row">
      <q-card v-for="c in 10" :key="c">
        <div class="text-center bg-primary text-amber">멤버</div>
        <q-card-section>
          홍길동
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    //min-height: 100vh;
    //display: flex;
    //align-items: center;
  }
}

.example {
  p {
    color: blue;
  }
}

p {
  color: #e15656;
}
</style>
