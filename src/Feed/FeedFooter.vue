<!-- src/Feed/FeedFooter.vue -->
<script setup>
import { inject } from 'vue'
import CommentCount from './view/CommentCount.vue'
import LikeCount from './view/LikeCount.vue'
import ViewCount from './view/ViewCount.vue'
import { useCartStore } from '@/stores/cartStore'

// 1. Получаем ВСЕ данные из контекста FeedNode
const product = inject('product')
const meta = inject('meta')
const cartStore = useCartStore()

// 2. Функция покупки (вся логика здесь)
const handlePurchase = () => {
  cartStore.addToCart(product)

  // Можно добавить дополнительную логику:
  console.log(`Товар "${product.name}" добавлен в корзину`)

  // Или показать уведомление
  // notificationStore.show('Товар добавлен в корзину!')
}
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <!-- 3. Передаем данные в счетчики -->
    <CommentCount :comment="meta.comment" :product-id="product.id" />
    <LikeCount :like="meta.like" :product-id="product.id" />
    <ViewCount :view="meta.view" :product-id="product.id" />

    <!-- 4. Кнопка покупки с локальной обработкой -->
    <button
      class="bg-black text-white p-2 hover:bg-gray-800 transition-colors"
      @click="handlePurchase"
    >
      Купить за {{ product.price }} ₽
    </button>
  </div>
</template>
