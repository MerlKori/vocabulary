<template>
	<label class="field">
		<span
			v-if="labelIsVisible"
			class="field__label">{{label}}</span>
		<input
			@input="changeValue($event)"
			:value="value"
			:placeholder="placeholder"
			class="field__input"
			type="text">
		<!-- <span
			v-show="!iconIsVisible"
			@click="clearFild()"
			class="field__clear-icon icon-close"></span> -->
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
		},
		clearFild () {
			this.$emit('change', null);
		}
	},
	computed: {
		labelIsVisible () {
			return !this.label;
		},
		iconIsVisible () {
			return typeof this.value === 'string' && this.value.trim().length > 0;
		}
	}
};
</script>

<style>
.field {
	position: relative;
	padding: 5px;
}
.field__input {
	width: 100%;
}
.field__clear-icon {
	position: absolute;
	top: 0;
	right: 0;
	display: block;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid var(--c-grey-6);
}
</style>

<style scoped>
/* .icon-close {
	background-size: 80%;
	background-position: center;
} */
</style>
