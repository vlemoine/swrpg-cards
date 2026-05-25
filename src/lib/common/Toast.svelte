<script lang="ts">
	import { fade } from 'svelte/transition';
	let { children } = $props();
</script>

<div class="toast-container">
	<div class="toast" transition:fade>
		<div class="message">{@render children()}</div>
	</div>
</div>

<style>
	.toast {
		--color: oklch(50% 0.15 148);
		background-color: var(--color);
		border-radius: 0.5rem;
		box-shadow:
			0 0.5rem 1rem #0003,
			0 1rem 2rem #0003;
		color: #fff;
		margin: 0 auto 0.5rem auto;
		padding: 0.75rem 1.5rem;
	}
	.toast-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		left: 0;
		margin: 1rem auto;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 1000;
	}
</style>
