type Attributes = 'Brawn' | 'Agility' | 'Intellect' | 'Cunning' | 'Willpower' | 'Presence';
type Range = 'Engaged' | 'Short' | 'Medium' | 'Long' | 'Extreme';
interface Weapon {
	name: string;
	type: string;
	dmg: number;
	crit: number;
	count: number;
	range: Range;
	qualities: { name: string; value?: number }[];
}
interface Skill {
	name: string;
	dice: string;
}
export interface optionObj {
	label: string;
	value: string;
}
export interface NPC {
	defense: Array<number | number[]>;
	desc: string;
	name: string;
	type: 'minion' | 'rival' | 'nemesis' | 'operator';
	isGroup: boolean;
	characteristics: number[];
	stats: Array<number | number[]>;
	skills: Skill[];
	weapons: Weapon[];
	talents: { name: string; value?: any }[];
	tier: number;
	abilities: string[];
	gear: string[];
}
export const BlankNPC: NPC = {
	abilities: [],
	characteristics: [0, 0, 0, 0, 0, 0],
	defense: [0, 0],
	desc: '',
	gear: [],
	isGroup: false,
	name: '',
	skills: [],
	stats: [0, 0],
	talents: [],
	tier: 0,
	type: 'operator',
	weapons: []
};
export const BlankWeapon: Weapon = {
	name: '',
	type: '',
	dmg: 0,
	crit: 0,
	count: 0,
	range: 'Engaged',
	qualities: []
};
