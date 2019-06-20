<template>
	<label class="field">
		<span class="field__label">{{label}}</span>
		<input
			@input="changeValue($event)"
			:value: value
			class="field__input"
			type="text">
	</label>
</template>

<script>
export default {
	name: 'Text_Field',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		value: String,
		label: String
	},
	methods: {
		changeValue (e) {
			const value = e.target.value;
			this.$emit('change', value);
		}
	}
};
</script>

<style>

</style>
