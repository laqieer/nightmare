"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[465],{86357:(e,l,a)=>{a.d(l,{A:()=>c});var n=a(89379),t=a(17313),o=a(64435),r=a(3428),u=a(65043),i=a(64004),s=a(70579);const{Text:v}=t.A;function c(e){const{view:l,name:a,offset:t,type:c}=e,b=null==l?0:(0,i.LF)(l,t,c),[p,f]=(0,u.useState)(b);return p!==b&&f(b),(0,s.jsxs)(o.A,{children:[(0,s.jsx)(v,{disabled:null==l,children:"".concat(a,":").concat(null==l?"":" ".concat(p," \u2192"))}),(0,s.jsx)(r.A,(0,n.A)({disabled:null==l,min:i.Wb[c][0],max:i.Wb[c][1],onPressEnter:e=>{const a=parseInt(e.target.value,10);(0,i.M9)(l,t,c,a),f(a)}},e))]})}c.defaultProps={view:null}},53551:(e,l,a)=>{a.d(l,{A:()=>f});var n=a(89379),t=a(53986),o=a(17313),r=a(64435),u=a(41976),i=a(65043),s=a(35475),v=a(64004),c=a(70579);const b=["isHex","reference","view","name","offset","type","options"],{Text:p}=o.A;function f(e){const{isHex:l,reference:a,view:o,name:f,offset:d,type:y,options:m}=e,A=(0,t.A)(e,b),x=null==o?0:(0,v.LF)(o,d,y),[E,w]=(0,i.useState)(x);E!==x&&w(x);const h=m.find((e=>e.value===E)),g=l?"0x".concat(E.toString(16)):E,S=void 0===h?g:h.label;return(0,c.jsxs)(r.A,{children:[(0,c.jsx)(p,{disabled:null==o,children:"".concat(f,":").concat(null==o?"":" ".concat(S," \u2192"))}),(0,c.jsx)(u.A,(0,n.A)({disabled:null==o,showSearch:!0,options:m,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,v.M9)(o,d,y,e),w(e)}},A)),""===a||null==o?"":(0,c.jsx)(s.N_,{to:{pathname:"../".concat(a,"?id=").concat(E),state:o.buffer},children:"\u27a4"})]})}f.defaultProps={view:null,isHex:!1,reference:""}},90514:(e,l,a)=>{a.d(l,{A:()=>c});var n=a(89379),t=a(17313),o=a(64435),r=a(33307),u=a(65043),i=a(64004),s=a(70579);const{Text:v}=t.A;function c(e){const[l,a]=(0,u.useState)(""),{view:t,name:c,offset:b,type:p}=e,f=null==t?0:(0,i.LF)(t,b,p),[d,y]=(0,u.useState)(f);return d!==f&&y(f),(0,s.jsxs)(o.A,{children:[(0,s.jsx)(v,{disabled:null==t,children:"".concat(c,":").concat(null==t?"":" 0x".concat(d.toString(16)," \u2192"))}),(0,s.jsx)(r.A,(0,n.A)({disabled:null==t,allowClear:!0,maxLength:2*i.X1[p],prefix:"0x",value:l,onChange:e=>{const l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&a(l)},onPressEnter:e=>{const l=parseInt(e.target.value,16);(0,i.M9)(t,b,p,l),y(l)}},e))]})}c.defaultProps={view:null}},34871:(e,l,a)=>{a.d(l,{A:()=>r});var n=a(89379),t=a(41976),o=(a(65043),a(70579));function r(e){return(0,o.jsx)(t.A,(0,n.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},465:(e,l,a)=>{a.r(l),a.d(l,{default:()=>A});a(65043);var n=a(73216),t=a(35475),o=a(64435),r=a(92135),u=a(33275),i=a(46974);const s=[{label:"Iron Sword",value:0},{label:"Steel Sword",value:1},{label:"Silver Sword",value:2},{label:"Killing Edge",value:3},{label:"Levin Sword",value:4},{label:"Devil Sword",value:5},{label:"Wyrmslayer",value:6},{label:"Armorslayer",value:7},{label:"Mercurius",value:8},{label:"Rapier",value:9},{label:"Wo Dao",value:10},{label:"Brave Sword",value:11},{label:"Falchion (Fake)",value:12},{label:"Falchion (Weak)",value:13},{label:"Falchion",value:14},{label:"Iron Lance",value:15},{label:"Steel Lance",value:16},{label:"Silver Lance",value:17},{label:"Javelin",value:18},{label:"Killer Lance",value:19},{label:"Ridersbane",value:20},{label:"Wing Spear",value:21},{label:"Dragonpike",value:22},{label:"Brave Lance",value:23},{label:"Gradivus",value:24},{label:"Iron Axe",value:25},{label:"Steel Axe",value:26},{label:"Silver Axe",value:27},{label:"Hand Axe",value:28},{label:"Killer Axe",value:29},{label:"Hammer",value:30},{label:"Poleax",value:31},{label:"Devil Axe",value:32},{label:"Brave Axe",value:33},{label:"Hauteclere",value:34},{label:"Iron Bow",value:35},{label:"Steel Bow",value:36},{label:"Silver Bow",value:37},{label:"Killer Bow",value:38},{label:"Longbow",value:39},{label:"Brave Bow",value:40},{label:"Parthia",value:41},{label:"Arrowspate",value:42},{label:"Stonehoist",value:43},{label:"Hoistflamme",value:44},{label:"Thunderbolt",value:45},{label:"Pachyderm",value:46},{label:"Firestone",value:47},{label:"Earthstone",value:48},{label:"Magestone",value:49},{label:"Divinestone",value:50},{label:"Fire",value:51},{label:"Thunder",value:52},{label:"Blizzard",value:53},{label:"Elfire",value:54},{label:"Imhullu (False)",value:55},{label:"Bolganone",value:56},{label:"Thoron",value:57},{label:"Swarm",value:58},{label:"Aura",value:59},{label:"Excalibur",value:60},{label:"Imhullu",value:61},{label:"Starlight",value:62},{label:"Heal",value:63},{label:"Mend",value:64},{label:"Recover",value:65},{label:"Physic",value:66},{label:"Fortify",value:67},{label:"Warp",value:68},{label:"Barrier",value:69},{label:"Hammerne",value:70},{label:"Aum",value:71},{label:"Door Key",value:72},{label:"Bridge Key",value:73},{label:"Master Key",value:74},{label:"Vulnerary",value:75},{label:"Pure Water",value:76},{label:"Energy Drop",value:77},{label:"Spirit Dust",value:78},{label:"Secret Book",value:79},{label:"Speedwings",value:80},{label:"Goddess Icon",value:81},{label:"Dracoshield",value:82},{label:"Talisman",value:83},{label:"Seraph Robe",value:84},{label:"Boots",value:85},{label:"Arms Scroll",value:86},{label:"Silver Card",value:87},{label:"VIP Card",value:88},{label:"Master Seal",value:89},{label:"Elysian Whip",value:90},{label:"Torch",value:91},{label:"Iote's Shield",value:92},{label:"Lightsphere",value:93},{label:"Starsphere",value:94},{label:"Geosphere",value:95},{label:"Fire Emblem",value:96},{label:"Door Key",value:97},{label:"Bullion (S)",value:98},{label:"Bullion (M)",value:99},{label:"Bullion (L)",value:100},{label:"Bullion (XL)",value:101},{label:"All blanks beyond this point.",value:102},{label:"This list was painstakingly created by Arch.",value:103},{label:"Entry 104",value:104},{label:"Entry 105",value:105},{label:"Entry 106",value:106},{label:"Entry 107",value:107},{label:"Entry 108",value:108},{label:"Entry 109",value:109},{label:"Entry 110",value:110},{label:"Entry 111",value:111},{label:"Entry 112",value:112},{label:"Entry 113",value:113},{label:"Entry 114",value:114},{label:"Entry 115",value:115},{label:"Entry 116",value:116},{label:"Entry 117",value:117},{label:"Entry 118",value:118},{label:"Entry 119",value:119},{label:"Entry 120",value:120},{label:"Entry 121",value:121},{label:"Entry 122",value:122},{label:"Entry 123",value:123},{label:"Entry 124",value:124},{label:"Entry 125",value:125},{label:"Entry 126",value:126},{label:"Entry 127",value:127},{label:"Entry 128",value:128},{label:"Entry 129",value:129},{label:"Entry 130",value:130},{label:"Entry 131",value:131},{label:"Entry 132",value:132},{label:"Entry 133",value:133},{label:"Entry 134",value:134},{label:"Entry 135",value:135},{label:"Entry 136",value:136},{label:"Entry 137",value:137},{label:"Entry 138",value:138},{label:"Entry 139",value:139},{label:"Entry 140",value:140},{label:"Entry 141",value:141},{label:"Entry 142",value:142},{label:"Entry 143",value:143},{label:"Entry 144",value:144},{label:"Entry 145",value:145},{label:"Entry 146",value:146},{label:"Entry 147",value:147},{label:"Entry 148",value:148},{label:"Entry 149",value:149},{label:"Entry 150",value:150},{label:"Entry 151",value:151},{label:"Entry 152",value:152}],v=[{label:"Sword",value:0},{label:"Lance",value:1},{label:"Axe",value:2},{label:"Bow",value:3},{label:"Magic",value:4},{label:"Staff",value:5},{label:"Dragonstone",value:6},{label:"Ballista",value:7},{label:"Item",value:8}],c=[{label:"None",value:0},{label:"E",value:1},{label:"D",value:31},{label:"C",value:76},{label:"B",value:136},{label:"A",value:196}];var b=a(64004),p=a(34871),f=a(90514),d=a(53551),y=a(86357),m=a(70579);function A(){var e;const[l]=(0,n.KC)(),[a,A]=(0,t.ok)(),x=a.get("id");let E=null;try{E=new DataView(l,34700+60*x,60)}catch(w){E=null}return(0,m.jsxs)(o.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,m.jsx)(r.A,{message:"FEDS Item Editor (U) by Blazer",type:"info"}),(0,m.jsx)("div",{children:(0,m.jsx)(p.A,{disabled:null==E,defaultValue:null!==(e=s.find((e=>e.value.toString()===x)))&&void 0!==e?e:x,onSelect:e=>A({id:e}),options:s})},x),(0,m.jsx)(f.A,{type:b.pe.U8,view:E,name:"Item Chrono-Byte",offset:0}),(0,m.jsx)(f.A,{type:b.pe.U16,view:E,name:"Item ID (?)",offset:4}),(0,m.jsx)(f.A,{type:b.pe.U16,view:E,name:"Name Pointer",offset:8}),(0,m.jsx)(f.A,{type:b.pe.U16,view:E,name:"Description Pointer",offset:12}),(0,m.jsx)(f.A,{type:b.pe.U8,view:E,name:"Weapon Icon",offset:16}),(0,m.jsx)(f.A,{type:b.pe.U8,view:E,name:"Price",offset:18}),(0,m.jsx)(d.A,{type:b.pe.U8,options:v,view:E,name:"Item Type",offset:20}),(0,m.jsx)(d.A,{type:b.pe.U8,options:c,view:E,name:"Weapon Level",offset:22}),(0,m.jsx)(y.A,{type:b.pe.U8,view:E,name:"Weapon Experience",offset:23}),(0,m.jsx)(y.A,{type:b.pe.U8,view:E,name:"Uses (0=INF)",offset:24}),(0,m.jsx)(y.A,{type:b.pe.U8,view:E,name:"Might",offset:25}),(0,m.jsx)(y.A,{type:b.pe.U8,view:E,name:"Hit",offset:26}),(0,m.jsx)(y.A,{type:b.pe.U8,view:E,name:"Critical",offset:27}),(0,m.jsx)(y.A,{type:b.pe.U8,view:E,name:"Weight",offset:28}),(0,m.jsx)(y.A,{type:b.pe.U8,view:E,name:"Minimum Range",offset:29}),(0,m.jsx)(y.A,{type:b.pe.U8,view:E,name:"Max Range",offset:30}),(0,m.jsx)(f.A,{type:b.pe.U32,view:E,name:"Unknown",offset:31}),(0,m.jsx)(f.A,{type:b.pe.U32,view:E,name:"Unknown",offset:35}),(0,m.jsx)(f.A,{type:b.pe.U32,view:E,name:"Unknown",offset:39}),(0,m.jsx)(f.A,{type:b.pe.U32,view:E,name:"Unknown",offset:43}),(0,m.jsx)(f.A,{type:b.pe.U32,view:E,name:"Unknown",offset:47}),(0,m.jsx)(f.A,{type:b.pe.U32,view:E,name:"Unknown",offset:51}),(0,m.jsx)(f.A,{type:b.pe.U32,view:E,name:"Unknown",offset:55}),(0,m.jsx)(f.A,{type:b.pe.U8,view:E,name:"Unknown",offset:59}),(0,m.jsx)(u.A,{children:(0,m.jsx)(i.A,{})})]})}},33307:(e,l,a)=>{a.d(l,{A:()=>I});var n=a(58168),t=a(64467),o=a(64600),r=a.n(o),u=a(65043),i=a(35296),s=a(16436);const v=function(e){var l,a=(0,u.useContext)(i.QO),o=a.getPrefixCls,v=a.direction,c=e.prefixCls,b=e.className,p=void 0===b?"":b,f=o("input-group",c),d=r()(f,(l={},(0,t.A)(l,"".concat(f,"-lg"),"large"===e.size),(0,t.A)(l,"".concat(f,"-sm"),"small"===e.size),(0,t.A)(l,"".concat(f,"-compact"),e.compact),(0,t.A)(l,"".concat(f,"-rtl"),"rtl"===v),l),p),y=(0,u.useContext)(s.$W),m=(0,u.useMemo)((function(){return(0,n.A)((0,n.A)({},y),{isFormItemInput:!1})}),[y]);return u.createElement("span",{className:d,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},u.createElement(s.$W.Provider,{value:m},e.children))};var c=a(28124),b=a(5544),p=a(89379);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var d=a(22172),y=function(e,l){return u.createElement(d.A,(0,p.A)((0,p.A)({},e),{},{ref:l,icon:f}))};y.displayName="EyeInvisibleOutlined";const m=u.forwardRef(y);var A=a(76191),x=a(18574),E=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a},w=function(e){return e?u.createElement(A.A,null):u.createElement(m,null)},h={click:"onClick",hover:"onMouseOver"};const g=u.forwardRef((function(e,l){var a=(0,u.useState)(!1),o=(0,b.A)(a,2),s=o[0],v=o[1],p=function(){e.disabled||v((function(e){return!e}))},f=function(a){var o=a.getPrefixCls,i=e.className,v=e.prefixCls,b=e.inputPrefixCls,f=e.size,d=e.visibilityToggle,y=void 0===d||d,m=E(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),A=o("input",b),g=o("input-password",v),S=y&&function(l){var a,n=e.action,o=void 0===n?"click":n,r=e.iconRender,i=h[o]||"",v=(void 0===r?w:r)(s),c=(a={},(0,t.A)(a,i,p),(0,t.A)(a,"className","".concat(l,"-icon")),(0,t.A)(a,"key","passwordIcon"),(0,t.A)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,t.A)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return u.cloneElement(u.isValidElement(v)?v:u.createElement("span",null,v),c)}(g),j=r()(g,i,(0,t.A)({},"".concat(g,"-").concat(f),!!f)),C=(0,n.A)((0,n.A)({},(0,x.A)(m,["suffix","iconRender"])),{type:s?"text":"password",className:j,prefixCls:A,suffix:S});return f&&(C.size=f),u.createElement(c.Ay,(0,n.A)({ref:l},C))};return u.createElement(i.TG,null,f)}));var S=a(62058),j=a(13758),C=a(11774),U=a(87063),B=a(12701),P=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};const k=u.forwardRef((function(e,l){var a,o,s=e.prefixCls,v=e.inputPrefixCls,b=e.className,p=e.size,f=e.suffix,d=e.enterButton,y=void 0!==d&&d,m=e.addonAfter,A=e.loading,x=e.disabled,E=e.onSearch,w=e.onChange,h=e.onCompositionStart,g=e.onCompositionEnd,k=P(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),O=u.useContext(i.QO),M=O.getPrefixCls,I=O.direction,L=u.useContext(U.A),D=u.useRef(!1),F=p||L,z=u.useRef(null),N=function(e){var l;document.activeElement===(null===(l=z.current)||void 0===l?void 0:l.input)&&e.preventDefault()},T=function(e){var l,a;E&&E(null===(a=null===(l=z.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},W=M("input-search",s),R=M("input",v),H="boolean"===typeof y?u.createElement(S.A,null):null,K="".concat(W,"-button"),G=y||{},Q=G.type&&!0===G.type.__ANT_BUTTON;o=Q||"button"===G.type?(0,B.Ob)(G,(0,n.A)({onMouseDown:N,onClick:function(e){var l,a;null===(a=null===(l=null===G||void 0===G?void 0:G.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),T(e)},key:"enterButton"},Q?{className:K,size:F}:{})):u.createElement(C.A,{className:K,type:y?"primary":void 0,size:F,disabled:x,key:"enterButton",onMouseDown:N,onClick:T,loading:A,icon:H},y),m&&(o=[o,(0,B.Ob)(m,{key:"addonAfter"})]);var V=r()(W,(a={},(0,t.A)(a,"".concat(W,"-rtl"),"rtl"===I),(0,t.A)(a,"".concat(W,"-").concat(F),!!F),(0,t.A)(a,"".concat(W,"-with-button"),!!y),a),b);return u.createElement(c.Ay,(0,n.A)({ref:(0,j.K4)(z,l),onPressEnter:function(e){D.current||T(e)}},k,{size:F,onCompositionStart:function(e){D.current=!0,null===h||void 0===h||h(e)},onCompositionEnd:function(e){D.current=!1,null===g||void 0===g||g(e)},prefixCls:R,addonAfter:o,suffix:f,onChange:function(e){e&&e.target&&"click"===e.type&&E&&E(e.target.value,e),w&&w(e)},className:V,disabled:x}))}));var O=a(42471),M=c.Ay;M.Group=v,M.Search=k,M.TextArea=O.A,M.Password=g;const I=M}}]);
//# sourceMappingURL=465.a2b6c78f.chunk.js.map