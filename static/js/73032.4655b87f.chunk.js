"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[73032],{53551:(e,l,a)=>{a.d(l,{A:()=>d});var t=a(89379),o=a(53986),r=a(17313),i=a(64435),n=a(41976),s=a(65043),v=a(35475),f=a(64004),u=a(70579);const p=["isHex","reference","view","name","offset","type","options"],{Text:b}=r.A;function d(e){const{isHex:l,reference:a,view:r,name:d,offset:c,type:m,options:x}=e,w=(0,o.A)(e,p),A=null==r?0:(0,f.LF)(r,c,m),[S,B]=(0,s.useState)(A);S!==A&&B(A);const y=x.find((e=>e.value===S)),E=l?"0x".concat(S.toString(16)):S,h=void 0===y?E:y.label;return(0,u.jsxs)(i.A,{children:[(0,u.jsx)(b,{disabled:null==r,children:"".concat(d,":").concat(null==r?"":" ".concat(h," \u2192"))}),(0,u.jsx)(n.A,(0,t.A)({disabled:null==r,showSearch:!0,options:x,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,f.M9)(r,c,m,e),B(e)}},w)),""===a||null==r?"":(0,u.jsx)(v.N_,{to:{pathname:"../".concat(a,"?id=").concat(S),state:r.buffer},children:"\u27a4"})]})}d.defaultProps={view:null,isHex:!1,reference:""}},34871:(e,l,a)=>{a.d(l,{A:()=>i});var t=a(89379),o=a(41976),r=(a(65043),a(70579));function i(e){return(0,r.jsx)(o.A,(0,t.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},73032:(e,l,a)=>{a.r(l),a.d(l,{default:()=>c});a(65043);var t=a(73216),o=a(35475),r=a(64435),i=a(92135),n=a(33275),s=a(46974);const v=[{label:"Entry 0",value:0}],f=[{label:"Iron Sword",value:0},{label:"Steel Sword",value:1},{label:"Silver Sword",value:2},{label:"Iron Blade",value:3},{label:"Steel Blade",value:4},{label:"Silver Blade",value:5},{label:"Prayer Sword",value:6},{label:"Thief Sword",value:7},{label:"Barrier Sword",value:8},{label:"Berserk Sword",value:9},{label:"Hero's Sword",value:10},{label:"Silence Sword",value:11},{label:"Sleep Sword",value:12},{label:"Thin Sword",value:13},{label:"Defence Sword",value:14},{label:"Fire Sword",value:15},{label:"Earth Sword",value:16},{label:"Thunder Sword",value:17},{label:"Wind Sword",value:18},{label:"Light Sword",value:19},{label:"Mistoltin",value:20},{label:"Tyrfing",value:21},{label:"Balmunk",value:22},{label:"Armor Killer",value:23},{label:"Wing Clipper",value:24},{label:"Broken Sword",value:25},{label:"Broken Sword",value:26},{label:"Broken Sword",value:27},{label:"Iron Lance",value:28},{label:"Steel Lance",value:29},{label:"Silver Lance",value:30},{label:"Hand Lance",value:31},{label:"Knight Killer",value:32},{label:"Hero's Lance",value:33},{label:"Thin Lance",value:34},{label:"Gungnir",value:35},{label:"Gae Bolg",value:36},{label:"Broken Lance",value:37},{label:"Broken Lance",value:38},{label:"Broken Lance",value:39},{label:"Iron Axe",value:40},{label:"Steel Axe",value:41},{label:"Silver Axe",value:42},{label:"Hero's Axe",value:43},{label:"Swanchika",value:44},{label:"Hand Axe",value:45},{label:"Broken Axe",value:46},{label:"Broken Axe",value:47},{label:"Broken Axe",value:48},{label:"Iron Bow",value:49},{label:"Steel Bow",value:50},{label:"Silver Bow",value:51},{label:"Hero's Bow",value:52},{label:"Killer Bow",value:53},{label:"Ichieval",value:54},{label:"Broken Bow",value:55},{label:"Broken Bow",value:56},{label:"Broken Bow",value:57},{label:"Long Arch",value:58},{label:"Iron Arch",value:59},{label:"Killer Arch",value:60},{label:"Gold Arch",value:61},{label:"Fire",value:62},{label:"El Fire",value:63},{label:"Volcanon",value:64},{label:"Fala Flame",value:65},{label:"Meteo",value:66},{label:"Thunder",value:67},{label:"El Thunder",value:68},{label:"Torron",value:69},{label:"Tor Hammer",value:70},{label:"Thunderstorm",value:71},{label:"Wind",value:72},{label:"El Wind",value:73},{label:"Tornado",value:74},{label:"Holsety",value:75},{label:"Blizzard",value:76},{label:"Lightning",value:77},{label:"Rizziah",value:78},{label:"Aura",value:79},{label:"Narga",value:80},{label:"Yotsmungand",value:81},{label:"Fenrir",value:82},{label:"Hell",value:83},{label:"Loptous",value:84},{label:"Empty Book",value:85},{label:"Empty Book",value:86},{label:"Empty Book",value:87},{label:"Live Staff",value:88},{label:"Relive Staff",value:89},{label:"Recover Staff",value:90},{label:"Libro Staff",value:91},{label:"Reserve Staff",value:92},{label:"Return Staff",value:93},{label:"Warp Staff",value:94},{label:"Rescue Staff",value:95},{label:"Charm Staff",value:96},{label:"Rest Staff",value:97},{label:"Valkyre Staff",value:98},{label:"Silence Staff",value:99},{label:"Sleep Staff",value:100},{label:"Berserk Staff",value:101},{label:"Thief Staff",value:102},{label:"Broken Staff",value:103},{label:"Broken Staff",value:104},{label:"Broken Staff",value:105},{label:"Live Bracelet",value:106},{label:"Elite Ring",value:107},{label:"Thief Bracelet",value:108},{label:"Prayer Bracelet",value:109},{label:"Pursuit Ring",value:110},{label:"Recover Ring",value:111},{label:"Bargain Bracelet",value:112},{label:"Knight Ring",value:113},{label:"Return Ring",value:114},{label:"Speed Ring",value:115},{label:"Magic Ring",value:116},{label:"Power Ring",value:117},{label:"Shield Ring",value:118},{label:"Barrier Ring",value:119},{label:"Leg Ring",value:120},{label:"Skill Ring",value:121},{label:"Broken Sword",value:122},{label:"Broken Spear",value:123},{label:"Broken Bow",value:124},{label:"Empty Book",value:125},{label:"Empty Book",value:126},{label:"Empty Book",value:127},{label:"Empty Book",value:128},{label:"Empty Book",value:129},{label:"Empty Book",value:130},{label:"Empty Book",value:131},{label:"Empty Book",value:132},{label:"Empty Book",value:133},{label:"Empty Book",value:134},{label:"Empty Book",value:135},{label:"Broken Staff",value:136},{label:"Circlet",value:137},{label:"None",value:255}];var u=a(64004),p=a(34871),b=a(53551),d=a(70579);function c(){var e;const[l]=(0,t.KC)(),[a,c]=(0,o.ok)(),m=a.get("id");let x=null;try{x=new DataView(l,517360+40*m,40)}catch(w){x=null}return(0,d.jsxs)(r.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,d.jsx)(i.A,{message:"FE4 Broken Weapon Editor",type:"info"}),(0,d.jsx)("div",{children:(0,d.jsx)(p.A,{disabled:null==x,defaultValue:null!==(e=v.find((e=>e.value.toString()===m)))&&void 0!==e?e:m,onSelect:e=>c({id:e}),options:v})},m),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Sword",offset:0}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Sword",offset:1}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Sword",offset:2}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Sword",offset:3}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Lance",offset:4}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Lance",offset:5}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Lance",offset:6}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Lance",offset:7}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Axe",offset:8}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Axe",offset:9}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Axe",offset:10}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Axe",offset:11}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Bow",offset:12}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Bow",offset:13}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Bow",offset:14}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Bow",offset:15}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Staff",offset:16}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Staff",offset:17}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Staff",offset:18}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Staff",offset:19}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Fire",offset:20}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Fire",offset:21}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Fire",offset:22}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Fire",offset:23}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Thunder",offset:24}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Thunder",offset:25}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Thunder",offset:26}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Thunder",offset:27}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Wind",offset:28}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Wind",offset:29}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Wind",offset:30}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Wind",offset:31}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Light",offset:32}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Light",offset:33}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Light",offset:34}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Light",offset:35}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"* Dark",offset:36}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"A Dark",offset:37}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"B Dark",offset:38}),(0,d.jsx)(b.A,{isHex:!0,type:u.pe.U8,reference:"ItemEditor",options:f,view:x,name:"C Dark",offset:39}),(0,d.jsx)(n.A,{children:(0,d.jsx)(s.A,{})})]})}}}]);
//# sourceMappingURL=73032.4655b87f.chunk.js.map