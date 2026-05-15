<script lang="ts">
	let {
		children,
		actions = () => null,
		name,
		id = name.toLowerCase().replaceAll(' ', '-'),
		columns = '1fr'
	} = $props();
</script>

<section {id}>
	<header>
		<h2>{name}</h2>
		{@render actions?.()}
	</header>
	<div class="content" style:--columns={columns}>
		{@render children()}
	</div>
</section>

<style>
	section {
		--scale: 5px;
		background-color: #fff;
		border-radius: 2rem;
		border: 0.33rem double #000;
		corner-shape: bevel;
		padding: 0.25rem 1rem;
		scroll-margin-top: 5rem;
	}
	header {
		background-color: var(--brown);
		border-radius: 2rem;
		box-sizing: border-box;
		color: #fff;
		corner-shape: bevel;
		display: flex;
		margin: 0 -0.67rem;
	}
	h2 {
		margin: 0;
		flex: 1 0 auto;
		font: 1.5rem/1.5 'Elektra Medium Pro';
		padding: 0.5rem 2rem;
		padding-right: 0.67rem;
	}
	.content {
		padding: 0.5rem 1rem;
		display: grid;
		grid-template-columns: var(--columns, 1fr);
		&:empty {
			display: none;
		}
	}
</style>
