<script lang="ts">
	interface Props {
		short?: boolean;
		title: string;
		type?: string;
		value: unknown;
	}

	let { short, title, type = 'text', value = $bindable('') }: Props = $props();
	let id = $state('');
	const classes = ['text-field'];
	$effect(() => {
		id = `${title}-input`;
		if (type) classes.push(type)
		if (short) classes.push('short')
	});
</script>

<div class={classes.join(' ')}>
	<label for={id}>{title}</label>
	<input bind:value {type} {id} />
</div>

<style>
	.text-field {
		display: flex;
		flex-flow: column nowrap;
		font-size: 1rem;
		margin: 0.5rem 0;

		label {
			display: block;
		}
		input {
			display: block;
			font-size: 1rem;
			padding: 0.5rem 0.75rem;
			width: 50%;
		}
		&.short {
			max-width: 90px;
			display: inline-block;

			input {
				padding: 0.25rem;
			}
		}
	}
</style>
