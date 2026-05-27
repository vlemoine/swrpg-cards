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
		font: bold size(25) / 1 'Teuton Fett';
		padding-bottom: size(3);
		text-transform: uppercase;
	}
</style>
