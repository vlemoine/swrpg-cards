<script lang="ts">
	let { value, name } = $props();
</script>

<div class="characteristic">
	<div class="ridge"></div>
	<div class="ridge"></div>
	<div class="ridge"></div>
	<div class="ridge">
		<div class="name">
			<span>{name}</span>
		</div>
	</div>
	<div class="value">{value}</div>
</div>

<style lang="scss">
	@use 'sass:math';
	@function size($val) {
		$calc: math.div($val * 2, 16);
		@return calc(#{$calc} * var(--scale, 1rem));
	}
	.characteristic {
		display: grid;
		gap: size(2);
		position: relative;
		width: size(119);
	}
	.value {
		aspect-ratio: 1/1;
		background-color: #fff;
		border-radius: 100%;
		border: size(2.5) solid #000;
		box-shadow:
			inset 0 0 0 size(3.5) #fff,
			inset 0 0 0 size(4.5) #000;
		box-sizing: border-box;
		display: grid;
		font-family: 'Teuton Fett';
		font-size: size(56.7);
		left: 0;
		margin: auto;
		padding-top: .2ex;
		place-items: center;
		position: absolute;
		right: 0;
		text-box-trim: trim-both;
		text-indent: -.025ex;
		top: size(6);
		width: size(85);
	}
	.ridge {
		background-color: #546449;
		border-radius: size(7);
		box-sizing: border-box;
		corner-shape: bevel;
		display: flex;
		flex-direction: column;
		height: size(21);
		justify-content: flex-end;
		padding: size(4);
		&:has(.name) {
			height: size(52);
		}
	}
	.name {
		background-color: #751012;
		border-radius: size(5);
		box-sizing: border-box;
		flex: 0 0 size(22);
		max-height: size(22);
		text-align: center;
		position: relative;
		span {
			-webkit-font-smoothing: antialiased;
			bottom: 0;
			color: #fff;
			font: size(21) 'Teuton Mager';
			left: 0;
			line-height: 1;
			margin: auto;
			position: absolute;
			right: 0;
			text-transform: uppercase;
			top: size(2);
			vertical-align: middle;
		}
	}
</style>
