"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[12619],{86357:(l,e,a)=>{a.d(e,{A:()=>s});var u=a(89379),v=a(17313),b=a(64435),n=a(3428),t=a(65043),r=a(64004),o=a(70579);const{Text:i}=v.A;function s(l){const{view:e,name:a,offset:v,type:s}=l,c=null==e?0:(0,r.LF)(e,v,s),[d,f]=(0,t.useState)(c);return d!==c&&f(c),(0,o.jsxs)(b.A,{children:[(0,o.jsx)(i,{disabled:null==e,children:"".concat(a,":").concat(null==e?"":" ".concat(d," \u2192"))}),(0,o.jsx)(n.A,(0,u.A)({disabled:null==e,min:r.Wb[s][0],max:r.Wb[s][1],onPressEnter:l=>{const a=parseInt(l.target.value,10);(0,r.M9)(e,v,s,a),f(a)}},l))]})}s.defaultProps={view:null}},53551:(l,e,a)=>{a.d(e,{A:()=>f});var u=a(89379),v=a(53986),b=a(17313),n=a(64435),t=a(41976),r=a(65043),o=a(35475),i=a(64004),s=a(70579);const c=["isHex","reference","view","name","offset","type","options"],{Text:d}=b.A;function f(l){const{isHex:e,reference:a,view:b,name:f,offset:y,type:p,options:m}=l,A=(0,v.A)(l,c),E=null==b?0:(0,i.LF)(b,y,p),[h,g]=(0,r.useState)(E);h!==E&&g(E);const x=m.find((l=>l.value===h)),S=e?"0x".concat(h.toString(16)):h,w=void 0===x?S:x.label;return(0,s.jsxs)(n.A,{children:[(0,s.jsx)(d,{disabled:null==b,children:"".concat(f,":").concat(null==b?"":" ".concat(w," \u2192"))}),(0,s.jsx)(t.A,(0,u.A)({disabled:null==b,showSearch:!0,options:m,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l),onSelect:l=>{(0,i.M9)(b,y,p,l),g(l)}},A)),""===a||null==b?"":(0,s.jsx)(o.N_,{to:{pathname:"../".concat(a,"?id=").concat(h),state:b.buffer},children:"\u27a4"})]})}f.defaultProps={view:null,isHex:!1,reference:""}},90514:(l,e,a)=>{a.d(e,{A:()=>s});var u=a(89379),v=a(17313),b=a(64435),n=a(33307),t=a(65043),r=a(64004),o=a(70579);const{Text:i}=v.A;function s(l){const[e,a]=(0,t.useState)(""),{view:v,name:s,offset:c,type:d}=l,f=null==v?0:(0,r.LF)(v,c,d),[y,p]=(0,t.useState)(f);return y!==f&&p(f),(0,o.jsxs)(b.A,{children:[(0,o.jsx)(i,{disabled:null==v,children:"".concat(s,":").concat(null==v?"":" 0x".concat(y.toString(16)," \u2192"))}),(0,o.jsx)(n.A,(0,u.A)({disabled:null==v,allowClear:!0,maxLength:2*r.X1[d],prefix:"0x",value:e,onChange:l=>{const e=l.currentTarget.value;(/^[0-9a-f]+$/.test(e)||""===e)&&a(e)},onPressEnter:l=>{const e=parseInt(l.target.value,16);(0,r.M9)(v,c,d,e),p(e)}},l))]})}s.defaultProps={view:null}},83837:(l,e,a)=>{a.d(e,{A:()=>s});var u=a(89379),v=a(17313),b=a(64435),n=a(33307),t=a(65043),r=a(64004),o=a(70579);const{Text:i}=v.A;function s(l){const[e,a]=(0,t.useState)(""),{view:v,name:s,offset:c,length:d}=l,f=null==v?"":(0,r.LF)(v,c,r.pe.HEXA,d),[y,p]=(0,t.useState)(f);return y!==f&&p(f),(0,o.jsxs)(b.A,{children:[(0,o.jsx)(i,{disabled:null==v,children:"".concat(s,":").concat(null==v?"":" ".concat(y," \u2192"))}),(0,o.jsx)(n.A,(0,u.A)({disabled:null==v,allowClear:!0,value:e,maxLength:3*d-1,onChange:l=>{const e=l.currentTarget.value;""!==e&&(!/^[0-9a-f ]+$/.test(e)||/[0-9a-f]{3,}/.test(e)||/ {2,}/.test(e)||/ [0-9a-f] /.test(e)||/^[0-9a-f] /.test(e))||a(e.trimStart())},onPressEnter:l=>{const e=l.target.value.trim();(0,r.M9)(v,c,r.pe.HEXA,e),p(e)}},l))]})}s.defaultProps={view:null}},34871:(l,e,a)=>{a.d(e,{A:()=>n});var u=a(89379),v=a(41976),b=(a(65043),a(70579));function n(l){return(0,b.jsx)(v.A,(0,u.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l)},l))}},12619:(l,e,a)=>{a.r(e),a.d(e,{default:()=>h});a(65043);var u=a(73216),v=a(35475),b=a(64435),n=a(92135),t=a(33275),r=a(46974);const o=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8},{label:"Entry 9",value:9},{label:"Entry 10",value:10},{label:"Entry 11",value:11},{label:"Entry 12",value:12},{label:"Entry 13",value:13},{label:"Entry 14",value:14},{label:"Entry 15",value:15},{label:"Entry 16",value:16},{label:"Entry 17",value:17},{label:"Entry 18",value:18},{label:"Entry 19",value:19},{label:"Entry 20",value:20},{label:"Entry 21",value:21},{label:"Entry 22",value:22},{label:"Entry 23",value:23},{label:"Entry 24",value:24},{label:"Entry 25",value:25},{label:"Entry 26",value:26},{label:"Entry 27",value:27},{label:"Entry 28",value:28},{label:"Entry 29",value:29},{label:"Entry 30",value:30},{label:"Entry 31",value:31},{label:"Entry 32",value:32},{label:"Entry 33",value:33},{label:"Entry 34",value:34},{label:"Entry 35",value:35},{label:"Entry 36",value:36},{label:"Entry 37",value:37},{label:"Entry 38",value:38},{label:"Entry 39",value:39},{label:"Entry 40",value:40},{label:"Entry 41",value:41},{label:"Entry 42",value:42},{label:"Entry 43",value:43},{label:"Entry 44",value:44},{label:"Entry 45",value:45},{label:"Entry 46",value:46},{label:"Entry 47",value:47},{label:"Entry 48",value:48},{label:"Entry 49",value:49},{label:"Entry 50",value:50},{label:"Entry 51",value:51},{label:"Entry 52",value:52},{label:"Entry 53",value:53},{label:"Entry 54",value:54},{label:"Entry 55",value:55},{label:"Entry 56",value:56},{label:"Entry 57",value:57},{label:"Entry 58",value:58},{label:"Entry 59",value:59},{label:"Entry 60",value:60},{label:"Entry 61",value:61},{label:"Entry 62",value:62},{label:"Entry 63",value:63},{label:"Entry 64",value:64},{label:"Entry 65",value:65},{label:"Entry 66",value:66},{label:"Entry 67",value:67},{label:"Entry 68",value:68},{label:"Entry 69",value:69},{label:"Entry 70",value:70},{label:"Entry 71",value:71},{label:"Entry 72",value:72}],i=[{label:"Marth",value:0},{label:"My Unit",value:1},{label:"Luke",value:2},{label:"Rody",value:3},{label:"Cecil",value:4},{label:"Gordin",value:5},{label:"Ryan",value:6},{label:"Draug",value:7},{label:"Arran",value:8},{label:"Malliesia",value:9},{label:"Catria",value:10},{label:"Warren",value:11},{label:"Cord",value:12},{label:"Linde",value:13},{label:"Palla",value:14},{label:"Bord",value:15},{label:"Julian",value:16},{label:"Matthis",value:17},{label:"Wrys",value:18},{label:"Ogma",value:19},{label:"Yumina",value:20},{label:"Yubello",value:21},{label:"Sirius",value:22},{label:"Castor",value:23},{label:"Shiida",value:24},{label:"Barst",value:25},{label:"Rickard",value:26},{label:"Frey",value:27},{label:"Norne",value:28},{label:"Samto",value:29},{label:"Wendell",value:30},{label:"Caesar",value:31},{label:"Radd",value:32},{label:"Nabarl",value:33},{label:"Feena",value:34},{label:"Cain",value:35},{label:"Banutu",value:36},{label:"Roger",value:37},{label:"Jeorge",value:38},{label:"Minerva",value:39},{label:"Etzel",value:40},{label:"Merric",value:41},{label:"Elrean",value:42},{label:"Dice",value:43},{label:"Maris",value:44},{label:"Horace",value:45},{label:"Jake",value:46},{label:"Daross",value:47},{label:"Robert",value:48},{label:"Belf",value:49},{label:"Leiden",value:50},{label:"Beck",value:51},{label:"Athena",value:52},{label:"Xane",value:53},{label:"Tiki",value:54},{label:"Est",value:55},{label:"Dolph",value:56},{label:"Abel",value:57},{label:"Macellan",value:58},{label:"Astram",value:59},{label:"Katarina",value:60},{label:"Tomas",value:61},{label:"Sheema",value:62},{label:"Samson",value:63},{label:"Frost",value:64},{label:"Roshea",value:65},{label:"Vyland",value:66},{label:"Sedgar",value:67},{label:"Wolf",value:68},{label:"Midia",value:69},{label:"Ymir",value:70},{label:"Michalis",value:71},{label:"Nagi",value:72},{label:"Lena",value:73},{label:"Maria",value:74},{label:"Nyna",value:75},{label:"Elice",value:76},{label:"-",value:77},{label:"-",value:78},{label:"-",value:79},{label:"-",value:80},{label:"-",value:81},{label:"-",value:82},{label:"-",value:83},{label:"-",value:84},{label:"-",value:85},{label:"-",value:86},{label:"-",value:87},{label:"-",value:88},{label:"-",value:89},{label:"-",value:90},{label:"-",value:91},{label:"-",value:92},{label:"-",value:93},{label:"-",value:94},{label:"-",value:95},{label:"-",value:96},{label:"-",value:97},{label:"-",value:98},{label:"-",value:99},{label:"-",value:100},{label:"-",value:101},{label:"-",value:102},{label:"-",value:103},{label:"-",value:104},{label:"-",value:105},{label:"-",value:106},{label:"-",value:107},{label:"-",value:108},{label:"-",value:109},{label:"-",value:110},{label:"-",value:111},{label:"-",value:112},{label:"-",value:113},{label:"-",value:114},{label:"-",value:115},{label:"-",value:116},{label:"-",value:117},{label:"-",value:118},{label:"-",value:119},{label:"-",value:120},{label:"-",value:121},{label:"-",value:122},{label:"-",value:123},{label:"-",value:124},{label:"-",value:125},{label:"-",value:126},{label:"-",value:127},{label:"-",value:128},{label:"-",value:129},{label:"-",value:130},{label:"-",value:131},{label:"-",value:132},{label:"-",value:133},{label:"-",value:134},{label:"-",value:135},{label:"-",value:136},{label:"-",value:137},{label:"-",value:138},{label:"-",value:139},{label:"-",value:140},{label:"-",value:141},{label:"-",value:142},{label:"-",value:143},{label:"-",value:144},{label:"-",value:145},{label:"-",value:146},{label:"-",value:147},{label:"-",value:148},{label:"-",value:149},{label:"-",value:150},{label:"-",value:151},{label:"-",value:152},{label:"-",value:153},{label:"-",value:154},{label:"-",value:155},{label:"-",value:156},{label:"-",value:157},{label:"-",value:158},{label:"-",value:159},{label:"-",value:160},{label:"-",value:161},{label:"-",value:162},{label:"-",value:163},{label:"-",value:164},{label:"-",value:165},{label:"-",value:166},{label:"-",value:167},{label:"-",value:168},{label:"-",value:169},{label:"-",value:170},{label:"-",value:171},{label:"-",value:172},{label:"-",value:173},{label:"-",value:174},{label:"-",value:175},{label:"-",value:176},{label:"-",value:177},{label:"-",value:178},{label:"-",value:179},{label:"-",value:180},{label:"-",value:181},{label:"-",value:182},{label:"-",value:183},{label:"-",value:184},{label:"-",value:185},{label:"-",value:186},{label:"-",value:187},{label:"-",value:188},{label:"-",value:189},{label:"-",value:190},{label:"-",value:191},{label:"-",value:192},{label:"-",value:193},{label:"-",value:194},{label:"-",value:195},{label:"-",value:196},{label:"-",value:197},{label:"-",value:198},{label:"-",value:199},{label:"-",value:200},{label:"-",value:201},{label:"-",value:202},{label:"-",value:203},{label:"-",value:204},{label:"-",value:205},{label:"-",value:206},{label:"-",value:207},{label:"-",value:208},{label:"-",value:209},{label:"-",value:210},{label:"-",value:211},{label:"-",value:212},{label:"-",value:213},{label:"-",value:214},{label:"-",value:215},{label:"-",value:216},{label:"-",value:217},{label:"-",value:218},{label:"-",value:219},{label:"-",value:220},{label:"-",value:221},{label:"-",value:222},{label:"-",value:223},{label:"-",value:224},{label:"-",value:225},{label:"-",value:226},{label:"-",value:227},{label:"-",value:228},{label:"-",value:229},{label:"-",value:230},{label:"-",value:231},{label:"-",value:232},{label:"-",value:233},{label:"-",value:234},{label:"-",value:235},{label:"-",value:236},{label:"-",value:237},{label:"-",value:238},{label:"-",value:239},{label:"-",value:240},{label:"-",value:241},{label:"-",value:242},{label:"-",value:243},{label:"-",value:244},{label:"-",value:245},{label:"-",value:246},{label:"-",value:247},{label:"-",value:248},{label:"-",value:249},{label:"-",value:250},{label:"-",value:251},{label:"-",value:252},{label:"-",value:253},{label:"-",value:254},{label:"-",value:255},{label:"-",value:256},{label:"-",value:257},{label:"-",value:258},{label:"-",value:259},{label:"-",value:260},{label:"-",value:261},{label:"-",value:262},{label:"-",value:263},{label:"-",value:264},{label:"-",value:265},{label:"-",value:266},{label:"-",value:267},{label:"-",value:268},{label:"-",value:269},{label:"-",value:270},{label:"-",value:271},{label:"-",value:272},{label:"-",value:273},{label:"-",value:274},{label:"-",value:275},{label:"-",value:276},{label:"-",value:277},{label:"-",value:278},{label:"-",value:279},{label:"-",value:280},{label:"-",value:281},{label:"-",value:282},{label:"-",value:283},{label:"-",value:284},{label:"-",value:285},{label:"-",value:286},{label:"-",value:287},{label:"-",value:288},{label:"-",value:289},{label:"-",value:290},{label:"-",value:291},{label:"-",value:292},{label:"-",value:293},{label:"-",value:294},{label:"-",value:295},{label:"-",value:296},{label:"-",value:297},{label:"-",value:298},{label:"-",value:299},{label:"-",value:300},{label:"-",value:301},{label:"-",value:302},{label:"-",value:303},{label:"-",value:304},{label:"-",value:305},{label:"-",value:306},{label:"-",value:307},{label:"-",value:308},{label:"-",value:309},{label:"-",value:310},{label:"-",value:311},{label:"-",value:312},{label:"-",value:313},{label:"-",value:314},{label:"-",value:315},{label:"-",value:316},{label:"-",value:317},{label:"-",value:318},{label:"-",value:319},{label:"-",value:320},{label:"-",value:321},{label:"-",value:322},{label:"-",value:323},{label:"-",value:324},{label:"-",value:325},{label:"-",value:326},{label:"-",value:327},{label:"-",value:328},{label:"-",value:329},{label:"-",value:330},{label:"-",value:331},{label:"-",value:332},{label:"-",value:333},{label:"-",value:334},{label:"-",value:335},{label:"-",value:336},{label:"-",value:337},{label:"-",value:338},{label:"-",value:339},{label:"-",value:340},{label:"-",value:341},{label:"-",value:342},{label:"-",value:343},{label:"-",value:344},{label:"-",value:345},{label:"-",value:346},{label:"-",value:347},{label:"-",value:348},{label:"-",value:349},{label:"-",value:350},{label:"-",value:351},{label:"-",value:352},{label:"-",value:353},{label:"-",value:354},{label:"-",value:355},{label:"-",value:356},{label:"-",value:357},{label:"-",value:358},{label:"-",value:359},{label:"-",value:360},{label:"-",value:361},{label:"-",value:362},{label:"-",value:363},{label:"-",value:364},{label:"-",value:365},{label:"-",value:366},{label:"-",value:367},{label:"-",value:368},{label:"-",value:369},{label:"-",value:370},{label:"-",value:371},{label:"-",value:372},{label:"-",value:373},{label:"-",value:374},{label:"-",value:375},{label:"-",value:376},{label:"-",value:377},{label:"-",value:378},{label:"-",value:379},{label:"-",value:380},{label:"-",value:381},{label:"-",value:382},{label:"-",value:383},{label:"-",value:384},{label:"-",value:385},{label:"-",value:386},{label:"-",value:387},{label:"-",value:388},{label:"-",value:389},{label:"-",value:390},{label:"-",value:391},{label:"-",value:392},{label:"-",value:393},{label:"-",value:394},{label:"-",value:395},{label:"-",value:396},{label:"-",value:397},{label:"-",value:398},{label:"-",value:399},{label:"-",value:400},{label:"-",value:401},{label:"-",value:402}],s=[{label:"Lord",value:0},{label:"Pegasus Knight",value:1},{label:"Pegasus Knight F",value:2},{label:"Falcon Knight",value:3},{label:"Dracoknight",value:4},{label:"Dracoknight F",value:5},{label:"Social Knight",value:6},{label:"Social Knight F",value:7},{label:"Paladin",value:8},{label:"Paladin F",value:9},{label:"Knight",value:10},{label:"Knight F",value:11},{label:"General",value:12},{label:"General F",value:13},{label:"Archer",value:14},{label:"Archer F",value:15},{label:"Sniper",value:16},{label:"Sniper F",value:17},{label:"Mercenary",value:18},{label:"Hero",value:19},{label:"Myrmidon",value:20},{label:"Myrmidon F",value:21},{label:"Swordmaster",value:22},{label:"Swordmaster F",value:23},{label:"Fighter",value:24},{label:"Warrior",value:25},{label:"Hunter",value:26},{label:"Horseman",value:27},{label:"Barbarian",value:28},{label:"Pirate",value:29},{label:"Berserker",value:30},{label:"Dark Mage",value:31},{label:"Sorcerer",value:32},{label:"Mage",value:33},{label:"Mage F",value:34},{label:"Curate",value:35},{label:"Cleric",value:36},{label:"Sage",value:37},{label:"Sage F",value:38},{label:"Bishop",value:39},{label:"Bishop F",value:40},{label:"Thief",value:41},{label:"Manakete",value:42},{label:"Manakete F",value:43},{label:"Ballistician",value:44},{label:"Chameleon",value:45},{label:"Dancer",value:46},{label:"Soldier",value:47},{label:"Emperor",value:48},{label:"Mage Dragon",value:49},{label:"Earth Dragon",value:50},{label:"Fire Dragon",value:51},{label:"Ice Dragon",value:52},{label:"Wyvern",value:53},{label:"Goddess Dragon",value:54},{label:"Dark Dragon",value:55},{label:"Dummy",value:56}],c=[{label:"Null",value:0},{label:"Iron Sword",value:1},{label:"Steel Sword",value:2},{label:"Silver Sword",value:3},{label:"Killing Edge",value:4},{label:"Levin Sword",value:5},{label:"Devil Sword",value:6},{label:"Wyrmslayer",value:7},{label:"Armorslayer",value:8},{label:"Swordslayer",value:9},{label:"Master Sword",value:10},{label:"Mercurius",value:11},{label:"Rapier",value:12},{label:"Wo Dao",value:13},{label:"Brave Sword",value:14},{label:"Falchion",value:15},{label:"Lady Sword",value:16},{label:"Iron Lance",value:17},{label:"Steel Lance",value:18},{label:"Silver Lance",value:19},{label:"Javelin",value:20},{label:"Spear",value:21},{label:"Killer Lance",value:22},{label:"Ridersbane",value:23},{label:"Wing Spear",value:24},{label:"Dragonpike",value:25},{label:"Brave Lance",value:26},{label:"Gradivus",value:27},{label:"Iron Axe",value:28},{label:"Steel Axe",value:29},{label:"Silver Axe",value:30},{label:"Hand Axe",value:31},{label:"Tomahawk",value:32},{label:"Killer Axe",value:33},{label:"Hammer",value:34},{label:"Poleax",value:35},{label:"Devil Axe",value:36},{label:"Brave Axe",value:37},{label:"Hauteclere",value:38},{label:"Iron Bow",value:39},{label:"Steel Bow",value:40},{label:"Silver Bow",value:41},{label:"Killer Bow",value:42},{label:"Longbow",value:43},{label:"Brave Bow",value:44},{label:"Parthia",value:45},{label:"Fire",value:46},{label:"Thunder",value:47},{label:"Blizzard",value:48},{label:"Shaver",value:49},{label:"Elfire",value:50},{label:"Nosferatu",value:51},{label:"Bolganone",value:52},{label:"Thoron",value:53},{label:"Swarm",value:54},{label:"Meteor",value:55},{label:"Glower",value:56},{label:"Aura",value:57},{label:"Excalibur",value:58},{label:"Imhullu",value:59},{label:"Starlight",value:60},{label:"Arrowspate",value:61},{label:"Stonehoist",value:62},{label:"Hoistflamme",value:63},{label:"Thunderbolt",value:64},{label:"Pachyderm",value:65},{label:"Firestone",value:66},{label:"Icestone",value:67},{label:"Wyvernstone",value:68},{label:"Magestone",value:69},{label:"Divinestone",value:70},{label:"Fire Breath",value:71},{label:"Fire Breath (2)",value:72},{label:"Ice Breath",value:73},{label:"Ice Breath (2)",value:74},{label:"Magic Breath",value:75},{label:"Magic Breath (2)",value:76},{label:"Dark Breath",value:77},{label:"Heal",value:78},{label:"Mend",value:79},{label:"Recover",value:80},{label:"Physic",value:81},{label:"Fortify",value:82},{label:"Warp",value:83},{label:"Rescue",value:84},{label:"Barrier",value:85},{label:"Thief",value:86},{label:"Unlock",value:87},{label:"Hammerne",value:88},{label:"Silence",value:89},{label:"Again",value:90},{label:"Aum",value:91},{label:"Door Key",value:92},{label:"Chest Key",value:93},{label:"Bridge Key",value:94},{label:"Master Key",value:95},{label:"Vulnerary",value:96},{label:"Pure Water",value:97},{label:"Energy Drop",value:98},{label:"Spirit Dust",value:99},{label:"Secret Book",value:100},{label:"Speedwings",value:101},{label:"Goddess Icon",value:102},{label:"Dracoshield",value:103},{label:"Talisman",value:104},{label:"Seraph Robe",value:105},{label:"Boots",value:106},{label:"Arms Scroll",value:107},{label:"Silver Card",value:108},{label:"VIP Card",value:109},{label:"Master Seal",value:110},{label:"Elysian Whip",value:111},{label:"Iote's Shield",value:112},{label:"Lightsphere",value:113},{label:"Starsphere",value:114},{label:"Geosphere",value:115},{label:"Lifesphere",value:116},{label:"Darksphere",value:117},{label:"Aquarius",value:118},{label:"Pisces",value:119},{label:"Aries",value:120},{label:"Taurus",value:121},{label:"Gemini",value:122},{label:"Cancer",value:123},{label:"Leo",value:124},{label:"Virgo",value:125},{label:"Libra",value:126},{label:"Scorpio",value:127},{label:"Sagittarius",value:128},{label:"Capricorn",value:129},{label:"Fire Emblem",value:130},{label:"Shield of Seals",value:131},{label:"Bullion",value:132},{label:"Bullion (L)",value:133},{label:"Obtuse Sword",value:134},{label:"Bamboo Sword",value:135},{label:"Glass Sword",value:136},{label:"Pure Sword",value:137},{label:"Quick Sword",value:138},{label:"Luke's Sword",value:139},{label:"Cecil's Sword",value:140},{label:"Ogma's Sword",value:141},{label:"Laundry Pole",value:142},{label:"Flycatcher",value:143},{label:"Glass Lance",value:144},{label:"Quick Lance",value:145},{label:"Rody's Lance",value:146},{label:"Draug's Lance",value:147},{label:"Camus's Lance",value:148},{label:"Frying Pan",value:149},{label:"Immortal Axe",value:150},{label:"Hit Axe",value:151},{label:"Glass Axe",value:152},{label:"Quick Axe",value:153},{label:"Bord'n'cord Axe",value:154},{label:"Barst's Axe",value:155},{label:"Roro's Axe",value:156},{label:"Toy Bow",value:157},{label:"Cleave Bow",value:158},{label:"Glass Bow",value:159},{label:"Quick Bow",value:160},{label:"Gordin's Bow",value:161},{label:"Ryan's Bow",value:162},{label:"Kleine's Bow",value:163},{label:"Nurufire",value:164},{label:"Yurublizzard",value:165},{label:"Merric's Book",value:166},{label:"Katarina's Book",value:167},{label:"Mediocre",value:168},{label:"Glass",value:169},{label:"Strength",value:170},{label:"Speed",value:171},{label:"Defence",value:172},{label:"Wrys",value:173},{label:"Used Potion",value:174},{label:"Energy Drink",value:175},{label:"Elixir",value:176},{label:"Strength Potion",value:177},{label:"Magic Potion",value:178},{label:"Skill Potion",value:179},{label:"Speed Potion",value:180},{label:"Luck Potion",value:181},{label:"Defence Potion",value:182},{label:"Resistance Potion",value:183},{label:"Strength Bond",value:184},{label:"Magic Bond",value:185},{label:"Skill Bond",value:186},{label:"Speed Bond",value:187},{label:"Luck Bond",value:188},{label:"Defence Bond",value:189},{label:"Resistance Bond",value:190},{label:"Maturity Drop",value:191},{label:"Bond Drop",value:192},{label:"Rainbow Potion",value:193}];var d=a(64004),f=a(34871),y=a(53551),p=a(86357),m=a(90514),A=a(83837),E=a(70579);function h(){var l;const[e]=(0,u.KC)(),[a,h]=(0,v.ok)(),g=a.get("id");let x=null;try{x=new DataView(e,164+88*g,88)}catch(S){x=null}return(0,E.jsxs)(b.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,E.jsx)(n.A,{message:"Chapter 22 Unit Editor by VincentASM",type:"info"}),(0,E.jsx)("div",{children:(0,E.jsx)(f.A,{disabled:null==x,defaultValue:null!==(l=o.find((l=>l.value.toString()===g)))&&void 0!==l?l:g,onSelect:l=>h({id:l}),options:o})},g),(0,E.jsx)(y.A,{isHex:!0,type:d.pe.U16,reference:"CharacterEditor",options:i,view:x,name:"Character",offset:0}),(0,E.jsx)(y.A,{isHex:!0,type:d.pe.U8,reference:"ClassEditorU",options:s,view:x,name:"Class",offset:2}),(0,E.jsx)(p.A,{type:d.pe.S8,view:x,name:"Starting X co-ordinate",offset:4}),(0,E.jsx)(p.A,{type:d.pe.S8,view:x,name:"Starting Y co-ordinate",offset:5}),(0,E.jsx)(p.A,{type:d.pe.S8,view:x,name:"Ending X co-ordinate",offset:6}),(0,E.jsx)(p.A,{type:d.pe.S8,view:x,name:"Ending Y co-ordinate",offset:7}),(0,E.jsx)(m.A,{type:d.pe.U8,view:x,name:"Player or enemy",offset:8}),(0,E.jsx)(p.A,{type:d.pe.U8,view:x,name:"Base Level",offset:9}),(0,E.jsx)(p.A,{type:d.pe.U8,view:x,name:"Final Level?",offset:10}),(0,E.jsx)(m.A,{type:d.pe.U8,view:x,name:"Army allegiance",offset:11}),(0,E.jsx)(y.A,{isHex:!0,type:d.pe.U8,reference:"ItemEditorU",options:c,view:x,name:"Inventory slot 1",offset:16}),(0,E.jsx)(A.A,{length:2,view:x,name:"Item option",offset:18}),(0,E.jsx)(y.A,{isHex:!0,type:d.pe.U8,reference:"ItemEditorU",options:c,view:x,name:"Inventory slot 2",offset:20}),(0,E.jsx)(A.A,{length:2,view:x,name:"Item option",offset:22}),(0,E.jsx)(y.A,{isHex:!0,type:d.pe.U8,reference:"ItemEditorU",options:c,view:x,name:"Inventory slot 3",offset:24}),(0,E.jsx)(A.A,{length:2,view:x,name:"Item option",offset:26}),(0,E.jsx)(y.A,{isHex:!0,type:d.pe.U8,reference:"ItemEditorU",options:c,view:x,name:"Inventory slot 4",offset:28}),(0,E.jsx)(A.A,{length:2,view:x,name:"Item option",offset:30}),(0,E.jsx)(A.A,{length:4,view:x,name:"Unknown",offset:44}),(0,E.jsx)(m.A,{type:d.pe.U32,view:x,name:"AI pointer 1",offset:48}),(0,E.jsx)(m.A,{type:d.pe.U32,view:x,name:"AI pointer 2",offset:52}),(0,E.jsx)(m.A,{type:d.pe.U32,view:x,name:"AI pointer 3",offset:56}),(0,E.jsx)(m.A,{type:d.pe.U32,view:x,name:"AI pointer 4",offset:60}),(0,E.jsx)(t.A,{children:(0,E.jsx)(r.A,{})})]})}},33307:(l,e,a)=>{a.d(e,{A:()=>F});var u=a(58168),v=a(64467),b=a(64600),n=a.n(b),t=a(65043),r=a(35296),o=a(16436);const i=function(l){var e,a=(0,t.useContext)(r.QO),b=a.getPrefixCls,i=a.direction,s=l.prefixCls,c=l.className,d=void 0===c?"":c,f=b("input-group",s),y=n()(f,(e={},(0,v.A)(e,"".concat(f,"-lg"),"large"===l.size),(0,v.A)(e,"".concat(f,"-sm"),"small"===l.size),(0,v.A)(e,"".concat(f,"-compact"),l.compact),(0,v.A)(e,"".concat(f,"-rtl"),"rtl"===i),e),d),p=(0,t.useContext)(o.$W),m=(0,t.useMemo)((function(){return(0,u.A)((0,u.A)({},p),{isFormItemInput:!1})}),[p]);return t.createElement("span",{className:y,style:l.style,onMouseEnter:l.onMouseEnter,onMouseLeave:l.onMouseLeave,onFocus:l.onFocus,onBlur:l.onBlur},t.createElement(o.$W.Provider,{value:m},l.children))};var s=a(28124),c=a(5544),d=a(89379);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var y=a(22172),p=function(l,e){return t.createElement(y.A,(0,d.A)((0,d.A)({},l),{},{ref:e,icon:f}))};p.displayName="EyeInvisibleOutlined";const m=t.forwardRef(p);var A=a(76191),E=a(18574),h=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a},g=function(l){return l?t.createElement(A.A,null):t.createElement(m,null)},x={click:"onClick",hover:"onMouseOver"};const S=t.forwardRef((function(l,e){var a=(0,t.useState)(!1),b=(0,c.A)(a,2),o=b[0],i=b[1],d=function(){l.disabled||i((function(l){return!l}))},f=function(a){var b=a.getPrefixCls,r=l.className,i=l.prefixCls,c=l.inputPrefixCls,f=l.size,y=l.visibilityToggle,p=void 0===y||y,m=h(l,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),A=b("input",c),S=b("input-password",i),w=p&&function(e){var a,u=l.action,b=void 0===u?"click":u,n=l.iconRender,r=x[b]||"",i=(void 0===n?g:n)(o),s=(a={},(0,v.A)(a,r,d),(0,v.A)(a,"className","".concat(e,"-icon")),(0,v.A)(a,"key","passwordIcon"),(0,v.A)(a,"onMouseDown",(function(l){l.preventDefault()})),(0,v.A)(a,"onMouseUp",(function(l){l.preventDefault()})),a);return t.cloneElement(t.isValidElement(i)?i:t.createElement("span",null,i),s)}(S),B=n()(S,r,(0,v.A)({},"".concat(S,"-").concat(f),!!f)),C=(0,u.A)((0,u.A)({},(0,E.A)(m,["suffix","iconRender"])),{type:o?"text":"password",className:B,prefixCls:A,suffix:w});return f&&(C.size=f),t.createElement(s.Ay,(0,u.A)({ref:e},C))};return t.createElement(r.TG,null,f)}));var w=a(62058),B=a(13758),C=a(11774),M=a(87063),j=a(12701),P=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a};const k=t.forwardRef((function(l,e){var a,b,o=l.prefixCls,i=l.inputPrefixCls,c=l.className,d=l.size,f=l.suffix,y=l.enterButton,p=void 0!==y&&y,m=l.addonAfter,A=l.loading,E=l.disabled,h=l.onSearch,g=l.onChange,x=l.onCompositionStart,S=l.onCompositionEnd,k=P(l,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),L=t.useContext(r.QO),D=L.getPrefixCls,F=L.direction,I=t.useContext(M.A),O=t.useRef(!1),U=d||I,R=t.useRef(null),T=function(l){var e;document.activeElement===(null===(e=R.current)||void 0===e?void 0:e.input)&&l.preventDefault()},H=function(l){var e,a;h&&h(null===(a=null===(e=R.current)||void 0===e?void 0:e.input)||void 0===a?void 0:a.value,l)},N=D("input-search",o),z=D("input",i),K="boolean"===typeof p?t.createElement(w.A,null):null,W="".concat(N,"-button"),G=p||{},Q=G.type&&!0===G.type.__ANT_BUTTON;b=Q||"button"===G.type?(0,j.Ob)(G,(0,u.A)({onMouseDown:T,onClick:function(l){var e,a;null===(a=null===(e=null===G||void 0===G?void 0:G.props)||void 0===e?void 0:e.onClick)||void 0===a||a.call(e,l),H(l)},key:"enterButton"},Q?{className:W,size:U}:{})):t.createElement(C.A,{className:W,type:p?"primary":void 0,size:U,disabled:E,key:"enterButton",onMouseDown:T,onClick:H,loading:A,icon:K},p),m&&(b=[b,(0,j.Ob)(m,{key:"addonAfter"})]);var V=n()(N,(a={},(0,v.A)(a,"".concat(N,"-rtl"),"rtl"===F),(0,v.A)(a,"".concat(N,"-").concat(U),!!U),(0,v.A)(a,"".concat(N,"-with-button"),!!p),a),c);return t.createElement(s.Ay,(0,u.A)({ref:(0,B.K4)(R,e),onPressEnter:function(l){O.current||H(l)}},k,{size:U,onCompositionStart:function(l){O.current=!0,null===x||void 0===x||x(l)},onCompositionEnd:function(l){O.current=!1,null===S||void 0===S||S(l)},prefixCls:z,addonAfter:b,suffix:f,onChange:function(l){l&&l.target&&"click"===l.type&&h&&h(l.target.value,l),g&&g(l)},className:V,disabled:E}))}));var L=a(42471),D=s.Ay;D.Group=i,D.Search=k,D.TextArea=L.A,D.Password=S;const F=D}}]);
//# sourceMappingURL=12619.c457c7c1.chunk.js.map