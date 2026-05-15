<script lang="ts">
	import type { optionObj } from '$lib/data/types';

	interface Props {
		options: optionObj[];
		label: string;
		value: unknown;
		id?: string;
		hideLabel?: boolean;
		placeholder?: string;
	}

	let {
		options = [],
		label,
		value = $bindable(''),
		id = label.toLowerCase().replaceAll(' ', '-'),
		hideLabel = false,
		placeholder
	}: Props = $props();
</script>

<div class="datalist-field">
	{#if !hideLabel}
		<label for={id}>{label}</label>
	{/if}
	<input list={`${id}-list`} {id} name={id} {placeholder} bind:value />
	<datalist id={`${id}-list`}>
		{#each options as opt (opt)}
			<option value={opt.value}>{opt.label}</option>
		{/each}
	</datalist>
</div>

<style>
	.datalist-field {
		align-self: center;
	}
	input {
		border-radius: 10rem;
		border: 0;
		corner-shape: bevel;
		field-sizing: content;
		padding: 0.25rem 1rem;
		font-size: 1rem;
		font-family: 'ITC Symbol Book';
		&:focus {
			min-width: 10ch;
			box-shadow: var(--outline);
			outline: none;
		}
	}
</style>
