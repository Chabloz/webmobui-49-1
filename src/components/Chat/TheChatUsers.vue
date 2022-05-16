<script setup>
  import { apiUsers } from '../../config/chat.js';
  import { useFetch } from '../../composables/fetch.js';
  import { onUnmounted } from '@vue/runtime-core';

  const {data: users, fetchJson: getUsers} = useFetch(apiUsers);

  const timerGetUsers = setInterval(getUsers, 5000);

  onUnmounted(() => {
    clearInterval(timerGetUsers);
  })


</script>

<template>
  <div>
    Online:
    <span v-for="(user, index) of users" :key="index">
      {{ user.username }}
    </span>
  </div>
</template>

<style scoped>

</style>