const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
content: ['./src/**/*.{htm,md,njk}'],
theme: {
    screens: {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
    },
    extend: {
	boxShadow: {
		'rounded': '0px 0px 15px 0px rgba(0, 0, 0, 0.3)'
	},
	fontFamily: {
		body: ['GolosText', ...defaultTheme.fontFamily.sans],
	},
	letterSpacing: {
	},
	borderRadius: {
		'2lg': '10px',
	},
	backgroundSize: {
	},
	maxWidth: {
        '1/2': '50%',
    },
	colors: {
        inherit: 'inherit',
		'blaze-orange' : '#FF6B00',
		'selective-yellow' : '#FFBA0A',
		'karry' : '#FFE9D9',
		'emperor' : '#555555',
		'gallery' : '#EAEAEA',
		'athens-gray' : '#F3F4F7',
		'true-v' : '#7656D2',
		'link-water' : '#EBE6F8',
		'pastel-green' : '#65E462',
		'emerald' : '#51D74E',
		'atomic-tangerine' : '#FFA15E',
		'silver' : '#C4C4C4',
		'mine-shaft' : '#3F3F3F',
		'mine-shaft-1' : '#333333',
		'purple-heart' : '#4D27BB',
		'silver': '#BFBFBF',
		'gray-chateau' : '#9CA3AF',
		'persian-blue' : '#1E40AF',
		'thunderbird' : '#B91C1C'
	},
	gridTemplateAreas: {
        'layout': [
		'header',
		'main',
		'footer',
        ],
	},
	gridTemplateRows: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
		'a11': 'auto 1fr 1fr',
		'11a': '1fr 1fr auto',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
		'a1aa': 'auto 1fr repeat(2, auto)',
        'full': '100%',
	},
	gridTemplateColumns: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
		'a11': 'auto 1fr 1fr',
		'11a': '1fr 1fr auto',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
		'a1aa': 'auto 1fr repeat(2, auto)',
        'full': '100%',
    },
	},
},
plugins: [
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas')
],
}
