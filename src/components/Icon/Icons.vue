<template>
	<svg
		v-if="iconTrue"
		:class="$attrs.size || 'w-6 h-6'"
	>
		<use :xlink:href="`/icons/${iconTrue === 'file' ? name : 'all-icons'}.svg#${name}`"></use>
	</svg>
	<svg v-else id="default" class="w-6 h-6 stroke-current text-red" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
</template>

<script setup>
	import { computed } from 'vue'
	import { icons, iconFile } from './icons-names'

	const props = defineProps({
		name: { type: String, required: true },
	})
	const iconTrue = computed(() => iconFile.includes(props.name)
		? 'file'
		: icons.includes(props.name)
			? 'list'
			: false
	)
</script>

<style scoped>

</style>
