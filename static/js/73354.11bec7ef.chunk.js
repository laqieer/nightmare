"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[73354],{4220:function(e,l,a){a.d(l,{Z:function(){return d}});var t=a(1413),n=a(29439),r=a(44925),u=a(97788),o=a(83099),i=a(21951),c=a(72791),s=a(11087),v=a(83282),b=a(80184),p=["isHex","reference","view","name","offset","type","options"],f=u.Z.Text;function d(e){var l=e.isHex,a=e.reference,u=e.view,d=e.name,y=e.offset,E=e.type,h=e.options,C=(0,r.Z)(e,p),x=null==u?0:(0,v.ij)(u,y,E),m=(0,c.useState)(x),Z=(0,n.Z)(m,2),g=Z[0],w=Z[1];g!==x&&w(x);var j=h.find((function(e){return e.value===g})),P=l?"0x".concat(g.toString(16)):g,S=void 0===j?P:j.label;return(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(f,{disabled:null==u,children:"".concat(d,":").concat(null==u?"":" ".concat(S," \u2192"))}),(0,b.jsx)(i.Z,(0,t.Z)({disabled:null==u,showSearch:!0,options:h,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)},onSelect:function(e){(0,v.cW)(u,y,E,e),w(e)}},C)),""===a||null==u?"":(0,b.jsx)(s.rU,{to:{pathname:"../".concat(a,"?id=").concat(g),state:u.buffer},children:"\u27a4"})]})}d.defaultProps={view:null,isHex:!1,reference:""}},23145:function(e,l,a){a.d(l,{Z:function(){return b}});var t=a(1413),n=a(29439),r=a(97788),u=a(83099),o=a(49389),i=a(72791),c=a(83282),s=a(80184),v=r.Z.Text;function b(e){var l=(0,i.useState)(""),a=(0,n.Z)(l,2),r=a[0],b=a[1],p=e.view,f=e.name,d=e.offset,y=e.type,E=null==p?0:(0,c.ij)(p,d,y),h=(0,i.useState)(E),C=(0,n.Z)(h,2),x=C[0],m=C[1];return x!==E&&m(E),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(v,{disabled:null==p,children:"".concat(f,":").concat(null==p?"":" 0x".concat(x.toString(16)," \u2192"))}),(0,s.jsx)(o.Z,(0,t.Z)({disabled:null==p,allowClear:!0,maxLength:2*c.Tz[y],prefix:"0x",value:r,onChange:function(e){var l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&b(l)},onPressEnter:function(e){var l=parseInt(e.target.value,16);(0,c.cW)(p,d,y,l),m(l)}},e))]})}b.defaultProps={view:null}},9933:function(e,l,a){a.d(l,{Z:function(){return u}});var t=a(1413),n=a(21951),r=(a(72791),a(80184));function u(e){return(0,r.jsx)(n.Z,(0,t.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)}},e))}},73354:function(e,l,a){a.r(l),a.d(l,{default:function(){return E}});var t=a(29439),n=(a(72791),a(57689)),r=a(11087),u=a(83099),o=a(33441),i=a(43292),c=a(79042),s=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8},{label:"Entry 9",value:9},{label:"Entry 10",value:10},{label:"Entry 11",value:11},{label:"Entry 12",value:12},{label:"Entry 13",value:13},{label:"Entry 14",value:14},{label:"Entry 15",value:15},{label:"Entry 16",value:16},{label:"Entry 17",value:17},{label:"Entry 18",value:18},{label:"Entry 19",value:19},{label:"Entry 20",value:20},{label:"Entry 21",value:21},{label:"Entry 22",value:22},{label:"Entry 23",value:23},{label:"Entry 24",value:24},{label:"Entry 25",value:25},{label:"Entry 26",value:26},{label:"Entry 27",value:27},{label:"Entry 28",value:28},{label:"Entry 29",value:29},{label:"Entry 30",value:30},{label:"Entry 31",value:31},{label:"Entry 32",value:32},{label:"Entry 33",value:33},{label:"Entry 34",value:34},{label:"Entry 35",value:35},{label:"Entry 36",value:36},{label:"Entry 37",value:37},{label:"Entry 38",value:38},{label:"Entry 39",value:39},{label:"Entry 40",value:40},{label:"Entry 41",value:41},{label:"Entry 42",value:42},{label:"Entry 43",value:43},{label:"Entry 44",value:44},{label:"Entry 45",value:45},{label:"Entry 46",value:46},{label:"Entry 47",value:47},{label:"Entry 48",value:48},{label:"Entry 49",value:49},{label:"Entry 50",value:50},{label:"Entry 51",value:51},{label:"Entry 52",value:52},{label:"Entry 53",value:53},{label:"Entry 54",value:54},{label:"Entry 55",value:55},{label:"Entry 56",value:56},{label:"Entry 57",value:57},{label:"Entry 58",value:58}],v=[{label:"Chapter 1",value:0},{label:"Chapter 2",value:1},{label:"Chapter 2x",value:2},{label:"Chapter 3",value:3},{label:"Chapter 4",value:4},{label:"Chapter 4x",value:5},{label:"Chapter 5",value:6},{label:"Chapter 6",value:7},{label:"Chapter 7",value:8},{label:"Chapter 8",value:9},{label:"Chapter 8x",value:10},{label:"Chapter 9",value:11},{label:"Chapter 10",value:12},{label:"Chapter 11",value:13},{label:"Chapter 11x",value:14},{label:"Chapter 12",value:15},{label:"Chapter 12x",value:16},{label:"Chapter 13",value:17},{label:"Chapter 14",value:18},{label:"Chapter 14x",value:19},{label:"Chapter 15",value:20},{label:"Chapter 16A",value:21},{label:"Chapter 17A",value:22},{label:"Chapter 16B",value:23},{label:"Chapter 17B",value:24},{label:"Chapter 18",value:25},{label:"Chapter 19",value:26},{label:"Chapter 20",value:27},{label:"Chapter 21",value:28},{label:"Chapter 21x",value:29},{label:"Chapter 22",value:30},{label:"Chapter 23",value:31},{label:"Chapter 24",value:32},{label:"Chapter 24x",value:33},{label:"Final Chapter",value:34},{label:"Epilogue",value:35},{label:"Overworld",value:36}],b=a(83282),p=a(9933),f=a(23145),d=a(4220),y=a(80184);function E(){var e,l=(0,n.bx)(),a=(0,t.Z)(l,1)[0],E=(0,r.lr)(),h=(0,t.Z)(E,2),C=h[0],x=h[1],m=C.get("id"),Z=null;try{Z=new DataView(a,417632+7*m,7)}catch(g){Z=null}return(0,y.jsxs)(u.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,y.jsx)(o.Z,{message:"FE5 Escape Quote Editor",type:"info"}),(0,y.jsx)("div",{children:(0,y.jsx)(p.Z,{disabled:null==Z,defaultValue:null!==(e=s.find((function(e){return e.value.toString()===m})))&&void 0!==e?e:m,onSelect:function(e){return x({id:e})},options:s})},m),(0,y.jsx)(f.Z,{type:b.g.U16,view:Z,name:"Character",offset:0}),(0,y.jsx)(d.Z,{isHex:!0,type:b.g.U8,options:v,view:Z,name:"Chapter",offset:2}),(0,y.jsx)(f.Z,{type:b.g.U8,view:Z,name:"Event ID",offset:3}),(0,y.jsx)(f.Z,{type:b.g.U32,view:Z,name:"Pointer",offset:4}),(0,y.jsx)(i.Z,{children:(0,y.jsx)(c.Z,{})})]})}},49389:function(e,l,a){a.d(l,{Z:function(){return T}});var t=a(87462),n=a(4942),r=a(81694),u=a.n(r),o=a(72791),i=a(71929),c=a(91940),s=function(e){var l,a=(0,o.useContext)(i.E_),r=a.getPrefixCls,s=a.direction,v=e.prefixCls,b=e.className,p=void 0===b?"":b,f=r("input-group",v),d=u()(f,(l={},(0,n.Z)(l,"".concat(f,"-lg"),"large"===e.size),(0,n.Z)(l,"".concat(f,"-sm"),"small"===e.size),(0,n.Z)(l,"".concat(f,"-compact"),e.compact),(0,n.Z)(l,"".concat(f,"-rtl"),"rtl"===s),l),p),y=(0,o.useContext)(c.aM),E=(0,o.useMemo)((function(){return(0,t.Z)((0,t.Z)({},y),{isFormItemInput:!1})}),[y]);return o.createElement("span",{className:d,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},o.createElement(c.aM.Provider,{value:E},e.children))},v=a(45394),b=a(29439),p=a(1413),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},d=a(54291),y=function(e,l){return o.createElement(d.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:l,icon:f}))};y.displayName="EyeInvisibleOutlined";var E=o.forwardRef(y),h=a(24215),C=a(41818),x=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]])}return a},m={click:"onClick",hover:"onMouseOver"},Z=o.forwardRef((function(e,l){var a=(0,o.useState)(!1),r=(0,b.Z)(a,2),c=r[0],s=r[1],p=function(){e.disabled||s(!c)},f=function(a){var r=a.getPrefixCls,i=e.className,s=e.prefixCls,b=e.inputPrefixCls,f=e.size,d=e.visibilityToggle,y=x(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),E=r("input",b),h=r("input-password",s),Z=d&&function(l){var a,t=e.action,r=e.iconRender,u=m[t]||"",i=(void 0===r?function(){return null}:r)(c),s=(a={},(0,n.Z)(a,u,p),(0,n.Z)(a,"className","".concat(l,"-icon")),(0,n.Z)(a,"key","passwordIcon"),(0,n.Z)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,n.Z)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return o.cloneElement(o.isValidElement(i)?i:o.createElement("span",null,i),s)}(h),g=u()(h,i,(0,n.Z)({},"".concat(h,"-").concat(f),!!f)),w=(0,t.Z)((0,t.Z)({},(0,C.Z)(y,["suffix","iconRender"])),{type:c?"text":"password",className:g,prefixCls:E,suffix:Z});return f&&(w.size=f),o.createElement(v.ZP,(0,t.Z)({ref:l},w))};return o.createElement(i.C,null,f)}));Z.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?o.createElement(h.Z,null):o.createElement(E,null)}};var g=Z,w=a(11730),j=a(88834),P=a(23707),S=a(1815),O=a(61113),z=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]])}return a};var k=o.forwardRef((function(e,l){var a,r,c=e.prefixCls,s=e.inputPrefixCls,b=e.className,p=e.size,f=e.suffix,d=e.enterButton,y=void 0!==d&&d,E=e.addonAfter,h=e.loading,C=e.disabled,x=e.onSearch,m=e.onChange,Z=e.onCompositionStart,g=e.onCompositionEnd,k=z(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),M=o.useContext(i.E_),N=M.getPrefixCls,T=M.direction,B=o.useContext(S.Z),A=o.useRef(!1),L=p||B,D=o.useRef(null),I=function(e){var l;document.activeElement===(null===(l=D.current)||void 0===l?void 0:l.input)&&e.preventDefault()},R=function(e){var l,a;x&&x(null===(a=null===(l=D.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},F=N("input-search",c),U=N("input",s),Q="boolean"===typeof y?o.createElement(w.Z,null):null,_="".concat(F,"-button"),q=y||{},H=q.type&&!0===q.type.__ANT_BUTTON;r=H||"button"===q.type?(0,O.Tm)(q,(0,t.Z)({onMouseDown:I,onClick:function(e){var l,a;null===(a=null===(l=null===q||void 0===q?void 0:q.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),R(e)},key:"enterButton"},H?{className:_,size:L}:{})):o.createElement(P.Z,{className:_,type:y?"primary":void 0,size:L,disabled:C,key:"enterButton",onMouseDown:I,onClick:R,loading:h,icon:Q},y),E&&(r=[r,(0,O.Tm)(E,{key:"addonAfter"})]);var V=u()(F,(a={},(0,n.Z)(a,"".concat(F,"-rtl"),"rtl"===T),(0,n.Z)(a,"".concat(F,"-").concat(L),!!L),(0,n.Z)(a,"".concat(F,"-with-button"),!!y),a),b);return o.createElement(v.ZP,(0,t.Z)({ref:(0,j.sQ)(D,l),onPressEnter:function(e){A.current||R(e)}},k,{size:L,onCompositionStart:function(e){A.current=!0,null===Z||void 0===Z||Z(e)},onCompositionEnd:function(e){A.current=!1,null===g||void 0===g||g(e)},prefixCls:U,addonAfter:r,suffix:f,onChange:function(e){e&&e.target&&"click"===e.type&&x&&x(e.target.value,e),m&&m(e)},className:V,disabled:C}))})),M=a(66920),N=v.ZP;N.Group=s,N.Search=k,N.TextArea=M.Z,N.Password=g;var T=N}}]);
//# sourceMappingURL=73354.11bec7ef.chunk.js.map