<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	interface Props {
		children: Snippet;
		onclick?: MouseEventHandler<HTMLButtonElement> | null;
		hex?: boolean;
		color?: string;
		type?: 'button' | 'submit' | 'reset' | null;
		title?: string;
		center?: boolean;
	}
	let { children, onclick, hex, color, type = 'button', title, center }: Props = $props();
</script>

<button {type} {onclick} class:hex class:center style:--button-color={color} {title}
	><span>{@render children()}</span></button
>

<style>
	button {
		align-items: center;
		background-color: var(--button-color, var(--navy));
		border-radius: var(--btn-br, 10rem);
		border: none;
		color: #fff;
		corner-shape: bevel;
		display: inline-flex;
		font: 1rem/1 'Elektra Medium Pro';
		padding: 0.67rem 1.25rem;
		padding-left: var(--btn-pl, 1.25rem);
		&.hex {
			border-radius: 0.5rem;
			border: 1px solid white;
		}
		&.center {
			justify-content: center;
		}
		&:hover {
			background-color: color-mix(in oklab, var(--button-color, var(--navy)), white 10%);
		}
		&:active {
			background-color: color-mix(in oklab, var(--button-color, var(--navy)), white 20%);
		}
		&:focus {
			background-color: color-mix(in oklab, var(--button-color, var(--navy)), white 10%);
			box-shadow: var(--outline);
			outline: none;
		}
		span {
			padding-top: 0.1rem;
			display: flex;
		}
	}
</style>
