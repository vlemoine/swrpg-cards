<script lang="ts">
	import type { NPC } from '$lib/data/types';
	interface Props {
		data: NPC;
		onEdit: () => {};
	}
	let { data, onEdit }: Props = $props();
</script>

<div class="tile {data.type}">
	<h2>{data.name}</h2>
	<div class="edit-icon">
		<button aria-label="edit-button" onclick={onEdit}> <span class="pencil-ico"></span></button>
	</div>
	<div>Tier: {data.tier}</div>
</div>

<style lang="scss">
	.tile {
		border: 1px solid gray;
		border-radius: 5px;
		padding: 20px;
		position: relative;

		.edit-icon {
			position: absolute;
			right: 10px;
			top: 10px;
			button {
				background-color: #333333;
				border: 0px solid black;
				border-radius: 50%;
				cursor: pointer;
				padding: 5px 7px;
			}
		}
		.pencil-ico {
			display: inline-block;
			width: 20px;
			height: 20px;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z'/%3E%3C/svg%3E");
		}
	}
</style>
