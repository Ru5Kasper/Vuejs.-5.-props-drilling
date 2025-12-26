<script setup>
import { inject } from 'vue'
import CommentCount from './view/CommentCount.vue'
import LikeCount from './view/LikeCount.vue'
import ViewCount from './view/ViewCount.vue'

defineProps({
  like: Number,
  view: Number,
  comment: Number,
})

// Получаем product из provide
const product = inject('product')

const emit = defineEmits(['kupit'])

const onkupit = () => {
  emit('kupit')
}
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount :comment="comment" :product-id="product.id" />
    <LikeCount :like="like" :product-id="product.id" />
    <ViewCount :view="view" :product-id="product.id" />
    <button class="bg-black text-white p-2" @click="onkupit()">Купить</button>
  </div>
</template>
