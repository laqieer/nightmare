"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[67842],{86357:(e,l,a)=>{a.d(l,{A:()=>c});var t=a(89379),n=a(17313),o=a(64435),s=a(3428),i=a(65043),r=a(64004),u=a(70579);const{Text:v}=n.A;function c(e){const{view:l,name:a,offset:n,type:c}=e,p=null==l?0:(0,r.LF)(l,n,c),[f,b]=(0,i.useState)(p);return f!==p&&b(p),(0,u.jsxs)(o.A,{children:[(0,u.jsx)(v,{disabled:null==l,children:"".concat(a,":").concat(null==l?"":" ".concat(f," \u2192"))}),(0,u.jsx)(s.A,(0,t.A)({disabled:null==l,min:r.Wb[c][0],max:r.Wb[c][1],onPressEnter:e=>{const a=parseInt(e.target.value,10);(0,r.M9)(l,n,c,a),b(a)}},e))]})}c.defaultProps={view:null}},53551:(e,l,a)=>{a.d(l,{A:()=>b});var t=a(89379),n=a(53986),o=a(17313),s=a(64435),i=a(41976),r=a(65043),u=a(35475),v=a(64004),c=a(70579);const p=["isHex","reference","view","name","offset","type","options"],{Text:f}=o.A;function b(e){const{isHex:l,reference:a,view:o,name:b,offset:m,type:d,options:A}=e,x=(0,n.A)(e,p),y=null==o?0:(0,v.LF)(o,m,d),[w,S]=(0,r.useState)(y);w!==y&&S(y);const h=A.find((e=>e.value===w)),g=l?"0x".concat(w.toString(16)):w,j=void 0===h?g:h.label;return(0,c.jsxs)(s.A,{children:[(0,c.jsx)(f,{disabled:null==o,children:"".concat(b,":").concat(null==o?"":" ".concat(j," \u2192"))}),(0,c.jsx)(i.A,(0,t.A)({disabled:null==o,showSearch:!0,options:A,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e),onSelect:e=>{(0,v.M9)(o,m,d,e),S(e)}},x)),""===a||null==o?"":(0,c.jsx)(u.N_,{to:{pathname:"../".concat(a,"?id=").concat(w),state:o.buffer},children:"\u27a4"})]})}b.defaultProps={view:null,isHex:!1,reference:""}},90514:(e,l,a)=>{a.d(l,{A:()=>c});var t=a(89379),n=a(17313),o=a(64435),s=a(33307),i=a(65043),r=a(64004),u=a(70579);const{Text:v}=n.A;function c(e){const[l,a]=(0,i.useState)(""),{view:n,name:c,offset:p,type:f}=e,b=null==n?0:(0,r.LF)(n,p,f),[m,d]=(0,i.useState)(b);return m!==b&&d(b),(0,u.jsxs)(o.A,{children:[(0,u.jsx)(v,{disabled:null==n,children:"".concat(c,":").concat(null==n?"":" 0x".concat(m.toString(16)," \u2192"))}),(0,u.jsx)(s.A,(0,t.A)({disabled:null==n,allowClear:!0,maxLength:2*r.X1[f],prefix:"0x",value:l,onChange:e=>{const l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&a(l)},onPressEnter:e=>{const l=parseInt(e.target.value,16);(0,r.M9)(n,p,f,l),d(l)}},e))]})}c.defaultProps={view:null}},34871:(e,l,a)=>{a.d(l,{A:()=>s});var t=a(89379),n=a(41976),o=(a(65043),a(70579));function s(e){return(0,o.jsx)(n.A,(0,t.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(e,l)=>l.label.includes(e)},e))}},67842:(e,l,a)=>{a.r(l),a.d(l,{default:()=>j});a(65043);var t=a(73216),n=a(35475),o=a(64435),s=a(92135),i=a(33275),r=a(46974);const u=[{label:"Lord (Marth)",value:0},{label:"Pegasus Knight",value:1},{label:"Pegasus Knight (Caeda)",value:2},{label:"Falcon Knight",value:3},{label:"Dracoknight",value:4},{label:"Dracoknight (F)",value:5},{label:"Cavalier",value:6},{label:"Cavalier (F)",value:7},{label:"Paladin",value:8},{label:"Paladin (F)",value:9},{label:"Knight",value:10},{label:"General",value:11},{label:"Archer",value:12},{label:"Archer (F)",value:13},{label:"Sniper",value:14},{label:"Sniper (F)",value:15},{label:"Mercenary",value:16},{label:"Hero",value:17},{label:"Myrmidon",value:18},{label:"Myrmidon (F)",value:19},{label:"Swordmaster",value:20},{label:"Swordmaster (F)",value:21},{label:"Fighter",value:22},{label:"Warrior",value:23},{label:"Hunter",value:24},{label:"Horsemen",value:25},{label:"Pirate",value:26},{label:"Berserker",value:27},{label:"Dark Mage",value:28},{label:"Sorcerer",value:29},{label:"Mage",value:30},{label:"Mage (F)",value:31},{label:"Curate",value:32},{label:"Cleric",value:33},{label:"Sage",value:34},{label:"Sage (F)",value:35},{label:"Bishop",value:36},{label:"Bishop (F)",value:37},{label:"Thief",value:38},{label:"Manakete",value:39},{label:"Manakete (F)",value:40},{label:"Ballistician",value:41},{label:"Chameleon",value:42},{label:"Soldier",value:43},{label:"Magic Dragon",value:44},{label:"Earth Dragon",value:45},{label:"Fire Dragon",value:46},{label:"Divine Dragon",value:47},{label:"Dismounted Knight",value:48},{label:"Dismounted Knight (F)",value:49},{label:"Empty (?)",value:50},{label:"Entry 51",value:51}],v=[{label:"- Default/Lord",value:0},{label:"- Knight",value:1},{label:"- General",value:2},{label:"- Cavalier",value:3},{label:"- Paladin",value:4},{label:"- Merc/Myrm",value:5},{label:"- Hero/Swdmaster",value:6},{label:"- Fighter",value:7},{label:"- Warrior",value:8},{label:"- Pirate",value:9},{label:"- Berserker",value:10},{label:"- Thief",value:11},{label:"- Archer/Dismounted Knight",value:12},{label:"- Sniper/Dismounted Knight (F)",value:13},{label:"- Hunter",value:14},{label:"- Horsemen",value:15},{label:"- Chameleon",value:16},{label:"- Manakete",value:17},{label:"- Magic Users",value:18},{label:"- Unused",value:19},{label:"- Promoted Magic Users",value:20},{label:"- Flying",value:21},{label:"- Magic Dragon",value:22},{label:"- Soldier",value:23},{label:"- Ballistician",value:24}],c=[{label:"None/Blank",value:0},{label:"Special",value:2},{label:"Normal",value:3},{label:"Dragonstone",value:5}],p=[{label:"None",value:0},{label:"E",value:1},{label:"D",value:31},{label:"C",value:76},{label:"B",value:136},{label:"A",value:196}],f=[{label:"No Reclass",value:0},{label:"Set 1 (M)",value:1},{label:"Set 2 (M2)",value:2},{label:"Set 3 (F)",value:3},{label:"Set 4 (M-Pro)",value:4},{label:"Set 5 (M-Pro 2)",value:5},{label:"Set 6 (F-Pro)",value:6}],b=[{label:"Normal",value:0},{label:"Armor",value:4},{label:"Ballistician",value:8},{label:"Mounted",value:16},{label:"Flying",value:32},{label:"Manakete",value:64},{label:"Dragon",value:65},{label:"Dragon (Earth)",value:66},{label:"Archer",value:128}],m=[{label:"Male",value:0},{label:"Female",value:1}],d=[{label:"Unpromoted",value:0},{label:"Unpromoted + Boost",value:4},{label:"Promoted",value:8}],A=[{label:"None",value:0},{label:"Swordmaster +8% Crit",value:2},{label:"Sniper +11% Crit",value:5},{label:"Berserker +10% Hit",value:8},{label:"Unlock Ability?",value:16},{label:"Unknown",value:32},{label:"Special Ability Flag?",value:64},{label:"Unknown",value:127}];var x=a(64004),y=a(34871),w=a(90514),S=a(86357),h=a(53551),g=a(70579);function j(){var e;const[l]=(0,t.KC)(),[a,j]=(0,n.ok)(),C=a.get("id");let M=null;try{M=new DataView(l,29952+92*C,92)}catch(P){M=null}return(0,g.jsxs)(o.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,g.jsx)(s.A,{message:"FEDS Class Editor (U) by Blazer",type:"info"}),(0,g.jsx)("div",{children:(0,g.jsx)(y.A,{disabled:null==M,defaultValue:null!==(e=u.find((e=>e.value.toString()===C)))&&void 0!==e?e:C,onSelect:e=>j({id:e}),options:u})},C),(0,g.jsx)(w.A,{type:x.pe.U16,view:M,name:"Class ID? (Don't change!)",offset:0}),(0,g.jsx)(w.A,{type:x.pe.U16,view:M,name:"Class Text Pointer",offset:4}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base HP",offset:8}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Strength",offset:9}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Magic",offset:10}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Skill",offset:11}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Speed",offset:12}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Luck",offset:13}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Defense",offset:14}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Resistance",offset:15}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base HP Growth",offset:16}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Strength Growth",offset:17}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Magic Growth",offset:18}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Skill Growth",offset:19}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Speed Growth",offset:20}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Luck Growth",offset:21}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Defense Growth",offset:22}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Base Resistance Growth",offset:23}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Enemy HP Growth",offset:24}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Enemy Strength Growth",offset:25}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Enemy Magic Growth",offset:26}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Enemy Skill Growth",offset:27}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Enemy Speed Growth",offset:28}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Enemy Luck Growth",offset:29}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Enemy Defense Growth",offset:30}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Enemy Resistance Growth",offset:31}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Max HP",offset:32}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Max Strength",offset:33}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Max Magic",offset:34}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Max Skill",offset:35}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Max Speed",offset:36}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Max Luck",offset:37}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Max Defense",offset:38}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Max Resistance",offset:39}),(0,g.jsx)(h.A,{type:x.pe.U8,options:v,view:M,name:"Movement Type",offset:40}),(0,g.jsx)(S.A,{type:x.pe.S8,view:M,name:"Move (Stat)",offset:41}),(0,g.jsx)(h.A,{isHex:!0,type:x.pe.U8,options:c,view:M,name:"Weapon Usage",offset:43}),(0,g.jsx)(h.A,{type:x.pe.U8,options:p,view:M,name:"Sword Level",offset:44}),(0,g.jsx)(h.A,{type:x.pe.U8,options:p,view:M,name:"Lance Level",offset:45}),(0,g.jsx)(h.A,{type:x.pe.U8,options:p,view:M,name:"Axe Level",offset:46}),(0,g.jsx)(h.A,{type:x.pe.U8,options:p,view:M,name:"Bow Level",offset:47}),(0,g.jsx)(h.A,{type:x.pe.U8,options:p,view:M,name:"Magic Level",offset:48}),(0,g.jsx)(h.A,{type:x.pe.U8,options:p,view:M,name:"Staff Level",offset:49}),(0,g.jsx)(h.A,{isHex:!0,type:x.pe.U8,options:f,view:M,name:"Reclass Set",offset:52}),(0,g.jsx)(w.A,{type:x.pe.U8,view:M,name:"Unknown",offset:53}),(0,g.jsx)(h.A,{isHex:!0,type:x.pe.U8,options:b,view:M,name:"Unit Type",offset:54}),(0,g.jsx)(h.A,{type:x.pe.U8,options:m,view:M,name:"Gender",offset:56}),(0,g.jsx)(h.A,{isHex:!0,type:x.pe.U8,options:d,view:M,name:"Experience Control",offset:57}),(0,g.jsx)(h.A,{isHex:!0,type:x.pe.U8,options:A,view:M,name:"Class Abilities/Bonuses",offset:58}),(0,g.jsx)(w.A,{type:x.pe.U8,view:M,name:"Dragon Ability Flag (?)",offset:59}),(0,g.jsx)(w.A,{type:x.pe.U16,view:M,name:"Unknown Referential Pointer",offset:60}),(0,g.jsx)(w.A,{type:x.pe.U16,view:M,name:"Promote to Class",offset:64}),(0,g.jsx)(w.A,{type:x.pe.U16,view:M,name:"Unknown Referential Pointer",offset:68}),(0,g.jsx)(w.A,{type:x.pe.U16,view:M,name:"Unknown Referential Pointer",offset:72}),(0,g.jsx)(w.A,{type:x.pe.U16,view:M,name:"Unknown",offset:76}),(0,g.jsx)(i.A,{children:(0,g.jsx)(r.A,{})})]})}},33307:(e,l,a)=>{a.d(l,{A:()=>F});var t=a(58168),n=a(64467),o=a(64600),s=a.n(o),i=a(65043),r=a(35296),u=a(16436);const v=function(e){var l,a=(0,i.useContext)(r.QO),o=a.getPrefixCls,v=a.direction,c=e.prefixCls,p=e.className,f=void 0===p?"":p,b=o("input-group",c),m=s()(b,(l={},(0,n.A)(l,"".concat(b,"-lg"),"large"===e.size),(0,n.A)(l,"".concat(b,"-sm"),"small"===e.size),(0,n.A)(l,"".concat(b,"-compact"),e.compact),(0,n.A)(l,"".concat(b,"-rtl"),"rtl"===v),l),f),d=(0,i.useContext)(u.$W),A=(0,i.useMemo)((function(){return(0,t.A)((0,t.A)({},d),{isFormItemInput:!1})}),[d]);return i.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(u.$W.Provider,{value:A},e.children))};var c=a(28124),p=a(5544),f=a(89379);const b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var m=a(22172),d=function(e,l){return i.createElement(m.A,(0,f.A)((0,f.A)({},e),{},{ref:l,icon:b}))};d.displayName="EyeInvisibleOutlined";const A=i.forwardRef(d);var x=a(76191),y=a(18574),w=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]])}return a},S=function(e){return e?i.createElement(x.A,null):i.createElement(A,null)},h={click:"onClick",hover:"onMouseOver"};const g=i.forwardRef((function(e,l){var a=(0,i.useState)(!1),o=(0,p.A)(a,2),u=o[0],v=o[1],f=function(){e.disabled||v((function(e){return!e}))},b=function(a){var o=a.getPrefixCls,r=e.className,v=e.prefixCls,p=e.inputPrefixCls,b=e.size,m=e.visibilityToggle,d=void 0===m||m,A=w(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),x=o("input",p),g=o("input-password",v),j=d&&function(l){var a,t=e.action,o=void 0===t?"click":t,s=e.iconRender,r=h[o]||"",v=(void 0===s?S:s)(u),c=(a={},(0,n.A)(a,r,f),(0,n.A)(a,"className","".concat(l,"-icon")),(0,n.A)(a,"key","passwordIcon"),(0,n.A)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,n.A)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return i.cloneElement(i.isValidElement(v)?v:i.createElement("span",null,v),c)}(g),C=s()(g,r,(0,n.A)({},"".concat(g,"-").concat(b),!!b)),M=(0,t.A)((0,t.A)({},(0,y.A)(A,["suffix","iconRender"])),{type:u?"text":"password",className:C,prefixCls:x,suffix:j});return b&&(M.size=b),i.createElement(c.Ay,(0,t.A)({ref:l},M))};return i.createElement(r.TG,null,b)}));var j=a(62058),C=a(13758),M=a(11774),P=a(87063),k=a(12701),E=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]])}return a};const U=i.forwardRef((function(e,l){var a,o,u=e.prefixCls,v=e.inputPrefixCls,p=e.className,f=e.size,b=e.suffix,m=e.enterButton,d=void 0!==m&&m,A=e.addonAfter,x=e.loading,y=e.disabled,w=e.onSearch,S=e.onChange,h=e.onCompositionStart,g=e.onCompositionEnd,U=E(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),B=i.useContext(r.QO),D=B.getPrefixCls,F=B.direction,O=i.useContext(P.A),L=i.useRef(!1),G=f||O,N=i.useRef(null),H=function(e){var l;document.activeElement===(null===(l=N.current)||void 0===l?void 0:l.input)&&e.preventDefault()},z=function(e){var l,a;w&&w(null===(a=null===(l=N.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},R=D("input-search",u),T=D("input",v),K="boolean"===typeof d?i.createElement(j.A,null):null,I="".concat(R,"-button"),W=d||{},Q=W.type&&!0===W.type.__ANT_BUTTON;o=Q||"button"===W.type?(0,k.Ob)(W,(0,t.A)({onMouseDown:H,onClick:function(e){var l,a;null===(a=null===(l=null===W||void 0===W?void 0:W.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),z(e)},key:"enterButton"},Q?{className:I,size:G}:{})):i.createElement(M.A,{className:I,type:d?"primary":void 0,size:G,disabled:y,key:"enterButton",onMouseDown:H,onClick:z,loading:x,icon:K},d),A&&(o=[o,(0,k.Ob)(A,{key:"addonAfter"})]);var q=s()(R,(a={},(0,n.A)(a,"".concat(R,"-rtl"),"rtl"===F),(0,n.A)(a,"".concat(R,"-").concat(G),!!G),(0,n.A)(a,"".concat(R,"-with-button"),!!d),a),p);return i.createElement(c.Ay,(0,t.A)({ref:(0,C.K4)(N,l),onPressEnter:function(e){L.current||z(e)}},U,{size:G,onCompositionStart:function(e){L.current=!0,null===h||void 0===h||h(e)},onCompositionEnd:function(e){L.current=!1,null===g||void 0===g||g(e)},prefixCls:T,addonAfter:o,suffix:b,onChange:function(e){e&&e.target&&"click"===e.type&&w&&w(e.target.value,e),S&&S(e)},className:q,disabled:y}))}));var B=a(42471),D=c.Ay;D.Group=v,D.Search=U,D.TextArea=B.A,D.Password=g;const F=D}}]);
//# sourceMappingURL=67842.220fb793.chunk.js.map