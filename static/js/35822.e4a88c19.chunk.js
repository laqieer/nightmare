"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[35822],{53551:(e,l,a)=>{a.d(l,{A:()=>f});var t=a(89379),n=a(53986),i=a(17313),o=a(64435),s=a(41976),r=a(65043),u=a(35475),c=a(64004),v=a(70579);const d=["isHex","reference","view","name","offset","type","options"],{Text:b}=i.A;function f(e){const{isHex:l,reference:a,view:i,name:f,offset:p,type:h,options:x}=e,A=(0,n.A)(e,d),w=null==i?0:(0,c.LF)(i,p,h),[y,j]=(0,r.useState)(w);y!==w&&j(w);const S=x.find((e=>e.value===y)),m=l?"0x".concat(y.toString(16)):y,g=void 0===S?m:S.label;return(0,v.jsxs)(o.A,{children:[(0,v.jsx)(b,{disabled:null==i,children:"".concat(f,":").concat(null==i?"":" ".concat(g," \u2192"))}),(0,v.jsx)(s.A,(0,t.A)({disabled:null==i,showSearch:!0,options:x,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,c.M9)(i,p,h,e),j(e)}},A)),""===a||null==i?"":(0,v.jsx)(u.N_,{to:{pathname:"../".concat(a,"?id=").concat(y),state:i.buffer},children:"\u27a4"})]})}f.defaultProps={view:null,isHex:!1,reference:""}},34871:(e,l,a)=>{a.d(l,{A:()=>o});var t=a(89379),n=a(41976),i=(a(65043),a(70579));function o(e){return(0,i.jsx)(n.A,(0,t.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},35822:(e,l,a)=>{a.r(l),a.d(l,{default:()=>p});a(65043);var t=a(73216),n=a(35475),i=a(64435),o=a(92135),s=a(33275),r=a(46974);const u=[{label:"Tiltyu",value:0},{label:"Fury",value:1},{label:"Sylvia",value:2},{label:"Lachesis",value:3},{label:"Ayra",value:4},{label:"Bridget",value:5}],c=[{label:"Sigurd",value:1},{label:"Noish",value:2},{label:"Alec",value:3},{label:"Arden",value:4},{label:"Midayle",value:7},{label:"Levin",value:8},{label:"Holyn",value:9},{label:"Azel",value:10},{label:"Jamuka",value:11},{label:"Claude",value:12},{label:"Beowulf",value:13},{label:"Lex",value:14},{label:"Deu",value:15}];var v=a(64004),d=a(34871),b=a(53551),f=a(70579);function p(){var e;const[l]=(0,t.KC)(),[a,p]=(0,n.ok)(),h=a.get("id");let x=null;try{x=new DataView(l,450948+36*h,36)}catch(A){x=null}return(0,f.jsxs)(i.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,f.jsx)(o.A,{message:"FE4 Love Conversations",type:"info"}),(0,f.jsx)("div",{children:(0,f.jsx)(d.A,{disabled:null==x,defaultValue:null!==(e=u.find((e=>e.value.toString()===h)))&&void 0!==e?e:h,onSelect:e=>p({id:e}),options:u})},h),(0,f.jsx)(b.A,{isHex:!0,type:v.pe.U8,options:c,view:x,name:"Conversation 1",offset:0}),(0,f.jsx)(b.A,{isHex:!0,type:v.pe.U8,options:c,view:x,name:"Conversation 2",offset:12}),(0,f.jsx)(b.A,{isHex:!0,type:v.pe.U8,options:c,view:x,name:"Conversation 3",offset:24}),(0,f.jsx)(s.A,{children:(0,f.jsx)(r.A,{})})]})}}}]);
//# sourceMappingURL=35822.e4a88c19.chunk.js.map