"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[31525],{53551:(l,e,a)=>{a.d(e,{A:()=>S});var u=a(89379),v=a(53986),b=a(17313),r=a(64435),o=a(41976),i=a(65043),t=a(35475),n=a(64004),s=a(70579);const d=["isHex","reference","view","name","offset","type","options"],{Text:c}=b.A;function S(l){const{isHex:e,reference:a,view:b,name:S,offset:p,type:h,options:m}=l,f=(0,v.A)(l,d),x=null==b?0:(0,n.LF)(b,p,h),[w,A]=(0,i.useState)(x);w!==x&&A(x);const g=m.find((l=>l.value===w)),y=e?"0x".concat(w.toString(16)):w,B=void 0===g?y:g.label;return(0,s.jsxs)(r.A,{children:[(0,s.jsx)(c,{disabled:null==b,children:"".concat(S,":").concat(null==b?"":" ".concat(B," \u2192"))}),(0,s.jsx)(o.A,(0,u.A)({disabled:null==b,showSearch:!0,options:m,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l),onSelect:l=>{(0,n.M9)(b,p,h,l),A(l)}},f)),""===a||null==b?"":(0,s.jsx)(t.N_,{to:{pathname:"../".concat(a,"?id=").concat(w),state:b.buffer},children:"\u27a4"})]})}S.defaultProps={view:null,isHex:!1,reference:""}},34871:(l,e,a)=>{a.d(e,{A:()=>r});var u=a(89379),v=a(41976),b=(a(65043),a(70579));function r(l){return(0,b.jsx)(v.A,(0,u.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l)},l))}},31525:(l,e,a)=>{a.r(e),a.d(e,{default:()=>p});a(65043);var u=a(73216),v=a(35475),b=a(64435),r=a(92135),o=a(33275),i=a(46974);const t=[{label:"Entry 0",value:0}],n=[{label:"Separator",value:0},{label:"Iron Sword",value:1},{label:"Thin Sword",value:2},{label:"Steel Sword",value:3},{label:"Silver Sword",value:4},{label:"Iron Blade",value:5},{label:"Steel Blade",value:6},{label:"Silver Blade",value:7},{label:"Poison Sword",value:8},{label:"Rapier",value:9},{label:"Mani Katti",value:10},{label:"Hero Sword",value:11},{label:"Wo Dao",value:12},{label:"Killer Sword",value:13},{label:"Armour Killer",value:14},{label:"Dragon Killer",value:15},{label:"Light Sword",value:16},{label:"Rune Sword",value:17},{label:"Lancebuster",value:18},{label:"Long Sword",value:19},{label:"Iron Spear",value:20},{label:"Thin Spear",value:21},{label:"Steel Spear",value:22},{label:"Silver Spear",value:23},{label:"Poison Spear",value:24},{label:"Hero Spear",value:25},{label:"Killer Lance",value:26},{label:"Horse Killer",value:27},{label:"Javelin",value:28},{label:"Slender Spear",value:29},{label:"Axebuster",value:30},{label:"Iron Axe",value:31},{label:"Steel Axe",value:32},{label:"Silver Axe",value:33},{label:"Poison Axe",value:34},{label:"Hero Axe",value:35},{label:"Killer Axe",value:36},{label:"Halberd",value:37},{label:"Hammer",value:38},{label:"Devil Axe",value:39},{label:"Hand Axe",value:40},{label:"Tomahawk",value:41},{label:"Swordbuster",value:42},{label:"Sword Killer",value:43},{label:"Iron Bow",value:44},{label:"Steel Bow",value:45},{label:"Silver Bow",value:46},{label:"Poison Bow",value:47},{label:"Killer Bow",value:48},{label:"Hero Bow",value:49},{label:"Short Bow",value:50},{label:"Longbow",value:51},{label:"Ballista",value:52},{label:"Iron Ballista",value:53},{label:"Killer Ballista",value:54},{label:"Fire",value:55},{label:"Thunder",value:56},{label:"Elfire",value:57},{label:"Thunderstorm",value:58},{label:"Fimbulvetr",value:59},{label:"Forblaze",value:60},{label:"Excalibur",value:61},{label:"Lightning",value:62},{label:"Shine",value:63},{label:"Divine",value:64},{label:"Purge",value:65},{label:"Aura",value:66},{label:"Luce",value:67},{label:"Flux",value:68},{label:"Luna",value:69},{label:"Nosferatu",value:70},{label:"Eclipse",value:71},{label:"Fenrir",value:72},{label:"Gespenst",value:73},{label:"Live",value:74},{label:"Relive",value:75},{label:"Recover",value:76},{label:"Libro",value:77},{label:"Reserve",value:78},{label:"Rest",value:79},{label:"Silence",value:80},{label:"Sleep",value:81},{label:"Berserk",value:82},{label:"Warp",value:83},{label:"Rescue",value:84},{label:"Torch",value:85},{label:"Hammerne",value:86},{label:"Unlock",value:87},{label:"Barrier",value:88},{label:"Dragon Axe",value:89},{label:"Angelic Robe",value:90},{label:"Energy Ring",value:91},{label:"Secret Book",value:92},{label:"Speedwings",value:93},{label:"Goddess Icon",value:94},{label:"Dragonshield",value:95},{label:"Talisman",value:96},{label:"Boots",value:97},{label:"Body Ring",value:98},{label:"Hero's Proof",value:99},{label:"Knight's Proof",value:100},{label:"Orion's Bolt",value:101},{label:"Elysian Whip",value:102},{label:"Guiding Ring",value:103},{label:"Chest Key",value:104},{label:"Door Key",value:105},{label:"Thief Key",value:106},{label:"Vulnerary",value:107},{label:"Elixir",value:108},{label:"Holy Water",value:109},{label:"Antidote",value:110},{label:"Torch",value:111},{label:"Delphi Shield",value:112},{label:"Member Card",value:113},{label:"Silver Card",value:114},{label:"White Gem",value:115},{label:"Blue Gem",value:116},{label:"Red Gem",value:117},{label:"Gold",value:118},{label:"Uber Spear",value:119},{label:"Chest Key (5)",value:120},{label:"Mine",value:121},{label:"Light Rune",value:122},{label:"Iron Rune",value:123},{label:"Filla's Might",value:124},{label:"Ninis's Grace",value:125},{label:"Thor's Ire",value:126},{label:"Set's Litany",value:127},{label:"Emblem Sword",value:128},{label:"Emblem Spear",value:129},{label:"Emblem Axe",value:130},{label:"Emblem Bow",value:131},{label:"Durandal",value:132},{label:"Armads",value:133},{label:"Aureola",value:134},{label:"Earth Seal",value:135},{label:"Afa's Drops",value:136},{label:"Heaven Seal",value:137},{label:"Emblem Seal",value:138},{label:"Fell Contract",value:139},{label:"Sol Katti",value:140},{label:"Wolf Beil",value:141},{label:"Ereshkigal",value:142},{label:"Fire Dragon Stone",value:143},{label:"Regal Blade",value:144},{label:"Rex Hasta",value:145},{label:"Basilikos",value:146},{label:"Rienfleche",value:147},{label:"Heavy Spear",value:148},{label:"Short Spear",value:149},{label:"Ocean Seal",value:150},{label:"3000 G",value:151},{label:"5000 G",value:152},{label:"Wind Sword",value:153},{label:"-",value:154},{label:"-",value:155},{label:"-",value:156},{label:"-",value:157},{label:"-",value:158},{label:"-",value:159},{label:"-",value:160},{label:"-",value:161},{label:"-",value:162},{label:"-",value:163},{label:"-",value:164},{label:"-",value:165},{label:"-",value:166},{label:"-",value:167},{label:"-",value:168},{label:"-",value:169},{label:"-",value:170},{label:"-",value:171},{label:"-",value:172},{label:"-",value:173},{label:"-",value:174},{label:"-",value:175},{label:"-",value:176},{label:"-",value:177},{label:"-",value:178},{label:"-",value:179},{label:"-",value:180},{label:"-",value:181},{label:"-",value:182},{label:"-",value:183},{label:"-",value:184},{label:"-",value:185},{label:"-",value:186},{label:"-",value:187},{label:"-",value:188},{label:"-",value:189},{label:"-",value:190},{label:"-",value:191},{label:"-",value:192},{label:"-",value:193},{label:"-",value:194},{label:"-",value:195},{label:"-",value:196},{label:"-",value:197},{label:"-",value:198},{label:"-",value:199},{label:"-",value:200},{label:"-",value:201},{label:"-",value:202},{label:"-",value:203},{label:"-",value:204},{label:"-",value:205},{label:"-",value:206},{label:"-",value:207},{label:"-",value:208},{label:"-",value:209},{label:"-",value:210},{label:"-",value:211},{label:"-",value:212},{label:"-",value:213},{label:"-",value:214},{label:"-",value:215},{label:"-",value:216},{label:"-",value:217},{label:"-",value:218},{label:"-",value:219},{label:"-",value:220},{label:"-",value:221},{label:"-",value:222},{label:"-",value:223},{label:"-",value:224},{label:"-",value:225},{label:"-",value:226},{label:"-",value:227},{label:"-",value:228},{label:"-",value:229},{label:"-",value:230},{label:"-",value:231},{label:"-",value:232},{label:"-",value:233},{label:"-",value:234},{label:"-",value:235},{label:"-",value:236},{label:"-",value:237},{label:"-",value:238},{label:"-",value:239},{label:"-",value:240},{label:"-",value:241},{label:"-",value:242},{label:"-",value:243},{label:"-",value:244},{label:"-",value:245},{label:"-",value:246},{label:"-",value:247},{label:"-",value:248},{label:"-",value:249},{label:"-",value:250},{label:"-",value:251},{label:"-",value:252},{label:"-",value:253},{label:"-",value:254},{label:"-",value:255}];var s=a(64004),d=a(34871),c=a(53551),S=a(70579);function p(){var l;const[e]=(0,u.KC)(),[a,p]=(0,v.ok)(),h=a.get("id");let m=null;try{m=new DataView(e,13267032+16*h,16)}catch(f){m=null}return(0,S.jsxs)(b.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,S.jsx)(r.A,{message:"Chapter 24A Right Armoury Editor",type:"info"}),(0,S.jsx)("div",{children:(0,S.jsx)(d.A,{disabled:null==m,defaultValue:null!==(l=t.find((l=>l.value.toString()===h)))&&void 0!==l?l:h,onSelect:l=>p({id:l}),options:t})},h),(0,S.jsx)(c.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:m,name:"Item",offset:0}),(0,S.jsx)(c.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:m,name:"Item",offset:2}),(0,S.jsx)(c.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:m,name:"Item",offset:4}),(0,S.jsx)(c.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:m,name:"Item",offset:6}),(0,S.jsx)(c.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:m,name:"Item",offset:8}),(0,S.jsx)(c.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:m,name:"Item",offset:10}),(0,S.jsx)(c.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:n,view:m,name:"Item",offset:12}),(0,S.jsx)(o.A,{children:(0,S.jsx)(i.A,{})})]})}}}]);
//# sourceMappingURL=31525.ad0640ca.chunk.js.map