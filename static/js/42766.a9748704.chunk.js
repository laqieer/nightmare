"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[42766],{73339:function(e,l,a){a.d(l,{Z:function(){return h}});var u=a(1413),n=a(29439),v=a(97788),i=a(83099),b=a(13344),t=a(72791),o=a(83282),r=a(80184),s=v.Z.Text;function h(e){var l=e.view,a=e.name,v=e.offset,h=e.type,p=null==l?0:(0,o.ij)(l,v,h),c=(0,t.useState)(p),m=(0,n.Z)(c,2),C=m[0],d=m[1];return C!==p&&d(p),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s,{disabled:null==l,children:"".concat(a,":").concat(null==l?"":" ".concat(C," \u2192"))}),(0,r.jsx)(b.Z,(0,u.Z)({disabled:null==l,min:o.Cu[h][0],max:o.Cu[h][1],onPressEnter:function(e){var a=parseInt(e.target.value,10);(0,o.cW)(l,v,h,a),d(a)}},e))]})}h.defaultProps={view:null}},4220:function(e,l,a){a.d(l,{Z:function(){return m}});var u=a(1413),n=a(29439),v=a(44925),i=a(97788),b=a(83099),t=a(21951),o=a(72791),r=a(11087),s=a(83282),h=a(80184),p=["isHex","reference","view","name","offset","type","options"],c=i.Z.Text;function m(e){var l=e.isHex,a=e.reference,i=e.view,m=e.name,C=e.offset,d=e.type,f=e.options,g=(0,v.Z)(e,p),E=null==i?0:(0,s.ij)(i,C,d),y=(0,o.useState)(E),w=(0,n.Z)(y,2),x=w[0],M=w[1];x!==E&&M(E);var T=f.find((function(e){return e.value===x})),Z=l?"0x".concat(x.toString(16)):x,L=void 0===T?Z:T.label;return(0,h.jsxs)(b.Z,{children:[(0,h.jsx)(c,{disabled:null==i,children:"".concat(m,":").concat(null==i?"":" ".concat(L," \u2192"))}),(0,h.jsx)(t.Z,(0,u.Z)({disabled:null==i,showSearch:!0,options:f,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)},onSelect:function(e){(0,s.cW)(i,C,d,e),M(e)}},g)),""===a||null==i?"":(0,h.jsx)(r.rU,{to:{pathname:"../".concat(a,"?id=").concat(x),state:i.buffer},children:"\u27a4"})]})}m.defaultProps={view:null,isHex:!1,reference:""}},23145:function(e,l,a){a.d(l,{Z:function(){return h}});var u=a(1413),n=a(29439),v=a(97788),i=a(83099),b=a(49389),t=a(72791),o=a(83282),r=a(80184),s=v.Z.Text;function h(e){var l=(0,t.useState)(""),a=(0,n.Z)(l,2),v=a[0],h=a[1],p=e.view,c=e.name,m=e.offset,C=e.type,d=null==p?0:(0,o.ij)(p,m,C),f=(0,t.useState)(d),g=(0,n.Z)(f,2),E=g[0],y=g[1];return E!==d&&y(d),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s,{disabled:null==p,children:"".concat(c,":").concat(null==p?"":" 0x".concat(E.toString(16)," \u2192"))}),(0,r.jsx)(b.Z,(0,u.Z)({disabled:null==p,allowClear:!0,maxLength:2*o.Tz[C],prefix:"0x",value:v,onChange:function(e){var l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&h(l)},onPressEnter:function(e){var l=parseInt(e.target.value,16);(0,o.cW)(p,m,C,l),y(l)}},e))]})}h.defaultProps={view:null}},9933:function(e,l,a){a.d(l,{Z:function(){return i}});var u=a(1413),n=a(21951),v=(a(72791),a(80184));function i(e){return(0,v.jsx)(n.Z,(0,u.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)}},e))}},42766:function(e,l,a){a.r(l),a.d(l,{default:function(){return Z}});var u=a(29439),n=(a(72791),a(57689)),v=a(11087),i=a(83099),b=a(33441),t=a(43292),o=a(79042),r=[{label:"00 Prologue",value:0},{label:"01 Ch 1",value:1},{label:"02 Ch 2",value:2},{label:"03 Ch 3",value:3},{label:"04 Ch 4/Zaha Woods",value:4},{label:"05 Ch 5x",value:5},{label:"06 Ch 5",value:6},{label:"07 Ch 6/Adlas Plains",value:7},{label:"08 Ch 7",value:8},{label:"09 Ch 8",value:9},{label:"0A Ch 9 Eirika",value:10},{label:"0B Ch 10 Eirika/Teras Plateau",value:11},{label:"0C Ch 12 Eirika",value:12},{label:"0D Ch 13 Eirika",value:13},{label:"0E Ch 14 Eirika",value:14},{label:"0F Ch 15 Eirika",value:15},{label:"10 Ch 16 Eirika",value:16},{label:"11 Ch 17 Eirika/Narube River",value:17},{label:"12 Ch 18 Eirika/Neleras Peak",value:18},{label:"13 Ch 19 Eirika",value:19},{label:"14 Ch 20 Eirika",value:20},{label:"15 Final Ch 1 Eirika",value:21},{label:"16 Final Ch 2 Erika",value:22},{label:"17 Ch 9 Ephraim",value:23},{label:"18 Ch 10 Ephraim/Bethroen",value:24},{label:"19 Ch 12 Ephraim",value:25},{label:"1A Ch 13 Ephraim/Za'abadul Marsh",value:26},{label:"1B Ch 14 Ephraim",value:27},{label:"1C Ch 15 Ephraim",value:28},{label:"1D Ch 16 Ephraim",value:29},{label:"1E Ch 17 Ephraim/Narube River",value:30},{label:"1F Ch 18 Ephraim/Neleras Peak",value:31},{label:"20 Ch 19 Ephraim",value:32},{label:"21 Ch 20 Ephraim",value:33},{label:"22 Final Ch 1 Ephraim",value:34},{label:"23 Final Ch 2 Ephraim",value:35},{label:"24 Tower of Valni 1",value:36},{label:"25 Tower of Valni 2",value:37},{label:"26 Tower of Valni 3",value:38},{label:"27 Tower of Valni 4",value:39},{label:"28 Tower of Valni 5",value:40},{label:"29 Tower of Valni 6",value:41},{label:"2A Tower of Valni 7",value:42},{label:"2B Tower of Valni 8",value:43},{label:"2C Tower of Valni 8 Clone",value:44},{label:"2D Tower of Valni 8 Clone",value:45},{label:"2E Lagdou Ruins 1",value:46},{label:"2F Lagdou Ruins 2",value:47},{label:"30 Lagdou Ruins 3",value:48},{label:"31 Lagdou Ruins 4",value:49},{label:"32 Lagdou Ruins 5",value:50},{label:"33 Lagdou Ruins 6",value:51},{label:"34 Lagdou Ruins 7",value:52},{label:"35 Lagdou Ruins 8",value:53},{label:"36 Lagdou Ruins 9",value:54},{label:"37 Lagdou Ruins 10",value:55},{label:"38 Lords split up (glitchy map)",value:56},{label:"39 Melkaen Coast",value:57},{label:"3A Link Arena",value:58},{label:"3B The interesting map...",value:59},{label:"3C Debug map",value:60},{label:"3D Ch 11 Eirika",value:61},{label:"3E Ch 11 Ephraim",value:62},{label:"3F Grado castle",value:63},{label:"40 Renais castle",value:64},{label:"41 Caer Pelyn",value:65},{label:"42 Renais throne",value:66},{label:"43 Renais audience",value:67},{label:"44 Renval gate",value:68},{label:"45 Grado borders",value:69},{label:"46 Grado prison",value:70},{label:"47 Grado shrine (Past)",value:71},{label:"48 Renais shrine",value:72},{label:"49 Some path",value:73},{label:"4A Some building",value:74},{label:"4B Another shrine",value:75},{label:"4C Another path",value:76},{label:"4D Grado shrine (Present)",value:77},{label:"4E Ch 5 town (Past)",value:78}],s=[{label:"Not used",value:0},{label:"Object type 1",value:1},{label:"Map Palette 1",value:2},{label:"Tile Configuration 1",value:3},{label:"Prologue Map",value:4},{label:"Tile animations 1",value:5},{label:"Prologue Map changes",value:6},{label:"Prologue events",value:7},{label:"Ch 1 Map",value:8},{label:"Ch 1 map changes",value:9},{label:"Ch 1 events",value:10},{label:"Ch 2 map",value:11},{label:"Ch 2 Tile changes",value:12},{label:"Ch 2 events",value:13},{label:"Object type 2",value:14},{label:"Map palette 2",value:15},{label:"Tile configuration 2",value:16},{label:"Ch 3 map",value:17},{label:"Tile animations 2",value:18},{label:"Ch 3 map changes",value:19},{label:"Ch 3 events",value:20},{label:"Ch 4 Map",value:21},{label:"Ch 4 Map changes",value:22},{label:"Ch 4 events",value:23},{label:"Object type 3",value:24},{label:"Map palette 3",value:25},{label:"Tile confihutation 3",value:26},{label:"Ch 5x map",value:27},{label:"Tile animations 3",value:28},{label:"Ch 5x Map changes",value:29},{label:"Ch 5x Events",value:30},{label:"Ch 5 Map",value:31},{label:"Ch 5 map changes",value:32},{label:"Ch 5 event data",value:33},{label:"Ch 6 map",value:34},{label:"Ch 6 Map changes",value:35},{label:"Ch 6 events",value:36},{label:"Ch 7 map",value:37},{label:"Ch 7 map changes",value:38},{label:"Ch 7 event data",value:39},{label:"Ch 8 map",value:40},{label:"Ch 8 map changes",value:41},{label:"Ch 8 event data",value:42},{label:"Ch 9 Eir. map",value:43},{label:"Ch 9 Eir. map changes",value:44},{label:"Ch 9 Eir. Events",value:45},{label:"Object type 4",value:46},{label:"Map palette 4",value:47},{label:"Tile configuration 4",value:48},{label:"Ch 10 Eir. Map",value:49},{label:"Ch 10 Eir. Map changes",value:50},{label:"Ch 10 Eir. Events",value:51},{label:"Map palette 5",value:52},{label:"Ch 12 Eir. Map",value:53},{label:"Ch 12 Eir. map changes",value:54},{label:"Ch 12 Eir. event data",value:55},{label:"Map palette 6",value:56},{label:"Ch 13 Eir. Map",value:57},{label:"Ch 13 Eir. Map changes",value:58},{label:"Ch 13 Eir. Events (3B)",value:59},{label:"Object type 5",value:60},{label:"Map palette 7",value:61},{label:"Tile configuration 5",value:62},{label:"Ch 14 Eir. Map",value:63},{label:"Ch 14 Eir. Map changes",value:64},{label:"Ch 14 Eir. Events",value:65},{label:"Object type 6",value:66},{label:"Map palette 8",value:67},{label:"Tile configuration 6",value:68},{label:"Ch 15 map",value:69},{label:"Ch 15 Map changes",value:70},{label:"Ch 15 Eir. events",value:71},{label:"Map palette 9",value:72},{label:"Ch 16 Map",value:73},{label:"Ch 16 Map changes",value:74},{label:"Ch 16 Eir events",value:75},{label:"Map palette 10",value:76},{label:"Ch 17 Map",value:77},{label:"Ch 17 Map changes",value:78},{label:"Ch 17 Eir. Events",value:79},{label:"Object type 7",value:80},{label:"Map palette 11",value:81},{label:"Tile configuration 7",value:82},{label:"Ch 18 Map",value:83},{label:"Tile animations 4",value:84},{label:"Ch 18 Map changes",value:85},{label:"Ch 18 Eir. Events",value:86},{label:"Map palette 12",value:87},{label:"Ch 19 Map",value:88},{label:"Ch 19 Map changes",value:89},{label:"Ch 19 Eir. Events",value:90},{label:"Map palette 13",value:91},{label:"Ch 20 Map",value:92},{label:"Ch 20 Map changes",value:93},{label:"Ch 20 Eir. Events",value:94},{label:"Object type 8",value:95},{label:"Map palette 14",value:96},{label:"Tile configuration 8",value:97},{label:"Final Chapter Map 1",value:98},{label:"Final Chapter Map 1 changes",value:99},{label:"Final Eir. events 1",value:100},{label:"Final Chapter Map 2",value:101},{label:"Final Chapter Map 2 changes",value:102},{label:"Final Eirika events 2",value:103},{label:"Map palette 15",value:104},{label:"Ch 9 Eph map",value:105},{label:"Ch 9 Eph Map changes",value:106},{label:"Ch 9 events",value:107},{label:"Object type 9",value:108},{label:"Map palette 15",value:109},{label:"Tile configuration 9",value:110},{label:"Ch 10 Ephraim map",value:111},{label:"Ch 10 Ephraim map changes",value:112},{label:"Ch 10 Ephraim events",value:113},{label:"Map palette 16",value:114},{label:"Ch 12 Ephraim map",value:115},{label:"Ch 12 Ephraim map changes",value:116},{label:"Ch 12 Ephraim events",value:117},{label:"Ch 13 Ephraim map",value:118},{label:"Ch 13 Ephraim map changes",value:119},{label:"Ch 13 Ephraim event data",value:120},{label:"Object type 10",value:121},{label:"Map palette 17",value:122},{label:"Tile configuration 10",value:123},{label:"Ch 14 Ephraim map",value:124},{label:"Tile animations 5",value:125},{label:"Ch 14 Ephraim map changes",value:126},{label:"Ch 14 Ephraim event data",value:127},{label:"Ch 15 Ephraim event data",value:128},{label:"Ch 16 Ephraim event data",value:129},{label:"Ch 17 Ephraim event data",value:130},{label:"Ch 18 Ephraim event data",value:131},{label:"Ch 19 Ephraim event data",value:132},{label:"Ch 20 Ephraim event data",value:133},{label:"Final Ephraim events 1",value:134},{label:"Final Ephraim events 2",value:135},{label:"Tower of Valni Object type",value:136},{label:"Tower of Valni map palette",value:137},{label:"Tower of Valni Tile configuration",value:138},{label:"Tower of Valni 1 Map",value:139},{label:"Tower of Valni 1 Map changes",value:140},{label:"Tower of Valni 1 events",value:141},{label:"Tower of Valni 2 map",value:142},{label:"Tower of Valni 2 map changes",value:143},{label:"Tower of Valni 2 events",value:144},{label:"Tower of Valni 3 map",value:145},{label:"Tower of Valni 3 map changes",value:146},{label:"Tower of Valni 3 events",value:147},{label:"Tower of Valni 4 map",value:148},{label:"Tower of Valni 4 map changes",value:149},{label:"Tower of Valni 4 events",value:150},{label:"Tower of Valni 5 map",value:151},{label:"Tower of Valni 5 map changes",value:152},{label:"Tower of Valni 5 events",value:153},{label:"Tower of Valni 6 map",value:154},{label:"Tower of Valni 6 map changes",value:155},{label:"Tower of Valni 6 events",value:156},{label:"Tower of Valni 7 map",value:157},{label:"Tower of Valni 7 map changes",value:158},{label:"Tower of Valni 7 events",value:159},{label:"Tower of Valni 8 map",value:160},{label:"Tower of Valni 8 map changes",value:161},{label:"Tower of Valni 8 events",value:162},{label:"Lagdou ruins palette",value:163},{label:"Lagdou ruins 1 Map",value:164},{label:"Lagdou ruins 1 Map changes",value:165},{label:"Lagdou ruins 1 Event",value:166},{label:"Lagdou ruins 2 Map",value:167},{label:"Lagdou ruins 2 Map changes",value:168},{label:"Lagdou ruins 2 Event",value:169},{label:"Lagdou ruins 3 Map",value:170},{label:"Lagdou ruins 3 Map changes",value:171},{label:"Lagdou ruins 3 Event",value:172},{label:"Lagdou ruins 4 Map",value:173},{label:"Lagdou ruins 4 Map changes",value:174},{label:"Lagdou ruins 4 Event",value:175},{label:"Lagdou ruins 5 Map",value:176},{label:"Lagdou ruins 5 Map changes",value:177},{label:"Lagdou ruins 5 Event",value:178},{label:"Lagdou ruins 6 Map",value:179},{label:"Lagdou ruins 6 Map changes",value:180},{label:"Lagdou ruins 6 Event",value:181},{label:"Lagdou ruins 7 Map",value:182},{label:"Lagdou ruins 7 Map changes",value:183},{label:"Lagdou ruins 7 Event",value:184},{label:"Lagdou ruins 8 palette",value:185},{label:"Lagdou ruins 8 Map",value:186},{label:"Lagdou ruins 8 Map changes",value:187},{label:"Lagdou ruins 8 Event",value:188},{label:"Lagdou ruins 9 Map",value:189},{label:"Lagdou ruins 9 Map changes",value:190},{label:"Lagdou ruins 9 Event",value:191},{label:"Lagdou ruins 10 Map",value:192},{label:"Lagdou ruins 10 Map changes",value:193},{label:"Lagdou ruins 10 Event",value:194},{label:"Lords split map",value:195},{label:"Lords split map changes",value:196},{label:"Lords split events",value:197},{label:"Melkaen Coast map",value:198},{label:"Melkaen Coast map changes",value:199},{label:"Melkaen Coast event",value:200},{label:"Link arena map C9",value:201},{label:"An interesting map...",value:202},{label:"An interesting map events...",value:203},{label:"Debug map",value:204},{label:"Debug map events",value:205},{label:"Map palette",value:206},{label:"Ch 11 Eirika map",value:207},{label:"Ch 11 Eirika map changes",value:208},{label:"Ch 11 Eirika events",value:209},{label:"Ch 11 Ephraim map",value:210},{label:"Ch 11 Ephraim tile animations",value:211},{label:"Ch 11 Ephraim map changes",value:212},{label:"Ch 11 Ephraim events",value:213},{label:"Grado castle map",value:214},{label:"Renais castle map",value:215},{label:"Caer Pelyn map",value:216},{label:"Renais throne map",value:217},{label:"Renais throne map changes",value:218},{label:"Renais audience map",value:219},{label:"Renval gate map",value:220},{label:"Grado borders map",value:221},{label:"Grado prison map",value:222},{label:"Grado prison map changes",value:223},{label:"Grado shrine map (past)",value:224},{label:"Grado shrine map changes (past)",value:225},{label:"Renais shrine map",value:226},{label:"Renais shrine map changes",value:227},{label:"Some path map",value:228},{label:"Some building map",value:229},{label:"Another shrine palette",value:230},{label:"Another shrine map",value:231},{label:"Another path map",value:232},{label:"Grado shrine map (present)",value:233},{label:"Ch 5 town palette (past)",value:234},{label:"Ch 5 town map (past)",value:235}],h=[{label:"Off",value:0},{label:"On",value:1}],p=[{label:"Clear",value:0},{label:"Flurries",value:1},{label:"Blizzard",value:2},{label:"Blue Gradient (from FE6 Dragon chapter)",value:3},{label:"Rain",value:4},{label:"Ashes (from FE6 Durandal map)",value:5},{label:"Sandstorm",value:6},{label:"Background clouds (from FE6 Aureola map)",value:7}],c=[{label:"Normal",value:0},{label:"Lava cave",value:2},{label:"0x04",value:4},{label:"0x05",value:5},{label:"City?",value:6},{label:"0x07",value:7},{label:"0x08",value:8},{label:"Desert?",value:9},{label:"0x0A",value:10},{label:"0x0B",value:11},{label:"Jehanna Hall?",value:12},{label:"0x0D",value:13},{label:"Lagdou Ruins",value:14},{label:"0x0F",value:15},{label:"0x10",value:16},{label:"0x11",value:17},{label:"Mountains?",value:18},{label:"0x13",value:19},{label:"0x14",value:20}],m=[{label:"Nothing",value:0},{label:"The Valiant",value:1},{label:"Main Theme",value:2},{label:"Prologue",value:3},{label:"The Beginning",value:4},{label:"Treasured Memories",value:5},{label:"Grim Journey",value:6},{label:"Ties of Friendship",value:7},{label:"Ray of Hope",value:8},{label:"Distant Roads",value:9},{label:"Rise Above",value:10},{label:"Follow Me!",value:11},{label:"Determination",value:12},{label:"Truth, Despair, and Hope",value:13},{label:"Land of Promise",value:14},{label:"Binding Vow",value:15},{label:"Grasping at Victory",value:16},{label:"Shadows Approach",value:17},{label:"Confront the Past",value:18},{label:"Shadow of the Enemy",value:19},{label:"Assault",value:20},{label:"From the Darkness",value:21},{label:"Twisted Shadows A",value:22},{label:"Twisted Shadows B",value:23},{label:"Envoy from the Dark",value:24},{label:"Attack",value:25},{label:"Defense",value:26},{label:"The Battle Must Be Won",value:27},{label:"Powerful Foe",value:28},{label:"The Prince's Despair",value:29},{label:"Return of the Demon King",value:30},{label:"Sacred Strength",value:31},{label:"Tethys",value:32},{label:"Healing",value:33},{label:"Curing",value:34},{label:"To a Higher Place",value:35},{label:"Advance",value:36},{label:"Tension",value:37},{label:"Raid!",value:38},{label:"Reunion",value:39},{label:"Indignation",value:40},{label:"Sorrow",value:41},{label:"Laughter",value:42},{label:"Legacy",value:43},{label:"Lyon",value:44},{label:"Lost Heart",value:45},{label:"Solve the Riddle",value:46},{label:"Lights in the Dark",value:47},{label:"Comrades",value:48},{label:"Victory",value:49},{label:"Into the Shadow of Victory",value:50},{label:"Main Theme (Reprise)",value:51},{label:"Combat Preparation",value:52},{label:"Shops",value:53},{label:"Armories",value:54},{label:"Bonds",value:55},{label:"Colosseum Entrance",value:56},{label:"In the Colosseum",value:57},{label:"Colosseum Victory",value:58},{label:"Colosseum Defeat",value:59},{label:"Victory Song A",value:60},{label:"Victory Song B",value:61},{label:"Game Over",value:62},{label:"In Sorrow's Shroud",value:63},{label:"Records",value:64},{label:"Victory and the Future",value:65},{label:"Fly with the Breeze",value:66},{label:"Fire Emblem Theme (no intro)",value:67},{label:"Lyon (Organ Arrangement)",value:68},{label:"The Final Battle",value:69},{label:"Epilogue",value:70},{label:"Windy day",value:71},{label:"Windy day with birds",value:72},{label:"Lava boiling",value:73},{label:"Nighttime",value:74},{label:"Water flowing",value:75},{label:"Birds chirping",value:76},{label:"Soft swooshy sound",value:77},{label:"Wind gusts",value:78},{label:"Wind gust stopping",value:79},{label:"Blizzard",value:80},{label:"Legendary weapon theme of FE",value:81},{label:"Outside with birds softly chirping",value:82},{label:"River",value:83},{label:"Comrades (again?)",value:84},{label:"Return of the Demon King (without intro)",value:85},{label:"Lyon?",value:86},{label:"Nothing",value:87},{label:"Nothing",value:88},{label:"Nothing",value:89},{label:"Item Get!",value:90},{label:"Level Up!",value:91},{label:"Weapon broke",value:92},{label:"Nothing",value:93},{label:"Weapon broke",value:94},{label:"Nothing",value:95},{label:"??? 8-bit sound",value:96},{label:"??? 8-bit sound",value:97},{label:"Nothing",value:98},{label:"Nothing",value:99},{label:"Nothing",value:100},{label:"Cursor",value:101},{label:"Menu Cursor",value:102},{label:"Menu Cursor 2",value:103}],C=[{label:"None",value:0},{label:"Prologue",value:1},{label:"Ch 1",value:2},{label:"Ch 2",value:3},{label:"Ch 3",value:4},{label:"Ch 4/Zaha Woods",value:5},{label:"Ch 5x",value:6},{label:"Ch 5",value:7},{label:"Ch 6/Adlas Plains",value:8},{label:"Ch 7",value:9},{label:"Ch 8",value:10},{label:"Ch 9 Eirika",value:11},{label:"Ch 10 Eirika/Teras Plateau",value:12},{label:"Ch 12 Eirika",value:13},{label:"Ch 13 Eirika",value:14},{label:"Ch 14 Eirika",value:15},{label:"Ch 15 Eirika",value:16},{label:"Ch 16 Eirika",value:17},{label:"Ch 17 Eirika/Narube River",value:18},{label:"Ch 18 Eirika/Neleras Peak",value:19},{label:"Ch 19 Eirika",value:20},{label:"Ch 20 Eirika",value:21},{label:"Final Ch 1 Eirika",value:22},{label:"Final Ch 2 Erika",value:23},{label:"Ch 9 Ephraim",value:24},{label:"Ch 10 Ephraim/Bethroen",value:25},{label:"Ch 12 Ephraim",value:26},{label:"Ch 13 Ephraim/Za'abadul Marsh",value:27},{label:"Ch 14 Ephraim",value:28},{label:"Ch 15 Ephraim",value:29},{label:"Ch 16 Ephraim",value:30},{label:"Ch 17 Ephraim/Narube River",value:31},{label:"Ch 18 Ephraim/Neleras Peak",value:32},{label:"Ch 19 Ephraim",value:33},{label:"Ch 20 Ephraim",value:34},{label:"Final Ch 1 Ephraim",value:35},{label:"Final Ch 2 Ephraim",value:36},{label:"Tower of Valni 1",value:37},{label:"Tower of Valni 2",value:38},{label:"Tower of Valni 3",value:39},{label:"Tower of Valni 4",value:40},{label:"Tower of Valni 5",value:41},{label:"Tower of Valni 6",value:42},{label:"Tower of Valni 7",value:43},{label:"Tower of Valni 8",value:44},{label:"Lagdou Ruins 1",value:45},{label:"Lagdou Ruins 2",value:46},{label:"Lagdou Ruins 3",value:47},{label:"Lagdou Ruins 4",value:48},{label:"Lagdou Ruins 5",value:49},{label:"Lagdou Ruins 6",value:50},{label:"Lagdou Ruins 7",value:51},{label:"Lagdou Ruins 8",value:52},{label:"Lagdou Ruins 9",value:53},{label:"Lagdou Ruins 10",value:54},{label:"Lords split up (glitchy map)",value:55},{label:"Melkaen Coast",value:56},{label:"Ch 11 Eirika",value:57},{label:"Ch 11 Ephraim",value:58}],d=[{label:"Fade to map",value:0},{label:"Fade to black",value:1}],f=[{label:"None (Seize goals)",value:0},{label:"Number of enemies",value:1},{label:"Turn number",value:2},{label:"None (Defeat Boss goals)",value:3},{label:"None (Special goals)",value:4}],g=[{label:"(No one/Not referenced)",value:0},{label:"Eirika",value:1},{label:"Seth",value:2},{label:"Gilliam",value:3},{label:"Frantz",value:4},{label:"Moulder",value:5},{label:"Vanessa",value:6},{label:"Ross",value:7},{label:"Neimi",value:8},{label:"Colm",value:9},{label:"Garcia",value:10},{label:"Innes",value:11},{label:"Lute",value:12},{label:"Natasha",value:13},{label:"Cougar",value:14},{label:"Ephraim",value:15},{label:"Forde",value:16},{label:"Kyle",value:17},{label:"Amelia",value:18},{label:"Artur",value:19},{label:"Gerik",value:20},{label:"Tethys",value:21},{label:"Marisa",value:22},{label:"Saleh",value:23},{label:"Ewan",value:24},{label:"L'Arachel",value:25},{label:"Dozla",value:26},{label:"-",value:27},{label:"Rennac",value:28},{label:"Duessel",value:29},{label:"Myrrh",value:30},{label:"Knoll",value:31},{label:"Joshua",value:32},{label:"Syrene",value:33},{label:"Tana",value:34},{label:"Lyon",value:35},{label:"Orson",value:36},{label:"Glen",value:37},{label:"Selena",value:38},{label:"Valter",value:39},{label:"Riev",value:40},{label:"Caellach",value:41},{label:"Fado",value:42},{label:"Ismaire",value:43},{label:"Hayden",value:44},{label:"-",value:45},{label:"-",value:46},{label:"-",value:47},{label:"-",value:48},{label:"-",value:49},{label:"-",value:50},{label:"-",value:51},{label:"-",value:52},{label:"-",value:53},{label:"-",value:54},{label:"-",value:55},{label:"-",value:56},{label:"-",value:57},{label:"-",value:58},{label:"Leon's Summon",value:59},{label:"-",value:60},{label:"-",value:61},{label:"Knoll's Summon",value:62},{label:"Yuan's Summon",value:63},{label:"Lyon (Ch 17)",value:64},{label:"Morva (Ch 20)",value:65},{label:"Orson (Ch 5x)",value:66},{label:"Valter (Ch 15)",value:67},{label:"Selena (Ch 10B & 13B)",value:68},{label:"Valter (Prologue)",value:69},{label:"Breguet (Ch 1)",value:70},{label:"Bone (Ch 2)",value:71},{label:"Bazba (Ch 3)",value:72},{label:"Mummy (Ch 4)",value:73},{label:"Saar (Ch 5)",value:74},{label:"Novala (Ch 6)",value:75},{label:"Murray (Ch 7)",value:76},{label:"Tirado (Ch 8)",value:77},{label:"Binks (Ch 9A)",value:78},{label:"Pablo (Ch 10A)",value:79},{label:"Macdaire (Ch 12A)",value:80},{label:"Aias (Ch 13A)",value:81},{label:"Carlyle (Ch 14A)",value:82},{label:"Caellach (Ch 15)",value:83},{label:"Pablo (Ch 13A)",value:84},{label:"-",value:85},{label:"Gorgon (Ch 18)",value:86},{label:"Riev (Ch 19 & 20)",value:87},{label:"-",value:88},{label:"-",value:89},{label:"Gheb (Ch 9B)",value:90},{label:"Beran (Ch 10B)",value:91},{label:"Cyclops (Ch 12B)",value:92},{label:"Hellbone (Ch 11A)",value:93},{label:"Death Gargoyle (Ch 11B)",value:94},{label:"Mummy",value:95},{label:"-",value:96},{label:"-",value:97},{label:"-",value:98},{label:"-",value:99},{label:"-",value:100},{label:"-",value:101},{label:"Mountain Thief",value:102},{label:"-",value:103},{label:"O'Neill (Prologue)",value:104},{label:"Glen (Cutscene)",value:105},{label:"Zonta (Ch 5x)",value:106},{label:"Vigarde (Ch 14B)",value:107},{label:"Lyon (Ch Final)",value:108},{label:"Orson (Ch 16)",value:109},{label:"-",value:110},{label:"-",value:111},{label:"-",value:112},{label:"-",value:113},{label:"-",value:114},{label:"-",value:115},{label:"-",value:116},{label:"-",value:117},{label:"-",value:118},{label:"-",value:119},{label:"-",value:120},{label:"-",value:121},{label:"-",value:122},{label:"-",value:123},{label:"-",value:124},{label:"-",value:125},{label:"-",value:126},{label:"-",value:127},{label:"-",value:128},{label:"-",value:129},{label:"-",value:130},{label:"-",value:131},{label:"-",value:132},{label:"-",value:133},{label:"-",value:134},{label:"-",value:135},{label:"-",value:136},{label:"-",value:137},{label:"-",value:138},{label:"-",value:139},{label:"-",value:140},{label:"-",value:141},{label:"-",value:142},{label:"-",value:143},{label:"-",value:144},{label:"-",value:145},{label:"-",value:146},{label:"-",value:147},{label:"-",value:148},{label:"-",value:149},{label:"-",value:150},{label:"-",value:151},{label:"-",value:152},{label:"-",value:153},{label:"-",value:154},{label:"-",value:155},{label:"-",value:156},{label:"-",value:157},{label:"-",value:158},{label:"-",value:159},{label:"-",value:160},{label:"-",value:161},{label:"-",value:162},{label:"-",value:163},{label:"-",value:164},{label:"-",value:165},{label:"-",value:166},{label:"-",value:167},{label:"-",value:168},{label:"-",value:169},{label:"-",value:170},{label:"-",value:171},{label:"-",value:172},{label:"-",value:173},{label:"-",value:174},{label:"-",value:175},{label:"-",value:176},{label:"-",value:177},{label:"-",value:178},{label:"-",value:179},{label:"-",value:180},{label:"-",value:181},{label:"-",value:182},{label:"-",value:183},{label:"-",value:184},{label:"-",value:185},{label:"-",value:186},{label:"-",value:187},{label:"-",value:188},{label:"-",value:189},{label:"Demon King",value:190},{label:"-",value:191},{label:"Frelian",value:192},{label:"Frelian",value:193},{label:"-",value:194},{label:"-",value:195},{label:"-",value:196},{label:"Fado (Renais)",value:197},{label:"-",value:198},{label:"Hayden (Frelia)",value:199},{label:"Mansel (Rausten)",value:200},{label:"Klimt (Carcino)",value:201},{label:"Dara (Caer Pelyn)",value:202},{label:"Ismaire (Jehanna)",value:203},{label:"Pegasus Messenger",value:204},{label:"Rausten Knight",value:205},{label:"Rausten Knight",value:206},{label:"(Untested starting and beyond this point)",value:207},{label:"-",value:208},{label:"-",value:209},{label:"-",value:210},{label:"-",value:211},{label:"-",value:212},{label:"-",value:213},{label:"-",value:214},{label:"-",value:215},{label:"-",value:216},{label:"-",value:217},{label:"-",value:218},{label:"-",value:219},{label:"-",value:220},{label:"-",value:221},{label:"-",value:222},{label:"-",value:223},{label:"-",value:224},{label:"-",value:225},{label:"-",value:226},{label:"-",value:227},{label:"-",value:228},{label:"-",value:229},{label:"-",value:230},{label:"-",value:231},{label:"-",value:232},{label:"-",value:233},{label:"-",value:234},{label:"-",value:235},{label:"-",value:236},{label:"-",value:237},{label:"-",value:238},{label:"-",value:239},{label:"-",value:240},{label:"-",value:241},{label:"-",value:242},{label:"-",value:243},{label:"River Folk Child (F)",value:244},{label:"River Folk (F)",value:245},{label:"River Folk",value:246},{label:"River Folk (F)",value:247},{label:"River Folk Child",value:248},{label:"Renais Civilian Child (F)",value:249},{label:"Renais Civilian",value:250},{label:"Renais Civilian (F)",value:251},{label:"Old Civilian",value:252},{label:"Enemy",value:253},{label:"Wall",value:254},{label:"Snag",value:255}],E=a(83282),y=a(9933),w=a(23145),x=a(4220),M=a(73339),T=a(80184);function Z(){var e,l=(0,n.bx)(),a=(0,u.Z)(l,1)[0],Z=(0,v.lr)(),L=(0,u.Z)(Z,2),k=L[0],P=L[1],R=k.get("id"),j=null;try{j=new DataView(a,9111696+148*R,148)}catch(V){j=null}return(0,T.jsxs)(i.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,T.jsx)(b.Z,{message:"FE8 Chapter Data Editor by SpyroDi, updated by Nintenlord",type:"info"}),(0,T.jsx)("div",{children:(0,T.jsx)(y.Z,{disabled:null==j,defaultValue:null!==(e=r.find((function(e){return e.value.toString()===R})))&&void 0!==e?e:R,onSelect:function(e){return P({id:e})},options:r})},R),(0,T.jsx)(w.Z,{type:E.g.U32,view:j,name:"Chapter Number Pointer",offset:0}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U16,reference:"Eventtableeditor",options:s,view:j,name:"Object Type",offset:4}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,reference:"Eventtableeditor",options:s,view:j,name:"Palette",offset:6}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,reference:"Eventtableeditor",options:s,view:j,name:"Tile Configuration",offset:7}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,reference:"Eventtableeditor",options:s,view:j,name:"Map",offset:8}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,reference:"Eventtableeditor",options:s,view:j,name:"Tile Animation 1",offset:9}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,reference:"Eventtableeditor",options:s,view:j,name:"Tile Animation 2",offset:10}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,reference:"Eventtableeditor",options:s,view:j,name:"Triggerable Map Changes",offset:11}),(0,T.jsx)(M.Z,{type:E.g.U8,view:j,name:"Fog of War sight level (0 = No fog)",offset:12}),(0,T.jsx)(x.Z,{type:E.g.U8,options:h,view:j,name:"Battle Preparations",offset:13}),(0,T.jsx)(x.Z,{type:E.g.U8,options:p,view:j,name:"Weather Condition",offset:18}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,options:c,view:j,name:"Battle tileset",offset:19}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U16,options:m,view:j,name:"Player Phase music",offset:22}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U16,options:m,view:j,name:"Enemy Phase music",offset:24}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U16,options:m,view:j,name:"NPC Phase music",offset:26}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U16,options:m,view:j,name:"Player Phase music 2",offset:28}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U16,options:m,view:j,name:"Enemy Phase music 2",offset:30}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U16,options:m,view:j,name:"NPC Phase music 2",offset:32}),(0,T.jsx)(M.Z,{type:E.g.U8,view:j,name:"Destructible Walls HP",offset:44}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,reference:"Eventtableeditor",options:s,view:j,name:"Event Data Reference",offset:116}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,options:C,view:j,name:"Worldmap Chapter Prologue Scene",offset:117}),(0,T.jsx)(M.Z,{type:E.g.U8,view:j,name:"No. of enemies left for Grasping at Victory",offset:134}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,options:d,view:j,name:"Chapter Title Display Fade-out",offset:135}),(0,T.jsx)(w.Z,{type:E.g.U16,view:j,name:"Status - Objective Text",offset:136}),(0,T.jsx)(w.Z,{type:E.g.U16,view:j,name:"Goal Window Text",offset:138}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,options:f,view:j,name:"Goal Window Information",offset:140}),(0,T.jsx)(M.Z,{type:E.g.U8,view:j,name:"Turns to count down to +1",offset:141}),(0,T.jsx)(x.Z,{isHex:!0,type:E.g.U8,reference:"CharacterEditor",options:g,view:j,name:"Protect Character Marker",offset:142}),(0,T.jsx)(M.Z,{type:E.g.U8,view:j,name:"Tile Marker - X-Coordinate",offset:143}),(0,T.jsx)(M.Z,{type:E.g.U8,view:j,name:"Tile Marker - Y-Coordinate",offset:144}),(0,T.jsx)(t.Z,{children:(0,T.jsx)(o.Z,{})})]})}},49389:function(e,l,a){a.d(l,{Z:function(){return F}});var u=a(87462),n=a(4942),v=a(81694),i=a.n(v),b=a(72791),t=a(71929),o=a(91940),r=function(e){var l,a=(0,b.useContext)(t.E_),v=a.getPrefixCls,r=a.direction,s=e.prefixCls,h=e.className,p=void 0===h?"":h,c=v("input-group",s),m=i()(c,(l={},(0,n.Z)(l,"".concat(c,"-lg"),"large"===e.size),(0,n.Z)(l,"".concat(c,"-sm"),"small"===e.size),(0,n.Z)(l,"".concat(c,"-compact"),e.compact),(0,n.Z)(l,"".concat(c,"-rtl"),"rtl"===r),l),p),C=(0,b.useContext)(o.aM),d=(0,b.useMemo)((function(){return(0,u.Z)((0,u.Z)({},C),{isFormItemInput:!1})}),[C]);return b.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},b.createElement(o.aM.Provider,{value:d},e.children))},s=a(45394),h=a(29439),p=a(1413),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},m=a(54291),C=function(e,l){return b.createElement(m.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:l,icon:c}))};C.displayName="EyeInvisibleOutlined";var d=b.forwardRef(C),f=a(24215),g=a(41818),E=function(e,l){var a={};for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&l.indexOf(u)<0&&(a[u]=e[u]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(u=Object.getOwnPropertySymbols(e);n<u.length;n++)l.indexOf(u[n])<0&&Object.prototype.propertyIsEnumerable.call(e,u[n])&&(a[u[n]]=e[u[n]])}return a},y=function(e){return e?b.createElement(f.Z,null):b.createElement(d,null)},w={click:"onClick",hover:"onMouseOver"};var x=b.forwardRef((function(e,l){var a=(0,b.useState)(!1),v=(0,h.Z)(a,2),o=v[0],r=v[1],p=function(){e.disabled||r((function(e){return!e}))},c=function(a){var v=a.getPrefixCls,t=e.className,r=e.prefixCls,h=e.inputPrefixCls,c=e.size,m=e.visibilityToggle,C=void 0===m||m,d=E(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),f=v("input",h),x=v("input-password",r),M=C&&function(l){var a,u=e.action,v=void 0===u?"click":u,i=e.iconRender,t=w[v]||"",r=(void 0===i?y:i)(o),s=(a={},(0,n.Z)(a,t,p),(0,n.Z)(a,"className","".concat(l,"-icon")),(0,n.Z)(a,"key","passwordIcon"),(0,n.Z)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,n.Z)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return b.cloneElement(b.isValidElement(r)?r:b.createElement("span",null,r),s)}(x),T=i()(x,t,(0,n.Z)({},"".concat(x,"-").concat(c),!!c)),Z=(0,u.Z)((0,u.Z)({},(0,g.Z)(d,["suffix","iconRender"])),{type:o?"text":"password",className:T,prefixCls:f,suffix:M});return c&&(Z.size=c),b.createElement(s.ZP,(0,u.Z)({ref:l},Z))};return b.createElement(t.C,null,c)})),M=a(11730),T=a(88834),Z=a(30435),L=a(1815),k=a(61113),P=function(e,l){var a={};for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&l.indexOf(u)<0&&(a[u]=e[u]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(u=Object.getOwnPropertySymbols(e);n<u.length;n++)l.indexOf(u[n])<0&&Object.prototype.propertyIsEnumerable.call(e,u[n])&&(a[u[n]]=e[u[n]])}return a};var R=b.forwardRef((function(e,l){var a,v,o=e.prefixCls,r=e.inputPrefixCls,h=e.className,p=e.size,c=e.suffix,m=e.enterButton,C=void 0!==m&&m,d=e.addonAfter,f=e.loading,g=e.disabled,E=e.onSearch,y=e.onChange,w=e.onCompositionStart,x=e.onCompositionEnd,R=P(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),j=b.useContext(t.E_),V=j.getPrefixCls,F=j.direction,S=b.useContext(L.Z),N=b.useRef(!1),A=p||S,B=b.useRef(null),O=function(e){var l;document.activeElement===(null===(l=B.current)||void 0===l?void 0:l.input)&&e.preventDefault()},D=function(e){var l,a;E&&E(null===(a=null===(l=B.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},U=V("input-search",o),H=V("input",r),G="boolean"===typeof C?b.createElement(M.Z,null):null,z="".concat(U,"-button"),W=C||{},I=W.type&&!0===W.type.__ANT_BUTTON;v=I||"button"===W.type?(0,k.Tm)(W,(0,u.Z)({onMouseDown:O,onClick:function(e){var l,a;null===(a=null===(l=null===W||void 0===W?void 0:W.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),D(e)},key:"enterButton"},I?{className:z,size:A}:{})):b.createElement(Z.Z,{className:z,type:C?"primary":void 0,size:A,disabled:g,key:"enterButton",onMouseDown:O,onClick:D,loading:f,icon:G},C),d&&(v=[v,(0,k.Tm)(d,{key:"addonAfter"})]);var K=i()(U,(a={},(0,n.Z)(a,"".concat(U,"-rtl"),"rtl"===F),(0,n.Z)(a,"".concat(U,"-").concat(A),!!A),(0,n.Z)(a,"".concat(U,"-with-button"),!!C),a),h);return b.createElement(s.ZP,(0,u.Z)({ref:(0,T.sQ)(B,l),onPressEnter:function(e){N.current||D(e)}},R,{size:A,onCompositionStart:function(e){N.current=!0,null===w||void 0===w||w(e)},onCompositionEnd:function(e){N.current=!1,null===x||void 0===x||x(e)},prefixCls:H,addonAfter:v,suffix:c,onChange:function(e){e&&e.target&&"click"===e.type&&E&&E(e.target.value,e),y&&y(e)},className:K,disabled:g}))})),j=a(66920),V=s.ZP;V.Group=r,V.Search=R,V.TextArea=j.Z,V.Password=x;var F=V}}]);
//# sourceMappingURL=42766.a9748704.chunk.js.map