// src/composables/useCounter.js
import { computed } from 'vue'
import { useCounterStore } from '@/stores/counterStore'

export function useCounter(type, id, initialValue = 0) {
  const counterStore = useCounterStore()

  // Автоматическая инициализация при первом использовании
  if (!counterStore.counters[type][id]) {
    counterStore.counters[type][id] = {
      count: initialValue,
      isActive: false,
    }
  }

  // Получаем текущее состояние
  const counterState = computed(() => counterStore.getCounter(type, id))

  // Метод переключения
  const toggle = () => {
    counterStore.toggleCounter(type, id)
  }

  // Метод сброса (дополнительная функциональность)
  const reset = () => {
    counterStore.counters[type][id] = {
      count: initialValue,
      isActive: false,
    }
  }

  return {
    count: computed(() => counterState.value.count),
    isActive: computed(() => counterState.value.isActive),
    toggle,
    reset,
    // Для отладки можно вернуть полное состояние
    state: counterState,
  }
}
