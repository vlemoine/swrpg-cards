<script lang="ts">
	let { value, name } = $props();
</script>

<div class="characteristic">
	<div class="ridge"></div>
	<div class="ridge"></div>
	<div class="ridge"></div>
	<div class="ridge">
		<div class="name">{name}</div>
	</div>
	<div class="value">{value}</div>
</div>

<style lang="scss">
	@use 'sass:math';
	@function size($val) {
		$calc:  math.div($val * 2, 16);
		@return calc(#{$calc} * var(--scale, 1rem));
	}
	.characteristic {
		display: grid;
		gap: size(1.9);
		width: size(120);
		position: relative;
	}
	.value {
		aspect-ratio: 1/1;
		background-color: #fff;
		border-radius: 100%;
		border: size(2) solid #000;
		box-shadow:
			inset 0 0 0 size(2) #fff,
			inset 0 0 0 size(3) #000;
		box-sizing: border-box;
		display: grid;
		left: 0;
		margin: auto;
		place-items: center;
		position: absolute;
		right: 0;
		top: size(6);
		width: 70%;
		font-size: size(56.7);
		font-family: 'Teuton Fett';
		text-box-trim: trim-both;
	}
	.ridge {
		height: size(21.2);
		background-color: #546449;
		border-radius: size(8);
		corner-shape: bevel;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		box-sizing: border-box;
		padding: size(4);
		&:has(.name) {
			height: size(52);
		}
	}
	.name {
		display: grid;
		place-items: center;
		border-radius: size(6);
		flex: 0 0 size(22);
		text-align: center;
		background-color: #751012;
		color: #fff;
		text-transform: uppercase;
		font-size: size(20.6);
		line-height: 0;
		font-family: 'Teuton Mager';
	}
</style>
