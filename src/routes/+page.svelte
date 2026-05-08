<script lang="ts">
	import Card from './card.svelte';
	import npc from '$lib/data/npc';
	import type { NPC } from '$lib/data/types';
	const npcs: NPC[] = npc;
</script>

<header>
	<h1>SWRPG NPC Cards</h1>
	<div class="view">
		<label for="list"
			><input type="radio" name="view" id="list" checked />
			List
		</label>
		<label for="grid"
			><input type="radio" name="view" id="grid" />
			Grid
		</label>
	</div>
</header>
<div class="page-preview">
	{#each npcs as data, i (i)}
		<Card {data} />
	{/each}
</div>

<style lang="scss">
	:root {
		--size: calc((1cqw + (.1cqw/3*2)) / var(--cols, 1));
		&:has(#grid:checked) {
			// --size: 0.346vw;
			--cols: 3;
		}
	}
	header {
		align-items: center;
		background-color: #8e5a07;
		box-shadow: 0 0.25rem 0.5rem #0003;
		display: flex;
		padding: 1rem;
		position: sticky;
		top: 0;
		z-index: 999;
		@media print {
			display: none;
		}
	}
	h1 {
		color: #fff;
		font: bold 2rem / 1 'Elektra Medium Pro';
		margin: 0;
		margin-right: auto;
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
