"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[44546],{53551:(e,l,a)=>{a.d(l,{A:()=>d});var t=a(89379),n=a(53986),s=a(17313),o=a(64435),r=a(41976),i=a(65043),u=a(35475),c=a(64004),f=a(70579);const v=["isHex","reference","view","name","offset","type","options"],{Text:p}=s.A;function d(e){const{isHex:l,reference:a,view:s,name:d,offset:b,type:x,options:m}=e,A=(0,n.A)(e,v),C=null==s?0:(0,c.LF)(s,b,x),[y,h]=(0,i.useState)(C);y!==C&&h(C);const g=m.find((e=>e.value===y)),w=l?"0x".concat(y.toString(16)):y,E=void 0===g?w:g.label;return(0,f.jsxs)(o.A,{children:[(0,f.jsx)(p,{disabled:null==s,children:"".concat(d,":").concat(null==s?"":" ".concat(E," \u2192"))}),(0,f.jsx)(r.A,(0,t.A)({disabled:null==s,showSearch:!0,options:m,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,c.M9)(s,b,x,e),h(e)}},A)),""===a||null==s?"":(0,f.jsx)(u.N_,{to:{pathname:"../".concat(a,"?id=").concat(y),state:s.buffer},children:"\u27a4"})]})}d.defaultProps={view:null,isHex:!1,reference:""}},90514:(e,l,a)=>{a.d(l,{A:()=>f});var t=a(89379),n=a(17313),s=a(64435),o=a(33307),r=a(65043),i=a(64004),u=a(70579);const{Text:c}=n.A;function f(e){const[l,a]=(0,r.useState)(""),{view:n,name:f,offset:v,type:p}=e,d=null==n?0:(0,i.LF)(n,v,p),[b,x]=(0,r.useState)(d);return b!==d&&x(d),(0,u.jsxs)(s.A,{children:[(0,u.jsx)(c,{disabled:null==n,children:"".concat(f,":").concat(null==n?"":" 0x".concat(b.toString(16)," \u2192"))}),(0,u.jsx)(o.A,(0,t.A)({disabled:null==n,allowClear:!0,maxLength:2*i.X1[p],prefix:"0x",value:l,onChange:e=>{const l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&a(l)},onPressEnter:e=>{const l=parseInt(e.target.value,16);(0,i.M9)(n,v,p,l),x(l)}},e))]})}f.defaultProps={view:null}},34871:(e,l,a)=>{a.d(l,{A:()=>o});var t=a(89379),n=a(41976),s=(a(65043),a(70579));function o(e){return(0,s.jsx)(n.A,(0,t.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},44546:(e,l,a)=>{a.r(l),a.d(l,{default:()=>x});a(65043);var t=a(73216),n=a(35475),s=a(64435),o=a(92135),r=a(33275),i=a(46974);const u=[{label:"0x8818300",value:0},{label:"0x8818320",value:1},{label:"0x8818340",value:2},{label:"0x8818360",value:3},{label:"0x8818380",value:4},{label:"0x88183A0",value:5},{label:"0x88183C0",value:6},{label:"0x88183E0",value:7},{label:"0x8818400",value:8},{label:"0x8818420",value:9},{label:"0x8818440",value:10},{label:"0x8818460",value:11},{label:"0x8818480",value:12},{label:"0x88184A0",value:13},{label:"0x88184C0",value:14},{label:"0x88184E0",value:15}],c=[{label:"Nothing",value:0},{label:"Roy Lord",value:1},{label:"Mercenary",value:2},{label:"Mercenary (F)",value:3},{label:"Hero",value:4},{label:"Hero (F)",value:5},{label:"Swordfighter",value:6},{label:"Swordfighter (F)",value:7},{label:"Swordmaster",value:8},{label:"Swordmaster (F)",value:9},{label:"Axefighter",value:10},{label:"Warrior",value:11},{label:"Armour Knight",value:12},{label:"Armour Knight (F)",value:13},{label:"General",value:14},{label:"General (F)",value:15},{label:"Archer",value:16},{label:"Archer (F)",value:17},{label:"Sniper",value:18},{label:"Sniper (F)",value:19},{label:"Priest",value:20},{label:"Sister",value:21},{label:"Bishop",value:22},{label:"Bishop (F)",value:23},{label:"Mage",value:24},{label:"Mage (F)",value:25},{label:"Sage",value:26},{label:"Sage (F)",value:27},{label:"Shaman",value:28},{label:"Shaman (F)",value:29},{label:"Druid",value:30},{label:"Druid (F)",value:31},{label:"Socialknight",value:32},{label:"Socialknight (F) (messed up palette)",value:33},{label:"Paladin",value:34},{label:"Paladin (F) (messed up palette)",value:35},{label:"Troubadour",value:36},{label:"Valkyrie",value:37},{label:"Nomad",value:38},{label:"Nomad (F)",value:39},{label:"Nomad Trooper",value:40},{label:"Nomad Trooper (F)",value:41},{label:"Pegasus Knight",value:42},{label:"Falcon Knight",value:43},{label:"Dragon Knight",value:44},{label:"Dragon Knight (F)",value:45},{label:"Dragon Master",value:46},{label:"Dragon Master (F)",value:47},{label:"Soldier",value:48},{label:"Mountain Thief",value:49},{label:"Pirate",value:50},{label:"Berserker",value:51},{label:"Thief",value:52},{label:"Thief (F)",value:53},{label:"Bard",value:54},{label:"Dancer",value:55},{label:"Mamkute",value:56},{label:"Mamkute (F)",value:57},{label:"Fire Dragon",value:58},{label:"Divine Dragon",value:59},{label:"Magic Dragon",value:60},{label:"King",value:61},{label:"Civilian",value:62},{label:"Civilian (F)",value:63},{label:"Child",value:64},{label:"Child (F)",value:65},{label:"Storage",value:66},{label:"Roy Master Lord",value:67},{label:"Archer on Long Arch",value:68},{label:"Archer on Iron Arch",value:69},{label:"Archer on Killer Arch",value:70},{label:"Long Arch",value:71},{label:"Iron Arch",value:72},{label:"Killer Arch",value:73},{label:"Disarmed Sniper (no standing sprites)",value:74},{label:"Disarmed Sniper (F) (no standing sprites)",value:75}];var f=a(64004),v=a(34871),p=a(53551),d=a(90514),b=a(70579);function x(){var e;const[l]=(0,t.KC)(),[a,x]=(0,n.ok)(),m=a.get("id");let A=null;try{A=new DataView(l,8487680+32*m,32)}catch(C){A=null}return(0,b.jsxs)(s.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,b.jsx)(o.A,{message:"FE6 Custom Promotion Pointer Editor by FA24",type:"info"}),(0,b.jsx)("div",{children:(0,b.jsx)(v.A,{disabled:null==A,defaultValue:null!==(e=u.find((e=>e.value.toString()===m)))&&void 0!==e?e:m,onSelect:e=>x({id:e}),options:u})},m),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 01",offset:0}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 02",offset:1}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 03",offset:2}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 04",offset:3}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 05",offset:4}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 06",offset:5}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 07",offset:6}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 08",offset:7}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 09",offset:8}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 10",offset:9}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 11",offset:10}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 12",offset:11}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 13",offset:12}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 14",offset:13}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 15",offset:14}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 16",offset:15}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 17",offset:16}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 18",offset:17}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 19",offset:18}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 20",offset:19}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 21",offset:20}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 22",offset:21}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 23",offset:22}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 24",offset:23}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 25",offset:24}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 26",offset:25}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 27",offset:26}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 28",offset:27}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 29",offset:28}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 30",offset:29}),(0,b.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:c,view:A,name:"Class 31",offset:30}),(0,b.jsx)(d.A,{type:f.pe.U8,view:A,name:"Zero",offset:31}),(0,b.jsx)(r.A,{children:(0,b.jsx)(i.A,{})})]})}},33307:(e,l,a)=>{a.d(l,{A:()=>k});var t=a(58168),n=a(64467),s=a(64600),o=a.n(s),r=a(65043),i=a(35296),u=a(16436);const c=function(e){var l,a=(0,r.useContext)(i.QO),s=a.getPrefixCls,c=a.direction,f=e.prefixCls,v=e.className,p=void 0===v?"":v,d=s("input-group",f),b=o()(d,(l={},(0,n.A)(l,"".concat(d,"-lg"),"large"===e.size),(0,n.A)(l,"".concat(d,"-sm"),"small"===e.size),(0,n.A)(l,"".concat(d,"-compact"),e.compact),(0,n.A)(l,"".concat(d,"-rtl"),"rtl"===c),l),p),x=(0,r.useContext)(u.$W),m=(0,r.useMemo)((function(){return(0,t.A)((0,t.A)({},x),{isFormItemInput:!1})}),[x]);return r.createElement("span",{className:b,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},r.createElement(u.$W.Provider,{value:m},e.children))};var f=a(28124),v=a(5544),p=a(89379);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var b=a(22172),x=function(e,l){return r.createElement(b.A,(0,p.A)((0,p.A)({},e),{},{ref:l,icon:d}))};x.displayName="EyeInvisibleOutlined";const m=r.forwardRef(x);var A=a(76191),C=a(18574),y=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]])}return a},h=function(e){return e?r.createElement(A.A,null):r.createElement(m,null)},g={click:"onClick",hover:"onMouseOver"};const w=r.forwardRef((function(e,l){var a=(0,r.useState)(!1),s=(0,v.A)(a,2),u=s[0],c=s[1],p=function(){e.disabled||c((function(e){return!e}))},d=function(a){var s=a.getPrefixCls,i=e.className,c=e.prefixCls,v=e.inputPrefixCls,d=e.size,b=e.visibilityToggle,x=void 0===b||b,m=y(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),A=s("input",v),w=s("input-password",c),E=x&&function(l){var a,t=e.action,s=void 0===t?"click":t,o=e.iconRender,i=g[s]||"",c=(void 0===o?h:o)(u),f=(a={},(0,n.A)(a,i,p),(0,n.A)(a,"className","".concat(l,"-icon")),(0,n.A)(a,"key","passwordIcon"),(0,n.A)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,n.A)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return r.cloneElement(r.isValidElement(c)?c:r.createElement("span",null,c),f)}(w),j=o()(w,i,(0,n.A)({},"".concat(w,"-").concat(d),!!d)),S=(0,t.A)((0,t.A)({},(0,C.A)(m,["suffix","iconRender"])),{type:u?"text":"password",className:j,prefixCls:A,suffix:E});return d&&(S.size=d),r.createElement(f.Ay,(0,t.A)({ref:l},S))};return r.createElement(i.TG,null,d)}));var E=a(62058),j=a(13758),S=a(11774),H=a(87063),F=a(12701),U=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]])}return a};const P=r.forwardRef((function(e,l){var a,s,u=e.prefixCls,c=e.inputPrefixCls,v=e.className,p=e.size,d=e.suffix,b=e.enterButton,x=void 0!==b&&b,m=e.addonAfter,A=e.loading,C=e.disabled,y=e.onSearch,h=e.onChange,g=e.onCompositionStart,w=e.onCompositionEnd,P=U(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),O=r.useContext(i.QO),M=O.getPrefixCls,k=O.direction,D=r.useContext(H.A),N=r.useRef(!1),T=p||D,z=r.useRef(null),L=function(e){var l;document.activeElement===(null===(l=z.current)||void 0===l?void 0:l.input)&&e.preventDefault()},B=function(e){var l,a;y&&y(null===(a=null===(l=z.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},K=M("input-search",u),I=M("input",c),R="boolean"===typeof x?r.createElement(E.A,null):null,Q="".concat(K,"-button"),q=x||{},G=q.type&&!0===q.type.__ANT_BUTTON;s=G||"button"===q.type?(0,F.Ob)(q,(0,t.A)({onMouseDown:L,onClick:function(e){var l,a;null===(a=null===(l=null===q||void 0===q?void 0:q.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),B(e)},key:"enterButton"},G?{className:Q,size:T}:{})):r.createElement(S.A,{className:Q,type:x?"primary":void 0,size:T,disabled:C,key:"enterButton",onMouseDown:L,onClick:B,loading:A,icon:R},x),m&&(s=[s,(0,F.Ob)(m,{key:"addonAfter"})]);var V=o()(K,(a={},(0,n.A)(a,"".concat(K,"-rtl"),"rtl"===k),(0,n.A)(a,"".concat(K,"-").concat(T),!!T),(0,n.A)(a,"".concat(K,"-with-button"),!!x),a),v);return r.createElement(f.Ay,(0,t.A)({ref:(0,j.K4)(z,l),onPressEnter:function(e){N.current||B(e)}},P,{size:T,onCompositionStart:function(e){N.current=!0,null===g||void 0===g||g(e)},onCompositionEnd:function(e){N.current=!1,null===w||void 0===w||w(e)},prefixCls:I,addonAfter:s,suffix:d,onChange:function(e){e&&e.target&&"click"===e.type&&y&&y(e.target.value,e),h&&h(e)},className:V,disabled:C}))}));var O=a(42471),M=f.Ay;M.Group=c,M.Search=P,M.TextArea=O.A,M.Password=w;const k=M}}]);
//# sourceMappingURL=44546.cc06d199.chunk.js.map