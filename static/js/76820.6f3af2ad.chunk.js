"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[76820],{86357:(l,e,a)=>{a.d(e,{A:()=>s});var u=a(89379),v=a(17313),b=a(64435),n=a(3428),r=a(65043),t=a(64004),o=a(70579);const{Text:i}=v.A;function s(l){const{view:e,name:a,offset:v,type:s}=l,c=null==e?0:(0,t.LF)(e,v,s),[d,y]=(0,r.useState)(c);return d!==c&&y(c),(0,o.jsxs)(b.A,{children:[(0,o.jsx)(i,{disabled:null==e,children:"".concat(a,":").concat(null==e?"":" ".concat(d," \u2192"))}),(0,o.jsx)(n.A,(0,u.A)({disabled:null==e,min:t.Wb[s][0],max:t.Wb[s][1],onPressEnter:l=>{const a=parseInt(l.target.value,10);(0,t.M9)(e,v,s,a),y(a)}},l))]})}s.defaultProps={view:null}},53551:(l,e,a)=>{a.d(e,{A:()=>y});var u=a(89379),v=a(53986),b=a(17313),n=a(64435),r=a(41976),t=a(65043),o=a(35475),i=a(64004),s=a(70579);const c=["isHex","reference","view","name","offset","type","options"],{Text:d}=b.A;function y(l){const{isHex:e,reference:a,view:b,name:y,offset:E,type:m,options:f}=l,x=(0,v.A)(l,c),h=null==b?0:(0,i.LF)(b,E,m),[p,A]=(0,t.useState)(h);p!==h&&A(h);const g=f.find((l=>l.value===p)),B=e?"0x".concat(p.toString(16)):p,k=void 0===g?B:g.label;return(0,s.jsxs)(n.A,{children:[(0,s.jsx)(d,{disabled:null==b,children:"".concat(y,":").concat(null==b?"":" ".concat(k," \u2192"))}),(0,s.jsx)(r.A,(0,u.A)({disabled:null==b,showSearch:!0,options:f,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l),onSelect:l=>{(0,i.M9)(b,E,m,l),A(l)}},x)),""===a||null==b?"":(0,s.jsx)(o.N_,{to:{pathname:"../".concat(a,"?id=").concat(p),state:b.buffer},children:"\u27a4"})]})}y.defaultProps={view:null,isHex:!1,reference:""}},90514:(l,e,a)=>{a.d(e,{A:()=>s});var u=a(89379),v=a(17313),b=a(64435),n=a(33307),r=a(65043),t=a(64004),o=a(70579);const{Text:i}=v.A;function s(l){const[e,a]=(0,r.useState)(""),{view:v,name:s,offset:c,type:d}=l,y=null==v?0:(0,t.LF)(v,c,d),[E,m]=(0,r.useState)(y);return E!==y&&m(y),(0,o.jsxs)(b.A,{children:[(0,o.jsx)(i,{disabled:null==v,children:"".concat(s,":").concat(null==v?"":" 0x".concat(E.toString(16)," \u2192"))}),(0,o.jsx)(n.A,(0,u.A)({disabled:null==v,allowClear:!0,maxLength:2*t.X1[d],prefix:"0x",value:e,onChange:l=>{const e=l.currentTarget.value;(/^[0-9a-f]+$/.test(e)||""===e)&&a(e)},onPressEnter:l=>{const e=parseInt(l.target.value,16);(0,t.M9)(v,c,d,e),m(e)}},l))]})}s.defaultProps={view:null}},34871:(l,e,a)=>{a.d(e,{A:()=>n});var u=a(89379),v=a(41976),b=(a(65043),a(70579));function n(l){return(0,b.jsx)(v.A,(0,u.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l)},l))}},76820:(l,e,a)=>{a.r(e),a.d(e,{default:()=>A});a(65043);var u=a(73216),v=a(35475),b=a(64435),n=a(92135),r=a(33275),t=a(46974);const o=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8},{label:"Entry 9",value:9},{label:"Entry 10",value:10},{label:"Entry 11",value:11},{label:"Entry 12",value:12},{label:"Entry 13",value:13},{label:"Entry 14",value:14},{label:"Entry 15",value:15},{label:"Entry 16",value:16},{label:"Entry 17",value:17},{label:"Entry 18",value:18},{label:"Entry 19",value:19},{label:"Entry 20",value:20},{label:"Entry 21",value:21},{label:"Entry 22",value:22},{label:"Entry 23",value:23},{label:"Entry 24",value:24},{label:"Entry 25",value:25},{label:"Entry 26",value:26},{label:"Entry 27",value:27},{label:"Entry 28",value:28},{label:"Entry 29",value:29},{label:"Entry 30",value:30},{label:"Entry 31",value:31},{label:"Entry 32",value:32},{label:"Entry 33",value:33},{label:"Entry 34",value:34},{label:"Entry 35",value:35},{label:"Entry 36",value:36},{label:"Entry 37",value:37},{label:"Entry 38",value:38},{label:"Entry 39",value:39},{label:"Entry 40",value:40},{label:"Entry 41",value:41},{label:"Entry 42",value:42},{label:"Entry 43",value:43},{label:"Entry 44",value:44},{label:"Entry 45",value:45},{label:"Entry 46",value:46},{label:"Entry 47",value:47},{label:"Entry 48",value:48},{label:"Entry 49",value:49},{label:"Entry 50",value:50},{label:"Entry 51",value:51},{label:"Entry 52",value:52},{label:"Entry 53",value:53},{label:"Entry 54",value:54},{label:"Entry 55",value:55},{label:"Entry 56",value:56},{label:"Entry 57",value:57},{label:"Entry 58",value:58},{label:"Entry 59",value:59},{label:"Entry 60",value:60},{label:"Entry 61",value:61},{label:"Entry 62",value:62},{label:"Entry 63",value:63},{label:"Entry 64",value:64},{label:"Entry 65",value:65},{label:"Entry 66",value:66},{label:"Entry 67",value:67},{label:"Entry 68",value:68},{label:"Entry 69",value:69},{label:"Entry 70",value:70},{label:"Entry 71",value:71},{label:"Entry 72",value:72},{label:"Entry 73",value:73},{label:"Entry 74",value:74},{label:"Entry 75",value:75},{label:"Entry 76",value:76},{label:"Entry 77",value:77},{label:"Entry 78",value:78},{label:"Entry 79",value:79},{label:"Entry 80",value:80},{label:"Entry 81",value:81},{label:"Entry 82",value:82},{label:"Entry 83",value:83},{label:"Entry 84",value:84},{label:"Entry 85",value:85},{label:"Entry 86",value:86},{label:"Entry 87",value:87},{label:"Entry 88",value:88},{label:"Entry 89",value:89},{label:"Entry 90",value:90},{label:"Entry 91",value:91},{label:"Entry 92",value:92},{label:"Entry 93",value:93},{label:"Entry 94",value:94},{label:"Entry 95",value:95}],i=[{label:"Marth",value:0},{label:"Caeda",value:1},{label:"Jagen",value:2},{label:"Cain",value:3},{label:"Abel",value:4},{label:"Draug",value:5},{label:"Gordin",value:6},{label:"Rickard",value:7},{label:"Wrys (unused)",value:8},{label:"Bord",value:9},{label:"Cord",value:10},{label:"Barst",value:11},{label:"Castor",value:12},{label:"Ogma",value:13},{label:"Darros",value:14},{label:"Julian",value:15},{label:"Lena",value:16},{label:"Merric",value:17},{label:"Navarre",value:18},{label:"Hardin",value:19},{label:"Wolf",value:20},{label:"Sedgar",value:21},{label:"Roshea",value:22},{label:"Vyland",value:23},{label:"Bantu",value:24},{label:"Caesar",value:25},{label:"Radd",value:26},{label:"Midia",value:27},{label:"Catria",value:28},{label:"Maria",value:29},{label:"Minerva",value:30},{label:"Linde",value:31},{label:"Jeorge",value:32},{label:"Dolph",value:33},{label:"Macellan",value:34},{label:"Tomas",value:35},{label:"Boah",value:36},{label:"Arran",value:37},{label:"Samson",value:38},{label:"Beck",value:39},{label:"Xane",value:40},{label:"Wendell",value:41},{label:"Est",value:42},{label:"Astram",value:43},{label:"Matthis",value:44},{label:"Roger",value:45},{label:"Jake",value:46},{label:"Palla",value:47},{label:"Tiki",value:48},{label:"Lorenz",value:49},{label:"Elice",value:50},{label:"Gotoh",value:51},{label:"Rickard (Enemy)",value:52},{label:"Jeorge (Enemy)",value:53},{label:"Navarre (Enemy)",value:54},{label:"Matthis (Enemy)",value:55},{label:"Sheena (Enemy)",value:56},{label:"Samson (Enemy)",value:57},{label:"????",value:58},{label:"????",value:59},{label:"Minerva (Enemy)",value:60},{label:"????",value:61},{label:"Astram (Enemy)",value:62},{label:"Palla (Enemy)",value:63},{label:"????",value:64},{label:"Est (Enemy)",value:65},{label:"????",value:66},{label:"????",value:67},{label:"????",value:68},{label:"Enemy",value:69},{label:"Gharnef",value:70},{label:"Boss?",value:71},{label:"Boss?",value:72},{label:"Michalis",value:73},{label:"Boss?",value:74},{label:"Enemy",value:75},{label:"Enemy",value:76},{label:"Enemy",value:77},{label:"Enemy",value:78},{label:"Enemy",value:79},{label:"Enemy",value:80},{label:"Enemy",value:81},{label:"Enemy",value:82},{label:"Enemy",value:83},{label:"Enemy",value:84},{label:"Enemy",value:85},{label:"Enemy",value:86},{label:"Enemy",value:87},{label:"Enemy",value:88},{label:"Enemy",value:89},{label:"Boss?",value:90},{label:"Boss?",value:91},{label:"Enemy",value:92},{label:"Enemy",value:93},{label:"Enemy",value:94},{label:"Enemy",value:95},{label:"Enemy",value:96},{label:"Enemy",value:97},{label:"Enemy",value:98},{label:"Enemy",value:99},{label:"Enemy",value:100},{label:"Enemy",value:101},{label:"Enemy",value:102},{label:"Enemy",value:103},{label:"Enemy",value:104},{label:"Enemy",value:105},{label:"Enemy",value:106},{label:"Camus",value:107},{label:"Cecil",value:108},{label:"Luke",value:109},{label:"Roderick",value:110},{label:"Ryan",value:111},{label:"Warren",value:112},{label:"Enemy",value:113},{label:"Enemy",value:114},{label:"Yuliya",value:115},{label:"Jubelo",value:116},{label:"Sirius",value:117},{label:"Enemy",value:118},{label:"Marisha",value:119},{label:"Enemy",value:120},{label:"Samuel",value:121},{label:"Enemy",value:122},{label:"Phina",value:123},{label:"Enemy",value:124},{label:"Enemy",value:125},{label:"Enemy",value:126},{label:"Enemy",value:127},{label:"Sheena",value:128},{label:"Marth (Book 2)",value:129},{label:"Arran (Book 2)",value:130},{label:"Gordin (Book 2)",value:131},{label:"Draug (Book 2)",value:132},{label:"Linde (Book 2)",value:133},{label:"Matthis (Book 2)",value:134},{label:"Julian (Book 2)",value:135},{label:"Catria (Book 2)",value:136},{label:"Ogma (Book 2)",value:137},{label:"Castor (Book 2)",value:138},{label:"Rickard (Book 2)",value:139},{label:"Jeorge (Book 2)",value:140},{label:"Wendell (Book 2)",value:141},{label:"Navarre (Book 2)",value:142},{label:"Astram (Book 2)",value:143},{label:"Caeda (Book 2)",value:144},{label:"Cain (Book 2)",value:145},{label:"Bantu (Book 2)",value:146},{label:"????",value:147},{label:"Merric (Book 2)",value:148},{label:"Arlen",value:149},{label:"Minerva (Book 2)",value:150},{label:"Xane (Book 2)",value:151},{label:"Tiki (Book 2)",value:152},{label:"Abel (Book 2)",value:153},{label:"????",value:154},{label:"Samson (Book 2)",value:155},{label:"Enemy",value:156},{label:"Vyland (Book 2)",value:157},{label:"Roshea (Book 2)",value:158},{label:"Enemy",value:159},{label:"Medea (Book 2)",value:160},{label:"Enemy",value:161},{label:"Enemy",value:162},{label:"Enemy",value:163},{label:"Enemy",value:164},{label:"Enemy",value:165},{label:"Enemy",value:166},{label:"Nyna",value:167},{label:"Maria (Book 2)",value:168},{label:"Elice (Book 2)",value:169},{label:"Lena (Book 2)",value:170},{label:"Palla (Book 2)",value:171},{label:"stop",value:255}],s=[{label:"Lord",value:0},{label:"Fighter",value:1},{label:"Soldier",value:2},{label:"Cavalier",value:3},{label:"Paladin",value:4},{label:"Dismounted Knight (Male)",value:5},{label:"Dismounted Knight (Female)",value:6},{label:"Armor Knight",value:7},{label:"General",value:8},{label:"Pegasus Knight",value:9},{label:"Dracoknight",value:10},{label:"Hunter",value:11},{label:"Sniper",value:12},{label:"Archer",value:13},{label:"Horseman",value:14},{label:"Manakete (Male)",value:15},{label:"Fire Dragon",value:16},{label:"Mercenary",value:17},{label:"Hero",value:18},{label:"Thief",value:19},{label:"Commando",value:20},{label:"Dancer",value:21},{label:"Sister",value:22},{label:"Mage (Female)",value:23},{label:"Priest (Female)",value:24},{label:"Mage (Male)",value:25},{label:"Priest (Male)",value:26},{label:"Sage",value:27},{label:"Manakete (Female)",value:28},{label:"Bandit",value:29},{label:"Pirate",value:30},{label:"Barbarian",value:31},{label:"Berserker",value:32},{label:"Dark Knight",value:33},{label:"Dark Mage",value:34},{label:"Shooter",value:35},{label:"Emperor",value:36},{label:"Guardian",value:37},{label:"Ice Dragon",value:38},{label:"Sea Dragon",value:39},{label:"Flying Dragon",value:40},{label:"Earth Dragon",value:41},{label:"Dark Dragon",value:42},{label:"Divine Dragon",value:43},{label:"Demon Dragon",value:44}],c=[{label:"Marth",value:0},{label:"Caeda",value:1},{label:"Jagen",value:2},{label:"Cain",value:3},{label:"Abel",value:4},{label:"Draug",value:5},{label:"Gordin",value:6},{label:"Rickard",value:7},{label:"Wrys (leftover from fe1)",value:8},{label:"Bord",value:9},{label:"Cord",value:10},{label:"Barst",value:11},{label:"Castor",value:12},{label:"Ogma",value:13},{label:"Darros (leftover from fe1)",value:14},{label:"Julian",value:15},{label:"Lena",value:16},{label:"Merric",value:17},{label:"Navarre",value:18},{label:"Hardin",value:19},{label:"Wolf",value:20},{label:"Sedgar",value:21},{label:"Roshea",value:22},{label:"Vyland",value:23},{label:"Bantu",value:24},{label:"Caesar",value:25},{label:"Radd",value:26},{label:"Midia",value:27},{label:"Catria",value:28},{label:"Maria",value:29},{label:"Minerva",value:30},{label:"Linde",value:31},{label:"Jeorge",value:32},{label:"Dolph",value:33},{label:"Macellan",value:34},{label:"Tomas",value:35},{label:"Boah",value:36},{label:"Arran",value:37},{label:"Samson",value:38},{label:"Beck (leftover from fe1)",value:39},{label:"Xane",value:40},{label:"Wendell",value:41},{label:"Est",value:42},{label:"Astram",value:43},{label:"Matthis",value:44},{label:"Roger (leftover from fe1)",value:45},{label:"Jake (leftover from fe1)",value:46},{label:"Palla",value:47},{label:"Tiki",value:48},{label:"Lorenz",value:49},{label:"Elice",value:50},{label:"Gotoh",value:51},{label:"Gazzak",value:52},{label:"Wylar (unused)",value:53},{label:"Grust Soldier",value:54},{label:"Gomer",value:55},{label:"Garuda Soldier",value:56},{label:"Sabre (unused)",value:57},{label:"Merach",value:58},{label:"Harmein",value:59},{label:"Emereus",value:60},{label:"Bentheon (leftover from fe1)",value:61},{label:"Kannival",value:62},{label:"Mannu (leftover from fe1)",value:63},{label:"Zharov",value:64},{label:"Khozen",value:65},{label:"Heimler (leftover from fe1)",value:66},{label:"Grigas (leftover from fe1)",value:67},{label:"Jiol",value:68},{label:"Volzhin",value:69},{label:"Hollstadt",value:70},{label:"Sternlin (leftover from fe1)",value:71},{label:"Hyman",value:72},{label:"Xemcel",value:73},{label:"Orridyon (leftover from fe1)",value:74},{label:"Camus",value:75},{label:"Michalis",value:76},{label:"Morzas",value:77},{label:"Gharnef",value:78},{label:"Medeus",value:79},{label:"Dolhr",value:80},{label:"Gra",value:81},{label:"Pyrathi",value:82},{label:"Chiasmir",value:83},{label:"SableOrd",value:84},{label:"Khadein",value:85},{label:"IronKnt",value:86},{label:"Dragoon",value:87},{label:"IronKnt",value:88},{label:"Medon",value:89},{label:"Pegasus",value:90},{label:"Ruffian",value:91},{label:"Raman",value:92},{label:"Dark Mage",value:93},{label:"Priest",value:94},{label:"Ruffian",value:95},{label:"Gharnef",value:96},{label:"Cecil",value:97},{label:"Luke",value:98},{label:"Roderick",value:99},{label:"Ryan",value:100},{label:"Warren",value:101},{label:"Brave",value:102},{label:"Rumel",value:103},{label:"Rucke",value:104},{label:"Yuliya",value:105},{label:"Jubelo",value:106},{label:"Sirius",value:107},{label:"Gail",value:108},{label:"Paiking",value:109},{label:"Marisha",value:110},{label:"Toras",value:111},{label:"Samuel",value:112},{label:"Lang",value:113},{label:"Phina",value:114},{label:"Dahl",value:115},{label:"Laman Thief",value:116},{label:"Yodel",value:117},{label:"Arlen",value:118},{label:"FlyingDr",value:119},{label:"Sand Tribe",value:120},{label:"Evil Fighter",value:121},{label:"Bandit",value:122},{label:"Thief",value:123},{label:"Good Dragon?",value:124},{label:"Ice Dragon",value:125},{label:"Ice Thief (wtf?)",value:126},{label:"Eibel",value:127},{label:"Sheena",value:128},{label:"Earth Dragon",value:129},{label:"Dark Priest",value:130},{label:"Willow",value:131},{label:"Akanea Soldier",value:132},{label:"Orleans Soldier",value:133},{label:"Nyna",value:134},{label:"Khadein Mercenary",value:135},{label:"Fire Tribe",value:136},{label:"Earth Tribe",value:137},{label:"Nehring",value:138},{label:"Dark Tribe",value:139},{label:"Dark Dragon",value:140},{label:"Bodyguard",value:141},{label:"0x8E",value:142},{label:"0x8F",value:143},{label:"0x90",value:144},{label:"0x91",value:145},{label:"0x92",value:146},{label:"0x93",value:147},{label:"0x94",value:148},{label:"0x95",value:149},{label:"0x96",value:150},{label:"0x97",value:151},{label:"0x98",value:152},{label:"0x99",value:153},{label:"0x9A",value:154},{label:"0x9B",value:155},{label:"0x9C",value:156},{label:"0x9D",value:157},{label:"0x9E",value:158},{label:"0x9F",value:159},{label:"0xA0",value:160},{label:"0xA1",value:161},{label:"0xA2",value:162},{label:"0xA3",value:163},{label:"0xA4",value:164},{label:"0xA5",value:165},{label:"0xA6",value:166},{label:"0xA7",value:167},{label:"0xA8",value:168},{label:"0xA9",value:169},{label:"0xAA",value:170},{label:"0xAB",value:171},{label:"0xAC",value:172},{label:"0xAD",value:173},{label:"0xAE",value:174},{label:"0xAF",value:175},{label:"0xB0",value:176},{label:"0xB1",value:177},{label:"0xB2",value:178},{label:"0xB3",value:179},{label:"0xB4",value:180},{label:"0xB5",value:181},{label:"0xB6",value:182},{label:"0xB7",value:183},{label:"0xB8",value:184},{label:"0xB9",value:185},{label:"0xBA",value:186},{label:"0xBB",value:187},{label:"0xBC",value:188},{label:"0xBD",value:189},{label:"0xBE",value:190},{label:"0xBF",value:191},{label:"0xC0",value:192},{label:"0xC1",value:193},{label:"0xC2",value:194},{label:"0xC3",value:195},{label:"0xC4",value:196},{label:"0xC5",value:197},{label:"0xC6",value:198},{label:"0xC7",value:199},{label:"0xC8",value:200},{label:"0xC9",value:201},{label:"0xCA",value:202},{label:"0xCB",value:203},{label:"0xCC",value:204},{label:"0xCD",value:205},{label:"0xCE",value:206},{label:"0xCF",value:207},{label:"0xD0",value:208},{label:"0xD1",value:209},{label:"0xD2",value:210},{label:"0xD3",value:211},{label:"0xD4",value:212},{label:"0xD5",value:213},{label:"0xD6",value:214},{label:"0xD7",value:215},{label:"0xD8",value:216},{label:"0xD9",value:217},{label:"0xDA",value:218},{label:"0xDB",value:219},{label:"0xDC",value:220},{label:"0xDD",value:221},{label:"0xDE",value:222},{label:"0xDF",value:223},{label:"0xE0",value:224},{label:"0xE1",value:225},{label:"0xE2",value:226},{label:"0xE3",value:227},{label:"0xE4",value:228},{label:"0xE5",value:229},{label:"0xE6",value:230},{label:"0xE7",value:231},{label:"0xE8",value:232},{label:"0xE9",value:233},{label:"0xEA",value:234},{label:"0xEB",value:235},{label:"0xEC",value:236},{label:"0xED",value:237},{label:"0xEE",value:238},{label:"0xEF",value:239},{label:"0xF0",value:240},{label:"0xF1",value:241},{label:"0xF2",value:242},{label:"0xF3",value:243},{label:"0xF4",value:244},{label:"0xF5",value:245},{label:"0xF6",value:246},{label:"0xF7",value:247},{label:"0xF8",value:248},{label:"0xF9",value:249},{label:"0xFA",value:250},{label:"0xFB",value:251},{label:"0xFC",value:252},{label:"0xFD",value:253},{label:"0xFE",value:254},{label:"Nothing",value:255}],d=[{label:"Marth",value:0},{label:"Caeda",value:1},{label:"Jagen",value:2},{label:"Cain",value:3},{label:"Abel",value:4},{label:"Draug",value:5},{label:"Gordin",value:6},{label:"Rickard",value:7},{label:"Pirate",value:8},{label:"Bord",value:9},{label:"Cord",value:10},{label:"Barst",value:11},{label:"Castor",value:12},{label:"Ogma",value:13},{label:"Brigand",value:14},{label:"Julian",value:15},{label:"Lena",value:16},{label:"Merric",value:17},{label:"Navarre",value:18},{label:"Hardin",value:19},{label:"Wolf",value:20},{label:"Sedgar",value:21},{label:"Roshea",value:22},{label:"Vyland",value:23},{label:"Bantu",value:24},{label:"Caesar",value:25},{label:"Radd",value:26},{label:"Midia",value:27},{label:"Catria",value:28},{label:"Maria",value:29},{label:"Minerva",value:30},{label:"Linde",value:31},{label:"Jeorge",value:32},{label:"Dolph",value:33},{label:"Macellan",value:34},{label:"Tomas",value:35},{label:"Boah",value:36},{label:"Arran",value:37},{label:"Samson",value:38},{label:"Soldier",value:39},{label:"Xane",value:40},{label:"Wendell",value:41},{label:"Est",value:42},{label:"Astram",value:43},{label:"Matthis",value:44},{label:"Social Knight",value:45},{label:"Dragon Knight",value:46},{label:"Palla",value:47},{label:"Tiki",value:48},{label:"Lorenz",value:49},{label:"Elice",value:50},{label:"Gotoh",value:51},{label:"Gazzak",value:52},{label:"Thief",value:53},{label:"Hunter",value:54},{label:"Gomer",value:55},{label:"Archer",value:56},{label:"Blank",value:57},{label:"Merach",value:58},{label:"Harmein",value:59},{label:"Emereus",value:60},{label:"Sniper",value:61},{label:"Kannival",value:62},{label:"Mannu",value:63},{label:"Zharov",value:64},{label:"Khozen",value:65},{label:"Barbarian",value:66},{label:"Shooter",value:67},{label:"Jiol",value:68},{label:"Volzhin",value:69},{label:"Hollstadt",value:70},{label:"Pegasus Knight",value:71},{label:"Hyman",value:72},{label:"Xemcel",value:73},{label:"Blank",value:74},{label:"Camus",value:75},{label:"Michalis",value:76},{label:"Morzas",value:77},{label:"Gharnef",value:78},{label:"Medeus",value:79},{label:"Armor Knight",value:80},{label:"Nehring",value:81},{label:"General",value:82},{label:"Mercenary",value:83},{label:"Black",value:84},{label:"Hero",value:85},{label:"Black",value:86},{label:"Mage",value:87},{label:"Sister",value:88},{label:"Priest",value:89},{label:"Dark Mage",value:90},{label:"Mamkute",value:91},{label:"Dragon",value:92},{label:"Paladin",value:93},{label:"Dark Knight",value:94},{label:"Horseman",value:95},{label:"Old Talking Guy",value:96},{label:"Nyna",value:97},{label:"King Tellius",value:98},{label:"King Orleans",value:99},{label:"Middle Aged Man Green",value:100},{label:"Middle Aged Man Red",value:101},{label:"Middle Aged Man Grey",value:102},{label:"Old Man",value:103},{label:"Old Woman",value:104},{label:"Drunk Guy",value:105},{label:"Middle Aged Woman",value:106},{label:"Young Man (Weird)",value:107},{label:"Village Girl",value:108},{label:"Arena Clerk",value:109},{label:"Weapon Shop Clerk",value:110},{label:"Marisha's Grandma?",value:111},{label:"Magic Shop Clerk",value:112},{label:"Anna",value:113},{label:"Slave Trader",value:114},{label:"Linde (Dressed as Boy)",value:115},{label:"Soldier",value:116},{label:"Cecil",value:117},{label:"Luke",value:118},{label:"Roderick",value:119},{label:"Ryan",value:120},{label:"Warren",value:121},{label:"Rumel",value:122},{label:"Rucke",value:123},{label:"Yuliya",value:124},{label:"Jubelo",value:125},{label:"Sirius",value:126},{label:"Gail",value:127},{label:"Marisha",value:128},{label:"Toras",value:129},{label:"Samuel",value:130},{label:"Lang",value:131},{label:"Phina",value:132},{label:"Dahl",value:133},{label:"Yodel",value:134},{label:"Arlen",value:135},{label:"Eibel",value:136},{label:"Sheena",value:137},{label:"Willow",value:138},{label:"Marth (Book 2)",value:139},{label:"Caeda (Book 2)",value:140},{label:"Linde (Book 2)",value:141},{label:"Merric (Book 2)",value:142},{label:"Tiki (Book 2)",value:143},{label:"Marth (Book 2)",value:144},{label:"Medeus (Dragon)",value:145},{label:"Minerva (Book 2)",value:146},{label:"Hardin (Book 2)",value:147}],y=[{label:"Iron Sword",value:0},{label:"Steel Sword",value:1},{label:"Silver Sword",value:2},{label:"Rapier",value:3},{label:"Killer Sword",value:4},{label:"Devil Sword",value:5},{label:"Broken Sword",value:6},{label:"Master Sword",value:7},{label:"Lady Sword",value:8},{label:"Thunder Sword",value:9},{label:"Mercurius",value:10},{label:"Falchion",value:11},{label:"Armor Killer",value:12},{label:"Dragon Killer",value:13},{label:"Sword Killer",value:14},{label:"Iron Lance",value:15},{label:"Steel Lance",value:16},{label:"Silver Lance",value:17},{label:"Knight Killer",value:18},{label:"Javelin",value:19},{label:"Broken Lance",value:20},{label:"Killer Lance",value:21},{label:"Thin Lance",value:22},{label:"Gradivus",value:23},{label:"Iron Bow",value:24},{label:"Broken Bow",value:25},{label:"Steel Bow",value:26},{label:"Silver Bow",value:27},{label:"Killer Bow",value:28},{label:"Parthia",value:29},{label:"Iron Axe",value:30},{label:"Steel Axe",value:31},{label:"Hand Axe",value:32},{label:"Silver Axe",value:33},{label:"Devil Axe",value:34},{label:"Broken Axe",value:35},{label:"Thunderbolt",value:36},{label:"Quick Rain",value:37},{label:"Stone Hedge",value:38},{label:"Fire Gun",value:39},{label:"Elephant",value:40},{label:"Fire Breath",value:41},{label:"Ice Breath",value:42},{label:"Dark Breath",value:43},{label:"Mist Breath",value:44},{label:"Fire",value:45},{label:"Thunder",value:46},{label:"Blizzard",value:47},{label:"Shaver",value:48},{label:"Elfire",value:49},{label:"Thoron",value:50},{label:"Bolganone",value:51},{label:"Excalibur",value:52},{label:"Aura",value:53},{label:"Starlight",value:54},{label:"Imhullu",value:55},{label:"Dulam",value:56},{label:"Resire",value:57},{label:"Meteor",value:58},{label:"Worm",value:59},{label:"Earth Orb",value:60},{label:"Shield of Seals",value:61},{label:"Dark Orb",value:62},{label:"Fire Emblem",value:63},{label:"Heal",value:64},{label:"Recover",value:65},{label:"Physic",value:66},{label:"Mend",value:67},{label:"Warp",value:68},{label:"Magic Shield",value:69},{label:"Hammerne",value:70},{label:"Fortify",value:71},{label:"Silence",value:72},{label:"Rescue",value:73},{label:"Aum",value:74},{label:"Unlock",value:75},{label:"Thief Staff",value:76},{label:"Watch Staff",value:77},{label:"Again Staff",value:78},{label:"Fire Dragon Stone",value:79},{label:"Aum",value:80},{label:"Ice Dragon Stone",value:81},{label:"Flying Dragon Stone",value:82},{label:"Earth Dragon Stone",value:83},{label:"Dark Dragon Stone",value:84},{label:"Divine Dragon Stone",value:85},{label:"Demon Dragon Stone",value:86},{label:"Vulnerary",value:87},{label:"Door Key",value:88},{label:"Silver Key",value:89},{label:"Bridge Key",value:90},{label:"Treasure Key",value:91},{label:"Energy Ring",value:92},{label:"Shield Ring",value:93},{label:"Secret Book",value:94},{label:"Speed Ring",value:95},{label:"Amulet",value:96},{label:"Angelic Robe",value:97},{label:"Goddess Icon",value:98},{label:"Manual",value:99},{label:"Boots",value:100},{label:"Pure Water",value:101},{label:"Knight Crest",value:102},{label:"Hero Crest",value:103},{label:"Guiding Ring",value:104},{label:"Elysian Whip",value:105},{label:"Orion's Bolt",value:106},{label:"Earth Orb",value:107},{label:"Life Orb",value:108},{label:"Iote Shield",value:109},{label:"Aquarius Orb",value:110},{label:"Pisces Orb",value:111},{label:"Aries Orb",value:112},{label:"Taurus Orb",value:113},{label:"Gemini Orb",value:114},{label:"Cancer Orb",value:115},{label:"Leo Orb",value:116},{label:"Virgo Orb",value:117},{label:"Libra Orb",value:118},{label:"Scorpio Orb",value:119},{label:"Sagittarius Orb",value:120},{label:"Capricorn Orb",value:121},{label:"Aum Fragment",value:122},{label:"Silver Card",value:123},{label:"Member Card",value:124},{label:"Light Orb",value:125},{label:"Star Orb",value:126},{label:"Nothing",value:255}];var E=a(64004),m=a(34871),f=a(53551),x=a(86357),h=a(90514),p=a(70579);function A(){var l;const[e]=(0,u.KC)(),[a,A]=(0,v.ok)(),g=a.get("id");let B=null;try{B=new DataView(e,270189+19*g,19)}catch(k){B=null}return(0,p.jsxs)(b.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,p.jsx)(n.A,{message:"Universal Reinforcements",type:"info"}),(0,p.jsx)("div",{children:(0,p.jsx)(m.A,{disabled:null==B,defaultValue:null!==(l=o.find((l=>l.value.toString()===g)))&&void 0!==l?l:g,onSelect:l=>A({id:l}),options:o})},g),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,reference:"CharacterGrowthBaseEditor",options:i,view:B,name:"Character",offset:0}),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,reference:"ClassBasesEditor",options:s,view:B,name:"Class",offset:1}),(0,p.jsx)(x.A,{type:E.pe.U8,view:B,name:"Level",offset:2}),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,options:c,view:B,name:"Name",offset:3}),(0,p.jsx)(x.A,{type:E.pe.U8,view:B,name:"X Position",offset:4}),(0,p.jsx)(x.A,{type:E.pe.U8,view:B,name:"Y Position",offset:5}),(0,p.jsx)(h.A,{type:E.pe.U8,view:B,name:"FF",offset:6}),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,options:d,view:B,name:"Portrait",offset:7}),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,reference:"ItemEditor",options:y,view:B,name:"Weapon 1",offset:8}),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,reference:"ItemEditor",options:y,view:B,name:"Weapon 2",offset:9}),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,reference:"ItemEditor",options:y,view:B,name:"Weapon 3",offset:10}),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,reference:"ItemEditor",options:y,view:B,name:"Weapon 4",offset:11}),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,reference:"ItemEditor",options:y,view:B,name:"Item 1",offset:12}),(0,p.jsx)(f.A,{isHex:!0,type:E.pe.U8,reference:"ItemEditor",options:y,view:B,name:"Item 2",offset:13}),(0,p.jsx)(h.A,{type:E.pe.U8,view:B,name:"FF",offset:14}),(0,p.jsx)(h.A,{type:E.pe.U8,view:B,name:"FF",offset:15}),(0,p.jsx)(h.A,{type:E.pe.U8,view:B,name:"Enemy AI",offset:16}),(0,p.jsx)(h.A,{type:E.pe.U8,view:B,name:"Enemy AI",offset:17}),(0,p.jsx)(h.A,{type:E.pe.U8,view:B,name:"Enemy AI",offset:18}),(0,p.jsx)(r.A,{children:(0,p.jsx)(t.A,{})})]})}},33307:(l,e,a)=>{a.d(e,{A:()=>R});var u=a(58168),v=a(64467),b=a(64600),n=a.n(b),r=a(65043),t=a(35296),o=a(16436);const i=function(l){var e,a=(0,r.useContext)(t.QO),b=a.getPrefixCls,i=a.direction,s=l.prefixCls,c=l.className,d=void 0===c?"":c,y=b("input-group",s),E=n()(y,(e={},(0,v.A)(e,"".concat(y,"-lg"),"large"===l.size),(0,v.A)(e,"".concat(y,"-sm"),"small"===l.size),(0,v.A)(e,"".concat(y,"-compact"),l.compact),(0,v.A)(e,"".concat(y,"-rtl"),"rtl"===i),e),d),m=(0,r.useContext)(o.$W),f=(0,r.useMemo)((function(){return(0,u.A)((0,u.A)({},m),{isFormItemInput:!1})}),[m]);return r.createElement("span",{className:E,style:l.style,onMouseEnter:l.onMouseEnter,onMouseLeave:l.onMouseLeave,onFocus:l.onFocus,onBlur:l.onBlur},r.createElement(o.$W.Provider,{value:f},l.children))};var s=a(28124),c=a(5544),d=a(89379);const y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var E=a(22172),m=function(l,e){return r.createElement(E.A,(0,d.A)((0,d.A)({},l),{},{ref:e,icon:y}))};m.displayName="EyeInvisibleOutlined";const f=r.forwardRef(m);var x=a(76191),h=a(18574),p=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a},A=function(l){return l?r.createElement(x.A,null):r.createElement(f,null)},g={click:"onClick",hover:"onMouseOver"};const B=r.forwardRef((function(l,e){var a=(0,r.useState)(!1),b=(0,c.A)(a,2),o=b[0],i=b[1],d=function(){l.disabled||i((function(l){return!l}))},y=function(a){var b=a.getPrefixCls,t=l.className,i=l.prefixCls,c=l.inputPrefixCls,y=l.size,E=l.visibilityToggle,m=void 0===E||E,f=p(l,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),x=b("input",c),B=b("input-password",i),k=m&&function(e){var a,u=l.action,b=void 0===u?"click":u,n=l.iconRender,t=g[b]||"",i=(void 0===n?A:n)(o),s=(a={},(0,v.A)(a,t,d),(0,v.A)(a,"className","".concat(e,"-icon")),(0,v.A)(a,"key","passwordIcon"),(0,v.A)(a,"onMouseDown",(function(l){l.preventDefault()})),(0,v.A)(a,"onMouseUp",(function(l){l.preventDefault()})),a);return r.cloneElement(r.isValidElement(i)?i:r.createElement("span",null,i),s)}(B),S=n()(B,t,(0,v.A)({},"".concat(B,"-").concat(y),!!y)),C=(0,u.A)((0,u.A)({},(0,h.A)(f,["suffix","iconRender"])),{type:o?"text":"password",className:S,prefixCls:x,suffix:k});return y&&(C.size=y),r.createElement(s.Ay,(0,u.A)({ref:e},C))};return r.createElement(t.TG,null,y)}));var k=a(62058),S=a(13758),C=a(11774),M=a(87063),D=a(12701),w=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a};const O=r.forwardRef((function(l,e){var a,b,o=l.prefixCls,i=l.inputPrefixCls,c=l.className,d=l.size,y=l.suffix,E=l.enterButton,m=void 0!==E&&E,f=l.addonAfter,x=l.loading,h=l.disabled,p=l.onSearch,A=l.onChange,g=l.onCompositionStart,B=l.onCompositionEnd,O=w(l,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),F=r.useContext(t.QO),P=F.getPrefixCls,R=F.direction,j=r.useContext(M.A),L=r.useRef(!1),T=d||j,G=r.useRef(null),H=function(l){var e;document.activeElement===(null===(e=G.current)||void 0===e?void 0:e.input)&&l.preventDefault()},K=function(l){var e,a;p&&p(null===(a=null===(e=G.current)||void 0===e?void 0:e.input)||void 0===a?void 0:a.value,l)},I=P("input-search",o),W=P("input",i),z="boolean"===typeof m?r.createElement(k.A,null):null,N="".concat(I,"-button"),U=m||{},J=U.type&&!0===U.type.__ANT_BUTTON;b=J||"button"===U.type?(0,D.Ob)(U,(0,u.A)({onMouseDown:H,onClick:function(l){var e,a;null===(a=null===(e=null===U||void 0===U?void 0:U.props)||void 0===e?void 0:e.onClick)||void 0===a||a.call(e,l),K(l)},key:"enterButton"},J?{className:N,size:T}:{})):r.createElement(C.A,{className:N,type:m?"primary":void 0,size:T,disabled:h,key:"enterButton",onMouseDown:H,onClick:K,loading:x,icon:z},m),f&&(b=[b,(0,D.Ob)(f,{key:"addonAfter"})]);var V=n()(I,(a={},(0,v.A)(a,"".concat(I,"-rtl"),"rtl"===R),(0,v.A)(a,"".concat(I,"-").concat(T),!!T),(0,v.A)(a,"".concat(I,"-with-button"),!!m),a),c);return r.createElement(s.Ay,(0,u.A)({ref:(0,S.K4)(G,e),onPressEnter:function(l){L.current||K(l)}},O,{size:T,onCompositionStart:function(l){L.current=!0,null===g||void 0===g||g(l)},onCompositionEnd:function(l){L.current=!1,null===B||void 0===B||B(l)},prefixCls:W,addonAfter:b,suffix:y,onChange:function(l){l&&l.target&&"click"===l.type&&p&&p(l.target.value,l),A&&A(l)},className:V,disabled:h}))}));var F=a(42471),P=s.Ay;P.Group=i,P.Search=O,P.TextArea=F.A,P.Password=B;const R=P}}]);
//# sourceMappingURL=76820.6f3af2ad.chunk.js.map