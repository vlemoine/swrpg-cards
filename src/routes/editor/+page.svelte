<script lang="ts">
	import npc from '$lib/data/npc';

	import { BlankNPC } from '$lib/data/types';
	import type { NPC } from '$lib/data/types';
	import CardForm from './cardForm.svelte';
	import Tile from './tile.svelte';
	import Toast from './toast.svelte';
	const npcs: NPC[] = npc;
	let view = $state('default');
	let toast = $state('');
	let npcObject = $state(BlankNPC);
	let selectedIndex = $state(null);

	const copyToClipboard = () => {
		let targetStr = JSON.stringify(npcs, null, 2);
		navigator.clipboard.writeText('const NPCS: NPC[] = ' + targetStr);
		displayToast('Successfully copied to clipboard!');
	};

	const displayToast = (txt) => {
		toast = txt;
		setTimeout(() => (toast = ''), 5000);
	};

	const editHandler = (index) => {
		selectedIndex = index;
		npcObject = { ...npcs[index] };
		console.log('NPCOBJECT:', npcObject);
		view = 'edit';
	};

	const saveHandler = (obj) => {
		if (selectedIndex) {
			npcs[selectedIndex] = obj;
		} else {
			npcs.push(obj);
		}
		view = 'default';

		displayToast("NPC list updated, don't forget to save!");
	};
</script>

<div>
	<div class="edit-btn-wrap">
		{#if view === 'default'}
			<button
				onclick={() => {
					npcObject = BlankNPC;
					selectedIndex = null;
					view = 'edit';
				}}>Add NPC</button
			>
			<button onclick={copyToClipboard}>Export JSON</button>
		{:else}
			<button onclick={() => (view = 'default')}>Return to NPC List</button>{/if}
	</div>
	{#if view === 'default'}
		<div class="tile-wrap">
			{#each npcs as data, i}
				<Tile {data} onEdit={() => editHandler(i)} />
			{/each}
		</div>
	{:else if view === 'edit'}
		<CardForm editData={npcObject} onSave={saveHandler} />
	{/if}
	{#if toast.length > 0}
		<Toast>{toast}</Toast>
	{/if}
</div>

<style lang="scss">
	.edit-btn-wrap {
		button {
			background-color: #333333;
			border: 0px solid black;
			border-radius: 5px;
			color: #fff;
			font-size: 14px;
			font-weight: bold;
			margin: 10px;
			padding: 10px 15px;
		}
	}
	.tile-wrap {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
	}
</style>
