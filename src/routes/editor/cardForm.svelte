<script lang="ts">
	import Button from '$lib/common/button.svelte';
	import FormInput from '$lib/common/formInput.svelte';
	import { attributes, npcTypes, ranges, skills, weaponTypes } from '$lib/data/objects';
	import Dice from '../dice.svelte';
	import FormSelect from '$lib/common/formSelect.svelte';
	import { Weapon, type Skill } from '$lib/data/types';

	let { editData = {}, onSave = () => {} } = $props();
	// svelte-ignore state_referenced_locally
	let EditData = $state(editData);
	$effect.pre(() => {
		EditData = editData;
	});

	let selectedSkill = $state('');

	let skillList = skills.map((skill) => {
		return { value: skill, label: skill };
	});

	let weaponTypeList = weaponTypes.map((wType) => {
		return { value: wType, label: wType };
	});

	let rangeList = ranges.map((range) => {
		return { value: range, label: range };
	});

	const skillAddHandler = () => {
		if (
			EditData.skills.find((skill: Skill) => skill.name === selectedSkill) ||
			selectedSkill.length === 0
		) {
			return;
		} else {
			EditData.skills.push({ name: selectedSkill, dice: '' });
		}
	};
</script>

<div class="editor">
	<aside class="form-sidebar">
		<Button onclick={() => onSave(EditData)}>Save</Button>
		<hr />
		<a href="#details">Details</a>
		<a href="#attributes">Attributes</a>
		<a href="#skills">Skills</a>
	</aside>

	<form>
		<section id="details">
			<h2>Details</h2>
			<FormInput title="Name" bind:value={EditData.name} />
			<FormInput title="Description" bind:value={EditData.desc} />
			<FormSelect title="Type" bind:value={EditData.type} options={npcTypes} />
			<FormInput title="Tier" bind:value={EditData.tier} short type="number" />
		</section>
		<section id="attributes">
			<h2>Attributes</h2>
			<div class="attributes">
				{#each EditData.characteristics as _, i (i)}
					<FormInput
						title={attributes[i]}
						bind:value={EditData.characteristics[i]}
						short
						type="number"
					/>{/each}
			</div>
		</section>
		<section id="skills">
			<h2>Skills</h2>
			<div class="skills">
			{#each EditData.skills as skill, i (i)}
				<div class="skill-wrap">
					<FormInput short title={skill.name} bind:value={skill.dice} />
					<Dice dice={skill.dice} />
				</div>
			{/each}
			</div>
			<div class="section-footer">
				<FormSelect title="Skill to Add" bind:value={selectedSkill} options={skillList} />
				<Button onclick={skillAddHandler}>Add Skill</Button>
			</div>
		</section>
		<div class="form-section">
			<div class="section-header"><h2>Stats</h2></div>
			<FormInput title="Wounds" bind:value={EditData.stats[0]} short type="number" />
			<FormInput title="Soak" bind:value={EditData.stats[1]} short type="number" />
			<FormInput title="Melee Defense" bind:value={EditData.defense[0]} short type="number" />
			<FormInput title="Ranged Defense" bind:value={EditData.defense[1]} short type="number" />
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Talents</h2></div>
			<button onclick={() => EditData.talents.push({ name: '', value: '' })}>Add Talent</button>
			{#each EditData.talents as talent, i (i)}
				<FormInput title="Name" bind:value={talent.name} />
				<FormInput title="Value" bind:value={talent.value} short />{/each}
		</div>

		<div class="form-section equip">
			<div class="section-header"><h2>Equipment</h2></div>
			<button onclick={() => EditData.weapons.push(new Weapon())}>Add Weapoon</button>
			{#each EditData.weapons as weapon, i (i)}
				<FormInput title="Name" bind:value={weapon.name} />
				<FormSelect title="Skill" bind:value={weapon.type} options={weaponTypeList} />
				<FormSelect title="Range" bind:value={weapon.range} options={rangeList} />
				<FormInput title="Damage" bind:value={weapon.dmg} short type="number" />
				<FormInput title="Crit" bind:value={weapon.crit} short type="number" />
				<FormInput short title="Limited Ammo Count" bind:value={weapon.count} type="number" />
				<h4>Weapon Qualities</h4>
				{#each weapon.qualities as _quality, i (_quality)}
					<FormInput title="Quality Name and Rating" bind:value={weapon.qualities[i]} />
				{/each}
				<button onclick={() => weapon.qualities.push('')}>Add Quality</button>
			{/each}
			<FormInput title="Additional Gear" bind:value={EditData.gear} />
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Abilities</h2></div>
			<button onclick={() => EditData.abilities.push({ name: '', text: '' })}>Add Ability</button>
			{#each EditData.abilities as _ability, i (_ability)}
				<FormInput
					title={`Ability ${i + 1} Name`}
					bind:value={EditData.abilities[i].name}
				/><FormInput
					title={`Ability ${i + 1} Text`}
					bind:value={EditData.abilities[i].text}
				/>{/each}
		</div>
	</form>
</div>

<style lang="scss">
	aside {
		position: sticky;
		top: 1rem;
		display: flex;
		flex-direction: column;
		hr {
			width: 100%;
		}
	}
	h2 {
		margin: 0;
	}
	.section-footer {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.attributes {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.skills {
			--scale: 5px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		.skill-wrap {
			display: flex;
			flex-wrap: nowrap;
			.dice {
				flex: 0 0 auto;
			}
		}
	}
	.editor {
		display: grid;
		grid-template-columns: 12rem 1fr;
		gap: 1rem;
		position: relative;

		.form-section {

			.section-footer {
				align-items: center;
				display: flex;
				justify-content: center6;
				width: 100%;
			}
			&.equip {
				grid-row: 4 / 7;
				grid-column: 2 / 2;
			}
		}
	}
</style>
