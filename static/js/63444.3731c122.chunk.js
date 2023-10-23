"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[63444],{4220:function(e,t,n){n.d(t,{Z:function(){return Z}});var i=n(1413),s=n(29439),l=n(44925),a=n(97788),o=n(83099),x=n(21951),f=n(72791),r=n(11087),u=n(83282),p=n(80184),v=["isHex","reference","view","name","offset","type","options"],c=a.Z.Text;function Z(e){var t=e.isHex,n=e.reference,a=e.view,Z=e.name,w=e.offset,g=e.type,b=e.options,d=(0,l.Z)(e,v),j=null==a?0:(0,u.ij)(a,w,g),y=(0,f.useState)(j),m=(0,s.Z)(y,2),U=m[0],H=m[1];U!==j&&H(j);var h=b.find((function(e){return e.value===U})),S=t?"0x".concat(U.toString(16)):U,C=void 0===h?S:h.label;return(0,p.jsxs)(o.Z,{children:[(0,p.jsx)(c,{disabled:null==a,children:"".concat(Z,":").concat(null==a?"":" ".concat(C," \u2192"))}),(0,p.jsx)(x.Z,(0,i.Z)({disabled:null==a,showSearch:!0,options:b,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,t){return t.label.includes(e)},onSelect:function(e){(0,u.cW)(a,w,g,e),H(e)}},d)),""===n||null==a?"":(0,p.jsx)(r.rU,{to:{pathname:"../".concat(n,"?id=").concat(U),state:a.buffer},children:"\u27a4"})]})}Z.defaultProps={view:null,isHex:!1,reference:""}},9933:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(1413),s=n(21951),l=(n(72791),n(80184));function a(e){return(0,l.jsx)(s.Z,(0,i.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,t){return t.label.includes(e)}},e))}},63444:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(29439),s=(n(72791),n(57689)),l=n(11087),a=n(83099),o=n(33441),x=n(43292),f=n(79042),r=[{label:"Entry 0",value:0}],u=[{label:"None",value:0},{label:"0x000001",value:1},{label:"0x000002",value:2},{label:"0x000004",value:4},{label:"0x000008",value:8},{label:"0x000010",value:16},{label:"0x000020",value:32},{label:"0x000040",value:64},{label:"0x000080",value:128},{label:"0x000100",value:256},{label:"0x000200",value:512},{label:"0x000400",value:1024},{label:"0x000800",value:2048},{label:"0x001000",value:4096},{label:"0x002000",value:8192},{label:"0x004000",value:16384},{label:"0x008000",value:32768},{label:"0x010000",value:65536},{label:"0x020000",value:131072},{label:"0x040000",value:262144},{label:"0x080000",value:524288},{label:"0x100000",value:1048576},{label:"0x200000",value:2097152},{label:"0x400000",value:4194304},{label:"0x800000",value:8388608},{label:"For testing",value:16777215}],p=n(83282),v=n(9933),c=n(4220),Z=n(80184);function w(){var e,t=(0,s.bx)(),n=(0,i.Z)(t,1)[0],w=(0,l.lr)(),g=(0,i.Z)(w,2),b=g[0],d=g[1],j=b.get("id"),y=null;try{y=new DataView(n,500717+87*j,87)}catch(m){y=null}return(0,Z.jsxs)(a.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,Z.jsx)(o.Z,{message:"FE4 Character Skill Table Editor by Lorena",type:"info"}),(0,Z.jsx)("div",{children:(0,Z.jsx)(v.Z,{disabled:null==y,defaultValue:null!==(e=r.find((function(e){return e.value.toString()===j})))&&void 0!==e?e:j,onSelect:function(e){return d({id:e})},options:r})},j),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Canto",offset:0}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Great Shield",offset:3}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Wrath",offset:6}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Pursuit",offset:9}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Adept",offset:12}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Steal",offset:15}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Unused 1",offset:18}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Dance",offset:21}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Unused 2",offset:24}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Valkyrie Music",offset:27}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Dismount (Celice only)",offset:30}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Charisma",offset:33}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Unused 4",offset:36}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Nihil",offset:39}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Miracle",offset:42}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Critical",offset:45}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Vantage",offset:48}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Charge",offset:51}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Astra",offset:54}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Luna",offset:57}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Sol",offset:60}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Light Sword",offset:63}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Dark Sword",offset:66}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Renewal",offset:69}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Paragon",offset:72}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Cuan/Ethlin/Finn Immunity",offset:75}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Recover",offset:78}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Bargain",offset:81}),(0,Z.jsx)(c.Z,{isHex:!0,type:p.g.U32,options:u,view:y,name:"Return",offset:84}),(0,Z.jsx)(x.Z,{children:(0,Z.jsx)(f.Z,{})})]})}}}]);
//# sourceMappingURL=63444.3731c122.chunk.js.map