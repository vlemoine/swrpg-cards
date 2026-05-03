<script lang="ts">
	import type { NPC } from '$lib/data/types';
	import Characteristic from './characteristic.svelte';
	import Dice from './dice.svelte';
	import SpecTitle from './spec-title.svelte';
	import Stat from './stat.svelte';
	import Title from './title.svelte';
	interface Props {
		data: NPC;
	}
	let { data }: Props = $props();
	let charLabels = ['brawn', 'agility', 'intellect', 'cunning', 'willpower', 'presence'];
	let statLabels = ['wounds', 'soak value', 'm/r defense'];
</script>

<div class="card {data.type}">
	<div class="header">
		<Title name={data.name} />
	</div>
	<div class="content">
		<div class="summary">
			<div class="charateristics">
				{#each charLabels as name, i}
					<Characteristic {name} value={data.characteristics[i]} />
				{/each}
			</div>
			<div class="stats">
				{#each statLabels as name, i}
					<Stat {name} value={data.stats[i]} />
				{/each}
			</div>
		</div>
		<div class="specs">
			<div class="skills">
				<SpecTitle name="Skills" isGroup={data.isGroup} />
				{#each data.skills as skill}
					<span class="skill"
						>{skill.name} {skill.level} (<span class="dice"><Dice dice={skill.dice} /></span>)</span
					>
				{/each}
			</div>
			<div class="weapons">
				<SpecTitle name="Weapons" />
				{#each data.weapons as weapon}
					<div class="weapon">
						<span class="weapon-name">{weapon.name}</span> ({weapon.type}; Damage {weapon.dmg};
						Critical {weapon.crit}; Range ({weapon.range});
						{#if weapon.qualities.length}
							{#each weapon.qualities as quality}
								{quality.name}{#if quality.value}{quality.value}{/if}
							{/each}
						{:else}-
						{/if})
					</div>
				{/each}
			</div>
			<div class="talents">
				<SpecTitle name="Talents" />
				{#if data.talents.length === 0}-{/if}
				{#each data.talents as talent}
					<span class="talent"
						>{talent.name}{#if talent.value}
							{talent.value}{/if}</span
					>
				{/each}
			</div>
			<div class="abilities">
				<SpecTitle name="Abilities" />
				{#if data.abilities.length === 0}-{:else}{data.abilities.join(', ')}{/if}
			</div>
			<div class="gear">
				<SpecTitle name="Gear" />
				{#if data.gear.length === 0}-{/if}
				{#each data.gear as gear}
					<span class="gear">{gear}</span>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'sass:math';
	@function size($val) {
		$calc: math.div($val, 8);
		@return calc(#{$calc} * var(--scale, 1rem));
	}
	@font-face {
		font-family: 'EotE Dice';
		src: url('$lib/assets/fonts/sw-rpg-icons.woff');
	}
	@font-face {
		font-family: 'Elektra Medium Pro';
		src: url('$lib/assets/fonts/Elektra-Medium-Pro.woff2');
	}
	@font-face {
		font-family: 'Elektra Medium Pro';
		font-weight: 700;
		src: url('$lib/assets/fonts/Elektra-Medium Pro-Bold.woff2');
	}
	@font-face {
		font-family: 'ITC Symbol Book';
		src: url('$lib/assets/fonts/SymbolITCbyBT-Book.woff2');
	}
	@font-face {
		font-family: 'Teuton Fett';
		src: url('$lib/assets/fonts/TeutonFett.woff2');
	}
	@font-face {
		font-family: 'Teuton Mager';
		src: url('$lib/assets/fonts/TeutonMager.woff2');
	}
	.card {
		--scale: 10px;
		--color: red;
		--minion: #8e5a07;
		--rival: #164203;
		--nemesis: #741213;
		--bg: url('$lib/assets/bg/card.jpg');
		background-color: tan;
		aspect-ratio: 2.5/3.5;
		padding-top: size(35.4);
		width: size(750);
		box-sizing: border-box;
		background-size: cover;
		margin-bottom: size(20);
		&.minion {
			--color: var(--minion);
			background-image:  url('$lib/assets/bg/minion.png'), var(--bg);
		}
		&.rival {
			--color: var(--rival);
			background-image:  url('$lib/assets/bg/rival.png'), var(--bg);
		}
		&.nemesis {
			--color: var(--nemesis);
		}
	}
	.content {
		padding: size(35.3);
		display: flex;
		gap: size(27.5);
	}
	.summary {
		display: flex;
		flex-direction: column;
		gap: size(18);
		align-items: center;
	}
	.stats {
		display: grid;
		gap: size(9.2);
	}
	.charateristics {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: size(5.5);
	}
	.specs {
		font-size: size(22.9);
		font-family: 'ITC Symbol Book';
		display: flex;
		flex-direction: column;
		gap: size(28.6);
	}
	.skill,
	.talent {
		&:not(:last-child)::after {
			content: ', ';
		}
	}
	.dice {
		font-family: 'EotE Dice';
	}
</style>
