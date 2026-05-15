<script lang="ts">
	import Header from '$lib/common/Header.svelte';
	import npc from '$lib/data/npc';
	import type { NPC } from '$lib/data/types';
	import { resolve } from '$app/paths';
	import Card from './Card.svelte';
	import LinkBtn from '$lib/common/LinkBtn.svelte';
	const npcs: NPC[] = npc;
</script>

<Header>
	<div class="view">
		<label for="list" title="List view"
			><input type="radio" name="view" id="list" />
			<i class="fa-sharp fa-solid fa-cards-blank checked"></i>
			<i class="fa-sharp fa-regular fa-cards-blank unchecked"></i>
		</label>
		<label for="grid" title="Grid view"
			><input type="radio" name="view" id="grid" checked />
			<i class="fa-sharp fa-solid fa-grid-2 checked"></i>
			<i class="fa-sharp fa-regular fa-grid-2 unchecked"></i>
		</label>
	</div>
	<LinkBtn href={resolve('/editor')} title="Edit cards">
		<i class="fa-sharp fa-solid fa-pen"></i>
	</LinkBtn>
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
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		position: relative;
		input {
			appearance: none;
			margin: 0;
		}
		label {
			background-color: #fff;
			border: 1px solid #fff;
			corner-shape: bevel;
			display: grid;
			padding: 0.5rem;
			&:first-child {
				border-radius: 0.5rem 0 0 0.5rem;
				border-right-width: 0;
			}
			&:last-child {
				border-radius: 0 0.5rem 0.5rem 0;
			}
			&:has(:checked) {
				background-color: var(--gray);
				color: #fff;
			}
			&:has(input:focus) {
				box-shadow: var(--outline);
				z-index: 2;
			}
		}
		label:has(:checked) .unchecked,
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
		gap: 1px;
		margin: 0 auto;
		padding: 1rem;
		width: 100%;
		@media print {
			--cols: 3;
			--size: 2.56px;
			--bw: 1px;
			padding: 0;
			width: 7.5in;
			gap: 0;
		}
	}
</style>
