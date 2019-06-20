<template>
	<div class="form">
		<h3 class="form__title">{{title}}</h3>
		
		<button class="form__btn"></button>
		<button class="form__btn"></button>
	</div>
</template>

<script>
import TextField from './TextField.vue';

export default {
	name: 'Form',
	components: {
		TextField
	},
	props: {
		title: String,
		inputData: {
			type: Object,
			default: () => {}
		},
		formConfig: {
			type: Array,
			default: () => []
		}
	},
	data () {
		return {
			formData: Object.assign({}, inputData)
		};
	}
};
</script>

<style>

</style>
