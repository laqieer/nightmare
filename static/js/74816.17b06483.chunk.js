"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[74816],{53551:(l,e,a)=>{a.d(e,{A:()=>d});var u=a(89379),v=a(53986),b=a(17313),x=a(64435),n=a(41976),t=a(65043),r=a(35475),o=a(64004),i=a(70579);const s=["isHex","reference","view","name","offset","type","options"],{Text:c}=b.A;function d(l){const{isHex:e,reference:a,view:b,name:d,offset:A,type:f,options:p}=l,E=(0,v.A)(l,s),C=null==b?0:(0,o.LF)(b,A,f),[y,B]=(0,t.useState)(C);y!==C&&B(C);const D=p.find((l=>l.value===y)),m=e?"0x".concat(y.toString(16)):y,h=void 0===D?m:D.label;return(0,i.jsxs)(x.A,{children:[(0,i.jsx)(c,{disabled:null==b,children:"".concat(d,":").concat(null==b?"":" ".concat(h," \u2192"))}),(0,i.jsx)(n.A,(0,u.A)({disabled:null==b,showSearch:!0,options:p,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l),onSelect:l=>{(0,o.M9)(b,A,f,l),B(l)}},E)),""===a||null==b?"":(0,i.jsx)(r.N_,{to:{pathname:"../".concat(a,"?id=").concat(y),state:b.buffer},children:"\u27a4"})]})}d.defaultProps={view:null,isHex:!1,reference:""}},90514:(l,e,a)=>{a.d(e,{A:()=>i});var u=a(89379),v=a(17313),b=a(64435),x=a(33307),n=a(65043),t=a(64004),r=a(70579);const{Text:o}=v.A;function i(l){const[e,a]=(0,n.useState)(""),{view:v,name:i,offset:s,type:c}=l,d=null==v?0:(0,t.LF)(v,s,c),[A,f]=(0,n.useState)(d);return A!==d&&f(d),(0,r.jsxs)(b.A,{children:[(0,r.jsx)(o,{disabled:null==v,children:"".concat(i,":").concat(null==v?"":" 0x".concat(A.toString(16)," \u2192"))}),(0,r.jsx)(x.A,(0,u.A)({disabled:null==v,allowClear:!0,maxLength:2*t.X1[c],prefix:"0x",value:e,onChange:l=>{const e=l.currentTarget.value;(/^[0-9a-f]+$/.test(e)||""===e)&&a(e)},onPressEnter:l=>{const e=parseInt(l.target.value,16);(0,t.M9)(v,s,c,e),f(e)}},l))]})}i.defaultProps={view:null}},34871:(l,e,a)=>{a.d(e,{A:()=>x});var u=a(89379),v=a(41976),b=(a(65043),a(70579));function x(l){return(0,b.jsx)(v.A,(0,u.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l)},l))}},74816:(l,e,a)=>{a.r(e),a.d(e,{default:()=>E});a(65043);var u=a(73216),v=a(35475),b=a(64435),x=a(92135),n=a(33275),t=a(46974);const r=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8},{label:"Entry 9",value:9},{label:"Entry 10",value:10},{label:"Entry 11",value:11},{label:"Entry 12",value:12},{label:"Entry 13",value:13},{label:"Entry 14",value:14},{label:"Entry 15",value:15},{label:"Entry 16",value:16},{label:"Entry 17",value:17},{label:"Entry 18",value:18},{label:"Entry 19",value:19},{label:"Entry 20",value:20},{label:"Entry 21",value:21},{label:"Entry 22",value:22},{label:"Entry 23",value:23},{label:"Entry 24",value:24},{label:"Entry 25",value:25},{label:"Entry 26",value:26},{label:"Entry 27",value:27},{label:"Entry 28",value:28},{label:"Entry 29",value:29},{label:"Entry 30",value:30}],o=[{label:"0x00",value:0},{label:"Unsure If Correct",value:1},{label:"0x02",value:2},{label:"0x03",value:3},{label:"0x04",value:4},{label:"Throne?",value:5},{label:"House?",value:6},{label:"Chest",value:7},{label:"Door",value:8},{label:"0x09",value:9},{label:"Shops?",value:10},{label:"Unsure If Correct",value:11},{label:"0x0C",value:12},{label:"0x0D",value:13},{label:"0x0E",value:14},{label:"0x0F",value:15},{label:"0x10",value:16},{label:"0x11",value:17},{label:"0x12",value:18},{label:"0x13",value:19},{label:"0x14",value:20},{label:"0x15",value:21},{label:"0x16",value:22},{label:"0x17",value:23},{label:"0x18",value:24},{label:"0x19",value:25},{label:"0x1A",value:26},{label:"0x1B",value:27},{label:"0x1C",value:28},{label:"0x1D",value:29},{label:"0x1E",value:30},{label:"0x1F",value:31},{label:"0x20",value:32},{label:"0x21",value:33},{label:"0x22",value:34},{label:"0x23",value:35},{label:"0x24",value:36},{label:"0x25",value:37},{label:"0x26",value:38},{label:"0x27",value:39},{label:"0x28",value:40},{label:"0x29",value:41},{label:"0x2A",value:42},{label:"0x2B",value:43},{label:"0x2C",value:44},{label:"0x2D",value:45},{label:"0x2E",value:46},{label:"0x2F",value:47},{label:"0x30",value:48},{label:"0x31",value:49},{label:"0x32",value:50},{label:"0x33",value:51},{label:"0x34",value:52},{label:"0x35",value:53},{label:"0x36",value:54},{label:"0x37",value:55},{label:"0x38",value:56},{label:"0x39",value:57},{label:"0x3A",value:58},{label:"0x3B",value:59},{label:"0x3C",value:60},{label:"0x3D",value:61},{label:"0x3E",value:62},{label:"0x3F",value:63},{label:"0x40",value:64},{label:"0x41",value:65},{label:"0x42",value:66},{label:"0x43",value:67},{label:"0x44",value:68},{label:"0x45",value:69},{label:"0x46",value:70},{label:"0x47",value:71},{label:"0x48",value:72},{label:"0x49",value:73},{label:"0x4A",value:74},{label:"0x4B",value:75},{label:"0x4C",value:76},{label:"0x4D",value:77},{label:"0x4E",value:78},{label:"0x4F",value:79},{label:"0x50",value:80},{label:"0x51",value:81},{label:"0x52",value:82},{label:"0x53",value:83},{label:"0x54",value:84},{label:"0x55",value:85},{label:"0x56",value:86},{label:"0x57",value:87},{label:"0x58",value:88},{label:"0x59",value:89},{label:"0x5A",value:90},{label:"0x5B",value:91},{label:"0x5C",value:92},{label:"0x5D",value:93},{label:"0x5E",value:94},{label:"0x5F",value:95},{label:"0x60",value:96},{label:"0x61",value:97},{label:"0x62",value:98},{label:"0x63",value:99},{label:"0x64",value:100},{label:"0x65",value:101},{label:"0x66",value:102},{label:"0x67",value:103},{label:"0x68",value:104},{label:"0x69",value:105},{label:"0x6A",value:106},{label:"0x6B",value:107},{label:"0x6C",value:108},{label:"0x6D",value:109},{label:"0x6E",value:110},{label:"0x6F",value:111},{label:"0x70",value:112},{label:"0x71",value:113},{label:"0x72",value:114},{label:"0x73",value:115},{label:"0x74",value:116},{label:"0x75",value:117},{label:"0x76",value:118},{label:"0x77",value:119},{label:"0x78",value:120},{label:"0x79",value:121},{label:"0x7A",value:122},{label:"0x7B",value:123},{label:"0x7C",value:124},{label:"0x7D",value:125},{label:"0x7E",value:126},{label:"0x7F",value:127},{label:"0x80",value:128},{label:"0x81",value:129},{label:"0x82",value:130},{label:"0x83",value:131},{label:"0x84",value:132},{label:"0x85",value:133},{label:"0x86",value:134},{label:"0x87",value:135},{label:"0x88",value:136},{label:"0x89",value:137},{label:"0x8A",value:138},{label:"0x8B",value:139},{label:"0x8C",value:140},{label:"0x8D",value:141},{label:"0x8E",value:142},{label:"0x8F",value:143},{label:"0x90",value:144},{label:"0x91",value:145},{label:"0x92",value:146},{label:"0x93",value:147},{label:"0x94",value:148},{label:"0x95",value:149},{label:"0x96",value:150},{label:"0x97",value:151},{label:"0x98",value:152},{label:"0x99",value:153},{label:"0x9A",value:154},{label:"0x9B",value:155},{label:"0x9C",value:156},{label:"0x9D",value:157},{label:"0x9E",value:158},{label:"0x9F",value:159},{label:"0xA0",value:160},{label:"0xA1",value:161},{label:"0xA2",value:162},{label:"0xA3",value:163},{label:"0xA4",value:164},{label:"0xA5",value:165},{label:"0xA6",value:166},{label:"0xA7",value:167},{label:"0xA8",value:168},{label:"0xA9",value:169},{label:"0xAA",value:170},{label:"0xAB",value:171},{label:"0xAC",value:172},{label:"0xAD",value:173},{label:"0xAE",value:174},{label:"0xAF",value:175},{label:"0xB0",value:176},{label:"0xB1",value:177},{label:"0xB2",value:178},{label:"0xB3",value:179},{label:"0xB4",value:180},{label:"0xB5",value:181},{label:"0xB6",value:182},{label:"0xB7",value:183},{label:"0xB8",value:184},{label:"0xB9",value:185},{label:"0xBA",value:186},{label:"0xBB",value:187},{label:"0xBC",value:188},{label:"0xBD",value:189},{label:"0xBE",value:190},{label:"0xBF",value:191},{label:"0xC0",value:192},{label:"0xC1",value:193},{label:"0xC2",value:194},{label:"0xC3",value:195},{label:"0xC4",value:196},{label:"0xC5",value:197},{label:"0xC6",value:198},{label:"0xC7",value:199},{label:"0xC8",value:200},{label:"0xC9",value:201},{label:"0xCA",value:202},{label:"0xCB",value:203},{label:"0xCC",value:204},{label:"0xCD",value:205},{label:"0xCE",value:206},{label:"0xCF",value:207},{label:"0xD0",value:208},{label:"0xD1",value:209},{label:"0xD2",value:210},{label:"0xD3",value:211},{label:"0xD4",value:212},{label:"0xD5",value:213},{label:"0xD6",value:214},{label:"0xD7",value:215},{label:"0xD8",value:216},{label:"0xD9",value:217},{label:"0xDA",value:218},{label:"0xDB",value:219},{label:"0xDC",value:220},{label:"0xDD",value:221},{label:"0xDE",value:222},{label:"0xDF",value:223},{label:"0xE0",value:224},{label:"0xE1",value:225},{label:"0xE2",value:226},{label:"0xE3",value:227},{label:"0xE4",value:228},{label:"0xE5",value:229},{label:"0xE6",value:230},{label:"0xE7",value:231},{label:"0xE8",value:232},{label:"0xE9",value:233},{label:"0xEA",value:234},{label:"0xEB",value:235},{label:"0xEC",value:236},{label:"0xED",value:237},{label:"0xEE",value:238},{label:"0xEF",value:239},{label:"0xF0",value:240},{label:"0xF1",value:241},{label:"0xF2",value:242},{label:"0xF3",value:243},{label:"0xF4",value:244},{label:"0xF5",value:245},{label:"0xF6",value:246},{label:"0xF7",value:247},{label:"0xF8",value:248},{label:"0xF9",value:249},{label:"0xFA",value:250},{label:"0xFB",value:251},{label:"0xFC",value:252},{label:"0xFD",value:253},{label:"0xFE",value:254},{label:"0xFF",value:255}],i=[{label:"Nothing",value:0},{label:"Iron Sword",value:1},{label:"Thin Sword",value:2},{label:"Steel Sword",value:3},{label:"Silver Sword",value:4},{label:"Iron Blade",value:5},{label:"Steel Blade",value:6},{label:"Silver Blade",value:7},{label:"Poison Sword",value:8},{label:"Rapier",value:9},{label:"Mani Katti (DUMMY)",value:10},{label:"Hero Sword",value:11},{label:"Shamshir",value:12},{label:"Killer Sword",value:13},{label:"Armour Killer",value:14},{label:"Dragon Killer",value:15},{label:"Light Sword",value:16},{label:"Rune Sword",value:17},{label:"Lancebuster",value:18},{label:"Long Sword",value:19},{label:"Iron Spear",value:20},{label:"Thin Spear",value:21},{label:"Steel Spear",value:22},{label:"Silver Spear",value:23},{label:"Poison Spear",value:24},{label:"Hero Spear",value:25},{label:"Killer Spear",value:26},{label:"Horse Killer",value:27},{label:"Javelin",value:28},{label:"Slender Spear",value:29},{label:"Axebuster",value:30},{label:"Iron Axe",value:31},{label:"Steel Axe",value:32},{label:"Silver Axe",value:33},{label:"Poison Axe",value:34},{label:"Hero Axe",value:35},{label:"Killer Axe",value:36},{label:"Halberd",value:37},{label:"Hammer",value:38},{label:"Devil Axe",value:39},{label:"Hand Axe",value:40},{label:"Tomahawk",value:41},{label:"Swordbuster",value:42},{label:"Swordkiller",value:43},{label:"Trainee Axe",value:44},{label:"Iron Bow",value:45},{label:"Steel Bow",value:46},{label:"Silver Bow",value:47},{label:"Poison Bow",value:48},{label:"Killer Bow",value:49},{label:"Hero Bow",value:50},{label:"Short Bow",value:51},{label:"Long Bow",value:52},{label:"Iron Ballista",value:53},{label:"Killer Ballista",value:54},{label:"Ballista",value:55},{label:"Fire",value:56},{label:"Thunder",value:57},{label:"Elfire",value:58},{label:"Thunderstorm",value:59},{label:"Fimbulvetr",value:60},{label:"Forblaze (DUMMY)",value:61},{label:"Excalibur",value:62},{label:"Lightning",value:63},{label:"Shine",value:64},{label:"Divine",value:65},{label:"Purge",value:66},{label:"Aura",value:67},{label:"Luce (DUMMY)",value:68},{label:"Flux",value:69},{label:"Luna",value:70},{label:"Nosferatu",value:71},{label:"Eclipse",value:72},{label:"Fenrir",value:73},{label:"Gleipnir",value:74},{label:"Live",value:75},{label:"Relive",value:76},{label:"Recover",value:77},{label:"Libro",value:78},{label:"Reserve",value:79},{label:"Rest",value:80},{label:"Silence",value:81},{label:"Sleep",value:82},{label:"Berserk",value:83},{label:"Warp",value:84},{label:"Rescue",value:85},{label:"Torch",value:86},{label:"Hammerne",value:87},{label:"Unlock",value:88},{label:"Magic Shield",value:89},{label:"Dragon Axe",value:90},{label:"Angelic Robe",value:91},{label:"Energy Ring",value:92},{label:"Secret Book",value:93},{label:"Speedwings",value:94},{label:"Goddess Icon",value:95},{label:"Dragonshield",value:96},{label:"Talisman",value:97},{label:"Boots",value:98},{label:"Body Ring",value:99},{label:"Hero's Proof",value:100},{label:"Knight's Proof",value:101},{label:"Orion's Bolt",value:102},{label:"Elysian Whip",value:103},{label:"Guiding Ring",value:104},{label:"Chest Key",value:105},{label:"Door Key",value:106},{label:"Thief Key",value:107},{label:"Vulnerary",value:108},{label:"Elixir",value:109},{label:"Holy Water",value:110},{label:"Antidote",value:111},{label:"Torch",value:112},{label:"Free Shield",value:113},{label:"Member Card",value:114},{label:"Silver Card",value:115},{label:"White Gem",value:116},{label:"Blue Gem",value:117},{label:"Red Gem",value:118},{label:"1G",value:119},{label:"Reginleif",value:120},{label:"Chest Key (5)",value:121},{label:"Mine (DUMMY)",value:122},{label:"Light Rune (DUMMY)",value:123},{label:"Hopron Shield",value:124},{label:"Filla's Might (DUMMY)",value:125},{label:"Ninis's Grace (DUMMY)",value:126},{label:"Thor's Ire (DUMMY)",value:127},{label:"Set's Litany (DUMMY)",value:128},{label:"Shadow Killer",value:129},{label:"Bright Lance",value:130},{label:"Fiend Cleaver",value:131},{label:"Beacon Bow",value:132},{label:"Sieglind",value:133},{label:"Battle Axe",value:134},{label:"Ivaldi",value:135},{label:"Master Proof",value:136},{label:"Metis's Tome",value:137},{label:"Heaven Seal (DUMMY)",value:138},{label:"Sharp Claw",value:139},{label:"Latona",value:140},{label:"Dragon Spear",value:141},{label:"Vidofnir",value:142},{label:"Naglfal",value:143},{label:"Decaying Breath",value:144},{label:"Audomra",value:145},{label:"Siegmund",value:146},{label:"Garm",value:147},{label:"Nidhogg",value:148},{label:"Heavy Spear",value:149},{label:"Short Spear",value:150},{label:"Conqueror's Proof",value:151},{label:"Moon Bracelet",value:152},{label:"Sun Bracelet",value:153},{label:"1G",value:154},{label:"5G",value:155},{label:"10G",value:156},{label:"50G",value:157},{label:"100G",value:158},{label:"3000G",value:159},{label:"5000G",value:160},{label:"Wind Sword",value:161},{label:"Vulnerary",value:162},{label:"Vulnerary (green note)",value:163},{label:"Vulnerary (red note)",value:164},{label:"Dance",value:165},{label:"Nightmare",value:166},{label:"Demon Shard",value:167},{label:"Demon Light",value:168},{label:"Ravager",value:169},{label:"Holy Dragon Stone",value:170},{label:"Demon Surge",value:171},{label:"Shadowshot",value:172},{label:"Rotten Claw",value:173},{label:"Fetid Claw",value:174},{label:"Poison Claw",value:175},{label:"Long Poison Claw",value:176},{label:"Fire Fang",value:177},{label:"Hell Fang",value:178},{label:"Evil Eye",value:179},{label:"Bloody Eye",value:180},{label:"Stone",value:181},{label:"Aircalibur",value:182},{label:"Juna Fruit",value:183},{label:"150G",value:184},{label:"200G",value:185},{label:"Black Gem",value:186},{label:"Gold Gem",value:187},{label:"-",value:188},{label:"-",value:189},{label:"-",value:190},{label:"-",value:191},{label:"-",value:192},{label:"-",value:193},{label:"-",value:194},{label:"-",value:195},{label:"-",value:196},{label:"-",value:197},{label:"-",value:198},{label:"-",value:199},{label:"-",value:200},{label:"-",value:201},{label:"-",value:202},{label:"-",value:203},{label:"-",value:204},{label:"-",value:205},{label:"-",value:206},{label:"-",value:207},{label:"-",value:208},{label:"-",value:209},{label:"-",value:210},{label:"-",value:211},{label:"-",value:212},{label:"-",value:213},{label:"-",value:214},{label:"-",value:215},{label:"-",value:216},{label:"-",value:217},{label:"-",value:218},{label:"-",value:219},{label:"-",value:220},{label:"-",value:221},{label:"-",value:222},{label:"-",value:223},{label:"-",value:224},{label:"-",value:225},{label:"-",value:226},{label:"-",value:227},{label:"-",value:228},{label:"-",value:229},{label:"-",value:230},{label:"-",value:231},{label:"-",value:232},{label:"-",value:233},{label:"-",value:234},{label:"-",value:235},{label:"-",value:236},{label:"-",value:237},{label:"-",value:238},{label:"-",value:239},{label:"-",value:240},{label:"-",value:241},{label:"-",value:242},{label:"-",value:243},{label:"-",value:244},{label:"-",value:245},{label:"-",value:246},{label:"-",value:247},{label:"-",value:248},{label:"-",value:249},{label:"-",value:250},{label:"-",value:251},{label:"-",value:252},{label:"-",value:253},{label:"-",value:254},{label:"-",value:255}],s=[{label:"0x00",value:0},{label:"0x01",value:1},{label:"0x02",value:2},{label:"0x03",value:3},{label:"0x04",value:4},{label:"0x05",value:5},{label:"0x06",value:6},{label:"0x07",value:7},{label:"0x08",value:8},{label:"0x09",value:9},{label:"0x0A",value:10},{label:"0x0B",value:11},{label:"0x0C",value:12},{label:"0x0D",value:13},{label:"0x0E",value:14},{label:"???",value:15},{label:"House",value:16},{label:"Throne",value:17},{label:"Door",value:18},{label:"0x13",value:19},{label:"Chest",value:20},{label:"0x15",value:21},{label:"Armoury",value:22},{label:"Vendor",value:23},{label:"Secret Shop",value:24},{label:"0x19",value:25},{label:"0x1A",value:26},{label:"0x1B",value:27},{label:"0x1C",value:28},{label:"???",value:29},{label:"0x1E",value:30},{label:"0x1F",value:31},{label:"Top of House",value:32},{label:"0x21",value:33},{label:"0x22",value:34},{label:"0x23",value:35},{label:"0x24",value:36},{label:"0x25",value:37},{label:"0x26",value:38},{label:"0x27",value:39},{label:"0x28",value:40},{label:"0x29",value:41},{label:"0x2A",value:42},{label:"0x2B",value:43},{label:"0x2C",value:44},{label:"0x2D",value:45},{label:"0x2E",value:46},{label:"0x2F",value:47},{label:"0x30",value:48},{label:"0x31",value:49},{label:"0x32",value:50},{label:"0x33",value:51},{label:"0x34",value:52},{label:"0x35",value:53},{label:"0x36",value:54},{label:"0x37",value:55},{label:"0x38",value:56},{label:"0x39",value:57},{label:"0x3A",value:58},{label:"0x3B",value:59},{label:"0x3C",value:60},{label:"0x3D",value:61},{label:"0x3E",value:62},{label:"0x3F",value:63},{label:"0x40",value:64},{label:"0x41",value:65},{label:"0x42",value:66},{label:"0x43",value:67},{label:"0x44",value:68},{label:"0x45",value:69},{label:"0x46",value:70},{label:"0x47",value:71},{label:"0x48",value:72},{label:"0x49",value:73},{label:"0x4A",value:74},{label:"0x4B",value:75},{label:"0x4C",value:76},{label:"0x4D",value:77},{label:"0x4E",value:78},{label:"0x4F",value:79},{label:"0x50",value:80},{label:"0x51",value:81},{label:"0x52",value:82},{label:"0x53",value:83},{label:"0x54",value:84},{label:"0x55",value:85},{label:"0x56",value:86},{label:"0x57",value:87},{label:"0x58",value:88},{label:"0x59",value:89},{label:"0x5A",value:90},{label:"0x5B",value:91},{label:"0x5C",value:92},{label:"0x5D",value:93},{label:"0x5E",value:94},{label:"0x5F",value:95},{label:"0x60",value:96},{label:"0x61",value:97},{label:"0x62",value:98},{label:"0x63",value:99},{label:"0x64",value:100},{label:"0x65",value:101},{label:"0x66",value:102},{label:"0x67",value:103},{label:"0x68",value:104},{label:"0x69",value:105},{label:"0x6A",value:106},{label:"0x6B",value:107},{label:"0x6C",value:108},{label:"0x6D",value:109},{label:"0x6E",value:110},{label:"0x6F",value:111},{label:"0x70",value:112},{label:"0x71",value:113},{label:"0x72",value:114},{label:"0x73",value:115},{label:"0x74",value:116},{label:"0x75",value:117},{label:"0x76",value:118},{label:"0x77",value:119},{label:"0x78",value:120},{label:"0x79",value:121},{label:"0x7A",value:122},{label:"0x7B",value:123},{label:"0x7C",value:124},{label:"0x7D",value:125},{label:"0x7E",value:126},{label:"0x7F",value:127},{label:"0x80",value:128},{label:"0x81",value:129},{label:"0x82",value:130},{label:"0x83",value:131},{label:"0x84",value:132},{label:"0x85",value:133},{label:"0x86",value:134},{label:"0x87",value:135},{label:"0x88",value:136},{label:"0x89",value:137},{label:"0x8A",value:138},{label:"0x8B",value:139},{label:"0x8C",value:140},{label:"0x8D",value:141},{label:"0x8E",value:142},{label:"0x8F",value:143},{label:"0x90",value:144},{label:"0x91",value:145},{label:"0x92",value:146},{label:"0x93",value:147},{label:"0x94",value:148},{label:"0x95",value:149},{label:"0x96",value:150},{label:"0x97",value:151},{label:"0x98",value:152},{label:"0x99",value:153},{label:"0x9A",value:154},{label:"0x9B",value:155},{label:"0x9C",value:156},{label:"0x9D",value:157},{label:"0x9E",value:158},{label:"0x9F",value:159},{label:"0xA0",value:160},{label:"0xA1",value:161},{label:"0xA2",value:162},{label:"0xA3",value:163},{label:"0xA4",value:164},{label:"0xA5",value:165},{label:"0xA6",value:166},{label:"0xA7",value:167},{label:"0xA8",value:168},{label:"0xA9",value:169},{label:"0xAA",value:170},{label:"0xAB",value:171},{label:"0xAC",value:172},{label:"0xAD",value:173},{label:"0xAE",value:174},{label:"0xAF",value:175},{label:"0xB0",value:176},{label:"0xB1",value:177},{label:"0xB2",value:178},{label:"0xB3",value:179},{label:"0xB4",value:180},{label:"0xB5",value:181},{label:"0xB6",value:182},{label:"0xB7",value:183},{label:"0xB8",value:184},{label:"0xB9",value:185},{label:"0xBA",value:186},{label:"0xBB",value:187},{label:"0xBC",value:188},{label:"0xBD",value:189},{label:"0xBE",value:190},{label:"0xBF",value:191},{label:"0xC0",value:192},{label:"0xC1",value:193},{label:"0xC2",value:194},{label:"0xC3",value:195},{label:"0xC4",value:196},{label:"0xC5",value:197},{label:"0xC6",value:198},{label:"0xC7",value:199},{label:"0xC8",value:200},{label:"0xC9",value:201},{label:"0xCA",value:202},{label:"0xCB",value:203},{label:"0xCC",value:204},{label:"0xCD",value:205},{label:"0xCE",value:206},{label:"0xCF",value:207},{label:"0xD0",value:208},{label:"0xD1",value:209},{label:"0xD2",value:210},{label:"0xD3",value:211},{label:"0xD4",value:212},{label:"0xD5",value:213},{label:"0xD6",value:214},{label:"0xD7",value:215},{label:"0xD8",value:216},{label:"0xD9",value:217},{label:"0xDA",value:218},{label:"0xDB",value:219},{label:"0xDC",value:220},{label:"0xDD",value:221},{label:"0xDE",value:222},{label:"0xDF",value:223},{label:"0xE0",value:224},{label:"0xE1",value:225},{label:"0xE2",value:226},{label:"0xE3",value:227},{label:"0xE4",value:228},{label:"0xE5",value:229},{label:"0xE6",value:230},{label:"0xE7",value:231},{label:"0xE8",value:232},{label:"0xE9",value:233},{label:"0xEA",value:234},{label:"0xEB",value:235},{label:"0xEC",value:236},{label:"0xED",value:237},{label:"0xEE",value:238},{label:"0xEF",value:239},{label:"0xF0",value:240},{label:"0xF1",value:241},{label:"0xF2",value:242},{label:"0xF3",value:243},{label:"0xF4",value:244},{label:"0xF5",value:245},{label:"0xF6",value:246},{label:"0xF7",value:247},{label:"0xF8",value:248},{label:"0xF9",value:249},{label:"0xFA",value:250},{label:"0xFB",value:251},{label:"0xFC",value:252},{label:"0xFD",value:253},{label:"0xFE",value:254},{label:"0xFF",value:255}];var c=a(64004),d=a(34871),A=a(53551),f=a(90514),p=a(70579);function E(){var l;const[e]=(0,u.KC)(),[a,E]=(0,v.ok)(),C=a.get("id");let y=null;try{y=new DataView(e,10397980+12*C,12)}catch(B){y=null}return(0,p.jsxs)(b.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,p.jsx)(x.A,{message:"FE8 Ch 14B Chest Editor",type:"info"}),(0,p.jsx)("div",{children:(0,p.jsx)(d.A,{disabled:null==y,defaultValue:null!==(l=r.find((l=>l.value.toString()===C)))&&void 0!==l?l:C,onSelect:l=>E({id:l}),options:r})},C),(0,p.jsx)(A.A,{isHex:!0,type:c.pe.U8,options:o,view:y,name:"Type?",offset:0}),(0,p.jsx)(f.A,{type:c.pe.U8,view:y,name:"UNKNOWN",offset:2}),(0,p.jsx)(A.A,{isHex:!0,type:c.pe.U8,reference:"ItemEditor",options:i,view:y,name:"Content/Last Pointer Piece",offset:4}),(0,p.jsx)(f.A,{type:c.pe.U32,view:y,name:"Rest of Pointer (if any)",offset:5}),(0,p.jsx)(f.A,{type:c.pe.U8,view:y,name:"X Coordinate",offset:8}),(0,p.jsx)(f.A,{type:c.pe.U8,view:y,name:"Y Coordinate",offset:9}),(0,p.jsx)(A.A,{isHex:!0,type:c.pe.U8,options:s,view:y,name:"Type",offset:10}),(0,p.jsx)(n.A,{children:(0,p.jsx)(t.A,{})})]})}},33307:(l,e,a)=>{a.d(e,{A:()=>L});var u=a(58168),v=a(64467),b=a(64600),x=a.n(b),n=a(65043),t=a(35296),r=a(16436);const o=function(l){var e,a=(0,n.useContext)(t.QO),b=a.getPrefixCls,o=a.direction,i=l.prefixCls,s=l.className,c=void 0===s?"":s,d=b("input-group",i),A=x()(d,(e={},(0,v.A)(e,"".concat(d,"-lg"),"large"===l.size),(0,v.A)(e,"".concat(d,"-sm"),"small"===l.size),(0,v.A)(e,"".concat(d,"-compact"),l.compact),(0,v.A)(e,"".concat(d,"-rtl"),"rtl"===o),e),c),f=(0,n.useContext)(r.$W),p=(0,n.useMemo)((function(){return(0,u.A)((0,u.A)({},f),{isFormItemInput:!1})}),[f]);return n.createElement("span",{className:A,style:l.style,onMouseEnter:l.onMouseEnter,onMouseLeave:l.onMouseLeave,onFocus:l.onFocus,onBlur:l.onBlur},n.createElement(r.$W.Provider,{value:p},l.children))};var i=a(28124),s=a(5544),c=a(89379);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var A=a(22172),f=function(l,e){return n.createElement(A.A,(0,c.A)((0,c.A)({},l),{},{ref:e,icon:d}))};f.displayName="EyeInvisibleOutlined";const p=n.forwardRef(f);var E=a(76191),C=a(18574),y=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a},B=function(l){return l?n.createElement(E.A,null):n.createElement(p,null)},D={click:"onClick",hover:"onMouseOver"};const m=n.forwardRef((function(l,e){var a=(0,n.useState)(!1),b=(0,s.A)(a,2),r=b[0],o=b[1],c=function(){l.disabled||o((function(l){return!l}))},d=function(a){var b=a.getPrefixCls,t=l.className,o=l.prefixCls,s=l.inputPrefixCls,d=l.size,A=l.visibilityToggle,f=void 0===A||A,p=y(l,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),E=b("input",s),m=b("input-password",o),h=f&&function(e){var a,u=l.action,b=void 0===u?"click":u,x=l.iconRender,t=D[b]||"",o=(void 0===x?B:x)(r),i=(a={},(0,v.A)(a,t,c),(0,v.A)(a,"className","".concat(e,"-icon")),(0,v.A)(a,"key","passwordIcon"),(0,v.A)(a,"onMouseDown",(function(l){l.preventDefault()})),(0,v.A)(a,"onMouseUp",(function(l){l.preventDefault()})),a);return n.cloneElement(n.isValidElement(o)?o:n.createElement("span",null,o),i)}(m),S=x()(m,t,(0,v.A)({},"".concat(m,"-").concat(d),!!d)),F=(0,u.A)((0,u.A)({},(0,C.A)(p,["suffix","iconRender"])),{type:r?"text":"password",className:S,prefixCls:E,suffix:h});return d&&(F.size=d),n.createElement(i.Ay,(0,u.A)({ref:e},F))};return n.createElement(t.TG,null,d)}));var h=a(62058),S=a(13758),F=a(11774),g=a(87063),w=a(12701),M=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a};const P=n.forwardRef((function(l,e){var a,b,r=l.prefixCls,o=l.inputPrefixCls,s=l.className,c=l.size,d=l.suffix,A=l.enterButton,f=void 0!==A&&A,p=l.addonAfter,E=l.loading,C=l.disabled,y=l.onSearch,B=l.onChange,D=l.onCompositionStart,m=l.onCompositionEnd,P=M(l,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),j=n.useContext(t.QO),O=j.getPrefixCls,L=j.direction,T=n.useContext(g.A),H=n.useRef(!1),N=c||T,R=n.useRef(null),G=function(l){var e;document.activeElement===(null===(e=R.current)||void 0===e?void 0:e.input)&&l.preventDefault()},U=function(l){var e,a;y&&y(null===(a=null===(e=R.current)||void 0===e?void 0:e.input)||void 0===a?void 0:a.value,l)},k=O("input-search",r),I=O("input",o),K="boolean"===typeof f?n.createElement(h.A,null):null,z="".concat(k,"-button"),Y=f||{},V=Y.type&&!0===Y.type.__ANT_BUTTON;b=V||"button"===Y.type?(0,w.Ob)(Y,(0,u.A)({onMouseDown:G,onClick:function(l){var e,a;null===(a=null===(e=null===Y||void 0===Y?void 0:Y.props)||void 0===e?void 0:e.onClick)||void 0===a||a.call(e,l),U(l)},key:"enterButton"},V?{className:z,size:N}:{})):n.createElement(F.A,{className:z,type:f?"primary":void 0,size:N,disabled:C,key:"enterButton",onMouseDown:G,onClick:U,loading:E,icon:K},f),p&&(b=[b,(0,w.Ob)(p,{key:"addonAfter"})]);var W=x()(k,(a={},(0,v.A)(a,"".concat(k,"-rtl"),"rtl"===L),(0,v.A)(a,"".concat(k,"-").concat(N),!!N),(0,v.A)(a,"".concat(k,"-with-button"),!!f),a),s);return n.createElement(i.Ay,(0,u.A)({ref:(0,S.K4)(R,e),onPressEnter:function(l){H.current||U(l)}},P,{size:N,onCompositionStart:function(l){H.current=!0,null===D||void 0===D||D(l)},onCompositionEnd:function(l){H.current=!1,null===m||void 0===m||m(l)},prefixCls:I,addonAfter:b,suffix:d,onChange:function(l){l&&l.target&&"click"===l.type&&y&&y(l.target.value,l),B&&B(l)},className:W,disabled:C}))}));var j=a(42471),O=i.Ay;O.Group=o,O.Search=P,O.TextArea=j.A,O.Password=m;const L=O}}]);
//# sourceMappingURL=74816.17b06483.chunk.js.map