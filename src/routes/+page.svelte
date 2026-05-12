<script lang="ts">
	import Header from '$lib/common/header.svelte';
	import npc from '$lib/data/npc';
	import type { NPC } from '$lib/data/types';
	import { resolve } from '$app/paths';
	import Card from './card.svelte';
	const npcs: NPC[] = npc;
</script> 

<Header>
	<div class="view">
		<label for="list"
			><input type="radio" name="view" id="list" checked />
			<i class="fa-sharp fa-solid fa-cards-blank checked"></i>
			<i class="fa-sharp fa-regular fa-cards-blank unchecked"></i>
		</label>
		<label for="grid"
			><input type="radio" name="view" id="grid" />
			<i class="fa-sharp fa-solid fa-grid-2 checked"></i>
			<i class="fa-sharp fa-regular fa-grid-2 unchecked"></i>
		</label>
	</div>
	<a href={resolve('/editor')} title="Edit cards"><i class="fa-sharp fa-solid fa-pen"></i></a>
</Header>
<div class="page-preview">
	{#each npcs as data, i (i)}
		<Card {data} />
	{/each}
</div>

<style lang="scss">
	:root {
		--size: calc((1cqw + (0.1cqw/3 * 2)) / var(--cols, 1));
		&:has(#grid:checked) {
			// --size: 0.346vw;
			--cols: 3;
		}
	}
	.view {
		input {
			display: none;
		}
		label:has(:checked) .unchecked {
			display: none;
		}
		label:not(:has(:checked)) .checked {
			display: none;
		}
	}
	.page-preview {
		container-type: inline-size;
		container-name: preview;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: repeat(var(--cols, 1), 1fr);
		margin: 0 auto;
		padding: 1rem;
		width: 100%;
		@media print {
			--cols: 3;
			--size: 2.56px;
			--bw: 1px;
			padding: 0;
			width: 7.5in;
		}
	}
</style>
