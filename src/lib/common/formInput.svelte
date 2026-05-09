<script lang="ts">
	interface Props {
		short?: boolean;
		title: string;
		type?: string;
		value: any;
	}
	let { short, title, type = 'text', value = $bindable('') }: Props = $props();
</script>

<div class={'text-field' + (type ? ' ' + type : '') + (short ? ' short' : '')}>
	<label for={`${title}-input`}>{title}</label>
	<input bind:value {type} id={`${title}-input`} />
</div>

<style lang="scss">
	.text-field {
		display: flex;
		flex-flow: column nowrap;
		font-size: 16px;
		margin: 5px 0px;

		label {
			display: block;
		}
		input {
			display: block;
			font-size: 14px;
			padding: 5px 10px;
			width: 50%;
		}
		&.short {
			max-width: 90px;
			display: inline-block;

			input {
				padding: 5px 5px;
			}
		}
	}
</style>
