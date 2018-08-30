<template>
	<div class="app">
    <tree :tree-data="tree"></tree>
	</div>
</template>

<script>
	import Tree from '../Tree/Tree.vue'

	const tree = {
		label: "Root",
		children: [
			{
				label: "Sub 1",
				children: [
					{ label: "Sub Sub 1-1" },
					{ label: "Sub Sub 1-2" }
				]
			},
			{ 
				label: "Sub 2",
				children: [
					{
						label: "Sub Sub 2-1",
						children: [
							{
								label: "Sub Sub Sub 2-1-1"
							}
						]}
				]
			}
		]
	}
	
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