<template>
  <div class="tree">
    <table class="tree-list">
      <node-tree :node="treeData" :depth="0"></node-tree>
    </table>
  </div>
</template>

<script>
import NodeTree from "../NodeTree/NodeTree.vue";

export default {
  props: {
    treeData: Object
  },
  components: {
    NodeTree
  }
};
</script>

<style lang="scss">
  .tree-list {
    margin-left: 50px;
    position: relative;
    font-size: 16px;
    line-height: 1;
    list-style: none;
    // padding-left: 20px;
    border: solid 1px #222;
    // background-color: #fdc;
  }
</style>