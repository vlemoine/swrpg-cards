<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	interface Props {
		children: Snippet;
		onclick?: MouseEventHandler<HTMLButtonElement> | null;
		hex?: boolean;
		color?: string;
		type?: 'button' | 'submit' | 'reset' | null;
	}
	let { children, onclick, hex, color, type = 'button' }: Props = $props();
</script>

<button {type} {onclick} class:hex style:--button-color={color}
	><span>{@render children()}</span></button
>

<style>
	button {
		align-items: center;
		background-color: var(--button-color, var(--navy));
		border-radius: 10rem;
		border: none;
		color: #fff;
		corner-shape: bevel;
		display: inline-flex;
		font: 1rem/1 'Elektra Medium Pro';
		padding: 0.67rem 1.25rem;
		&.hex {
			border-radius: 0.5rem;
			border: 1px solid white;
		}
		&:hover {
			background-color: color-mix(in oklab, var(--button-color, var(--navy)), white 10%);
		}
		&:active {
			background-color: color-mix(in oklab, var(--button-color, var(--navy)), white 20%);
		}
		span {
			padding-top: 0.1rem;
			display: flex;
		}
	}
</style>
