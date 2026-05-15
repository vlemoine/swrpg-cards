<script lang="ts">
	import Button from '$lib/common/button.svelte';
	import FormInput from '$lib/common/formInput.svelte';
	import { attributes, npcTypes, ranges, skills, weaponTypes } from '$lib/data/objects';
	import Dice from '../dice.svelte';
	import FormSelect from '$lib/common/formSelect.svelte';
	import { NPC, Weapon, type Skill } from '$lib/data/types';
	import Section from './section.svelte';
	import FormDatalist from '$lib/common/form-datalist.svelte';

	let { editData = $bindable(new NPC()), onSave = () => {} } = $props();
	let EditData = $state(editData);

	let selectedSkill = $state('');

	const _sk: () => string[] = () => EditData.skills.map((s: Skill) => s.name);
	let skillList = $derived(
		skills
			.filter((skill) => {
				return _sk().includes(skill) === false;
			})
			.map((skill) => {
				return { value: skill, label: skill };
			})
	);

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
			selectedSkill = '';
		}
	};

	const addTalent = () => {
		EditData = {
			...EditData,
			talents: [...(EditData.talents || []), { name: '', value: '' }]
		};
	};

	const addAbility = () => {
		EditData = {
			...EditData,
			abilities: [...(EditData.abilities || []), { name: '', text: '' }]
		};
	};

	const addWeapon = () => {
		EditData = {
			...EditData,
			weapons: [...(EditData.weapons || []), new Weapon()]
		};
	};
</script>

<div class="editor">
	<aside class="form-sidebar">
		<Button onclick={() => onSave(EditData)}>Save</Button>
		<hr />
		<a href="#details">Details</a>
		<a href="#attributes">Attributes</a>
		<a href="#skills">Skills</a>
		<a href="#stats">Stats</a>
		<a href="#talents">Talents</a>
		<a href="#equipment">Equipment</a>
		<a href="#abilities">Abilities</a>
	</aside>

	<form>
		<Section name="Details" columns="repeat(2, 1fr)">
			<FormInput title="Name" bind:value={EditData.name} />
			<FormInput title="Description" bind:value={EditData.desc} />
			<FormSelect title="Type" bind:value={EditData.type} options={npcTypes} />
			<FormInput title="Tier" bind:value={EditData.tier} short type="number" />
		</Section>
		<Section name="Attributes" columns="repeat(3, 1fr)">
			{#each EditData.characteristics as _, i (i)}
				<FormInput
					title={attributes[i]}
					bind:value={EditData.characteristics[i]}
					short
					type="number"
				/>{/each}
		</Section>
		<Section name="Skills" columns="repeat(2, 1fr)">
			{#snippet actions()}
				<div class="skill-add">
					<FormDatalist
						label="Skill to Add"
						placeholder="Add ..."
						hideLabel
						bind:value={selectedSkill}
						options={skillList}
					/>
					<Button onclick={skillAddHandler}>
						<i class="fa-sharp fa-solid fa-plus"></i>
					</Button>
				</div>
			{/snippet}
			{#each EditData.skills as skill, i (i)}
				<div class="skill-wrap">
					<FormInput short title={skill.name} bind:value={skill.dice} />
					<Dice dice={skill.dice} />
				</div>
			{/each}
		</Section>
		<Section name="Stats" columns="repeat(2, 1fr)">
			<FormInput title="Wounds" bind:value={EditData.stats[0]} short type="number" />
			<FormInput title="Soak" bind:value={EditData.stats[1]} short type="number" />
			<FormInput title="Melee Defense" bind:value={EditData.defense[0]} short type="number" />
			<FormInput title="Ranged Defense" bind:value={EditData.defense[1]} short type="number" />
		</Section>
		<Section name="Talents">
			{#snippet actions()}
				<Button onclick={addTalent} title="Add Talent">
					<i class="fa-sharp fa-solid fa-plus"></i>
				</Button>
			{/snippet}
			{#each EditData.talents as talent, i (i)}
				<FormInput title="Name" bind:value={talent.name} />
				<FormInput title="Value" bind:value={talent.value} short />
			{/each}
		</Section>
		<Section name="Equipment">
			{#snippet actions()}
				<Button onclick={addWeapon} title="Add Weapon">
					<i class="fa-sharp fa-solid fa-plus"></i>
				</Button>
			{/snippet}

			{#each EditData.weapons as weapon, i (i)}
				<div class="weapon">
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
					<hr />
				</div>
			{/each}
			<FormInput title="Additional Gear" bind:value={EditData.gear} />
		</Section>
		<Section name="Abilities">
			{#snippet actions()}
				<Button onclick={addAbility} title="Add Ability">
					<i class="fa-sharp fa-solid fa-plus"></i>
				</Button>
			{/snippet}

			{#each EditData.abilities as _ability, i (_ability)}
				<FormInput
					title={`Ability ${i + 1} Name`}
					bind:value={EditData.abilities[i].name}
				/><FormInput
					title={`Ability ${i + 1} Text`}
					bind:value={EditData.abilities[i].text}
				/>{/each}
		</Section>
	</form>
</div>

<style lang="scss">
	aside {
		position: sticky;
		top: 5rem;
		display: flex;
		flex-direction: column;
		hr {
			width: 100%;
		}
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.skill-add {
		background-color: var(--navy);
		corner-shape: bevel;
		border-radius: 10rem;
		display: flex;
		padding-left: 1rem;
		--btn-br: 0 10rem 10rem 0;
		--btn-pl: 0.67rem;
	}
	.skill-wrap {
		display: flex;
		align-items: center;
	}

	.editor {
		align-items: self-start;
		display: grid;
		gap: 1rem;
		grid-template-columns: 12rem 1fr;
		position: relative;
	}
</style>
