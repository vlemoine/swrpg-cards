<script lang="ts">
	import type { NPC } from '$lib/data/types';
	import Characteristic from './Characteristic.svelte';
	import Dice from './Dice.svelte';
	import SpecTitle from './SpecTitle.svelte';
	import Stat from './Stat.svelte';
	import Title from './Title.svelte';
	interface Props {
		data: NPC;
	}
	let { data }: Props = $props();
	let charLabels = ['brawn', 'agility', 'intellect', 'cunning', 'willpower', 'presence'];
	let statLabels = ['wounds', 'soak value', 'm/r defense', 'strain'];
	let comma = ', ';
</script>

<div class="card {data.type}">
	<div class="header">
		<Title name={data.name} />
	</div>
	<div class="content">
		<div class="summary">
			<div class="charateristics">
				{#each charLabels as name, i (i)}
					<Characteristic {name} value={data.characteristics[i]} />
				{/each}
			</div>
			<div class="stats">
				{#each data.stats as value, i (i)}
					<Stat name={statLabels[i]} {value} />
				{/each}
				<Stat name={statLabels[2]} value={data.defense} />
			</div>
		</div>
		<div class="specs">
			<div class="skills">
				<SpecTitle name="Skills" isGroup={data.isGroup} />
				{#each data.skills as skill, i (i)}
					<span class="skill">{skill.name} <Dice dice={skill.dice} /></span>
				{/each}
			</div>
			<div class="weapons">
				<SpecTitle name="Weapons" />
				{#each data.weapons as weapon, i (i)}
					<div class="weapon">
						<span class="weapon-name"
							>{weapon.name}
							{#if weapon.count}{`(${weapon.count})`}{/if}</span
						>
						({weapon.type}; Damage {weapon.dmg}; Critical {weapon.crit}; Range ({weapon.range});
						{#if weapon.qualities.length}
							{#each weapon.qualities as quality, i (i)}
								{#if i > 0}{comma}{/if}{quality}
							{/each}
						{:else}-
						{/if})
					</div>
				{/each}
			</div>
			{#if data.talents.length !== 0}
			<div class="talents">
				<SpecTitle name="Talents" />
				{#each data.talents as talent, i (i)}
					<span class="talent"
						>{talent.name}{#if talent.value}
							{talent.value}{/if}</span
					>
				{/each}
			</div>
			{/if}
			{#if data.abilities.length !== 0}
			<div class="abilities">
				<SpecTitle name="Abilities" />
					{#each data.abilities as abi, i (i)}
						{#if i > 0}
							{#if data.abilities.some((value) => value.text !== '')}
							<br/>
							{:else}{comma}{/if}
						{/if}
						{#if abi.text !== ''}
							<span class="ability-name">{abi.name}</span>
							<span>{abi.text}</span>
						{:else}
							{abi.name}
						{/if}
					{/each}
			</div>
			{/if}
			{#if data.gear.length !== 0}
			<div class="gear">
				<SpecTitle name="Gear" />
				<span class="gear">{data.gear}</span>
			</div>
			{/if}
			<div class="desc">{data.desc}</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'sass:math';
	@function size($val) {
		$calc: math.div($val, 8);
		@return calc(#{$calc} * var(--scale, 1rem));
	}
	.card {
		--scale: var(--size, 8px);
		--bg: url('$lib/assets/bg/card.jpg');
		aspect-ratio: 2.5/3.5;
		background-image: var(--type-bg, var(--bg)), var(--bg);
		background-repeat: no-repeat;
		background-size: cover;
		border: var(--bw, 0) dashed #0003;
		box-sizing: border-box;
		padding-top: size(35.4);
		user-select: none;
		width: size(750);
		&.minion,
		&.operator {
			--color: var(--minion);
			--type-bg: url('$lib/assets/bg/minion.png');
		}
		&.rival {
			--color: var(--rival);
			--type-bg: url('$lib/assets/bg/rival.png');
		}
		&.nemesis {
			--color: var(--nemesis);
		}
	}
	.content {
		display: flex;
		gap: size(24);
		padding: size(33) size(35);
	}
	.summary {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: size(19);
	}
	.stats {
		display: grid;
		gap: size(9);
	}
	.charateristics {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: size(11) size(5);
		padding-top: size(2);
	}
	.specs {
		color: #000;
		font: size(23) / size(26) 'ITC Symbol Book';
		display: flex;
		flex-direction: column;
		gap: size(28);
	}
	.skill,
	.talent {
		&:not(:last-child)::after {
			content: ', ';
		}
	}
	.weapon:has(+ .weapon) {
		margin-bottom: size(3);
	}
	.weapon-name,
	.ability-name {
		font-style: italic;
		font-weight: bold;
	}
</style>
