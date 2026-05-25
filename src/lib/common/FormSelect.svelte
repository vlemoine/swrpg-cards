<script lang="ts">
	import type { optionObj } from '$lib/data/types';

	interface Props {
		options: optionObj[];
		title: string;
		value: unknown;
	}

	let { options = [], title, value = $bindable('') }: Props = $props();
</script>

<div class="select-field">
	<label for={`${title}-select`}>{title}</label>
	<select bind:value id={`${title}-select`}>
		{#each options as opt (opt)}
			<option value={opt.value}>{opt.label}</option>
		{/each}
	</select>
</div>

<style>
	select,
	::picker(select) {
		appearance: base-select;
	}
	label {
		background: var(--gray);
		border-radius: 2rem 2rem 0 0;
		color: #fff;
		corner-shape: bevel;
		font: 1rem/1 'Elektra Medium Pro';
		margin: 0 calc(1rem / 16 * 7.5);
		padding: 0.5rem 1.75rem 0.25rem;
		display: inline-block;
	}
	select {
		border-radius: 0.5rem;
		border: calc(1rem / 32 * 3) solid #000;
		corner-shape: bevel;
		font-size: 1rem;
		padding: 0.5rem 0.75rem;
		width: stretch;
		font: 1rem 'ITC Symbol Book';
		&:focus {
			box-shadow: var(--outline);
			outline: none;
		}
	}
</style>
