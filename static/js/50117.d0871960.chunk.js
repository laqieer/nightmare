"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[50117],{86357:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(89379),l=n(17313),a=n(64435),r=n(3428),i=n(65043),s=n(64004),c=n(70579);const{Text:u}=l.A;function p(e){const{view:t,name:n,offset:l,type:p}=e,f=null==t?0:(0,s.LF)(t,l,p),[d,m]=(0,i.useState)(f);return d!==f&&m(f),(0,c.jsxs)(a.A,{children:[(0,c.jsx)(u,{disabled:null==t,children:"".concat(n,":").concat(null==t?"":" ".concat(d," \u2192"))}),(0,c.jsx)(r.A,(0,o.A)({disabled:null==t,min:s.Wb[p][0],max:s.Wb[p][1],onPressEnter:e=>{const n=parseInt(e.target.value,10);(0,s.M9)(t,l,p,n),m(n)}},e))]})}p.defaultProps={view:null}},90514:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(89379),l=n(17313),a=n(64435),r=n(33307),i=n(65043),s=n(64004),c=n(70579);const{Text:u}=l.A;function p(e){const[t,n]=(0,i.useState)(""),{view:l,name:p,offset:f,type:d}=e,m=null==l?0:(0,s.LF)(l,f,d),[v,y]=(0,i.useState)(m);return v!==m&&y(m),(0,c.jsxs)(a.A,{children:[(0,c.jsx)(u,{disabled:null==l,children:"".concat(p,":").concat(null==l?"":" 0x".concat(v.toString(16)," \u2192"))}),(0,c.jsx)(r.A,(0,o.A)({disabled:null==l,allowClear:!0,maxLength:2*s.X1[d],prefix:"0x",value:t,onChange:e=>{const t=e.currentTarget.value;(/^[0-9a-f]+$/.test(t)||""===t)&&n(t)},onPressEnter:e=>{const t=parseInt(e.target.value,16);(0,s.M9)(l,f,d,t),y(t)}},e))]})}p.defaultProps={view:null}},34871:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(89379),l=n(41976),a=(n(65043),n(70579));function r(e){return(0,a.jsx)(l.A,(0,o.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,t)=>t.label.includes(e)},e))}},50117:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(65043);var o=n(73216),l=n(35475),a=n(64435),r=n(92135),i=n(33275),s=n(46974);const c=[{label:"Entry 0",value:0}];var u=n(64004),p=n(34871),f=n(86357),d=n(90514),m=n(70579);function v(){var e;const[t]=(0,o.KC)(),[n,v]=(0,l.ok)(),y=n.get("id");let A=null;try{A=new DataView(t,133560+31*y,31)}catch(x){A=null}return(0,m.jsxs)(a.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,m.jsx)(r.A,{message:"Chapter 18 Unit Deployment Editor by Darrman",type:"info"}),(0,m.jsx)("div",{children:(0,m.jsx)(p.A,{disabled:null==A,defaultValue:null!==(e=c.find((e=>e.value.toString()===y)))&&void 0!==e?e:y,onSelect:e=>v({id:e}),options:c})},y),(0,m.jsx)(f.A,{type:u.pe.U8,view:A,name:"Units Allowed",offset:0}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 1",offset:1}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 2",offset:3}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 3",offset:5}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 4",offset:7}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 5",offset:9}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 6",offset:11}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 7",offset:13}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 8",offset:15}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 9",offset:17}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 10",offset:19}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 11",offset:21}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 12",offset:23}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 13",offset:25}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 14",offset:27}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 15",offset:29}),(0,m.jsx)(d.A,{type:u.pe.U16,view:A,name:"Deployment Slot 16",offset:31}),(0,m.jsx)(i.A,{children:(0,m.jsx)(s.A,{})})]})}},33307:(e,t,n)=>{n.d(t,{A:()=>M});var o=n(58168),l=n(64467),a=n(64600),r=n.n(a),i=n(65043),s=n(35296),c=n(16436);const u=function(e){var t,n=(0,i.useContext)(s.QO),a=n.getPrefixCls,u=n.direction,p=e.prefixCls,f=e.className,d=void 0===f?"":f,m=a("input-group",p),v=r()(m,(t={},(0,l.A)(t,"".concat(m,"-lg"),"large"===e.size),(0,l.A)(t,"".concat(m,"-sm"),"small"===e.size),(0,l.A)(t,"".concat(m,"-compact"),e.compact),(0,l.A)(t,"".concat(m,"-rtl"),"rtl"===u),t),d),y=(0,i.useContext)(c.$W),A=(0,i.useMemo)((function(){return(0,o.A)((0,o.A)({},y),{isFormItemInput:!1})}),[y]);return i.createElement("span",{className:v,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.$W.Provider,{value:A},e.children))};var p=n(28124),f=n(5544),d=n(89379);const m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var v=n(22172),y=function(e,t){return i.createElement(v.A,(0,d.A)((0,d.A)({},e),{},{ref:t,icon:m}))};y.displayName="EyeInvisibleOutlined";const A=i.forwardRef(y);var x=n(76191),w=n(18574),b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n},g=function(e){return e?i.createElement(x.A,null):i.createElement(A,null)},h={click:"onClick",hover:"onMouseOver"};const C=i.forwardRef((function(e,t){var n=(0,i.useState)(!1),a=(0,f.A)(n,2),c=a[0],u=a[1],d=function(){e.disabled||u((function(e){return!e}))},m=function(n){var a=n.getPrefixCls,s=e.className,u=e.prefixCls,f=e.inputPrefixCls,m=e.size,v=e.visibilityToggle,y=void 0===v||v,A=b(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),x=a("input",f),C=a("input-password",u),j=y&&function(t){var n,o=e.action,a=void 0===o?"click":o,r=e.iconRender,s=h[a]||"",u=(void 0===r?g:r)(c),p=(n={},(0,l.A)(n,s,d),(0,l.A)(n,"className","".concat(t,"-icon")),(0,l.A)(n,"key","passwordIcon"),(0,l.A)(n,"onMouseDown",(function(e){e.preventDefault()})),(0,l.A)(n,"onMouseUp",(function(e){e.preventDefault()})),n);return i.cloneElement(i.isValidElement(u)?u:i.createElement("span",null,u),p)}(C),S=r()(C,s,(0,l.A)({},"".concat(C,"-").concat(m),!!m)),E=(0,o.A)((0,o.A)({},(0,w.A)(A,["suffix","iconRender"])),{type:c?"text":"password",className:S,prefixCls:x,suffix:j});return m&&(E.size=m),i.createElement(p.Ay,(0,o.A)({ref:t},E))};return i.createElement(s.TG,null,m)}));var j=n(62058),S=n(13758),E=n(11774),O=n(87063),D=n(12701),P=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const U=i.forwardRef((function(e,t){var n,a,c=e.prefixCls,u=e.inputPrefixCls,f=e.className,d=e.size,m=e.suffix,v=e.enterButton,y=void 0!==v&&v,A=e.addonAfter,x=e.loading,w=e.disabled,b=e.onSearch,g=e.onChange,h=e.onCompositionStart,C=e.onCompositionEnd,U=P(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),k=i.useContext(s.QO),z=k.getPrefixCls,M=k.direction,N=i.useContext(O.A),L=i.useRef(!1),T=d||N,B=i.useRef(null),I=function(e){var t;document.activeElement===(null===(t=B.current)||void 0===t?void 0:t.input)&&e.preventDefault()},R=function(e){var t,n;b&&b(null===(n=null===(t=B.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.value,e)},F=z("input-search",c),Q=z("input",u),q="boolean"===typeof y?i.createElement(j.A,null):null,W="".concat(F,"-button"),V=y||{},$=V.type&&!0===V.type.__ANT_BUTTON;a=$||"button"===V.type?(0,D.Ob)(V,(0,o.A)({onMouseDown:I,onClick:function(e){var t,n;null===(n=null===(t=null===V||void 0===V?void 0:V.props)||void 0===t?void 0:t.onClick)||void 0===n||n.call(t,e),R(e)},key:"enterButton"},$?{className:W,size:T}:{})):i.createElement(E.A,{className:W,type:y?"primary":void 0,size:T,disabled:w,key:"enterButton",onMouseDown:I,onClick:R,loading:x,icon:q},y),A&&(a=[a,(0,D.Ob)(A,{key:"addonAfter"})]);var _=r()(F,(n={},(0,l.A)(n,"".concat(F,"-rtl"),"rtl"===M),(0,l.A)(n,"".concat(F,"-").concat(T),!!T),(0,l.A)(n,"".concat(F,"-with-button"),!!y),n),f);return i.createElement(p.Ay,(0,o.A)({ref:(0,S.K4)(B,t),onPressEnter:function(e){L.current||R(e)}},U,{size:T,onCompositionStart:function(e){L.current=!0,null===h||void 0===h||h(e)},onCompositionEnd:function(e){L.current=!1,null===C||void 0===C||C(e)},prefixCls:Q,addonAfter:a,suffix:m,onChange:function(e){e&&e.target&&"click"===e.type&&b&&b(e.target.value,e),g&&g(e)},className:_,disabled:w}))}));var k=n(42471),z=p.Ay;z.Group=u,z.Search=U,z.TextArea=k.A,z.Password=C;const M=z}}]);
//# sourceMappingURL=50117.d0871960.chunk.js.map