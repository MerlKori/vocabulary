<template>
	<label class="field">
		<span class="field__label">{{label}}</span>
		<input
			@input="changeValue($event)"
			:value="value"
			:placeholder="placeholder"
			class="field__input"
			type="text">
		<span class="field__clear-icon"></span>
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
		label: String,
		placeholder: String
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
.field {
	display: flex;
	align-items: center;
	margin: 3px 0;
	padding: 5px;
}
/* .field__label {
	grid-area: label;
} */
.field__input {
	flex-grow: 1;
}
/* .field__clear-icon {
	grid-area: icon;
} */
</style>
