<script lang="ts">
	type Die = 'g' | 'p' | 'y' | 'r' | 'b' | 'k' | 'w' | 'a';
	let { dice, inline } = $props();
	let _dice: Array<Die> = $derived([...dice]);
	const map = {
		a: { color: 'black', char: '' },
		b: { color: 'skyblue', char: '\uE93D' },
		d: { color: 'black', char: '\uE908' },
		f: { color: 'black', char: '\uE90A' },
		g: { color: '#3da547', char: '\uE93F' },
		k: { color: 'black', char: '\uE93D' },
		l: { color: 'black', char: '\uE909' },
		p: { color: 'purple', char: '\uE93F' },
		r: { color: 'red', char: '\uE941' },
		w: { color: 'white', char: '\uE941' },
		y: { color: 'yellow', char: '\uE941' }
	};
	function char(die: Die) {
		return map[die].char;
	}
	function color(die: Die) {
		return map[die].color;
	}
</script>

<span class="dice {inline ? 'inline' : ''}">
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
		margin-right: size(0);
		&::before {
			content: '(';
			margin-left: size(-2);
			margin-right: size(-3);
		}
		&::after {
			content: ')';
			margin-left: size(2);
		}
		&.inline {
			&::before,
			&::after {
				content: '';
			}
		}
	}
	.die {
		color: var(--die, pink);
		display: inline-block;
		font-family: 'EotE Dice';
		font-size: size(28);
		paint-order: stroke;
		vertical-align: middle;
		&.g,
		&.p {
			-webkit-text-stroke: size(2) black;
			margin-right: -0.25ch;
			&:has(+ .y) {
				margin-right: -0.4ch;
			}
		}
		&.r,
		&.y {
			-webkit-text-stroke: size(2) black;
			margin-right: -0.1ch;
			&:first-child {
				margin-left: 0.2ch;
			}
			&:last-child {
				margin-right: -0.25ch;
			}
		}
		&.b {
			-webkit-text-stroke: size(2) black;
		}
	}
</style>
