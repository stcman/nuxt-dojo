<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nam soluta ab tenetur velit aliquam quam eum sunt beatae quibusdam! Nisi quia unde ad maiores nam veniam tempora placeat culpa?</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nam soluta ab tenetur velit aliquam quam eum sunt beatae quibusdam! Nisi quia unde ad maiores nam veniam tempora placeat culpa?</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  // const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'post',
  //   body: { age: 30}
  // });

  const { data } = await useFetch('/api/currency/GBP');

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