"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[24453],{23145:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(1413),a=n(29439),r=n(97788),i=n(83099),l=n(49389),s=n(72791),c=n(83282),u=n(80184),f=r.Z.Text;function d(e){var t=(0,s.useState)(""),n=(0,a.Z)(t,2),r=n[0],d=n[1],p=e.view,v=e.name,m=e.offset,y=e.type,Z=null==p?0:(0,c.ij)(p,m,y),x=(0,s.useState)(Z),g=(0,a.Z)(x,2),w=g[0],C=g[1];return w!==Z&&C(Z),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(f,{disabled:null==p,children:"".concat(v,":").concat(null==p?"":" 0x".concat(w.toString(16)," \u2192"))}),(0,u.jsx)(l.Z,(0,o.Z)({disabled:null==p,allowClear:!0,maxLength:2*c.Tz[y],prefix:"0x",value:r,onChange:function(e){var t=e.currentTarget.value;(/^[0-9a-f]+$/.test(t)||""===t)&&d(t)},onPressEnter:function(e){var t=parseInt(e.target.value,16);(0,c.cW)(p,m,y,t),C(t)}},e))]})}d.defaultProps={view:null}},9933:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(1413),a=n(21951),r=(n(72791),n(80184));function i(e){return(0,r.jsx)(a.Z,(0,o.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,t){return t.label.includes(e)}},e))}},24453:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n(29439),a=(n(72791),n(57689)),r=n(11087),i=n(83099),l=n(33441),s=n(43292),c=n(79042),u=[{label:"Entry 0",value:0}],f=n(83282),d=n(9933),p=n(23145),v=n(80184);function m(){var e,t=(0,a.bx)(),n=(0,o.Z)(t,1)[0],m=(0,r.lr)(),y=(0,o.Z)(m,2),Z=y[0],x=y[1],g=Z.get("id"),w=null;try{w=new DataView(n,13244592+64*g,64)}catch(C){w=null}return(0,v.jsxs)(i.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,v.jsx)(l.Z,{message:"Chapter 10 Table Editor by Fire Blazer/Keriku- Credit to Icy Toast",type:"info"}),(0,v.jsx)("div",{children:(0,v.jsx)(d.Z,{disabled:null==w,defaultValue:null!==(e=u.find((function(e){return e.value.toString()===g})))&&void 0!==e?e:g,onSelect:function(e){return x({id:e})},options:u})},g),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Turn Count Events",offset:0}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Character-Related Events",offset:4}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Location-Based Events",offset:8}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Other (Unknown) Events",offset:12}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Ballista Data (Eliwood)",offset:16}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Ballista Data (Hector)",offset:20}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Enemy Unit Data (Eliwood Normal)",offset:24}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Enemy Unit Data (Eliwood Hard)",offset:28}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Enemy Unit Data (Hector Normal)",offset:32}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Enemy Unit Data (Hector Hard)",offset:36}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Player Unit Data (Eliwood Normal)",offset:40}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Player Unit Data (Eliwood Hard)",offset:44}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Player Unit Data (Hector Normal)",offset:48}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Player Unit Data (Hector Hard)",offset:52}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Chapter Beginning Scene",offset:56}),(0,v.jsx)(p.Z,{type:f.g.U32,view:w,name:"Chapter End Scene",offset:60}),(0,v.jsx)(s.Z,{children:(0,v.jsx)(c.Z,{})})]})}},49389:function(e,t,n){n.d(t,{Z:function(){return D}});var o=n(87462),a=n(4942),r=n(81694),i=n.n(r),l=n(72791),s=n(71929),c=n(91940),u=function(e){var t,n=(0,l.useContext)(s.E_),r=n.getPrefixCls,u=n.direction,f=e.prefixCls,d=e.className,p=void 0===d?"":d,v=r("input-group",f),m=i()(v,(t={},(0,a.Z)(t,"".concat(v,"-lg"),"large"===e.size),(0,a.Z)(t,"".concat(v,"-sm"),"small"===e.size),(0,a.Z)(t,"".concat(v,"-compact"),e.compact),(0,a.Z)(t,"".concat(v,"-rtl"),"rtl"===u),t),p),y=(0,l.useContext)(c.aM),Z=(0,l.useMemo)((function(){return(0,o.Z)((0,o.Z)({},y),{isFormItemInput:!1})}),[y]);return l.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},l.createElement(c.aM.Provider,{value:Z},e.children))},f=n(45394),d=n(29439),p=n(1413),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},m=n(54291),y=function(e,t){return l.createElement(m.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:t,icon:v}))};y.displayName="EyeInvisibleOutlined";var Z=l.forwardRef(y),x=n(24215),g=n(41818),w=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},C=function(e){return e?l.createElement(x.Z,null):l.createElement(Z,null)},h={click:"onClick",hover:"onMouseOver"};var E=l.forwardRef((function(e,t){var n=(0,l.useState)(!1),r=(0,d.Z)(n,2),c=r[0],u=r[1],p=function(){e.disabled||u((function(e){return!e}))},v=function(n){var r=n.getPrefixCls,s=e.className,u=e.prefixCls,d=e.inputPrefixCls,v=e.size,m=e.visibilityToggle,y=void 0===m||m,Z=w(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),x=r("input",d),E=r("input-password",u),b=y&&function(t){var n,o=e.action,r=void 0===o?"click":o,i=e.iconRender,s=h[r]||"",u=(void 0===i?C:i)(c),f=(n={},(0,a.Z)(n,s,p),(0,a.Z)(n,"className","".concat(t,"-icon")),(0,a.Z)(n,"key","passwordIcon"),(0,a.Z)(n,"onMouseDown",(function(e){e.preventDefault()})),(0,a.Z)(n,"onMouseUp",(function(e){e.preventDefault()})),n);return l.cloneElement(l.isValidElement(u)?u:l.createElement("span",null,u),f)}(E),j=i()(E,s,(0,a.Z)({},"".concat(E,"-").concat(v),!!v)),U=(0,o.Z)((0,o.Z)({},(0,g.Z)(Z,["suffix","iconRender"])),{type:c?"text":"password",className:j,prefixCls:x,suffix:b});return v&&(U.size=v),l.createElement(f.ZP,(0,o.Z)({ref:t},U))};return l.createElement(s.C,null,v)})),b=n(11730),j=n(88834),U=n(30435),P=n(1815),O=n(61113),S=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};var N=l.forwardRef((function(e,t){var n,r,c=e.prefixCls,u=e.inputPrefixCls,d=e.className,p=e.size,v=e.suffix,m=e.enterButton,y=void 0!==m&&m,Z=e.addonAfter,x=e.loading,g=e.disabled,w=e.onSearch,C=e.onChange,h=e.onCompositionStart,E=e.onCompositionEnd,N=S(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),k=l.useContext(s.E_),z=k.getPrefixCls,D=k.direction,M=l.useContext(P.Z),T=l.useRef(!1),B=p||M,L=l.useRef(null),H=function(e){var t;document.activeElement===(null===(t=L.current)||void 0===t?void 0:t.input)&&e.preventDefault()},I=function(e){var t,n;w&&w(null===(n=null===(t=L.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.value,e)},R=z("input-search",c),A=z("input",u),F="boolean"===typeof y?l.createElement(b.Z,null):null,_="".concat(R,"-button"),q=y||{},Q=q.type&&!0===q.type.__ANT_BUTTON;r=Q||"button"===q.type?(0,O.Tm)(q,(0,o.Z)({onMouseDown:H,onClick:function(e){var t,n;null===(n=null===(t=null===q||void 0===q?void 0:q.props)||void 0===t?void 0:t.onClick)||void 0===n||n.call(t,e),I(e)},key:"enterButton"},Q?{className:_,size:B}:{})):l.createElement(U.Z,{className:_,type:y?"primary":void 0,size:B,disabled:g,key:"enterButton",onMouseDown:H,onClick:I,loading:x,icon:F},y),Z&&(r=[r,(0,O.Tm)(Z,{key:"addonAfter"})]);var V=i()(R,(n={},(0,a.Z)(n,"".concat(R,"-rtl"),"rtl"===D),(0,a.Z)(n,"".concat(R,"-").concat(B),!!B),(0,a.Z)(n,"".concat(R,"-with-button"),!!y),n),d);return l.createElement(f.ZP,(0,o.Z)({ref:(0,j.sQ)(L,t),onPressEnter:function(e){T.current||I(e)}},N,{size:B,onCompositionStart:function(e){T.current=!0,null===h||void 0===h||h(e)},onCompositionEnd:function(e){T.current=!1,null===E||void 0===E||E(e)},prefixCls:A,addonAfter:r,suffix:v,onChange:function(e){e&&e.target&&"click"===e.type&&w&&w(e.target.value,e),C&&C(e)},className:V,disabled:g}))})),k=n(66920),z=f.ZP;z.Group=u,z.Search=N,z.TextArea=k.Z,z.Password=E;var D=z}}]);
//# sourceMappingURL=24453.424e28ab.chunk.js.map