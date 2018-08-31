<template>
	<div class="app">
    <tree :tree-data="tree"></tree>
	</div>
</template>

<script>
	import Tree from '../Tree/Tree.vue'

	// const tree = {
	// 	label: "Root",
	// 	children: [
	// 		{
	// 			label: "Sub 1",
	// 			children: [
	// 				{ label: "Sub Sub 1-1" },
	// 				{ label: "Sub Sub 1-2" }
	// 			]
	// 		},
	// 		{ 
	// 			label: "Sub 2",
	// 			children: [
	// 				{
	// 					label: "Sub Sub 2-1",
	// 					children: [
	// 						{
	// 							label: "Sub Sub Sub 2-1-1"
	// 						}
	// 					]}
	// 			]
	// 		}
	// 	]
	// }
	
	const tree = {
		id: 1,
		product_id: 1,
		product: [
			{
				product_id: 1,
				article: "Д001",
				id: 2,
			}
		],
		children: [
			{
				id: 4,
				product_id: 37,
				product: [
					{
						product_id: 37,
						article: "шнурок красный d_001",
						id: 2,
					}
				],
				children: [
					{
						id: 5,
						product_id: 36,
						product: [
							{
								product_id: 36,
								article: "Моё правило",
								id: '',
							}
						]
					}
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