<script lang="ts">
	import type { NPC } from '$lib/data/types';
	interface Props {
		jsonStr: string;
	}
	let { jsonStr }: Props = $props();
</script>

<div class="export-tray">
	<pre>{jsonStr}</pre>
</div>

<style lang="scss">
	.export-tray {
		background: gray;
		border: 1px solid #111;
		border-radius: 5px;
		color: #333;
		padding: 20px;
	}
</style>
