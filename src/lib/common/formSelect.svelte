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

<style lang="scss">
</style>
