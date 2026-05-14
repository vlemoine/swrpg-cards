<script lang="ts">
	let { children, actions = () => null, name, id = name.toLowerCase().replaceAll(' ', '-') } = $props();
</script>

<section {id}>
	<header>
		<h2>{name}</h2>
		{@render actions?.()}
	</header>
	{@render children()}
</section>

<style>
	section {
		background-color: #fff;
		border-radius: 2rem;
		border: 0.33rem double #000;
		corner-shape: bevel;
		padding: .25rem 1rem;
		scroll-margin-top: 5rem;
		header {
			box-sizing: border-box;
			margin: 0 -0.67rem;
			display: flex;
			padding: 0.5rem 2rem;
      padding-right: .67rem;
			background-color: var(--brown);
			corner-shape: bevel;
			border-radius: 2rem;
			color: #fff;
		}
		h2 {
			margin: 0;
      flex: 1 0 auto;
			font: 1.5rem/1.5 'Elektra Medium Pro';
		}
	}
</style>
