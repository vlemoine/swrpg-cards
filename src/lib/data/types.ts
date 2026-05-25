// type Attributes = 'Brawn' | 'Agility' | 'Intellect' | 'Cunning' | 'Willpower' | 'Presence';

type Range = 'Engaged' | 'Short' | 'Medium' | 'Long' | 'Extreme';

type NPCType = 'minion' | 'rival' | 'nemesis' | 'operator';

export interface Skill {
	name: string;
	dice: string;
}

export interface optionObj {
	label: string;
	value: string;
}

export class Weapon {
	name = '';
	type = '';
	dmg = 0;
	crit = 0;
	count = 0;
	range: Range = 'Engaged';
	qualities: string[] = [];
}

export class NPC {
	defense: Array<number | number[]> = [0, 0];
	desc = '';
	name = '';
	type: NPCType = 'operator';
	isGroup = false;
	characteristics = [0, 0, 0, 0, 0, 0];
	stats: Array<number | number[]> = [0, 0];
	skills: Skill[] = [];
	weapons: Weapon[] = [];
	talents: { name: string; value?: string }[] = [];
	tier = 0;
	abilities: { name: string; text: string }[] = [];
	gear = '';
}
