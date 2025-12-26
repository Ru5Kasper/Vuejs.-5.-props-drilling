<script setup>
import { provide } from 'vue'
import FeedFooter from './FeedFooter.vue'
import FeedHeader from './FeedHeader.vue'
import { useCartStore } from '@/stores/cartStore'

const props = defineProps({
  product: Object,
  user: Object,
  meta: Object,
})

const cartStore = useCartStore()

// Предоставляем product для вложенных компонентов через provide
provide('product', props.product)

const onKupit = () => {
  cartStore.addToCart(props.product)
}
</script>

<template>
  <div class="relative overflow-hidden">
    <FeedHeader :name="product.name" :count="product.collection_medias.length" :user="user" />
    <FeedFooter :like="meta.like" :view="meta.view" :comment="meta.comment" @kupit="onKupit" />
  </div>
</template>
