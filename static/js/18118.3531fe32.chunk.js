"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[18118],{73339:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413),o=t(29439),l=t(97788),a=t(83099),i=t(13344),u=t(72791),c=t(83282),s=t(80184),f=l.Z.Text;function d(e){var n=e.view,t=e.name,l=e.offset,d=e.type,v=null==n?0:(0,c.ij)(n,l,d),p=(0,u.useState)(v),m=(0,o.Z)(p,2),Z=m[0],y=m[1];return Z!==v&&y(v),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(f,{disabled:null==n,children:"".concat(t,":").concat(null==n?"":" ".concat(Z," \u2192"))}),(0,s.jsx)(i.Z,(0,r.Z)({disabled:null==n,min:c.Cu[d][0],max:c.Cu[d][1],onPressEnter:function(e){var t=parseInt(e.target.value,10);(0,c.cW)(n,l,d,t),y(t)}},e))]})}d.defaultProps={view:null}},23145:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413),o=t(29439),l=t(97788),a=t(83099),i=t(49389),u=t(72791),c=t(83282),s=t(80184),f=l.Z.Text;function d(e){var n=(0,u.useState)(""),t=(0,o.Z)(n,2),l=t[0],d=t[1],v=e.view,p=e.name,m=e.offset,Z=e.type,y=null==v?0:(0,c.ij)(v,m,Z),x=(0,u.useState)(y),b=(0,o.Z)(x,2),g=b[0],C=b[1];return g!==y&&C(y),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(f,{disabled:null==v,children:"".concat(p,":").concat(null==v?"":" 0x".concat(g.toString(16)," \u2192"))}),(0,s.jsx)(i.Z,(0,r.Z)({disabled:null==v,allowClear:!0,maxLength:2*c.Tz[Z],prefix:"0x",value:l,onChange:function(e){var n=e.currentTarget.value;(/^[0-9a-f]+$/.test(n)||""===n)&&d(n)},onPressEnter:function(e){var n=parseInt(e.target.value,16);(0,c.cW)(v,m,Z,n),C(n)}},e))]})}d.defaultProps={view:null}},9933:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(1413),o=t(21951),l=(t(72791),t(80184));function a(e){return(0,l.jsx)(o.Z,(0,r.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,n){return n.label.includes(e)}},e))}},18118:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(29439),o=(t(72791),t(57689)),l=t(11087),a=t(83099),i=t(33441),u=t(43292),c=t(79042),s=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8},{label:"Entry 9",value:9}],f=t(83282),d=t(9933),v=t(23145),p=t(73339),m=t(80184);function Z(){var e,n=(0,o.bx)(),t=(0,r.Z)(n,1)[0],Z=(0,l.lr)(),y=(0,r.Z)(Z,2),x=y[0],b=y[1],g=x.get("id"),C=null;try{C=new DataView(t,10395128+12*g,12)}catch(h){C=null}return(0,m.jsxs)(a.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,m.jsx)(i.Z,{message:"FE8 Ch 19A Reinforcement Editor",type:"info"}),(0,m.jsx)("div",{children:(0,m.jsx)(d.Z,{disabled:null==C,defaultValue:null!==(e=s.find((function(e){return e.value.toString()===g})))&&void 0!==e?e:g,onSelect:function(e){return b({id:e})},options:s})},g),(0,m.jsx)(v.Z,{type:f.g.U8,view:C,name:"UNKNOWN",offset:0}),(0,m.jsx)(v.Z,{type:f.g.U8,view:C,name:"UNKNOWN",offset:2}),(0,m.jsx)(v.Z,{type:f.g.U32,view:C,name:"Pointer?",offset:4}),(0,m.jsx)(p.Z,{type:f.g.U8,view:C,name:"Starts Turn # (Turn # + 1)",offset:8}),(0,m.jsx)(p.Z,{type:f.g.U8,view:C,name:"Ends Turn # (Turn # + 1)",offset:9}),(0,m.jsx)(v.Z,{type:f.g.U8,view:C,name:"UNKNOWN",offset:10}),(0,m.jsx)(u.Z,{children:(0,m.jsx)(c.Z,{})})]})}},49389:function(e,n,t){t.d(n,{Z:function(){return M}});var r=t(87462),o=t(4942),l=t(81694),a=t.n(l),i=t(72791),u=t(71929),c=t(91940),s=function(e){var n,t=(0,i.useContext)(u.E_),l=t.getPrefixCls,s=t.direction,f=e.prefixCls,d=e.className,v=void 0===d?"":d,p=l("input-group",f),m=a()(p,(n={},(0,o.Z)(n,"".concat(p,"-lg"),"large"===e.size),(0,o.Z)(n,"".concat(p,"-sm"),"small"===e.size),(0,o.Z)(n,"".concat(p,"-compact"),e.compact),(0,o.Z)(n,"".concat(p,"-rtl"),"rtl"===s),n),v),Z=(0,i.useContext)(c.aM),y=(0,i.useMemo)((function(){return(0,r.Z)((0,r.Z)({},Z),{isFormItemInput:!1})}),[Z]);return i.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.aM.Provider,{value:y},e.children))},f=t(45394),d=t(29439),v=t(1413),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},m=t(54291),Z=function(e,n){return i.createElement(m.Z,(0,v.Z)((0,v.Z)({},e),{},{ref:n,icon:p}))};Z.displayName="EyeInvisibleOutlined";var y=i.forwardRef(Z),x=t(24215),b=t(41818),g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},C=function(e){return e?i.createElement(x.Z,null):i.createElement(y,null)},h={click:"onClick",hover:"onMouseOver"};var E=i.forwardRef((function(e,n){var t=(0,i.useState)(!1),l=(0,d.Z)(t,2),c=l[0],s=l[1],v=function(){e.disabled||s((function(e){return!e}))},p=function(t){var l=t.getPrefixCls,u=e.className,s=e.prefixCls,d=e.inputPrefixCls,p=e.size,m=e.visibilityToggle,Z=void 0===m||m,y=g(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),x=l("input",d),E=l("input-password",s),w=Z&&function(n){var t,r=e.action,l=void 0===r?"click":r,a=e.iconRender,u=h[l]||"",s=(void 0===a?C:a)(c),f=(t={},(0,o.Z)(t,u,v),(0,o.Z)(t,"className","".concat(n,"-icon")),(0,o.Z)(t,"key","passwordIcon"),(0,o.Z)(t,"onMouseDown",(function(e){e.preventDefault()})),(0,o.Z)(t,"onMouseUp",(function(e){e.preventDefault()})),t);return i.cloneElement(i.isValidElement(s)?s:i.createElement("span",null,s),f)}(E),j=a()(E,u,(0,o.Z)({},"".concat(E,"-").concat(p),!!p)),O=(0,r.Z)((0,r.Z)({},(0,b.Z)(y,["suffix","iconRender"])),{type:c?"text":"password",className:j,prefixCls:x,suffix:w});return p&&(O.size=p),i.createElement(f.ZP,(0,r.Z)({ref:n},O))};return i.createElement(u.C,null,p)})),w=t(11730),j=t(88834),O=t(30435),P=t(1815),N=t(61113),S=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};var z=i.forwardRef((function(e,n){var t,l,c=e.prefixCls,s=e.inputPrefixCls,d=e.className,v=e.size,p=e.suffix,m=e.enterButton,Z=void 0!==m&&m,y=e.addonAfter,x=e.loading,b=e.disabled,g=e.onSearch,C=e.onChange,h=e.onCompositionStart,E=e.onCompositionEnd,z=S(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),T=i.useContext(u.E_),k=T.getPrefixCls,M=T.direction,U=i.useContext(P.Z),L=i.useRef(!1),A=v||U,B=i.useRef(null),I=function(e){var n;document.activeElement===(null===(n=B.current)||void 0===n?void 0:n.input)&&e.preventDefault()},R=function(e){var n,t;g&&g(null===(t=null===(n=B.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},D=k("input-search",c),F=k("input",s),W="boolean"===typeof Z?i.createElement(w.Z,null):null,_="".concat(D,"-button"),q=Z||{},Q=q.type&&!0===q.type.__ANT_BUTTON;l=Q||"button"===q.type?(0,N.Tm)(q,(0,r.Z)({onMouseDown:I,onClick:function(e){var n,t;null===(t=null===(n=null===q||void 0===q?void 0:q.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),R(e)},key:"enterButton"},Q?{className:_,size:A}:{})):i.createElement(O.Z,{className:_,type:Z?"primary":void 0,size:A,disabled:b,key:"enterButton",onMouseDown:I,onClick:R,loading:x,icon:W},Z),y&&(l=[l,(0,N.Tm)(y,{key:"addonAfter"})]);var K=a()(D,(t={},(0,o.Z)(t,"".concat(D,"-rtl"),"rtl"===M),(0,o.Z)(t,"".concat(D,"-").concat(A),!!A),(0,o.Z)(t,"".concat(D,"-with-button"),!!Z),t),d);return i.createElement(f.ZP,(0,r.Z)({ref:(0,j.sQ)(B,n),onPressEnter:function(e){L.current||R(e)}},z,{size:A,onCompositionStart:function(e){L.current=!0,null===h||void 0===h||h(e)},onCompositionEnd:function(e){L.current=!1,null===E||void 0===E||E(e)},prefixCls:F,addonAfter:l,suffix:p,onChange:function(e){e&&e.target&&"click"===e.type&&g&&g(e.target.value,e),C&&C(e)},className:K,disabled:b}))})),T=t(66920),k=f.ZP;k.Group=s,k.Search=z,k.TextArea=T.Z,k.Password=E;var M=k}}]);
//# sourceMappingURL=18118.3531fe32.chunk.js.map