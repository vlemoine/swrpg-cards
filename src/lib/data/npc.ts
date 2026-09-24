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
			{
				name: 'Color-shifting Hide',
				text: ''
			},
			{
				name: 'Toughened Hide',
				text: ''
			},
			{
				name: 'Prehensile Tail',
				text: ''
			}
		],
		gear: '',
		tier: 0
	},
	{
		desc: 'CT-43-2839',
		name: 'Private Alarm',
		type: 'operator',
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
		gear: 'Clone Armor (+2 soak), Utility Belt, Extra Reload'
	},
	{
		abilities: [
			{
				name: 'Droid',
				text: 'Does not need to breath, eat, or drink and can survive in vacuum or underwater. Immune to poisons or toxins.'
			},
			{
				name: 'Combat Training',
				text: 'Allows any character who has spent at least one hour practicing with droid to icnrease their melee defense rating by two for the remainder of the session.'
			}
		],
		characteristics: [3, 3, 2, 3, 1, 1],
		defense: [2, 0],
		desc: 'An ancient Jedi training droid',
		gear: '',
		isGroup: false,
		name: 'L0-M3',
		skills: [
			{
				name: 'Athletics',
				dice: 'yyg'
			},
			{
				name: 'Brawl',
				dice: 'yyy'
			},
			{
				name: 'Coordination',
				dice: 'ygg'
			},
			{
				name: 'Lightsaber',
				dice: 'yyy'
			},
			{
				name: 'Melee',
				dice: 'yyy'
			},
			{
				name: 'Ranged [Heavy]',
				dice: 'yyg'
			}
		],
		stats: [12, 6],
		talents: [],
		tier: 1,
		type: 'operator',
		weapons: [
			{
				name: 'Double-Bladed Training Saber',
				type: 'Lightsaber',
				dmg: 6,
				crit: 5,
				count: 0,
				range: 'Engaged',
				qualities: ['Linked 1', 'Stun Damage', 'Unwieldy 3']
			}
		]
	},
	{
		abilities: [
			{
				name: 'Clone Inhibitor Chip',
				text: 'So long as proper chain of command is observed, upgrade the ability of Leadership checks targeting a clone trooper once.'
			}
		],
		characteristics: [3, 3, 2, 2, 3, 1],
		defense: [0, 0],
		desc: 'CT-97-2596',
		gear: 'Clone Armor - Soak: 2, Utility Belt, Medpac, 2 Stimpacks',
		isGroup: false,
		name: 'Lt. Code',
		skills: [
			{
				name: 'Athletics',
				dice: 'ygg'
			},
			{
				name: 'Cool',
				dice: 'y'
			},
			{
				name: 'Discipline',
				dice: 'ygg'
			},
			{
				name: 'Medicine',
				dice: 'yygb'
			},
			{
				name: 'Ranged [Heavy]',
				dice: 'ygg'
			},
			{
				name: 'Survival',
				dice: 'yg'
			},
			{
				name: 'Vigilance',
				dice: 'ygg'
			}
		],
		stats: [12, 5],
		talents: [],
		tier: 1,
		type: 'operator',
		weapons: [
			{
				name: 'DC-15a Blaster Carbine',
				type: 'Ranged [Heavy]',
				dmg: 9,
				crit: 3,
				count: 0,
				range: 'Medium',
				qualities: ['Auto Fire', 'Pierce 1', 'Stun Setting']
			}
		]
	},
	{
		abilities: [
			{
				name: 'Force Power: Ebb/Flow',
				text: 'When making a skill check, roll an Ebb/Flow power check as part of the pool and spend [[f]] to Ebb: suffer 1 Strain to inflict 1 Strain on all Engaged Creatures. Flow: Heal 1 Strain. May spend [[f]][[f]] to affect all targets in Short range. May spend additional [[f]] to increase the strain healed or inflicted by 1.'
			}
		],
		characteristics: [3, 2, 2, 2, 3, 2],
		defense: [2, 2],
		desc: 'A promising young Zabrak.',
		gear: 'Armored Robes - Soak: 2; Defense 1',
		isGroup: false,
		name: 'Ordas Kena',
		skills: [
			{
				name: 'Discipline',
				dice: 'yyg'
			},
			{
				name: 'Lightsaber',
				dice: 'yyy'
			},
			{
				name: 'Perception',
				dice: 'yg'
			},
			{
				name: 'Resilience',
				dice: 'yyg'
			},
			{
				name: 'Vigilance',
				dice: 'ygg'
			}
		],
		stats: [14, 5],
		talents: [
			{
				name: 'Force Rating',
				value: '2'
			}
		],
		tier: 2,
		type: 'operator',
		weapons: [
			{
				name: 'Basic Lightsaber',
				type: 'Lightsaber',
				dmg: 6,
				crit: 2,
				count: 0,
				range: 'Engaged',
				qualities: ['Breach 1', 'Sunder']
			}
		]
	},
	{
		abilities: [],
		characteristics: [2, 2, 4, 3, 2, 1],
		defense: [0, 0],
		desc: "A teen Twi'lek with an attitude.",
		gear: 'Slicer Gear',
		isGroup: false,
		name: 'Mona Eenkar',
		skills: [
			{
				name: 'Computers',
				dice: 'yygg'
			},
			{
				name: 'Cool',
				dice: 'yg'
			},
			{
				name: 'Skullduggery',
				dice: 'ygg'
			}
		],
		stats: [12, 2],
		talents: [],
		tier: 1,
		type: 'operator',
		weapons: [
			{
				name: 'Stun Blaster',
				type: 'Ranged [Light]',
				dmg: 6,
				crit: 5,
				count: 0,
				range: 'Short',
				qualities: ['Stun Damage']
			}
		]
	},
	{
		abilities: [],
		characteristics: [2, 3, 2, 3, 2, 2],
		defense: [0, 0],
		desc: 'A reliable veteran.',
		gear: 'Padded Armor - Soak: 2',
		isGroup: false,
		name: 'Deng Kilaeon',
		skills: [
			{
				name: 'Cool',
				dice: 'yy'
			},
			{
				name: 'Leadership',
				dice: 'yg'
			},
			{
				name: 'Melee',
				dice: 'yg'
			},
			{
				name: 'Ranged [Heavy]',
				dice: 'yyg'
			},
			{
				name: 'Ranged [Light]',
				dice: 'ygg'
			},
			{
				name: 'Survival',
				dice: 'yyy'
			},
			{
				name: 'Vigilance',
				dice: 'yy'
			}
		],
		stats: [12, 4],
		talents: [],
		tier: 1,
		type: 'operator',
		weapons: [
			{
				name: 'Blaster Rifle',
				type: 'Ranged [Heavy]',
				dmg: 9,
				crit: 3,
				count: 0,
				range: 'Long',
				qualities: ['Stun Setting']
			},
			{
				name: 'Lightning 22 Ion Grenade',
				type: 'Ranged [Light]',
				dmg: 10,
				crit: 5,
				count: 1,
				range: 'Short',
				qualities: ['Blast 7', 'Disorient 5', 'Limited Ammo 1', 'Stun Damage (Droid Only)']
			},
			{
				name: 'Vibroknife',
				type: 'Melee',
				dmg: 3,
				crit: 2,
				count: 0,
				range: 'Engaged',
				qualities: ['Pierce 2', 'Vicious 1']
			}
		]
	},
	{
		abilities: [
			{
				name: 'Dark-Side Force User',
				text: 'Uses Dark Side results instead of Light Side.'
			}
		],
		characteristics: [2, 3, 2, 3, 2, 1],
		defense: [3, 0],
		desc: 'A taciturn warrior who walk the shadows.',
		gear: 'Dark Robes - Soak: 1',
		isGroup: false,
		name: 'Harvester Maple',
		skills: [
			{
				name: 'Coercion',
				dice: 'yy'
			},
			{
				name: 'Discipline',
				dice: 'yyg'
			},
			{
				name: 'Lightsaber',
				dice: 'yyg'
			},
			{
				name: 'Resilience',
				dice: 'yy'
			},
			{
				name: 'Stealth',
				dice: 'yyg'
			},
			{
				name: 'Melee',
				dice: 'yyga'
			}
		],
		stats: [12, 3],
		talents: [
			{
				name: 'Force Rating',
				value: '1'
			}
		],
		tier: 1,
		type: 'operator',
		weapons: [
			{
				name: 'Ryyk Blade',
				type: 'Melee',
				dmg: 4,
				crit: 2,
				count: 0,
				range: 'Engaged',
				qualities: ['Cumbersome 3', 'Defensive 1', 'Superior']
			},
			{
				name: 'Ryyk Blade',
				type: 'Melee',
				dmg: 4,
				crit: 2,
				count: 0,
				range: 'Engaged',
				qualities: ['Cumbersome 3', 'Defensive 1', 'Superior']
			}
		]
	},
	{
		defense: [0, 0],
		desc: 'Cold, disciplined',
		name: 'Vexa Torr',
		type: 'operator',
		isGroup: false,
		characteristics: [3, 3, 2, 3, 1, 1],
		stats: [12, 5],
		skills: [
			{
				name: 'Brawl',
				dice: 'yyg'
			},
			{
				name: 'Mechanics',
				dice: 'yy'
			},
			{
				name: 'Ranged [Light]',
				dice: 'yyg'
			},
			{
				name: 'Skullduggery',
				dice: 'yyg'
			},
			{
				name: 'Stealth',
				dice: 'yyg'
			},
			{
				name: 'Vigilance',
				dice: 'ygg'
			}
		],
		weapons: [
			{
				name: 'Heavy Blaster Pistol',
				type: 'Ranged [Light]',
				dmg: 7,
				crit: 3,
				count: 0,
				range: 'Medium',
				qualities: ['Stun Setting']
			}
		],
		talents: [],
		tier: 1,
		abilities: [],
		gear: 'Combat gear (+2 Soak), Integrated comlink'
	},
	{
		defense: [0, 0],
		desc: 'Professional, detached',
		name: 'Drax Morn',
		type: 'operator',
		isGroup: false,
		characteristics: [2, 3, 2, 3, 2, 2],
		stats: [14, 4],
		skills: [
			{
				name: 'Melee',
				dice: 'yy'
			},
			{
				name: 'Perception',
				dice: 'yyg'
			},
			{
				name: 'Ranged [Light]',
				dice: 'yyy'
			},
			{
				name: 'Skullduggery',
				dice: 'yyg'
			},
			{
				name: 'Stealth',
				dice: 'yyy'
			}
		],
		weapons: [
			{
				name: 'SE-14r Light Repeating Blaster',
				type: 'Ranged [Light]',
				dmg: 6,
				crit: 3,
				count: 0,
				range: 'Medium',
				qualities: ['Auto Fire', 'Stun Setting']
			},
			{
				name: 'Vibroknife',
				type: 'Melee',
				dmg: 3,
				crit: 2,
				count: 0,
				range: 'Engaged',
				qualities: []
			}
		],
		talents: [
			{
				name: 'Stalker',
				value: '1'
			}
		],
		tier: 2,
		abilities: [],
		gear: 'Reinforced blast vest (+2 Soak), Encrypted comlink'
	}
];
//// END COPY ABOVE
export default NPCS;
