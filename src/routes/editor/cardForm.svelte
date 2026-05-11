<script lang="ts">
	import { BlankWeapon } from '$lib/data/types';
	import FormInput from '$lib/common/formInput.svelte';
	import { attributes, npcTypes, ranges, skills, weaponTypes } from '$lib/data/objects';
	import Dice from '../dice.svelte';
	import FormSelect from '$lib/common/formSelect.svelte';
	let { editData = {}, onSave = () => {} } = $props();
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
		if (EditData.skills.find((sk) => sk.name === selectedSkill) || selectedSkill.length === 0) {
			return;
		} else {
			EditData.skills.push({ name: selectedSkill, dice: '' });
		}
	};
</script>

<div class="editor-wrap">
	<div class="form-head"><button onclick={() => onSave(EditData)}>Save</button></div>

	<form>
		<div class="form-section">
			<div class="section-header"><h2>Details</h2></div>
			<FormInput title="Name" bind:value={EditData.name} />
			<FormInput title="Description" bind:value={EditData.desc} />
			<FormSelect title="Type" bind:value={EditData.type} options={npcTypes} />
			<FormInput title="Tier" bind:value={EditData.tier} short type="number" />
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Attributes</h2></div>
			{#each EditData.characteristics as attr, i}
				<FormInput
					title={attributes[i]}
					bind:value={EditData.characteristics[i]}
					short
					type="number"
				/>{/each}
		</div>
		<div class="form-section skills">
			<div class="section-header"><h2>Skills</h2></div>
			{#each EditData.skills as skill}
				<div class="skill-wrap">
					<FormInput short title={skill.name} bind:value={skill.dice} />
					<Dice dice={skill.dice} />
				</div>
			{/each}
			<div class="section-footer">
				<button onclick={skillAddHandler}>Add Skill</button>
				<FormSelect title="Skill to Add" bind:value={selectedSkill} options={skillList} />
			</div>
		</div>
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
			{#each EditData.talents as talent, i}
				<FormInput title="Name" bind:value={talent.name} />
				<FormInput title="Value" bind:value={talent.value} short />{/each}
		</div>

		<div class="form-section equip">
			<div class="section-header"><h2>Equipment</h2></div>
			<button onclick={() => EditData.weapons.push(BlankWeapon)}>Add Weapoon</button>
			{#each EditData.weapons as weapon}
				<FormInput title="Name" bind:value={weapon.name} />
				<FormSelect title="Skill" bind:value={weapon.type} options={weaponTypeList} />
				<FormSelect title="Range" bind:value={weapon.range} options={rangeList} />
				<FormInput title="Damage" bind:value={weapon.dmg} short type="number" />
				<FormInput title="Crit" bind:value={weapon.crit} short type="number" />
				<FormInput short title="Limited Ammo Count" bind:value={weapon.count} type="number" />
				<h4>Weapon Qualities</h4>
				{#each weapon.qualities as qual, i}
					<FormInput title="Quality Name and Rating" bind:value={weapon.qualities[i]} />
				{/each}
				<button onclick={() => weapon.qualities.push('')}>Add Quality</button>
			{/each}
			<FormInput title="Additional Gear" bind:value={EditData.gear} />
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Abilities</h2></div>
			<button onclick={() => EditData.abilities.push({ name: '', text: '' })}>Add Ability</button>
			{#each EditData.abilities as ability, i}
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
	.editor-wrap {
		width: 100%;
		--scale: 5px;

		.form-head {
			width: 100%;
		}
		form {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: repeat(1fr);
		}
		.form-section {
			.section-header {
				width: 100%;
			}
			.section-footer {
				align-items: center;
				display: flex;
				justify-content: center6;
				width: 100%;
			}
			&.skills {
				grid-row: 1 / 3;
				grid-column: 2 / 2;
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-flow: row wrap;

				.skill-wrap {
					display: inline-block;
					width: 25%;
					height: 85px;
				}
			}
			&.equip {
				grid-row: 4 / 7;
				grid-column: 2 / 2;
			}
		}
		button {
			background-color: #333333;
			border: 0px solid black;
			border-radius: 5px;
			color: #fff;
			font-size: 14px;
			font-weight: bold;
			margin: 10px;
			padding: 10px 15px;
		}
	}
</style>
