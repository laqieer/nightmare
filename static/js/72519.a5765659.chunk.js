"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[72519],{53551:(e,l,a)=>{a.d(l,{A:()=>p});var r=a(89379),o=a(53986),i=a(17313),u=a(64435),v=a(41976),n=a(65043),t=a(35475),b=a(64004),s=a(70579);const d=["isHex","reference","view","name","offset","type","options"],{Text:w}=i.A;function p(e){const{isHex:l,reference:a,view:i,name:p,offset:m,type:A,options:S}=e,f=(0,o.A)(e,d),c=null==i?0:(0,b.LF)(i,m,A),[h,x]=(0,n.useState)(c);h!==c&&x(c);const g=S.find((e=>e.value===h)),D=l?"0x".concat(h.toString(16)):h,y=void 0===g?D:g.label;return(0,s.jsxs)(u.A,{children:[(0,s.jsx)(w,{disabled:null==i,children:"".concat(p,":").concat(null==i?"":" ".concat(y," \u2192"))}),(0,s.jsx)(v.A,(0,r.A)({disabled:null==i,showSearch:!0,options:S,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,b.M9)(i,m,A,e),x(e)}},f)),""===a||null==i?"":(0,s.jsx)(t.N_,{to:{pathname:"../".concat(a,"?id=").concat(h),state:i.buffer},children:"\u27a4"})]})}p.defaultProps={view:null,isHex:!1,reference:""}},34871:(e,l,a)=>{a.d(l,{A:()=>u});var r=a(89379),o=a(41976),i=(a(65043),a(70579));function u(e){return(0,i.jsx)(o.A,(0,r.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},72519:(e,l,a)=>{a.r(l),a.d(l,{default:()=>f});a(65043);var r=a(73216),o=a(35475),i=a(64435),u=a(92135),v=a(33275),n=a(46974);const t=[{label:"What do you think you're editing?",value:0}],b=[{label:"All Swords/   Separator",value:0},{label:"All Spears/   Iron Sword",value:1},{label:"All Axes/   Thin Sword",value:2},{label:"All Bows/   Steel Sword",value:3},{label:"All Staves/   Silver Sword",value:4},{label:"All Anima/   Iron Blade",value:5},{label:"All Light/   Steel Blade",value:6},{label:"All Dark/   Silver Blade",value:7},{label:"Poison Sword",value:8},{label:"Disarmed(required)/   Rapier",value:9},{label:"Mani Katti",value:10},{label:"Hero Sword",value:11},{label:"Wo Dao",value:12},{label:"Killer Sword",value:13},{label:"Armour Killer",value:14},{label:"Dragon Killer",value:15},{label:"Light Sword",value:16},{label:"Rune Sword",value:17},{label:"Lancebuster",value:18},{label:"Long Sword",value:19},{label:"Iron Spear",value:20},{label:"Thin Spear",value:21},{label:"Steel Spear",value:22},{label:"Silver Spear",value:23},{label:"Poison Spear",value:24},{label:"Hero Spear",value:25},{label:"Killer Lance",value:26},{label:"Horse Killer",value:27},{label:"Javelin",value:28},{label:"Slender Spear",value:29},{label:"Axebuster",value:30},{label:"Iron Axe",value:31},{label:"Steel Axe",value:32},{label:"Silver Axe",value:33},{label:"Poison Axe",value:34},{label:"Hero Axe",value:35},{label:"Killer Axe",value:36},{label:"Halberd",value:37},{label:"Hammer",value:38},{label:"Devil Axe",value:39},{label:"Hand Axe",value:40},{label:"Tomahawk",value:41},{label:"Swordbuster",value:42},{label:"Sword Killer",value:43},{label:"Iron Bow",value:44},{label:"Steel Bow",value:45},{label:"Silver Bow",value:46},{label:"Poison Bow",value:47},{label:"Killer Bow",value:48},{label:"Hero Bow",value:49},{label:"Short Bow",value:50},{label:"Longbow",value:51},{label:"Ballista",value:52},{label:"Iron Ballista",value:53},{label:"Killer Ballista",value:54},{label:"Fire",value:55},{label:"Thunder",value:56},{label:"Elfire",value:57},{label:"Thunderstorm",value:58},{label:"Fimbulvetr",value:59},{label:"Forblaze",value:60},{label:"Excalibur",value:61},{label:"Lightning",value:62},{label:"Shine",value:63},{label:"Divine",value:64},{label:"Purge",value:65},{label:"Aura",value:66},{label:"Luce",value:67},{label:"Flux",value:68},{label:"Luna",value:69},{label:"Nosferatu",value:70},{label:"Eclipse",value:71},{label:"Fenrir",value:72},{label:"Gespenst",value:73},{label:"Blagi's Touch",value:74},{label:"Dragon Axe",value:89},{label:"Bolt Axe",value:99},{label:"Uber Spear",value:119},{label:"Filla's Might",value:124},{label:"Ninis's Grace",value:125},{label:"Thor's Ire",value:126},{label:"Set's Litany",value:127},{label:"Emblem Sword",value:128},{label:"Emblem Spear",value:129},{label:"Emblem Axe",value:130},{label:"Emblem Bow",value:131},{label:"Durandal",value:132},{label:"Armads",value:133},{label:"Aureola",value:134},{label:"Sol Katti",value:140},{label:"Wolf Beil",value:141},{label:"Ereshkigal",value:142},{label:"Fire Dragon Stone",value:143},{label:"Regal Blade",value:144},{label:"Rex Hasta",value:145},{label:"Basilikos",value:146},{label:"Rienfleche",value:147},{label:"Heavy Spear",value:148},{label:"Short Spear",value:149},{label:"Wind Sword",value:153},{label:"???",value:154},{label:"???",value:155},{label:"???",value:156}],s=[{label:"Custom Animation for a Weapon",value:0},{label:"All Weapons for a Weapon Type",value:1}],d=[{label:"None (map animation)",value:0},{label:"Eliwood",value:1},{label:"Eliwood Disarmed",value:2},{label:"Lord Knight Eliwood w/ Sword",value:3},{label:"Lord Knight Eliwood w/ Durandal",value:4},{label:"Lord Knight Eliwood w/ Spear",value:5},{label:"Lord Knight Eliwood Disarmed",value:6},{label:"Hector",value:7},{label:"Hector w/ Hand Axe",value:8},{label:"Hector Disarmed",value:9},{label:"Great Lord Hector w/ Axe",value:10},{label:"Great Lord Hector w/ Hand Axe",value:11},{label:"Great Lord Hector w/ Armads",value:12},{label:"Great Lord Hector w/ Sword",value:13},{label:"Great Lord Hector Disarmed",value:14},{label:"Lyn",value:15},{label:"Lyn Disarmed",value:16},{label:"Blade Lord Lyn w/ Sword",value:17},{label:"Blade Lord Lyn w/ Sol Katti",value:18},{label:"Blade Lord Lyn w/ Bow",value:19},{label:"Blade Lord Lyn Disarmed",value:20},{label:"Mountain Thief",value:21},{label:"Mountain Thief w/ Hand Axe",value:22},{label:"Mountain Thief Disarmed",value:23},{label:"Pirate",value:24},{label:"Pirate w/ Hand Axe",value:25},{label:"Pirate Disarmed",value:26},{label:"Hawkeye",value:27},{label:"Hawkeye w/ Hand Axe",value:28},{label:"Hawkeye Disarmed",value:29},{label:"Fighter",value:30},{label:"Fighter w/ Hand Axe",value:31},{label:"Fighter Disarmed",value:32},{label:"Warrior w/ Axe",value:33},{label:"Warrior w/ Hand Axe",value:34},{label:"Warrior w/ Bow",value:35},{label:"Warrior Disarmed",value:36},{label:"Archer",value:37},{label:"Archer Disarmed",value:38},{label:"Archer (F)",value:39},{label:"Archer (F) Disarmed",value:40},{label:"Sniper",value:41},{label:"Sniper Disarmed",value:42},{label:"Sniper (F)",value:43},{label:"Sniper (F) Disarmed",value:44},{label:"Mercenary",value:45},{label:"Mercenary Disarmed",value:46},{label:"Hero w/ Sword",value:47},{label:"Hero w/ Axe",value:48},{label:"Hero w/ Hand Axe",value:49},{label:"Hero Disarmed",value:50},{label:"Swordfighter",value:51},{label:"Swordfighter Disarmed",value:52},{label:"Swordmaster",value:53},{label:"Swordmaster Disarmed",value:54},{label:"Lloyd",value:55},{label:"Lloyd Disarmed",value:56},{label:"Swordmaster (F)",value:57},{label:"Swordmaster (F) Disarmed",value:58},{label:"Socialknight w/ Spear",value:59},{label:"Socialknight w/ Sword",value:60},{label:"Socialknight Disarmed",value:61},{label:"Socialknight w/ Spear (again?)",value:62},{label:"Assassin Legault",value:63},{label:"Assassin Legault Disarmed",value:64},{label:"Paladin w/ Axe",value:65},{label:"Paladin w/ Hand Axe",value:66},{label:"Paladin w/ Sword",value:67},{label:"Paladin w/ Spear",value:68},{label:"Paladin Disarmed",value:69},{label:"Paladin w/ Axe",value:70},{label:"Paladin w/ Hand Axe",value:71},{label:"Paladin w/ Sword",value:72},{label:"Paladin w/ Spear",value:73},{label:"Paladin Disarmed",value:74},{label:"Isadora w/ Axe",value:75},{label:"Isadora w/ Hand Axe",value:76},{label:"Isadora w/ Sword",value:77},{label:"Isadora w/ Spear",value:78},{label:"Isadora Disarmed",value:79},{label:"Soldier",value:80},{label:"Soldier Disarmed",value:81},{label:"Armour Knight",value:82},{label:"Armour Knight Disarmed",value:83},{label:"General w/ Spear",value:84},{label:"General w/ Axe",value:85},{label:"General w/ Hand Axe",value:86},{label:"General Disarmed",value:87},{label:"Mage",value:88},{label:"Nino",value:89},{label:"Sage",value:90},{label:"Sage w/ Staff",value:91},{label:"Sage (F)",value:92},{label:"Sage (F) w/ Staff",value:93},{label:"Sage Nino",value:94},{label:"Sage Nino w/ Staff",value:95},{label:"Priest",value:96},{label:"Priest Disarmed",value:97},{label:"Serra",value:98},{label:"Serra Disarmed",value:99},{label:"Monk",value:100},{label:"Bishop",value:101},{label:"Bishop w/ Staff",value:102},{label:"Bishop Serra",value:103},{label:"Bishop Serra w/ Staff",value:104},{label:"Shaman",value:105},{label:"Druid",value:106},{label:"Druid w/ Staff",value:107},{label:"Dark Druid",value:108},{label:"Dark Druid w/ Staff (messed up)",value:109},{label:"Troubadour",value:110},{label:"Troubadour Disarmed",value:111},{label:"Valkyrie",value:112},{label:"Valkyrie w/ Staff",value:113},{label:"Athos",value:114},{label:"Athos w/ Staff",value:115},{label:"Nomad",value:116},{label:"Nomad Disarmed",value:117},{label:"Nomad Trooper w/ Sword",value:118},{label:"Nomad Trooper w/ Bow",value:119},{label:"Nomad Trooper Disarmed",value:120},{label:"Thief",value:121},{label:"Thief Disarmed",value:122},{label:"Legault",value:123},{label:"Legault Disarmed",value:124},{label:"Leila",value:125},{label:"Leila Disarmed",value:126},{label:"Assassin",value:127},{label:"Assassin Disarmed",value:128},{label:"Pegasus Knight",value:129},{label:"Pegasus Knight Disarmed",value:130},{label:"Falcon Knight w/ Sword",value:131},{label:"Falcon Knight w/ Spear",value:132},{label:"Falcon Knight Disarmed",value:133},{label:"Dragon Knight",value:134},{label:"Dragon Knight Disarmed",value:135},{label:"Dragon Master w/ Spear",value:136},{label:"Dragon Master w/ Sword",value:137},{label:"Dragon Master Disarmed",value:138},{label:"Fire Dragon",value:139},{label:"Archer on Ballista (unused, but still here from FE6)",value:140},{label:"Dancer",value:141},{label:"Bard",value:142},{label:"Lucius",value:143},{label:"Hero w/ Coat w/ Sword",value:144},{label:"Hero w/ Coat w/ Axe",value:145},{label:"Hero w/ Coat w/ Hand Axe",value:146},{label:"Hero w/ Coat Disarmed",value:147},{label:"Bishop Lucius",value:148},{label:"Bishop Lucius w/ Staff",value:149},{label:"Bishop Lucius Disarmed",value:150},{label:"Bishop Disarmed",value:151},{label:"Serra Disarmed",value:152},{label:"Guy",value:153},{label:"Guy Disarmed",value:154},{label:"Swordmaster Guy",value:155},{label:"Guy Disarmed",value:156},{label:"Berserker",value:157},{label:"Berserker w/ Hand Axe",value:158},{label:"Berserker Disarmed",value:159},{label:"Magic Seal",value:160},{label:"Tent",value:161},{label:"Transporter",value:162},{label:"Rogue Disarmed",value:163},{label:"Mage Knight (magic)",value:164},{label:"Mage Knight (staff)",value:165},{label:"Great Knight (sword)",value:166},{label:"Great Knight (lance)",value:167},{label:"Great Knight (axe)",value:168},{label:"Great Knight (disarmed)",value:169},{label:"BOLT AXE!!!",value:171},{label:"Bishop (F)",value:172},{label:"Bishop (F) AGAIN",value:173},{label:"Halberdier w/ Lance",value:174},{label:"Halberdier Disarmed",value:175}],w=[{label:"----------Always Zero----------",value:0}];var p=a(64004),m=a(34871),A=a(53551),S=a(70579);function f(){var e;const[l]=(0,r.KC)(),[a,f]=(0,o.ok)(),c=a.get("id");let h=null;try{h=new DataView(l,13211176+24*c,24)}catch(x){h=null}return(0,S.jsxs)(i.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,S.jsx)(u.A,{message:"Nino Sage Custom Animation Editor by Arch",type:"info"}),(0,S.jsx)("div",{children:(0,S.jsx)(m.A,{disabled:null==h,defaultValue:null!==(e=t.find((e=>e.value.toString()===c)))&&void 0!==e?e:c,onSelect:e=>f({id:e}),options:t})},c),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"ItemEditor",options:b,view:h,name:"+00 Weapon Type",offset:0}),(0,S.jsx)(A.A,{type:p.pe.U8,options:s,view:h,name:"+01 All weapons or a certain one?",offset:1}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"AnimationPointerTableEditor",options:d,view:h,name:"+02 Animation Played",offset:2}),(0,S.jsx)(A.A,{type:p.pe.U8,options:w,view:h,name:"+03 Separator (always zero)",offset:3}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"ItemEditor",options:b,view:h,name:"+04 Weapon Type",offset:4}),(0,S.jsx)(A.A,{type:p.pe.U8,options:s,view:h,name:"+05 All weapons or a certain one?",offset:5}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"AnimationPointerTableEditor",options:d,view:h,name:"+06 Animation Played",offset:6}),(0,S.jsx)(A.A,{type:p.pe.U8,options:w,view:h,name:"+07 Separator (always zero)",offset:7}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"ItemEditor",options:b,view:h,name:"+08 Weapon Type",offset:8}),(0,S.jsx)(A.A,{type:p.pe.U8,options:s,view:h,name:"+09 All weapons or a certain one?",offset:9}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"AnimationPointerTableEditor",options:d,view:h,name:"+0A Animation Played",offset:10}),(0,S.jsx)(A.A,{type:p.pe.U8,options:w,view:h,name:"+0B Separator (always zero)",offset:11}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"ItemEditor",options:b,view:h,name:"+0C Weapon Type",offset:12}),(0,S.jsx)(A.A,{type:p.pe.U8,options:s,view:h,name:"+0D All weapons or a certain one?",offset:13}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"AnimationPointerTableEditor",options:d,view:h,name:"+0E Animation Played",offset:14}),(0,S.jsx)(A.A,{type:p.pe.U8,options:w,view:h,name:"+0F Separator (always zero)",offset:15}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"ItemEditor",options:b,view:h,name:"+10 Weapon Type",offset:16}),(0,S.jsx)(A.A,{type:p.pe.U8,options:s,view:h,name:"+11 All weapons or a certain one?",offset:17}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"AnimationPointerTableEditor",options:d,view:h,name:"+12 Animation Played",offset:18}),(0,S.jsx)(A.A,{type:p.pe.U8,options:w,view:h,name:"+13 Separator (always zero)",offset:19}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"ItemEditor",options:b,view:h,name:"+14 Weapon Type",offset:20}),(0,S.jsx)(A.A,{type:p.pe.U8,options:s,view:h,name:"+15 All weapons or a certain one?",offset:21}),(0,S.jsx)(A.A,{isHex:!0,type:p.pe.U8,reference:"AnimationPointerTableEditor",options:d,view:h,name:"+16 Animation Played",offset:22}),(0,S.jsx)(A.A,{type:p.pe.U8,options:w,view:h,name:"+17 Separator (always zero)",offset:23}),(0,S.jsx)(v.A,{children:(0,S.jsx)(n.A,{})})]})}}}]);
//# sourceMappingURL=72519.a5765659.chunk.js.map