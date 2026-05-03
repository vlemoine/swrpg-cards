<script lang="ts">
	import Card from './card.svelte';
  import npc from '$lib/data/npc';
	import type { NPC } from '$lib/data/types';
	const npcs: NPC[] = npc;
</script>

{#each npcs as data}
	<Card {data} />
{/each}
