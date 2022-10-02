export const ClassList = [
  { label: 'Lord (Marth)', value: 0 },
  { label: 'Pegasus Knight', value: 1 },
  { label: 'Pegasus Knight (Caeda)', value: 2 },
  { label: 'Falcon Knight', value: 3 },
  { label: 'Dracoknight', value: 4 },
  { label: 'Dracoknight (F)', value: 5 },
  { label: 'Cavalier', value: 6 },
  { label: 'Cavalier (F)', value: 7 },
  { label: 'Paladin', value: 8 },
  { label: 'Paladin (F)', value: 9 },
  { label: 'Knight', value: 10 },
  { label: 'General', value: 11 },
  { label: 'Archer', value: 12 },
  { label: 'Archer (F)', value: 13 },
  { label: 'Sniper', value: 14 },
  { label: 'Sniper (F)', value: 15 },
  { label: 'Mercenary', value: 16 },
  { label: 'Hero', value: 17 },
  { label: 'Myrmidon', value: 18 },
  { label: 'Myrmidon (F)', value: 19 },
  { label: 'Swordmaster', value: 20 },
  { label: 'Swordmaster (F)', value: 21 },
  { label: 'Fighter', value: 22 },
  { label: 'Warrior', value: 23 },
  { label: 'Hunter', value: 24 },
  { label: 'Horsemen', value: 25 },
  { label: 'Pirate', value: 26 },
  { label: 'Berserker', value: 27 },
  { label: 'Dark Mage', value: 28 },
  { label: 'Sorcerer', value: 29 },
  { label: 'Mage', value: 30 },
  { label: 'Mage (F)', value: 31 },
  { label: 'Curate', value: 32 },
  { label: 'Cleric', value: 33 },
  { label: 'Sage', value: 34 },
  { label: 'Sage (F)', value: 35 },
  { label: 'Bishop', value: 36 },
  { label: 'Bishop (F)', value: 37 },
  { label: 'Thief', value: 38 },
  { label: 'Manakete', value: 39 },
  { label: 'Manakete (F)', value: 40 },
  { label: 'Ballistician', value: 41 },
  { label: 'Chameleon', value: 42 },
  { label: 'Soldier', value: 43 },
  { label: 'Magic Dragon', value: 44 },
  { label: 'Earth Dragon', value: 45 },
  { label: 'Fire Dragon', value: 46 },
  { label: 'Divine Dragon', value: 47 },
  { label: 'Dismounted Knight', value: 48 },
  { label: 'Dismounted Knight (F)', value: 49 },
  { label: 'Empty (?)', value: 50 },
  { label: 'Entry 51', value: 51 },
];

export const MovementTypes = [
  { label: '- Default/Lord', value: 0 },
  { label: '- Knight', value: 1 },
  { label: '- General', value: 2 },
  { label: '- Cavalier', value: 3 },
  { label: '- Paladin', value: 4 },
  { label: '- Merc/Myrm', value: 5 },
  { label: '- Hero/Swdmaster', value: 6 },
  { label: '- Fighter', value: 7 },
  { label: '- Warrior', value: 8 },
  { label: '- Pirate', value: 9 },
  { label: '- Berserker', value: 10 },
  { label: '- Thief', value: 11 },
  { label: '- Archer/Dismounted Knight', value: 12 },
  { label: '- Sniper/Dismounted Knight (F)', value: 13 },
  { label: '- Hunter', value: 14 },
  { label: '- Horsemen', value: 15 },
  { label: '- Chameleon', value: 16 },
  { label: '- Manakete', value: 17 },
  { label: '- Magic Users', value: 18 },
  { label: '- Unused', value: 19 },
  { label: '- Promoted Magic Users', value: 20 },
  { label: '- Flying', value: 21 },
  { label: '- Magic Dragon', value: 22 },
  { label: '- Soldier', value: 23 },
  { label: '- Ballistician', value: 24 },
];

export const WeaponUsage = [
  { label: 'None/Blank', value: 0x00 },
  { label: 'Special', value: 0x02 },
  { label: 'Normal', value: 0x03 },
  { label: 'Dragonstone', value: 0x05 },
];

export const WeaponLevels = [
  { label: 'None', value: 0x00 },
  { label: 'E', value: 0x01 },
  { label: 'D', value: 0x1F },
  { label: 'C', value: 0x4C },
  { label: 'B', value: 0x88 },
  { label: 'A', value: 0xC4 },
];

export const ReclassSets = [
  { label: 'No Reclass', value: 0x00 },
  { label: 'Set 1 (M)', value: 0x01 },
  { label: 'Set 2 (M2)', value: 0x02 },
  { label: 'Set 3 (F)', value: 0x03 },
  { label: 'Set 4 (M-Pro)', value: 0x04 },
  { label: 'Set 5 (M-Pro 2)', value: 0x05 },
  { label: 'Set 6 (F-Pro)', value: 0x06 },
];

export const UnitTypes = [
  { label: 'Normal', value: 0x00 },
  { label: 'Armor', value: 0x04 },
  { label: 'Ballistician', value: 0x08 },
  { label: 'Mounted', value: 0x10 },
  { label: 'Flying', value: 0x20 },
  { label: 'Manakete', value: 0x40 },
  { label: 'Dragon', value: 0x41 },
  { label: 'Dragon (Earth)', value: 0x42 },
  { label: 'Archer', value: 0x80 },
];

export const Gender = [
  { label: 'Male', value: 0 },
  { label: 'Female', value: 1 },
];

export const Experience = [
  { label: 'Unpromoted', value: 0x00 },
  { label: 'Unpromoted + Boost', value: 0x04 },
  { label: 'Promoted', value: 0x08 },
];

export const ClassAbilities = [
  { label: 'None', value: 0x00 },
  { label: 'Swordmaster +8% Crit', value: 0x02 },
  { label: 'Sniper +11% Crit', value: 0x05 },
  { label: 'Berserker +10% Hit', value: 0x08 },
  { label: 'Unlock Ability?', value: 0x10 },
  { label: 'Unknown', value: 0x20 },
  { label: 'Special Ability Flag?', value: 0x40 },
  { label: 'Unknown', value: 0x7F },
];
