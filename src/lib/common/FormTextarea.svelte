<script lang="ts">
	interface Props {
		short?: boolean;
		title: string;
		value: unknown;
	}

	let { short, title,  value = $bindable('') }: Props = $props();
	const id = $derived(`${title}-input`);
	const classes = ['text-field'];
	$effect(() => {
		if (short) classes.push('short');
	});
</script>

<div class={classes.join(' ')}>
	<label for={id}>{title}</label>
	<textarea bind:value {id}></textarea>
</div>

<style>
	.text-field {
		font-size: 1rem;
		label {
			background: var(--gray);
			border-radius: 2rem 2rem 0 0;
			color: #fff;
			corner-shape: bevel;
			font: 1rem/1 'Elektra Medium Pro';
			margin: 0 calc(1rem / 16 * 7.5);
			padding: 0.5rem 1.75rem 0.25rem;
			display: inline-block;
		}
		textarea {
			border-radius: 0.5rem;
			border: calc(1rem / 32 * 3) solid #000;
			corner-shape: bevel;
			font-size: 1rem;
			padding: 0.5rem 0.75rem;
			width: stretch;
			font: 1rem 'ITC Symbol Book';
			field-sizing: content;
			&:focus {
				box-shadow: var(--outline);
				outline: none;
			}
		}
	}
</style>
