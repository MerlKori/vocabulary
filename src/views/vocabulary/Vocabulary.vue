<template>
	<div class="vocabulary-view">
		<input
			v-model="search"
			placeholder="search"
			type="text"
			class="vocabulary__search">

		<WordsList
			:items="getWords"
			:handler="showWordCard"
			:renderScheme="getDataRenderOrder" />
	</div>
</template>

<script>
import WordsList from '@/components/WordsList.vue';

export default {
	name: 'Vocabulary_View',
	components: {
		WordsList
	},
	data: () => ({
		search: null,
		isEn: true
	}),
	methods: {
		showWordCard (word) {
			console.log(word);
		}
	},
	computed: {
		getWords () {
			return [];
		},
		getDataRenderOrder () {
			return {
				main: this.isEn ? 'en' : 'ru',
				desc: this.isEn ? 'ru' : 'en'
			};
		}
	}
};
</script>
