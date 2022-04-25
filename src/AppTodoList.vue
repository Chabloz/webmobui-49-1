<script setup>
  import { useLocalstorage } from './composables/localstorage.js';
  import { tasks } from './state.js';

  const { val } = useLocalstorage('foo', 'bar');
  const { val: val2 } = useLocalstorage('foo2', 'bar2');




  // setTimeout(() => {
  //   tasks.value.push({
  //     label: 'tache du futur',
  //     date: '01.01.2300'
  //   })
  // }, 3000)

  // setTimeout(() => {
  //   tasks.value[0].label = "nouveau label";
  //   console.log(tasks.value);
  // }, 1000)

</script>

<template>
  <h1>Todo list</h1>
  <div>{{ val }}</div>
  <div>{{ val2 }}</div>

  <ul>
    <li v-for="(task, index) of tasks">
      {{ task.label }}
    </li>
  </ul>

</template>

<style>

</style>
