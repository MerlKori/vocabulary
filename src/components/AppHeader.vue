<template>
	<header class="app-header">
		logo
		<router-link
			v-if="btnReturnIsActive"
			:to="linkToStart"
			tag="button">Return</router-link>
	</header>
</template>

<script>
import routesList from '@/router/routes';

export default {
	name: 'AppHeader',
	data: () => ({
		linkToStart: routesList.start
	}),
	computed: {
		btnReturnIsActive () {
			return this.$route.path !== this.linkToStart;
		}
	}
};
</script>

<style>
.app-header {
	display: flex;
	align-items: center;
	padding: 10px 15px;
	background-color:#1B85F3;
}
</style>
