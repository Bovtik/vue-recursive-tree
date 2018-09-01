<template>
  <div class="factory-row">
    <div class="factory-item">
      <span>{{ node.product[0].product_id }}</span>
    </div>
    <div class="factory-item">
      <span>{{ node.product[0].article }}</span>
    </div>
    <div class="factory-item">
      <span>{{ node.product[0].department }}</span>
    </div>
    <div class="factory-item factory-item--title" :style="style">
      <span>{{ node.product[0].title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>

