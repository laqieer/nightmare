"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[38164],{86357:(e,l,a)=>{a.d(l,{A:()=>v});var n=a(89379),t=a(17313),o=a(64435),r=a(3428),i=a(65043),s=a(64004),u=a(70579);const{Text:c}=t.A;function v(e){const{view:l,name:a,offset:t,type:v}=e,b=null==l?0:(0,s.LF)(l,t,v),[d,f]=(0,i.useState)(b);return d!==b&&f(b),(0,u.jsxs)(o.A,{children:[(0,u.jsx)(c,{disabled:null==l,children:"".concat(a,":").concat(null==l?"":" ".concat(d," \u2192"))}),(0,u.jsx)(r.A,(0,n.A)({disabled:null==l,min:s.Wb[v][0],max:s.Wb[v][1],onPressEnter:e=>{const a=parseInt(e.target.value,10);(0,s.M9)(l,t,v,a),f(a)}},e))]})}v.defaultProps={view:null}},53551:(e,l,a)=>{a.d(l,{A:()=>f});var n=a(89379),t=a(53986),o=a(17313),r=a(64435),i=a(41976),s=a(65043),u=a(35475),c=a(64004),v=a(70579);const b=["isHex","reference","view","name","offset","type","options"],{Text:d}=o.A;function f(e){const{isHex:l,reference:a,view:o,name:f,offset:p,type:x,options:m}=e,A=(0,t.A)(e,b),h=null==o?0:(0,c.LF)(o,p,x),[g,y]=(0,s.useState)(h);g!==h&&y(h);const C=m.find((e=>e.value===g)),S=l?"0x".concat(g.toString(16)):g,w=void 0===C?S:C.label;return(0,v.jsxs)(r.A,{children:[(0,v.jsx)(d,{disabled:null==o,children:"".concat(f,":").concat(null==o?"":" ".concat(w," \u2192"))}),(0,v.jsx)(i.A,(0,n.A)({disabled:null==o,showSearch:!0,options:m,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,c.M9)(o,p,x,e),y(e)}},A)),""===a||null==o?"":(0,v.jsx)(u.N_,{to:{pathname:"../".concat(a,"?id=").concat(g),state:o.buffer},children:"\u27a4"})]})}f.defaultProps={view:null,isHex:!1,reference:""}},90514:(e,l,a)=>{a.d(l,{A:()=>v});var n=a(89379),t=a(17313),o=a(64435),r=a(33307),i=a(65043),s=a(64004),u=a(70579);const{Text:c}=t.A;function v(e){const[l,a]=(0,i.useState)(""),{view:t,name:v,offset:b,type:d}=e,f=null==t?0:(0,s.LF)(t,b,d),[p,x]=(0,i.useState)(f);return p!==f&&x(f),(0,u.jsxs)(o.A,{children:[(0,u.jsx)(c,{disabled:null==t,children:"".concat(v,":").concat(null==t?"":" 0x".concat(p.toString(16)," \u2192"))}),(0,u.jsx)(r.A,(0,n.A)({disabled:null==t,allowClear:!0,maxLength:2*s.X1[d],prefix:"0x",value:l,onChange:e=>{const l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&a(l)},onPressEnter:e=>{const l=parseInt(e.target.value,16);(0,s.M9)(t,b,d,l),x(l)}},e))]})}v.defaultProps={view:null}},34871:(e,l,a)=>{a.d(l,{A:()=>r});var n=a(89379),t=a(41976),o=(a(65043),a(70579));function r(e){return(0,o.jsx)(t.A,(0,n.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},38164:(e,l,a)=>{a.r(l),a.d(l,{default:()=>A});a(65043);var n=a(73216),t=a(35475),o=a(64435),r=a(92135),i=a(33275),s=a(46974);const u=[{label:"0x00 Debug Map",value:0},{label:"0x01 1-1: Marth Embarks",value:1},{label:"0x02 1-3: A Brush in The Teeth",value:2},{label:"0x03 1-4: Champion of Aurelis",value:3},{label:"0x04 1-5: Fire Emblem",value:4},{label:"0x05 1-6: Lefcandith Gauntlet",value:5},{label:"0x06 1-8: Princess Minerva",value:6},{label:"0x07 1-9: Knorda Slave Market",value:7},{label:"0x08 1-10: The Ageless Palace",value:8},{label:"0x09 1-11: Land of Sorrow",value:9},{label:"0x0A 1-12: An Oasis of Magic",value:10},{label:"0x0B 1-13: The Battle for Altea",value:11},{label:"0x0C 1-14: Star and Savior",value:12},{label:"0x0D 1-15: Manakete Princess",value:13},{label:"0x0E 1-16: Camus the Sable",value:14},{label:"0x0F 1-17: A Knight-Filled Sky",value:15},{label:"0x10 1-18: Dark Pontifex",value:16},{label:"0x11 1-20: Chosen by Fate",value:17},{label:"0x12 2-1: The Grustian Expedition",value:18},{label:"0x13 2-18: Battle of the Pass",value:19},{label:"0x14 2-4: Joy and Sorrow",value:20},{label:"0x15 2-2: Rebellion at Macedon",value:21},{label:"0x16 2-3: Abducted Princess",value:22},{label:"0x17 Cutscene?",value:23},{label:"0x18 2-5: Liberation of Grust",value:24},{label:"0x19 2-6: The Nest of Evil",value:25},{label:"0x1A 2-7: The Scarlet Swordsman",value:26},{label:"0x1B Cutscene?",value:27},{label:"0x1C 2-8: Soulful Bridge",value:28},{label:"0x1D 2-9: Sanctuary of Sorcery",value:29},{label:"0x1E 2-10: Two Sorcerers",value:30},{label:"0x1F 2-15: Return of the Prince",value:31},{label:"0x20 2-16: Regaining the Capital",value:32},{label:"0x21 2-11: Anri's Way",value:33},{label:"0x22 Cutscene?",value:34},{label:"0x23 2-12: Graveyard of Fire Dragons",value:35},{label:"0x24 2-13: Frozen Land",value:36},{label:"0x25 2-14: A Mystery Revealed",value:37},{label:"0x26 2-17: Gra's Sun Sets",value:38},{label:"0x27 2-21: The Wyvern's Dale",value:39},{label:"0x28 2-19: The Last Decisive Battle",value:40},{label:"0x29 2-20: Dark Emperor",value:41},{label:"0x2A Dragon's Table: Part 1",value:42},{label:"0x2B Dragon's Table: Part 2",value:43},{label:"0x2C Dragon's Table: Part 3",value:44},{label:"0x2D 1-2: The Pirates of Galder",value:45},{label:"0x2E 1-7: The Scarlet Sword",value:46},{label:"0x2F 1-19: The Dragonkin Realm",value:47}],c=[{label:"Lord",value:0},{label:"Fighter",value:1},{label:"Soldier",value:2},{label:"Cavalier",value:3},{label:"Paladin",value:4},{label:"Dismounted Knight (Male)",value:5},{label:"Dismounted Knight (Female)",value:6},{label:"Armor Knight",value:7},{label:"General",value:8},{label:"Pegasus Knight",value:9},{label:"Dracoknight",value:10},{label:"Hunter",value:11},{label:"Sniper",value:12},{label:"Archer",value:13},{label:"Horseman",value:14},{label:"Manakete (Male)",value:15},{label:"Fire Dragon",value:16},{label:"Mercenary",value:17},{label:"Hero",value:18},{label:"Thief",value:19},{label:"Commando",value:20},{label:"Dancer",value:21},{label:"Sister",value:22},{label:"Mage (Female)",value:23},{label:"Priest (Female)",value:24},{label:"Mage (Male)",value:25},{label:"Priest (Male)",value:26},{label:"Sage",value:27},{label:"Manakete (Female)",value:28},{label:"Bandit",value:29},{label:"Pirate",value:30},{label:"Barbarian",value:31},{label:"Berserker",value:32},{label:"Dark Knight",value:33},{label:"Dark Mage",value:34},{label:"Shooter",value:35},{label:"Emperor",value:36},{label:"Guardian",value:37},{label:"Ice Dragon",value:38},{label:"Sea Dragon",value:39},{label:"Flying Dragon",value:40},{label:"Earth Dragon",value:41},{label:"Dark Dragon",value:42},{label:"Divine Dragon",value:43},{label:"Demon Dragon",value:44}],v=[{label:"Outdoor",value:0},{label:"Indoor",value:1}];var b=a(64004),d=a(34871),f=a(90514),p=a(86357),x=a(53551),m=a(70579);function A(){var e;const[l]=(0,n.KC)(),[a,A]=(0,t.ok)(),h=a.get("id");let g=null;try{g=new DataView(l,328192+8*h,8)}catch(y){g=null}return(0,m.jsxs)(o.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,m.jsx)(r.A,{message:"Map Data Editor",type:"info"}),(0,m.jsx)("div",{children:(0,m.jsx)(d.A,{disabled:null==g,defaultValue:null!==(e=u.find((e=>e.value.toString()===h)))&&void 0!==e?e:h,onSelect:e=>A({id:e}),options:u})},h),(0,m.jsx)(f.A,{type:b.pe.U8,view:g,name:"Tileset",offset:0}),(0,m.jsx)(f.A,{type:b.pe.U8,view:g,name:"Color",offset:1}),(0,m.jsx)(p.A,{type:b.pe.U8,view:g,name:"X size",offset:2}),(0,m.jsx)(p.A,{type:b.pe.U8,view:g,name:"Y size",offset:3}),(0,m.jsx)(x.A,{isHex:!0,type:b.pe.U8,reference:"ClassBasesEditor",options:c,view:g,name:"Enemy class 1",offset:4}),(0,m.jsx)(x.A,{isHex:!0,type:b.pe.U8,reference:"ClassBasesEditor",options:c,view:g,name:"Enemy class 2",offset:5}),(0,m.jsx)(x.A,{isHex:!0,type:b.pe.U8,reference:"ClassBasesEditor",options:c,view:g,name:"Enemy class 3",offset:6}),(0,m.jsx)(x.A,{isHex:!0,type:b.pe.U8,options:v,view:g,name:"Indoor/Outdoor",offset:7}),(0,m.jsx)(i.A,{children:(0,m.jsx)(s.A,{})})]})}},33307:(e,l,a)=>{a.d(l,{A:()=>F});var n=a(58168),t=a(64467),o=a(64600),r=a.n(o),i=a(65043),s=a(35296),u=a(16436);const c=function(e){var l,a=(0,i.useContext)(s.QO),o=a.getPrefixCls,c=a.direction,v=e.prefixCls,b=e.className,d=void 0===b?"":b,f=o("input-group",v),p=r()(f,(l={},(0,t.A)(l,"".concat(f,"-lg"),"large"===e.size),(0,t.A)(l,"".concat(f,"-sm"),"small"===e.size),(0,t.A)(l,"".concat(f,"-compact"),e.compact),(0,t.A)(l,"".concat(f,"-rtl"),"rtl"===c),l),d),x=(0,i.useContext)(u.$W),m=(0,i.useMemo)((function(){return(0,n.A)((0,n.A)({},x),{isFormItemInput:!1})}),[x]);return i.createElement("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(u.$W.Provider,{value:m},e.children))};var v=a(28124),b=a(5544),d=a(89379);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var p=a(22172),x=function(e,l){return i.createElement(p.A,(0,d.A)((0,d.A)({},e),{},{ref:l,icon:f}))};x.displayName="EyeInvisibleOutlined";const m=i.forwardRef(x);var A=a(76191),h=a(18574),g=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a},y=function(e){return e?i.createElement(A.A,null):i.createElement(m,null)},C={click:"onClick",hover:"onMouseOver"};const S=i.forwardRef((function(e,l){var a=(0,i.useState)(!1),o=(0,b.A)(a,2),u=o[0],c=o[1],d=function(){e.disabled||c((function(e){return!e}))},f=function(a){var o=a.getPrefixCls,s=e.className,c=e.prefixCls,b=e.inputPrefixCls,f=e.size,p=e.visibilityToggle,x=void 0===p||p,m=g(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),A=o("input",b),S=o("input-password",c),w=x&&function(l){var a,n=e.action,o=void 0===n?"click":n,r=e.iconRender,s=C[o]||"",c=(void 0===r?y:r)(u),v=(a={},(0,t.A)(a,s,d),(0,t.A)(a,"className","".concat(l,"-icon")),(0,t.A)(a,"key","passwordIcon"),(0,t.A)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,t.A)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return i.cloneElement(i.isValidElement(c)?c:i.createElement("span",null,c),v)}(S),E=r()(S,s,(0,t.A)({},"".concat(S,"-").concat(f),!!f)),P=(0,n.A)((0,n.A)({},(0,h.A)(m,["suffix","iconRender"])),{type:u?"text":"password",className:E,prefixCls:A,suffix:w});return f&&(P.size=f),i.createElement(v.Ay,(0,n.A)({ref:l},P))};return i.createElement(s.TG,null,f)}));var w=a(62058),E=a(13758),P=a(11774),D=a(87063),M=a(12701),j=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};const k=i.forwardRef((function(e,l){var a,o,u=e.prefixCls,c=e.inputPrefixCls,b=e.className,d=e.size,f=e.suffix,p=e.enterButton,x=void 0!==p&&p,m=e.addonAfter,A=e.loading,h=e.disabled,g=e.onSearch,y=e.onChange,C=e.onCompositionStart,S=e.onCompositionEnd,k=j(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),O=i.useContext(s.QO),T=O.getPrefixCls,F=O.direction,B=i.useContext(D.A),z=i.useRef(!1),L=d||B,N=i.useRef(null),R=function(e){var l;document.activeElement===(null===(l=N.current)||void 0===l?void 0:l.input)&&e.preventDefault()},I=function(e){var l,a;g&&g(null===(a=null===(l=N.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},G=T("input-search",u),H=T("input",c),U="boolean"===typeof x?i.createElement(w.A,null):null,K="".concat(G,"-button"),W=x||{},Q=W.type&&!0===W.type.__ANT_BUTTON;o=Q||"button"===W.type?(0,M.Ob)(W,(0,n.A)({onMouseDown:R,onClick:function(e){var l,a;null===(a=null===(l=null===W||void 0===W?void 0:W.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),I(e)},key:"enterButton"},Q?{className:K,size:L}:{})):i.createElement(P.A,{className:K,type:x?"primary":void 0,size:L,disabled:h,key:"enterButton",onMouseDown:R,onClick:I,loading:A,icon:U},x),m&&(o=[o,(0,M.Ob)(m,{key:"addonAfter"})]);var q=r()(G,(a={},(0,t.A)(a,"".concat(G,"-rtl"),"rtl"===F),(0,t.A)(a,"".concat(G,"-").concat(L),!!L),(0,t.A)(a,"".concat(G,"-with-button"),!!x),a),b);return i.createElement(v.Ay,(0,n.A)({ref:(0,E.K4)(N,l),onPressEnter:function(e){z.current||I(e)}},k,{size:L,onCompositionStart:function(e){z.current=!0,null===C||void 0===C||C(e)},onCompositionEnd:function(e){z.current=!1,null===S||void 0===S||S(e)},prefixCls:H,addonAfter:o,suffix:f,onChange:function(e){e&&e.target&&"click"===e.type&&g&&g(e.target.value,e),y&&y(e)},className:q,disabled:h}))}));var O=a(42471),T=v.Ay;T.Group=c,T.Search=k,T.TextArea=O.A,T.Password=S;const F=T}}]);
//# sourceMappingURL=38164.4771b7ae.chunk.js.map