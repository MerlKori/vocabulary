<template>
	<table class="table">
		<tr class="table__labels">
			<th
				v-for="(conf, idx) in scheme"
				:key="idx">{{conf.label}}</th>
		</tr>
		<tr
			v-for="(item, idx) in items"
			:key="idx"
			class="table__row">
			<td
				v-for="(conf, idx) in scheme"
				:key="idx">{{item[conf.key]}}</td>
		</tr>
	</table>
</template>

<script>
export default {
	name: 'Table',
	props: {
		scheme: Object,
		items: Array
	}
};
</script>

<style>

</style>