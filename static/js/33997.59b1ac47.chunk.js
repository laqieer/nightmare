"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[33997],{4220:function(e,l,n){n.d(l,{Z:function(){return h}});var t=n(1413),a=n(29439),i=n(44925),r=n(97788),u=n(83099),o=n(21951),c=n(72791),s=n(11087),f=n(83282),d=n(80184),v=["isHex","reference","view","name","offset","type","options"],b=r.Z.Text;function h(e){var l=e.isHex,n=e.reference,r=e.view,h=e.name,p=e.offset,x=e.type,Z=e.options,w=(0,i.Z)(e,v),S=null==r?0:(0,f.ij)(r,p,x),j=(0,c.useState)(S),g=(0,a.Z)(j,2),y=g[0],m=g[1];y!==S&&m(S);var k=Z.find((function(e){return e.value===y})),H=l?"0x".concat(y.toString(16)):y,E=void 0===k?H:k.label;return(0,d.jsxs)(u.Z,{children:[(0,d.jsx)(b,{disabled:null==r,children:"".concat(h,":").concat(null==r?"":" ".concat(E," \u2192"))}),(0,d.jsx)(o.Z,(0,t.Z)({disabled:null==r,showSearch:!0,options:Z,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)},onSelect:function(e){(0,f.cW)(r,p,x,e),m(e)}},w)),""===n||null==r?"":(0,d.jsx)(s.rU,{to:{pathname:"../".concat(n,"?id=").concat(y),state:r.buffer},children:"\u27a4"})]})}h.defaultProps={view:null,isHex:!1,reference:""}},9933:function(e,l,n){n.d(l,{Z:function(){return r}});var t=n(1413),a=n(21951),i=(n(72791),n(80184));function r(e){return(0,i.jsx)(a.Z,(0,t.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)}},e))}},33997:function(e,l,n){n.r(l),n.d(l,{default:function(){return p}});var t=n(29439),a=(n(72791),n(57689)),i=n(11087),r=n(83099),u=n(33441),o=n(43292),c=n(79042),s=[{label:"Sword",value:0},{label:"Lance",value:1},{label:"Axe",value:2},{label:"Bow",value:3},{label:"Staff",value:4},{label:"Fire",value:5},{label:"Thunder",value:6},{label:"Wind",value:7},{label:"Light",value:8},{label:"Dark",value:9}],f=[{label:"Sword",value:0},{label:"Lance",value:1},{label:"Axe",value:2},{label:"Bow",value:3},{label:"Staff",value:4},{label:"Fire",value:5},{label:"Thunder",value:6},{label:"Wind",value:7},{label:"Light",value:8},{label:"Dark",value:9},{label:"Nothing",value:255}],d=n(83282),v=n(9933),b=n(4220),h=n(80184);function p(){var e,l=(0,a.bx)(),n=(0,t.Z)(l,1)[0],p=(0,i.lr)(),x=(0,t.Z)(p,2),Z=x[0],w=x[1],S=Z.get("id"),j=null;try{j=new DataView(n,121839+3*S,3)}catch(g){j=null}return(0,h.jsxs)(r.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,h.jsx)(u.Z,{message:"FE5 Weapon Triangle Editor by Shinpichu",type:"info"}),(0,h.jsx)("div",{children:(0,h.jsx)(v.Z,{disabled:null==j,defaultValue:null!==(e=s.find((function(e){return e.value.toString()===S})))&&void 0!==e?e:S,onSelect:function(e){return w({id:e})},options:s})},S),(0,h.jsx)(b.Z,{isHex:!0,type:d.g.U8,options:f,view:j,name:"Entry 1",offset:0}),(0,h.jsx)(b.Z,{isHex:!0,type:d.g.U8,options:f,view:j,name:"Entry 2",offset:1}),(0,h.jsx)(b.Z,{isHex:!0,type:d.g.U8,options:f,view:j,name:"Entry 3",offset:2}),(0,h.jsx)(o.Z,{children:(0,h.jsx)(c.Z,{})})]})}}}]);
//# sourceMappingURL=33997.59b1ac47.chunk.js.map