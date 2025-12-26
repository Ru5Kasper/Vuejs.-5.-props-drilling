<!-- src/Feed/FeedHeader.vue -->
<script setup>
import { inject } from 'vue'

// Получаем данные через inject
const product = inject('product')
const user = inject('user')
</script>

<template>
  <div class="text-sm">
    <div>Creator - {{ user.full_name }}</div>
    <div>Media count: {{ product.collection_medias?.length || 0 }}</div>
  </div>
  <h2 class="text-lg font-extrabold">{{ product.name }}</h2>
</template>
