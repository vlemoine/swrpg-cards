type Range = 'Engaged' | 'Short' | 'Medium' | 'Long' | 'Extreme';
interface Weapon {
  name: string;
  type: string;
  dmg: number;
  crit: number;
  range: Range;
  qualities: { name: string; value?: number }[];
}
interface Skill {
  name: string;
  level: number | null;
  dice: string;
}
export interface NPC {
  name: string;
  type: 'minion' | 'rival' | 'nemesis';
  isGroup: boolean;
  characteristics: number[];
  stats: Array<number | number[]>;
  skills: Skill[];
  weapons: Weapon[];
  talents: { name: string; value?: number }[];
  abilities: string[];
  gear: string[];
}