"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[27244],{53551:(e,l,a)=>{a.d(l,{A:()=>f});var n=a(89379),t=a(53986),o=a(17313),r=a(64435),i=a(41976),u=a(65043),s=a(35475),c=a(64004),v=a(70579);const b=["isHex","reference","view","name","offset","type","options"],{Text:d}=o.A;function f(e){const{isHex:l,reference:a,view:o,name:f,offset:p,type:g,options:m}=e,h=(0,t.A)(e,b),A=null==o?0:(0,c.LF)(o,p,g),[x,y]=(0,u.useState)(A);x!==A&&y(A);const C=m.find((e=>e.value===x)),S=l?"0x".concat(x.toString(16)):x,w=void 0===C?S:C.label;return(0,v.jsxs)(r.A,{children:[(0,v.jsx)(d,{disabled:null==o,children:"".concat(f,":").concat(null==o?"":" ".concat(w," \u2192"))}),(0,v.jsx)(i.A,(0,n.A)({disabled:null==o,showSearch:!0,options:m,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,c.M9)(o,p,g,e),y(e)}},h)),""===a||null==o?"":(0,v.jsx)(s.N_,{to:{pathname:"../".concat(a,"?id=").concat(x),state:o.buffer},children:"\u27a4"})]})}f.defaultProps={view:null,isHex:!1,reference:""}},90514:(e,l,a)=>{a.d(l,{A:()=>v});var n=a(89379),t=a(17313),o=a(64435),r=a(33307),i=a(65043),u=a(64004),s=a(70579);const{Text:c}=t.A;function v(e){const[l,a]=(0,i.useState)(""),{view:t,name:v,offset:b,type:d}=e,f=null==t?0:(0,u.LF)(t,b,d),[p,g]=(0,i.useState)(f);return p!==f&&g(f),(0,s.jsxs)(o.A,{children:[(0,s.jsx)(c,{disabled:null==t,children:"".concat(v,":").concat(null==t?"":" 0x".concat(p.toString(16)," \u2192"))}),(0,s.jsx)(r.A,(0,n.A)({disabled:null==t,allowClear:!0,maxLength:2*u.X1[d],prefix:"0x",value:l,onChange:e=>{const l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&a(l)},onPressEnter:e=>{const l=parseInt(e.target.value,16);(0,u.M9)(t,b,d,l),g(l)}},e))]})}v.defaultProps={view:null}},34871:(e,l,a)=>{a.d(l,{A:()=>r});var n=a(89379),t=a(41976),o=(a(65043),a(70579));function r(e){return(0,o.jsx)(t.A,(0,n.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},27244:(e,l,a)=>{a.r(l),a.d(l,{default:()=>g});a(65043);var n=a(73216),t=a(35475),o=a(64435),r=a(92135),i=a(33275),u=a(46974);const s=[{label:"Ephraim Lord",value:0},{label:"Eirika Lord",value:1},{label:"Ephraim Master Lord",value:2},{label:"Eirika Master Lord",value:3},{label:"Socialknight",value:4},{label:"Paladin",value:5},{label:"Armour Knight",value:6},{label:"General",value:7},{label:"Thief",value:8},{label:"Mamkute",value:9},{label:"Mercenary",value:10},{label:"Mercenary (F)",value:11},{label:"Hero",value:12},{label:"Hero (F)",value:13},{label:"Swordfighter",value:14},{label:"Swordfighter (F)",value:15},{label:"Swordmaster",value:16},{label:"Swordmaster (F)",value:17},{label:"Assassin",value:18},{label:"Assassin (F)",value:19},{label:"Archer",value:20},{label:"Archer (F)",value:21},{label:"Sniper",value:22},{label:"Sniper (F)",value:23},{label:"Ranger",value:24},{label:"Dragon Knight",value:25},{label:"Dragon Knight (F)",value:26},{label:"Dragon Master",value:27},{label:"Dragon Master (F)",value:28},{label:"Wyvern Knight",value:29},{label:"Mage",value:30},{label:"Mage (F)",value:31},{label:"Sage",value:32},{label:"Sage (F)",value:33},{label:"Mage Knight",value:34},{label:"Mage Knight (F)",value:35},{label:"Bishop",value:36},{label:"Bishop (F)",value:37},{label:"Shaman",value:38},{label:"Druid",value:39},{label:"Summoner",value:40},{label:"Rogue",value:41},{label:"Gorgon Egg",value:42},{label:"Great Knight",value:43},{label:"Trainee Soldier (2)",value:44},{label:"Trainee Fighter (3)",value:45},{label:"Trainee Mage (3)",value:46},{label:"Mamkute",value:47},{label:"Mamkute (F)",value:48},{label:"Fighter",value:49},{label:"Warrior",value:50},{label:"Mountain Thief",value:51},{label:"Pirate",value:52},{label:"Berserker",value:53},{label:"Monk",value:54},{label:"Priest",value:55},{label:"Bard",value:56},{label:"Pegasus Knight",value:57},{label:"Falcon Knight",value:58},{label:"Sister",value:59},{label:"Troubadour",value:60},{label:"Valkyrie",value:61},{label:"Dancer",value:62},{label:"Soldier",value:63},{label:"Necromancer",value:64},{label:"Fleet",value:65},{label:"Ghost Fighter",value:66},{label:"Zombie",value:67},{label:"Mummy",value:68},{label:"Skeleton",value:69},{label:"Skeleton (Bow)",value:70},{label:"Hellbone",value:71},{label:"Hellbone (Bow)",value:72},{label:"Bael",value:73},{label:"Elder Bael",value:74},{label:"Cyclops",value:75},{label:"Mauthedoog",value:76},{label:"Cerberus",value:77},{label:"Tarvos",value:78},{label:"Macdaire",value:79},{label:"Bigl",value:80},{label:"Archbigl",value:81},{label:"Gorgon",value:82},{label:"Gorgon Egg",value:83},{label:"Gargoyle",value:84},{label:"Death Gargoyle",value:85},{label:"Dragon Zombie",value:86},{label:"Demon King",value:87},{label:"Archer on Ballista",value:88},{label:"Archer on Iron Ballista",value:89},{label:"Archer on Killer Ballista",value:90},{label:"Ballista",value:91},{label:"Iron Ballista",value:92},{label:"Killer Ballista",value:93},{label:"Civilian",value:94},{label:"Civilian (F)",value:95},{label:"Civilian",value:96},{label:"Civilian (F)",value:97},{label:"Peer",value:98},{label:"Queen",value:99},{label:"Prince",value:100},{label:"Queen",value:101},{label:"(empty)",value:102},{label:"Fallen Prince",value:103},{label:"Tent",value:104},{label:"Pontifex",value:105},{label:"Dead Peer",value:106}],c=[{label:"16x16",value:0},{label:"16x32",value:1},{label:"32x32",value:2}];var v=a(64004),b=a(34871),d=a(90514),f=a(53551),p=a(70579);function g(){var e;const[l]=(0,n.KC)(),[a,g]=(0,t.ok)(),m=a.get("id");let h=null;try{h=new DataView(l,9107584+8*m,8)}catch(A){h=null}return(0,p.jsxs)(o.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,p.jsx)(r.A,{message:"FE8 Standing map sprite editor by Nintenlord",type:"info"}),(0,p.jsx)("div",{children:(0,p.jsx)(b.A,{disabled:null==h,defaultValue:null!==(e=s.find((e=>e.value.toString()===m)))&&void 0!==e?e:m,onSelect:e=>g({id:e}),options:s})},m),(0,p.jsx)(d.A,{type:v.pe.U8,view:h,name:"Unknown",offset:0}),(0,p.jsx)(f.A,{isHex:!0,type:v.pe.U8,options:c,view:h,name:"Size",offset:2}),(0,p.jsx)(d.A,{type:v.pe.U32,view:h,name:"Poiner to graphics",offset:4}),(0,p.jsx)(i.A,{children:(0,p.jsx)(u.A,{})})]})}},33307:(e,l,a)=>{a.d(l,{A:()=>T});var n=a(58168),t=a(64467),o=a(64600),r=a.n(o),i=a(65043),u=a(35296),s=a(16436);const c=function(e){var l,a=(0,i.useContext)(u.QO),o=a.getPrefixCls,c=a.direction,v=e.prefixCls,b=e.className,d=void 0===b?"":b,f=o("input-group",v),p=r()(f,(l={},(0,t.A)(l,"".concat(f,"-lg"),"large"===e.size),(0,t.A)(l,"".concat(f,"-sm"),"small"===e.size),(0,t.A)(l,"".concat(f,"-compact"),e.compact),(0,t.A)(l,"".concat(f,"-rtl"),"rtl"===c),l),d),g=(0,i.useContext)(s.$W),m=(0,i.useMemo)((function(){return(0,n.A)((0,n.A)({},g),{isFormItemInput:!1})}),[g]);return i.createElement("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(s.$W.Provider,{value:m},e.children))};var v=a(28124),b=a(5544),d=a(89379);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var p=a(22172),g=function(e,l){return i.createElement(p.A,(0,d.A)((0,d.A)({},e),{},{ref:l,icon:f}))};g.displayName="EyeInvisibleOutlined";const m=i.forwardRef(g);var h=a(76191),A=a(18574),x=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a},y=function(e){return e?i.createElement(h.A,null):i.createElement(m,null)},C={click:"onClick",hover:"onMouseOver"};const S=i.forwardRef((function(e,l){var a=(0,i.useState)(!1),o=(0,b.A)(a,2),s=o[0],c=o[1],d=function(){e.disabled||c((function(e){return!e}))},f=function(a){var o=a.getPrefixCls,u=e.className,c=e.prefixCls,b=e.inputPrefixCls,f=e.size,p=e.visibilityToggle,g=void 0===p||p,m=x(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),h=o("input",b),S=o("input-password",c),w=g&&function(l){var a,n=e.action,o=void 0===n?"click":n,r=e.iconRender,u=C[o]||"",c=(void 0===r?y:r)(s),v=(a={},(0,t.A)(a,u,d),(0,t.A)(a,"className","".concat(l,"-icon")),(0,t.A)(a,"key","passwordIcon"),(0,t.A)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,t.A)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return i.cloneElement(i.isValidElement(c)?c:i.createElement("span",null,c),v)}(S),M=r()(S,u,(0,t.A)({},"".concat(S,"-").concat(f),!!f)),E=(0,n.A)((0,n.A)({},(0,A.A)(m,["suffix","iconRender"])),{type:s?"text":"password",className:M,prefixCls:h,suffix:w});return f&&(E.size=f),i.createElement(v.Ay,(0,n.A)({ref:l},E))};return i.createElement(u.TG,null,f)}));var w=a(62058),M=a(13758),E=a(11774),P=a(87063),F=a(12701),k=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};const O=i.forwardRef((function(e,l){var a,o,s=e.prefixCls,c=e.inputPrefixCls,b=e.className,d=e.size,f=e.suffix,p=e.enterButton,g=void 0!==p&&p,m=e.addonAfter,h=e.loading,A=e.disabled,x=e.onSearch,y=e.onChange,C=e.onCompositionStart,S=e.onCompositionEnd,O=k(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),j=i.useContext(u.QO),B=j.getPrefixCls,T=j.direction,D=i.useContext(P.A),N=i.useRef(!1),z=d||D,L=i.useRef(null),K=function(e){var l;document.activeElement===(null===(l=L.current)||void 0===l?void 0:l.input)&&e.preventDefault()},G=function(e){var l,a;x&&x(null===(a=null===(l=L.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},I=B("input-search",s),R=B("input",c),H="boolean"===typeof g?i.createElement(w.A,null):null,Q="".concat(I,"-button"),U=g||{},q=U.type&&!0===U.type.__ANT_BUTTON;o=q||"button"===U.type?(0,F.Ob)(U,(0,n.A)({onMouseDown:K,onClick:function(e){var l,a;null===(a=null===(l=null===U||void 0===U?void 0:U.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),G(e)},key:"enterButton"},q?{className:Q,size:z}:{})):i.createElement(E.A,{className:Q,type:g?"primary":void 0,size:z,disabled:A,key:"enterButton",onMouseDown:K,onClick:G,loading:h,icon:H},g),m&&(o=[o,(0,F.Ob)(m,{key:"addonAfter"})]);var V=r()(I,(a={},(0,t.A)(a,"".concat(I,"-rtl"),"rtl"===T),(0,t.A)(a,"".concat(I,"-").concat(z),!!z),(0,t.A)(a,"".concat(I,"-with-button"),!!g),a),b);return i.createElement(v.Ay,(0,n.A)({ref:(0,M.K4)(L,l),onPressEnter:function(e){N.current||G(e)}},O,{size:z,onCompositionStart:function(e){N.current=!0,null===C||void 0===C||C(e)},onCompositionEnd:function(e){N.current=!1,null===S||void 0===S||S(e)},prefixCls:R,addonAfter:o,suffix:f,onChange:function(e){e&&e.target&&"click"===e.type&&x&&x(e.target.value,e),y&&y(e)},className:V,disabled:A}))}));var j=a(42471),B=v.Ay;B.Group=c,B.Search=O,B.TextArea=j.A,B.Password=S;const T=B}}]);
//# sourceMappingURL=27244.b88ac14b.chunk.js.map