<template>
  <div class="tree">
    <ul class="tree-list">
      <node-tree :node="treeData"></node-tree>
    </ul>
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
    padding-left: 20px;
    // background-color: #fdc;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      width: 1px;
      height: 1px;
      // background-color: #f22;
      border-top: solid 8px #222;
      border-right: solid 6px transparent;
      border-bottom: solid 0 transparent;
      border-left: solid 6px transparent;
    }
  }
  .tree-list ul {
    padding-left: 16px;
    margin: 6px 0;
  }
</style>