"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[52191],{73339:function(e,n,t){t.d(n,{Z:function(){return d}});var l=t(1413),r=t(29439),a=t(97788),o=t(83099),i=t(13344),u=t(72791),c=t(83282),s=t(80184),f=a.Z.Text;function d(e){var n=e.view,t=e.name,a=e.offset,d=e.type,v=null==n?0:(0,c.ij)(n,a,d),p=(0,u.useState)(v),y=(0,r.Z)(p,2),m=y[0],Z=y[1];return m!==v&&Z(v),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(f,{disabled:null==n,children:"".concat(t,":").concat(null==n?"":" ".concat(m," \u2192"))}),(0,s.jsx)(i.Z,(0,l.Z)({disabled:null==n,min:c.Cu[d][0],max:c.Cu[d][1],onPressEnter:function(e){var t=parseInt(e.target.value,10);(0,c.cW)(n,a,d,t),Z(t)}},e))]})}d.defaultProps={view:null}},23145:function(e,n,t){t.d(n,{Z:function(){return d}});var l=t(1413),r=t(29439),a=t(97788),o=t(83099),i=t(49389),u=t(72791),c=t(83282),s=t(80184),f=a.Z.Text;function d(e){var n=(0,u.useState)(""),t=(0,r.Z)(n,2),a=t[0],d=t[1],v=e.view,p=e.name,y=e.offset,m=e.type,Z=null==v?0:(0,c.ij)(v,y,m),b=(0,u.useState)(Z),x=(0,r.Z)(b,2),E=x[0],g=x[1];return E!==Z&&g(Z),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(f,{disabled:null==v,children:"".concat(p,":").concat(null==v?"":" 0x".concat(E.toString(16)," \u2192"))}),(0,s.jsx)(i.Z,(0,l.Z)({disabled:null==v,allowClear:!0,maxLength:2*c.Tz[m],prefix:"0x",value:a,onChange:function(e){var n=e.currentTarget.value;(/^[0-9a-f]+$/.test(n)||""===n)&&d(n)},onPressEnter:function(e){var n=parseInt(e.target.value,16);(0,c.cW)(v,y,m,n),g(n)}},e))]})}d.defaultProps={view:null}},9933:function(e,n,t){t.d(n,{Z:function(){return o}});var l=t(1413),r=t(21951),a=(t(72791),t(80184));function o(e){return(0,a.jsx)(r.Z,(0,l.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,n){return n.label.includes(e)}},e))}},52191:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var l=t(29439),r=(t(72791),t(57689)),a=t(11087),o=t(83099),i=t(33441),u=t(43292),c=t(79042),s=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8},{label:"Entry 9",value:9},{label:"Entry 10",value:10},{label:"Entry 11",value:11},{label:"Entry 12",value:12},{label:"Entry 13",value:13},{label:"Entry 14",value:14},{label:"Entry 15",value:15},{label:"Entry 16",value:16},{label:"Entry 17",value:17},{label:"Entry 18",value:18},{label:"Entry 19",value:19}],f=t(83282),d=t(9933),v=t(23145),p=t(73339),y=t(80184);function m(){var e,n=(0,r.bx)(),t=(0,l.Z)(n,1)[0],m=(0,a.lr)(),Z=(0,l.Z)(m,2),b=Z[0],x=Z[1],E=b.get("id"),g=null;try{g=new DataView(t,10405004+12*E,12)}catch(C){g=null}return(0,y.jsxs)(o.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,y.jsx)(i.Z,{message:"FE8 Unknown20 Reinforcement Editor",type:"info"}),(0,y.jsx)("div",{children:(0,y.jsx)(d.Z,{disabled:null==g,defaultValue:null!==(e=s.find((function(e){return e.value.toString()===E})))&&void 0!==e?e:E,onSelect:function(e){return x({id:e})},options:s})},E),(0,y.jsx)(v.Z,{type:f.g.U8,view:g,name:"UNKNOWN",offset:0}),(0,y.jsx)(v.Z,{type:f.g.U8,view:g,name:"UNKNOWN",offset:2}),(0,y.jsx)(v.Z,{type:f.g.U32,view:g,name:"Pointer?",offset:4}),(0,y.jsx)(p.Z,{type:f.g.U8,view:g,name:"Starts Turn # (Turn # + 1)",offset:8}),(0,y.jsx)(p.Z,{type:f.g.U8,view:g,name:"Ends Turn # (Turn # + 1)",offset:9}),(0,y.jsx)(v.Z,{type:f.g.U8,view:g,name:"UNKNOWN",offset:10}),(0,y.jsx)(u.Z,{children:(0,y.jsx)(c.Z,{})})]})}},49389:function(e,n,t){t.d(n,{Z:function(){return M}});var l=t(87462),r=t(4942),a=t(81694),o=t.n(a),i=t(72791),u=t(71929),c=t(91940),s=function(e){var n,t=(0,i.useContext)(u.E_),a=t.getPrefixCls,s=t.direction,f=e.prefixCls,d=e.className,v=void 0===d?"":d,p=a("input-group",f),y=o()(p,(n={},(0,r.Z)(n,"".concat(p,"-lg"),"large"===e.size),(0,r.Z)(n,"".concat(p,"-sm"),"small"===e.size),(0,r.Z)(n,"".concat(p,"-compact"),e.compact),(0,r.Z)(n,"".concat(p,"-rtl"),"rtl"===s),n),v),m=(0,i.useContext)(c.aM),Z=(0,i.useMemo)((function(){return(0,l.Z)((0,l.Z)({},m),{isFormItemInput:!1})}),[m]);return i.createElement("span",{className:y,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.aM.Provider,{value:Z},e.children))},f=t(45394),d=t(29439),v=t(1413),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},y=t(54291),m=function(e,n){return i.createElement(y.Z,(0,v.Z)((0,v.Z)({},e),{},{ref:n,icon:p}))};m.displayName="EyeInvisibleOutlined";var Z=i.forwardRef(m),b=t(24215),x=t(41818),E=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)n.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(t[l[r]]=e[l[r]])}return t},g={click:"onClick",hover:"onMouseOver"},C=i.forwardRef((function(e,n){var t=(0,i.useState)(!1),a=(0,d.Z)(t,2),c=a[0],s=a[1],v=function(){e.disabled||s(!c)},p=function(t){var a=t.getPrefixCls,u=e.className,s=e.prefixCls,d=e.inputPrefixCls,p=e.size,y=e.visibilityToggle,m=E(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),Z=a("input",d),b=a("input-password",s),C=y&&function(n){var t,l=e.action,a=e.iconRender,o=g[l]||"",u=(void 0===a?function(){return null}:a)(c),s=(t={},(0,r.Z)(t,o,v),(0,r.Z)(t,"className","".concat(n,"-icon")),(0,r.Z)(t,"key","passwordIcon"),(0,r.Z)(t,"onMouseDown",(function(e){e.preventDefault()})),(0,r.Z)(t,"onMouseUp",(function(e){e.preventDefault()})),t);return i.cloneElement(i.isValidElement(u)?u:i.createElement("span",null,u),s)}(b),h=o()(b,u,(0,r.Z)({},"".concat(b,"-").concat(p),!!p)),w=(0,l.Z)((0,l.Z)({},(0,x.Z)(m,["suffix","iconRender"])),{type:c?"text":"password",className:h,prefixCls:Z,suffix:C});return p&&(w.size=p),i.createElement(f.ZP,(0,l.Z)({ref:n},w))};return i.createElement(u.C,null,p)}));C.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?i.createElement(b.Z,null):i.createElement(Z,null)}};var h=C,w=t(11730),j=t(88834),P=t(23707),O=t(1815),N=t(61113),S=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)n.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(t[l[r]]=e[l[r]])}return t};var T=i.forwardRef((function(e,n){var t,a,c=e.prefixCls,s=e.inputPrefixCls,d=e.className,v=e.size,p=e.suffix,y=e.enterButton,m=void 0!==y&&y,Z=e.addonAfter,b=e.loading,x=e.disabled,E=e.onSearch,g=e.onChange,C=e.onCompositionStart,h=e.onCompositionEnd,T=S(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),k=i.useContext(u.E_),z=k.getPrefixCls,M=k.direction,U=i.useContext(O.Z),L=i.useRef(!1),R=v||U,B=i.useRef(null),I=function(e){var n;document.activeElement===(null===(n=B.current)||void 0===n?void 0:n.input)&&e.preventDefault()},A=function(e){var n,t;E&&E(null===(t=null===(n=B.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},D=z("input-search",c),F=z("input",s),W="boolean"===typeof m?i.createElement(w.Z,null):null,_="".concat(D,"-button"),q=m||{},Q=q.type&&!0===q.type.__ANT_BUTTON;a=Q||"button"===q.type?(0,N.Tm)(q,(0,l.Z)({onMouseDown:I,onClick:function(e){var n,t;null===(t=null===(n=null===q||void 0===q?void 0:q.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),A(e)},key:"enterButton"},Q?{className:_,size:R}:{})):i.createElement(P.Z,{className:_,type:m?"primary":void 0,size:R,disabled:x,key:"enterButton",onMouseDown:I,onClick:A,loading:b,icon:W},m),Z&&(a=[a,(0,N.Tm)(Z,{key:"addonAfter"})]);var K=o()(D,(t={},(0,r.Z)(t,"".concat(D,"-rtl"),"rtl"===M),(0,r.Z)(t,"".concat(D,"-").concat(R),!!R),(0,r.Z)(t,"".concat(D,"-with-button"),!!m),t),d);return i.createElement(f.ZP,(0,l.Z)({ref:(0,j.sQ)(B,n),onPressEnter:function(e){L.current||A(e)}},T,{size:R,onCompositionStart:function(e){L.current=!0,null===C||void 0===C||C(e)},onCompositionEnd:function(e){L.current=!1,null===h||void 0===h||h(e)},prefixCls:F,addonAfter:a,suffix:p,onChange:function(e){e&&e.target&&"click"===e.type&&E&&E(e.target.value,e),g&&g(e)},className:K,disabled:x}))})),k=t(66920),z=f.ZP;z.Group=s,z.Search=T,z.TextArea=k.Z,z.Password=h;var M=z}}]);
//# sourceMappingURL=52191.7e31206e.chunk.js.map