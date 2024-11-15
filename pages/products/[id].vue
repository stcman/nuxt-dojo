<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params;

  definePageMeta({ 
    layout: 'products'
  })

  //fetch products
  const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`);
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>