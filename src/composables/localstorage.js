import { watch, ref, watchEffect } from "vue";

export function useLocalstorage(name, defaultVal = null) {
  let data = localStorage.getItem(name);

  if (data === null) {
    data = defaultVal;
    localStorage.setItem(name, JSON.stringify(data));
  } else {
    data = JSON.parse(data);
  }

  const val = ref(data);

  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(val.value));
  })

  return { val }

}