<script setup>
  import { computed, ref } from 'vue';
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

  const filter = ref('test');

  const tasksFiltered = computed(() => {
    return tasks.value.filter(task => {
      return task.label.toLowerCase().includes(filter.value.toLowerCase());
    })
  })

  const taskSorted = computed(() => {
    return [...tasksFiltered.value].sort()
  })

</script>

<template>
  <h1>Todo list</h1>
  <div>{{ val }}</div>

  <input v-model="filter" type="text" placeholder="filtrer la todo list">

  <ul>
    <li v-for="(task, index) of tasksFiltered">
      {{ task.label }}
    </li>
  </ul>

</template>

<style>

</style>
