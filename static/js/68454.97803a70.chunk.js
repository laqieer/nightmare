"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[68454],{53551:(l,e,a)=>{a.d(e,{A:()=>f});var u=a(89379),n=a(53986),t=a(17313),v=a(64435),o=a(41976),b=a(65043),r=a(35475),i=a(64004),s=a(70579);const c=["isHex","reference","view","name","offset","type","options"],{Text:d}=t.A;function f(l){const{isHex:e,reference:a,view:t,name:f,offset:p,type:h,options:C}=l,m=(0,n.A)(l,c),A=null==t?0:(0,i.LF)(t,p,h),[y,x]=(0,b.useState)(A);y!==A&&x(A);const g=C.find((l=>l.value===y)),w=e?"0x".concat(y.toString(16)):y,E=void 0===g?w:g.label;return(0,s.jsxs)(v.A,{children:[(0,s.jsx)(d,{disabled:null==t,children:"".concat(f,":").concat(null==t?"":" ".concat(E," \u2192"))}),(0,s.jsx)(o.A,(0,u.A)({disabled:null==t,showSearch:!0,options:C,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l),onSelect:l=>{(0,i.M9)(t,p,h,l),x(l)}},m)),""===a||null==t?"":(0,s.jsx)(r.N_,{to:{pathname:"../".concat(a,"?id=").concat(y),state:t.buffer},children:"\u27a4"})]})}f.defaultProps={view:null,isHex:!1,reference:""}},90514:(l,e,a)=>{a.d(e,{A:()=>s});var u=a(89379),n=a(17313),t=a(64435),v=a(33307),o=a(65043),b=a(64004),r=a(70579);const{Text:i}=n.A;function s(l){const[e,a]=(0,o.useState)(""),{view:n,name:s,offset:c,type:d}=l,f=null==n?0:(0,b.LF)(n,c,d),[p,h]=(0,o.useState)(f);return p!==f&&h(f),(0,r.jsxs)(t.A,{children:[(0,r.jsx)(i,{disabled:null==n,children:"".concat(s,":").concat(null==n?"":" 0x".concat(p.toString(16)," \u2192"))}),(0,r.jsx)(v.A,(0,u.A)({disabled:null==n,allowClear:!0,maxLength:2*b.X1[d],prefix:"0x",value:e,onChange:l=>{const e=l.currentTarget.value;(/^[0-9a-f]+$/.test(e)||""===e)&&a(e)},onPressEnter:l=>{const e=parseInt(l.target.value,16);(0,b.M9)(n,c,d,e),h(e)}},l))]})}s.defaultProps={view:null}},34871:(l,e,a)=>{a.d(e,{A:()=>v});var u=a(89379),n=a(41976),t=(a(65043),a(70579));function v(l){return(0,t.jsx)(n.A,(0,u.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l)},l))}},68454:(l,e,a)=>{a.r(e),a.d(e,{default:()=>h});a(65043);var u=a(73216),n=a(35475),t=a(64435),v=a(92135),o=a(33275),b=a(46974);const r=[{label:"Entry 0",value:0},{label:"Entry 1",value:1}],i=[{label:"(No one/Not referenced)",value:0},{label:"Eirika",value:1},{label:"Seth",value:2},{label:"Gilliam",value:3},{label:"Frantz",value:4},{label:"Moulder",value:5},{label:"Vanessa",value:6},{label:"Ross",value:7},{label:"Neimi",value:8},{label:"Colm",value:9},{label:"Garcia",value:10},{label:"Innes",value:11},{label:"Lute",value:12},{label:"Natasha",value:13},{label:"Cormag",value:14},{label:"Ephraim",value:15},{label:"Forde",value:16},{label:"Kyle",value:17},{label:"Amelia",value:18},{label:"Artur",value:19},{label:"Gerik",value:20},{label:"Tethys",value:21},{label:"Marisa",value:22},{label:"Saleh",value:23},{label:"Ewan",value:24},{label:"L'Arachel",value:25},{label:"Dozla",value:26},{label:"-",value:27},{label:"Rennac",value:28},{label:"Duessel",value:29},{label:"Myrrh",value:30},{label:"Knoll",value:31},{label:"Joshua",value:32},{label:"Syrene",value:33},{label:"Tana",value:34},{label:"Lyon",value:35},{label:"Orson",value:36},{label:"Glen",value:37},{label:"Selena",value:38},{label:"Valter",value:39},{label:"Riev",value:40},{label:"Caellach",value:41},{label:"Fado",value:42},{label:"Ismaire",value:43},{label:"Hayden",value:44},{label:"-",value:45},{label:"-",value:46},{label:"-",value:47},{label:"-",value:48},{label:"-",value:49},{label:"-",value:50},{label:"-",value:51},{label:"-",value:52},{label:"-",value:53},{label:"-",value:54},{label:"-",value:55},{label:"-",value:56},{label:"-",value:57},{label:"-",value:58},{label:"Leon's Summon",value:59},{label:"-",value:60},{label:"-",value:61},{label:"Knoll's Summon",value:62},{label:"Yuan's Summon",value:63},{label:"Lyon (Ch 17)",value:64},{label:"Morva (Ch 20)",value:65},{label:"Orson (Ch 5x)",value:66},{label:"Valter (Ch 15)",value:67},{label:"Selena (Ch 10B & 13B)",value:68},{label:"Valter (Prologue)",value:69},{label:"Breguet (Ch 1)",value:70},{label:"Bone (Ch 2)",value:71},{label:"Bazba (Ch 3)",value:72},{label:"Mummy (Ch 4)",value:73},{label:"Saar (Ch 5)",value:74},{label:"Novala (Ch 6)",value:75},{label:"Murray (Ch 7)",value:76},{label:"Tirado (Ch 8)",value:77},{label:"Binks (Ch 9A)",value:78},{label:"Pablo (Ch 10A)",value:79},{label:"Macdaire (Ch 12A)",value:80},{label:"Aias (Ch 13A)",value:81},{label:"Carlyle (Ch 14A)",value:82},{label:"Caellach (Ch 15)",value:83},{label:"Pablo (Ch 13A)",value:84},{label:"-",value:85},{label:"Gorgon (Ch 18)",value:86},{label:"Riev (Ch 19 & 20)",value:87},{label:"-",value:88},{label:"-",value:89},{label:"Gheb (Ch 9B)",value:90},{label:"Beran (Ch 10B)",value:91},{label:"Cyclops (Ch 12B)",value:92},{label:"Hellbone (Ch 11A)",value:93},{label:"Death Gargoyle (Ch 11B)",value:94},{label:"Mummy",value:95},{label:"-",value:96},{label:"-",value:97},{label:"-",value:98},{label:"-",value:99},{label:"-",value:100},{label:"-",value:101},{label:"Mountain Thief",value:102},{label:"-",value:103},{label:"O'Neill (Prologue)",value:104},{label:"Glen (Cutscene)",value:105},{label:"Zonta (Ch 5x)",value:106},{label:"Vigarde (Ch 14B)",value:107},{label:"Lyon (Ch Final)",value:108},{label:"Orson (Ch 16)",value:109},{label:"-",value:110},{label:"-",value:111},{label:"-",value:112},{label:"-",value:113},{label:"-",value:114},{label:"-",value:115},{label:"-",value:116},{label:"-",value:117},{label:"-",value:118},{label:"-",value:119},{label:"-",value:120},{label:"-",value:121},{label:"-",value:122},{label:"-",value:123},{label:"-",value:124},{label:"-",value:125},{label:"-",value:126},{label:"-",value:127},{label:"-",value:128},{label:"-",value:129},{label:"-",value:130},{label:"-",value:131},{label:"-",value:132},{label:"-",value:133},{label:"-",value:134},{label:"-",value:135},{label:"-",value:136},{label:"-",value:137},{label:"-",value:138},{label:"-",value:139},{label:"-",value:140},{label:"-",value:141},{label:"-",value:142},{label:"-",value:143},{label:"-",value:144},{label:"-",value:145},{label:"-",value:146},{label:"-",value:147},{label:"-",value:148},{label:"-",value:149},{label:"-",value:150},{label:"-",value:151},{label:"-",value:152},{label:"-",value:153},{label:"-",value:154},{label:"-",value:155},{label:"-",value:156},{label:"-",value:157},{label:"-",value:158},{label:"-",value:159},{label:"-",value:160},{label:"-",value:161},{label:"-",value:162},{label:"-",value:163},{label:"-",value:164},{label:"-",value:165},{label:"-",value:166},{label:"-",value:167},{label:"-",value:168},{label:"-",value:169},{label:"-",value:170},{label:"-",value:171},{label:"-",value:172},{label:"-",value:173},{label:"-",value:174},{label:"-",value:175},{label:"-",value:176},{label:"-",value:177},{label:"-",value:178},{label:"-",value:179},{label:"-",value:180},{label:"-",value:181},{label:"-",value:182},{label:"-",value:183},{label:"-",value:184},{label:"-",value:185},{label:"-",value:186},{label:"-",value:187},{label:"-",value:188},{label:"-",value:189},{label:"Demon King",value:190},{label:"-",value:191},{label:"Frelian",value:192},{label:"Frelian",value:193},{label:"-",value:194},{label:"-",value:195},{label:"-",value:196},{label:"Fado (Renais)",value:197},{label:"-",value:198},{label:"Hayden (Frelia)",value:199},{label:"Mansel (Rausten)",value:200},{label:"Klimt (Carcino)",value:201},{label:"Dara (Caer Pelyn)",value:202},{label:"Ismaire (Jehanna)",value:203},{label:"Pegasus Messenger",value:204},{label:"Rausten Knight",value:205},{label:"Rausten Knight",value:206},{label:"(Untested starting and beyond this point)",value:207},{label:"-",value:208},{label:"-",value:209},{label:"-",value:210},{label:"-",value:211},{label:"-",value:212},{label:"-",value:213},{label:"-",value:214},{label:"-",value:215},{label:"-",value:216},{label:"-",value:217},{label:"-",value:218},{label:"-",value:219},{label:"-",value:220},{label:"-",value:221},{label:"-",value:222},{label:"-",value:223},{label:"-",value:224},{label:"-",value:225},{label:"-",value:226},{label:"-",value:227},{label:"-",value:228},{label:"-",value:229},{label:"-",value:230},{label:"-",value:231},{label:"-",value:232},{label:"-",value:233},{label:"-",value:234},{label:"-",value:235},{label:"-",value:236},{label:"-",value:237},{label:"-",value:238},{label:"-",value:239},{label:"-",value:240},{label:"-",value:241},{label:"-",value:242},{label:"-",value:243},{label:"River Folk Child (F)",value:244},{label:"River Folk (F)",value:245},{label:"River Folk",value:246},{label:"River Folk (F)",value:247},{label:"River Folk Child",value:248},{label:"Renais Civilian Child (F)",value:249},{label:"Renais Civilian",value:250},{label:"Renais Civilian (F)",value:251},{label:"Old Civilian",value:252},{label:"Enemy",value:253},{label:"Wall",value:254},{label:"Snag",value:255}];var s=a(64004),c=a(34871),d=a(90514),f=a(53551),p=a(70579);function h(){var l;const[e]=(0,u.KC)(),[a,h]=(0,n.ok)(),C=a.get("id");let m=null;try{m=new DataView(e,10397032+16*C,16)}catch(A){m=null}return(0,p.jsxs)(t.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,p.jsx)(v.A,{message:"FE8 Ch 11 Ephraim recruitment editor by Nintenlord",type:"info"}),(0,p.jsx)("div",{children:(0,p.jsx)(c.A,{disabled:null==m,defaultValue:null!==(l=r.find((l=>l.value.toString()===C)))&&void 0!==l?l:C,onSelect:l=>h({id:l}),options:r})},C),(0,p.jsx)(d.A,{type:s.pe.U8,view:m,name:"Event number",offset:2}),(0,p.jsx)(d.A,{type:s.pe.U32,view:m,name:"Pointer to event",offset:4}),(0,p.jsx)(f.A,{isHex:!0,type:s.pe.U8,reference:"CharacterEditor",options:i,view:m,name:"Recruiter",offset:8}),(0,p.jsx)(f.A,{isHex:!0,type:s.pe.U8,reference:"CharacterEditor",options:i,view:m,name:"Recruited",offset:9}),(0,p.jsx)(o.A,{children:(0,p.jsx)(b.A,{})})]})}},33307:(l,e,a)=>{a.d(e,{A:()=>N});var u=a(58168),n=a(64467),t=a(64600),v=a.n(t),o=a(65043),b=a(35296),r=a(16436);const i=function(l){var e,a=(0,o.useContext)(b.QO),t=a.getPrefixCls,i=a.direction,s=l.prefixCls,c=l.className,d=void 0===c?"":c,f=t("input-group",s),p=v()(f,(e={},(0,n.A)(e,"".concat(f,"-lg"),"large"===l.size),(0,n.A)(e,"".concat(f,"-sm"),"small"===l.size),(0,n.A)(e,"".concat(f,"-compact"),l.compact),(0,n.A)(e,"".concat(f,"-rtl"),"rtl"===i),e),d),h=(0,o.useContext)(r.$W),C=(0,o.useMemo)((function(){return(0,u.A)((0,u.A)({},h),{isFormItemInput:!1})}),[h]);return o.createElement("span",{className:p,style:l.style,onMouseEnter:l.onMouseEnter,onMouseLeave:l.onMouseLeave,onFocus:l.onFocus,onBlur:l.onBlur},o.createElement(r.$W.Provider,{value:C},l.children))};var s=a(28124),c=a(5544),d=a(89379);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};var p=a(22172),h=function(l,e){return o.createElement(p.A,(0,d.A)((0,d.A)({},l),{},{ref:e,icon:f}))};h.displayName="EyeInvisibleOutlined";const C=o.forwardRef(h);var m=a(76191),A=a(18574),y=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(u=Object.getOwnPropertySymbols(l);n<u.length;n++)e.indexOf(u[n])<0&&Object.prototype.propertyIsEnumerable.call(l,u[n])&&(a[u[n]]=l[u[n]])}return a},x=function(l){return l?o.createElement(m.A,null):o.createElement(C,null)},g={click:"onClick",hover:"onMouseOver"};const w=o.forwardRef((function(l,e){var a=(0,o.useState)(!1),t=(0,c.A)(a,2),r=t[0],i=t[1],d=function(){l.disabled||i((function(l){return!l}))},f=function(a){var t=a.getPrefixCls,b=l.className,i=l.prefixCls,c=l.inputPrefixCls,f=l.size,p=l.visibilityToggle,h=void 0===p||p,C=y(l,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),m=t("input",c),w=t("input-password",i),E=h&&function(e){var a,u=l.action,t=void 0===u?"click":u,v=l.iconRender,b=g[t]||"",i=(void 0===v?x:v)(r),s=(a={},(0,n.A)(a,b,d),(0,n.A)(a,"className","".concat(e,"-icon")),(0,n.A)(a,"key","passwordIcon"),(0,n.A)(a,"onMouseDown",(function(l){l.preventDefault()})),(0,n.A)(a,"onMouseUp",(function(l){l.preventDefault()})),a);return o.cloneElement(o.isValidElement(i)?i:o.createElement("span",null,i),s)}(w),S=v()(w,b,(0,n.A)({},"".concat(w,"-").concat(f),!!f)),O=(0,u.A)((0,u.A)({},(0,A.A)(C,["suffix","iconRender"])),{type:r?"text":"password",className:S,prefixCls:m,suffix:E});return f&&(O.size=f),o.createElement(s.Ay,(0,u.A)({ref:e},O))};return o.createElement(b.TG,null,f)}));var E=a(62058),S=a(13758),O=a(11774),P=a(87063),j=a(12701),F=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(u=Object.getOwnPropertySymbols(l);n<u.length;n++)e.indexOf(u[n])<0&&Object.prototype.propertyIsEnumerable.call(l,u[n])&&(a[u[n]]=l[u[n]])}return a};const M=o.forwardRef((function(l,e){var a,t,r=l.prefixCls,i=l.inputPrefixCls,c=l.className,d=l.size,f=l.suffix,p=l.enterButton,h=void 0!==p&&p,C=l.addonAfter,m=l.loading,A=l.disabled,y=l.onSearch,x=l.onChange,g=l.onCompositionStart,w=l.onCompositionEnd,M=F(l,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),R=o.useContext(b.QO),k=R.getPrefixCls,N=R.direction,B=o.useContext(P.A),z=o.useRef(!1),L=d||B,T=o.useRef(null),D=function(l){var e;document.activeElement===(null===(e=T.current)||void 0===e?void 0:e.input)&&l.preventDefault()},G=function(l){var e,a;y&&y(null===(a=null===(e=T.current)||void 0===e?void 0:e.input)||void 0===a?void 0:a.value,l)},I=k("input-search",r),K=k("input",i),H="boolean"===typeof h?o.createElement(E.A,null):null,V="".concat(I,"-button"),U=h||{},Q=U.type&&!0===U.type.__ANT_BUTTON;t=Q||"button"===U.type?(0,j.Ob)(U,(0,u.A)({onMouseDown:D,onClick:function(l){var e,a;null===(a=null===(e=null===U||void 0===U?void 0:U.props)||void 0===e?void 0:e.onClick)||void 0===a||a.call(e,l),G(l)},key:"enterButton"},Q?{className:V,size:L}:{})):o.createElement(O.A,{className:V,type:h?"primary":void 0,size:L,disabled:A,key:"enterButton",onMouseDown:D,onClick:G,loading:m,icon:H},h),C&&(t=[t,(0,j.Ob)(C,{key:"addonAfter"})]);var q=v()(I,(a={},(0,n.A)(a,"".concat(I,"-rtl"),"rtl"===N),(0,n.A)(a,"".concat(I,"-").concat(L),!!L),(0,n.A)(a,"".concat(I,"-with-button"),!!h),a),c);return o.createElement(s.Ay,(0,u.A)({ref:(0,S.K4)(T,e),onPressEnter:function(l){z.current||G(l)}},M,{size:L,onCompositionStart:function(l){z.current=!0,null===g||void 0===g||g(l)},onCompositionEnd:function(l){z.current=!1,null===w||void 0===w||w(l)},prefixCls:K,addonAfter:t,suffix:f,onChange:function(l){l&&l.target&&"click"===l.type&&y&&y(l.target.value,l),x&&x(l)},className:q,disabled:A}))}));var R=a(42471),k=s.Ay;k.Group=i,k.Search=M,k.TextArea=R.A,k.Password=w;const N=k}}]);
//# sourceMappingURL=68454.97803a70.chunk.js.map