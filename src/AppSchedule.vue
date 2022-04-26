<script setup>
  import { useFetch } from './composables/fetch.js';

  const { data: courses } = useFetch('https://chabloz.eu/files/horaires/all.json');


</script>

<template>
  <h1>Horaires</h1>

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
