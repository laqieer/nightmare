"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[55998],{4220:function(l,e,a){a.d(e,{Z:function(){return f}});var u=a(1413),v=a(29439),b=a(44925),x=a(97788),n=a(83099),t=a(21951),r=a(72791),o=a(11087),i=a(83282),s=a(80184),c=["isHex","reference","view","name","offset","type","options"],d=x.Z.Text;function f(l){var e=l.isHex,a=l.reference,x=l.view,f=l.name,p=l.offset,C=l.type,E=l.options,B=(0,b.Z)(l,c),D=null==x?0:(0,i.ij)(x,p,C),m=(0,r.useState)(D),h=(0,v.Z)(m,2),A=h[0],S=h[1];A!==D&&S(D);var g=E.find((function(l){return l.value===A})),y=e?"0x".concat(A.toString(16)):A,F=void 0===g?y:g.label;return(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(d,{disabled:null==x,children:"".concat(f,":").concat(null==x?"":" ".concat(F," \u2192"))}),(0,s.jsx)(t.Z,(0,u.Z)({disabled:null==x,showSearch:!0,options:E,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(l,e){return e.label.includes(l)},onSelect:function(l){(0,i.cW)(x,p,C,l),S(l)}},B)),""===a||null==x?"":(0,s.jsx)(o.rU,{to:{pathname:"../".concat(a,"?id=").concat(A),state:x.buffer},children:"\u27a4"})]})}f.defaultProps={view:null,isHex:!1,reference:""}},23145:function(l,e,a){a.d(e,{Z:function(){return s}});var u=a(1413),v=a(29439),b=a(97788),x=a(83099),n=a(49389),t=a(72791),r=a(83282),o=a(80184),i=b.Z.Text;function s(l){var e=(0,t.useState)(""),a=(0,v.Z)(e,2),b=a[0],s=a[1],c=l.view,d=l.name,f=l.offset,p=l.type,C=null==c?0:(0,r.ij)(c,f,p),E=(0,t.useState)(C),B=(0,v.Z)(E,2),D=B[0],m=B[1];return D!==C&&m(C),(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(i,{disabled:null==c,children:"".concat(d,":").concat(null==c?"":" 0x".concat(D.toString(16)," \u2192"))}),(0,o.jsx)(n.Z,(0,u.Z)({disabled:null==c,allowClear:!0,maxLength:2*r.Tz[p],prefix:"0x",value:b,onChange:function(l){var e=l.currentTarget.value;(/^[0-9a-f]+$/.test(e)||""===e)&&s(e)},onPressEnter:function(l){var e=parseInt(l.target.value,16);(0,r.cW)(c,f,p,e),m(e)}},l))]})}s.defaultProps={view:null}},9933:function(l,e,a){a.d(e,{Z:function(){return x}});var u=a(1413),v=a(21951),b=(a(72791),a(80184));function x(l){return(0,b.jsx)(v.Z,(0,u.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(l,e){return e.label.includes(l)}},l))}},55998:function(l,e,a){a.r(e),a.d(e,{default:function(){return B}});var u=a(29439),v=(a(72791),a(57689)),b=a(11087),x=a(83099),n=a(33441),t=a(43292),r=a(79042),o=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7}],i=[{label:"0x00",value:0},{label:"Unsure If Correct",value:1},{label:"0x02",value:2},{label:"0x03",value:3},{label:"0x04",value:4},{label:"Throne?",value:5},{label:"House?",value:6},{label:"Chest",value:7},{label:"Door",value:8},{label:"0x09",value:9},{label:"Shops?",value:10},{label:"Unsure If Correct",value:11},{label:"0x0C",value:12},{label:"0x0D",value:13},{label:"0x0E",value:14},{label:"0x0F",value:15},{label:"0x10",value:16},{label:"0x11",value:17},{label:"0x12",value:18},{label:"0x13",value:19},{label:"0x14",value:20},{label:"0x15",value:21},{label:"0x16",value:22},{label:"0x17",value:23},{label:"0x18",value:24},{label:"0x19",value:25},{label:"0x1A",value:26},{label:"0x1B",value:27},{label:"0x1C",value:28},{label:"0x1D",value:29},{label:"0x1E",value:30},{label:"0x1F",value:31},{label:"0x20",value:32},{label:"0x21",value:33},{label:"0x22",value:34},{label:"0x23",value:35},{label:"0x24",value:36},{label:"0x25",value:37},{label:"0x26",value:38},{label:"0x27",value:39},{label:"0x28",value:40},{label:"0x29",value:41},{label:"0x2A",value:42},{label:"0x2B",value:43},{label:"0x2C",value:44},{label:"0x2D",value:45},{label:"0x2E",value:46},{label:"0x2F",value:47},{label:"0x30",value:48},{label:"0x31",value:49},{label:"0x32",value:50},{label:"0x33",value:51},{label:"0x34",value:52},{label:"0x35",value:53},{label:"0x36",value:54},{label:"0x37",value:55},{label:"0x38",value:56},{label:"0x39",value:57},{label:"0x3A",value:58},{label:"0x3B",value:59},{label:"0x3C",value:60},{label:"0x3D",value:61},{label:"0x3E",value:62},{label:"0x3F",value:63},{label:"0x40",value:64},{label:"0x41",value:65},{label:"0x42",value:66},{label:"0x43",value:67},{label:"0x44",value:68},{label:"0x45",value:69},{label:"0x46",value:70},{label:"0x47",value:71},{label:"0x48",value:72},{label:"0x49",value:73},{label:"0x4A",value:74},{label:"0x4B",value:75},{label:"0x4C",value:76},{label:"0x4D",value:77},{label:"0x4E",value:78},{label:"0x4F",value:79},{label:"0x50",value:80},{label:"0x51",value:81},{label:"0x52",value:82},{label:"0x53",value:83},{label:"0x54",value:84},{label:"0x55",value:85},{label:"0x56",value:86},{label:"0x57",value:87},{label:"0x58",value:88},{label:"0x59",value:89},{label:"0x5A",value:90},{label:"0x5B",value:91},{label:"0x5C",value:92},{label:"0x5D",value:93},{label:"0x5E",value:94},{label:"0x5F",value:95},{label:"0x60",value:96},{label:"0x61",value:97},{label:"0x62",value:98},{label:"0x63",value:99},{label:"0x64",value:100},{label:"0x65",value:101},{label:"0x66",value:102},{label:"0x67",value:103},{label:"0x68",value:104},{label:"0x69",value:105},{label:"0x6A",value:106},{label:"0x6B",value:107},{label:"0x6C",value:108},{label:"0x6D",value:109},{label:"0x6E",value:110},{label:"0x6F",value:111},{label:"0x70",value:112},{label:"0x71",value:113},{label:"0x72",value:114},{label:"0x73",value:115},{label:"0x74",value:116},{label:"0x75",value:117},{label:"0x76",value:118},{label:"0x77",value:119},{label:"0x78",value:120},{label:"0x79",value:121},{label:"0x7A",value:122},{label:"0x7B",value:123},{label:"0x7C",value:124},{label:"0x7D",value:125},{label:"0x7E",value:126},{label:"0x7F",value:127},{label:"0x80",value:128},{label:"0x81",value:129},{label:"0x82",value:130},{label:"0x83",value:131},{label:"0x84",value:132},{label:"0x85",value:133},{label:"0x86",value:134},{label:"0x87",value:135},{label:"0x88",value:136},{label:"0x89",value:137},{label:"0x8A",value:138},{label:"0x8B",value:139},{label:"0x8C",value:140},{label:"0x8D",value:141},{label:"0x8E",value:142},{label:"0x8F",value:143},{label:"0x90",value:144},{label:"0x91",value:145},{label:"0x92",value:146},{label:"0x93",value:147},{label:"0x94",value:148},{label:"0x95",value:149},{label:"0x96",value:150},{label:"0x97",value:151},{label:"0x98",value:152},{label:"0x99",value:153},{label:"0x9A",value:154},{label:"0x9B",value:155},{label:"0x9C",value:156},{label:"0x9D",value:157},{label:"0x9E",value:158},{label:"0x9F",value:159},{label:"0xA0",value:160},{label:"0xA1",value:161},{label:"0xA2",value:162},{label:"0xA3",value:163},{label:"0xA4",value:164},{label:"0xA5",value:165},{label:"0xA6",value:166},{label:"0xA7",value:167},{label:"0xA8",value:168},{label:"0xA9",value:169},{label:"0xAA",value:170},{label:"0xAB",value:171},{label:"0xAC",value:172},{label:"0xAD",value:173},{label:"0xAE",value:174},{label:"0xAF",value:175},{label:"0xB0",value:176},{label:"0xB1",value:177},{label:"0xB2",value:178},{label:"0xB3",value:179},{label:"0xB4",value:180},{label:"0xB5",value:181},{label:"0xB6",value:182},{label:"0xB7",value:183},{label:"0xB8",value:184},{label:"0xB9",value:185},{label:"0xBA",value:186},{label:"0xBB",value:187},{label:"0xBC",value:188},{label:"0xBD",value:189},{label:"0xBE",value:190},{label:"0xBF",value:191},{label:"0xC0",value:192},{label:"0xC1",value:193},{label:"0xC2",value:194},{label:"0xC3",value:195},{label:"0xC4",value:196},{label:"0xC5",value:197},{label:"0xC6",value:198},{label:"0xC7",value:199},{label:"0xC8",value:200},{label:"0xC9",value:201},{label:"0xCA",value:202},{label:"0xCB",value:203},{label:"0xCC",value:204},{label:"0xCD",value:205},{label:"0xCE",value:206},{label:"0xCF",value:207},{label:"0xD0",value:208},{label:"0xD1",value:209},{label:"0xD2",value:210},{label:"0xD3",value:211},{label:"0xD4",value:212},{label:"0xD5",value:213},{label:"0xD6",value:214},{label:"0xD7",value:215},{label:"0xD8",value:216},{label:"0xD9",value:217},{label:"0xDA",value:218},{label:"0xDB",value:219},{label:"0xDC",value:220},{label:"0xDD",value:221},{label:"0xDE",value:222},{label:"0xDF",value:223},{label:"0xE0",value:224},{label:"0xE1",value:225},{label:"0xE2",value:226},{label:"0xE3",value:227},{label:"0xE4",value:228},{label:"0xE5",value:229},{label:"0xE6",value:230},{label:"0xE7",value:231},{label:"0xE8",value:232},{label:"0xE9",value:233},{label:"0xEA",value:234},{label:"0xEB",value:235},{label:"0xEC",value:236},{label:"0xED",value:237},{label:"0xEE",value:238},{label:"0xEF",value:239},{label:"0xF0",value:240},{label:"0xF1",value:241},{label:"0xF2",value:242},{label:"0xF3",value:243},{label:"0xF4",value:244},{label:"0xF5",value:245},{label:"0xF6",value:246},{label:"0xF7",value:247},{label:"0xF8",value:248},{label:"0xF9",value:249},{label:"0xFA",value:250},{label:"0xFB",value:251},{label:"0xFC",value:252},{label:"0xFD",value:253},{label:"0xFE",value:254},{label:"0xFF",value:255}],s=[{label:"Nothing",value:0},{label:"Iron Sword",value:1},{label:"Thin Sword",value:2},{label:"Steel Sword",value:3},{label:"Silver Sword",value:4},{label:"Iron Blade",value:5},{label:"Steel Blade",value:6},{label:"Silver Blade",value:7},{label:"Poison Sword",value:8},{label:"Rapier",value:9},{label:"Mani Katti (DUMMY)",value:10},{label:"Hero Sword",value:11},{label:"Shamshir",value:12},{label:"Killer Sword",value:13},{label:"Armour Killer",value:14},{label:"Dragon Killer",value:15},{label:"Light Sword",value:16},{label:"Rune Sword",value:17},{label:"Lancebuster",value:18},{label:"Long Sword",value:19},{label:"Iron Spear",value:20},{label:"Thin Spear",value:21},{label:"Steel Spear",value:22},{label:"Silver Spear",value:23},{label:"Poison Spear",value:24},{label:"Hero Spear",value:25},{label:"Killer Spear",value:26},{label:"Horse Killer",value:27},{label:"Javelin",value:28},{label:"Slender Spear",value:29},{label:"Axebuster",value:30},{label:"Iron Axe",value:31},{label:"Steel Axe",value:32},{label:"Silver Axe",value:33},{label:"Poison Axe",value:34},{label:"Hero Axe",value:35},{label:"Killer Axe",value:36},{label:"Halberd",value:37},{label:"Hammer",value:38},{label:"Devil Axe",value:39},{label:"Hand Axe",value:40},{label:"Tomahawk",value:41},{label:"Swordbuster",value:42},{label:"Swordkiller",value:43},{label:"Trainee Axe",value:44},{label:"Iron Bow",value:45},{label:"Steel Bow",value:46},{label:"Silver Bow",value:47},{label:"Poison Bow",value:48},{label:"Killer Bow",value:49},{label:"Hero Bow",value:50},{label:"Short Bow",value:51},{label:"Long Bow",value:52},{label:"Iron Ballista",value:53},{label:"Killer Ballista",value:54},{label:"Ballista",value:55},{label:"Fire",value:56},{label:"Thunder",value:57},{label:"Elfire",value:58},{label:"Thunderstorm",value:59},{label:"Fimbulvetr",value:60},{label:"Forblaze (DUMMY)",value:61},{label:"Excalibur",value:62},{label:"Lightning",value:63},{label:"Shine",value:64},{label:"Divine",value:65},{label:"Purge",value:66},{label:"Aura",value:67},{label:"Luce (DUMMY)",value:68},{label:"Flux",value:69},{label:"Luna",value:70},{label:"Nosferatu",value:71},{label:"Eclipse",value:72},{label:"Fenrir",value:73},{label:"Gleipnir",value:74},{label:"Live",value:75},{label:"Relive",value:76},{label:"Recover",value:77},{label:"Libro",value:78},{label:"Reserve",value:79},{label:"Rest",value:80},{label:"Silence",value:81},{label:"Sleep",value:82},{label:"Berserk",value:83},{label:"Warp",value:84},{label:"Rescue",value:85},{label:"Torch",value:86},{label:"Hammerne",value:87},{label:"Unlock",value:88},{label:"Magic Shield",value:89},{label:"Dragon Axe",value:90},{label:"Angelic Robe",value:91},{label:"Energy Ring",value:92},{label:"Secret Book",value:93},{label:"Speedwings",value:94},{label:"Goddess Icon",value:95},{label:"Dragonshield",value:96},{label:"Talisman",value:97},{label:"Boots",value:98},{label:"Body Ring",value:99},{label:"Hero's Proof",value:100},{label:"Knight's Proof",value:101},{label:"Orion's Bolt",value:102},{label:"Elysian Whip",value:103},{label:"Guiding Ring",value:104},{label:"Chest Key",value:105},{label:"Door Key",value:106},{label:"Thief Key",value:107},{label:"Vulnerary",value:108},{label:"Elixir",value:109},{label:"Holy Water",value:110},{label:"Antidote",value:111},{label:"Torch",value:112},{label:"Free Shield",value:113},{label:"Member Card",value:114},{label:"Silver Card",value:115},{label:"White Gem",value:116},{label:"Blue Gem",value:117},{label:"Red Gem",value:118},{label:"1G",value:119},{label:"Reginleif",value:120},{label:"Chest Key (5)",value:121},{label:"Mine (DUMMY)",value:122},{label:"Light Rune (DUMMY)",value:123},{label:"Hopron Shield",value:124},{label:"Filla's Might (DUMMY)",value:125},{label:"Ninis's Grace (DUMMY)",value:126},{label:"Thor's Ire (DUMMY)",value:127},{label:"Set's Litany (DUMMY)",value:128},{label:"Shadow Killer",value:129},{label:"Bright Lance",value:130},{label:"Fiend Cleaver",value:131},{label:"Beacon Bow",value:132},{label:"Sieglind",value:133},{label:"Battle Axe",value:134},{label:"Ivaldi",value:135},{label:"Master Proof",value:136},{label:"Metis's Tome",value:137},{label:"Heaven Seal (DUMMY)",value:138},{label:"Sharp Claw",value:139},{label:"Latona",value:140},{label:"Dragon Spear",value:141},{label:"Vidofnir",value:142},{label:"Naglfal",value:143},{label:"Decaying Breath",value:144},{label:"Audomra",value:145},{label:"Siegmund",value:146},{label:"Garm",value:147},{label:"Nidhogg",value:148},{label:"Heavy Spear",value:149},{label:"Short Spear",value:150},{label:"Conqueror's Proof",value:151},{label:"Moon Bracelet",value:152},{label:"Sun Bracelet",value:153},{label:"1G",value:154},{label:"5G",value:155},{label:"10G",value:156},{label:"50G",value:157},{label:"100G",value:158},{label:"3000G",value:159},{label:"5000G",value:160},{label:"Wind Sword",value:161},{label:"Vulnerary",value:162},{label:"Vulnerary (green note)",value:163},{label:"Vulnerary (red note)",value:164},{label:"Dance",value:165},{label:"Nightmare",value:166},{label:"Demon Shard",value:167},{label:"Demon Light",value:168},{label:"Ravager",value:169},{label:"Holy Dragon Stone",value:170},{label:"Demon Surge",value:171},{label:"Shadowshot",value:172},{label:"Rotten Claw",value:173},{label:"Fetid Claw",value:174},{label:"Poison Claw",value:175},{label:"Long Poison Claw",value:176},{label:"Fire Fang",value:177},{label:"Hell Fang",value:178},{label:"Evil Eye",value:179},{label:"Bloody Eye",value:180},{label:"Stone",value:181},{label:"Aircalibur",value:182},{label:"Juna Fruit",value:183},{label:"150G",value:184},{label:"200G",value:185},{label:"Black Gem",value:186},{label:"Gold Gem",value:187},{label:"-",value:188},{label:"-",value:189},{label:"-",value:190},{label:"-",value:191},{label:"-",value:192},{label:"-",value:193},{label:"-",value:194},{label:"-",value:195},{label:"-",value:196},{label:"-",value:197},{label:"-",value:198},{label:"-",value:199},{label:"-",value:200},{label:"-",value:201},{label:"-",value:202},{label:"-",value:203},{label:"-",value:204},{label:"-",value:205},{label:"-",value:206},{label:"-",value:207},{label:"-",value:208},{label:"-",value:209},{label:"-",value:210},{label:"-",value:211},{label:"-",value:212},{label:"-",value:213},{label:"-",value:214},{label:"-",value:215},{label:"-",value:216},{label:"-",value:217},{label:"-",value:218},{label:"-",value:219},{label:"-",value:220},{label:"-",value:221},{label:"-",value:222},{label:"-",value:223},{label:"-",value:224},{label:"-",value:225},{label:"-",value:226},{label:"-",value:227},{label:"-",value:228},{label:"-",value:229},{label:"-",value:230},{label:"-",value:231},{label:"-",value:232},{label:"-",value:233},{label:"-",value:234},{label:"-",value:235},{label:"-",value:236},{label:"-",value:237},{label:"-",value:238},{label:"-",value:239},{label:"-",value:240},{label:"-",value:241},{label:"-",value:242},{label:"-",value:243},{label:"-",value:244},{label:"-",value:245},{label:"-",value:246},{label:"-",value:247},{label:"-",value:248},{label:"-",value:249},{label:"-",value:250},{label:"-",value:251},{label:"-",value:252},{label:"-",value:253},{label:"-",value:254},{label:"-",value:255}],c=[{label:"0x00",value:0},{label:"0x01",value:1},{label:"0x02",value:2},{label:"0x03",value:3},{label:"0x04",value:4},{label:"0x05",value:5},{label:"0x06",value:6},{label:"0x07",value:7},{label:"0x08",value:8},{label:"0x09",value:9},{label:"0x0A",value:10},{label:"0x0B",value:11},{label:"0x0C",value:12},{label:"0x0D",value:13},{label:"0x0E",value:14},{label:"???",value:15},{label:"House",value:16},{label:"Throne",value:17},{label:"Door",value:18},{label:"0x13",value:19},{label:"Chest",value:20},{label:"0x15",value:21},{label:"Armoury",value:22},{label:"Vendor",value:23},{label:"Secret Shop",value:24},{label:"0x19",value:25},{label:"0x1A",value:26},{label:"0x1B",value:27},{label:"0x1C",value:28},{label:"???",value:29},{label:"0x1E",value:30},{label:"0x1F",value:31},{label:"Top of House",value:32},{label:"0x21",value:33},{label:"0x22",value:34},{label:"0x23",value:35},{label:"0x24",value:36},{label:"0x25",value:37},{label:"0x26",value:38},{label:"0x27",value:39},{label:"0x28",value:40},{label:"0x29",value:41},{label:"0x2A",value:42},{label:"0x2B",value:43},{label:"0x2C",value:44},{label:"0x2D",value:45},{label:"0x2E",value:46},{label:"0x2F",value:47},{label:"0x30",value:48},{label:"0x31",value:49},{label:"0x32",value:50},{label:"0x33",value:51},{label:"0x34",value:52},{label:"0x35",value:53},{label:"0x36",value:54},{label:"0x37",value:55},{label:"0x38",value:56},{label:"0x39",value:57},{label:"0x3A",value:58},{label:"0x3B",value:59},{label:"0x3C",value:60},{label:"0x3D",value:61},{label:"0x3E",value:62},{label:"0x3F",value:63},{label:"0x40",value:64},{label:"0x41",value:65},{label:"0x42",value:66},{label:"0x43",value:67},{label:"0x44",value:68},{label:"0x45",value:69},{label:"0x46",value:70},{label:"0x47",value:71},{label:"0x48",value:72},{label:"0x49",value:73},{label:"0x4A",value:74},{label:"0x4B",value:75},{label:"0x4C",value:76},{label:"0x4D",value:77},{label:"0x4E",value:78},{label:"0x4F",value:79},{label:"0x50",value:80},{label:"0x51",value:81},{label:"0x52",value:82},{label:"0x53",value:83},{label:"0x54",value:84},{label:"0x55",value:85},{label:"0x56",value:86},{label:"0x57",value:87},{label:"0x58",value:88},{label:"0x59",value:89},{label:"0x5A",value:90},{label:"0x5B",value:91},{label:"0x5C",value:92},{label:"0x5D",value:93},{label:"0x5E",value:94},{label:"0x5F",value:95},{label:"0x60",value:96},{label:"0x61",value:97},{label:"0x62",value:98},{label:"0x63",value:99},{label:"0x64",value:100},{label:"0x65",value:101},{label:"0x66",value:102},{label:"0x67",value:103},{label:"0x68",value:104},{label:"0x69",value:105},{label:"0x6A",value:106},{label:"0x6B",value:107},{label:"0x6C",value:108},{label:"0x6D",value:109},{label:"0x6E",value:110},{label:"0x6F",value:111},{label:"0x70",value:112},{label:"0x71",value:113},{label:"0x72",value:114},{label:"0x73",value:115},{label:"0x74",value:116},{label:"0x75",value:117},{label:"0x76",value:118},{label:"0x77",value:119},{label:"0x78",value:120},{label:"0x79",value:121},{label:"0x7A",value:122},{label:"0x7B",value:123},{label:"0x7C",value:124},{label:"0x7D",value:125},{label:"0x7E",value:126},{label:"0x7F",value:127},{label:"0x80",value:128},{label:"0x81",value:129},{label:"0x82",value:130},{label:"0x83",value:131},{label:"0x84",value:132},{label:"0x85",value:133},{label:"0x86",value:134},{label:"0x87",value:135},{label:"0x88",value:136},{label:"0x89",value:137},{label:"0x8A",value:138},{label:"0x8B",value:139},{label:"0x8C",value:140},{label:"0x8D",value:141},{label:"0x8E",value:142},{label:"0x8F",value:143},{label:"0x90",value:144},{label:"0x91",value:145},{label:"0x92",value:146},{label:"0x93",value:147},{label:"0x94",value:148},{label:"0x95",value:149},{label:"0x96",value:150},{label:"0x97",value:151},{label:"0x98",value:152},{label:"0x99",value:153},{label:"0x9A",value:154},{label:"0x9B",value:155},{label:"0x9C",value:156},{label:"0x9D",value:157},{label:"0x9E",value:158},{label:"0x9F",value:159},{label:"0xA0",value:160},{label:"0xA1",value:161},{label:"0xA2",value:162},{label:"0xA3",value:163},{label:"0xA4",value:164},{label:"0xA5",value:165},{label:"0xA6",value:166},{label:"0xA7",value:167},{label:"0xA8",value:168},{label:"0xA9",value:169},{label:"0xAA",value:170},{label:"0xAB",value:171},{label:"0xAC",value:172},{label:"0xAD",value:173},{label:"0xAE",value:174},{label:"0xAF",value:175},{label:"0xB0",value:176},{label:"0xB1",value:177},{label:"0xB2",value:178},{label:"0xB3",value:179},{label:"0xB4",value:180},{label:"0xB5",value:181},{label:"0xB6",value:182},{label:"0xB7",value:183},{label:"0xB8",value:184},{label:"0xB9",value:185},{label:"0xBA",value:186},{label:"0xBB",value:187},{label:"0xBC",value:188},{label:"0xBD",value:189},{label:"0xBE",value:190},{label:"0xBF",value:191},{label:"0xC0",value:192},{label:"0xC1",value:193},{label:"0xC2",value:194},{label:"0xC3",value:195},{label:"0xC4",value:196},{label:"0xC5",value:197},{label:"0xC6",value:198},{label:"0xC7",value:199},{label:"0xC8",value:200},{label:"0xC9",value:201},{label:"0xCA",value:202},{label:"0xCB",value:203},{label:"0xCC",value:204},{label:"0xCD",value:205},{label:"0xCE",value:206},{label:"0xCF",value:207},{label:"0xD0",value:208},{label:"0xD1",value:209},{label:"0xD2",value:210},{label:"0xD3",value:211},{label:"0xD4",value:212},{label:"0xD5",value:213},{label:"0xD6",value:214},{label:"0xD7",value:215},{label:"0xD8",value:216},{label:"0xD9",value:217},{label:"0xDA",value:218},{label:"0xDB",value:219},{label:"0xDC",value:220},{label:"0xDD",value:221},{label:"0xDE",value:222},{label:"0xDF",value:223},{label:"0xE0",value:224},{label:"0xE1",value:225},{label:"0xE2",value:226},{label:"0xE3",value:227},{label:"0xE4",value:228},{label:"0xE5",value:229},{label:"0xE6",value:230},{label:"0xE7",value:231},{label:"0xE8",value:232},{label:"0xE9",value:233},{label:"0xEA",value:234},{label:"0xEB",value:235},{label:"0xEC",value:236},{label:"0xED",value:237},{label:"0xEE",value:238},{label:"0xEF",value:239},{label:"0xF0",value:240},{label:"0xF1",value:241},{label:"0xF2",value:242},{label:"0xF3",value:243},{label:"0xF4",value:244},{label:"0xF5",value:245},{label:"0xF6",value:246},{label:"0xF7",value:247},{label:"0xF8",value:248},{label:"0xF9",value:249},{label:"0xFA",value:250},{label:"0xFB",value:251},{label:"0xFC",value:252},{label:"0xFD",value:253},{label:"0xFE",value:254},{label:"0xFF",value:255}],d=a(83282),f=a(9933),p=a(4220),C=a(23145),E=a(80184);function B(){var l,e=(0,v.bx)(),a=(0,u.Z)(e,1)[0],B=(0,b.lr)(),D=(0,u.Z)(B,2),m=D[0],h=D[1],A=m.get("id"),S=null;try{S=new DataView(a,10394236+12*A,12)}catch(g){S=null}return(0,E.jsxs)(x.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,E.jsx)(n.Z,{message:"FE8 Ch 16A Chest Editor",type:"info"}),(0,E.jsx)("div",{children:(0,E.jsx)(f.Z,{disabled:null==S,defaultValue:null!==(l=o.find((function(l){return l.value.toString()===A})))&&void 0!==l?l:A,onSelect:function(l){return h({id:l})},options:o})},A),(0,E.jsx)(p.Z,{isHex:!0,type:d.g.U8,options:i,view:S,name:"Type?",offset:0}),(0,E.jsx)(C.Z,{type:d.g.U8,view:S,name:"UNKNOWN",offset:2}),(0,E.jsx)(p.Z,{isHex:!0,type:d.g.U8,reference:"ItemEditor",options:s,view:S,name:"Content/Last Pointer Piece",offset:4}),(0,E.jsx)(C.Z,{type:d.g.U32,view:S,name:"Rest of Pointer (if any)",offset:5}),(0,E.jsx)(C.Z,{type:d.g.U8,view:S,name:"X Coordinate",offset:8}),(0,E.jsx)(C.Z,{type:d.g.U8,view:S,name:"Y Coordinate",offset:9}),(0,E.jsx)(p.Z,{isHex:!0,type:d.g.U8,options:c,view:S,name:"Type",offset:10}),(0,E.jsx)(t.Z,{children:(0,E.jsx)(r.Z,{})})]})}},49389:function(l,e,a){a.d(e,{Z:function(){return T}});var u=a(87462),v=a(4942),b=a(81694),x=a.n(b),n=a(72791),t=a(71929),r=a(91940),o=function(l){var e,a=(0,n.useContext)(t.E_),b=a.getPrefixCls,o=a.direction,i=l.prefixCls,s=l.className,c=void 0===s?"":s,d=b("input-group",i),f=x()(d,(e={},(0,v.Z)(e,"".concat(d,"-lg"),"large"===l.size),(0,v.Z)(e,"".concat(d,"-sm"),"small"===l.size),(0,v.Z)(e,"".concat(d,"-compact"),l.compact),(0,v.Z)(e,"".concat(d,"-rtl"),"rtl"===o),e),c),p=(0,n.useContext)(r.aM),C=(0,n.useMemo)((function(){return(0,u.Z)((0,u.Z)({},p),{isFormItemInput:!1})}),[p]);return n.createElement("span",{className:f,style:l.style,onMouseEnter:l.onMouseEnter,onMouseLeave:l.onMouseLeave,onFocus:l.onFocus,onBlur:l.onBlur},n.createElement(r.aM.Provider,{value:C},l.children))},i=a(45394),s=a(29439),c=a(1413),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},f=a(54291),p=function(l,e){return n.createElement(f.Z,(0,c.Z)((0,c.Z)({},l),{},{ref:e,icon:d}))};p.displayName="EyeInvisibleOutlined";var C=n.forwardRef(p),E=a(24215),B=a(41818),D=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a},m=function(l){return l?n.createElement(E.Z,null):n.createElement(C,null)},h={click:"onClick",hover:"onMouseOver"};var A=n.forwardRef((function(l,e){var a=(0,n.useState)(!1),b=(0,s.Z)(a,2),r=b[0],o=b[1],c=function(){l.disabled||o((function(l){return!l}))},d=function(a){var b=a.getPrefixCls,t=l.className,o=l.prefixCls,s=l.inputPrefixCls,d=l.size,f=l.visibilityToggle,p=void 0===f||f,C=D(l,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),E=b("input",s),A=b("input-password",o),S=p&&function(e){var a,u=l.action,b=void 0===u?"click":u,x=l.iconRender,t=h[b]||"",o=(void 0===x?m:x)(r),i=(a={},(0,v.Z)(a,t,c),(0,v.Z)(a,"className","".concat(e,"-icon")),(0,v.Z)(a,"key","passwordIcon"),(0,v.Z)(a,"onMouseDown",(function(l){l.preventDefault()})),(0,v.Z)(a,"onMouseUp",(function(l){l.preventDefault()})),a);return n.cloneElement(n.isValidElement(o)?o:n.createElement("span",null,o),i)}(A),g=x()(A,t,(0,v.Z)({},"".concat(A,"-").concat(d),!!d)),y=(0,u.Z)((0,u.Z)({},(0,B.Z)(C,["suffix","iconRender"])),{type:r?"text":"password",className:g,prefixCls:E,suffix:S});return d&&(y.size=d),n.createElement(i.ZP,(0,u.Z)({ref:e},y))};return n.createElement(t.C,null,d)})),S=a(11730),g=a(88834),y=a(30435),F=a(1815),w=a(61113),Z=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a};var M=n.forwardRef((function(l,e){var a,b,r=l.prefixCls,o=l.inputPrefixCls,s=l.className,c=l.size,d=l.suffix,f=l.enterButton,p=void 0!==f&&f,C=l.addonAfter,E=l.loading,B=l.disabled,D=l.onSearch,m=l.onChange,h=l.onCompositionStart,A=l.onCompositionEnd,M=Z(l,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),P=n.useContext(t.E_),j=P.getPrefixCls,T=P.direction,H=n.useContext(F.Z),L=n.useRef(!1),O=c||H,R=n.useRef(null),U=function(l){var e;document.activeElement===(null===(e=R.current)||void 0===e?void 0:e.input)&&l.preventDefault()},N=function(l){var e,a;D&&D(null===(a=null===(e=R.current)||void 0===e?void 0:e.input)||void 0===a?void 0:a.value,l)},G=j("input-search",r),k=j("input",o),I="boolean"===typeof p?n.createElement(S.Z,null):null,z="".concat(G,"-button"),K=p||{},Y=K.type&&!0===K.type.__ANT_BUTTON;b=Y||"button"===K.type?(0,w.Tm)(K,(0,u.Z)({onMouseDown:U,onClick:function(l){var e,a;null===(a=null===(e=null===K||void 0===K?void 0:K.props)||void 0===e?void 0:e.onClick)||void 0===a||a.call(e,l),N(l)},key:"enterButton"},Y?{className:z,size:O}:{})):n.createElement(y.Z,{className:z,type:p?"primary":void 0,size:O,disabled:B,key:"enterButton",onMouseDown:U,onClick:N,loading:E,icon:I},p),C&&(b=[b,(0,w.Tm)(C,{key:"addonAfter"})]);var V=x()(G,(a={},(0,v.Z)(a,"".concat(G,"-rtl"),"rtl"===T),(0,v.Z)(a,"".concat(G,"-").concat(O),!!O),(0,v.Z)(a,"".concat(G,"-with-button"),!!p),a),s);return n.createElement(i.ZP,(0,u.Z)({ref:(0,g.sQ)(R,e),onPressEnter:function(l){L.current||N(l)}},M,{size:O,onCompositionStart:function(l){L.current=!0,null===h||void 0===h||h(l)},onCompositionEnd:function(l){L.current=!1,null===A||void 0===A||A(l)},prefixCls:k,addonAfter:b,suffix:d,onChange:function(l){l&&l.target&&"click"===l.type&&D&&D(l.target.value,l),m&&m(l)},className:V,disabled:B}))})),P=a(66920),j=i.ZP;j.Group=o,j.Search=M,j.TextArea=P.Z,j.Password=A;var T=j}}]);
//# sourceMappingURL=55998.f9b17737.chunk.js.map