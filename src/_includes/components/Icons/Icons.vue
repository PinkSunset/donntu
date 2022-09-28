<template>
	<svg
		v-if="iconTrue"
		:class="$attrs.size || 'w-6 h-6'"
	>
		<use :xlink:href="`/ext-icons/${iconTrue === 'file' ? name : 'all-icons'}.svg#${name}`"></use>
	</svg>
	<svg v-else id="default" class="w-6 h-6 stroke-current text-red" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
</template>

<script>
	import { computed } from 'vue'
	import { icons, iconFile } from './icons-names'
	export default {
		name: "iconSvg",
		props: {
			name: { type: String, required: true },
		},
		// setup(props) {
		// 	const iconTrue = computed(() => props.file
		// 		? iconFile.includes(props.name)
		// 		: icons.includes(props.name)
		// 	)
		// 	return {
		// 		iconTrue
		// 	}
		// }
		setup(props) {
			const iconTrue = computed(() => iconFile.includes(props.name)
				? 'file'
				: icons.includes(props.name)
					? 'list'
					: false
			)

			return {
				iconTrue
			}
		}
	}
</script>

<style scoped>

</style>
