"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[18118],{73339:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413),o=t(29439),l=t(97788),a=t(83099),i=t(13344),u=t(72791),c=t(83282),s=t(80184),f=l.Z.Text;function d(e){var n=e.view,t=e.name,l=e.offset,d=e.type,p=null==n?0:(0,c.ij)(n,l,d),v=(0,u.useState)(p),m=(0,o.Z)(v,2),Z=m[0],y=m[1];return Z!==p&&y(p),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(f,{disabled:null==n,children:"".concat(t,":").concat(null==n?"":" ".concat(Z," \u2192"))}),(0,s.jsx)(i.Z,(0,r.Z)({disabled:null==n,min:c.Cu[d][0],max:c.Cu[d][1],onPressEnter:function(e){var t=parseInt(e.target.value,10);(0,c.cW)(n,l,d,t),y(t)}},e))]})}d.defaultProps={view:null}},23145:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413),o=t(29439),l=t(97788),a=t(83099),i=t(49389),u=t(72791),c=t(83282),s=t(80184),f=l.Z.Text;function d(e){var n=(0,u.useState)(""),t=(0,o.Z)(n,2),l=t[0],d=t[1],p=e.view,v=e.name,m=e.offset,Z=e.type,y=null==p?0:(0,c.ij)(p,m,Z),x=(0,u.useState)(y),b=(0,o.Z)(x,2),g=b[0],C=b[1];return g!==y&&C(y),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(f,{disabled:null==p,children:"".concat(v,":").concat(null==p?"":" 0x".concat(g.toString(16)," \u2192"))}),(0,s.jsx)(i.Z,(0,r.Z)({disabled:null==p,allowClear:!0,maxLength:2*c.Tz[Z],prefix:"0x",value:l,onChange:function(e){var n=e.currentTarget.value;(/^[0-9a-f]+$/.test(n)||""===n)&&d(n)},onPressEnter:function(e){var n=parseInt(e.target.value,16);(0,c.cW)(p,m,Z,n),C(n)}},e))]})}d.defaultProps={view:null}},9933:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(1413),o=t(21951),l=(t(72791),t(80184));function a(e){return(0,l.jsx)(o.Z,(0,r.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,n){return n.label.includes(e)}},e))}},18118:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(29439),o=(t(72791),t(57689)),l=t(11087),a=t(83099),i=t(33441),u=t(43292),c=t(79042),s=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8},{label:"Entry 9",value:9}],f=t(83282),d=t(9933),p=t(23145),v=t(73339),m=t(80184);function Z(){var e,n=(0,o.bx)(),t=(0,r.Z)(n,1)[0],Z=(0,l.lr)(),y=(0,r.Z)(Z,2),x=y[0],b=y[1],g=x.get("id"),C=null;try{C=new DataView(t,10395128+12*g,12)}catch(h){C=null}return(0,m.jsxs)(a.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,m.jsx)(i.Z,{message:"FE8 Ch 19A Reinforcement Editor",type:"info"}),(0,m.jsx)("div",{children:(0,m.jsx)(d.Z,{disabled:null==C,defaultValue:null!==(e=s.find((function(e){return e.value.toString()===g})))&&void 0!==e?e:g,onSelect:function(e){return b({id:e})},options:s})},g),(0,m.jsx)(p.Z,{type:f.g.U8,view:C,name:"UNKNOWN",offset:0}),(0,m.jsx)(p.Z,{type:f.g.U8,view:C,name:"UNKNOWN",offset:2}),(0,m.jsx)(p.Z,{type:f.g.U32,view:C,name:"Pointer?",offset:4}),(0,m.jsx)(v.Z,{type:f.g.U8,view:C,name:"Starts Turn # (Turn # + 1)",offset:8}),(0,m.jsx)(v.Z,{type:f.g.U8,view:C,name:"Ends Turn # (Turn # + 1)",offset:9}),(0,m.jsx)(p.Z,{type:f.g.U8,view:C,name:"UNKNOWN",offset:10}),(0,m.jsx)(u.Z,{children:(0,m.jsx)(c.Z,{})})]})}},49389:function(e,n,t){t.d(n,{Z:function(){return M}});var r=t(87462),o=t(4942),l=t(81694),a=t.n(l),i=t(72791),u=t(71929),c=t(91940),s=function(e){var n,t=(0,i.useContext)(u.E_),l=t.getPrefixCls,s=t.direction,f=e.prefixCls,d=e.className,p=void 0===d?"":d,v=l("input-group",f),m=a()(v,(n={},(0,o.Z)(n,"".concat(v,"-lg"),"large"===e.size),(0,o.Z)(n,"".concat(v,"-sm"),"small"===e.size),(0,o.Z)(n,"".concat(v,"-compact"),e.compact),(0,o.Z)(n,"".concat(v,"-rtl"),"rtl"===s),n),p),Z=(0,i.useContext)(c.aM),y=(0,i.useMemo)((function(){return(0,r.Z)((0,r.Z)({},Z),{isFormItemInput:!1})}),[Z]);return i.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.aM.Provider,{value:y},e.children))},f=t(45394),d=t(29439),p=t(1413),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},m=t(54291),Z=function(e,n){return i.createElement(m.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:n,icon:v}))};Z.displayName="EyeInvisibleOutlined";var y=i.forwardRef(Z),x=t(24215),b=t(41818),g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},C={click:"onClick",hover:"onMouseOver"},h=i.forwardRef((function(e,n){var t=(0,i.useState)(!1),l=(0,d.Z)(t,2),c=l[0],s=l[1],p=function(){e.disabled||s(!c)},v=function(t){var l=t.getPrefixCls,u=e.className,s=e.prefixCls,d=e.inputPrefixCls,v=e.size,m=e.visibilityToggle,Z=g(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),y=l("input",d),x=l("input-password",s),h=m&&function(n){var t,r=e.action,l=e.iconRender,a=C[r]||"",u=(void 0===l?function(){return null}:l)(c),s=(t={},(0,o.Z)(t,a,p),(0,o.Z)(t,"className","".concat(n,"-icon")),(0,o.Z)(t,"key","passwordIcon"),(0,o.Z)(t,"onMouseDown",(function(e){e.preventDefault()})),(0,o.Z)(t,"onMouseUp",(function(e){e.preventDefault()})),t);return i.cloneElement(i.isValidElement(u)?u:i.createElement("span",null,u),s)}(x),E=a()(x,u,(0,o.Z)({},"".concat(x,"-").concat(v),!!v)),w=(0,r.Z)((0,r.Z)({},(0,b.Z)(Z,["suffix","iconRender"])),{type:c?"text":"password",className:E,prefixCls:y,suffix:h});return v&&(w.size=v),i.createElement(f.ZP,(0,r.Z)({ref:n},w))};return i.createElement(u.C,null,v)}));h.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?i.createElement(x.Z,null):i.createElement(y,null)}};var E=h,w=t(11730),j=t(88834),P=t(23707),O=t(1815),N=t(61113),S=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};var T=i.forwardRef((function(e,n){var t,l,c=e.prefixCls,s=e.inputPrefixCls,d=e.className,p=e.size,v=e.suffix,m=e.enterButton,Z=void 0!==m&&m,y=e.addonAfter,x=e.loading,b=e.disabled,g=e.onSearch,C=e.onChange,h=e.onCompositionStart,E=e.onCompositionEnd,T=S(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),z=i.useContext(u.E_),k=z.getPrefixCls,M=z.direction,U=i.useContext(O.Z),L=i.useRef(!1),R=p||U,A=i.useRef(null),B=function(e){var n;document.activeElement===(null===(n=A.current)||void 0===n?void 0:n.input)&&e.preventDefault()},I=function(e){var n,t;g&&g(null===(t=null===(n=A.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},D=k("input-search",c),F=k("input",s),W="boolean"===typeof Z?i.createElement(w.Z,null):null,_="".concat(D,"-button"),q=Z||{},Q=q.type&&!0===q.type.__ANT_BUTTON;l=Q||"button"===q.type?(0,N.Tm)(q,(0,r.Z)({onMouseDown:B,onClick:function(e){var n,t;null===(t=null===(n=null===q||void 0===q?void 0:q.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),I(e)},key:"enterButton"},Q?{className:_,size:R}:{})):i.createElement(P.Z,{className:_,type:Z?"primary":void 0,size:R,disabled:b,key:"enterButton",onMouseDown:B,onClick:I,loading:x,icon:W},Z),y&&(l=[l,(0,N.Tm)(y,{key:"addonAfter"})]);var K=a()(D,(t={},(0,o.Z)(t,"".concat(D,"-rtl"),"rtl"===M),(0,o.Z)(t,"".concat(D,"-").concat(R),!!R),(0,o.Z)(t,"".concat(D,"-with-button"),!!Z),t),d);return i.createElement(f.ZP,(0,r.Z)({ref:(0,j.sQ)(A,n),onPressEnter:function(e){L.current||I(e)}},T,{size:R,onCompositionStart:function(e){L.current=!0,null===h||void 0===h||h(e)},onCompositionEnd:function(e){L.current=!1,null===E||void 0===E||E(e)},prefixCls:F,addonAfter:l,suffix:v,onChange:function(e){e&&e.target&&"click"===e.type&&g&&g(e.target.value,e),C&&C(e)},className:K,disabled:b}))})),z=t(66920),k=f.ZP;k.Group=s,k.Search=T,k.TextArea=z.Z,k.Password=E;var M=k}}]);
//# sourceMappingURL=18118.b494bd6b.chunk.js.map