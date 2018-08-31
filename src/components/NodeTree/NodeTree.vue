<template>
  <div class="node-tree">
    <tr class="table-row">
      <td class="table-row-item">
        <span>{{ node.product[0].product_id }}</span>
      </td>
      <td class="table-row-item">
        <span>{{ node.product[0].article }}</span>
      </td>
    </tr>
    <!-- <span class="label" :style="style">{{ node.product[0].article }}</span> -->

    <!-- <ul v-if="node.children && node.children.length"> -->
      <node v-for="child in node.children" :node="child" :depth="depth + 1"></node>
    <!-- </ul> -->
  </div>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object,
    depth: Number
  },
  computed: {
    style: function () {
      if (this.depth <= 1) {
        return null;
      } else {
        return { paddingLeft: (this.depth - 1) * 10 + 'px' }
      }
    }
  }
};
</script>

<style lang="scss">
  .table-row {
    display: flex;
    &-item {
      padding: 10px 0 10px 20px;
      font-size: 12px;
      color: #444;
      &:nth-of-type(1) {
        // width: 100px;
      }
      &:nth-of-type(2) {
        // width: 200px;
      }      
    }
  }
</style>
