"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[99729],{73339:function(e,l,a){a.d(l,{Z:function(){return c}});var u=a(1413),v=a(29439),o=a(97788),n=a(83099),b=a(13344),t=a(72791),r=a(83282),i=a(80184),s=o.Z.Text;function c(e){var l=e.view,a=e.name,o=e.offset,c=e.type,f=null==l?0:(0,r.ij)(l,o,c),S=(0,t.useState)(f),d=(0,v.Z)(S,2),x=d[0],m=d[1];return x!==f&&m(f),(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(s,{disabled:null==l,children:"".concat(a,":").concat(null==l?"":" ".concat(x," \u2192"))}),(0,i.jsx)(b.Z,(0,u.Z)({disabled:null==l,min:r.Cu[c][0],max:r.Cu[c][1],onPressEnter:function(e){var a=parseInt(e.target.value,10);(0,r.cW)(l,o,c,a),m(a)}},e))]})}c.defaultProps={view:null}},4220:function(e,l,a){a.d(l,{Z:function(){return d}});var u=a(1413),v=a(29439),o=a(44925),n=a(97788),b=a(83099),t=a(21951),r=a(72791),i=a(11087),s=a(83282),c=a(80184),f=["isHex","reference","view","name","offset","type","options"],S=n.Z.Text;function d(e){var l=e.isHex,a=e.reference,n=e.view,d=e.name,x=e.offset,m=e.type,p=e.options,g=(0,o.Z)(e,f),w=null==n?0:(0,s.ij)(n,x,m),h=(0,r.useState)(w),C=(0,v.Z)(h,2),L=C[0],B=C[1];L!==w&&B(w);var y=p.find((function(e){return e.value===L})),M=l?"0x".concat(L.toString(16)):L,k=void 0===y?M:y.label;return(0,c.jsxs)(b.Z,{children:[(0,c.jsx)(S,{disabled:null==n,children:"".concat(d,":").concat(null==n?"":" ".concat(k," \u2192"))}),(0,c.jsx)(t.Z,(0,u.Z)({disabled:null==n,showSearch:!0,options:p,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)},onSelect:function(e){(0,s.cW)(n,x,m,e),B(e)}},g)),""===a||null==n?"":(0,c.jsx)(i.rU,{to:{pathname:"../".concat(a,"?id=").concat(L),state:n.buffer},children:"\u27a4"})]})}d.defaultProps={view:null,isHex:!1,reference:""}},23145:function(e,l,a){a.d(l,{Z:function(){return c}});var u=a(1413),v=a(29439),o=a(97788),n=a(83099),b=a(49389),t=a(72791),r=a(83282),i=a(80184),s=o.Z.Text;function c(e){var l=(0,t.useState)(""),a=(0,v.Z)(l,2),o=a[0],c=a[1],f=e.view,S=e.name,d=e.offset,x=e.type,m=null==f?0:(0,r.ij)(f,d,x),p=(0,t.useState)(m),g=(0,v.Z)(p,2),w=g[0],h=g[1];return w!==m&&h(m),(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(s,{disabled:null==f,children:"".concat(S,":").concat(null==f?"":" 0x".concat(w.toString(16)," \u2192"))}),(0,i.jsx)(b.Z,(0,u.Z)({disabled:null==f,allowClear:!0,maxLength:2*r.Tz[x],prefix:"0x",value:o,onChange:function(e){var l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&c(l)},onPressEnter:function(e){var l=parseInt(e.target.value,16);(0,r.cW)(f,d,x,l),h(l)}},e))]})}c.defaultProps={view:null}},9933:function(e,l,a){a.d(l,{Z:function(){return n}});var u=a(1413),v=a(21951),o=(a(72791),a(80184));function n(e){return(0,o.jsx)(v.Z,(0,u.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)}},e))}},99729:function(e,l,a){a.r(l),a.d(l,{default:function(){return Z}});var u=a(29439),v=(a(72791),a(57689)),o=a(11087),n=a(83099),b=a(33441),t=a(43292),r=a(79042),i=[{label:"Iron Sword",value:0},{label:"Steel Sword",value:1},{label:"Silver Sword",value:2},{label:"Thin Sword",value:3},{label:"Iron Broadsword",value:4},{label:"Killer Sword",value:5},{label:"Poison Sword",value:6},{label:"Berserk Sword",value:7},{label:"Sleep Sword",value:8},{label:"Beosword",value:9},{label:"Holy Sword",value:10},{label:"Loputous Sword",value:11},{label:"Blagi Sword",value:12},{label:"Light Sword",value:13},{label:"Hero Sword",value:14},{label:"King Sword",value:15},{label:"Earth Sword",value:16},{label:"Wind Sword",value:17},{label:"Fire Sword",value:18},{label:"Thunder Sword",value:19},{label:"Elite Sword",value:20},{label:"Armour Killer",value:21},{label:"Rapier",value:22},{label:"Short Sword",value:23},{label:"Long Sword",value:24},{label:"Great Sword",value:25},{label:"Master Sword",value:26},{label:"Darkness Sword",value:27},{label:"Mareeta's Sword",value:28},{label:"Broken Sword",value:29},{label:"Iron Lance",value:30},{label:"Steel Lance",value:31},{label:"Silver Lance",value:32},{label:"Thin Lance",value:33},{label:"Poison Lance",value:34},{label:"Dragon Lance",value:35},{label:"Darkness Lance",value:36},{label:"Hero Lance",value:37},{label:"Short Lance",value:38},{label:"Long Lance",value:39},{label:"Great Lance",value:40},{label:"Javelin",value:41},{label:"Master Lance",value:42},{label:"Knight Killer",value:43},{label:"Killer Lance",value:44},{label:"Gae Bolg",value:45},{label:"Gungnir",value:46},{label:"Broken Lance",value:47},{label:"Iron Axe",value:48},{label:"Poison Axe",value:49},{label:"Steel Axe",value:50},{label:"Silver Axe",value:51},{label:"Hand Axe",value:52},{label:"Hammer",value:53},{label:"Killer Axe",value:54},{label:"Pugi",value:55},{label:"Hero Axe",value:56},{label:"Devil Axe",value:57},{label:"Battle Axe",value:58},{label:"Poleaxe",value:59},{label:"Master Axe",value:60},{label:"Broken Axe",value:61},{label:"Iron Bow",value:62},{label:"Steel Bow",value:63},{label:"Silver Bow",value:64},{label:"Poison Bow",value:65},{label:"Killer Bow",value:66},{label:"Hero Bow",value:67},{label:"Short Bow",value:68},{label:"Long Bow",value:69},{label:"Great Bow",value:70},{label:"Master Bow",value:71},{label:"Long Arch",value:72},{label:"Iron Arch",value:73},{label:"Killer Arch",value:74},{label:"Poison Arch",value:75},{label:"Broken Bow",value:76},{label:"Fire",value:77},{label:"Elfire",value:78},{label:"Volcannon",value:79},{label:"Falaflame",value:80},{label:"Thunder",value:81},{label:"Daim Thunder",value:82},{label:"Tron",value:83},{label:"Torhammer",value:84},{label:"Wind",value:85},{label:"Grafucalibur",value:86},{label:"Tornado",value:87},{label:"Holsety",value:88},{label:"Lightning",value:89},{label:"Rizziah",value:90},{label:"Aura",value:91},{label:"Yotsmungand",value:92},{label:"Fenrir",value:93},{label:"Hell",value:94},{label:"Loputous",value:95},{label:"Meteo",value:96},{label:"Thunderstorm",value:97},{label:"Blizzard",value:98},{label:"Poison",value:99},{label:"Stone",value:100},{label:"Holsety(Unlimited)",value:101},{label:"Broken Book",value:102},{label:"Live",value:103},{label:"Relive",value:104},{label:"Recover",value:105},{label:"Libro",value:106},{label:"Reserve",value:107},{label:"Rescue",value:108},{label:"Warp",value:109},{label:"Rest",value:110},{label:"Silence",value:111},{label:"Sleep",value:112},{label:"Torch",value:113},{label:"Return",value:114},{label:"Repair",value:115},{label:"Thief",value:116},{label:"Watch",value:117},{label:"Berserk",value:118},{label:"Unlock",value:119},{label:"Magic Shield",value:120},{label:"Rewarp",value:121},{label:"Cure",value:122},{label:"Broken Staff",value:123},{label:"Luck Ring",value:124},{label:"Live Ring",value:125},{label:"Speed Ring",value:126},{label:"Magic Ring",value:127},{label:"Power Ring",value:128},{label:"Body Ring",value:129},{label:"Shield Ring",value:130},{label:"Skill Ring",value:131},{label:"Leg Ring",value:132},{label:"Knight Proof",value:133},{label:"Master Proof",value:134},{label:"Treasure Key",value:135},{label:"Door Key",value:136},{label:"Bridge Key",value:137},{label:"Thief Key",value:138},{label:"S Drink",value:139},{label:"Medicine",value:140},{label:"Holy Water",value:141},{label:"Torch",value:142},{label:"Antidote",value:143},{label:"Member Card",value:144},{label:"Odo Scroll",value:145},{label:"Baldo Scroll",value:146},{label:"Hezul Scroll",value:147},{label:"Dain Scroll",value:148},{label:"Noba Scroll",value:149},{label:"Neir Scroll",value:150},{label:"Ulir Scroll",value:151},{label:"Tordo Scroll",value:152},{label:"Fala Scroll",value:153},{label:"Sety Scroll",value:154},{label:"Blagi Scroll",value:155},{label:"Heim Scroll",value:156},{label:"Elite Manual",value:157},{label:"Duel Manual",value:158},{label:"Bargain Manual",value:159},{label:"Ambush Manual",value:160},{label:"Wrath Manual",value:161},{label:"Continue Manual",value:162},{label:"Prayer Manual",value:163},{label:"Awareness Manual",value:164},{label:"Sunlight Manual",value:165},{label:"Moonlight Manual",value:166}],s=[{label:"Sword",value:0},{label:"Lance",value:1},{label:"Axe",value:2},{label:"Bow",value:3},{label:"Staff",value:4},{label:"Fire",value:5},{label:"Thunder",value:6},{label:"Wind",value:7},{label:"Light",value:8},{label:"Dark",value:9},{label:"Item",value:11},{label:"Fire Sword",value:80},{label:"Thunder Sword",value:96},{label:"Wind Sword",value:112},{label:"Light Sword",value:128}],c=[{label:"1~1",value:17},{label:"1~2",value:33},{label:"2~2",value:34},{label:"3~10",value:163},{label:"3~15",value:243},{label:"Infinite (staves only)",value:161}],f=[{label:"-",value:0},{label:"E",value:50},{label:"D",value:100},{label:"C",value:150},{label:"B",value:200},{label:"A",value:250},{label:"----\x3eCustom Lock 1<----",value:62816},{label:"----\x3eCustom Lock 2<----",value:62832},{label:"----\x3eCustom Lock 3<----",value:62848},{label:"----\x3eCustom Lock 4<----",value:62864},{label:"----\x3eCustom Lock 5<----",value:62880},{label:"----\x3eCustom Lock 6<----",value:62896},{label:"----\x3eCustom Lock 7<----",value:62912},{label:"----\x3eCustom Lock 8<----",value:62928},{label:"----\x3eCustom Lock 9<----",value:62944},{label:"----\x3eCustom Lock 10<----",value:62960},{label:"----\x3eCustom Lock 11<----",value:62976},{label:"----\x3eCustom Lock 12<----",value:62992},{label:"----\x3eCustom Lock 13<----",value:63008},{label:"----\x3eCustom Lock 14<----",value:63024},{label:"----\x3eCustom Lock 15<----",value:63040},{label:"----\x3eCustom Lock 16<----",value:63056},{label:"Nanna",value:39386},{label:"Asvel",value:39390},{label:"Sara",value:39404},{label:"Sety",value:39408},{label:"Nanna/Delmud/Fergus/Leaf",value:39418},{label:"Leidrick/Ains",value:39524},{label:"Fergus/Delmud",value:39482},{label:"Olwen/Reinhardt",value:39506},{label:"Leaf",value:39424},{label:"Mareeta",value:39502},{label:"Althenna/Dean",value:39492},{label:"Finn",value:39488},{label:"Othin/(Berserker)",value:39428},{label:"Manster/Freege",value:39438},{label:"(Iron Arch)/Freege",value:39458},{label:"Nobody",value:39450},{label:"Freege/Manster",value:39452},{label:"Nobody",value:39542},{label:"Ishtar",value:39434},{label:"Araphen/Loputo/Beldo",value:39532},{label:"Nobody",value:39542},{label:"Nobody",value:39544},{label:"Saphy",value:39478},{label:"Tina/Loputo",value:39464},{label:"Tina/Freege/Loputo",value:39470}],S=[{label:"None",value:32938},{label:"----\x3eCustom Effectiveness 1<----",value:63232},{label:"----\x3eCustom Effectiveness 2<----",value:63248},{label:"----\x3eCustom Effectiveness 3<----",value:63264},{label:"----\x3eCustom Effectiveness 4<----",value:63280},{label:"----\x3eCustom Effectiveness 5<----",value:63296},{label:"----\x3eCustom Effectiveness 6<----",value:63312},{label:"----\x3eCustom Effectiveness 7<----",value:63328},{label:"----\x3eCustom Effectiveness 8<----",value:63344},{label:"----\x3eCustom Effectiveness 9<----",value:63360},{label:"----\x3eCustom Effectiveness 10<----",value:63376},{label:"----\x3eCustom Effectiveness 11<----",value:63392},{label:"----\x3eCustom Effectiveness 12<----",value:63408},{label:"----\x3eCustom Effectiveness 13<----",value:63424},{label:"----\x3eCustom Effectiveness 14<----",value:63440},{label:"----\x3eCustom Effectiveness 15<----",value:63456},{label:"----\x3eCustom Effectiveness 16<----",value:63472},{label:"Armours",value:32890},{label:"Dragons",value:32898},{label:"Flying",value:32902},{label:"Armours/Knights",value:32911},{label:"Knights",value:32918}],d=[{label:"-",value:32768},{label:"----\x3eCustom Bonuses 1<----",value:63072},{label:"----\x3eCustom Bonuses 2<----",value:63088},{label:"----\x3eCustom Bonuses 3<----",value:63104},{label:"----\x3eCustom Bonuses 4<----",value:63120},{label:"----\x3eCustom Bonuses 5<----",value:63136},{label:"----\x3eCustom Bonuses 6<----",value:63152},{label:"----\x3eCustom Bonuses 7<----",value:63168},{label:"----\x3eCustom Bonuses 8<----",value:63184},{label:"----\x3eCustom Bonuses 9<----",value:63200},{label:"----\x3eCustom Bonuses 10<----",value:63216},{label:"----\x3eCustom Bonuses 11<----",value:63232},{label:"----\x3eCustom Bonuses 12<----",value:63248},{label:"----\x3eCustom Bonuses 13<----",value:63264},{label:"----\x3eCustom Bonuses 14<----",value:63280},{label:"----\x3eCustom Bonuses 15<----",value:63296},{label:"----\x3eCustom Bonuses 16<----",value:63312},{label:"----\x3eCustom Bonuses 17<----",value:63344},{label:"----\x3eCustom Bonuses 18<----",value:63360},{label:"----\x3eCustom Bonuses 19<----",value:63376},{label:"----\x3eCustom Bonuses 20<----",value:63392},{label:"----\x3eCustom Bonuses 21<----",value:63408},{label:"----\x3eCustom Bonuses 22<----",value:63424},{label:"----\x3eCustom Bonuses 23<----",value:63440},{label:"----\x3eCustom Bonuses 24<----",value:63456},{label:"----\x3eCustom Bonuses 25<----",value:63472},{label:"-",value:32769},{label:"-",value:32770},{label:"-",value:32771},{label:"-",value:32772},{label:"+10 LUK",value:32773},{label:"-",value:32774},{label:"+10 DEF",value:32775},{label:"+10 SPD",value:32776},{label:"+10 SKL",value:32777},{label:"+10 MGC",value:32778},{label:"+10 STR",value:32779},{label:"-",value:32780},{label:"-",value:32781},{label:"-",value:32782},{label:"-",value:32783},{label:"-",value:32784},{label:"-",value:32785},{label:"+10 LUK",value:32786},{label:"-",value:32787},{label:"+10 DEF",value:32788},{label:"+10 SPD",value:32789},{label:"+10 SKL",value:32790},{label:"+10 MGC, +5 LUK",value:32791},{label:"+10 STR",value:32792},{label:"+5 DEF",value:32793},{label:"+5 SPD",value:32794},{label:"+5 SKL",value:32795},{label:"+5 MGC",value:32796},{label:"+5 STR, +5 LUK",value:32797},{label:"-",value:32798},{label:"+5 DEF",value:32799},{label:"+5 SPD",value:32800},{label:"+5 SKL",value:32801},{label:"+5 MGC",value:32802},{label:"+5 STR",value:32803},{label:"-",value:32804},{label:"-",value:32805},{label:"+5 LUK",value:32806},{label:"-",value:32807},{label:"+5 DEF",value:32808},{label:"+5 SPD",value:32809},{label:"+5 SKL",value:32810},{label:"+5 MGC",value:32811},{label:"+5 STR",value:32812},{label:"-",value:32813},{label:"-",value:32814},{label:"-",value:32815},{label:"+5 LUK",value:32816},{label:"-",value:32817},{label:"+5 DEF",value:32818},{label:"+5 SPD",value:32819},{label:"+5 SKL",value:32820},{label:"+5 MGC, +20 LUK",value:32821},{label:"+5 STR",value:32822},{label:"+20 DEF",value:32823},{label:"+20 SPD",value:32824},{label:"+20 SKL",value:32825},{label:"+20 MGC",value:32826},{label:"+20 STR",value:32827},{label:"-",value:32828},{label:"-",value:32829},{label:"-",value:32830},{label:"-",value:32831},{label:"-",value:32832},{label:"-",value:32833},{label:"+10 LUK",value:32834},{label:"-",value:32835},{label:"+10 DEF",value:32836},{label:"+10 SPD",value:32837},{label:"+10 SKL, +20 LUK",value:32838},{label:"+10 MGC, +20 LUK",value:32839},{label:"+10 STR, +20 DEF",value:32840},{label:"+20 SPD, +20 DEF",value:32841},{label:"+20 SKL, +20 SPD",value:32842},{label:"+20 MGC, +20 SKL",value:32843},{label:"+20 STR, +20 MGC",value:32844},{label:"+20 STR",value:32845},{label:"-",value:32846},{label:"-",value:32847},{label:"-",value:32848},{label:"-",value:32849},{label:"-",value:32850},{label:"-",value:32851},{label:"-",value:32852},{label:"+20 LUK",value:32853},{label:"-",value:32854},{label:"+20 DEF",value:32855},{label:"+20 SPD",value:32856},{label:"+20 SKL",value:32857},{label:"+20 MGC",value:32858},{label:"+20 STR",value:32859},{label:"-",value:32860},{label:"-",value:32861},{label:"-",value:32862},{label:"+20 LUK",value:32863},{label:"-",value:32864},{label:"+20 DEF",value:32865},{label:"+20 SPD",value:32866},{label:"+20 SKL",value:32867},{label:"+20 MGC",value:32868},{label:"+20 STR",value:32869},{label:"-",value:32870},{label:"-",value:32871},{label:"+10 LUK",value:32872},{label:"-",value:32873},{label:"+10 DEF",value:32874},{label:"+10 SPD",value:32875},{label:"+10 SKL, +10 LUK",value:32876},{label:"+10 MGC",value:32877},{label:"+10 STR, +10 DEF",value:32878},{label:"+10 SPD",value:32879},{label:"+10 SKL",value:32880},{label:"+10 MGC",value:32881},{label:"+10 STR",value:32882},{label:"-",value:32883}],x=[{label:"Nothing",value:0},{label:"Luck Ring effect",value:2},{label:"Live Ring effect",value:4},{label:"Speed Ring effect",value:6},{label:"Magic Ring effect",value:8},{label:"Power Ring effect",value:10},{label:"Body Ring effect",value:12},{label:"Shield Ring effect",value:14},{label:"Skill Ring effect",value:16},{label:"Leg Ring effect",value:18},{label:"Knight Proof effect",value:20},{label:"Master Proof effect",value:22},{label:"Treasure Key effect",value:24},{label:"Door Key effect",value:26},{label:"Bridge Key effect",value:28},{label:"Thief Key effect",value:30},{label:"Medicine effect",value:32},{label:"Holy Water effect",value:34},{label:"Torch effect",value:36},{label:"Antidote effect",value:38},{label:"Elite Skill",value:40},{label:"Duel Skill",value:42},{label:"Bargain Skill",value:44},{label:"Ambush Skill",value:46},{label:"Wrath Skill",value:48},{label:"Continue Skill",value:50},{label:"Prayer Skill",value:52},{label:"Awareness Skill",value:54},{label:"Sunlight Skill",value:56},{label:"Moonlight Skill",value:58},{label:"Live Staff effect",value:60},{label:"Relive Staff effect",value:62},{label:"Recover Staff effect",value:64},{label:"Libro Staff effect",value:66},{label:"Reserve Staff effect",value:68},{label:"Rescue Staff effect",value:70},{label:"Warp Staff effect",value:72},{label:"Rest Staff effect",value:74},{label:"Silence Staff effect",value:76},{label:"Sleep Staff effect",value:78},{label:"Torch Staff effect",value:80},{label:"Return Staff effect",value:82},{label:"Repair Staff effect",value:84},{label:"Thief Staff effect",value:86},{label:"Watch Staff effect",value:88},{label:"Berserk Staff effect",value:90},{label:"Unlock Staff effect",value:92},{label:"Magic Shield effect",value:94},{label:"Rewarp effect",value:96},{label:"S Drink effect",value:102},{label:"Cure Staff effect",value:104}],m=[{label:"Nothing",value:0},{label:"Poison",value:2},{label:"Devil",value:4},{label:"Steal HP",value:6},{label:"Stone",value:8},{label:"Hell",value:10},{label:"Berserk",value:12},{label:"Sleep",value:14}],p=[{label:"Nothing",value:0},{label:"Charisma",value:2},{label:"0x0A",value:10},{label:"0x12",value:18},{label:"0x82",value:130},{label:"Prayer",value:8},{label:"0x18",value:24},{label:"0x88",value:136},{label:"Wrath",value:16},{label:"0x90",value:144},{label:"Awareness",value:128},{label:"0x1A",value:26},{label:"0x8A",value:138},{label:"0x92",value:146},{label:"0x98",value:152},{label:"0x9A",value:154}],g=[{label:"Nothing",value:0},{label:"Ambush",value:1},{label:"Elite",value:16},{label:"0x11",value:17},{label:"2x-Attack",value:64},{label:"0x41",value:65},{label:"0x50",value:80},{label:"0x51",value:81}],w=[{label:"Item",value:0},{label:"Weapon",value:4},{label:"Magic Weapon",value:6},{label:"Magic",value:12},{label:"Staff",value:16},{label:"Infinite Use Item",value:32},{label:"Infinite Use Weapon",value:36},{label:"Infinite Use Magic Weapon",value:38},{label:"Infinite Use Magic",value:44},{label:"Infinite Use Staff",value:48},{label:"Treasure Item",value:64},{label:"Treasure Weapon",value:68},{label:"Treasure Magic Weapon",value:70},{label:"Treasure Magic",value:76},{label:"Treasure Staff",value:80},{label:"Infinite Use Treasure Item",value:96},{label:"Infinite Use Treasure Weapon",value:100},{label:"Infinite Use Treasure Magic Weapon",value:102},{label:"Infinite Use Treasure Magic",value:108},{label:"Infinite Use Treasure Staff",value:112},{label:"Broken Item",value:160},{label:"Broken Weapon",value:164}],h=[{label:"Iron Sword",value:0},{label:"Steel Sword",value:1},{label:"Silver Sword",value:2},{label:"Thin Sword",value:3},{label:"Iron Broadsword",value:4},{label:"Killer Sword",value:5},{label:"Poison Sword",value:6},{label:"Berserk Sword",value:7},{label:"Sleep Sword",value:8},{label:"Beosword",value:9},{label:"Holy Sword",value:10},{label:"Loputous Sword",value:11},{label:"Blagi Sword",value:12},{label:"Light Sword",value:13},{label:"Hero Sword",value:14},{label:"King Sword",value:15},{label:"Earth Sword",value:16},{label:"Wind Sword",value:17},{label:"Fire Sword",value:18},{label:"Thunder Sword",value:19},{label:"Elite Sword",value:20},{label:"Armour Killer",value:21},{label:"Rapier",value:22},{label:"Short Sword",value:23},{label:"Long Sword",value:24},{label:"Great Sword",value:25},{label:"Master Sword",value:26},{label:"Darkness Sword",value:27},{label:"Mareeta's Sword",value:28},{label:"Broken Sword",value:29},{label:"Iron Lance",value:30},{label:"Steel Lance",value:31},{label:"Silver Lance",value:32},{label:"Thin Lance",value:33},{label:"Poison Lance",value:34},{label:"Dragon Lance",value:35},{label:"Darkness Lance",value:36},{label:"Hero Lance",value:37},{label:"Short Lance",value:38},{label:"Long Lance",value:39},{label:"Great Lance",value:40},{label:"Javelin",value:41},{label:"Master Lance",value:42},{label:"Knight Killer",value:43},{label:"Killer Lance",value:44},{label:"Gae Bolg",value:45},{label:"Gungnir",value:46},{label:"Broken Lance",value:47},{label:"Iron Axe",value:48},{label:"Poison Axe",value:49},{label:"Steel Axe",value:50},{label:"Silver Axe",value:51},{label:"Hand Axe",value:52},{label:"Hammer",value:53},{label:"Killer Axe",value:54},{label:"Pugi",value:55},{label:"Hero Axe",value:56},{label:"Devil Axe",value:57},{label:"Battle Axe",value:58},{label:"Poleaxe",value:59},{label:"Master Axe",value:60},{label:"Broken Axe",value:61},{label:"Iron Bow",value:62},{label:"Steel Bow",value:63},{label:"Silver Bow",value:64},{label:"Poison Bow",value:65},{label:"Killer Bow",value:66},{label:"Hero Bow",value:67},{label:"Short Bow",value:68},{label:"Long Bow",value:69},{label:"Great Bow",value:70},{label:"Master Bow",value:71},{label:"Long Arch",value:72},{label:"Iron Arch",value:73},{label:"Killer Arch",value:74},{label:"Poison Arch",value:75},{label:"Broken Bow",value:76},{label:"Fire",value:77},{label:"Elfire",value:78},{label:"Volcannon",value:79},{label:"Falaflame",value:80},{label:"Thunder",value:81},{label:"Daim Thunder",value:82},{label:"Tron",value:83},{label:"Torhammer",value:84},{label:"Wind",value:85},{label:"Grafucalibur",value:86},{label:"Tornado",value:87},{label:"Holsety",value:88},{label:"Lightning",value:89},{label:"Rizziah",value:90},{label:"Aura",value:91},{label:"Yotsmungand",value:92},{label:"Fenrir",value:93},{label:"Hell",value:94},{label:"Loputous",value:95},{label:"Meteo",value:96},{label:"Thunderstorm",value:97},{label:"Blizzard",value:98},{label:"Poison",value:99},{label:"Stone",value:100},{label:"UNUSED (Stone)",value:101},{label:"Broken Book",value:102},{label:"Live",value:103},{label:"Relive",value:104},{label:"Recover",value:105},{label:"Libro",value:106},{label:"Reserve",value:107},{label:"Rescue",value:108},{label:"Warp",value:109},{label:"Rest",value:110},{label:"Silence",value:111},{label:"Sleep",value:112},{label:"Torch",value:113},{label:"Return",value:114},{label:"Repair",value:115},{label:"Thief",value:116},{label:"Watch",value:117},{label:"Berserk",value:118},{label:"Unlock",value:119},{label:"Magic Shield",value:120},{label:"Rewarp",value:121},{label:"Cure",value:122},{label:"Broken Staff",value:123},{label:"Luck Ring",value:124},{label:"Live Ring",value:125},{label:"Speed Ring",value:126},{label:"Magic Ring",value:127},{label:"Power Ring",value:128},{label:"Body Ring",value:129},{label:"Shield Ring",value:130},{label:"Skill Ring",value:131},{label:"Leg Ring",value:132},{label:"Knight Proof",value:133},{label:"Master Proof",value:134},{label:"Treasure Key",value:135},{label:"Door Key",value:136},{label:"Bridge Key",value:137},{label:"Thief Key",value:138},{label:"S Drink",value:139},{label:"Medicine",value:140},{label:"Holy Water",value:141},{label:"Torch",value:142},{label:"Antidote",value:143},{label:"Member Card",value:144},{label:"Odo Scroll",value:145},{label:"Baldo Scroll",value:146},{label:"Hezul Scroll",value:147},{label:"Dain Scroll",value:148},{label:"Noba Scroll",value:149},{label:"Neir Scroll",value:150},{label:"Ulir Scroll",value:151},{label:"Tordo Scroll",value:152},{label:"Fala Scroll",value:153},{label:"Sety Scroll",value:154},{label:"Blagi Scroll",value:155},{label:"Heim Scroll",value:156},{label:"Elite Manual",value:157},{label:"Duel Manual",value:158},{label:"Bargain Manual",value:159},{label:"Ambush Manual",value:160},{label:"Wrath Manual",value:161},{label:"Continue Manual",value:162},{label:"Prayer Manual",value:163},{label:"Awareness Manual",value:164},{label:"Sunlight Manual",value:165},{label:"Moonlight Manual",value:166}],C=a(83282),L=a(9933),B=a(4220),y=a(73339),M=a(23145),k=a(80184);function Z(){var e,l=(0,v.bx)(),a=(0,u.Z)(l,1)[0],Z=(0,o.lr)(),P=(0,u.Z)(Z,2),R=P[0],T=P[1],E=R.get("id"),A=null;try{A=new DataView(a,1573570+23*E,23)}catch(D){A=null}return(0,k.jsxs)(n.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,k.jsx)(b.Z,{message:"FE5 Item Editor By Pukachi",type:"info"}),(0,k.jsx)("div",{children:(0,k.jsx)(L.Z,{disabled:null==A,defaultValue:null!==(e=i.find((function(e){return e.value.toString()===E})))&&void 0!==e?e:E,onSelect:function(e){return T({id:e})},options:i})},E),(0,k.jsx)(B.Z,{isHex:!0,type:C.g.U8,options:s,view:A,name:"Item Type",offset:0}),(0,k.jsx)(y.Z,{type:C.g.U8,view:A,name:"Power",offset:1}),(0,k.jsx)(y.Z,{type:C.g.U8,view:A,name:"Accuracy",offset:2}),(0,k.jsx)(y.Z,{type:C.g.U8,view:A,name:"Weight",offset:3}),(0,k.jsx)(y.Z,{type:C.g.U8,view:A,name:"Maximum Uses",offset:4}),(0,k.jsx)(y.Z,{type:C.g.U8,view:A,name:"Critical%",offset:5}),(0,k.jsx)(B.Z,{isHex:!0,type:C.g.U8,options:c,view:A,name:"Range",offset:6}),(0,k.jsx)(B.Z,{isHex:!0,type:C.g.U16,options:f,view:A,name:"Weapon Rank/Lock Pointer",offset:7}),(0,k.jsx)(B.Z,{isHex:!0,type:C.g.U16,options:S,view:A,name:"Effectiveness Pointer",offset:9}),(0,k.jsx)(B.Z,{isHex:!0,type:C.g.U16,options:d,view:A,name:"Stat Bonuses Pointer",offset:11}),(0,k.jsx)(y.Z,{type:C.g.U16,view:A,name:"Cost Per Use + 200",offset:13}),(0,k.jsx)(M.Z,{type:C.g.U8,view:A,name:"Description (Lo Pointer)",offset:15}),(0,k.jsx)(M.Z,{type:C.g.U8,view:A,name:"Description (Hi Pointer)",offset:16}),(0,k.jsx)(B.Z,{isHex:!0,type:C.g.U8,options:x,view:A,name:"Use/Staff Effect",offset:17}),(0,k.jsx)(B.Z,{isHex:!0,type:C.g.U8,options:m,view:A,name:"Blade Effect",offset:18}),(0,k.jsx)(B.Z,{type:C.g.U8,options:p,view:A,name:"Weapon Skills 1",offset:19}),(0,k.jsx)(B.Z,{type:C.g.U8,options:g,view:A,name:"Weapon Skills 2",offset:20}),(0,k.jsx)(B.Z,{isHex:!0,type:C.g.U8,options:w,view:A,name:"Capabilities",offset:21}),(0,k.jsx)(B.Z,{isHex:!0,type:C.g.U8,options:h,view:A,name:"Weapon Icon",offset:22}),(0,k.jsx)(t.Z,{children:(0,k.jsx)(r.Z,{})})]})}},49389:function(e,l,a){a.d(l,{Z:function(){return A}});var u=a(87462),v=a(4942),o=a(81694),n=a.n(o),b=a(72791),t=a(71929),r=a(91940),i=function(e){var l,a=(0,b.useContext)(t.E_),o=a.getPrefixCls,i=a.direction,s=e.prefixCls,c=e.className,f=void 0===c?"":c,S=o("input-group",s),d=n()(S,(l={},(0,v.Z)(l,"".concat(S,"-lg"),"large"===e.size),(0,v.Z)(l,"".concat(S,"-sm"),"small"===e.size),(0,v.Z)(l,"".concat(S,"-compact"),e.compact),(0,v.Z)(l,"".concat(S,"-rtl"),"rtl"===i),l),f),x=(0,b.useContext)(r.aM),m=(0,b.useMemo)((function(){return(0,u.Z)((0,u.Z)({},x),{isFormItemInput:!1})}),[x]);return b.createElement("span",{className:d,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},b.createElement(r.aM.Provider,{value:m},e.children))},s=a(45394),c=a(29439),f=a(1413),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},d=a(54291),x=function(e,l){return b.createElement(d.Z,(0,f.Z)((0,f.Z)({},e),{},{ref:l,icon:S}))};x.displayName="EyeInvisibleOutlined";var m=b.forwardRef(x),p=a(24215),g=a(41818),w=function(e,l){var a={};for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&l.indexOf(u)<0&&(a[u]=e[u]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(e);v<u.length;v++)l.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(e,u[v])&&(a[u[v]]=e[u[v]])}return a},h=function(e){return e?b.createElement(p.Z,null):b.createElement(m,null)},C={click:"onClick",hover:"onMouseOver"};var L=b.forwardRef((function(e,l){var a=(0,b.useState)(!1),o=(0,c.Z)(a,2),r=o[0],i=o[1],f=function(){e.disabled||i((function(e){return!e}))},S=function(a){var o=a.getPrefixCls,t=e.className,i=e.prefixCls,c=e.inputPrefixCls,S=e.size,d=e.visibilityToggle,x=void 0===d||d,m=w(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),p=o("input",c),L=o("input-password",i),B=x&&function(l){var a,u=e.action,o=void 0===u?"click":u,n=e.iconRender,t=C[o]||"",i=(void 0===n?h:n)(r),s=(a={},(0,v.Z)(a,t,f),(0,v.Z)(a,"className","".concat(l,"-icon")),(0,v.Z)(a,"key","passwordIcon"),(0,v.Z)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,v.Z)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return b.cloneElement(b.isValidElement(i)?i:b.createElement("span",null,i),s)}(L),y=n()(L,t,(0,v.Z)({},"".concat(L,"-").concat(S),!!S)),M=(0,u.Z)((0,u.Z)({},(0,g.Z)(m,["suffix","iconRender"])),{type:r?"text":"password",className:y,prefixCls:p,suffix:B});return S&&(M.size=S),b.createElement(s.ZP,(0,u.Z)({ref:l},M))};return b.createElement(t.C,null,S)})),B=a(11730),y=a(88834),M=a(30435),k=a(1815),Z=a(61113),P=function(e,l){var a={};for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&l.indexOf(u)<0&&(a[u]=e[u]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(e);v<u.length;v++)l.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(e,u[v])&&(a[u[v]]=e[u[v]])}return a};var R=b.forwardRef((function(e,l){var a,o,r=e.prefixCls,i=e.inputPrefixCls,c=e.className,f=e.size,S=e.suffix,d=e.enterButton,x=void 0!==d&&d,m=e.addonAfter,p=e.loading,g=e.disabled,w=e.onSearch,h=e.onChange,C=e.onCompositionStart,L=e.onCompositionEnd,R=P(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),T=b.useContext(t.E_),E=T.getPrefixCls,A=T.direction,D=b.useContext(k.Z),K=b.useRef(!1),U=f||D,j=b.useRef(null),I=function(e){var l;document.activeElement===(null===(l=j.current)||void 0===l?void 0:l.input)&&e.preventDefault()},H=function(e){var l,a;w&&w(null===(a=null===(l=j.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},F=E("input-search",r),W=E("input",i),N="boolean"===typeof x?b.createElement(B.Z,null):null,G="".concat(F,"-button"),O=x||{},z=O.type&&!0===O.type.__ANT_BUTTON;o=z||"button"===O.type?(0,Z.Tm)(O,(0,u.Z)({onMouseDown:I,onClick:function(e){var l,a;null===(a=null===(l=null===O||void 0===O?void 0:O.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),H(e)},key:"enterButton"},z?{className:G,size:U}:{})):b.createElement(M.Z,{className:G,type:x?"primary":void 0,size:U,disabled:g,key:"enterButton",onMouseDown:I,onClick:H,loading:p,icon:N},x),m&&(o=[o,(0,Z.Tm)(m,{key:"addonAfter"})]);var V=n()(F,(a={},(0,v.Z)(a,"".concat(F,"-rtl"),"rtl"===A),(0,v.Z)(a,"".concat(F,"-").concat(U),!!U),(0,v.Z)(a,"".concat(F,"-with-button"),!!x),a),c);return b.createElement(s.ZP,(0,u.Z)({ref:(0,y.sQ)(j,l),onPressEnter:function(e){K.current||H(e)}},R,{size:U,onCompositionStart:function(e){K.current=!0,null===C||void 0===C||C(e)},onCompositionEnd:function(e){K.current=!1,null===L||void 0===L||L(e)},prefixCls:W,addonAfter:o,suffix:S,onChange:function(e){e&&e.target&&"click"===e.type&&w&&w(e.target.value,e),h&&h(e)},className:V,disabled:g}))})),T=a(66920),E=s.ZP;E.Group=i,E.Search=R,E.TextArea=T.Z,E.Password=L;var A=E}}]);
//# sourceMappingURL=99729.8b3778f7.chunk.js.map