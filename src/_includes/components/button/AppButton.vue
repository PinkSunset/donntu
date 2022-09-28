<template>
	<component :is="$attrs.href ? 'a' : 'button'"
		:class="[
			'mx-auto flex items-center justify-center relative font-semibold rounded-full active:opacity-80 transition-all duration-300 outline-none focus:outline-none disabled:cursor-default ring-2 ring-transparent',
			'before:absolute before:-inset-0.5 before:pointer-events-none before:ring-2 before:rounded-full before:ring-transparent before:transition-shadow',
			dark ? 'focus-visible:before:ring-white' : 'focus-visible:before:ring-gray-river',
			dark ? 'disabled:text-white/20' : 'disabled:text-black/20',
			{ 'text-black bg-yellow' : yellow && !active },
			{ 'text-gray-river' : gray && !active },
			{ 'text-gray-santas' : transparent && !active },
			dark ? { 'bg-white text-gray-river' : active } : { 'bg-gray-river text-white' : active },
			dark ? {'disabled:bg-d-gray-sec' : !transparent } : {'disabled:bg-gray-sec' : !transparent},
			{'disabled:bg-transparent' : transparent },
			dark ? { 'bg-d-gray-high' : gray && !active } : { 'bg-gray-high' : gray && !active },
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
			<span v-if="loader" class="absolute inset-0 flex items-center justify-center rounded-full bg-inherit">
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

<script setup>
	import { computed } from 'vue'
	import Icon from '../Icons/Icons.vue'
	const props = defineProps({
		id: { type: String, default: ()=> '' },
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
	})
	const normal = computed(() => !(props.small || props.big) )
	const transparent = computed(() => !(props.yellow || props.gray) )
</script>

<style scoped>

</style>
