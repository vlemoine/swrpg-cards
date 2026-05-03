<script lang="ts">
	let { value, name } = $props();
	function format(value: number | number[]) {
		return value.toString().replace(',', ' | ');
	}
</script>

<div class="stat">
	<div class="name">{name}</div>
	<div class="value">{format(value)}</div>
</div>

<style lang="scss">
	@use 'sass:math';
	@function size($val) {
		$calc: math.div($val * 2, 16);
		@return calc(#{$calc} * var(--scale, 1rem));
	}
	.stat {
		background: #fff;
		border-radius: size(18);
		border: size(2) solid #000;
		box-shadow:
			inset 0 0 0 size(1.5) #fff,
			inset 0 0 0 size(2.5) #000;
		box-sizing: border-box;
		corner-shape: bevel;
		display: flex;
		flex-direction: column;
		height: size(96);
		padding: size(6);
		position: relative;
		width: size(192);
	}
	.value {
		box-sizing: border-box;
		display: grid;
		flex: 1 0 auto;
		font-size: size(48);
		place-items: center;
		font-family: 'Teuton Fett';
	}
	.name {
		background-color: #0d2548;
		border-radius: size(32);
		color: #fff;
		corner-shape: bevel;
		display: grid;
		flex: 0 0 size(26);
		font-size: size(20.6);
		font-family: 'Teuton Mager';
		place-items: center;
		text-align: center;
		text-transform: uppercase;
	}
</style>
