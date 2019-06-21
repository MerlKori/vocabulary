<template>
	<div class="vocabulary-view">
		<div class="vocabulary-view__search">
			<span class="vocabulary-view__search-lang">{{lang}}</span>
			<el-input
				placeholder="Search"
				v-model="search"
				clearable>
			</el-input>
		</div>

		<WordsList
			:items="getWords"
			:handler="showWordCard"
			:renderScheme="getDataRenderOrder" />
	</div>
</template>

<script>
import WordsList from '@/components/WordsList.vue';
import {Input} from 'element-ui';
import testData from '@/test';

const isLatinLang = str => {
	const reg = /[А-Яа-яёЁ]/;
	return !reg.test(str);
};
const langs = {
	ru: 'ru',
	en: 'en'
};

export default {
	name: 'Vocabulary_View',
	components: {
		WordsList,
		ElInput: Input
	},
	data: () => ({
		lang: langs.en,
		search: null
	}),
	methods: {
		showWordCard (word) {
			this.$router.push({
				name: 'test',
				params: {
					wordData: word,
					renderScheme: this.getDataRenderOrder
				}
			});
		},
		setSearchLang (str) {
			this.lang = isLatinLang(str) ? langs.en : langs.ru;
		}
	},
	computed: {
		getWords () {
			if (!this.search) return testData;
			return testData.filter(i => i[this.getDataRenderOrder.main].includes(this.search));
		},
		getDataRenderOrder () {
			return {
				main: this.lang,
				desc: this.lang === langs.en ? langs.ru : langs.en
			};
		}
	},
	watch: {
		search () {
			this.setSearchLang(this.search);
		}
	}
};
</script>

<style>
.vocabulary-view__search {
	display: flex;
	align-items: center;
}
.vocabulary-view__search-lang {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	margin: 0 5px;
	text-transform: uppercase;
	border: 1px solid #333;
	background-color: rgba(36,36,36, .4);
}
</style>
