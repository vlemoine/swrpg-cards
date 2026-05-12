<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<style>
		body {
			margin: 0;
			overflow-x: hidden;
		}
	</style>
	<script src="https://kit.fontawesome.com/c55866f247.js" crossorigin="anonymous"></script>
</svelte:head>

{@render children()}

<style>
	@page {
		size: letter;
		margin: 0.25in;
	}
	:root {
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
	@font-face {
		font-family: 'EotE Dice';
		src: url('/fonts/sw-rpg-icons.woff');
	}
	@font-face {
		font-family: 'Elektra Medium Pro';
		src: url('/fonts/Elektra-Medium-Pro.woff2');
	}
	@font-face {
		font-family: 'Elektra Medium Pro';
		font-weight: 700;
		src: url('/fonts/Elektra-Medium Pro-Bold.woff2');
	}
	@font-face {
		font-family: 'ITC Symbol Book';
		src: url('/fonts/ITCSymbol-Book.woff2');
	}
	@font-face {
		font-family: 'ITC Symbol Book';
		src: url('/fonts/ITCSymbol-BoldItalic.woff2');
		font-weight: 700;
		font-style: italic;
	}
	@font-face {
		font-family: 'Teuton Fett';
		src: url('/fonts/TeutonFett.woff2');
	}
	@font-face {
		font-family: 'Teuton Fett';
		src: url('/fonts/Teuton-Fett-Bold.woff2');
		font-weight: 700;
	}
	@font-face {
		font-family: 'Teuton Mager';
		src: url('/fonts/Teuton-Mager-Bold.woff2');
	}
</style>
