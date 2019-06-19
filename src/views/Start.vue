<template>
	<div class="start-view">
		<el-button type="danger" icon="el-icon-delete" circle></el-button>
	</div>
</template>

<script>
import {Button} from 'element-ui';

export default {
	name: 'Start',
	components: {
		'el-button': Button
	}
};
</script>
