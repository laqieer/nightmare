"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[1268],{86357:(e,l,a)=>{a.d(l,{A:()=>b});var n=a(89379),t=a(17313),u=a(64435),o=a(3428),r=a(65043),i=a(64004),v=a(70579);const{Text:s}=t.A;function b(e){const{view:l,name:a,offset:t,type:b}=e,c=null==l?0:(0,i.LF)(l,t,b),[f,d]=(0,r.useState)(c);return f!==c&&d(c),(0,v.jsxs)(u.A,{children:[(0,v.jsx)(s,{disabled:null==l,children:"".concat(a,":").concat(null==l?"":" ".concat(f," \u2192"))}),(0,v.jsx)(o.A,(0,n.A)({disabled:null==l,min:i.Wb[b][0],max:i.Wb[b][1],onPressEnter:e=>{const a=parseInt(e.target.value,10);(0,i.M9)(l,t,b,a),d(a)}},e))]})}b.defaultProps={view:null}},53551:(e,l,a)=>{a.d(l,{A:()=>d});var n=a(89379),t=a(53986),u=a(17313),o=a(64435),r=a(41976),i=a(65043),v=a(35475),s=a(64004),b=a(70579);const c=["isHex","reference","view","name","offset","type","options"],{Text:f}=u.A;function d(e){const{isHex:l,reference:a,view:u,name:d,offset:p,type:m,options:A}=e,h=(0,t.A)(e,c),x=null==u?0:(0,s.LF)(u,p,m),[y,g]=(0,i.useState)(x);y!==x&&g(x);const S=A.find((e=>e.value===y)),w=l?"0x".concat(y.toString(16)):y,C=void 0===S?w:S.label;return(0,b.jsxs)(o.A,{children:[(0,b.jsx)(f,{disabled:null==u,children:"".concat(d,":").concat(null==u?"":" ".concat(C," \u2192"))}),(0,b.jsx)(r.A,(0,n.A)({disabled:null==u,showSearch:!0,options:A,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,s.M9)(u,p,m,e),g(e)}},h)),""===a||null==u?"":(0,b.jsx)(v.N_,{to:{pathname:"../".concat(a,"?id=").concat(y),state:u.buffer},children:"\u27a4"})]})}d.defaultProps={view:null,isHex:!1,reference:""}},90514:(e,l,a)=>{a.d(l,{A:()=>b});var n=a(89379),t=a(17313),u=a(64435),o=a(33307),r=a(65043),i=a(64004),v=a(70579);const{Text:s}=t.A;function b(e){const[l,a]=(0,r.useState)(""),{view:t,name:b,offset:c,type:f}=e,d=null==t?0:(0,i.LF)(t,c,f),[p,m]=(0,r.useState)(d);return p!==d&&m(d),(0,v.jsxs)(u.A,{children:[(0,v.jsx)(s,{disabled:null==t,children:"".concat(b,":").concat(null==t?"":" 0x".concat(p.toString(16)," \u2192"))}),(0,v.jsx)(o.A,(0,n.A)({disabled:null==t,allowClear:!0,maxLength:2*i.X1[f],prefix:"0x",value:l,onChange:e=>{const l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&a(l)},onPressEnter:e=>{const l=parseInt(e.target.value,16);(0,i.M9)(t,c,f,l),m(l)}},e))]})}b.defaultProps={view:null}},34871:(e,l,a)=>{a.d(l,{A:()=>o});var n=a(89379),t=a(41976),u=(a(65043),a(70579));function o(e){return(0,u.jsx)(t.A,(0,n.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},1268:(e,l,a)=>{a.r(l),a.d(l,{default:()=>x});a(65043);var n=a(73216),t=a(35475),u=a(64435),o=a(92135),r=a(33275),i=a(46974);const v=[{label:"Entry 0",value:0},{label:"Entry 1",value:1}],s=[{label:"Marth",value:1},{label:"Sheeda",value:2},{label:"Jeigan",value:3},{label:"Kain",value:4},{label:"Abel",value:5},{label:"Doga",value:6},{label:"Gordon",value:7},{label:"Ricardo",value:8},{label:"Riff",value:9},{label:"Saji",value:10},{label:"Maji",value:11},{label:"Barts",value:12},{label:"Kashim",value:13},{label:"Oguma",value:14},{label:"Daros",value:15},{label:"Julian",value:16},{label:"Rena",value:17},{label:"Marich",value:18},{label:"Navarre",value:19},{label:"Hardin",value:20},{label:"Wolf",value:21},{label:"Zagaro",value:22},{label:"Roshe",value:23},{label:"Biraku",value:24},{label:"Banutu",value:25},{label:"Caesar",value:26},{label:"Raddy",value:27},{label:"Midia",value:28},{label:"Katua",value:29},{label:"Maria",value:30},{label:"Minerva",value:31},{label:"Linda",value:32},{label:"George",value:33},{label:"Tomth",value:34},{label:"Mishelan",value:35},{label:"Thomas",value:36},{label:"Boa",value:37},{label:"Alan",value:38},{label:"Samson",value:39},{label:"Beck",value:40},{label:"Chainy",value:41},{label:"Wendel",value:42},{label:"Est",value:43},{label:"Astria",value:44},{label:"Machis",value:45},{label:"Roger",value:46},{label:"Jake",value:47},{label:"Paola",value:48},{label:"Chiki",value:49},{label:"Lawrence",value:50},{label:"Ellis",value:51},{label:"Saber",value:52},{label:"Gato",value:53},{label:"Gazack",value:129},{label:"Wylar",value:130},{label:"Grunia Soldier",value:131},{label:"Gomes",value:132},{label:"Garda Soldier",value:133},{label:"Samsian",value:134},{label:"Navarre",value:135},{label:"Merak",value:136},{label:"Hermine",value:137},{label:"Mariones",value:138},{label:"Benson",value:139},{label:"Canaris",value:140},{label:"Manuu",value:141},{label:"Zhukov",value:142},{label:"Shozen",value:143},{label:"Heimler",value:144},{label:"Gigash",value:145},{label:"Jiol",value:146},{label:"Bozen",value:147},{label:"Holstat",value:148},{label:"Stallone",value:149},{label:"Hyman",value:150},{label:"Zemcel",value:151},{label:"Ordyne",value:152},{label:"Camus",value:153},{label:"Misheil",value:154},{label:"Moses",value:155},{label:"Garnef",value:156},{label:"Mediuth",value:157},{label:"Maria",value:158},{label:"Durhua Soldier",value:159},{label:"Gra Soldier",value:160},{label:"Peraty Soldier",value:161},{label:"Cashmere Soldier",value:162},{label:"Black Knight",value:163},{label:"Khadein Mage",value:164},{label:"Minerva",value:165},{label:"Basilisk",value:166},{label:"Salamander",value:167},{label:"Narga",value:168},{label:"Gaia",value:169},{label:"Iron Knight",value:170},{label:"Dragon Knight",value:171},{label:"Enemy",value:172},{label:"Daros",value:173},{label:"Ricardo",value:174},{label:"Macedonia Soldier",value:175},{label:"Katua",value:176},{label:"Paola",value:177},{label:"Est",value:178},{label:"White Knight",value:179},{label:"Gra Soldier",value:180},{label:"Rogue",value:181},{label:"Wendel",value:182},{label:"Raman Soldier",value:183},{label:"Thebes Mage",value:184},{label:"Priest Army",value:185},{label:"Chiki",value:186},{label:"King Grunia",value:187},{label:"Reinforcements",value:188},{label:"Kashim",value:189},{label:"Saber",value:190},{label:"Jake",value:191},{label:"Lawrence",value:192},{label:"Chainy",value:193},{label:"Garnef",value:194},{label:"Roger",value:195},{label:"Machis",value:196},{label:"Astria",value:197}],b=[{label:"Cavalier",value:1},{label:"Knight",value:2},{label:"Pegasus Knight",value:3},{label:"Paladin",value:4},{label:"Dracoknight",value:5},{label:"Mercenary",value:6},{label:"Fighter",value:7},{label:"Pirate",value:8},{label:"Thief",value:9},{label:"Hero",value:10},{label:"Archer",value:11},{label:"Hunter",value:12},{label:"Ballistician",value:13},{label:"Horseman",value:14},{label:"Sniper",value:15},{label:"Commando",value:16},{label:"Manakete",value:17},{label:"Mage",value:18},{label:"Priest",value:19},{label:"Bishop",value:20},{label:"Lord",value:21},{label:"General",value:22}],c=[{label:"---",value:0},{label:"Silver Sword",value:1},{label:"Iron Sword",value:2},{label:"Steel Sword",value:3},{label:"Armorslayer",value:4},{label:"Rapier",value:5},{label:"Wyrmslayer",value:6},{label:"Killing Edge",value:7},{label:"Mercurius",value:8},{label:"Levin Sword",value:9},{label:"Devil Sword",value:10},{label:"Falchion",value:11},{label:"Iron Lance",value:12},{label:"Ridersbane",value:13},{label:"Silver Lance",value:14},{label:"Javelin",value:15},{label:"Gradivus",value:16},{label:"Iron Bow",value:17},{label:"Steel Bow",value:18},{label:"Bowgun",value:19},{label:"Silver Bow",value:20},{label:"Parthia",value:21},{label:"Quincrane",value:22},{label:"Stonehedge",value:23},{label:"Fire Gun",value:24},{label:"Thunderbolt",value:25},{label:"Elephant",value:26},{label:"Iron Axe",value:27},{label:"Steel Axe",value:28},{label:"Hammer",value:29},{label:"Devil Axe",value:30},{label:"Hand Axe",value:31},{label:"Wyvern*",value:32},{label:"Gargoyle*",value:33},{label:"Magicstone",value:34},{label:"Divinestone",value:35},{label:"Firestone",value:36},{label:"Salamander*",value:37},{label:"Earthstone",value:38},{label:"Shenron*",value:39},{label:"Neptune*",value:40},{label:"Darkdragon*",value:41},{label:"Magicstone?",value:42},{label:"Fire",value:43},{label:"Thunder",value:44},{label:"Blizzard",value:45},{label:"Elfire",value:46},{label:"Bolganone",value:47},{label:"Thoron",value:48},{label:"Swarm",value:49},{label:"Aura",value:50},{label:"Excalibur",value:51},{label:"Imhullu",value:52},{label:"Starlight",value:53},{label:"Heal",value:54},{label:"Mend",value:55},{label:"Recover",value:56},{label:"Helarn*",value:57},{label:"Warp",value:58},{label:"Hammerne",value:59},{label:"Physic",value:60},{label:"Barrier",value:61},{label:"Fortify",value:62},{label:"Aum",value:63},{label:"Vulnerary",value:64},{label:"Pure Water",value:65},{label:"Door Key",value:66},{label:"Bridge Key",value:67},{label:"Lockpick",value:68},{label:"Unequipped",value:69},{label:"Dragonshield",value:70},{label:"Talisman",value:71},{label:"Boots",value:72},{label:"Manual",value:73},{label:"Secret Book",value:74},{label:"Power Ring",value:75},{label:"Telescope*",value:76},{label:"Speed Ring",value:77},{label:"Goddess Icon",value:78},{label:"Angelic Robe",value:79},{label:"Knight Crest",value:80},{label:"Hero Crest",value:81},{label:"Guiding Ring",value:82},{label:"Orion's Bolt",value:83},{label:"Elysian Whip",value:84},{label:"Geosphere",value:85},{label:"Time Orb*",value:86},{label:"Dark Orb*",value:87},{label:"Starsphere",value:88},{label:"Member Card",value:89},{label:"Silver Card",value:90},{label:"Lightsphere",value:91},{label:"Fire Emblem",value:92}];var f=a(64004),d=a(34871),p=a(53551),m=a(86357),A=a(90514),h=a(70579);function x(){var e;const[l]=(0,n.KC)(),[a,x]=(0,t.ok)(),y=a.get("id");let g=null;try{g=new DataView(l,132605+27*y,27)}catch(S){g=null}return(0,h.jsxs)(u.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,h.jsx)(o.A,{message:"Character editor 3 (FE1) - By VincentASM and Celice - V 0.2",type:"info"}),(0,h.jsx)("div",{children:(0,h.jsx)(d.A,{disabled:null==g,defaultValue:null!==(e=v.find((e=>e.value.toString()===y)))&&void 0!==e?e:y,onSelect:e=>x({id:e}),options:v})},y),(0,h.jsx)(p.A,{isHex:!0,type:f.pe.U8,options:s,view:g,name:"Character",offset:0}),(0,h.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ClassEditor",options:b,view:g,name:"Class",offset:1}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Level",offset:2}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Current HP",offset:3}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Maximum HP",offset:4}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Experience",offset:5}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"Unknown",offset:6}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Strength",offset:7}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Skill",offset:8}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Weapon Level",offset:9}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Speed",offset:10}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Luck",offset:11}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Defence",offset:12}),(0,h.jsx)(m.A,{type:f.pe.S8,view:g,name:"Movement",offset:13}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"Unknown",offset:14}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"Magic Defence",offset:15}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"Y Starting position",offset:16}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"X Starting position",offset:17}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"Unknown",offset:18}),(0,h.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ItemEditor",options:c,view:g,name:"Item slot 1",offset:19}),(0,h.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ItemEditor",options:c,view:g,name:"Item slot 2",offset:20}),(0,h.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ItemEditor",options:c,view:g,name:"Item slot 3",offset:21}),(0,h.jsx)(p.A,{isHex:!0,type:f.pe.U8,reference:"ItemEditor",options:c,view:g,name:"Item slot 4",offset:22}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"Unknown",offset:23}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"Unknown",offset:24}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"Unknown",offset:25}),(0,h.jsx)(A.A,{type:f.pe.U8,view:g,name:"Unknown",offset:26}),(0,h.jsx)(r.A,{children:(0,h.jsx)(i.A,{})})]})}},33307:(e,l,a)=>{a.d(l,{A:()=>H});var n=a(58168),t=a(64467),u=a(64600),o=a.n(u),r=a(65043),i=a(35296),v=a(16436);const s=function(e){var l,a=(0,r.useContext)(i.QO),u=a.getPrefixCls,s=a.direction,b=e.prefixCls,c=e.className,f=void 0===c?"":c,d=u("input-group",b),p=o()(d,(l={},(0,t.A)(l,"".concat(d,"-lg"),"large"===e.size),(0,t.A)(l,"".concat(d,"-sm"),"small"===e.size),(0,t.A)(l,"".concat(d,"-compact"),e.compact),(0,t.A)(l,"".concat(d,"-rtl"),"rtl"===s),l),f),m=(0,r.useContext)(v.$W),A=(0,r.useMemo)((function(){return(0,n.A)((0,n.A)({},m),{isFormItemInput:!1})}),[m]);return r.createElement("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},r.createElement(v.$W.Provider,{value:A},e.children))};var b=a(28124),c=a(5544),f=a(89379);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var p=a(22172),m=function(e,l){return r.createElement(p.A,(0,f.A)((0,f.A)({},e),{},{ref:l,icon:d}))};m.displayName="EyeInvisibleOutlined";const A=r.forwardRef(m);var h=a(76191),x=a(18574),y=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a},g=function(e){return e?r.createElement(h.A,null):r.createElement(A,null)},S={click:"onClick",hover:"onMouseOver"};const w=r.forwardRef((function(e,l){var a=(0,r.useState)(!1),u=(0,c.A)(a,2),v=u[0],s=u[1],f=function(){e.disabled||s((function(e){return!e}))},d=function(a){var u=a.getPrefixCls,i=e.className,s=e.prefixCls,c=e.inputPrefixCls,d=e.size,p=e.visibilityToggle,m=void 0===p||p,A=y(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),h=u("input",c),w=u("input-password",s),C=m&&function(l){var a,n=e.action,u=void 0===n?"click":n,o=e.iconRender,i=S[u]||"",s=(void 0===o?g:o)(v),b=(a={},(0,t.A)(a,i,f),(0,t.A)(a,"className","".concat(l,"-icon")),(0,t.A)(a,"key","passwordIcon"),(0,t.A)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,t.A)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return r.cloneElement(r.isValidElement(s)?s:r.createElement("span",null,s),b)}(w),j=o()(w,i,(0,t.A)({},"".concat(w,"-").concat(d),!!d)),M=(0,n.A)((0,n.A)({},(0,x.A)(A,["suffix","iconRender"])),{type:v?"text":"password",className:j,prefixCls:h,suffix:C});return d&&(M.size=d),r.createElement(b.Ay,(0,n.A)({ref:l},M))};return r.createElement(i.TG,null,d)}));var C=a(62058),j=a(13758),M=a(11774),E=a(87063),k=a(12701),P=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};const O=r.forwardRef((function(e,l){var a,u,v=e.prefixCls,s=e.inputPrefixCls,c=e.className,f=e.size,d=e.suffix,p=e.enterButton,m=void 0!==p&&p,A=e.addonAfter,h=e.loading,x=e.disabled,y=e.onSearch,g=e.onChange,S=e.onCompositionStart,w=e.onCompositionEnd,O=P(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),B=r.useContext(i.QO),U=B.getPrefixCls,H=B.direction,R=r.useContext(E.A),L=r.useRef(!1),G=f||R,I=r.useRef(null),D=function(e){var l;document.activeElement===(null===(l=I.current)||void 0===l?void 0:l.input)&&e.preventDefault()},T=function(e){var l,a;y&&y(null===(a=null===(l=I.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},z=U("input-search",v),K=U("input",s),N="boolean"===typeof m?r.createElement(C.A,null):null,F="".concat(z,"-button"),W=m||{},J=W.type&&!0===W.type.__ANT_BUTTON;u=J||"button"===W.type?(0,k.Ob)(W,(0,n.A)({onMouseDown:D,onClick:function(e){var l,a;null===(a=null===(l=null===W||void 0===W?void 0:W.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),T(e)},key:"enterButton"},J?{className:F,size:G}:{})):r.createElement(M.A,{className:F,type:m?"primary":void 0,size:G,disabled:x,key:"enterButton",onMouseDown:D,onClick:T,loading:h,icon:N},m),A&&(u=[u,(0,k.Ob)(A,{key:"addonAfter"})]);var Q=o()(z,(a={},(0,t.A)(a,"".concat(z,"-rtl"),"rtl"===H),(0,t.A)(a,"".concat(z,"-").concat(G),!!G),(0,t.A)(a,"".concat(z,"-with-button"),!!m),a),c);return r.createElement(b.Ay,(0,n.A)({ref:(0,j.K4)(I,l),onPressEnter:function(e){L.current||T(e)}},O,{size:G,onCompositionStart:function(e){L.current=!0,null===S||void 0===S||S(e)},onCompositionEnd:function(e){L.current=!1,null===w||void 0===w||w(e)},prefixCls:K,addonAfter:u,suffix:d,onChange:function(e){e&&e.target&&"click"===e.type&&y&&y(e.target.value,e),g&&g(e)},className:Q,disabled:x}))}));var B=a(42471),U=b.Ay;U.Group=s,U.Search=O,U.TextArea=B.A,U.Password=w;const H=U}}]);
//# sourceMappingURL=1268.4b209cd3.chunk.js.map