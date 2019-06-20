<template>
	<div id="app">
		<AppHeader />
		<main>
			<router-view/>
		</main>
	</div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
	name: 'App',
	components: {
		AppHeader
	}
};
</script>


<style src="@/assets/styles/index.css"></style>
