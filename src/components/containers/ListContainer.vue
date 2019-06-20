<template functional>
	<ul class="list-container">
		<slot
			v-for="(item) in props.items"
			:item="item">
		</slot>
	</ul>
</template>

<script>
export default {
	name: 'List_Container',
	props: {
		items: Array
	}
};
</script>

<style>
.list-container {

}
</style>
