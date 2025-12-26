<!-- src/HeaderApp.vue -->
<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div class="p-6 mb-10 bg-gray-50 rounded-lg shadow">
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold">Корзина покупок</h2>
        <p class="text-gray-600">Общая сумма: {{ cartStore.totalSum }} ₽</p>
        <p class="text-sm text-gray-500">Товаров в корзине: {{ cartStore.purchased.length }}</p>
      </div>

      <!-- Дополнительная информация -->
      <div v-if="cartStore.purchased.length > 0" class="text-right">
        <button
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          @click="console.log('Оформление заказа...')"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
