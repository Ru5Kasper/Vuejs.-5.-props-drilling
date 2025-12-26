<!-- src/Feed/FeedType.vue -->
<script setup>
import FeedFooter from './FeedFooter.vue'
import FeedHeader from './FeedHeader.vue'

// Больше не получаем props - все через inject
// Emit тоже не нужен - логика покупки в FeedFooter
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Header и Footer получают данные через inject -->
    <FeedHeader />
    <FeedFooter />
  </div>
</template>
