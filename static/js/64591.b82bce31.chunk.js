"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[64591],{53551:(e,a,l)=>{l.d(a,{A:()=>f});var n=l(89379),o=l(53986),t=l(17313),p=l(64435),i=l(41976),s=l(65043),x=l(35475),v=l(64004),b=l(70579);const m=["isHex","reference","view","name","offset","type","options"],{Text:u}=t.A;function f(e){const{isHex:a,reference:l,view:t,name:f,offset:d,type:y,options:r}=e,w=(0,o.A)(e,m),H=null==t?0:(0,v.LF)(t,d,y),[c,g]=(0,s.useState)(H);c!==H&&g(H);const A=r.find((e=>e.value===c)),j=a?"0x".concat(c.toString(16)):c,U=void 0===A?j:A.label;return(0,b.jsxs)(p.A,{children:[(0,b.jsx)(u,{disabled:null==t,children:"".concat(f,":").concat(null==t?"":" ".concat(U," \u2192"))}),(0,b.jsx)(i.A,(0,n.A)({disabled:null==t,showSearch:!0,options:r,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,a)=>a.label.includes(e),onSelect:e=>{(0,v.M9)(t,d,y,e),g(e)}},w)),""===l||null==t?"":(0,b.jsx)(x.N_,{to:{pathname:"../".concat(l,"?id=").concat(c),state:t.buffer},children:"\u27a4"})]})}f.defaultProps={view:null,isHex:!1,reference:""}},34871:(e,a,l)=>{l.d(a,{A:()=>p});var n=l(89379),o=l(41976),t=(l(65043),l(70579));function p(e){return(0,t.jsx)(o.A,(0,n.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,a)=>a.label.includes(e)},e))}},64591:(e,a,l)=>{l.r(a),l.d(a,{default:()=>y});l(65043);var n=l(73216),o=l(35475),t=l(64435),p=l(92135),i=l(33275),s=l(46974);const x=[{label:"Entry 0",value:0}],v=[{label:"Empty",value:0},{label:"Name box upper edge 1",value:1},{label:"Name box upper edge 2",value:2},{label:"Name box corner(unused)",value:3},{label:"Name box vertical edge",value:4},{label:"HP box middle",value:5},{label:"name box dragon 1(head)",value:6},{label:"name box dragon 2",value:7},{label:"name box dragon 3",value:8},{label:"name box dragon 4(tail)",value:9},{label:"name box dragon 5(claw)",value:10},{label:"name box corner",value:11},{label:"name box bottom edge 1",value:12},{label:"name box bottom edge 2",value:13},{label:"name box bottom edge 3",value:14},{label:"Name box corner(unused)",value:15},{label:"Name box edge(unused)",value:16},{label:"Name box edge(unused)",value:17},{label:"hit box upper edge",value:18},{label:"hit box corner",value:19},{label:"hit box middle",value:20},{label:"hit and weapon box edge corner",value:21},{label:"weapon box upper edge 1(darker)",value:22},{label:"weapon box upper edge 2",value:23},{label:"weapon box upper edge 3(lighter)",value:24},{label:"weapon box upper edge decoration(edge)",value:25},{label:"weapon box upper edge decoration(middle)",value:26},{label:"weapon and hit box transition 1(upper)",value:27},{label:"weapon box below upper edge",value:28},{label:"weapon box corner(unused)",value:29},{label:"weapon and hit box transition 2(lower)",value:30},{label:"weapon box middle",value:31},{label:"weapon box vertical edge(unused)",value:32},{label:"weapon box upper edge(unused)",value:33},{label:"hit box vertical edge",value:34},{label:"hit box vertical edge(unused)",value:35},{label:"hit box vertical edge(unused)",value:36},{label:"hit and HP box transition",value:37},{label:"hit and HP box transition",value:38},{label:"hit and HP box transition",value:39},{label:"hit and HP box transition",value:40},{label:"hit and HP box transition",value:41},{label:"hit and HP box transition edge",value:42},{label:"weapon and hp box transition",value:43},{label:"weapon and hp box transition",value:44},{label:"weapon and hp box transition",value:45},{label:"HP box upper middle edge",value:46},{label:'HP box "desing"',value:47},{label:'HP box "desing"',value:48},{label:'HP box "desing"',value:49},{label:'HP box "desing"',value:50},{label:'HP box "desing"',value:51},{label:'HP box "desing"',value:52},{label:"HP vertical edge",value:53},{label:"HP box lower edge",value:54},{label:"HP box lower edge",value:55},{label:"HP box lower edge",value:56},{label:"HP box lower edge",value:57},{label:"HP box lower edge",value:58},{label:"HP box lower edge",value:59},{label:"HP box lower edge",value:60},{label:"HP box lower edge",value:61},{label:"HP box lower edge",value:62},{label:"HP box lower edge",value:63},{label:"HP box lower edge",value:64},{label:"HP box lower edge",value:65},{label:"HP box lower edge",value:66},{label:"HP box lower edge",value:67},{label:"enemy name 1,1",value:68},{label:"enemy name 1,2",value:69},{label:"enemy name 2,1",value:70},{label:"enemy name 2,2",value:71},{label:"enemy name 3,1",value:72},{label:"enemy name 3,2",value:73},{label:"enemy name 4,1",value:74},{label:"enemy name 4,2",value:75},{label:"enemy name 5,1",value:76},{label:"enemy name 5,2",value:77},{label:"enemy name 6,1",value:78},{label:"enemy name 6,2",value:79},{label:"enemy name 7,1",value:80},{label:"enemy name 7,2",value:81},{label:"enemy weapon name 1,1",value:82},{label:"enemy weapon name 1,2",value:83},{label:"enemy weapon name 2,1",value:84},{label:"enemy weapon name 2,2",value:85},{label:"enemy weapon name 3,1",value:86},{label:"enemy weapon name 3,2",value:87},{label:"enemy weapon name 4,1",value:88},{label:"enemy weapon name 4,2",value:89},{label:"enemy weapon name 5,1",value:90},{label:"enemy weapon name 5,2",value:91},{label:"enemy weapon name 6,1",value:92},{label:"enemy weapon name 6,2",value:93},{label:"enemy weapon name 7,1",value:94},{label:"enemy weapon name 7,2",value:95},{label:"enemy weapon name 8,1",value:96},{label:"enemy weapon name 8,2",value:97},{label:"player name 1,1",value:98},{label:"player name 1,2",value:99},{label:"player name 2,1",value:100},{label:"player name 2,2",value:101},{label:"player name 3,1",value:102},{label:"player name 3,2",value:103},{label:"player name 4,1",value:104},{label:"player name 4,2",value:105},{label:"player name 5,1",value:106},{label:"player name 5,2",value:107},{label:"player name 6,1",value:108},{label:"player name 6,2",value:109},{label:"player name 7,1",value:110},{label:"player name 7,2",value:111},{label:"player weapon name 1,1",value:112},{label:"player weapon name 1,2",value:113},{label:"player weapon name 2,1",value:114},{label:"player weapon name 2,2",value:115},{label:"player weapon name 3,1",value:116},{label:"player weapon name 3,2",value:117},{label:"player weapon name 4,1",value:118},{label:"player weapon name 4,2",value:119},{label:"player weapon name 5,1",value:120},{label:"player weapon name 5,2",value:121},{label:"player weapon name 6,1",value:122},{label:"player weapon name 6,2",value:123},{label:"player weapon name 7,1",value:124},{label:"player weapon name 7,2",value:125},{label:"player weapon name 8,1",value:126},{label:"player weapon name 8,2",value:127}],b=[{label:"player, none",value:0},{label:"player, vertical",value:4},{label:"player, horizontical",value:8},{label:"player, both",value:12},{label:"enemy, none",value:16},{label:"enemy, vertical",value:20},{label:"enemy, horizontical",value:24},{label:"enemy, both",value:28}];var m=l(64004),u=l(34871),f=l(53551),d=l(70579);function y(){var e;const[a]=(0,n.KC)(),[l,y]=(0,o.ok)(),r=l.get("id");let w=null;try{w=new DataView(a,8398088+80*r,80)}catch(H){w=null}return(0,d.jsxs)(t.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,d.jsx)(p.A,{message:"Battle screen editor part 5 by Nintenlord",type:"info"}),(0,d.jsx)("div",{children:(0,d.jsx)(u.A,{disabled:null==w,defaultValue:null!==(e=x.find((e=>e.value.toString()===r)))&&void 0!==e?e:r,onSelect:e=>y({id:e}),options:x})},r),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,0)",offset:0}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,0)",offset:1}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,0)",offset:2}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,0)",offset:3}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block  (31,1)",offset:4}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,1)",offset:5}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,1)",offset:6}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,1)",offset:7}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,2)",offset:8}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,2)",offset:9}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,2)",offset:10}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,2)",offset:11}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,3)",offset:12}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,3)",offset:13}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,3)",offset:14}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,3)",offset:15}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,4)",offset:16}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,4)",offset:17}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,4)",offset:18}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,4)",offset:19}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,5)",offset:20}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,5)",offset:21}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,5)",offset:22}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,5)",offset:23}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,6)",offset:24}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,6)",offset:25}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,6)",offset:26}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,6)",offset:27}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,7)",offset:28}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,7)",offset:29}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,7)",offset:30}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,7)",offset:31}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,8)",offset:32}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,8)",offset:33}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,8)",offset:34}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,8)",offset:35}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,9)",offset:36}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,9)",offset:37}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,9)",offset:38}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,9)",offset:39}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,10)",offset:40}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,10)",offset:41}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,10)",offset:42}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,10)",offset:43}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,11)",offset:44}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,1)",offset:45}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,11)",offset:46}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,11)",offset:47}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,12)",offset:48}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,12)",offset:49}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,12)",offset:50}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,12)",offset:51}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,13)",offset:52}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,13)",offset:53}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,13)",offset:54}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,13)",offset:55}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,14)",offset:56}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,14)",offset:57}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,14)",offset:58}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,14)",offset:59}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,15)",offset:60}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,15)",offset:61}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,15)",offset:62}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,15)",offset:63}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,16)",offset:64}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,16)",offset:65}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,16)",offset:66}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,16)",offset:67}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,17)",offset:68}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,17)",offset:69}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,17)",offset:70}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,17)",offset:71}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,18)",offset:72}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,18)",offset:73}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,18)",offset:74}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,18)",offset:75}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (31,19)",offset:76}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (31,19)",offset:77}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:v,view:w,name:"Block (-1,19)",offset:78}),(0,d.jsx)(f.A,{isHex:!0,type:m.pe.U8,options:b,view:w,name:"Palette and Flipping (-1,19)",offset:79}),(0,d.jsx)(i.A,{children:(0,d.jsx)(s.A,{})})]})}}}]);
//# sourceMappingURL=64591.b82bce31.chunk.js.map