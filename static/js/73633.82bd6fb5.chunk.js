"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[73633],{53551:(e,l,a)=>{a.d(l,{A:()=>p});var r=a(89379),u=a(53986),n=a(17313),t=a(64435),i=a(41976),v=a(65043),o=a(35475),b=a(64004),s=a(70579);const c=["isHex","reference","view","name","offset","type","options"],{Text:d}=n.A;function p(e){const{isHex:l,reference:a,view:n,name:p,offset:h,type:f,options:m}=e,x=(0,u.A)(e,c),S=null==n?0:(0,b.LF)(n,h,f),[w,A]=(0,v.useState)(S);w!==S&&A(S);const g=m.find((e=>e.value===w)),y=l?"0x".concat(w.toString(16)):w,I=void 0===g?y:g.label;return(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d,{disabled:null==n,children:"".concat(p,":").concat(null==n?"":" ".concat(I," \u2192"))}),(0,s.jsx)(i.A,(0,r.A)({disabled:null==n,showSearch:!0,options:m,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,b.M9)(n,h,f,e),A(e)}},x)),""===a||null==n?"":(0,s.jsx)(o.N_,{to:{pathname:"../".concat(a,"?id=").concat(w),state:n.buffer},children:"\u27a4"})]})}p.defaultProps={view:null,isHex:!1,reference:""}},34871:(e,l,a)=>{a.d(l,{A:()=>t});var r=a(89379),u=a(41976),n=(a(65043),a(70579));function t(e){return(0,n.jsx)(u.A,(0,r.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},73633:(e,l,a)=>{a.r(l),a.d(l,{default:()=>h});a(65043);var r=a(73216),u=a(35475),n=a(64435),t=a(92135),i=a(33275),v=a(46974);const o=[{label:"Entry 0",value:0}],b=[{label:"---",value:0},{label:"Silver Sword",value:1},{label:"Iron Sword",value:2},{label:"Steel Sword",value:3},{label:"Armorslayer",value:4},{label:"Rapier",value:5},{label:"Wyrmslayer",value:6},{label:"Killing Edge",value:7},{label:"Mercurius",value:8},{label:"Levin Sword",value:9},{label:"Devil Sword",value:10},{label:"Falchion",value:11},{label:"Iron Lance",value:12},{label:"Ridersbane",value:13},{label:"Silver Lance",value:14},{label:"Javelin",value:15},{label:"Gradivus",value:16},{label:"Iron Bow",value:17},{label:"Steel Bow",value:18},{label:"Bowgun",value:19},{label:"Silver Bow",value:20},{label:"Parthia",value:21},{label:"Quincrane",value:22},{label:"Stonehedge",value:23},{label:"Fire Gun",value:24},{label:"Thunderbolt",value:25},{label:"Elephant",value:26},{label:"Iron Axe",value:27},{label:"Steel Axe",value:28},{label:"Hammer",value:29},{label:"Devil Axe",value:30},{label:"Hand Axe",value:31},{label:"Wyvern*",value:32},{label:"Gargoyle*",value:33},{label:"Magicstone",value:34},{label:"Divinestone",value:35},{label:"Firestone",value:36},{label:"Salamander*",value:37},{label:"Earthstone",value:38},{label:"Shenron*",value:39},{label:"Neptune*",value:40},{label:"Darkdragon*",value:41},{label:"Magicstone?",value:42},{label:"Fire",value:43},{label:"Thunder",value:44},{label:"Blizzard",value:45},{label:"Elfire",value:46},{label:"Bolganone",value:47},{label:"Thoron",value:48},{label:"Swarm",value:49},{label:"Aura",value:50},{label:"Excalibur",value:51},{label:"Imhullu",value:52},{label:"Starlight",value:53},{label:"Heal",value:54},{label:"Mend",value:55},{label:"Recover",value:56},{label:"Helarn*",value:57},{label:"Warp",value:58},{label:"Hammerne",value:59},{label:"Physic",value:60},{label:"Barrier",value:61},{label:"Fortify",value:62},{label:"Aum",value:63},{label:"Vulnerary",value:64},{label:"Pure Water",value:65},{label:"Door Key",value:66},{label:"Bridge Key",value:67},{label:"Lockpick",value:68},{label:"Unequipped",value:69},{label:"Dragonshield",value:70},{label:"Talisman",value:71},{label:"Boots",value:72},{label:"Manual",value:73},{label:"Secret Book",value:74},{label:"Power Ring",value:75},{label:"Telescope*",value:76},{label:"Speed Ring",value:77},{label:"Goddess Icon",value:78},{label:"Angelic Robe",value:79},{label:"Knight Crest",value:80},{label:"Hero Crest",value:81},{label:"Guiding Ring",value:82},{label:"Orion's Bolt",value:83},{label:"Elysian Whip",value:84},{label:"Geosphere",value:85},{label:"Time Orb*",value:86},{label:"Dark Orb*",value:87},{label:"Starsphere",value:88},{label:"Member Card",value:89},{label:"Silver Card",value:90},{label:"Lightsphere",value:91},{label:"Fire Emblem",value:92}];var s=a(64004),c=a(34871),d=a(53551),p=a(70579);function h(){var e;const[l]=(0,r.KC)(),[a,h]=(0,u.ok)(),f=a.get("id");let m=null;try{m=new DataView(l,190202+6*f,6)}catch(x){m=null}return(0,p.jsxs)(n.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,p.jsx)(t.A,{message:"FE1 Shop Editor 1",type:"info"}),(0,p.jsx)("div",{children:(0,p.jsx)(c.A,{disabled:null==m,defaultValue:null!==(e=o.find((e=>e.value.toString()===f)))&&void 0!==e?e:f,onSelect:e=>h({id:e}),options:o})},f),(0,p.jsx)(d.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:b,view:m,name:"Item 1",offset:0}),(0,p.jsx)(d.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:b,view:m,name:"Item 2",offset:1}),(0,p.jsx)(d.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:b,view:m,name:"Item 3",offset:2}),(0,p.jsx)(d.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:b,view:m,name:"Item 4",offset:3}),(0,p.jsx)(d.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:b,view:m,name:"Item 5",offset:4}),(0,p.jsx)(d.A,{isHex:!0,type:s.pe.U8,reference:"ItemEditor",options:b,view:m,name:"Item 6",offset:5}),(0,p.jsx)(i.A,{children:(0,p.jsx)(v.A,{})})]})}}}]);
//# sourceMappingURL=73633.82bd6fb5.chunk.js.map