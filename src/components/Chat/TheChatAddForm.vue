<script setup>
  import { apiSendMsg } from '../../config/chat.js';
  import { useFetch } from '../../composables/fetch.js';
  import { ref, computed } from 'vue';


  const msg = ref('');
  const urlSendMsg = computed(() => apiSendMsg + msg.value);
  const {fetchJson: submitMsg} = useFetch(urlSendMsg, false);


  function sendMsg() {
    submitMsg();
  }

</script>

<template>
  <form @submit.prevent="sendMsg()">
    <input type="text" v-model="msg" required>
    <button>envoyer</button>
  </form>
</template>

<style scoped>

</style>