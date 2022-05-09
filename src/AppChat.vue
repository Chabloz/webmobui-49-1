<script setup>
  import { apiLoginUrl } from './config/chat.js';
  import { useFetch } from './composables/fetch.js';
  import TheChat from './components/TheChat.vue';


  import { computed, ref, watchEffect } from 'vue';

  const showError = ref(false);
  const isLogged = ref(false);

  const username = ref('');
  const urlLogin = computed(() => apiLoginUrl + username.value);
  const {data: loginResult, fetchJson: apiLogin} = useFetch(urlLogin, false);

  watchEffect(() => {
    if (loginResult.value?.status == 'success') {
      showError.value = false;
      isLogged.value = true;
    } else if (loginResult.value?.status == 'error'){
      showError.value = true;
    };
  });

  function login() {
    apiLogin();
  }
</script>

<template>

  <the-chat v-if="isLogged" @chat:logout="isLogged = false"></the-chat>

  <template v-else>
    <p v-if="showError">Erreur de connexion</p>
    <form @submit.prevent="login()">
      <input
        type="text"
        required
        v-model="username"
      >
      <button>login</button>
    </form>
  </template>
</template>

<style scoped>

</style>