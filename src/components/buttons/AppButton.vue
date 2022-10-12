<template>
	<component :is="$attrs.href ? 'a' : 'button'"
		:class="[
			{ 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-70': type_1},
			{ 'h-7 min-w-7 text-b-xs p-1.5' : small },
			{ 'h-10 min-w-10 text-b-sm p-2' : normal },
			{ 'h-13 min-w-13 text-b-base p-3' : big },
			loader ? 'pointer-events-none' : ''
		]"
		:tabindex="loader ? '-1' : false"
		:disabled=disabled
	>
		<span
			:class="[
				'flex items-center',
				{ 'opacity-0' : loader }
			]"
		>
			<span
				:class="[
					'peer empty:hidden',
					right ? 'order-1' : 'order-3',
					{ 'mx-2' : !small },
					{ 'mx-1.5' : small }
				]"
			>
				<slot/>
			</span>
			<Icon
				v-if="icon"
				:class="[
					$attrs.iconClass,
					'order-2 peer-empty:mx-0 !static',
					right ? { 'mr-1.5' : small } : { 'ml-1.5' : small },
					right ? { 'mr-2' : !small } : { 'ml-2' : !small },
				]"
				:name="icon"
				:size="[
					{ 'h-4 w-4' : small },
					{ 'h-6 w-6' : normal },
					{ 'h-7 w-7' : big },
				]"
			/>
		</span>
		<transition
			enter-active-class="animate-opacity-enter-active"
			leave-active-class="animate-opacity-leave-active"
		>
			<span v-if="loader && !fullArea" class="absolute inset-0 flex items-center justify-center rounded-full bg-inherit">
				<span class="animate-spin">
					<Icon
						name="loader"
						:size="[
							{ 'h-4 w-4' : small },
							{ 'h-5 w-5' : normal },
							{ 'h-6 w-6' : big },
						]"
					/>
				</span>
			</span>
		</transition>
	</component>
</template>

<script>
	import { computed } from 'vue'
	import Icon from '../Icon/Icons.vue'
	export default {
		name: 'AppButton',
		components: {
			Icon
		},
		props: {
			id: { type: String, default: ()=> '' },
			type_1:{ type: Boolean, default: ()=> ''},
			type: { type: String, default: ()=> '' },
			icon: { type: String, default: () => '' },
			dark: { type: Boolean, default: () => false },
			active: { type: Boolean, default: () => false },
			disabled: { type: Boolean, default: () => false },
			small: { type: Boolean, default: () => false},
			big: { type: Boolean, default: () => false},
			loader: { type: Boolean, default: () => false},
			yellow: { type: Boolean, default: () => false},
			gray: { type: Boolean, default: () => false},
			right: { type: Boolean, default: () => false},
			fullArea: { type: Boolean, default: () => false},
		},
		setup(props) {
			const normal = computed(() => !(props.small || props.big) )
			const transparent = computed(() => !(props.yellow || props.gray) )
			return {
				normal,
				transparent
			}
		}
	}
</script>

<style scoped>

</style>
