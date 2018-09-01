<template>
	<div class="app">
    <tree :tree-data="tree"></tree>

	</div>
</template>

<script>
	import Tree from '../Tree/Tree.vue'
	
	

	export default {
		data: () => ({
			tree: tree
		}),
		components: {
			Tree
		}
	};
</script>

<style lang="scss">
	
</style>