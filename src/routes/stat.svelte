<script lang="ts">
	let { value, name } = $props();
	function format(value: number | number[]) {
		return value.toString().replace(',', ' | ');
	}
</script>

<div class="stat">
	<div class="name">
		<span>{name}</span>
	</div>
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
		border-radius: size(19);
		border: size(2) solid #000;
		box-shadow:
			inset 0 0 0 size(1.5) #fff,
			inset 0 0 0 size(2.5) #000;
		box-sizing: border-box;
		corner-shape: bevel;
		display: flex;
		flex-direction: column;
		height: size(97);
		padding: size(7) size(5);
		position: relative;
		width: size(193);
	}
	.value {
		box-sizing: border-box;
		display: grid;
		flex: 1 0 auto;
		font-size: size(48);
		padding-top: size(4);
		place-items: center;
		font-family: 'Teuton Fett';
	}
	.name {
		background-color: var(--navy);
		border-radius: size(32);
		box-sizing: border-box;
		corner-shape: bevel;
		display: grid;
		flex: 0 0 size(26);
		max-height: size(26);
		padding-top: size(2);
		place-items: center;
		text-align: center;
		span {
			color: #fff;
			font-family: 'Teuton Mager';
			font-size: size(20.6);
			text-transform: uppercase;
		}
	}
</style>
