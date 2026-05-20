<script lang="ts">
	import type { NPC } from '$lib/data/types';
	interface Props {
		data: NPC;
		onEdit: () => object;
	}
	let { data, onEdit }: Props = $props();
</script>

<div class="tile {data.type}">
	<h2>
		{data.name}
		<button aria-label="edit-button" onclick={onEdit}
			><i class="fa-sharp fa-solid fa-pen"></i></button
		>
	</h2>
	<p>Tier: {data.tier}</p>
</div>

<style>
	h2 {
		margin: 0;
		corner-shape: bevel;
		border-radius: 1em;
		background-color: var(--tile-header-bg, var(--minion));
		color: #fff;
		font: 1.5rem/1.5 'Elektra Medium Pro';
		display: flex;
		padding-left: 1em;
		justify-content: space-between;
		overflow: hidden;
	}
	button {
		background-color: var(--navy);
		border-left: 1px solid #fff;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		padding-right: 1rem;
	}
	.tile {
		background-color: #fff;
		border-radius: 1.5rem;
		border: 1px solid black;
		corner-shape: bevel;
		display: grid;
		padding: 0.5rem 0.75rem;
		text-align: center;
		&.nemesis {
			--tile-header-bg: var(--nemesis);
		}
		&.rival {
			--tile-header-bg: var(--rival);
		}
	}
</style>
