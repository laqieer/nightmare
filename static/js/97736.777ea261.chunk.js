"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[97736],{23145:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(1413),r=t(29439),i=t(97788),a=t(83099),l=t(49389),s=t(72791),c=t(83282),u=t(80184),f=i.Z.Text;function d(e){var n=(0,s.useState)(""),t=(0,r.Z)(n,2),i=t[0],d=t[1],p=e.view,v=e.name,m=e.offset,Z=e.type,x=null==p?0:(0,c.ij)(p,m,Z),y=(0,s.useState)(x),g=(0,r.Z)(y,2),b=g[0],C=g[1];return b!==x&&C(x),(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(f,{disabled:null==p,children:"".concat(v,":").concat(null==p?"":" 0x".concat(b.toString(16)," \u2192"))}),(0,u.jsx)(l.Z,(0,o.Z)({disabled:null==p,allowClear:!0,maxLength:2*c.Tz[Z],prefix:"0x",value:i,onChange:function(e){var n=e.currentTarget.value;(/^[0-9a-f]+$/.test(n)||""===n)&&d(n)},onPressEnter:function(e){var n=parseInt(e.target.value,16);(0,c.cW)(p,m,Z,n),C(n)}},e))]})}d.defaultProps={view:null}},9933:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(1413),r=t(21951),i=(t(72791),t(80184));function a(e){return(0,i.jsx)(r.Z,(0,o.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,n){return n.label.includes(e)}},e))}},97736:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var o=t(29439),r=(t(72791),t(57689)),i=t(11087),a=t(83099),l=t(33441),s=t(43292),c=t(79042),u=[{label:"Entry 0",value:0}],f=t(83282),d=t(9933),p=t(23145),v=t(80184);function m(){var e,n=(0,r.bx)(),t=(0,o.Z)(n,1)[0],m=(0,i.lr)(),Z=(0,o.Z)(m,2),x=Z[0],y=Z[1],g=x.get("id"),b=null;try{b=new DataView(t,107498+9*g,9)}catch(C){b=null}return(0,v.jsxs)(a.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,v.jsx)(l.Z,{message:"Class Weapon Usablity Pointer Editor by Darrman",type:"info"}),(0,v.jsx)("div",{children:(0,v.jsx)(d.Z,{disabled:null==b,defaultValue:null!==(e=u.find((function(e){return e.value.toString()===g})))&&void 0!==e?e:g,onSelect:function(e){return y({id:e})},options:u})},g),(0,v.jsx)(p.Z,{type:f.g.U16,view:b,name:"Sword Pointer",offset:0}),(0,v.jsx)(p.Z,{type:f.g.U16,view:b,name:"Lance Pointer",offset:2}),(0,v.jsx)(p.Z,{type:f.g.U16,view:b,name:"Bow Pointer",offset:4}),(0,v.jsx)(p.Z,{type:f.g.U16,view:b,name:"Ballista Pointer",offset:6}),(0,v.jsx)(p.Z,{type:f.g.U16,view:b,name:"Axe Pointer",offset:8}),(0,v.jsx)(p.Z,{type:f.g.U16,view:b,name:"Dragonstone Pointer",offset:10}),(0,v.jsx)(p.Z,{type:f.g.U16,view:b,name:"Tome Pointer",offset:12}),(0,v.jsx)(p.Z,{type:f.g.U16,view:b,name:"Staff A Pointer",offset:14}),(0,v.jsx)(p.Z,{type:f.g.U16,view:b,name:"Staff B Pointer",offset:16}),(0,v.jsx)(s.Z,{children:(0,v.jsx)(c.Z,{})})]})}},49389:function(e,n,t){t.d(n,{Z:function(){return T}});var o=t(87462),r=t(4942),i=t(81694),a=t.n(i),l=t(72791),s=t(71929),c=t(91940),u=function(e){var n,t=(0,l.useContext)(s.E_),i=t.getPrefixCls,u=t.direction,f=e.prefixCls,d=e.className,p=void 0===d?"":d,v=i("input-group",f),m=a()(v,(n={},(0,r.Z)(n,"".concat(v,"-lg"),"large"===e.size),(0,r.Z)(n,"".concat(v,"-sm"),"small"===e.size),(0,r.Z)(n,"".concat(v,"-compact"),e.compact),(0,r.Z)(n,"".concat(v,"-rtl"),"rtl"===u),n),p),Z=(0,l.useContext)(c.aM),x=(0,l.useMemo)((function(){return(0,o.Z)((0,o.Z)({},Z),{isFormItemInput:!1})}),[Z]);return l.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},l.createElement(c.aM.Provider,{value:x},e.children))},f=t(45394),d=t(29439),p=t(1413),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},m=t(54291),Z=function(e,n){return l.createElement(m.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:n,icon:v}))};Z.displayName="EyeInvisibleOutlined";var x=l.forwardRef(Z),y=t(24215),g=t(41818),b=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},C={click:"onClick",hover:"onMouseOver"},w=l.forwardRef((function(e,n){var t=(0,l.useState)(!1),i=(0,d.Z)(t,2),c=i[0],u=i[1],p=function(){e.disabled||u(!c)},v=function(t){var i=t.getPrefixCls,s=e.className,u=e.prefixCls,d=e.inputPrefixCls,v=e.size,m=e.visibilityToggle,Z=b(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),x=i("input",d),y=i("input-password",u),w=m&&function(n){var t,o=e.action,i=e.iconRender,a=C[o]||"",s=(void 0===i?function(){return null}:i)(c),u=(t={},(0,r.Z)(t,a,p),(0,r.Z)(t,"className","".concat(n,"-icon")),(0,r.Z)(t,"key","passwordIcon"),(0,r.Z)(t,"onMouseDown",(function(e){e.preventDefault()})),(0,r.Z)(t,"onMouseUp",(function(e){e.preventDefault()})),t);return l.cloneElement(l.isValidElement(s)?s:l.createElement("span",null,s),u)}(y),h=a()(y,s,(0,r.Z)({},"".concat(y,"-").concat(v),!!v)),P=(0,o.Z)((0,o.Z)({},(0,g.Z)(Z,["suffix","iconRender"])),{type:c?"text":"password",className:h,prefixCls:x,suffix:w});return v&&(P.size=v),l.createElement(f.ZP,(0,o.Z)({ref:n},P))};return l.createElement(s.C,null,v)}));w.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?l.createElement(y.Z,null):l.createElement(x,null)}};var h=w,P=t(11730),j=t(88834),E=t(23707),O=t(1815),S=t(61113),z=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};var k=l.forwardRef((function(e,n){var t,i,c=e.prefixCls,u=e.inputPrefixCls,d=e.className,p=e.size,v=e.suffix,m=e.enterButton,Z=void 0!==m&&m,x=e.addonAfter,y=e.loading,g=e.disabled,b=e.onSearch,C=e.onChange,w=e.onCompositionStart,h=e.onCompositionEnd,k=z(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),M=l.useContext(s.E_),N=M.getPrefixCls,T=M.direction,U=l.useContext(O.Z),B=l.useRef(!1),L=p||U,A=l.useRef(null),D=function(e){var n;document.activeElement===(null===(n=A.current)||void 0===n?void 0:n.input)&&e.preventDefault()},R=function(e){var n,t;b&&b(null===(t=null===(n=A.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},I=N("input-search",c),_=N("input",u),q="boolean"===typeof Z?l.createElement(P.Z,null):null,F="".concat(I,"-button"),Q=Z||{},V=Q.type&&!0===Q.type.__ANT_BUTTON;i=V||"button"===Q.type?(0,S.Tm)(Q,(0,o.Z)({onMouseDown:D,onClick:function(e){var n,t;null===(t=null===(n=null===Q||void 0===Q?void 0:Q.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),R(e)},key:"enterButton"},V?{className:F,size:L}:{})):l.createElement(E.Z,{className:F,type:Z?"primary":void 0,size:L,disabled:g,key:"enterButton",onMouseDown:D,onClick:R,loading:y,icon:q},Z),x&&(i=[i,(0,S.Tm)(x,{key:"addonAfter"})]);var W=a()(I,(t={},(0,r.Z)(t,"".concat(I,"-rtl"),"rtl"===T),(0,r.Z)(t,"".concat(I,"-").concat(L),!!L),(0,r.Z)(t,"".concat(I,"-with-button"),!!Z),t),d);return l.createElement(f.ZP,(0,o.Z)({ref:(0,j.sQ)(A,n),onPressEnter:function(e){B.current||R(e)}},k,{size:L,onCompositionStart:function(e){B.current=!0,null===w||void 0===w||w(e)},onCompositionEnd:function(e){B.current=!1,null===h||void 0===h||h(e)},prefixCls:_,addonAfter:i,suffix:v,onChange:function(e){e&&e.target&&"click"===e.type&&b&&b(e.target.value,e),C&&C(e)},className:W,disabled:g}))})),M=t(66920),N=f.ZP;N.Group=u,N.Search=k,N.TextArea=M.Z,N.Password=h;var T=N}}]);
//# sourceMappingURL=97736.777ea261.chunk.js.map