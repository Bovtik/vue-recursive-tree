<template>
  <div class="node-tree">
    <div class="table-row" :class="{ 'root-row': !(depth-1) }">
      <div class="table-row-item">
        <span>{{ node.product[0].product_id }}</span>
      </div>
      <div class="table-row-item">
        <span>{{ node.product[0].article }}</span>
      </div>
      <div class="table-row-item">
        <span>{{ node.product[0].department }}</span>
      </div>
      <div class="table-row-item table-row-item--title" :style="style">
        <span>{{ node.product[0].title }}</span>
      </div>
    </div>

    <node v-for="child in node.children" :node="child" :depth="depth + 1"></node>
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
      let style = {};
      if (this.depth == 1) {
        style.backgroundColor = '#ffecd7';
      }
      if (this.depth > 2) {
        style.paddingLeft = 20 + (this.depth - 2) * 15 + 'px';
      }
      return style;
    }
  }
};
</script>

<style lang="scss">
  .table-row {
    &-item {
      display: table-cell;
      padding: 10px 0 10px 20px;
      font-size: 12px;
      color: #444;
      &:nth-of-type(1) {
        width: 101px;
      }
      &:nth-of-type(2) {
        width: 112px;
      }
      &:nth-of-type(3) {
        width: 104px;
      }
      &:nth-of-type(4) {
        width: 275px;
      }
    }
  }
</style>
