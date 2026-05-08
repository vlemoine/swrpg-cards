<script lang="ts">
	import { BlankWeapon } from '$lib/data/types';
	import FormInput from '$lib/common/formInput.svelte';
	import { attributes, npcTypes, ranges, skills, weaponTypes } from '$lib/data/objects';
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
	<button onclick={() => onSave(EditData)}>Save</button>
	<form>
		<div class="form-section">
			<FormInput title="Name" bind:value={EditData.name} />
			<FormInput title="Description" bind:value={EditData.desc} />
			<FormSelect title="Type" bind:value={EditData.type} options={npcTypes} />
			<FormInput title="Tier" bind:value={EditData.tier} type="number" />
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Attributes</h2></div>
			{#each EditData.characteristics as attr, i}
				<FormInput
					title={attributes[i]}
					bind:value={EditData.characteristics[i]}
					type="number"
				/>{/each}
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Stats</h2></div>
			<FormInput title="Wounds" bind:value={EditData.stats[0]} type="number" />
			<FormInput title="Soak" bind:value={EditData.stats[1]} type="number" />
			<FormInput title="Melee Defense" bind:value={EditData.defense[0]} type="number" />
			<FormInput title="Ranged Defense" bind:value={EditData.defense[1]} type="number" />
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Skills</h2></div>
			{#each EditData.skills as skill}
				<FormInput title={skill.name} bind:value={skill.dice} />
			{/each}
			<button onclick={skillAddHandler}>Add Skill</button>
			<FormSelect title="Skill to Add" bind:value={selectedSkill} options={skillList} />
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Talents</h2></div>
			<button onclick={() => EditData.talents.push({ name: '', value: '' })}>Add Talent</button>
			{#each EditData.talents as talent, i}
				<FormInput title="Name" bind:value={talent.name} />
				<FormInput title="Value" bind:value={talent.value} />{/each}
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Abilities</h2></div>
			<button onclick={() => EditData.abilities.push('')}>Add Ability</button>
			{#each EditData.abilities as ability, i}
				<FormInput title={`Ability ${i + 1}`} bind:value={EditData.abilities[i]} />{/each}
		</div>
		<div class="form-section">
			<div class="section-header"><h2>Equipment</h2></div>
			<button onclick={() => EditData.weapons.push(BlankWeapon)}>Add Weapoon</button>
			{#each EditData.weapons as weapon}
				<FormInput title="Name" bind:value={weapon.name} />
				<FormSelect title="Skill" bind:value={weapon.type} options={weaponTypeList} />
				<FormSelect title="Range" bind:value={weapon.range} options={rangeList} />
				<FormInput title="Damage" bind:value={weapon.dmg} type="number" />
				<FormInput title="Crit" bind:value={weapon.crit} type="number" />
				<FormInput title="Limited Ammo Count" bind:value={weapon.count} type="number" />
				<h4>Weapon Qualities</h4>
				{#each weapon.qualities as qual}
					<FormInput title="Quality Type" bind:value={qual.name} />
					<FormInput title="Quality Type" bind:value={qual.value} />
				{/each}
				<button onclick={() => weapon.qualities.push({ name: '', value: 0 })}>Add Quality</button>
			{/each}
			<FormInput title="Additional Gear" bind:value={EditData.gear} />
		</div>
	</form>
</div>

<style lang="scss">
	.editor-wrap {
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
