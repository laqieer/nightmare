"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[52473],{86357:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(89379),l=t(17313),r=t(64435),a=t(3428),i=t(65043),s=t(64004),c=t(70579);const{Text:u}=l.A;function f(e){const{view:n,name:t,offset:l,type:f}=e,d=null==n?0:(0,s.LF)(n,l,f),[p,v]=(0,i.useState)(d);return p!==d&&v(d),(0,c.jsxs)(r.A,{children:[(0,c.jsx)(u,{disabled:null==n,children:"".concat(t,":").concat(null==n?"":" ".concat(p," \u2192"))}),(0,c.jsx)(a.A,(0,o.A)({disabled:null==n,min:s.Wb[f][0],max:s.Wb[f][1],onPressEnter:e=>{const t=parseInt(e.target.value,10);(0,s.M9)(n,l,f,t),v(t)}},e))]})}f.defaultProps={view:null}},90514:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(89379),l=t(17313),r=t(64435),a=t(33307),i=t(65043),s=t(64004),c=t(70579);const{Text:u}=l.A;function f(e){const[n,t]=(0,i.useState)(""),{view:l,name:f,offset:d,type:p}=e,v=null==l?0:(0,s.LF)(l,d,p),[m,A]=(0,i.useState)(v);return m!==v&&A(v),(0,c.jsxs)(r.A,{children:[(0,c.jsx)(u,{disabled:null==l,children:"".concat(f,":").concat(null==l?"":" 0x".concat(m.toString(16)," \u2192"))}),(0,c.jsx)(a.A,(0,o.A)({disabled:null==l,allowClear:!0,maxLength:2*s.X1[p],prefix:"0x",value:n,onChange:e=>{const n=e.currentTarget.value;(/^[0-9a-f]+$/.test(n)||""===n)&&t(n)},onPressEnter:e=>{const n=parseInt(e.target.value,16);(0,s.M9)(l,d,p,n),A(n)}},e))]})}f.defaultProps={view:null}},34871:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(89379),l=t(41976),r=(t(65043),t(70579));function a(e){return(0,r.jsx)(l.A,(0,o.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,n)=>n.label.includes(e)},e))}},52473:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(65043);var o=t(73216),l=t(35475),r=t(64435),a=t(92135),i=t(33275),s=t(46974);const c=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8}];var u=t(64004),f=t(34871),d=t(90514),p=t(86357),v=t(70579);function m(){var e;const[n]=(0,o.KC)(),[t,m]=(0,l.ok)(),A=t.get("id");let y=null;try{y=new DataView(n,10391604+12*A,12)}catch(x){y=null}return(0,v.jsxs)(r.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,v.jsx)(a.A,{message:"FE8 Ch 9A Reinforcement Editor",type:"info"}),(0,v.jsx)("div",{children:(0,v.jsx)(f.A,{disabled:null==y,defaultValue:null!==(e=c.find((e=>e.value.toString()===A)))&&void 0!==e?e:A,onSelect:e=>m({id:e}),options:c})},A),(0,v.jsx)(d.A,{type:u.pe.U8,view:y,name:"UNKNOWN",offset:0}),(0,v.jsx)(d.A,{type:u.pe.U8,view:y,name:"UNKNOWN",offset:2}),(0,v.jsx)(d.A,{type:u.pe.U32,view:y,name:"Pointer?",offset:4}),(0,v.jsx)(p.A,{type:u.pe.U8,view:y,name:"Starts Turn # (Turn # + 1)",offset:8}),(0,v.jsx)(p.A,{type:u.pe.U8,view:y,name:"Ends Turn # (Turn # + 1)",offset:9}),(0,v.jsx)(d.A,{type:u.pe.U8,view:y,name:"UNKNOWN",offset:10}),(0,v.jsx)(i.A,{children:(0,v.jsx)(s.A,{})})]})}},33307:(e,n,t)=>{t.d(n,{A:()=>T});var o=t(58168),l=t(64467),r=t(64600),a=t.n(r),i=t(65043),s=t(35296),c=t(16436);const u=function(e){var n,t=(0,i.useContext)(s.QO),r=t.getPrefixCls,u=t.direction,f=e.prefixCls,d=e.className,p=void 0===d?"":d,v=r("input-group",f),m=a()(v,(n={},(0,l.A)(n,"".concat(v,"-lg"),"large"===e.size),(0,l.A)(n,"".concat(v,"-sm"),"small"===e.size),(0,l.A)(n,"".concat(v,"-compact"),e.compact),(0,l.A)(n,"".concat(v,"-rtl"),"rtl"===u),n),p),A=(0,i.useContext)(c.$W),y=(0,i.useMemo)((function(){return(0,o.A)((0,o.A)({},A),{isFormItemInput:!1})}),[A]);return i.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.$W.Provider,{value:y},e.children))};var f=t(28124),d=t(5544),p=t(89379);const v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var m=t(22172),A=function(e,n){return i.createElement(m.A,(0,p.A)((0,p.A)({},e),{},{ref:n,icon:v}))};A.displayName="EyeInvisibleOutlined";const y=i.forwardRef(A);var x=t(76191),b=t(18574),g=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(t[o[l]]=e[o[l]])}return t},h=function(e){return e?i.createElement(x.A,null):i.createElement(y,null)},C={click:"onClick",hover:"onMouseOver"};const E=i.forwardRef((function(e,n){var t=(0,i.useState)(!1),r=(0,d.A)(t,2),c=r[0],u=r[1],p=function(){e.disabled||u((function(e){return!e}))},v=function(t){var r=t.getPrefixCls,s=e.className,u=e.prefixCls,d=e.inputPrefixCls,v=e.size,m=e.visibilityToggle,A=void 0===m||m,y=g(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),x=r("input",d),E=r("input-password",u),w=A&&function(n){var t,o=e.action,r=void 0===o?"click":o,a=e.iconRender,s=C[r]||"",u=(void 0===a?h:a)(c),f=(t={},(0,l.A)(t,s,p),(0,l.A)(t,"className","".concat(n,"-icon")),(0,l.A)(t,"key","passwordIcon"),(0,l.A)(t,"onMouseDown",(function(e){e.preventDefault()})),(0,l.A)(t,"onMouseUp",(function(e){e.preventDefault()})),t);return i.cloneElement(i.isValidElement(u)?u:i.createElement("span",null,u),f)}(E),O=a()(E,s,(0,l.A)({},"".concat(E,"-").concat(v),!!v)),j=(0,o.A)((0,o.A)({},(0,b.A)(y,["suffix","iconRender"])),{type:c?"text":"password",className:O,prefixCls:x,suffix:w});return v&&(j.size=v),i.createElement(f.Ay,(0,o.A)({ref:n},j))};return i.createElement(s.TG,null,v)}));var w=t(62058),O=t(13758),j=t(11774),N=t(87063),P=t(12701),S=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(t[o[l]]=e[o[l]])}return t};const k=i.forwardRef((function(e,n){var t,r,c=e.prefixCls,u=e.inputPrefixCls,d=e.className,p=e.size,v=e.suffix,m=e.enterButton,A=void 0!==m&&m,y=e.addonAfter,x=e.loading,b=e.disabled,g=e.onSearch,h=e.onChange,C=e.onCompositionStart,E=e.onCompositionEnd,k=S(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),z=i.useContext(s.QO),M=z.getPrefixCls,T=z.direction,L=i.useContext(N.A),U=i.useRef(!1),B=p||L,I=i.useRef(null),R=function(e){var n;document.activeElement===(null===(n=I.current)||void 0===n?void 0:n.input)&&e.preventDefault()},D=function(e){var n,t;g&&g(null===(t=null===(n=I.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},F=M("input-search",c),W=M("input",u),K="boolean"===typeof A?i.createElement(w.A,null):null,Q="".concat(F,"-button"),q=A||{},V=q.type&&!0===q.type.__ANT_BUTTON;r=V||"button"===q.type?(0,P.Ob)(q,(0,o.A)({onMouseDown:R,onClick:function(e){var n,t;null===(t=null===(n=null===q||void 0===q?void 0:q.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),D(e)},key:"enterButton"},V?{className:Q,size:B}:{})):i.createElement(j.A,{className:Q,type:A?"primary":void 0,size:B,disabled:b,key:"enterButton",onMouseDown:R,onClick:D,loading:x,icon:K},A),y&&(r=[r,(0,P.Ob)(y,{key:"addonAfter"})]);var $=a()(F,(t={},(0,l.A)(t,"".concat(F,"-rtl"),"rtl"===T),(0,l.A)(t,"".concat(F,"-").concat(B),!!B),(0,l.A)(t,"".concat(F,"-with-button"),!!A),t),d);return i.createElement(f.Ay,(0,o.A)({ref:(0,O.K4)(I,n),onPressEnter:function(e){U.current||D(e)}},k,{size:B,onCompositionStart:function(e){U.current=!0,null===C||void 0===C||C(e)},onCompositionEnd:function(e){U.current=!1,null===E||void 0===E||E(e)},prefixCls:W,addonAfter:r,suffix:v,onChange:function(e){e&&e.target&&"click"===e.type&&g&&g(e.target.value,e),h&&h(e)},className:$,disabled:b}))}));var z=t(42471),M=f.Ay;M.Group=u,M.Search=k,M.TextArea=z.A,M.Password=E;const T=M}}]);
//# sourceMappingURL=52473.41616f3f.chunk.js.map