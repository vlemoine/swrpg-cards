<script lang="ts">
	type Die = 'g' | 'p' | 'y' | 'r' | 'b' | 'k' | 'w';
	let { dice } = $props();
	let _dice: Array<Die> = $derived([...dice]);
	const map = {
		g: { color: '#3da547', char: '\uE93F' },
		p: { color: 'purple', char: '\uE93F' },
		y: { color: 'yellow', char: '\uE941' },
		r: { color: 'red', char: '\uE941' },
		b: { color: 'skyblue', char: '\uE93D' },
		k: { color: 'black', char: '\uE93D' },
		w: { color: 'white', char: '\uE941' }
	};
	function char(die: Die) {
		return map[die].char;
	}
	function color(die: Die) {
		return map[die].color;
	}
</script>

<span class="dice">
	{#each _dice as die, i (i)}
		<span class="die {die}" style:--die={color(die)}>
			{char(die)}
		</span>
	{/each}
</span>

<style lang="scss">
	@use 'sass:math';
	@function size($val) {
		$calc: math.div($val * 2, 16);
		@return calc(#{$calc} * var(--scale, 1rem));
	}
	.dice {
		display: inline-block;
		margin-right: size(-2);
		&::before {
			content: '(';
			margin-left: size(-2);
			margin-right: size(-3);
		}
		&::after {
			content: ')';
			margin-left: size(2);
		}
	}
	.die {
		-webkit-text-stroke: size(2) black;
		color: var(--die, pink);
		display: inline-block;
		font-family: 'EotE Dice';
		font-size: size(28);
		paint-order: stroke;
		vertical-align: middle;
		&.g, &.p {
			margin-right: -.5ch;
			&:has(+ .y) {
				margin-right: -.4ch;
			}
		}
		&.r, &.y {
			margin-right: -.1ch;
			&:first-child {
				margin-left: .2ch;
			}
			&:last-child {
				margin-right: -.25ch;
			}
		}
	}
</style>
