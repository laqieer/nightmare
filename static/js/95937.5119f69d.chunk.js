"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[95937],{90514:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(89379),r=n(17313),l=n(64435),a=n(33307),i=n(65043),s=n(64004),c=n(70579);const{Text:u}=r.A;function f(e){const[t,n]=(0,i.useState)(""),{view:r,name:f,offset:d,type:p}=e,v=null==r?0:(0,s.LF)(r,d,p),[m,A]=(0,i.useState)(v);return m!==v&&A(v),(0,c.jsxs)(l.A,{children:[(0,c.jsx)(u,{disabled:null==r,children:"".concat(f,":").concat(null==r?"":" 0x".concat(m.toString(16)," \u2192"))}),(0,c.jsx)(a.A,(0,o.A)({disabled:null==r,allowClear:!0,maxLength:2*s.X1[p],prefix:"0x",value:t,onChange:e=>{const t=e.currentTarget.value;(/^[0-9a-f]+$/.test(t)||""===t)&&n(t)},onPressEnter:e=>{const t=parseInt(e.target.value,16);(0,s.M9)(r,d,p,t),A(t)}},e))]})}f.defaultProps={view:null}},34871:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(89379),r=n(41976),l=(n(65043),n(70579));function a(e){return(0,l.jsx)(r.A,(0,o.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,t)=>t.label.includes(e)},e))}},95937:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(65043);var o=n(73216),r=n(35475),l=n(64435),a=n(92135),i=n(33275),s=n(46974);const c=[{label:"Entry 0",value:0}];var u=n(64004),f=n(34871),d=n(90514),p=n(70579);function v(){var e;const[t]=(0,o.KC)(),[n,v]=(0,r.ok)(),m=n.get("id");let A=null;try{A=new DataView(t,168965+8*m,8)}catch(x){A=null}return(0,p.jsxs)(l.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,p.jsx)(a.A,{message:"FE8 Ocean Seal Promotion Editor",type:"info"}),(0,p.jsx)("div",{children:(0,p.jsx)(f.A,{disabled:null==A,defaultValue:null!==(e=c.find((e=>e.value.toString()===m)))&&void 0!==e?e:m,onSelect:e=>v({id:e}),options:c})},m),(0,p.jsx)(d.A,{type:u.pe.U8,view:A,name:"***UNKNOWN***",offset:0}),(0,p.jsx)(d.A,{type:u.pe.U8,view:A,name:"***UNKNOWN***",offset:1}),(0,p.jsx)(d.A,{type:u.pe.U8,view:A,name:"***UNKNOWN***",offset:2}),(0,p.jsx)(d.A,{type:u.pe.U32,view:A,name:"Promotion Pointer",offset:3}),(0,p.jsx)(d.A,{type:u.pe.U8,view:A,name:"0x70 is default",offset:7}),(0,p.jsx)(i.A,{children:(0,p.jsx)(s.A,{})})]})}},33307:(e,t,n)=>{n.d(t,{A:()=>L});var o=n(58168),r=n(64467),l=n(64600),a=n.n(l),i=n(65043),s=n(35296),c=n(16436);const u=function(e){var t,n=(0,i.useContext)(s.QO),l=n.getPrefixCls,u=n.direction,f=e.prefixCls,d=e.className,p=void 0===d?"":d,v=l("input-group",f),m=a()(v,(t={},(0,r.A)(t,"".concat(v,"-lg"),"large"===e.size),(0,r.A)(t,"".concat(v,"-sm"),"small"===e.size),(0,r.A)(t,"".concat(v,"-compact"),e.compact),(0,r.A)(t,"".concat(v,"-rtl"),"rtl"===u),t),p),A=(0,i.useContext)(c.$W),x=(0,i.useMemo)((function(){return(0,o.A)((0,o.A)({},A),{isFormItemInput:!1})}),[A]);return i.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.$W.Provider,{value:x},e.children))};var f=n(28124),d=n(5544),p=n(89379);const v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var m=n(22172),A=function(e,t){return i.createElement(m.A,(0,p.A)((0,p.A)({},e),{},{ref:t,icon:v}))};A.displayName="EyeInvisibleOutlined";const x=i.forwardRef(A);var y=n(76191),g=n(18574),C=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},b=function(e){return e?i.createElement(y.A,null):i.createElement(x,null)},h={click:"onClick",hover:"onMouseOver"};const w=i.forwardRef((function(e,t){var n=(0,i.useState)(!1),l=(0,d.A)(n,2),c=l[0],u=l[1],p=function(){e.disabled||u((function(e){return!e}))},v=function(n){var l=n.getPrefixCls,s=e.className,u=e.prefixCls,d=e.inputPrefixCls,v=e.size,m=e.visibilityToggle,A=void 0===m||m,x=C(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),y=l("input",d),w=l("input-password",u),O=A&&function(t){var n,o=e.action,l=void 0===o?"click":o,a=e.iconRender,s=h[l]||"",u=(void 0===a?b:a)(c),f=(n={},(0,r.A)(n,s,p),(0,r.A)(n,"className","".concat(t,"-icon")),(0,r.A)(n,"key","passwordIcon"),(0,r.A)(n,"onMouseDown",(function(e){e.preventDefault()})),(0,r.A)(n,"onMouseUp",(function(e){e.preventDefault()})),n);return i.cloneElement(i.isValidElement(u)?u:i.createElement("span",null,u),f)}(w),E=a()(w,s,(0,r.A)({},"".concat(w,"-").concat(v),!!v)),j=(0,o.A)((0,o.A)({},(0,g.A)(x,["suffix","iconRender"])),{type:c?"text":"password",className:E,prefixCls:y,suffix:O});return v&&(j.size=v),i.createElement(f.Ay,(0,o.A)({ref:t},j))};return i.createElement(s.TG,null,v)}));var O=n(62058),E=n(13758),j=n(11774),N=n(87063),P=n(12701),S=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const k=i.forwardRef((function(e,t){var n,l,c=e.prefixCls,u=e.inputPrefixCls,d=e.className,p=e.size,v=e.suffix,m=e.enterButton,A=void 0!==m&&m,x=e.addonAfter,y=e.loading,g=e.disabled,C=e.onSearch,b=e.onChange,h=e.onCompositionStart,w=e.onCompositionEnd,k=S(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),z=i.useContext(s.QO),M=z.getPrefixCls,L=z.direction,U=i.useContext(N.A),T=i.useRef(!1),B=p||U,D=i.useRef(null),I=function(e){var t;document.activeElement===(null===(t=D.current)||void 0===t?void 0:t.input)&&e.preventDefault()},R=function(e){var t,n;C&&C(null===(n=null===(t=D.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.value,e)},F=M("input-search",c),K=M("input",u),Q="boolean"===typeof A?i.createElement(O.A,null):null,W="".concat(F,"-button"),q=A||{},V=q.type&&!0===q.type.__ANT_BUTTON;l=V||"button"===q.type?(0,P.Ob)(q,(0,o.A)({onMouseDown:I,onClick:function(e){var t,n;null===(n=null===(t=null===q||void 0===q?void 0:q.props)||void 0===t?void 0:t.onClick)||void 0===n||n.call(t,e),R(e)},key:"enterButton"},V?{className:W,size:B}:{})):i.createElement(j.A,{className:W,type:A?"primary":void 0,size:B,disabled:g,key:"enterButton",onMouseDown:I,onClick:R,loading:y,icon:Q},A),x&&(l=[l,(0,P.Ob)(x,{key:"addonAfter"})]);var $=a()(F,(n={},(0,r.A)(n,"".concat(F,"-rtl"),"rtl"===L),(0,r.A)(n,"".concat(F,"-").concat(B),!!B),(0,r.A)(n,"".concat(F,"-with-button"),!!A),n),d);return i.createElement(f.Ay,(0,o.A)({ref:(0,E.K4)(D,t),onPressEnter:function(e){T.current||R(e)}},k,{size:B,onCompositionStart:function(e){T.current=!0,null===h||void 0===h||h(e)},onCompositionEnd:function(e){T.current=!1,null===w||void 0===w||w(e)},prefixCls:K,addonAfter:l,suffix:v,onChange:function(e){e&&e.target&&"click"===e.type&&C&&C(e.target.value,e),b&&b(e)},className:$,disabled:g}))}));var z=n(42471),M=f.Ay;M.Group=u,M.Search=k,M.TextArea=z.A,M.Password=w;const L=M}}]);
//# sourceMappingURL=95937.5119f69d.chunk.js.map