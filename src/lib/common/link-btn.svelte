<script lang="ts">
	let { href, title, children } = $props();
</script>

<a class="btn" {href} {title}>{@render children()}</a>

<style>
	.btn {
		background-color: var(--navy);
		border-radius: 0.5rem;
		border: 1px solid white;
		color: #fff;
		corner-shape: bevel;
		margin-left: 0.5rem;
		padding: 0.5rem;
		&:focus {
			box-shadow: 0 0 0.0625rem 0.125rem gold;
			outline: none;
		}
	}
</style>
