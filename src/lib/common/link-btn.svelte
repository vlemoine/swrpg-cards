<script lang="ts">
	let { href, title, children } = $props();
</script>

<a class="btn" {href} {title}>{@render children()}</a>

<style>
	.btn {
		corner-shape: bevel;
		border: 1px solid white;
		padding: 0.5rem;
		border-radius: 0.5rem;
		margin-left: 0.5rem;
		color: #fff;
		background-color: var(--navy);
	}
</style>
