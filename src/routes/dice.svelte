<script lang="ts">
	type Die = 'g' | 'p' | 'y' | 'r' | 'b' | 'k' | 'w';
	let { dice } = $props();
	let _dice: Array<Die> = $derived([...dice]);
	const map = {
		g: {color: 'green', char: ''},
		p: {color: 'purple', char: ''},
		y: {color: 'yellow', char: ''},
		r: {color: 'red', char: ''},
		b: {color: 'skyblue', char: ''},
		k: {color: 'black', char: ''},
		w: {color: 'white', char: ''},
	};
	function char(die: Die) {
		return map[die].char;
	}
  function color(die: Die) {
    return map[die].color;
  }
</script>

{#each _dice as die}
	<span class="die" style:--die={color(die)}>
		{char(die)}
	</span>
{/each}

<style>
  .die {
    color: var(--die, pink);
    -webkit-text-stroke: thick black;
    paint-order: stroke;
  }
</style>
