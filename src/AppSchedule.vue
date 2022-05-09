<script setup>
  import { ref, watchEffect } from 'vue';
import { useFetch } from './composables/fetch.js';
  import TheNav from './components/TheNav.vue';

  const { data: courses } = useFetch('https://chabloz.eu/files/horaires/all.json');


  const { data: result } = useFetch('https://chabloz.eu/ws/chat/user/login?user=Nicolas');
  const { data: messages } = useFetch('https://chabloz.eu/ws/chat/msg/get');

  const tmplRef = ref(null);

  const filterBy = ref('');

  watchEffect(() => {
    console.log(tmplRef.value)

  });

  function addMessage() {
    console.log(filterBy.value)
  }

  const myComponent = TheNav;

</script>

<template>
  <template v-if="1">
  <h1>Horaires</h1>
  <h2>IM</h2>
  </template>

  <component :is="myComponent"></component>

  <div ref="tmplRef">
    {{ result }}
  </div>
  <div>
   {{ messages }}
  </div>

  <form @submit.prevent="addMessage()">
    <input type="test" v-model="filterBy">
    <button>Add message</button>
  </form>



  <ul>
    <li v-for="course of courses">
      {{ course.label }}
      à
      {{ course.start }}
    </li>
  </ul>
</template>

<style>

</style>
