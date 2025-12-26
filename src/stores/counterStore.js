import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const counters = ref({
    comments: {},
    likes: {},
    views: {},
  })

  const toggleCounter = (type, id) => {
    if (!counters.value[type][id]) {
      counters.value[type][id] = {
        count: 0,
        isActive: false,
      }
    }

    const counter = counters.value[type][id]
    if (counter.isActive) {
      counter.count--
      counter.isActive = false
    } else {
      counter.count++
      counter.isActive = true
    }
  }

  const getCounter = (type, id) => {
    return counters.value[type][id] || { count: 0, isActive: false }
  }

  return {
    counters,
    toggleCounter,
    getCounter,
  }
})
