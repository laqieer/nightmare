"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[5130],{53551:(e,t,n)=>{n.d(t,{A:()=>p});var l=n(89379),a=n(53986),o=n(17313),r=n(64435),i=n(41976),s=n(65043),u=n(35475),c=n(64004),f=n(70579);const d=["isHex","reference","view","name","offset","type","options"],{Text:v}=o.A;function p(e){const{isHex:t,reference:n,view:o,name:p,offset:m,type:b,options:A}=e,x=(0,a.A)(e,d),C=null==o?0:(0,c.LF)(o,m,b),[y,h]=(0,s.useState)(C);y!==C&&h(C);const g=A.find((e=>e.value===y)),w=t?"0x".concat(y.toString(16)):y,O=void 0===g?w:g.label;return(0,f.jsxs)(r.A,{children:[(0,f.jsx)(v,{disabled:null==o,children:"".concat(p,":").concat(null==o?"":" ".concat(O," \u2192"))}),(0,f.jsx)(i.A,(0,l.A)({disabled:null==o,showSearch:!0,options:A,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,t)=>t.label.includes(e),onSelect:e=>{(0,c.M9)(o,m,b,e),h(e)}},x)),""===n||null==o?"":(0,f.jsx)(u.N_,{to:{pathname:"../".concat(n,"?id=").concat(y),state:o.buffer},children:"\u27a4"})]})}p.defaultProps={view:null,isHex:!1,reference:""}},90514:(e,t,n)=>{n.d(t,{A:()=>f});var l=n(89379),a=n(17313),o=n(64435),r=n(33307),i=n(65043),s=n(64004),u=n(70579);const{Text:c}=a.A;function f(e){const[t,n]=(0,i.useState)(""),{view:a,name:f,offset:d,type:v}=e,p=null==a?0:(0,s.LF)(a,d,v),[m,b]=(0,i.useState)(p);return m!==p&&b(p),(0,u.jsxs)(o.A,{children:[(0,u.jsx)(c,{disabled:null==a,children:"".concat(f,":").concat(null==a?"":" 0x".concat(m.toString(16)," \u2192"))}),(0,u.jsx)(r.A,(0,l.A)({disabled:null==a,allowClear:!0,maxLength:2*s.X1[v],prefix:"0x",value:t,onChange:e=>{const t=e.currentTarget.value;(/^[0-9a-f]+$/.test(t)||""===t)&&n(t)},onPressEnter:e=>{const t=parseInt(e.target.value,16);(0,s.M9)(a,d,v,t),b(t)}},e))]})}f.defaultProps={view:null}},34871:(e,t,n)=>{n.d(t,{A:()=>r});var l=n(89379),a=n(41976),o=(n(65043),n(70579));function r(e){return(0,o.jsx)(a.A,(0,l.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,t)=>t.label.includes(e)},e))}},5130:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(65043);var l=n(73216),a=n(35475),o=n(64435),r=n(92135),i=n(33275),s=n(46974);const u=[{label:"Entry 0",value:0}],c=[{label:"Default Hero Crest",value:147422941},{label:"Default Knight Crest",value:147422947},{label:"Default Orion Bolt",value:147422952},{label:"Default Elysian Whip",value:147422957},{label:"Default Guiding Ring",value:147422961},{label:"Default Master Seal",value:147422973},{label:"Default Ocean Seal",value:147423012},{label:"Default Fallen Contract",value:147423017},{label:"Hector & Lyn",value:147422998},{label:"Eliwood & Lyn",value:147423009},{label:"Dancer & Bard",value:147423014},{label:"Eliwood",value:147423019},{label:"Hector",value:147423023},{label:"Lyn",value:147423027},{label:"Archsage",value:147423031},{label:"Custom",value:150993408},{label:"Custom",value:150993440},{label:"Custom",value:150993472},{label:"Custom",value:150993504},{label:"Custom",value:150993536},{label:"Custom",value:150993568},{label:"Custom",value:150993600},{label:"Custom",value:150993632},{label:"Custom",value:150993664},{label:"Custom",value:150993696},{label:"Custom",value:150993728},{label:"Custom",value:150993760},{label:"Custom",value:150993792},{label:"Custom",value:150993824},{label:"Custom",value:150993856},{label:"Custom",value:150993888}];var f=n(64004),d=n(34871),v=n(90514),p=n(53551),m=n(70579);function b(){var e;const[t]=(0,l.KC)(),[n,b]=(0,a.ok)(),A=n.get("id");let x=null;try{x=new DataView(t,161137+8*A,8)}catch(C){x=null}return(0,m.jsxs)(o.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,m.jsx)(r.A,{message:"FE7 Ocean Seal Promotion Editor",type:"info"}),(0,m.jsx)("div",{children:(0,m.jsx)(d.A,{disabled:null==x,defaultValue:null!==(e=u.find((e=>e.value.toString()===A)))&&void 0!==e?e:A,onSelect:e=>b({id:e}),options:u})},A),(0,m.jsx)(v.A,{type:f.pe.U8,view:x,name:"***UNKNOWN***",offset:0}),(0,m.jsx)(v.A,{type:f.pe.U8,view:x,name:"***UNKNOWN***",offset:1}),(0,m.jsx)(v.A,{type:f.pe.U8,view:x,name:"***UNKNOWN***",offset:2}),(0,m.jsx)(p.A,{isHex:!0,type:f.pe.U32,options:c,view:x,name:"Promotion Pointer",offset:3}),(0,m.jsx)(v.A,{type:f.pe.U8,view:x,name:"0x70 is default",offset:7}),(0,m.jsx)(i.A,{children:(0,m.jsx)(s.A,{})})]})}},33307:(e,t,n)=>{n.d(t,{A:()=>z});var l=n(58168),a=n(64467),o=n(64600),r=n.n(o),i=n(65043),s=n(35296),u=n(16436);const c=function(e){var t,n=(0,i.useContext)(s.QO),o=n.getPrefixCls,c=n.direction,f=e.prefixCls,d=e.className,v=void 0===d?"":d,p=o("input-group",f),m=r()(p,(t={},(0,a.A)(t,"".concat(p,"-lg"),"large"===e.size),(0,a.A)(t,"".concat(p,"-sm"),"small"===e.size),(0,a.A)(t,"".concat(p,"-compact"),e.compact),(0,a.A)(t,"".concat(p,"-rtl"),"rtl"===c),t),v),b=(0,i.useContext)(u.$W),A=(0,i.useMemo)((function(){return(0,l.A)((0,l.A)({},b),{isFormItemInput:!1})}),[b]);return i.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(u.$W.Provider,{value:A},e.children))};var f=n(28124),d=n(5544),v=n(89379);const p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var m=n(22172),b=function(e,t){return i.createElement(m.A,(0,v.A)((0,v.A)({},e),{},{ref:t,icon:p}))};b.displayName="EyeInvisibleOutlined";const A=i.forwardRef(b);var x=n(76191),C=n(18574),y=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n},h=function(e){return e?i.createElement(x.A,null):i.createElement(A,null)},g={click:"onClick",hover:"onMouseOver"};const w=i.forwardRef((function(e,t){var n=(0,i.useState)(!1),o=(0,d.A)(n,2),u=o[0],c=o[1],v=function(){e.disabled||c((function(e){return!e}))},p=function(n){var o=n.getPrefixCls,s=e.className,c=e.prefixCls,d=e.inputPrefixCls,p=e.size,m=e.visibilityToggle,b=void 0===m||m,A=y(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),x=o("input",d),w=o("input-password",c),O=b&&function(t){var n,l=e.action,o=void 0===l?"click":l,r=e.iconRender,s=g[o]||"",c=(void 0===r?h:r)(u),f=(n={},(0,a.A)(n,s,v),(0,a.A)(n,"className","".concat(t,"-icon")),(0,a.A)(n,"key","passwordIcon"),(0,a.A)(n,"onMouseDown",(function(e){e.preventDefault()})),(0,a.A)(n,"onMouseUp",(function(e){e.preventDefault()})),n);return i.cloneElement(i.isValidElement(c)?c:i.createElement("span",null,c),f)}(w),E=r()(w,s,(0,a.A)({},"".concat(w,"-").concat(p),!!p)),S=(0,l.A)((0,l.A)({},(0,C.A)(A,["suffix","iconRender"])),{type:u?"text":"password",className:E,prefixCls:x,suffix:O});return p&&(S.size=p),i.createElement(f.Ay,(0,l.A)({ref:t},S))};return i.createElement(s.TG,null,p)}));var O=n(62058),E=n(13758),S=n(11774),j=n(87063),N=n(12701),P=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n};const k=i.forwardRef((function(e,t){var n,o,u=e.prefixCls,c=e.inputPrefixCls,d=e.className,v=e.size,p=e.suffix,m=e.enterButton,b=void 0!==m&&m,A=e.addonAfter,x=e.loading,C=e.disabled,y=e.onSearch,h=e.onChange,g=e.onCompositionStart,w=e.onCompositionEnd,k=P(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),D=i.useContext(s.QO),M=D.getPrefixCls,z=D.direction,L=i.useContext(j.A),B=i.useRef(!1),T=v||L,U=i.useRef(null),F=function(e){var t;document.activeElement===(null===(t=U.current)||void 0===t?void 0:t.input)&&e.preventDefault()},R=function(e){var t,n;y&&y(null===(n=null===(t=U.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.value,e)},H=M("input-search",u),I=M("input",c),K="boolean"===typeof b?i.createElement(O.A,null):null,W="".concat(H,"-button"),Q=b||{},q=Q.type&&!0===Q.type.__ANT_BUTTON;o=q||"button"===Q.type?(0,N.Ob)(Q,(0,l.A)({onMouseDown:F,onClick:function(e){var t,n;null===(n=null===(t=null===Q||void 0===Q?void 0:Q.props)||void 0===t?void 0:t.onClick)||void 0===n||n.call(t,e),R(e)},key:"enterButton"},q?{className:W,size:T}:{})):i.createElement(S.A,{className:W,type:b?"primary":void 0,size:T,disabled:C,key:"enterButton",onMouseDown:F,onClick:R,loading:x,icon:K},b),A&&(o=[o,(0,N.Ob)(A,{key:"addonAfter"})]);var _=r()(H,(n={},(0,a.A)(n,"".concat(H,"-rtl"),"rtl"===z),(0,a.A)(n,"".concat(H,"-").concat(T),!!T),(0,a.A)(n,"".concat(H,"-with-button"),!!b),n),d);return i.createElement(f.Ay,(0,l.A)({ref:(0,E.K4)(U,t),onPressEnter:function(e){B.current||R(e)}},k,{size:T,onCompositionStart:function(e){B.current=!0,null===g||void 0===g||g(e)},onCompositionEnd:function(e){B.current=!1,null===w||void 0===w||w(e)},prefixCls:I,addonAfter:o,suffix:p,onChange:function(e){e&&e.target&&"click"===e.type&&y&&y(e.target.value,e),h&&h(e)},className:_,disabled:C}))}));var D=n(42471),M=f.Ay;M.Group=c,M.Search=k,M.TextArea=D.A,M.Password=w;const z=M}}]);
//# sourceMappingURL=5130.bf881934.chunk.js.map