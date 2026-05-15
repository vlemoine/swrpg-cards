<script lang="ts">
	let { href, title, children } = $props();
</script>

<a class="link-btn" {href} {title}>{@render children()}</a>

<style>
	.link-btn {
		background-color: var(--navy);
		border-radius: 0.5rem;
		border: 1px solid white;
		color: #fff;
		corner-shape: bevel;
		margin-left: 0.5rem;
		padding: 0.5rem;
		&:hover {
			background-color: color-mix(in oklab, var(--button-color, var(--navy)), white 10%);
		}
		&:active {
			background-color: color-mix(in oklab, var(--button-color, var(--navy)), white 20%);
		}
		&:focus {
			background-color: color-mix(in oklab, var(--button-color, var(--navy)), white 10%);
			box-shadow: 0 0 0.0625rem 0.125rem gold;
			outline: none;
		}
	}
</style>
