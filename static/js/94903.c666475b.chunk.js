"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[94903],{86357:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(89379),i=t(17313),r=t(64435),a=t(3428),l=t(65043),s=t(64004),c=t(70579);const{Text:u}=i.A;function f(e){const{view:n,name:t,offset:i,type:f}=e,d=null==n?0:(0,s.LF)(n,i,f),[p,v]=(0,l.useState)(d);return p!==d&&v(d),(0,c.jsxs)(r.A,{children:[(0,c.jsx)(u,{disabled:null==n,children:"".concat(t,":").concat(null==n?"":" ".concat(p," \u2192"))}),(0,c.jsx)(a.A,(0,o.A)({disabled:null==n,min:s.Wb[f][0],max:s.Wb[f][1],onPressEnter:e=>{const t=parseInt(e.target.value,10);(0,s.M9)(n,i,f,t),v(t)}},e))]})}f.defaultProps={view:null}},90514:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(89379),i=t(17313),r=t(64435),a=t(33307),l=t(65043),s=t(64004),c=t(70579);const{Text:u}=i.A;function f(e){const[n,t]=(0,l.useState)(""),{view:i,name:f,offset:d,type:p}=e,v=null==i?0:(0,s.LF)(i,d,p),[m,A]=(0,l.useState)(v);return m!==v&&A(v),(0,c.jsxs)(r.A,{children:[(0,c.jsx)(u,{disabled:null==i,children:"".concat(f,":").concat(null==i?"":" 0x".concat(m.toString(16)," \u2192"))}),(0,c.jsx)(a.A,(0,o.A)({disabled:null==i,allowClear:!0,maxLength:2*s.X1[p],prefix:"0x",value:n,onChange:e=>{const n=e.currentTarget.value;(/^[0-9a-f]+$/.test(n)||""===n)&&t(n)},onPressEnter:e=>{const n=parseInt(e.target.value,16);(0,s.M9)(i,d,p,n),A(n)}},e))]})}f.defaultProps={view:null}},34871:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(89379),i=t(41976),r=(t(65043),t(70579));function a(e){return(0,r.jsx)(i.A,(0,o.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,n)=>n.label.includes(e)},e))}},94903:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(65043);var o=t(73216),i=t(35475),r=t(64435),a=t(92135),l=t(33275),s=t(46974);const c=[{label:"Entry 0",value:0}];var u=t(64004),f=t(34871),d=t(90514),p=t(86357),v=t(70579);function m(){var e;const[n]=(0,o.KC)(),[t,m]=(0,i.ok)(),A=t.get("id");let x=null;try{x=new DataView(n,13240832+12*A,12)}catch(y){x=null}return(0,v.jsxs)(r.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,v.jsx)(a.A,{message:"Chapter 2 Seize Editor by Fire Blazer/Keriku",type:"info"}),(0,v.jsx)("div",{children:(0,v.jsx)(f.A,{disabled:null==x,defaultValue:null!==(e=c.find((e=>e.value.toString()===A)))&&void 0!==e?e:A,onSelect:e=>m({id:e}),options:c})},A),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"Beginning of Code (???)",offset:0}),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"Beginning of Code (???)",offset:1}),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"Beginning of Code (???)",offset:2}),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"Beginning of Code (???)",offset:3}),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"Middle Code (???)",offset:4}),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"Middle Code (???)",offset:5}),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"Middle Code (???)",offset:6}),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"Middle Code (???)",offset:7}),(0,v.jsx)(p.A,{type:u.pe.U8,view:x,name:"X Coordinate",offset:8}),(0,v.jsx)(p.A,{type:u.pe.U8,view:x,name:"Y Coordinate",offset:9}),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"Event Code (0x0F Seize)",offset:10}),(0,v.jsx)(d.A,{type:u.pe.U8,view:x,name:"End of String 00",offset:11}),(0,v.jsx)(l.A,{children:(0,v.jsx)(s.A,{})})]})}},33307:(e,n,t)=>{t.d(n,{A:()=>U});var o=t(58168),i=t(64467),r=t(64600),a=t.n(r),l=t(65043),s=t(35296),c=t(16436);const u=function(e){var n,t=(0,l.useContext)(s.QO),r=t.getPrefixCls,u=t.direction,f=e.prefixCls,d=e.className,p=void 0===d?"":d,v=r("input-group",f),m=a()(v,(n={},(0,i.A)(n,"".concat(v,"-lg"),"large"===e.size),(0,i.A)(n,"".concat(v,"-sm"),"small"===e.size),(0,i.A)(n,"".concat(v,"-compact"),e.compact),(0,i.A)(n,"".concat(v,"-rtl"),"rtl"===u),n),p),A=(0,l.useContext)(c.$W),x=(0,l.useMemo)((function(){return(0,o.A)((0,o.A)({},A),{isFormItemInput:!1})}),[A]);return l.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},l.createElement(c.$W.Provider,{value:x},e.children))};var f=t(28124),d=t(5544),p=t(89379);const v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var m=t(22172),A=function(e,n){return l.createElement(m.A,(0,p.A)((0,p.A)({},e),{},{ref:n,icon:v}))};A.displayName="EyeInvisibleOutlined";const x=l.forwardRef(A);var y=t(76191),C=t(18574),g=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},b=function(e){return e?l.createElement(y.A,null):l.createElement(x,null)},w={click:"onClick",hover:"onMouseOver"};const h=l.forwardRef((function(e,n){var t=(0,l.useState)(!1),r=(0,d.A)(t,2),c=r[0],u=r[1],p=function(){e.disabled||u((function(e){return!e}))},v=function(t){var r=t.getPrefixCls,s=e.className,u=e.prefixCls,d=e.inputPrefixCls,v=e.size,m=e.visibilityToggle,A=void 0===m||m,x=g(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),y=r("input",d),h=r("input-password",u),j=A&&function(n){var t,o=e.action,r=void 0===o?"click":o,a=e.iconRender,s=w[r]||"",u=(void 0===a?b:a)(c),f=(t={},(0,i.A)(t,s,p),(0,i.A)(t,"className","".concat(n,"-icon")),(0,i.A)(t,"key","passwordIcon"),(0,i.A)(t,"onMouseDown",(function(e){e.preventDefault()})),(0,i.A)(t,"onMouseUp",(function(e){e.preventDefault()})),t);return l.cloneElement(l.isValidElement(u)?u:l.createElement("span",null,u),f)}(h),E=a()(h,s,(0,i.A)({},"".concat(h,"-").concat(v),!!v)),O=(0,o.A)((0,o.A)({},(0,C.A)(x,["suffix","iconRender"])),{type:c?"text":"password",className:E,prefixCls:y,suffix:j});return v&&(O.size=v),l.createElement(f.Ay,(0,o.A)({ref:n},O))};return l.createElement(s.TG,null,v)}));var j=t(62058),E=t(13758),O=t(11774),S=t(87063),P=t(12701),M=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t};const z=l.forwardRef((function(e,n){var t,r,c=e.prefixCls,u=e.inputPrefixCls,d=e.className,p=e.size,v=e.suffix,m=e.enterButton,A=void 0!==m&&m,x=e.addonAfter,y=e.loading,C=e.disabled,g=e.onSearch,b=e.onChange,w=e.onCompositionStart,h=e.onCompositionEnd,z=M(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),k=l.useContext(s.QO),N=k.getPrefixCls,U=k.direction,B=l.useContext(S.A),L=l.useRef(!1),T=p||B,F=l.useRef(null),I=function(e){var n;document.activeElement===(null===(n=F.current)||void 0===n?void 0:n.input)&&e.preventDefault()},D=function(e){var n,t;g&&g(null===(t=null===(n=F.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},R=N("input-search",c),Q=N("input",u),q="boolean"===typeof A?l.createElement(j.A,null):null,W="".concat(R,"-button"),K=A||{},V=K.type&&!0===K.type.__ANT_BUTTON;r=V||"button"===K.type?(0,P.Ob)(K,(0,o.A)({onMouseDown:I,onClick:function(e){var n,t;null===(t=null===(n=null===K||void 0===K?void 0:K.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),D(e)},key:"enterButton"},V?{className:W,size:T}:{})):l.createElement(O.A,{className:W,type:A?"primary":void 0,size:T,disabled:C,key:"enterButton",onMouseDown:I,onClick:D,loading:y,icon:q},A),x&&(r=[r,(0,P.Ob)(x,{key:"addonAfter"})]);var $=a()(R,(t={},(0,i.A)(t,"".concat(R,"-rtl"),"rtl"===U),(0,i.A)(t,"".concat(R,"-").concat(T),!!T),(0,i.A)(t,"".concat(R,"-with-button"),!!A),t),d);return l.createElement(f.Ay,(0,o.A)({ref:(0,E.K4)(F,n),onPressEnter:function(e){L.current||D(e)}},z,{size:T,onCompositionStart:function(e){L.current=!0,null===w||void 0===w||w(e)},onCompositionEnd:function(e){L.current=!1,null===h||void 0===h||h(e)},prefixCls:Q,addonAfter:r,suffix:v,onChange:function(e){e&&e.target&&"click"===e.type&&g&&g(e.target.value,e),b&&b(e)},className:$,disabled:C}))}));var k=t(42471),N=f.Ay;N.Group=u,N.Search=z,N.TextArea=k.A,N.Password=h;const U=N}}]);
//# sourceMappingURL=94903.c666475b.chunk.js.map