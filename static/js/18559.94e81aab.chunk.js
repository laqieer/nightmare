"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[18559],{4220:function(e,l,a){a.d(l,{Z:function(){return y}});var n=a(1413),t=a(29439),o=a(44925),i=a(97788),p=a(83099),s=a(21951),v=a(72791),u=a(11087),b=a(83282),m=a(80184),r=["isHex","reference","view","name","offset","type","options"],x=i.Z.Text;function y(e){var l=e.isHex,a=e.reference,i=e.view,y=e.name,f=e.offset,c=e.type,w=e.options,d=(0,o.Z)(e,r),g=null==i?0:(0,b.ij)(i,f,c),Z=(0,v.useState)(g),H=(0,t.Z)(Z,2),j=H[0],h=H[1];j!==g&&h(g);var Y=w.find((function(e){return e.value===j})),U=l?"0x".concat(j.toString(16)):j,P=void 0===Y?U:Y.label;return(0,m.jsxs)(p.Z,{children:[(0,m.jsx)(x,{disabled:null==i,children:"".concat(y,":").concat(null==i?"":" ".concat(P," \u2192"))}),(0,m.jsx)(s.Z,(0,n.Z)({disabled:null==i,showSearch:!0,options:w,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)},onSelect:function(e){(0,b.cW)(i,f,c,e),h(e)}},d)),""===a||null==i?"":(0,m.jsx)(u.rU,{to:{pathname:"../".concat(a,"?id=").concat(j),state:i.buffer},children:"\u27a4"})]})}y.defaultProps={view:null,isHex:!1,reference:""}},9933:function(e,l,a){a.d(l,{Z:function(){return i}});var n=a(1413),t=a(21951),o=(a(72791),a(80184));function i(e){return(0,o.jsx)(t.Z,(0,n.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)}},e))}},18559:function(e,l,a){a.r(l),a.d(l,{default:function(){return c}});var n=a(29439),t=(a(72791),a(57689)),o=a(11087),i=a(83099),p=a(33441),s=a(43292),v=a(79042),u=[{label:"Y 0",value:0},{label:"Y 1",value:1},{label:"Y 2",value:2},{label:"Y 3",value:3},{label:"Y 4",value:4},{label:"Y 5",value:5}],b=[{label:"weapon box corner",value:0},{label:"weapon box upper edge",value:1},{label:"weapon box vertical edge",value:2},{label:"weapon HP transition",value:3},{label:"HP box transition",value:4},{label:"HP box corner",value:5},{label:"weapon box middle",value:6},{label:"HP box middle",value:7},{label:"HP box lower edge",value:8},{label:"hit box vertical edge",value:9},{label:"hit box vertical edge",value:10},{label:"hit box vertical edge",value:11},{label:"hit box vertical edge",value:12},{label:"hit box vertical edge",value:13},{label:"hit box upper edge",value:14},{label:"hit box middle",value:15},{label:"hit HP transition",value:16},{label:"hit HP transition edge",value:17},{label:"HP box vertical edge",value:18},{label:"HP box corner",value:19},{label:"name box corner",value:20},{label:"name box vertical edge",value:21},{label:"name box vertical edge",value:22},{label:"name box corner",value:23},{label:"name box middle",value:24},{label:"name box upper edge",value:25},{label:"name lower box",value:26},{label:"weapon&HP transition",value:27},{label:"hit box middle",value:28},{label:"empty",value:29},{label:"empty",value:30},{label:"empty",value:31},{label:"enemy name 1,1",value:32},{label:"enemy name 1,2",value:33},{label:"enemy name 2,1",value:34},{label:"enemy name 2,2",value:35},{label:"enemy name 3,1",value:36},{label:"enemy name 3,2",value:37},{label:"enemy name 4,1",value:38},{label:"enemy name 4,2",value:39},{label:"enemy name 5,1",value:40},{label:"enemy name 5,2",value:41},{label:"enemy name 6,1",value:42},{label:"enemy name 6,2",value:43},{label:"enemy weapon name 1,1",value:44},{label:"enemy weapon name 1,2",value:45},{label:"enemy weapon name 2,1",value:46},{label:"enemy weapon name 2,2",value:47},{label:"enemy weapon name 3,1",value:48},{label:"enemy weapon name 3,2",value:49},{label:"enemy weapon name 4,1",value:50},{label:"enemy weapon name 4,2",value:51},{label:"enemy weapon name 5,1",value:52},{label:"enemy weapon name 5,2",value:53},{label:"enemy weapon name 6,1",value:54},{label:"enemy weapon name 6,2",value:55},{label:"enemy weapon name 7,1",value:56},{label:"enemy weapon name 7,2",value:57},{label:"player name 1,1",value:58},{label:"player name 1,2",value:59},{label:"player name 2,1",value:60},{label:"player name 2,2",value:61},{label:"player name 3,1",value:62},{label:"player name 3,2",value:63},{label:"player name 4,1",value:64},{label:"player name 4,2",value:65},{label:"player name 5,1",value:66},{label:"player name 5,2",value:67},{label:"player name 6,1",value:68},{label:"player name 6,2",value:69},{label:"player weapon name 1,1",value:70},{label:"player weapon name 1,2",value:71},{label:"player weapon name 2,1",value:72},{label:"player weapon name 2,2",value:73},{label:"player weapon name 3,1",value:74},{label:"player weapon name 3,2",value:75},{label:"player weapon name 4,1",value:76},{label:"player weapon name 4,2",value:77},{label:"player weapon name 5,1",value:78},{label:"player weapon name 5,2",value:79},{label:"player weapon name 6,1",value:80},{label:"player weapon name 6,2",value:81},{label:"player weapon name 7,1",value:82},{label:"player weapon name 7,2",value:83}],m=[{label:"player, none",value:0},{label:"player, vertical",value:4},{label:"player, horizontical",value:8},{label:"player, both",value:12},{label:"enemy, none",value:16},{label:"enemy, vertical",value:20},{label:"enemy, horizontical",value:24},{label:"enemy, both",value:28}],r=a(83282),x=a(9933),y=a(4220),f=a(80184);function c(){var e,l=(0,t.bx)(),a=(0,n.Z)(l,1)[0],c=(0,o.lr)(),w=(0,n.Z)(c,2),d=w[0],g=w[1],Z=d.get("id"),H=null;try{H=new DataView(a,1936436+30*Z,30)}catch(j){H=null}return(0,f.jsxs)(i.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,f.jsx)(p.Z,{message:"Battle screen editor part 1 by Nintenlord",type:"info"}),(0,f.jsx)("div",{children:(0,f.jsx)(x.Z,{disabled:null==H,defaultValue:null!==(e=u.find((function(e){return e.value.toString()===Z})))&&void 0!==e?e:Z,onSelect:function(e){return g({id:e})},options:u})},Z),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (1,Y)",offset:0}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (1,Y)",offset:1}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (Y,2,Y)",offset:2}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (2,Y)",offset:3}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (3,Y)",offset:4}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (3,Y)",offset:5}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (4,Y)",offset:6}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (4,Y)",offset:7}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (5,Y)",offset:8}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (5,Y)",offset:9}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (6,Y)",offset:10}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (6,Y)",offset:11}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (7,Y)",offset:12}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (7,Y)",offset:13}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (8,Y)",offset:14}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (8,Y)",offset:15}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (9,Y)",offset:16}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (9,Y)",offset:17}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (10,Y)",offset:18}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (10,Y)",offset:19}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (11,Y)",offset:20}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (11,Y)",offset:21}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (12,Y)",offset:22}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (12,Y)",offset:23}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (13,Y)",offset:24}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (13,Y)",offset:25}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (14,Y)",offset:26}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (14,Y)",offset:27}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:b,view:H,name:"Block (15,Y)",offset:28}),(0,f.jsx)(y.Z,{isHex:!0,type:r.g.U8,options:m,view:H,name:"Palette and Flipping (15,Y)",offset:29}),(0,f.jsx)(s.Z,{children:(0,f.jsx)(v.Z,{})})]})}}}]);
//# sourceMappingURL=18559.94e81aab.chunk.js.map