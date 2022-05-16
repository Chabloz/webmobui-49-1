<script setup>
  import { apiLogoutUrl } from '../config/chat.js';
  import { useFetch } from '../composables/fetch.js';
  import { onUnmounted } from '@vue/runtime-core';
  import TheChatUsers from './Chat/TheChatUsers.vue';
  import TheChatMessages from './Chat/TheChatMessages.vue';
  import TheChatAddForm from './Chat/TheChatAddForm.vue';

  const {fetchJson: apiLogout} = useFetch(apiLogoutUrl, false);

  onUnmounted(() => {
    logout();
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
  <the-chat-users />
  <the-chat-messages />
  <the-chat-add-form />
  Chat
  <button @click="logout()">logout</button>
</template>

<style scoped>

</style>