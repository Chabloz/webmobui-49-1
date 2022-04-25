import { ref } from 'vue';
import { useLocalstorage } from './composables/localstorage.js';

export const page = ref('home');

export const { val: tasks } = useLocalstorage('tasks', [ {
  label: 'test task 1',
  date: '12.01.2012'
}, {
  label: 'test task 2',
  date: '12.12.2022'
}]);