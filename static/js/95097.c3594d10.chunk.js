"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[95097],{90514:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(89379),a=n(17313),r=n(64435),i=n(33307),l=n(65043),s=n(64004),c=n(70579);const{Text:u}=a.A;function f(e){const[t,n]=(0,l.useState)(""),{view:a,name:f,offset:p,type:d}=e,v=null==a?0:(0,s.LF)(a,p,d),[m,y]=(0,l.useState)(v);return m!==v&&y(v),(0,c.jsxs)(r.A,{children:[(0,c.jsx)(u,{disabled:null==a,children:"".concat(f,":").concat(null==a?"":" 0x".concat(m.toString(16)," \u2192"))}),(0,c.jsx)(i.A,(0,o.A)({disabled:null==a,allowClear:!0,maxLength:2*s.X1[d],prefix:"0x",value:t,onChange:e=>{const t=e.currentTarget.value;(/^[0-9a-f]+$/.test(t)||""===t)&&n(t)},onPressEnter:e=>{const t=parseInt(e.target.value,16);(0,s.M9)(a,p,d,t),y(t)}},e))]})}f.defaultProps={view:null}},34871:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(89379),a=n(41976),r=(n(65043),n(70579));function i(e){return(0,r.jsx)(a.A,(0,o.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,t)=>t.label.includes(e)},e))}},95097:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(65043);var o=n(73216),a=n(35475),r=n(64435),i=n(92135),l=n(33275),s=n(46974);const c=[{label:"Entry 0",value:0}];var u=n(64004),f=n(34871),p=n(90514),d=n(70579);function v(){var e;const[t]=(0,o.KC)(),[n,v]=(0,a.ok)(),m=n.get("id");let y=null;try{y=new DataView(t,13264848+64*m,64)}catch(A){y=null}return(0,d.jsxs)(r.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,d.jsx)(i.A,{message:"Final Chapter (2) Table Editor by Fire Blazer/Keriku",type:"info"}),(0,d.jsx)("div",{children:(0,d.jsx)(f.A,{disabled:null==y,defaultValue:null!==(e=c.find((e=>e.value.toString()===m)))&&void 0!==e?e:m,onSelect:e=>v({id:e}),options:c})},m),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Turn Count Events",offset:0}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Character-Related Events",offset:4}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Location-Based Events",offset:8}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Other (Unknown) Events",offset:12}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Ballista Data (Eliwood)",offset:16}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Ballista Data (Hector)",offset:20}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Enemy Unit Data (Eliwood Normal)",offset:24}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Enemy Unit Data (Eliwood Hard)",offset:28}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Enemy Unit Data (Hector Normal)",offset:32}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Enemy Unit Data (Hector Hard)",offset:36}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Player Unit Data (Eliwood Normal)",offset:40}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Player Unit Data (Eliwood Hard)",offset:44}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Player Unit Data (Hector Normal)",offset:48}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Player Unit Data (Hector Hard)",offset:52}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Chapter Beginning Scene",offset:56}),(0,d.jsx)(p.A,{type:u.pe.U32,view:y,name:"Chapter End Scene",offset:60}),(0,d.jsx)(l.A,{children:(0,d.jsx)(s.A,{})})]})}},33307:(e,t,n)=>{n.d(t,{A:()=>z});var o=n(58168),a=n(64467),r=n(64600),i=n.n(r),l=n(65043),s=n(35296),c=n(16436);const u=function(e){var t,n=(0,l.useContext)(s.QO),r=n.getPrefixCls,u=n.direction,f=e.prefixCls,p=e.className,d=void 0===p?"":p,v=r("input-group",f),m=i()(v,(t={},(0,a.A)(t,"".concat(v,"-lg"),"large"===e.size),(0,a.A)(t,"".concat(v,"-sm"),"small"===e.size),(0,a.A)(t,"".concat(v,"-compact"),e.compact),(0,a.A)(t,"".concat(v,"-rtl"),"rtl"===u),t),d),y=(0,l.useContext)(c.$W),A=(0,l.useMemo)((function(){return(0,o.A)((0,o.A)({},y),{isFormItemInput:!1})}),[y]);return l.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},l.createElement(c.$W.Provider,{value:A},e.children))};var f=n(28124),p=n(5544),d=n(89379);const v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var m=n(22172),y=function(e,t){return l.createElement(m.A,(0,d.A)((0,d.A)({},e),{},{ref:t,icon:v}))};y.displayName="EyeInvisibleOutlined";const A=l.forwardRef(y);var x=n(76191),w=n(18574),C=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},h=function(e){return e?l.createElement(x.A,null):l.createElement(A,null)},g={click:"onClick",hover:"onMouseOver"};const b=l.forwardRef((function(e,t){var n=(0,l.useState)(!1),r=(0,p.A)(n,2),c=r[0],u=r[1],d=function(){e.disabled||u((function(e){return!e}))},v=function(n){var r=n.getPrefixCls,s=e.className,u=e.prefixCls,p=e.inputPrefixCls,v=e.size,m=e.visibilityToggle,y=void 0===m||m,A=C(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),x=r("input",p),b=r("input-password",u),E=y&&function(t){var n,o=e.action,r=void 0===o?"click":o,i=e.iconRender,s=g[r]||"",u=(void 0===i?h:i)(c),f=(n={},(0,a.A)(n,s,d),(0,a.A)(n,"className","".concat(t,"-icon")),(0,a.A)(n,"key","passwordIcon"),(0,a.A)(n,"onMouseDown",(function(e){e.preventDefault()})),(0,a.A)(n,"onMouseUp",(function(e){e.preventDefault()})),n);return l.cloneElement(l.isValidElement(u)?u:l.createElement("span",null,u),f)}(b),j=i()(b,s,(0,a.A)({},"".concat(b,"-").concat(v),!!v)),O=(0,o.A)((0,o.A)({},(0,w.A)(A,["suffix","iconRender"])),{type:c?"text":"password",className:j,prefixCls:x,suffix:E});return v&&(O.size=v),l.createElement(f.Ay,(0,o.A)({ref:t},O))};return l.createElement(s.TG,null,v)}));var E=n(62058),j=n(13758),O=n(11774),U=n(87063),P=n(12701),S=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};const k=l.forwardRef((function(e,t){var n,r,c=e.prefixCls,u=e.inputPrefixCls,p=e.className,d=e.size,v=e.suffix,m=e.enterButton,y=void 0!==m&&m,A=e.addonAfter,x=e.loading,w=e.disabled,C=e.onSearch,h=e.onChange,g=e.onCompositionStart,b=e.onCompositionEnd,k=S(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),N=l.useContext(s.QO),D=N.getPrefixCls,z=N.direction,M=l.useContext(U.A),B=l.useRef(!1),L=d||M,T=l.useRef(null),H=function(e){var t;document.activeElement===(null===(t=T.current)||void 0===t?void 0:t.input)&&e.preventDefault()},R=function(e){var t,n;C&&C(null===(n=null===(t=T.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.value,e)},F=D("input-search",c),I=D("input",u),Q="boolean"===typeof y?l.createElement(E.A,null):null,q="".concat(F,"-button"),K=y||{},V=K.type&&!0===K.type.__ANT_BUTTON;r=V||"button"===K.type?(0,P.Ob)(K,(0,o.A)({onMouseDown:H,onClick:function(e){var t,n;null===(n=null===(t=null===K||void 0===K?void 0:K.props)||void 0===t?void 0:t.onClick)||void 0===n||n.call(t,e),R(e)},key:"enterButton"},V?{className:q,size:L}:{})):l.createElement(O.A,{className:q,type:y?"primary":void 0,size:L,disabled:w,key:"enterButton",onMouseDown:H,onClick:R,loading:x,icon:Q},y),A&&(r=[r,(0,P.Ob)(A,{key:"addonAfter"})]);var $=i()(F,(n={},(0,a.A)(n,"".concat(F,"-rtl"),"rtl"===z),(0,a.A)(n,"".concat(F,"-").concat(L),!!L),(0,a.A)(n,"".concat(F,"-with-button"),!!y),n),p);return l.createElement(f.Ay,(0,o.A)({ref:(0,j.K4)(T,t),onPressEnter:function(e){B.current||R(e)}},k,{size:L,onCompositionStart:function(e){B.current=!0,null===g||void 0===g||g(e)},onCompositionEnd:function(e){B.current=!1,null===b||void 0===b||b(e)},prefixCls:I,addonAfter:r,suffix:v,onChange:function(e){e&&e.target&&"click"===e.type&&C&&C(e.target.value,e),h&&h(e)},className:$,disabled:w}))}));var N=n(42471),D=f.Ay;D.Group=u,D.Search=k,D.TextArea=N.A,D.Password=b;const z=D}}]);
//# sourceMappingURL=95097.c3594d10.chunk.js.map