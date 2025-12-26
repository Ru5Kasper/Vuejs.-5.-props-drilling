<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div class="p-3 text-2xl mb-10">Общая сумма покупок: {{ cartStore.totalSum }}</div>
</template>
