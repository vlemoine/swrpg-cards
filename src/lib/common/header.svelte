<script lang="ts">
	let { children } = $props();
</script>

<header>
	<h1>SWRPG NPC Cards</h1>
	{@render children()}
</header>

<style lang="scss">
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
</style> 
