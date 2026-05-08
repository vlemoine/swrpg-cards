<script lang="ts">
	interface Props {
		title: string;
		type?: string;
		value: any;
	}
	let { title, type = 'text', value = $bindable('') }: Props = $props();
</script>

<div class={'text-field' + `{type ? ' ' + type : ''}`}>
	<label for={`${title}-input`}>{title}</label>
	<input bind:value {type} id={`${title}-input`} />
</div>

<style lang="scss">
</style>
