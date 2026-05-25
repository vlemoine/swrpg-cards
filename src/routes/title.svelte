<script lang="ts">
	let { name } = $props();
</script>

<div class="title">
	{name}
</div>

<style lang="scss">
	@use 'sass:math';
	@function size($val) {
		$calc: math.div($val * 2, 16);
		@return calc(#{$calc} * var(--scale, 1rem));
	}
	.title {
		background-color: var(--color);
		border-bottom-right-radius: size(18);
		border-top-right-radius: size(18);
		box-sizing: border-box;
		color: #fff;
		corner-shape: bevel;
		display: grid;
		font: bold size(33.3) / 1 'Elektra Medium Pro';
		height: size(78);
		padding-top: 0.5ex;
		place-items: center;
		text-box-trim: trim-both;
		text-transform: uppercase;
		width: size(629);
	}
</style>
