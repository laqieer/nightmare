"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[67383],{53551:(e,l,a)=>{a.d(l,{A:()=>f});var n=a(89379),t=a(53986),r=a(17313),o=a(64435),i=a(41976),u=a(65043),s=a(35475),v=a(64004),c=a(70579);const b=["isHex","reference","view","name","offset","type","options"],{Text:d}=r.A;function f(e){const{isHex:l,reference:a,view:r,name:f,offset:p,type:m,options:h}=e,g=(0,t.A)(e,b),A=null==r?0:(0,v.LF)(r,p,m),[y,x]=(0,u.useState)(A);y!==A&&x(A);const M=h.find((e=>e.value===y)),E=l?"0x".concat(y.toString(16)):y,w=void 0===M?E:M.label;return(0,c.jsxs)(o.A,{children:[(0,c.jsx)(d,{disabled:null==r,children:"".concat(f,":").concat(null==r?"":" ".concat(w," \u2192"))}),(0,c.jsx)(i.A,(0,n.A)({disabled:null==r,showSearch:!0,options:h,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,v.M9)(r,p,m,e),x(e)}},g)),""===a||null==r?"":(0,c.jsx)(s.N_,{to:{pathname:"../".concat(a,"?id=").concat(y),state:r.buffer},children:"\u27a4"})]})}f.defaultProps={view:null,isHex:!1,reference:""}},83837:(e,l,a)=>{a.d(l,{A:()=>c});var n=a(89379),t=a(17313),r=a(64435),o=a(33307),i=a(65043),u=a(64004),s=a(70579);const{Text:v}=t.A;function c(e){const[l,a]=(0,i.useState)(""),{view:t,name:c,offset:b,length:d}=e,f=null==t?"":(0,u.LF)(t,b,u.pe.HEXA,d),[p,m]=(0,i.useState)(f);return p!==f&&m(f),(0,s.jsxs)(r.A,{children:[(0,s.jsx)(v,{disabled:null==t,children:"".concat(c,":").concat(null==t?"":" ".concat(p," \u2192"))}),(0,s.jsx)(o.A,(0,n.A)({disabled:null==t,allowClear:!0,value:l,maxLength:3*d-1,onChange:e=>{const l=e.currentTarget.value;""!==l&&(!/^[0-9a-f ]+$/.test(l)||/[0-9a-f]{3,}/.test(l)||/ {2,}/.test(l)||/ [0-9a-f] /.test(l)||/^[0-9a-f] /.test(l))||a(l.trimStart())},onPressEnter:e=>{const l=e.target.value.trim();(0,u.M9)(t,b,u.pe.HEXA,l),m(l)}},e))]})}c.defaultProps={view:null}},34871:(e,l,a)=>{a.d(l,{A:()=>o});var n=a(89379),t=a(41976),r=(a(65043),a(70579));function o(e){return(0,r.jsx)(t.A,(0,n.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},67383:(e,l,a)=>{a.r(l),a.d(l,{default:()=>h});a(65043);var n=a(73216),t=a(35475),r=a(64435),o=a(92135),i=a(33275),u=a(46974);const s=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8},{label:"Entry 9",value:9},{label:"Entry 10",value:10},{label:"Entry 11",value:11},{label:"Entry 12",value:12},{label:"Entry 13",value:13},{label:"Entry 14",value:14},{label:"Entry 15",value:15},{label:"Entry 16",value:16},{label:"Entry 17",value:17},{label:"Entry 18",value:18},{label:"Entry 19",value:19},{label:"Entry 20",value:20},{label:"Entry 21",value:21},{label:"Entry 22",value:22},{label:"Entry 23",value:23},{label:"Entry 24",value:24},{label:"Entry 25",value:25},{label:"Entry 26",value:26},{label:"Entry 27",value:27},{label:"Entry 28",value:28},{label:"Entry 29",value:29}],v=[{label:"Male",value:0},{label:"Female",value:1},{label:"None (Generic Enemies)",value:255}],c=[{label:"Mage Female",value:0},{label:"Mage Male",value:1},{label:"Priest Female",value:2},{label:"Lord",value:3},{label:"Sword Fighter Male",value:4},{label:"Lance Armor",value:5},{label:"Barbarian",value:6},{label:"Bow Fighter Male",value:7},{label:"Soldier",value:8},{label:"Bow Fighter Female",value:9},{label:"Axe Armor",value:10},{label:"Archer",value:11},{label:"Dancer",value:12},{label:"Sword Fighter Female",value:13},{label:"Princess",value:14},{label:"Thief Male",value:15},{label:"General",value:16},{label:"Shaman",value:17},{label:"Axe Fighter",value:18},{label:"Wind Mage Male",value:19},{label:"Wind Mage Female",value:20},{label:"Priest Male",value:21},{label:"Hunter",value:22},{label:"Sword Master Male",value:23},{label:"Forrest Male",value:24},{label:"Warrior",value:25},{label:"Mountain Thief",value:26},{label:"Pirate",value:27},{label:"Forrest Female",value:28},{label:"Baron",value:29},{label:"High Priest Female",value:30},{label:"Sword Master Female",value:31},{label:"Sniper Female",value:32},{label:"Sniper Male",value:33},{label:"Emperor",value:34},{label:"Sword Soldier",value:35},{label:"Axe Soldier",value:36},{label:"Spear Soldier",value:37},{label:"Sword Armor",value:38},{label:"Bow Armor",value:39},{label:"Fire Mage Female",value:40},{label:"Fire Mage Male",value:41},{label:"Thunder Mage Female",value:42},{label:"Thunder Mage Male",value:43},{label:"High Priest Male",value:44},{label:"Mage Fighter Female",value:45},{label:"Dark Bishop",value:46},{label:"Dark Mage",value:47},{label:"Prince",value:48},{label:"Mage Fighter Male",value:49},{label:"Kid Female",value:50},{label:"Kid Male",value:51},{label:"Queen",value:52},{label:"Bishop",value:53},{label:"Civilian Male",value:54},{label:"Civilian Female",value:55},{label:"Thief Fighter Female",value:56},{label:"Bard",value:57},{label:"Thief Female",value:58},{label:"Thief Fighter Male",value:59},{label:"Sage Male",value:60},{label:"Sage Female",value:61},{label:"Dark Prince",value:62},{label:"Shannan Kid",value:63},{label:"Dragon Rider Male",value:32768},{label:"Social Knight",value:32769},{label:"Pegasus Rider",value:32770},{label:"Duke Knight",value:32771},{label:"Axe Knight",value:32772},{label:"Free Knight",value:32773},{label:"Arch Knight",value:32774},{label:"Lance Knight",value:32775},{label:"Lord Knight Celice",value:32776},{label:"Troubadour",value:32777},{label:"Lord Knight Sigurd",value:32778},{label:"Paladin Male",value:32779},{label:"Dragon Master Male",value:32780},{label:"Bow Knight",value:32781},{label:"Great Knight",value:32782},{label:"Mage Knight Male",value:32783},{label:"Dragon Knight Male",value:32784},{label:"Pegasus Knight",value:32785},{label:"Falcon Knight",value:32786},{label:"Master Knight Male",value:32787},{label:"Forrest Knight",value:32788},{label:"Long Arch",value:32789},{label:"Iron Arch",value:32790},{label:"Killer Arch",value:32791},{label:"Great Arch",value:32792},{label:"Dragon Rider Female",value:32793},{label:"Dragon Rider Female",value:32794},{label:"Dragon Master Female",value:32795},{label:"Paladin Female",value:32796},{label:"Mage Knight Female",value:32797},{label:"Master Knight Female",value:32798}];var b=a(64004),d=a(34871),f=a(83837),p=a(53551),m=a(70579);function h(){var e;const[l]=(0,n.KC)(),[a,h]=(0,t.ok)(),g=a.get("id");let A=null;try{A=new DataView(l,230126+20*g,20)}catch(y){A=null}return(0,m.jsxs)(r.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,m.jsx)(o.A,{message:"Fe4 Map Sprite Editor",type:"info"}),(0,m.jsx)("div",{children:(0,m.jsx)(d.A,{disabled:null==A,defaultValue:null!==(e=s.find((e=>e.value.toString()===g)))&&void 0!==e?e:g,onSelect:e=>h({id:e}),options:s})},g),(0,m.jsx)(f.A,{length:2,view:A,name:"Char no 1",offset:0}),(0,m.jsx)(p.A,{isHex:!0,type:b.pe.U8,options:v,view:A,name:"Gender",offset:2}),(0,m.jsx)(p.A,{isHex:!0,type:b.pe.U16,options:c,view:A,name:"Sprite",offset:3}),(0,m.jsx)(f.A,{length:2,view:A,name:"Char no 2",offset:5}),(0,m.jsx)(p.A,{isHex:!0,type:b.pe.U8,options:v,view:A,name:"Gender",offset:7}),(0,m.jsx)(p.A,{isHex:!0,type:b.pe.U16,options:c,view:A,name:"Sprite",offset:8}),(0,m.jsx)(f.A,{length:2,view:A,name:"Char no 3",offset:10}),(0,m.jsx)(p.A,{isHex:!0,type:b.pe.U8,options:v,view:A,name:"Gender",offset:12}),(0,m.jsx)(p.A,{isHex:!0,type:b.pe.U16,options:c,view:A,name:"Sprite",offset:13}),(0,m.jsx)(f.A,{length:2,view:A,name:"Char no 4",offset:15}),(0,m.jsx)(p.A,{isHex:!0,type:b.pe.U8,options:v,view:A,name:"Gender",offset:17}),(0,m.jsx)(p.A,{isHex:!0,type:b.pe.U16,options:c,view:A,name:"Sprite",offset:18}),(0,m.jsx)(i.A,{children:(0,m.jsx)(u.A,{})})]})}},33307:(e,l,a)=>{a.d(l,{A:()=>D});var n=a(58168),t=a(64467),r=a(64600),o=a.n(r),i=a(65043),u=a(35296),s=a(16436);const v=function(e){var l,a=(0,i.useContext)(u.QO),r=a.getPrefixCls,v=a.direction,c=e.prefixCls,b=e.className,d=void 0===b?"":b,f=r("input-group",c),p=o()(f,(l={},(0,t.A)(l,"".concat(f,"-lg"),"large"===e.size),(0,t.A)(l,"".concat(f,"-sm"),"small"===e.size),(0,t.A)(l,"".concat(f,"-compact"),e.compact),(0,t.A)(l,"".concat(f,"-rtl"),"rtl"===v),l),d),m=(0,i.useContext)(s.$W),h=(0,i.useMemo)((function(){return(0,n.A)((0,n.A)({},m),{isFormItemInput:!1})}),[m]);return i.createElement("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(s.$W.Provider,{value:h},e.children))};var c=a(28124),b=a(5544),d=a(89379);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var p=a(22172),m=function(e,l){return i.createElement(p.A,(0,d.A)((0,d.A)({},e),{},{ref:l,icon:f}))};m.displayName="EyeInvisibleOutlined";const h=i.forwardRef(m);var g=a(76191),A=a(18574),y=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a},x=function(e){return e?i.createElement(g.A,null):i.createElement(h,null)},M={click:"onClick",hover:"onMouseOver"};const E=i.forwardRef((function(e,l){var a=(0,i.useState)(!1),r=(0,b.A)(a,2),s=r[0],v=r[1],d=function(){e.disabled||v((function(e){return!e}))},f=function(a){var r=a.getPrefixCls,u=e.className,v=e.prefixCls,b=e.inputPrefixCls,f=e.size,p=e.visibilityToggle,m=void 0===p||p,h=y(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),g=r("input",b),E=r("input-password",v),w=m&&function(l){var a,n=e.action,r=void 0===n?"click":n,o=e.iconRender,u=M[r]||"",v=(void 0===o?x:o)(s),c=(a={},(0,t.A)(a,u,d),(0,t.A)(a,"className","".concat(l,"-icon")),(0,t.A)(a,"key","passwordIcon"),(0,t.A)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,t.A)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return i.cloneElement(i.isValidElement(v)?v:i.createElement("span",null,v),c)}(E),S=o()(E,u,(0,t.A)({},"".concat(E,"-").concat(f),!!f)),F=(0,n.A)((0,n.A)({},(0,A.A)(h,["suffix","iconRender"])),{type:s?"text":"password",className:S,prefixCls:g,suffix:w});return f&&(F.size=f),i.createElement(c.Ay,(0,n.A)({ref:l},F))};return i.createElement(u.TG,null,f)}));var w=a(62058),S=a(13758),F=a(11774),C=a(87063),j=a(12701),P=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};const O=i.forwardRef((function(e,l){var a,r,s=e.prefixCls,v=e.inputPrefixCls,b=e.className,d=e.size,f=e.suffix,p=e.enterButton,m=void 0!==p&&p,h=e.addonAfter,g=e.loading,A=e.disabled,y=e.onSearch,x=e.onChange,M=e.onCompositionStart,E=e.onCompositionEnd,O=P(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),K=i.useContext(u.QO),k=K.getPrefixCls,D=K.direction,T=i.useContext(C.A),B=i.useRef(!1),L=d||T,H=i.useRef(null),N=function(e){var l;document.activeElement===(null===(l=H.current)||void 0===l?void 0:l.input)&&e.preventDefault()},z=function(e){var l,a;y&&y(null===(a=null===(l=H.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},R=k("input-search",s),G=k("input",v),U="boolean"===typeof m?i.createElement(w.A,null):null,I="".concat(R,"-button"),Q=m||{},W=Q.type&&!0===Q.type.__ANT_BUTTON;r=W||"button"===Q.type?(0,j.Ob)(Q,(0,n.A)({onMouseDown:N,onClick:function(e){var l,a;null===(a=null===(l=null===Q||void 0===Q?void 0:Q.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),z(e)},key:"enterButton"},W?{className:I,size:L}:{})):i.createElement(F.A,{className:I,type:m?"primary":void 0,size:L,disabled:A,key:"enterButton",onMouseDown:N,onClick:z,loading:g,icon:U},m),h&&(r=[r,(0,j.Ob)(h,{key:"addonAfter"})]);var q=o()(R,(a={},(0,t.A)(a,"".concat(R,"-rtl"),"rtl"===D),(0,t.A)(a,"".concat(R,"-").concat(L),!!L),(0,t.A)(a,"".concat(R,"-with-button"),!!m),a),b);return i.createElement(c.Ay,(0,n.A)({ref:(0,S.K4)(H,l),onPressEnter:function(e){B.current||z(e)}},O,{size:L,onCompositionStart:function(e){B.current=!0,null===M||void 0===M||M(e)},onCompositionEnd:function(e){B.current=!1,null===E||void 0===E||E(e)},prefixCls:G,addonAfter:r,suffix:f,onChange:function(e){e&&e.target&&"click"===e.type&&y&&y(e.target.value,e),x&&x(e)},className:q,disabled:A}))}));var K=a(42471),k=c.Ay;k.Group=v,k.Search=O,k.TextArea=K.A,k.Password=E;const D=k}}]);
//# sourceMappingURL=67383.2b095778.chunk.js.map