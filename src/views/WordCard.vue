<template functional>
	<div class="word-card">
		<h5 class="word-card__title">{{props.wordData[props.renderScheme.main]}}</h5>
		<h6 class="word-card__subtitle">[{{props.wordData.tr}}]</h6>
		<h5 class="word-card__title">{{props.wordData[props.renderScheme.desc]}}</h5>
		<!-- <ol class="word-card__desc-list">
			<li
				v-for="(desc, idx) in props.wordData.desc"
				:key="idx">{{desc}}</li>
		</ol> -->
	</div>
</template>

<script>
export default {
	name: 'Word_Card',
	props: {
		wordData: {
			type: Object,
			default: () => ({})
		},
		renderScheme: {
			type: Object,
			default: () => ({})
		}
	}
};
</script>

<style>

</style>
