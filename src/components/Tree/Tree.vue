<template>
  <div class="tree">
    <div class="tree-list">
      <node-tree :node="treeData" :depth="0"></node-tree>
    </div>
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
    // display: table;
    font-size: 16px;
    line-height: 1;
    border: solid 0.25pt rgba(151, 151, 151, 0.15);
    font-family: Helvetica, Arial, sans-serif;
  }
  .root-row {
    background-color: #ffecd7;
    border-top: solid 0.25pt rgba(255, 197, 129, 0.58);
    border-bottom: solid 0.25pt rgba(255, 197, 129, 0.58);
    .table-row-item--title::before {
      content: '';
      display: inline-block;
      width: 1px;
      height: 1px;
      margin-right: 5px;
      border-top: solid 5px #444;
      border-right: solid 5px transparent;
      border-bottom: solid 0 transparent;
      border-left: solid 5px transparent;
    }
  }
</style>