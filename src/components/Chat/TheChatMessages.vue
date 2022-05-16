<script setup>
  import { apiGetMsg } from '../../config/chat.js';
  import { useFetch } from '../../composables/fetch.js';
  import { onUnmounted, watchEffect } from '@vue/runtime-core';
  import { ref } from 'vue';

  const {data: messages, fetchJson: getNewMsg} = useFetch(apiGetMsg);

  const timer = setInterval(getNewMsg, 1000);

  const allMsg = ref([]);

  watchEffect(() => {
    if (messages.value?.length > 0) {
      allMsg.value.push(...messages.value);
    }
  })

  onUnmounted(() => {
    clearInterval(timer);
  })

</script>

<template>
  <div>
    <div v-for="(msg, index) of allMsg" :key="index">
      {{ msg.user.username }} :
      {{ msg.message }}
    </div>
  </div>
</template>

<style scoped>

</style>