<script setup>
import { useCounter } from '@/composables/useCounter'

const props = defineProps({
  view: Number,
  productId: {
    type: Number,
    required: true,
  },
})

const { count, isActive, toggle } = useCounter('views', props.productId, props.view)
</script>

<template>
  <div
    class="flex gap-3 cursor-pointer select-none transition-all hover:scale-110"
    :class="{ 'text-green-500': isActive }"
    @click="toggle"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-eye transition-all"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
    {{ count }}
  </div>
</template>
