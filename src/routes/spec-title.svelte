<script lang="ts">
	let { name, isGroup = false } = $props();
</script>

<div class="title">
	{name}
	{#if isGroup}(group only){/if}
</div>

<style lang="scss">
	@use 'sass:math';
	@function size($val) {
		$calc: math.div($val * 2, 16);
		@return calc(#{$calc} * var(--scale, 1rem));
	}
	.title {
		color: var(--color);
		text-transform: uppercase;
		font-size: size(25);
    font-family: 'Teuton Fett', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}
</style>