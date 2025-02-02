/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'hover-hover': { raw: '(hover: hover)' },
			},
			colors: {
				space: {
					50: '#e7e7e8',
					100: '#dbdbdc',
					200: '#b4b5b7',
					300: '#0d1117',
					400: '#0c0f15',
					500: '#0a0e12',
					600: '#0a0d11',
					700: '#080a0e',
					800: '#06080a',
					900: '#050608',
				},
				'space-bright': {
					50: '#e8e8e9',
					100: '#dcddde',
					200: '#b7b8ba',
					300: '#161b22',
					400: '#14181f',
					500: '#12161b',
					600: '#11141a',
					700: '#061014',
					800: '#0a0c0f',
					900: '#08090c',
				},
				'space-border': {
					50: '#eaebec',
					100: '#e0e1e2',
					200: '#bfc1c3',
					300: '#30363d',
					400: '#2b3137',
					500: '#262b31',
					600: '#24292e',
					700: '#1d2025',
					800: '#16181b',
					900: '#111315',
				},
				'space-blue': {
					50: '#eaeaeb',
					100: '#dfdfe1',
					200: '#bcbec0',
					300: '#282c34',
					400: '#24282f',
					500: '#20232a',
					600: '#1e2127',
					700: '#181a1f',
					800: '#121317',
					900: '0e0f12',
				},
				violet: {
					50: '#f2f1ff',
					100: '#ebeaff',
					200: '#d6d3ff',
					300: '#7c72ff',
					400: '#7067e6',
					500: '#635bcc',
					600: '#5d56bf',
					700: '#4a4499',
					800: '#383373',
					900: '#2b28589',
				},
				'violet-midnight': {
					50: '#f1ecfa',
					100: '#e9e2f7',
					200: '#d2c4ee',
					300: '#6e40c9',
					400: '#633ab5',
					500: '#5833a1',
					600: '#533097',
					700: '#422679',
					800: '#311d5a',
					900: '#271646',
				},
				'violet-bright': {
					50: '#fbfbff',
					100: '#f9f9ff',
					200: '#f32ff',
					300: '#d7d4ff',
					400: '#c2bfe6',
					500: '#acaacc',
					600: '#a19fbf',
					700: '#817f99',
					800: '#615f73',
					900: '#4b4a59',
				},
			},
			fontFamily: {
				'"dm-sans"': ['DM Sans', ...defaultTheme.fontFamily.sans],
				'nunito-sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						// Custom styles for inline `code`
						'code::before': { content: 'none' }, // Remove opening backtick
						'code::after': { content: 'none' }, // Remove closing backtick
						code: {
							backgroundColor: theme('colors.slate.200'),
							borderRadius: theme('borderRadius.DEFAULT'),
							paddingLeft: theme('spacing[1.5]'),
							paddingRight: theme('spacing[1.5]'),
							paddingTop: theme('spacing.1'),
							paddingBottom: theme('spacing.1'),
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
