<!-- src/Feed/FeedNode.vue -->
<script setup>
import { provide } from 'vue'
import FeedType from './FeedType.vue'

const props = defineProps({
  product: Object, // Получаем продукт из App.vue
})

// 1. Предоставляем ВСЕ данные для всего поддерева
provide('product', props.product)
provide('productId', props.product.id)
provide('meta', props.product.meta)
provide('user', props.product.user)

// 2. Эмиты больше не нужны - вся логика в FeedFooter
</script>

<template>
  <div class="border p-3">
    <div class="border p-5 mb-2">
      <p v-if="product.price" class="text-gray-light text-sm">Цена: {{ product.price }}</p>
      <p v-if="product.purchase_date" class="text-gray-light text-sm">
        Дата покупки: {{ product.purchase_date }}
      </p>
    </div>

    <!-- 3. Передаем только необходимые пропсы -->
    <FeedType />
  </div>
</template>
