"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[43038],{4220:function(e,n,t){t.d(n,{Z:function(){return x}});var l=t(1413),a=t(29439),o=t(44925),r=t(97788),i=t(83099),u=t(21951),c=t(72791),s=t(11087),f=t(83282),v=t(80184),d=["isHex","reference","view","name","offset","type","options"],p=r.Z.Text;function x(e){var n=e.isHex,t=e.reference,r=e.view,x=e.name,b=e.offset,m=e.type,Z=e.options,y=(0,o.Z)(e,d),g=null==r?0:(0,f.ij)(r,b,m),w=(0,c.useState)(g),h=(0,a.Z)(w,2),C=h[0],j=h[1];C!==g&&j(g);var S=Z.find((function(e){return e.value===C})),P=n?"0x".concat(C.toString(16)):C,k=void 0===S?P:S.label;return(0,v.jsxs)(i.Z,{children:[(0,v.jsx)(p,{disabled:null==r,children:"".concat(x,":").concat(null==r?"":" ".concat(k," \u2192"))}),(0,v.jsx)(u.Z,(0,l.Z)({disabled:null==r,showSearch:!0,options:Z,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,n){return n.label.includes(e)},onSelect:function(e){(0,f.cW)(r,b,m,e),j(e)}},y)),""===t||null==r?"":(0,v.jsx)(s.rU,{to:{pathname:"../".concat(t,"?id=").concat(C),state:r.buffer},children:"\u27a4"})]})}x.defaultProps={view:null,isHex:!1,reference:""}},23145:function(e,n,t){t.d(n,{Z:function(){return v}});var l=t(1413),a=t(29439),o=t(97788),r=t(83099),i=t(49389),u=t(72791),c=t(83282),s=t(80184),f=o.Z.Text;function v(e){var n=(0,u.useState)(""),t=(0,a.Z)(n,2),o=t[0],v=t[1],d=e.view,p=e.name,x=e.offset,b=e.type,m=null==d?0:(0,c.ij)(d,x,b),Z=(0,u.useState)(m),y=(0,a.Z)(Z,2),g=y[0],w=y[1];return g!==m&&w(m),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(f,{disabled:null==d,children:"".concat(p,":").concat(null==d?"":" 0x".concat(g.toString(16)," \u2192"))}),(0,s.jsx)(i.Z,(0,l.Z)({disabled:null==d,allowClear:!0,maxLength:2*c.Tz[b],prefix:"0x",value:o,onChange:function(e){var n=e.currentTarget.value;(/^[0-9a-f]+$/.test(n)||""===n)&&v(n)},onPressEnter:function(e){var n=parseInt(e.target.value,16);(0,c.cW)(d,x,b,n),w(n)}},e))]})}v.defaultProps={view:null}},9933:function(e,n,t){t.d(n,{Z:function(){return r}});var l=t(1413),a=t(21951),o=(t(72791),t(80184));function r(e){return(0,o.jsx)(a.Z,(0,l.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,n){return n.label.includes(e)}},e))}},43038:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var l=t(29439),a=(t(72791),t(57689)),o=t(11087),r=t(83099),i=t(33441),u=t(43292),c=t(79042),s=[{label:"0x00 Seize",value:0},{label:"0x01 Attack",value:1},{label:"0x02 Attack",value:2},{label:"0x03 Staff",value:3},{label:"0x04 Ride",value:4},{label:"0x05 Exit",value:5},{label:"0x06 Play",value:6},{label:"0x07 Dance",value:7},{label:"0x08 Steal",value:8},{label:"0x09 Summon",value:9},{label:"0x0A Summon",value:10},{label:"0x0B Pick",value:11},{label:"0x0C Talk",value:12},{label:"0x0D Support",value:13},{label:"0x0E Visit",value:14},{label:"0x0F Chest",value:15},{label:"0x10 Door",value:16},{label:"0x11 Armory",value:17},{label:"0x12 Vendor",value:18},{label:"0x13 Secret",value:19},{label:"0x14 Arena",value:20},{label:"0x15 Rescue",value:21},{label:"0x16 Drop",value:22},{label:"0x17 Take",value:23},{label:"0x18 Give",value:24},{label:"0x19 Item",value:25},{label:"0x1A Trade",value:26},{label:"0x1B Supply",value:27},{label:"0x1C Wait",value:28}],f=[{label:"Normal Text",value:0},{label:"Greyed Out (Does not prevent selecting)",value:1},{label:"Blue Text",value:2},{label:"Orange Text",value:3},{label:"Flashing Green Text",value:4},{label:"Black Text",value:5}],v=t(83282),d=t(9933),p=t(23145),x=t(4220),b=t(80184);function m(){var e,n=(0,a.bx)(),t=(0,l.Z)(n,1)[0],m=(0,o.lr)(),Z=(0,l.Z)(m,2),y=Z[0],g=Z[1],w=y.get("id"),h=null;try{h=new DataView(t,5885548+36*w,36)}catch(C){h=null}return(0,b.jsxs)(r.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,b.jsx)(i.Z,{message:"Unit Menu table by jjl2357, edited by Crazycolorz5",type:"info"}),(0,b.jsx)("div",{children:(0,b.jsx)(d.Z,{disabled:null==h,defaultValue:null!==(e=s.find((function(e){return e.value.toString()===w})))&&void 0!==e?e:w,onSelect:function(e){return g({id:e})},options:s})},w),(0,b.jsx)(p.Z,{type:v.g.U32,view:h,name:"Unknown Pointer (not ASM code)",offset:0}),(0,b.jsx)(p.Z,{type:v.g.U16,view:h,name:"Text",offset:4}),(0,b.jsx)(p.Z,{type:v.g.U16,view:h,name:"Description",offset:6}),(0,b.jsx)(x.Z,{isHex:!0,type:v.g.U8,options:f,view:h,name:"Text Color",offset:8}),(0,b.jsx)(p.Z,{type:v.g.U8,view:h,name:"Command ID? (No effect?)",offset:9}),(0,b.jsx)(p.Z,{type:v.g.U16,view:h,name:"Unknown (Always 0?)",offset:10}),(0,b.jsx)(p.Z,{type:v.g.U32,view:h,name:"Usability Pointer",offset:12}),(0,b.jsx)(p.Z,{type:v.g.U32,view:h,name:"Unknown (guide?)",offset:16}),(0,b.jsx)(p.Z,{type:v.g.U32,view:h,name:"Routine/Effect",offset:20}),(0,b.jsx)(p.Z,{type:v.g.U32,view:h,name:"Unknown (zero)",offset:24}),(0,b.jsx)(p.Z,{type:v.g.U32,view:h,name:"Unknown Pointer (weapon rank?)",offset:28}),(0,b.jsx)(p.Z,{type:v.g.U32,view:h,name:"Unknown Pointer (weapon rank?)",offset:32}),(0,b.jsx)(u.Z,{children:(0,b.jsx)(c.Z,{})})]})}},49389:function(e,n,t){t.d(n,{Z:function(){return M}});var l=t(87462),a=t(4942),o=t(81694),r=t.n(o),i=t(72791),u=t(71929),c=t(91940),s=function(e){var n,t=(0,i.useContext)(u.E_),o=t.getPrefixCls,s=t.direction,f=e.prefixCls,v=e.className,d=void 0===v?"":v,p=o("input-group",f),x=r()(p,(n={},(0,a.Z)(n,"".concat(p,"-lg"),"large"===e.size),(0,a.Z)(n,"".concat(p,"-sm"),"small"===e.size),(0,a.Z)(n,"".concat(p,"-compact"),e.compact),(0,a.Z)(n,"".concat(p,"-rtl"),"rtl"===s),n),d),b=(0,i.useContext)(c.aM),m=(0,i.useMemo)((function(){return(0,l.Z)((0,l.Z)({},b),{isFormItemInput:!1})}),[b]);return i.createElement("span",{className:x,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.aM.Provider,{value:m},e.children))},f=t(45394),v=t(29439),d=t(1413),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},x=t(54291),b=function(e,n){return i.createElement(x.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:n,icon:p}))};b.displayName="EyeInvisibleOutlined";var m=i.forwardRef(b),Z=t(24215),y=t(41818),g=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]])}return t},w={click:"onClick",hover:"onMouseOver"},h=i.forwardRef((function(e,n){var t=(0,i.useState)(!1),o=(0,v.Z)(t,2),c=o[0],s=o[1],d=function(){e.disabled||s(!c)},p=function(t){var o=t.getPrefixCls,u=e.className,s=e.prefixCls,v=e.inputPrefixCls,p=e.size,x=e.visibilityToggle,b=g(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),m=o("input",v),Z=o("input-password",s),h=x&&function(n){var t,l=e.action,o=e.iconRender,r=w[l]||"",u=(void 0===o?function(){return null}:o)(c),s=(t={},(0,a.Z)(t,r,d),(0,a.Z)(t,"className","".concat(n,"-icon")),(0,a.Z)(t,"key","passwordIcon"),(0,a.Z)(t,"onMouseDown",(function(e){e.preventDefault()})),(0,a.Z)(t,"onMouseUp",(function(e){e.preventDefault()})),t);return i.cloneElement(i.isValidElement(u)?u:i.createElement("span",null,u),s)}(Z),C=r()(Z,u,(0,a.Z)({},"".concat(Z,"-").concat(p),!!p)),j=(0,l.Z)((0,l.Z)({},(0,y.Z)(b,["suffix","iconRender"])),{type:c?"text":"password",className:C,prefixCls:m,suffix:h});return p&&(j.size=p),i.createElement(f.ZP,(0,l.Z)({ref:n},j))};return i.createElement(u.C,null,p)}));h.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?i.createElement(Z.Z,null):i.createElement(m,null)}};var C=h,j=t(11730),S=t(88834),P=t(30435),k=t(1815),E=t(61113),O=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]])}return t};var T=i.forwardRef((function(e,n){var t,o,c=e.prefixCls,s=e.inputPrefixCls,v=e.className,d=e.size,p=e.suffix,x=e.enterButton,b=void 0!==x&&x,m=e.addonAfter,Z=e.loading,y=e.disabled,g=e.onSearch,w=e.onChange,h=e.onCompositionStart,C=e.onCompositionEnd,T=O(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),U=i.useContext(u.E_),z=U.getPrefixCls,M=U.direction,N=i.useContext(k.Z),A=i.useRef(!1),D=d||N,B=i.useRef(null),R=function(e){var n;document.activeElement===(null===(n=B.current)||void 0===n?void 0:n.input)&&e.preventDefault()},I=function(e){var n,t;g&&g(null===(t=null===(n=B.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},L=z("input-search",c),F=z("input",s),V="boolean"===typeof b?i.createElement(j.Z,null):null,_="".concat(L,"-button"),q=b||{},G=q.type&&!0===q.type.__ANT_BUTTON;o=G||"button"===q.type?(0,E.Tm)(q,(0,l.Z)({onMouseDown:R,onClick:function(e){var n,t;null===(t=null===(n=null===q||void 0===q?void 0:q.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),I(e)},key:"enterButton"},G?{className:_,size:D}:{})):i.createElement(P.Z,{className:_,type:b?"primary":void 0,size:D,disabled:y,key:"enterButton",onMouseDown:R,onClick:I,loading:Z,icon:V},b),m&&(o=[o,(0,E.Tm)(m,{key:"addonAfter"})]);var H=r()(L,(t={},(0,a.Z)(t,"".concat(L,"-rtl"),"rtl"===M),(0,a.Z)(t,"".concat(L,"-").concat(D),!!D),(0,a.Z)(t,"".concat(L,"-with-button"),!!b),t),v);return i.createElement(f.ZP,(0,l.Z)({ref:(0,S.sQ)(B,n),onPressEnter:function(e){A.current||I(e)}},T,{size:D,onCompositionStart:function(e){A.current=!0,null===h||void 0===h||h(e)},onCompositionEnd:function(e){A.current=!1,null===C||void 0===C||C(e)},prefixCls:F,addonAfter:o,suffix:p,onChange:function(e){e&&e.target&&"click"===e.type&&g&&g(e.target.value,e),w&&w(e)},className:H,disabled:y}))})),U=t(66920),z=f.ZP;z.Group=s,z.Search=T,z.TextArea=U.Z,z.Password=C;var M=z}}]);
//# sourceMappingURL=43038.99c58794.chunk.js.map