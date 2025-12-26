<!-- src/App.vue -->
<script setup>
import { onMounted } from 'vue'
import FeedNode from './Feed/FeedNode.vue'
import HeaderApp from './HeaderApp.vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

// Исходные данные продуктов
const products = [
  {
    id: 1,
    name: 'Test',
    price: 500,
    collection_medias: ['media1', 'media2', 'media3'],
    meta: {
      view: 1500,
      comment: 100,
      like: 50,
    },
    user: {
      id: 1,
      full_name: 'Alex Alex Alex',
    },
  },
  {
    id: 2,
    name: 'Test 3',
    price: 5000,
    collection_medias: ['media1'],
    meta: {
      view: 200,
      comment: 1,
      like: 25,
    },
    user: {
      id: 2,
      full_name: 'Palex Palex Palex',
    },
  },
]

// Инициализация при монтировании
onMounted(() => {
  cartStore.setProducts(products)
  // Можно загрузить данные с сервера
  // fetchProducts().then(data => cartStore.setProducts(data))
})

// Больше нет обработчика onKupit - вся логика в компонентах
</script>

<template>
  <div class="p-6 container mx-auto">
    <HeaderApp />

    <div class="grid grid-cols-2 gap-6">
      <!-- Передаем только product, остальное внутри через provide -->
      <FeedNode :product="product" v-for="product in products" :key="product.id" />
    </div>
  </div>
</template>
