"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[79872],{4220:function(e,a,l){l.d(a,{Z:function(){return g}});var n=l(1413),t=l(29439),i=l(44925),o=l(97788),s=l(83099),p=l(21951),x=l(72791),v=l(11087),f=l(83282),m=l(80184),y=["isHex","reference","view","name","offset","type","options"],u=o.Z.Text;function g(e){var a=e.isHex,l=e.reference,o=e.view,g=e.name,r=e.offset,b=e.type,w=e.options,c=(0,i.Z)(e,y),d=null==o?0:(0,f.ij)(o,r,b),Z=(0,x.useState)(d),H=(0,t.Z)(Z,2),j=H[0],U=H[1];j!==d&&U(d);var P=w.find((function(e){return e.value===j})),k=a?"0x".concat(j.toString(16)):j,F=void 0===P?k:P.label;return(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(u,{disabled:null==o,children:"".concat(g,":").concat(null==o?"":" ".concat(F," \u2192"))}),(0,m.jsx)(p.Z,(0,n.Z)({disabled:null==o,showSearch:!0,options:w,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,a){return a.label.includes(e)},onSelect:function(e){(0,f.cW)(o,r,b,e),U(e)}},c)),""===l||null==o?"":(0,m.jsx)(v.rU,{to:{pathname:"../".concat(l,"?id=").concat(j),state:o.buffer},children:"\u27a4"})]})}g.defaultProps={view:null,isHex:!1,reference:""}},9933:function(e,a,l){l.d(a,{Z:function(){return o}});var n=l(1413),t=l(21951),i=(l(72791),l(80184));function o(e){return(0,i.jsx)(t.Z,(0,n.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,a){return a.label.includes(e)}},e))}},79872:function(e,a,l){l.r(a),l.d(a,{default:function(){return b}});var n=l(29439),t=(l(72791),l(57689)),i=l(11087),o=l(83099),s=l(33441),p=l(43292),x=l(79042),v=[{label:"Entry 0",value:0}],f=[{label:"weapon box corner",value:0},{label:"weapon box upper edge",value:1},{label:"weapon box vertical edge",value:2},{label:"weapon HP transition",value:3},{label:"HP box transition",value:4},{label:"HP box corner",value:5},{label:"weapon box middle",value:6},{label:"HP box middle",value:7},{label:"HP box lower edge",value:8},{label:"hit box vertical edge",value:9},{label:"hit box vertical edge",value:10},{label:"hit box vertical edge",value:11},{label:"hit box vertical edge",value:12},{label:"hit box vertical edge",value:13},{label:"hit box upper edge",value:14},{label:"hit box middle",value:15},{label:"hit HP transition",value:16},{label:"hit HP transition edge",value:17},{label:"HP box vertical edge",value:18},{label:"HP box corner",value:19},{label:"name box corner",value:20},{label:"name box vertical edge",value:21},{label:"name box vertical edge",value:22},{label:"name box corner",value:23},{label:"name box middle",value:24},{label:"name box upper edge",value:25},{label:"name lower box",value:26},{label:"weapon&HP transition",value:27},{label:"hit box middle",value:28},{label:"empty",value:29},{label:"empty",value:30},{label:"empty",value:31},{label:"enemy name 1,1",value:32},{label:"enemy name 1,2",value:33},{label:"enemy name 2,1",value:34},{label:"enemy name 2,2",value:35},{label:"enemy name 3,1",value:36},{label:"enemy name 3,2",value:37},{label:"enemy name 4,1",value:38},{label:"enemy name 4,2",value:39},{label:"enemy name 5,1",value:40},{label:"enemy name 5,2",value:41},{label:"enemy name 6,1",value:42},{label:"enemy name 6,2",value:43},{label:"enemy weapon name 1,1",value:44},{label:"enemy weapon name 1,2",value:45},{label:"enemy weapon name 2,1",value:46},{label:"enemy weapon name 2,2",value:47},{label:"enemy weapon name 3,1",value:48},{label:"enemy weapon name 3,2",value:49},{label:"enemy weapon name 4,1",value:50},{label:"enemy weapon name 4,2",value:51},{label:"enemy weapon name 5,1",value:52},{label:"enemy weapon name 5,2",value:53},{label:"enemy weapon name 6,1",value:54},{label:"enemy weapon name 6,2",value:55},{label:"enemy weapon name 7,1",value:56},{label:"enemy weapon name 7,2",value:57},{label:"player name 1,1",value:58},{label:"player name 1,2",value:59},{label:"player name 2,1",value:60},{label:"player name 2,2",value:61},{label:"player name 3,1",value:62},{label:"player name 3,2",value:63},{label:"player name 4,1",value:64},{label:"player name 4,2",value:65},{label:"player name 5,1",value:66},{label:"player name 5,2",value:67},{label:"player name 6,1",value:68},{label:"player name 6,2",value:69},{label:"player weapon name 1,1",value:70},{label:"player weapon name 1,2",value:71},{label:"player weapon name 2,1",value:72},{label:"player weapon name 2,2",value:73},{label:"player weapon name 3,1",value:74},{label:"player weapon name 3,2",value:75},{label:"player weapon name 4,1",value:76},{label:"player weapon name 4,2",value:77},{label:"player weapon name 5,1",value:78},{label:"player weapon name 5,2",value:79},{label:"player weapon name 6,1",value:80},{label:"player weapon name 6,2",value:81},{label:"player weapon name 7,1",value:82},{label:"player weapon name 7,2",value:83}],m=[{label:"player, none",value:0},{label:"player, vertical",value:4},{label:"player, horizontical",value:8},{label:"player, both",value:12},{label:"enemy, none",value:16},{label:"enemy, vertical",value:20},{label:"enemy, horizontical",value:24},{label:"enemy, both",value:28}],y=l(83282),u=l(9933),g=l(4220),r=l(80184);function b(){var e,a=(0,t.bx)(),l=(0,n.Z)(a,1)[0],b=(0,i.lr)(),w=(0,n.Z)(b,2),c=w[0],d=w[1],Z=c.get("id"),H=null;try{H=new DataView(l,1125508+80*Z,80)}catch(j){H=null}return(0,r.jsxs)(o.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,r.jsx)(s.Z,{message:"Battle screen editor part 5 by Nintenlord",type:"info"}),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{disabled:null==H,defaultValue:null!==(e=v.find((function(e){return e.value.toString()===Z})))&&void 0!==e?e:Z,onSelect:function(e){return d({id:e})},options:v})},Z),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,0)",offset:0}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,0)",offset:1}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,0)",offset:2}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,0)",offset:3}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block  (31,1)",offset:4}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,1)",offset:5}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,1)",offset:6}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,1)",offset:7}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,2)",offset:8}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,2)",offset:9}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,2)",offset:10}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,2)",offset:11}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,3)",offset:12}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,3)",offset:13}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,3)",offset:14}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,3)",offset:15}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,4)",offset:16}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,4)",offset:17}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,4)",offset:18}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,4)",offset:19}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,5)",offset:20}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,5)",offset:21}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,5)",offset:22}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,5)",offset:23}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,6)",offset:24}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,6)",offset:25}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,6)",offset:26}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,6)",offset:27}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,7)",offset:28}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,7)",offset:29}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,7)",offset:30}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,7)",offset:31}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,8)",offset:32}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,8)",offset:33}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,8)",offset:34}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,8)",offset:35}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,9)",offset:36}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,9)",offset:37}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,9)",offset:38}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,9)",offset:39}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,10)",offset:40}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,10)",offset:41}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,10)",offset:42}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,10)",offset:43}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,11)",offset:44}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,1)",offset:45}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,11)",offset:46}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,11)",offset:47}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,12)",offset:48}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,12)",offset:49}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,12)",offset:50}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,12)",offset:51}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,13)",offset:52}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,13)",offset:53}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,13)",offset:54}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,13)",offset:55}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,14)",offset:56}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,14)",offset:57}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,14)",offset:58}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,14)",offset:59}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,15)",offset:60}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,15)",offset:61}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,15)",offset:62}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,15)",offset:63}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,16)",offset:64}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,16)",offset:65}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,16)",offset:66}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,16)",offset:67}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,17)",offset:68}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,17)",offset:69}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,17)",offset:70}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,17)",offset:71}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,18)",offset:72}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,18)",offset:73}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,18)",offset:74}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,18)",offset:75}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (31,19)",offset:76}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (31,19)",offset:77}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:f,view:H,name:"Block (-1,19)",offset:78}),(0,r.jsx)(g.Z,{isHex:!0,type:y.g.U8,options:m,view:H,name:"Palette and Flipping (-1,19)",offset:79}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(x.Z,{})})]})}}}]);
//# sourceMappingURL=79872.25c27455.chunk.js.map