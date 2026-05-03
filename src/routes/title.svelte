<script lang="ts">
    let { name } = $props();
</script>

<div class="title">
    { name }
</div>

<style lang="scss">
	@use 'sass:math';
	@function size($val) {
		$calc:  math.div($val * 2, 16);
		@return calc(#{$calc} * var(--scale, 1rem));
	}
	.title {
		height: size(78);
		width: size(629);
		display: grid;
		place-items: center;
		color: #fff;
		text-transform: uppercase;
		font-size: size(33.3);
		font-weight: bold;
		line-height: 0;
		background-color: var(--color);
		border-top-right-radius: size(18);
		border-bottom-right-radius: size(18);
		corner-shape: bevel;
		text-box-trim: trim-both;
		font-family: 'Elektra Medium Pro';
	}
</style>
