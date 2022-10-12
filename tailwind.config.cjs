/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			inherit: 'inherit',
			'onahau': '#C7EEFF',
			'peach-orange': '#FFCE94',
			'salomie': '#FFE38E',
			'fog-1': '#DDDDFF',
			'madang': '#B8EFCF',
			'onahau' : '#C7EEFF',
			'cream-brulee' : '#FFE9A8',
			'tutu' : '#FFEEF6',
			'fog-2' :'#DDDDFF',
			'stratos' : '#00093C',
		  },
		  gridTemplateRows: {
			'aa1': 'repeat(2, auto) 1fr',
			'a1': 'auto 1fr',
			'1a': '1fr auto',
			'1a1': '1fr auto 1fr',
			'a1a': 'auto 1fr auto',
			'1aa': '1fr repeat(2, auto)',
			'full': '100%',
		  },
		  gridTemplateColumns: {
			'aa1': 'repeat(2, auto) 1fr',
			'a1': 'auto 1fr',
			'1a': '1fr auto',
			'1a1': '1fr auto 1fr',
			'a1a': 'auto 1fr auto',
			'1aa': '1fr repeat(2, auto)',
			'full': '100%',
		  },
		},
	},
	plugins: [],
}
