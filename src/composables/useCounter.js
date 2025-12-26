import { computed } from 'vue'
import { useCounterStore } from '@/stores/counterStore'

export function useCounter(type, id, initialValue = 0) {
  const counterStore = useCounterStore()

  // Инициализируем счетчик если его нет
  if (!counterStore.counters[type][id]) {
    counterStore.counters[type][id] = {
      count: initialValue,
      isActive: false,
    }
  }

  const toggle = () => {
    counterStore.toggleCounter(type, id)
  }

  return {
    count: computed(() => counterStore.getCounter(type, id).count),
    isActive: computed(() => counterStore.getCounter(type, id).isActive),
    toggle,
  }
}
