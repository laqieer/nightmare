"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[19706],{73339:function(l,e,a){a.d(e,{Z:function(){return x}});var u=a(1413),v=a(29439),b=a(97788),t=a(83099),n=a(13344),o=a(72791),r=a(83282),i=a(80184),s=b.Z.Text;function x(l){var e=l.view,a=l.name,b=l.offset,x=l.type,f=null==e?0:(0,r.ij)(e,b,x),p=(0,o.useState)(f),c=(0,v.Z)(p,2),d=c[0],m=c[1];return d!==f&&m(f),(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(s,{disabled:null==e,children:"".concat(a,":").concat(null==e?"":" ".concat(d," \u2192"))}),(0,i.jsx)(n.Z,(0,u.Z)({disabled:null==e,min:r.Cu[x][0],max:r.Cu[x][1],onPressEnter:function(l){var a=parseInt(l.target.value,10);(0,r.cW)(e,b,x,a),m(a)}},l))]})}x.defaultProps={view:null}},4220:function(l,e,a){a.d(e,{Z:function(){return c}});var u=a(1413),v=a(29439),b=a(44925),t=a(97788),n=a(83099),o=a(21951),r=a(72791),i=a(11087),s=a(83282),x=a(80184),f=["isHex","reference","view","name","offset","type","options"],p=t.Z.Text;function c(l){var e=l.isHex,a=l.reference,t=l.view,c=l.name,d=l.offset,m=l.type,h=l.options,g=(0,b.Z)(l,f),y=null==t?0:(0,s.ij)(t,d,m),G=(0,r.useState)(y),Z=(0,v.Z)(G,2),w=Z[0],S=Z[1];w!==y&&S(y);var D=h.find((function(l){return l.value===w})),j=e?"0x".concat(w.toString(16)):w,C=void 0===D?j:D.label;return(0,x.jsxs)(n.Z,{children:[(0,x.jsx)(p,{disabled:null==t,children:"".concat(c,":").concat(null==t?"":" ".concat(C," \u2192"))}),(0,x.jsx)(o.Z,(0,u.Z)({disabled:null==t,showSearch:!0,options:h,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(l,e){return e.label.includes(l)},onSelect:function(l){(0,s.cW)(t,d,m,l),S(l)}},g)),""===a||null==t?"":(0,x.jsx)(i.rU,{to:{pathname:"../".concat(a,"?id=").concat(w),state:t.buffer},children:"\u27a4"})]})}c.defaultProps={view:null,isHex:!1,reference:""}},23145:function(l,e,a){a.d(e,{Z:function(){return x}});var u=a(1413),v=a(29439),b=a(97788),t=a(83099),n=a(49389),o=a(72791),r=a(83282),i=a(80184),s=b.Z.Text;function x(l){var e=(0,o.useState)(""),a=(0,v.Z)(e,2),b=a[0],x=a[1],f=l.view,p=l.name,c=l.offset,d=l.type,m=null==f?0:(0,r.ij)(f,c,d),h=(0,o.useState)(m),g=(0,v.Z)(h,2),y=g[0],G=g[1];return y!==m&&G(m),(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(s,{disabled:null==f,children:"".concat(p,":").concat(null==f?"":" 0x".concat(y.toString(16)," \u2192"))}),(0,i.jsx)(n.Z,(0,u.Z)({disabled:null==f,allowClear:!0,maxLength:2*r.Tz[d],prefix:"0x",value:b,onChange:function(l){var e=l.currentTarget.value;(/^[0-9a-f]+$/.test(e)||""===e)&&x(e)},onPressEnter:function(l){var e=parseInt(l.target.value,16);(0,r.cW)(f,c,d,e),G(e)}},l))]})}x.defaultProps={view:null}},9933:function(l,e,a){a.d(e,{Z:function(){return t}});var u=a(1413),v=a(21951),b=(a(72791),a(80184));function t(l){return(0,b.jsx)(v.Z,(0,u.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(l,e){return e.label.includes(l)}},l))}},19706:function(l,e,a){a.r(e),a.d(e,{default:function(){return w}});var u=a(29439),v=(a(72791),a(57689)),b=a(11087),t=a(83099),n=a(33441),o=a(43292),r=a(79042),i=[{label:"Marth",value:0},{label:"Kris",value:1},{label:"Luke",value:2},{label:"Rody",value:3},{label:"Cecil",value:4},{label:"Gordon",value:5},{label:"Ryan",value:6},{label:"Doga",value:7},{label:"Alan",value:8},{label:"Malliesia",value:9},{label:"Katua",value:10},{label:"Warren",value:11},{label:"Saji",value:12},{label:"Linda",value:13},{label:"Paola",value:14},{label:"Maji",value:15},{label:"Julian",value:16},{label:"Machis",value:17},{label:"Riff",value:18},{label:"Oguma",value:19},{label:"Yumina",value:20},{label:"Yubello",value:21},{label:"Sirius",value:22},{label:"Kashim",value:23},{label:"Sheeda",value:24},{label:"Barts",value:25},{label:"Ricardo",value:26},{label:"Frey",value:27},{label:"Norne",value:28},{label:"Samto",value:29},{label:"Wendel",value:30},{label:"Caesar",value:31},{label:"Raddy",value:32},{label:"Navarre",value:33},{label:"Feena",value:34},{label:"Kain",value:35},{label:"Banutu",value:36},{label:"Roger",value:37},{label:"George",value:38},{label:"Minerva",value:39},{label:"Etzel",value:40},{label:"Marich",value:41},{label:"Ellerean",value:42},{label:"Dice",value:43},{label:"Maris",value:44},{label:"Horace",value:45},{label:"Jake",value:46},{label:"Daros",value:47},{label:"Robert",value:48},{label:"Vergil",value:49},{label:"Leiden",value:50},{label:"Beck",value:51},{label:"Athena",value:52},{label:"Chainy",value:53},{label:"Chiki",value:54},{label:"Est",value:55},{label:"Tomth",value:56},{label:"Abel",value:57},{label:"Mishelan",value:58},{label:"Astria",value:59},{label:"Katarina",value:60},{label:"Thomas",value:61},{label:"Sheema",value:62},{label:"Samson",value:63},{label:"Frost",value:64},{label:"Roshe",value:65},{label:"Biraku",value:66},{label:"Zagaro",value:67},{label:"Wolf",value:68},{label:"Midia",value:69},{label:"Ymir",value:70},{label:"Misheil",value:71},{label:"Nagi",value:72},{label:"Rena",value:73},{label:"Maria",value:74},{label:"Nina",value:75},{label:"Ellis",value:76},{label:"END OF PLAYABLES, BOSSES PROBABLY",value:77},{label:"Gazzak",value:78},{label:"Gomer",value:79},{label:"Hyman",value:80},{label:"Bentheon",value:81},{label:"Merach",value:82},{label:"Emereus",value:83},{label:"Harmein",value:84},{label:"Kannival",value:85},{label:"Mannu",value:86},{label:"Zharov",value:87},{label:"Khozen",value:88},{label:"Volzhin",value:89},{label:"Heimler",value:90},{label:"Grigas",value:91},{label:"Jiol",value:92},{label:"Gharnef",value:93},{label:"Gharnef 2",value:94},{label:"Hollstadt",value:95},{label:"Morzas",value:96},{label:"Sternlin",value:97},{label:"Camus",value:98},{label:"Orridyon",value:99},{label:"Michalis",value:100},{label:"Xemcel",value:101},{label:"Medeus",value:102},{label:"Galder",value:103},{label:"Galder",value:104},{label:"Galder",value:105},{label:"Galder",value:106},{label:"Galder",value:107},{label:"Galder",value:108},{label:"Grust",value:109},{label:"Soothsire",value:110},{label:"Soothsire",value:111},{label:"Soothsire",value:112},{label:"Macedon",value:113},{label:"Macedon",value:114},{label:"Macedon",value:115},{label:"Macedon",value:116},{label:"Macedon",value:117},{label:"Macedon",value:118},{label:"Macedon",value:119},{label:"Macedon",value:120},{label:"Macedon",value:121},{label:"Macedon",value:122},{label:"Macedon",value:123},{label:"Macedon",value:124},{label:"Macedon",value:125},{label:"Macedon",value:126},{label:"Macedon",value:127},{label:"Macedon",value:128},{label:"Macedon",value:129},{label:"Macedon",value:130},{label:"Macedon",value:131},{label:"Macedon",value:132},{label:"Grust",value:133},{label:"Dragoon",value:134},{label:"Dragoon",value:135},{label:"Grust",value:136},{label:"Grust",value:137},{label:"Grust",value:138},{label:"Grust",value:139},{label:"Grust",value:140},{label:"Grust",value:141},{label:"Grust",value:142},{label:"Grust",value:143},{label:"Grust",value:144},{label:"Pyrathi",value:145},{label:"Pyrathi",value:146},{label:"Pyrathi",value:147},{label:"Pyrathi",value:148},{label:"Pyrathi",value:149},{label:"Grust",value:150},{label:"Grust",value:151},{label:"Grust",value:152},{label:"Grust",value:153},{label:"Grust",value:154},{label:"Grust",value:155},{label:"Grust",value:156},{label:"Grust",value:157},{label:"Grust",value:158},{label:"Grust",value:159},{label:"Grust",value:160},{label:"Grust",value:161},{label:"Grust",value:162},{label:"Grust",value:163},{label:"Grust",value:164},{label:"Grust",value:165},{label:"Ruffian",value:166},{label:"Grust",value:167},{label:"Grust",value:168},{label:"Grust",value:169},{label:"Grust",value:170},{label:"Grust",value:171},{label:"Grust",value:172},{label:"Grust",value:173},{label:"Grust",value:174},{label:"Grust",value:175},{label:"Grust",value:176},{label:"Grust",value:177},{label:"Grust",value:178},{label:"Dragoon",value:179},{label:"Gra",value:180},{label:"Gra",value:181},{label:"Gra",value:182},{label:"Gra",value:183},{label:"Gra",value:184},{label:"Gra",value:185},{label:"Dragoon",value:186},{label:"Khadein",value:187},{label:"Khadein",value:188},{label:"Khadein",value:189},{label:"Khadein",value:190},{label:"Grust",value:191},{label:"Grust",value:192},{label:"Grust",value:193},{label:"Grust",value:194},{label:"Grust",value:195},{label:"Grust",value:196},{label:"Grust",value:197},{label:"Grust",value:198},{label:"Grust",value:199},{label:"Dolhr",value:200},{label:"Dolhr",value:201},{label:"Dolhr",value:202},{label:"Dolhr",value:203},{label:"Dolhr",value:204},{label:"Dolhr",value:205},{label:"Dolhr",value:206},{label:"Dolhr",value:207},{label:"Dolhr",value:208},{label:"Dolhr",value:209},{label:"Sable",value:210},{label:"Sable",value:211},{label:"Sable",value:212},{label:"Sable",value:213},{label:"Raman",value:214},{label:"Raman",value:215},{label:"Raman",value:216},{label:"Raman",value:217},{label:"Raman",value:218},{label:"Raman",value:219},{label:"Raman",value:220},{label:"Sable",value:221},{label:"Sable",value:222},{label:"Sable",value:223},{label:"Sable",value:224},{label:"Sable",value:225},{label:"Sable",value:226},{label:"Sable",value:227},{label:"Grust",value:228},{label:"Grust",value:229},{label:"Grust",value:230},{label:"Grust",value:231},{label:"Dragoon",value:232},{label:"Dragoon",value:233},{label:"Dragoon",value:234},{label:"Dragoon",value:235},{label:"Dragoon",value:236},{label:"Dragoon",value:237},{label:"Dragoon",value:238},{label:"Dragoon",value:239},{label:"Dragoon",value:240},{label:"Dragoon",value:241},{label:"Dragoon",value:242},{label:"Dragoon",value:243},{label:"Dragoon",value:244},{label:"Dragoon",value:245},{label:"Dragoon",value:246},{label:"Dolhr",value:247},{label:"Dolhr",value:248},{label:"Dolhr",value:249},{label:"Khadein",value:250},{label:"Khadein",value:251},{label:"Khadein",value:252},{label:"Dolhr",value:253},{label:"Dolhr",value:254},{label:"Dolhr",value:255},{label:"Dolhr",value:256},{label:"Dolhr",value:257},{label:"Dolhr",value:258},{label:"Dolhr",value:259},{label:"Dolhr",value:260},{label:"Dolhr",value:261},{label:"Dolhr",value:262},{label:"Dolhr",value:263},{label:"Dolhr",value:264},{label:"Dolhr",value:265},{label:"Dolhr",value:266},{label:"Dolhr",value:267},{label:"Dolhr",value:268},{label:"Dolhr",value:269},{label:"Opponent",value:270},{label:"Opponent",value:271},{label:"Opponent",value:272},{label:"Opponent",value:273},{label:"Opponent",value:274},{label:"Opponent",value:275},{label:"Opponent",value:276},{label:"Opponent",value:277},{label:"Opponent",value:278},{label:"Opponent",value:279},{label:"Opponent",value:280},{label:"Opponent",value:281},{label:"Opponent",value:282},{label:"Opponent",value:283},{label:"Opponent",value:284},{label:"Opponent",value:285},{label:"Opponent",value:286},{label:"Opponent",value:287},{label:"Opponent",value:288},{label:"Opponent",value:289},{label:"Opponent",value:290},{label:"Opponent",value:291},{label:"Opponent",value:292},{label:"Gra",value:293},{label:"Gra",value:294},{label:"Gra",value:295},{label:"Gra",value:296},{label:"Nyna",value:297},{label:"Malledus",value:298},{label:"Soldier",value:299},{label:"Bathys",value:300},{label:"Dejanira",value:301},{label:"Dactyl",value:302},{label:"Larissa",value:303},{label:"Soldier",value:304},{label:"Soldier",value:305},{label:"Soldier",value:306},{label:"Soldier",value:307},{label:"Soldier",value:308},{label:"Soldier",value:309},{label:"Captain",value:310},{label:"Gra",value:311},{label:"Gra",value:312},{label:"Gra",value:313},{label:"Gra",value:314},{label:"Gra",value:315},{label:"Gra",value:316},{label:"Gra",value:317},{label:"Gra",value:318},{label:"Gra",value:319},{label:"Gra",value:320},{label:"Gra",value:321},{label:"Gra",value:322},{label:"Gra",value:323},{label:"Ruffian",value:324},{label:"Ruffian",value:325},{label:"Ruffian",value:326},{label:"Ruffian",value:327},{label:"Grust",value:328},{label:"Grust",value:329},{label:"Archanea",value:330},{label:"Archanea",value:331},{label:"Grust",value:332},{label:"Grust",value:333},{label:"Grust",value:334},{label:"Grust",value:335},{label:"Ruffian",value:336},{label:"Dolhr",value:337},{label:"Grust",value:338},{label:"Grust",value:339},{label:"Grust",value:340},{label:"Grust",value:341},{label:"Grust",value:342},{label:"Grust",value:343},{label:"Grust",value:344},{label:"Grust",value:345},{label:"Grust",value:346},{label:"Grust",value:347},{label:"Grust",value:348},{label:"Grust",value:349},{label:"Dolhr",value:350},{label:"Grust",value:351},{label:"Grust",value:352},{label:"Grust",value:353},{label:"Grust",value:354},{label:"Keeper",value:355},{label:"Keeper",value:356},{label:"Keeper",value:357},{label:"Keeper",value:358},{label:"Keeper",value:359},{label:"Keeper",value:360},{label:"Keeper",value:361},{label:"Keeper",value:362},{label:"Marth",value:363},{label:"Gra",value:364},{label:"Gra",value:365},{label:"Gra",value:366},{label:"Gra",value:367},{label:"Gra",value:368},{label:"Gra",value:369},{label:"Gra",value:370},{label:"Gra",value:371},{label:"Dragoon",value:372},{label:"Dragoon",value:373}],s=[{label:"None or E",value:0},{label:"D",value:30},{label:"D Lv2",value:40},{label:"D Lv3",value:45},{label:"C",value:75},{label:"B",value:105},{label:"B Lv2",value:135},{label:"A",value:165},{label:"A Lv2",value:195}],x=[{label:"Blue",value:0},{label:"Green",value:1},{label:"Pink",value:2},{label:"Grey",value:3},{label:"Red",value:4},{label:"Purple",value:5},{label:"Brown",value:6},{label:"Blonde",value:7},{label:"0x08",value:8},{label:"0x09",value:9},{label:"Bald",value:10}],f=[{label:"None",value:0},{label:"Lady Sword",value:1},{label:"Falchion",value:2},{label:"Falchion/Lady Sword",value:3},{label:"Rapier",value:4},{label:"Rapier/Lady Sword",value:5},{label:"Rapier/Falchion",value:6},{label:"Aum Staff",value:8},{label:"Aum/Lady Sword",value:9},{label:"Earthstone (Unused)",value:16},{label:"Wing Spear",value:32},{label:"Wing Spear/Aum/Lady Sw.",value:41},{label:"Hammerne Staff",value:64},{label:"Hammerne/Lady Sword",value:65},{label:"Excalibur",value:128}],p=[{label:"None",value:0},{label:"Aura",value:1},{label:"Divine Stone",value:2},{label:"?",value:4},{label:"?",value:8},{label:"?",value:16},{label:"?",value:32},{label:"Is Kris",value:64},{label:"?",value:128}],c=[{label:"None",value:0},{label:"Causes Game Over on Death",value:1},{label:"0x02",value:2},{label:"0x03",value:3},{label:"Can Triangle Attack",value:4},{label:"0x05",value:5},{label:"0x06",value:6},{label:"0x07",value:7},{label:"0x08",value:8},{label:"0x09",value:9},{label:"0x0A",value:10},{label:"0x0B",value:11},{label:"0x0C",value:12},{label:"0x0D",value:13},{label:"0x0E",value:14},{label:"0x0F",value:15},{label:"0x10",value:16},{label:"0x11",value:17},{label:"0x12",value:18},{label:"0x13",value:19},{label:"0x14",value:20},{label:"0x15",value:21},{label:"0x16",value:22},{label:"0x17",value:23},{label:"0x18",value:24},{label:"0x19",value:25},{label:"0x1A",value:26},{label:"0x1B",value:27},{label:"0x1C",value:28},{label:"0x1D",value:29},{label:"0x1E",value:30},{label:"0x1F",value:31},{label:"Boss?",value:32},{label:"0x21",value:33},{label:"0x22",value:34},{label:"0x23",value:35},{label:"0x24",value:36},{label:"0x25",value:37},{label:"0x26",value:38},{label:"0x27",value:39},{label:"0x28",value:40},{label:"0x29",value:41},{label:"0x2A",value:42},{label:"0x2B",value:43},{label:"0x2C",value:44},{label:"0x2D",value:45},{label:"0x2E",value:46},{label:"0x2F",value:47},{label:"0x30",value:48},{label:"0x31",value:49},{label:"0x32",value:50},{label:"0x33",value:51},{label:"0x34",value:52},{label:"0x35",value:53},{label:"0x36",value:54},{label:"0x37",value:55},{label:"0x38",value:56},{label:"0x39",value:57},{label:"0x3A",value:58},{label:"0x3B",value:59},{label:"0x3C",value:60},{label:"0x3D",value:61},{label:"0x3E",value:62},{label:"0x3F",value:63},{label:"0x40",value:64},{label:"0x41",value:65},{label:"0x42",value:66},{label:"0x43",value:67},{label:"0x44",value:68},{label:"0x45",value:69},{label:"0x46",value:70},{label:"0x47",value:71},{label:"0x48",value:72},{label:"0x49",value:73},{label:"0x4A",value:74},{label:"0x4B",value:75},{label:"0x4C",value:76},{label:"0x4D",value:77},{label:"0x4E",value:78},{label:"0x4F",value:79},{label:"0x50",value:80},{label:"0x51",value:81},{label:"0x52",value:82},{label:"0x53",value:83},{label:"0x54",value:84},{label:"0x55",value:85},{label:"0x56",value:86},{label:"0x57",value:87},{label:"0x58",value:88},{label:"0x59",value:89},{label:"0x5A",value:90},{label:"0x5B",value:91},{label:"0x5C",value:92},{label:"0x5D",value:93},{label:"0x5E",value:94},{label:"0x5F",value:95},{label:"0x60",value:96},{label:"0x61",value:97},{label:"0x62",value:98},{label:"0x63",value:99},{label:"0x64",value:100},{label:"0x65",value:101},{label:"0x66",value:102},{label:"0x67",value:103},{label:"0x68",value:104},{label:"0x69",value:105},{label:"0x6A",value:106},{label:"0x6B",value:107},{label:"0x6C",value:108},{label:"0x6D",value:109},{label:"0x6E",value:110},{label:"0x6F",value:111},{label:"0x70",value:112},{label:"0x71",value:113},{label:"0x72",value:114},{label:"0x73",value:115},{label:"0x74",value:116},{label:"0x75",value:117},{label:"0x76",value:118},{label:"0x77",value:119},{label:"0x78",value:120},{label:"0x79",value:121},{label:"0x7A",value:122},{label:"0x7B",value:123},{label:"0x7C",value:124},{label:"0x7D",value:125},{label:"0x7E",value:126},{label:"0x7F",value:127},{label:"Enemy",value:128},{label:"0x81",value:129},{label:"0x82",value:130},{label:"0x83",value:131},{label:"0x84",value:132},{label:"0x85",value:133},{label:"0x86",value:134},{label:"0x87",value:135},{label:"0x88",value:136},{label:"0x89",value:137},{label:"0x8A",value:138},{label:"0x8B",value:139},{label:"0x8C",value:140},{label:"0x8D",value:141},{label:"0x8E",value:142},{label:"0x8F",value:143},{label:"0x90",value:144},{label:"0x91",value:145},{label:"0x92",value:146},{label:"0x93",value:147},{label:"0x94",value:148},{label:"0x95",value:149},{label:"0x96",value:150},{label:"0x97",value:151},{label:"0x98",value:152},{label:"0x99",value:153},{label:"0x9A",value:154},{label:"0x9B",value:155},{label:"0x9C",value:156},{label:"0x9D",value:157},{label:"0x9E",value:158},{label:"0x9F",value:159},{label:"0xA0",value:160},{label:"0xA1",value:161},{label:"0xA2",value:162},{label:"0xA3",value:163},{label:"0xA4",value:164},{label:"0xA5",value:165},{label:"0xA6",value:166},{label:"0xA7",value:167},{label:"0xA8",value:168},{label:"0xA9",value:169},{label:"0xAA",value:170},{label:"0xAB",value:171},{label:"0xAC",value:172},{label:"0xAD",value:173},{label:"0xAE",value:174},{label:"0xAF",value:175},{label:"0xB0",value:176},{label:"0xB1",value:177},{label:"0xB2",value:178},{label:"0xB3",value:179},{label:"0xB4",value:180},{label:"0xB5",value:181},{label:"0xB6",value:182},{label:"0xB7",value:183},{label:"0xB8",value:184},{label:"0xB9",value:185},{label:"0xBA",value:186},{label:"0xBB",value:187},{label:"0xBC",value:188},{label:"0xBD",value:189},{label:"0xBE",value:190},{label:"0xBF",value:191},{label:"0xC0",value:192},{label:"0xC1",value:193},{label:"0xC2",value:194},{label:"0xC3",value:195},{label:"0xC4",value:196},{label:"0xC5",value:197},{label:"0xC6",value:198},{label:"0xC7",value:199},{label:"0xC8",value:200},{label:"0xC9",value:201},{label:"0xCA",value:202},{label:"0xCB",value:203},{label:"0xCC",value:204},{label:"0xCD",value:205},{label:"0xCE",value:206},{label:"0xCF",value:207},{label:"0xD0",value:208},{label:"0xD1",value:209},{label:"0xD2",value:210},{label:"0xD3",value:211},{label:"0xD4",value:212},{label:"0xD5",value:213},{label:"0xD6",value:214},{label:"0xD7",value:215},{label:"0xD8",value:216},{label:"0xD9",value:217},{label:"0xDA",value:218},{label:"0xDB",value:219},{label:"0xDC",value:220},{label:"0xDD",value:221},{label:"0xDE",value:222},{label:"0xDF",value:223},{label:"0xE0",value:224},{label:"0xE1",value:225},{label:"0x62",value:98},{label:"0xE3",value:227},{label:"0xE4",value:228},{label:"0xE5",value:229},{label:"0xE6",value:230},{label:"0xE7",value:231},{label:"0xE8",value:232},{label:"0xE9",value:233},{label:"0xEA",value:234},{label:"0xEB",value:235},{label:"0xEC",value:236},{label:"0xED",value:237},{label:"0xEE",value:238},{label:"0xEF",value:239},{label:"0xF0",value:240},{label:"0xF1",value:241},{label:"0xF2",value:242},{label:"0xF3",value:243},{label:"0xF4",value:244},{label:"0xF5",value:245},{label:"0xF6",value:246},{label:"0xF7",value:247},{label:"0xF8",value:248},{label:"0xF9",value:249},{label:"0xFA",value:250},{label:"0xFB",value:251},{label:"0xFC",value:252},{label:"0xFD",value:253},{label:"0xFE",value:254},{label:"0xFF",value:255}],d=[{label:"Marth/None",value:0},{label:"Kris",value:92},{label:"Luke",value:184},{label:"Rody",value:276},{label:"Cecil",value:368},{label:"Gordon",value:460},{label:"Ryan",value:552},{label:"Doga",value:644},{label:"Alan",value:736},{label:"Malliesia",value:828},{label:"Katua",value:920},{label:"Warren",value:1012},{label:"Saji",value:1104},{label:"Linda",value:1196},{label:"Paola",value:1288},{label:"Maji",value:1380},{label:"Julian",value:1472},{label:"Machis",value:1564},{label:"Riff",value:1656},{label:"Oguma",value:1748},{label:"Yumina",value:1840},{label:"Yubello",value:1932},{label:"Sirius",value:2024},{label:"Kashim",value:2116},{label:"Sheeda",value:2208},{label:"Barts",value:2300},{label:"Ricardo",value:2392},{label:"Frey",value:2484},{label:"Norne",value:2576},{label:"Samto",value:2668},{label:"Wendel",value:2760},{label:"Caesar",value:2852},{label:"Raddy",value:2944},{label:"Navarre",value:3036},{label:"Feena",value:3128},{label:"Kain",value:3220},{label:"Banutu",value:3312},{label:"Roger",value:3404},{label:"George",value:3496},{label:"Minerva",value:3588},{label:"Etzel",value:3680},{label:"Marich",value:3772},{label:"Ellerean",value:3864},{label:"Dice",value:3956},{label:"Maris",value:4048},{label:"Horace",value:4140},{label:"Jake",value:4232},{label:"Daros",value:4324},{label:"Robert",value:4416},{label:"Vergil",value:4508},{label:"Leiden",value:4600},{label:"Beck",value:4692},{label:"Athena",value:4784},{label:"Chainy",value:4876},{label:"Chiki",value:4968},{label:"Est",value:5060},{label:"Tomth",value:5152},{label:"Abel",value:5244},{label:"Mishelan",value:5336},{label:"Astria",value:5428},{label:"Katarina",value:5520},{label:"Thomas",value:5612},{label:"Sheema",value:5704},{label:"Samson",value:5796},{label:"Frost",value:5888},{label:"Roshe",value:5980},{label:"Biraku",value:6072},{label:"Zagaro",value:6164},{label:"Wolf",value:6256},{label:"Midia",value:6348},{label:"Ymir",value:6440},{label:"Misheil",value:6532},{label:"Nagi",value:6624},{label:"Rena",value:6716},{label:"Maria",value:6808},{label:"Nina",value:6900},{label:"Ellis",value:6992}],m=a(83282),h=a(9933),g=a(23145),y=a(73339),G=a(4220),Z=a(80184);function w(){var l,e=(0,v.bx)(),a=(0,u.Z)(e,1)[0],w=(0,b.lr)(),S=(0,u.Z)(w,2),D=S[0],j=S[1],C=D.get("id"),E=null;try{E=new DataView(a,32+92*C,92)}catch(M){E=null}return(0,Z.jsxs)(t.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,Z.jsx)(n.Z,{message:"FE12 Character Editor by Darrman",type:"info"}),(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{disabled:null==E,defaultValue:null!==(l=i.find((function(l){return l.value.toString()===C})))&&void 0!==l?l:C,onSelect:function(l){return j({id:l})},options:i})},C),(0,Z.jsx)(g.Z,{type:m.g.U32,view:E,name:"PID Pointer (Character ID)",offset:0}),(0,Z.jsx)(g.Z,{type:m.g.U32,view:E,name:"FID Pointer (Name/Portrait)",offset:4}),(0,Z.jsx)(g.Z,{type:m.g.U32,view:E,name:"Generic Enemy Name",offset:8}),(0,Z.jsx)(y.Z,{type:m.g.S8,view:E,name:"HP",offset:12}),(0,Z.jsx)(y.Z,{type:m.g.S8,view:E,name:"Strength",offset:13}),(0,Z.jsx)(y.Z,{type:m.g.S8,view:E,name:"Magic",offset:14}),(0,Z.jsx)(y.Z,{type:m.g.S8,view:E,name:"Skill",offset:15}),(0,Z.jsx)(y.Z,{type:m.g.S8,view:E,name:"Speed",offset:16}),(0,Z.jsx)(y.Z,{type:m.g.S8,view:E,name:"Luck",offset:17}),(0,Z.jsx)(y.Z,{type:m.g.S8,view:E,name:"Defense",offset:18}),(0,Z.jsx)(y.Z,{type:m.g.S8,view:E,name:"Resistance",offset:19}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"HP Growth (note encryption)",offset:20}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Strength Growth",offset:21}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Magic Growth",offset:22}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Skill Growth",offset:23}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Speed Growth",offset:24}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Luck Growth",offset:25}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Defense Growth",offset:26}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Resistance Growth",offset:27}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"HP Growth 2",offset:28}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Strength Growth 2",offset:29}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Magic Growth 2",offset:30}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Skill Growth 2",offset:31}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Speed Growth 2",offset:32}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Luck Growth 2",offset:33}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Defense Growth 2",offset:34}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Resistance Growth 2",offset:35}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:s,view:E,name:"Sword Skill Level",offset:36}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:s,view:E,name:"Lance Skill Level",offset:37}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:s,view:E,name:"Axe Skill Level",offset:38}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:s,view:E,name:"Bow Skill Level",offset:39}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:s,view:E,name:"Magic Skill Level",offset:40}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:s,view:E,name:"Staff Skill Level",offset:41}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:x,view:E,name:"Hair Colour",offset:42}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Zero",offset:43}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:f,view:E,name:"Weapon Lock 1",offset:44}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:p,view:E,name:"Weapon Lock 2",offset:45}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Always Zero",offset:46}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U8,options:c,view:E,name:"Ability 1",offset:47}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U32,options:d,view:E,name:"Pointer to Support 1",offset:48}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Zero",offset:52}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 1 Points for C",offset:53}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 1 Points for B",offset:54}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 1 Points for A",offset:55}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U32,options:d,view:E,name:"Pointer to Support 2",offset:56}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Zero",offset:60}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 2 Points for C",offset:61}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 2 Points for B",offset:62}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 2 Points for A",offset:63}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U32,options:d,view:E,name:"Pointer to Support 3",offset:64}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Zero",offset:68}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 3 Points for C",offset:69}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 3 Points for B",offset:70}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 3 Points for A",offset:71}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U32,options:d,view:E,name:"Pointer to Support 4",offset:72}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Zero",offset:76}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 4 Points for C",offset:77}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 4 Points for B",offset:78}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 4 Points for A",offset:79}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U32,options:d,view:E,name:"Pointer to Support 5",offset:80}),(0,Z.jsx)(g.Z,{type:m.g.U8,view:E,name:"Zero",offset:84}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 5 Points for C",offset:85}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 5 Points for B",offset:86}),(0,Z.jsx)(y.Z,{type:m.g.U8,view:E,name:"Support 5 Points for A",offset:87}),(0,Z.jsx)(G.Z,{isHex:!0,type:m.g.U32,options:d,view:E,name:"Ending Changes if This Unit Dies",offset:88}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(r.Z,{})})]})}},49389:function(l,e,a){a.d(e,{Z:function(){return U}});var u=a(87462),v=a(4942),b=a(81694),t=a.n(b),n=a(72791),o=a(71929),r=a(91940),i=function(l){var e,a=(0,n.useContext)(o.E_),b=a.getPrefixCls,i=a.direction,s=l.prefixCls,x=l.className,f=void 0===x?"":x,p=b("input-group",s),c=t()(p,(e={},(0,v.Z)(e,"".concat(p,"-lg"),"large"===l.size),(0,v.Z)(e,"".concat(p,"-sm"),"small"===l.size),(0,v.Z)(e,"".concat(p,"-compact"),l.compact),(0,v.Z)(e,"".concat(p,"-rtl"),"rtl"===i),e),f),d=(0,n.useContext)(r.aM),m=(0,n.useMemo)((function(){return(0,u.Z)((0,u.Z)({},d),{isFormItemInput:!1})}),[d]);return n.createElement("span",{className:c,style:l.style,onMouseEnter:l.onMouseEnter,onMouseLeave:l.onMouseLeave,onFocus:l.onFocus,onBlur:l.onBlur},n.createElement(r.aM.Provider,{value:m},l.children))},s=a(45394),x=a(29439),f=a(1413),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},c=a(54291),d=function(l,e){return n.createElement(c.Z,(0,f.Z)((0,f.Z)({},l),{},{ref:e,icon:p}))};d.displayName="EyeInvisibleOutlined";var m=n.forwardRef(d),h=a(24215),g=a(41818),y=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a},G={click:"onClick",hover:"onMouseOver"},Z=n.forwardRef((function(l,e){var a=(0,n.useState)(!1),b=(0,x.Z)(a,2),r=b[0],i=b[1],f=function(){l.disabled||i(!r)},p=function(a){var b=a.getPrefixCls,o=l.className,i=l.prefixCls,x=l.inputPrefixCls,p=l.size,c=l.visibilityToggle,d=y(l,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),m=b("input",x),h=b("input-password",i),Z=c&&function(e){var a,u=l.action,b=l.iconRender,t=G[u]||"",o=(void 0===b?function(){return null}:b)(r),i=(a={},(0,v.Z)(a,t,f),(0,v.Z)(a,"className","".concat(e,"-icon")),(0,v.Z)(a,"key","passwordIcon"),(0,v.Z)(a,"onMouseDown",(function(l){l.preventDefault()})),(0,v.Z)(a,"onMouseUp",(function(l){l.preventDefault()})),a);return n.cloneElement(n.isValidElement(o)?o:n.createElement("span",null,o),i)}(h),w=t()(h,o,(0,v.Z)({},"".concat(h,"-").concat(p),!!p)),S=(0,u.Z)((0,u.Z)({},(0,g.Z)(d,["suffix","iconRender"])),{type:r?"text":"password",className:w,prefixCls:m,suffix:Z});return p&&(S.size=p),n.createElement(s.ZP,(0,u.Z)({ref:e},S))};return n.createElement(o.C,null,p)}));Z.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(l){return l?n.createElement(h.Z,null):n.createElement(m,null)}};var w=Z,S=a(11730),D=a(88834),j=a(23707),C=a(1815),E=a(61113),M=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a};var A=n.forwardRef((function(l,e){var a,b,r=l.prefixCls,i=l.inputPrefixCls,x=l.className,f=l.size,p=l.suffix,c=l.enterButton,d=void 0!==c&&c,m=l.addonAfter,h=l.loading,g=l.disabled,y=l.onSearch,G=l.onChange,Z=l.onCompositionStart,w=l.onCompositionEnd,A=M(l,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),B=n.useContext(o.E_),P=B.getPrefixCls,U=B.direction,O=n.useContext(C.Z),F=n.useRef(!1),R=f||O,k=n.useRef(null),L=function(l){var e;document.activeElement===(null===(e=k.current)||void 0===e?void 0:e.input)&&l.preventDefault()},H=function(l){var e,a;y&&y(null===(a=null===(e=k.current)||void 0===e?void 0:e.input)||void 0===a?void 0:a.value,l)},N=P("input-search",r),K=P("input",i),z="boolean"===typeof d?n.createElement(S.Z,null):null,T="".concat(N,"-button"),W=d||{},I=W.type&&!0===W.type.__ANT_BUTTON;b=I||"button"===W.type?(0,E.Tm)(W,(0,u.Z)({onMouseDown:L,onClick:function(l){var e,a;null===(a=null===(e=null===W||void 0===W?void 0:W.props)||void 0===e?void 0:e.onClick)||void 0===a||a.call(e,l),H(l)},key:"enterButton"},I?{className:T,size:R}:{})):n.createElement(j.Z,{className:T,type:d?"primary":void 0,size:R,disabled:g,key:"enterButton",onMouseDown:L,onClick:H,loading:h,icon:z},d),m&&(b=[b,(0,E.Tm)(m,{key:"addonAfter"})]);var Y=t()(N,(a={},(0,v.Z)(a,"".concat(N,"-rtl"),"rtl"===U),(0,v.Z)(a,"".concat(N,"-").concat(R),!!R),(0,v.Z)(a,"".concat(N,"-with-button"),!!d),a),x);return n.createElement(s.ZP,(0,u.Z)({ref:(0,D.sQ)(k,e),onPressEnter:function(l){F.current||H(l)}},A,{size:R,onCompositionStart:function(l){F.current=!0,null===Z||void 0===Z||Z(l)},onCompositionEnd:function(l){F.current=!1,null===w||void 0===w||w(l)},prefixCls:K,addonAfter:b,suffix:p,onChange:function(l){l&&l.target&&"click"===l.type&&y&&y(l.target.value,l),G&&G(l)},className:Y,disabled:g}))})),B=a(66920),P=s.ZP;P.Group=i,P.Search=A,P.TextArea=B.Z,P.Password=w;var U=P}}]);
//# sourceMappingURL=19706.3cf81674.chunk.js.map