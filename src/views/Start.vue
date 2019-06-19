<template>
	<div class="flex-center">
		<ul class="nav-lits">
			<router-link
				v-for="(link, idx) in links"
				:key="idx"
				:to="link.path"
				tag="li"
				class="nav-lits__link">{{link.name}}</router-link>
		</ul>
	</div>
</template>

<script>
import routesList from '@/router/routes';

export default {
	name: 'Start',
	data: () => ({
		links: [
			{
				path: routesList.vocabulary,
				name: 'Vocabulary'
			},
			{
				path: routesList.learningWords,
				name: 'Learning Words'
			},
			{
				path: routesList.wordRepetition,
				name: 'Words Repeating'
			}
		]
	})
};
</script>

<style>
.nav-lits {
	background-color: #fff;
}
.nav-lits__link {
	cursor: pointer;
	margin: 10px 0;
	padding: 10px 15px;
}
</style>