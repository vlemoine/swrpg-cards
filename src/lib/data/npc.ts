import type { NPC } from './types';

const NPCS: NPC[] = [
	{
		name: 'Bark Rat',
		desc: '',
		type: 'minion',
		isGroup: true,
		characteristics: [1, 3, 1, 1, 1, 1],
		defense: [1, 1],
		stats: [3, 2],
		skills: [
			{
				name: 'Athletics',
				dice: 'g'
			},
			{
				name: 'Brawl',
				dice: 'g'
			},
			{
				name: 'Coordination',
				dice: 'ggg'
			}
		],
		weapons: [
			{
				name: 'Tail',
				type: 'Brawl',
				dmg: 3,
				crit: 4,
				count: 0,
				range: 'Engaged',
				qualities: ['Knockdown']
			},
			{
				name: 'Teeth and claws',
				type: 'Brawl',
				dmg: 2,
				count: 0,
				crit: 5,
				range: 'Engaged',
				qualities: []
			}
		],
		talents: [],
		abilities: [
			{ name: 'Color-shifting Hide', text: '' },
			{ name: 'Toughened Hide', text: '' },
			{ name: 'Prehensile Tail', text: '' }
		],
		gear: [],
		tier: 0
	},
	{
		desc: 'CT-43-2839',
		name: 'Private Alarm',
		type: 'minion',
		isGroup: false,
		characteristics: [2, 3, 3, 2, 3, 1],
		defense: [0, 0],
		stats: [12, 5],
		skills: [
			{
				name: 'Athletics',
				dice: 'ggg'
			},
			{
				name: 'Brawl',
				dice: 'gg'
			},
			{
				name: 'Computers',
				dice: 'ygg'
			},
			{
				name: 'Discipline',
				dice: 'ygg'
			},
			{
				name: 'Mechanics',
				dice: 'ygg'
			},
			{
				name: 'Ranged [Heavy]',
				dice: 'ygg'
			},
			{
				name: 'Ranged [Light]',
				dice: 'ygg'
			},
			{
				name: 'Resilience',
				dice: 'ygg'
			},
			{
				name: 'Vigilance',
				dice: 'ggg'
			}
		],
		weapons: [
			{
				name: 'DC-15A Blaster Carbine',
				type: 'Ranged [Heavy]',
				dmg: 9,
				count: 0,
				crit: 3,
				range: 'Medium',
				qualities: ['Auto Fire', 'Pierce 1', 'Stun Setting']
			},
			{
				name: 'Frag Grenade',
				type: 'Ranged [Light]',
				dmg: 8,
				crit: 4,
				count: 2,
				range: 'Short',
				qualities: ['Blast 6', 'Limited Ammo 1']
			},
			{
				name: 'Anti-Personnel Mine',
				type: 'Mechanics',
				dmg: 12,
				crit: 3,
				count: 1,
				range: 'Engaged',
				qualities: ['Blast 4', 'Vicious 4', 'Limited Ammo 1']
			}
		],
		talents: [],
		tier: 1,
		abilities: [
			{
				name: 'Clone Inhibitor Chip',
				text: 'So long as proper chain of command is observed, upgrade the ability of Leadership checks targeting a clone trooper once.'
			}
		],
		gear: ['Clone Armor (+2 soak)']
	}
];
//// END COPY ABOVE
export default NPCS;
