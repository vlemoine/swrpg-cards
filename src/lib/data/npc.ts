import type { NPC } from "./types";

const br: NPC =
{
    "name": "Bark Rat",
    "type": "minion",
    "isGroup": true,
    "characteristics": [
      1,
      3,
      1,
      1,
      1,
      1
    ],
    "stats": [
      3,
      2,
      [
        1,
        1
      ]
    ],
    "skills": [
      {
        "name": "Athletics",
        "level": null,
        "dice": "g"
      },
      {
        "name": "Brawl",
        "level": null,
        "dice": "g"
      },
      {
        "name": "Coordination",
        "level": null,
        "dice": "g"
      }
    ],
    "weapons": [
      {
        "name": "Tail",
        "type": "Brawl",
        "dmg": 3,
        "crit": 4,
        "range": "Engaged",
        "qualities": [
          {
            "name": "Knockdown"
          }
        ]
      },
      {
        "name": "Teeth and claws",
        "type": "Brawl",
        "dmg": 2,
        "crit": 5,
        "range": "Engaged",
        "qualities": []
      }
    ],
    "talents": [],
    "abilities": [
      "Color-shifting Hide",
      "Toughened Hide",
      "Prehensile Tail"
    ],
    "gear": []
  }; 
export default [
  br
]