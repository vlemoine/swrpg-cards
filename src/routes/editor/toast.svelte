<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="toast-wrap">
	<div class="toast" transition:fade>
		<div class="text"><slot /></div>
	</div>
</div>

<style lang="scss">
	.toast-wrap {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 500px;
		display: flex;
		margin: 1rem auto;
		justify-content: center;
		flex-direction: column;
		z-index: 1000;

		.toast {
			align-items: center;
			background: #28b45e;
			border-radius: 0.2rem;
			color: white;
			display: flex;
			margin: 0 auto 0.5rem auto;
			padding: 0.75rem 1.5rem;
			width: 15rem;

			.text {
				margin-left: 1rem;
			}
		}
	}
</style>
