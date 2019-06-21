<template functional>
	<ul class="words-list">
		<li
			v-for="item in props.items"
			:key='item.id'
			@click="props.handler(item)"
			class="words-list__item">
			<span class="words-list__main-word">{{item[props.renderScheme.main]}}</span>
			<span class="words-list__desc-word">{{item[props.renderScheme.desc]}}</span>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'Word_List',
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
.words-list {
	padding: 10px;
}
.words-list__item {
	display: flex;
	justify-content: space-between;
	margin: 10px 0;
	padding: 5px;
	border-bottom: 1px solid #000;
}
.words-list__main-word {
	font-weight: bold;
}
.words-list__desc-word {
	color: #083279;
}
</style>
