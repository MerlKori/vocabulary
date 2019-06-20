import Vue from 'vue';
import Router from 'vue-router';
import routesList from './routes';
/* views */
import StartView from '@/views/Start.vue';
import VocabularyView from '@/views/Vocabulary.vue';
import LearningWordsGameView from '@/views/learning-game/LearningWordsGame.vue';
import RepeatingWordsGameView from '@/views/repeating/RepeatingWordsGame.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: routesList.start,
			component: StartView
		},
		{
			path: routesList.vocabulary,
			component: VocabularyView
		},
		{
			path: routesList.learningWords,
			component: LearningWordsGameView
		},
		{
			path: routesList.wordRepetition,
			component: RepeatingWordsGameView
		}
	]
});
