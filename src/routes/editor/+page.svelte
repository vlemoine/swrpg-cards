<script lang="ts">
	import { resolve } from '$app/paths';
	import npc from '$lib/data/npc';
	import { NPC } from '$lib/data/types';
	import CardForm from './card-form.svelte';
	import Tile from './tile.svelte';
	import Toast from '../../lib/common/toast.svelte';
	import Button from '$lib/common/button.svelte';
	import Header from '$lib/common/header.svelte';
	import LinkBtn from '$lib/common/link-btn.svelte';

	const npcs: NPC[] = npc;
	let view = $state('default');
	let toast = $state('');
	let npcObject = $state({ ...new NPC() });
	let selectedIndex: number | null = $state(null);

	const copyToClipboard = () => {
		let targetStr = JSON.stringify(npcs, null, 2);
		navigator.clipboard.writeText('const NPCS: NPC[] = ' + targetStr);
		displayToast('Successfully copied to clipboard!');
	};

	const displayToast = (message: string) => {
		toast = message;
		setTimeout(() => (toast = ''), 5000);
	};

	const editHandler = (index?: number) => {
		selectedIndex = index ?? null;
		if (selectedIndex !== null) {
			npcObject = { ...npcs[index!] };
		} else {
			npcObject = { ...new NPC() };
		}
		console.log('NPCOBJECT:', npcObject);
		view = 'edit';
	};

	const saveHandler = (obj: NPC) => {
		if (selectedIndex !== null) {
			npcs[selectedIndex] = obj;
		} else {
			npcs.push(obj);
		}
		view = 'default';

		displayToast("NPC list updated, don't forget to save!");
	};
</script>

<Header>
	{#if view === 'edit'}
		<Button onclick={() => (view = 'default')} hex>Return to NPC List</Button>
	{/if}
	<LinkBtn href={resolve('/')} title="View cards">
		<i class="fa-sharp fa-solid fa-cards-blank"></i>
	</LinkBtn>
</Header>
<main>
	<div class="edit-btn-wrap">
		{#if view === 'default'}
			<Button onclick={() => editHandler()}>Add NPC</Button>
			<Button onclick={copyToClipboard}>Export JSON</Button>
		{/if}
	</div>
	{#if view === 'default'}
		<div class="tile-wrap">
			{#each npcs as data, i (i)}
				<Tile {data} onEdit={async () => editHandler(i)} />
			{/each}
		</div>
	{:else if view === 'edit'}
		<CardForm editData={npcObject} onSave={saveHandler} />
	{/if}
	{#if toast.length > 0}
		<Toast>{toast}</Toast>
	{/if}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}
	.edit-btn-wrap {
		display: flex;
		gap: 0.5rem;
		&:empty {
			display: none;
		}
	}
	.tile-wrap {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
