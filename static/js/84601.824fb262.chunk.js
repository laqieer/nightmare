"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[84601],{90514:(e,l,a)=>{a.d(l,{A:()=>b});var n=a(89379),u=a(17313),t=a(64435),o=a(33307),r=a(65043),v=a(64004),i=a(70579);const{Text:x}=u.A;function b(e){const[l,a]=(0,r.useState)(""),{view:u,name:b,offset:s,type:c}=e,d=null==u?0:(0,v.LF)(u,s,c),[f,p]=(0,r.useState)(d);return f!==d&&p(d),(0,i.jsxs)(t.A,{children:[(0,i.jsx)(x,{disabled:null==u,children:"".concat(b,":").concat(null==u?"":" 0x".concat(f.toString(16)," \u2192"))}),(0,i.jsx)(o.A,(0,n.A)({disabled:null==u,allowClear:!0,maxLength:2*v.X1[c],prefix:"0x",value:l,onChange:e=>{const l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&a(l)},onPressEnter:e=>{const l=parseInt(e.target.value,16);(0,v.M9)(u,s,c,l),p(l)}},e))]})}b.defaultProps={view:null}},34871:(e,l,a)=>{a.d(l,{A:()=>o});var n=a(89379),u=a(41976),t=(a(65043),a(70579));function o(e){return(0,t.jsx)(u.A,(0,n.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},84601:(e,l,a)=>{a.r(l),a.d(l,{default:()=>d});a(65043);var n=a(73216),u=a(35475),t=a(64435),o=a(92135),r=a(33275),v=a(46974);const i=[{label:"0x4B Heal",value:0},{label:"0x4C Mend",value:1},{label:"0x4D Recover",value:2},{label:"0x4E Physic",value:3},{label:"0x4F Fortify",value:4},{label:"0x50 Restore",value:5},{label:"0x51 Silence",value:6},{label:"0x52 Sleep",value:7},{label:"0x53 Berserk",value:8},{label:"0x54 Warp",value:9},{label:"0x55 Rescue",value:10},{label:"0x56 Torch",value:11},{label:"0x57 Hammerne",value:12},{label:"0x58 Unlock",value:13},{label:"0x59 Barrier",value:14},{label:"0x5A Dragon Axe",value:15},{label:"0x5B Angelic Robe",value:16},{label:"0x5C Energy Ring",value:17},{label:"0x5D Secret Book",value:18},{label:"0x5E Speedwings",value:19},{label:"0x5F Goddess Icon",value:20},{label:"0x60 Dragonshield",value:21},{label:"0x61 Talisman",value:22},{label:"0x62 Swiftsoles",value:23},{label:"0x63 Body Ring",value:24},{label:"0x64 Hero Crest",value:25},{label:"0x65 Knight Crest",value:26},{label:"0x66 Orion's Bolt",value:27},{label:"0x67 Elysian Whip",value:28},{label:"0x68 Guiding Ring",value:29},{label:"0x69 Chest Key",value:30},{label:"0x6A Door Key",value:31},{label:"0x6B Lockpick",value:32},{label:"0x6C Vulnerary",value:33},{label:"0x6D Elixir",value:34},{label:"0x6E Pure Water",value:35},{label:"0x6F Antidote",value:36},{label:"0x70 Torch",value:37},{label:"0x71 Filli Shield",value:38},{label:"0x72 Member Card",value:39},{label:"0x73 Silver Card",value:40},{label:"0x74 White Gem",value:41},{label:"0x75 Blue Gem",value:42},{label:"0x76 Red Gem",value:43},{label:"0x77 1G",value:44},{label:"0x78 Reginleif",value:45},{label:"0x79 Chest Key (5)",value:46},{label:"0x7A Mine (DUMMY)",value:47},{label:"0x7B Light Rune (DUMMY)",value:48},{label:"0x7C Hoplon Guard",value:49},{label:"0x7D Filla's Might (DUMMY)",value:50},{label:"0x7E Ninis's Grace (DUMMY)",value:51},{label:"0x7F Thor's Ire (DUMMY)",value:52},{label:"0x80 Set's Litany (DUMMY)",value:53},{label:"0x81 Shadow Killer",value:54},{label:"0x82 Bright Lance",value:55},{label:"0x83 Fiend Cleaver",value:56},{label:"0x84 Beacon Bow",value:57},{label:"0x85 Sieglinde",value:58},{label:"0x86 Battle Axe",value:59},{label:"0x87 Ivaldi",value:60},{label:"0x88 Master Seal",value:61},{label:"0x89 Metis's Tome",value:62},{label:"0x8A Heaven Seal (DUMMY)",value:63},{label:"0x8B Sharp Claw",value:64},{label:"0x8C Latona",value:65},{label:"0x8D Dragonspear",value:66},{label:"0x8E Vidofnir",value:67},{label:"0x8F Naglfar",value:68},{label:"0x90 Wretched Air",value:69},{label:"0x91 Audhulma",value:70},{label:"0x92 Siegmund",value:71},{label:"0x93 Garm",value:72},{label:"0x94 Nidhogg",value:73},{label:"0x95 Heavy Spear",value:74},{label:"0x96 Short Spear",value:75},{label:"0x97 Ocean Seal",value:76},{label:"0x98 Lunar Brace",value:77},{label:"0x99 Solar Brace",value:78},{label:"0x9A 1G",value:79},{label:"0x9B 5G",value:80},{label:"0x9C 10G",value:81},{label:"0x9D 50G",value:82},{label:"0x9E 100G",value:83},{label:"0x9F 3000G",value:84},{label:"0xA0 5000G",value:85},{label:"0xA1 Wind Sword",value:86},{label:"0xA2 Vulnerary",value:87},{label:"0xA3 Vulnerary (green note)",value:88},{label:"0xA4 Vulnerary (red note)",value:89},{label:"0xA5 Dance",value:90},{label:"0xA6 Nightmare",value:91},{label:"0xA7 [Demon Shard]",value:92},{label:"0xA8 Demon Light",value:93},{label:"0xA9 Ravager",value:94},{label:"0xAA Dragonstone",value:95},{label:"0xAB Demon Surge",value:96},{label:"0xAC Shadowshot",value:97},{label:"0xAD Rotten Claw",value:98},{label:"0xAE Fetid Claw",value:99},{label:"0xAF Poison Claw",value:100},{label:"0xB0 Lethal Talon",value:101},{label:"0xB1 Fiery Fang",value:102},{label:"0xB2 Hellfang",value:103},{label:"0xB3 Evil Eye",value:104},{label:"0xB4 Crimson Eye",value:105},{label:"0xB5 Stone",value:106},{label:"0xB6 Aircalibur",value:107},{label:"0xB7 Juna Fruit",value:108},{label:"0xB8 150G",value:109},{label:"0xB9 200G",value:110},{label:"0xBA Black Gem",value:111},{label:"0xBB Gold Gem",value:112},{label:"0xBC DUST VIAL",value:113},{label:"0xBD -",value:114},{label:"0xBE -",value:115},{label:"0xBF -",value:116},{label:"0xC0 -",value:117},{label:"0xC1 -",value:118},{label:"0xC2 -",value:119},{label:"0xC3 -",value:120},{label:"0xC4 -",value:121},{label:"0xC5 -",value:122},{label:"0xC6 -",value:123},{label:"0xC7 -",value:124},{label:"0xC8 -",value:125},{label:"0xC9 -",value:126},{label:"0xCA -",value:127},{label:"0xCB -",value:128},{label:"0xCC -",value:129},{label:"0xCD -",value:130},{label:"0xCE -",value:131},{label:"0xCF -",value:132},{label:"0xD0 -",value:133},{label:"0xD1 -",value:134},{label:"0xD2 -",value:135},{label:"0xD3 -",value:136},{label:"0xD4 -",value:137},{label:"0xD5 -",value:138},{label:"0xD6 -",value:139},{label:"0xD7 -",value:140},{label:"0xD8 -",value:141},{label:"0xD9 -",value:142},{label:"0xDA -",value:143},{label:"0xDB -",value:144},{label:"0xDC -",value:145},{label:"0xDD -",value:146},{label:"0xDE -",value:147},{label:"0xDF -",value:148},{label:"0xE0 -",value:149},{label:"0xE1 -",value:150},{label:"0xE2 -",value:151},{label:"0xE3 -",value:152},{label:"0xE4 -",value:153},{label:"0xE5 -",value:154},{label:"0xE6 -",value:155},{label:"0xE7 -",value:156},{label:"0xE8 -",value:157},{label:"0xE9 -",value:158},{label:"0xEA -",value:159},{label:"0xEB -",value:160},{label:"0xEC -",value:161},{label:"0xED -",value:162},{label:"0xEE -",value:163},{label:"0xEF -",value:164},{label:"0xF0 -",value:165},{label:"0xF1 -",value:166},{label:"0xF2 -",value:167},{label:"0xF3 -",value:168},{label:"0xF4 -",value:169},{label:"0xF5 -",value:170},{label:"0xF6 -",value:171},{label:"0xF7 -",value:172},{label:"0xF8 -",value:173},{label:"0xF9 -",value:174},{label:"0xFA -",value:175},{label:"0xFB -",value:176},{label:"0xFC -",value:177},{label:"0xFD -",value:178},{label:"0xFE -",value:179},{label:"0xFF -",value:180}];var x=a(64004),b=a(34871),s=a(90514),c=a(70579);function d(){var e;const[l]=(0,n.KC)(),[a,d]=(0,u.ok)(),f=a.get("id");let p=null;try{p=new DataView(l,166064+4*f,4)}catch(A){p=null}return(0,c.jsxs)(t.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,c.jsx)(o.A,{message:"FE8 Item Usability Pointer Editor by Circleseverywhere",type:"info"}),(0,c.jsx)("div",{children:(0,c.jsx)(b.A,{disabled:null==p,defaultValue:null!==(e=i.find((e=>e.value.toString()===f)))&&void 0!==e?e:f,onSelect:e=>d({id:e}),options:i})},f),(0,c.jsx)(s.A,{type:x.pe.U32,view:p,name:"Item Usability Pointer",offset:0}),(0,c.jsx)(r.A,{children:(0,c.jsx)(v.A,{})})]})}},33307:(e,l,a)=>{a.d(l,{A:()=>k});var n=a(58168),u=a(64467),t=a(64600),o=a.n(t),r=a(65043),v=a(35296),i=a(16436);const x=function(e){var l,a=(0,r.useContext)(v.QO),t=a.getPrefixCls,x=a.direction,b=e.prefixCls,s=e.className,c=void 0===s?"":s,d=t("input-group",b),f=o()(d,(l={},(0,u.A)(l,"".concat(d,"-lg"),"large"===e.size),(0,u.A)(l,"".concat(d,"-sm"),"small"===e.size),(0,u.A)(l,"".concat(d,"-compact"),e.compact),(0,u.A)(l,"".concat(d,"-rtl"),"rtl"===x),l),c),p=(0,r.useContext)(i.$W),A=(0,r.useMemo)((function(){return(0,n.A)((0,n.A)({},p),{isFormItemInput:!1})}),[p]);return r.createElement("span",{className:f,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},r.createElement(i.$W.Provider,{value:A},e.children))};var b=a(28124),s=a(5544),c=a(89379);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var f=a(22172),p=function(e,l){return r.createElement(f.A,(0,c.A)((0,c.A)({},e),{},{ref:l,icon:d}))};p.displayName="EyeInvisibleOutlined";const A=r.forwardRef(p);var C=a(76191),m=a(18574),g=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var u=0;for(n=Object.getOwnPropertySymbols(e);u<n.length;u++)l.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(a[n[u]]=e[n[u]])}return a},y=function(e){return e?r.createElement(C.A,null):r.createElement(A,null)},h={click:"onClick",hover:"onMouseOver"};const E=r.forwardRef((function(e,l){var a=(0,r.useState)(!1),t=(0,s.A)(a,2),i=t[0],x=t[1],c=function(){e.disabled||x((function(e){return!e}))},d=function(a){var t=a.getPrefixCls,v=e.className,x=e.prefixCls,s=e.inputPrefixCls,d=e.size,f=e.visibilityToggle,p=void 0===f||f,A=g(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),C=t("input",s),E=t("input-password",x),D=p&&function(l){var a,n=e.action,t=void 0===n?"click":n,o=e.iconRender,v=h[t]||"",x=(void 0===o?y:o)(i),b=(a={},(0,u.A)(a,v,c),(0,u.A)(a,"className","".concat(l,"-icon")),(0,u.A)(a,"key","passwordIcon"),(0,u.A)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,u.A)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return r.cloneElement(r.isValidElement(x)?x:r.createElement("span",null,x),b)}(E),B=o()(E,v,(0,u.A)({},"".concat(E,"-").concat(d),!!d)),S=(0,n.A)((0,n.A)({},(0,m.A)(A,["suffix","iconRender"])),{type:i?"text":"password",className:B,prefixCls:C,suffix:D});return d&&(S.size=d),r.createElement(b.Ay,(0,n.A)({ref:l},S))};return r.createElement(v.TG,null,d)}));var D=a(62058),B=a(13758),S=a(11774),F=a(87063),w=a(12701),M=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var u=0;for(n=Object.getOwnPropertySymbols(e);u<n.length;u++)l.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(a[n[u]]=e[n[u]])}return a};const O=r.forwardRef((function(e,l){var a,t,i=e.prefixCls,x=e.inputPrefixCls,s=e.className,c=e.size,d=e.suffix,f=e.enterButton,p=void 0!==f&&f,A=e.addonAfter,C=e.loading,m=e.disabled,g=e.onSearch,y=e.onChange,h=e.onCompositionStart,E=e.onCompositionEnd,O=M(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),P=r.useContext(v.QO),G=P.getPrefixCls,k=P.direction,j=r.useContext(F.A),L=r.useRef(!1),R=c||j,N=r.useRef(null),T=function(e){var l;document.activeElement===(null===(l=N.current)||void 0===l?void 0:l.input)&&e.preventDefault()},z=function(e){var l,a;g&&g(null===(a=null===(l=N.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},U=G("input-search",i),I=G("input",x),V="boolean"===typeof p?r.createElement(D.A,null):null,W="".concat(U,"-button"),H=p||{},K=H.type&&!0===H.type.__ANT_BUTTON;t=K||"button"===H.type?(0,w.Ob)(H,(0,n.A)({onMouseDown:T,onClick:function(e){var l,a;null===(a=null===(l=null===H||void 0===H?void 0:H.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),z(e)},key:"enterButton"},K?{className:W,size:R}:{})):r.createElement(S.A,{className:W,type:p?"primary":void 0,size:R,disabled:m,key:"enterButton",onMouseDown:T,onClick:z,loading:C,icon:V},p),A&&(t=[t,(0,w.Ob)(A,{key:"addonAfter"})]);var Y=o()(U,(a={},(0,u.A)(a,"".concat(U,"-rtl"),"rtl"===k),(0,u.A)(a,"".concat(U,"-").concat(R),!!R),(0,u.A)(a,"".concat(U,"-with-button"),!!p),a),s);return r.createElement(b.Ay,(0,n.A)({ref:(0,B.K4)(N,l),onPressEnter:function(e){L.current||z(e)}},O,{size:R,onCompositionStart:function(e){L.current=!0,null===h||void 0===h||h(e)},onCompositionEnd:function(e){L.current=!1,null===E||void 0===E||E(e)},prefixCls:I,addonAfter:t,suffix:d,onChange:function(e){e&&e.target&&"click"===e.type&&g&&g(e.target.value,e),y&&y(e)},className:Y,disabled:m}))}));var P=a(42471),G=b.Ay;G.Group=x,G.Search=O,G.TextArea=P.A,G.Password=E;const k=G}}]);
//# sourceMappingURL=84601.824fb262.chunk.js.map