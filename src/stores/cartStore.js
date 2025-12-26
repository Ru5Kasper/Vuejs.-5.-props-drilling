import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const purchased = ref([])
  const products = ref([])

  const addToCart = (product) => {
    purchased.value.push({ ...product })
  }

  const totalSum = computed(() => {
    return purchased.value.reduce((total, product) => {
      return total + (product.price || 0)
    }, 0)
  })

  const setProducts = (productsList) => {
    products.value = productsList
  }

  const getProduct = (id) => {
    return products.value.find((p) => p.id === id)
  }

  return {
    purchased,
    products,
    addToCart,
    totalSum,
    setProducts,
    getProduct,
  }
})
