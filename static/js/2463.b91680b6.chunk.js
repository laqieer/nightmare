"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[2463],{53551:(e,l,a)=>{a.d(l,{A:()=>c});var u=a(89379),v=a(53986),b=a(17313),r=a(64435),o=a(41976),t=a(65043),i=a(35475),n=a(64004),s=a(70579);const d=["isHex","reference","view","name","offset","type","options"],{Text:p}=b.A;function c(e){const{isHex:l,reference:a,view:b,name:c,offset:f,type:m,options:S}=e,x=(0,v.A)(e,d),h=null==b?0:(0,n.LF)(b,f,m),[w,A]=(0,t.useState)(h);w!==h&&A(h);const g=S.find((e=>e.value===w)),y=l?"0x".concat(w.toString(16)):w,I=void 0===g?y:g.label;return(0,s.jsxs)(r.A,{children:[(0,s.jsx)(p,{disabled:null==b,children:"".concat(c,":").concat(null==b?"":" ".concat(I," \u2192"))}),(0,s.jsx)(o.A,(0,u.A)({disabled:null==b,showSearch:!0,options:S,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,n.M9)(b,f,m,e),A(e)}},x)),""===a||null==b?"":(0,s.jsx)(i.N_,{to:{pathname:"../".concat(a,"?id=").concat(w),state:b.buffer},children:"\u27a4"})]})}c.defaultProps={view:null,isHex:!1,reference:""}},34871:(e,l,a)=>{a.d(l,{A:()=>r});var u=a(89379),v=a(41976),b=(a(65043),a(70579));function r(e){return(0,b.jsx)(v.A,(0,u.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},2463:(e,l,a)=>{a.r(l),a.d(l,{default:()=>f});a(65043);var u=a(73216),v=a(35475),b=a(64435),r=a(92135),o=a(33275),t=a(46974);const i=[{label:"Entry 0",value:0}],n=[{label:"Separator",value:0},{label:"Iron Sword",value:1},{label:"Thin Sword",value:2},{label:"Steel Sword",value:3},{label:"Silver Sword",value:4},{label:"Iron Blade",value:5},{label:"Steel Blade",value:6},{label:"Silver Blade",value:7},{label:"Poison Sword",value:8},{label:"Rapier",value:9},{label:"Mani Katti (DUMMY)",value:10},{label:"Hero Sword",value:11},{label:"Shamshir",value:12},{label:"Killer Sword",value:13},{label:"Armour Killer",value:14},{label:"Dragon Killer",value:15},{label:"Light Sword",value:16},{label:"Rune Sword",value:17},{label:"Lancebuster",value:18},{label:"Long Sword",value:19},{label:"Iron Spear",value:20},{label:"Thin Spear",value:21},{label:"Steel Spear",value:22},{label:"Silver Spear",value:23},{label:"Poison Spear",value:24},{label:"Hero Spear",value:25},{label:"Killer Spear",value:26},{label:"Horse Killer",value:27},{label:"Javelin",value:28},{label:"Slender Spear",value:29},{label:"Axebuster",value:30},{label:"Iron Axe",value:31},{label:"Steel Axe",value:32},{label:"Silver Axe",value:33},{label:"Poison Axe",value:34},{label:"Hero Axe",value:35},{label:"Killer Axe",value:36},{label:"Halberd",value:37},{label:"Hammer",value:38},{label:"Devil Axe",value:39},{label:"Hand Axe",value:40},{label:"Tomahawk",value:41},{label:"Swordbuster",value:42},{label:"Swordkiller",value:43},{label:"Trainee Axe",value:44},{label:"Iron Bow",value:45},{label:"Steel Bow",value:46},{label:"Silver Bow",value:47},{label:"Poison Bow",value:48},{label:"Killer Bow",value:49},{label:"Hero Bow",value:50},{label:"Short Bow",value:51},{label:"Long Bow",value:52},{label:"Iron Ballista",value:53},{label:"Killer Ballista",value:54},{label:"Ballista",value:55},{label:"Fire",value:56},{label:"Thunder",value:57},{label:"Elfire",value:58},{label:"Thunderstorm",value:59},{label:"Fimbulvetr",value:60},{label:"Forblaze (DUMMY)",value:61},{label:"Excalibur",value:62},{label:"Lightning",value:63},{label:"Shine",value:64},{label:"Divine",value:65},{label:"Purge",value:66},{label:"Aura",value:67},{label:"Luce (DUMMY)",value:68},{label:"Flux",value:69},{label:"Luna",value:70},{label:"Nosferatu",value:71},{label:"Eclipse",value:72},{label:"Fenrir",value:73},{label:"Gleipnir",value:74},{label:"Live",value:75},{label:"Relive",value:76},{label:"Recover",value:77},{label:"Libro",value:78},{label:"Reserve",value:79},{label:"Rest",value:80},{label:"Silence",value:81},{label:"Sleep",value:82},{label:"Berserk",value:83},{label:"Warp",value:84},{label:"Rescue",value:85},{label:"Torch",value:86},{label:"Hammerne",value:87},{label:"Unlock",value:88},{label:"Magic Shield",value:89},{label:"Dragon Axe",value:90},{label:"Angelic Robe",value:91},{label:"Energy Ring",value:92},{label:"Secret Book",value:93},{label:"Speedwings",value:94},{label:"Goddess Icon",value:95},{label:"Dragonshield",value:96},{label:"Talisman",value:97},{label:"Boots",value:98},{label:"Body Ring",value:99},{label:"Hero's Proof",value:100},{label:"Knight's Proof",value:101},{label:"Orion's Bolt",value:102},{label:"Elysian Whip",value:103},{label:"Guiding Ring",value:104},{label:"Chest Key",value:105},{label:"Door Key",value:106},{label:"Thief Key",value:107},{label:"Vulnerary",value:108},{label:"Elixir",value:109},{label:"Holy Water",value:110},{label:"Antidote",value:111},{label:"Torch",value:112},{label:"Free Shield",value:113},{label:"Member Card",value:114},{label:"Silver Card",value:115},{label:"White Gem",value:116},{label:"Blue Gem",value:117},{label:"Red Gem",value:118},{label:"1G",value:119},{label:"Reginleif",value:120},{label:"Chest Key (5)",value:121},{label:"Mine (DUMMY)",value:122},{label:"Light Rune (DUMMY)",value:123},{label:"Hopron Shield",value:124},{label:"Filla's Might (DUMMY)",value:125},{label:"Ninis's Grace (DUMMY)",value:126},{label:"Thor's Ire (DUMMY)",value:127},{label:"Set's Litany (DUMMY)",value:128},{label:"Shadow Killer",value:129},{label:"Bright Lance",value:130},{label:"Fiend Cleaver",value:131},{label:"Beacon Bow",value:132},{label:"Sieglind",value:133},{label:"Battle Axe",value:134},{label:"Ivaldi",value:135},{label:"Master Proof",value:136},{label:"Metis's Tome",value:137},{label:"Heaven Seal (DUMMY)",value:138},{label:"Sharp Claw",value:139},{label:"Latona",value:140},{label:"Dragon Spear",value:141},{label:"Vidofnir",value:142},{label:"Naglfal",value:143},{label:"Decaying Breath",value:144},{label:"Audomra",value:145},{label:"Siegmund",value:146},{label:"Garm",value:147},{label:"Nidhogg",value:148},{label:"Heavy Spear",value:149},{label:"Short Spear",value:150},{label:"Conqueror's Proof",value:151},{label:"Moon Bracelet",value:152},{label:"Sun Bracelet",value:153},{label:"1G",value:154},{label:"5G",value:155},{label:"10G",value:156},{label:"50G",value:157},{label:"100G",value:158},{label:"3000G",value:159},{label:"5000G",value:160},{label:"Wind Sword",value:161},{label:"Vulnerary",value:162},{label:"Vulnerary (green note)",value:163},{label:"Vulnerary (red note)",value:164},{label:"Dance",value:165},{label:"Nightmare",value:166},{label:"Demon Shard",value:167},{label:"Demon Light",value:168},{label:"Ravager",value:169},{label:"Holy Dragon Stone",value:170},{label:"Demon Surge",value:171},{label:"Shadowshot",value:172},{label:"Rotten Claw",value:173},{label:"Fetid Claw",value:174},{label:"Poison Claw",value:175},{label:"Long Poison Claw",value:176},{label:"Fire Fang",value:177},{label:"Hell Fang",value:178},{label:"Evil Eye",value:179},{label:"Bloody Eye",value:180},{label:"Stone",value:181},{label:"Aircalibur",value:182},{label:"Juna Fruit",value:183},{label:"150G",value:184},{label:"200G",value:185},{label:"Black Gem",value:186},{label:"Gold Gem",value:187},{label:"-",value:188},{label:"-",value:189},{label:"-",value:190},{label:"-",value:191},{label:"-",value:192},{label:"-",value:193},{label:"-",value:194},{label:"-",value:195},{label:"-",value:196},{label:"-",value:197},{label:"-",value:198},{label:"-",value:199},{label:"-",value:200},{label:"-",value:201},{label:"-",value:202},{label:"-",value:203},{label:"-",value:204},{label:"-",value:205},{label:"-",value:206},{label:"-",value:207},{label:"-",value:208},{label:"-",value:209},{label:"-",value:210},{label:"-",value:211},{label:"-",value:212},{label:"-",value:213},{label:"-",value:214},{label:"-",value:215},{label:"-",value:216},{label:"-",value:217},{label:"-",value:218},{label:"-",value:219},{label:"-",value:220},{label:"-",value:221},{label:"-",value:222},{label:"-",value:223},{label:"-",value:224},{label:"-",value:225},{label:"-",value:226},{label:"-",value:227},{label:"-",value:228},{label:"-",value:229},{label:"-",value:230},{label:"-",value:231},{label:"-",value:232},{label:"-",value:233},{label:"-",value:234},{label:"-",value:235},{label:"-",value:236},{label:"-",value:237},{label:"-",value:238},{label:"-",value:239},{label:"-",value:240},{label:"-",value:241},{label:"-",value:242},{label:"-",value:243},{label:"-",value:244},{label:"-",value:245},{label:"-",value:246},{label:"-",value:247},{label:"-",value:248},{label:"-",value:249},{label:"-",value:250},{label:"-",value:251},{label:"-",value:252},{label:"-",value:253},{label:"-",value:254},{label:"-",value:255}];var s=a(64004),d=a(34871),p=a(53551),c=a(70579);function f(){var e;const[l]=(0,u.KC)(),[a,f]=(0,v.ok)(),m=a.get("id");let S=null;try{S=new DataView(l,10743822+36*m,36)}catch(x){S=null}return(0,c.jsxs)(b.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,c.jsx)(r.A,{message:"Map - Bethroen Armoury Editor",type:"info"}),(0,c.jsx)("div",{children:(0,c.jsx)(d.A,{disabled:null==S,defaultValue:null!==(e=i.find((e=>e.value.toString()===m)))&&void 0!==e?e:m,onSelect:e=>f({id:e}),options:i})},m),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 1",offset:0}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 2",offset:2}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 3",offset:4}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 4",offset:6}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 5",offset:8}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 6",offset:10}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 7",offset:12}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 8",offset:14}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 9",offset:16}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 10",offset:18}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 11",offset:20}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 12",offset:22}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 13",offset:24}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 14",offset:26}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 15",offset:28}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 16",offset:30}),(0,c.jsx)(p.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:S,name:"Item 17",offset:32}),(0,c.jsx)(o.A,{children:(0,c.jsx)(t.A,{})})]})}}}]);
//# sourceMappingURL=2463.b91680b6.chunk.js.map