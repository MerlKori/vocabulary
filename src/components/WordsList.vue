<template functional>
	<ul class="words-list">
		<li
			v-for="item in props.items"
			:key='item.id'
			@click="props.handler(item)"
			class="words-list__item">
			<span class="words-list__main-word">{{item[props.renderScheme.maim]}}</span>
			<span class="words-list__desc-word">{{item[props.renderScheme.desc]}}</span>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'List_Container',
	props: {
		items: Array,
		handler: Function,
		renderScheme: {
			type: Object,
			default: () => {}
		}
	}
};
</script>

<style>
.list-container {

}
</style>
