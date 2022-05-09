<script setup>
  import { apiLogoutUrl } from '../config/chat.js';
  import { useFetch } from '../composables/fetch.js';
import { onUnmounted } from '@vue/runtime-core';

  const {fetchJson: apiLogout} = useFetch(apiLogoutUrl, false);

  const timerGetMesg = setInterval(() => {
    console.log('get msg');
  }, 5000)

  onUnmounted(() => {
    clearInterval(timerGetMesg);
  });

  const emit = defineEmits([
    'chat:logout'
  ])

  function logout() {
    apiLogout();
    emit('chat:logout');
  }

</script>

<template>
  Chat
  <button @click="logout()">logout</button>
</template>

<style scoped>

</style>