"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[54688],{4220:function(l,e,a){a.d(e,{Z:function(){return p}});var u=a(1413),n=a(29439),t=a(44925),v=a(97788),r=a(83099),o=a(21951),i=a(72791),b=a(11087),s=a(83282),c=a(80184),f=["isHex","reference","view","name","offset","type","options"],d=v.Z.Text;function p(l){var e=l.isHex,a=l.reference,v=l.view,p=l.name,h=l.offset,C=l.type,m=l.options,y=(0,t.Z)(l,f),x=null==v?0:(0,s.ij)(v,h,C),Z=(0,i.useState)(x),g=(0,n.Z)(Z,2),E=g[0],w=g[1];E!==x&&w(x);var S=m.find((function(l){return l.value===E})),P=e?"0x".concat(E.toString(16)):E,j=void 0===S?P:S.label;return(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(d,{disabled:null==v,children:"".concat(p,":").concat(null==v?"":" ".concat(j," \u2192"))}),(0,c.jsx)(o.Z,(0,u.Z)({disabled:null==v,showSearch:!0,options:m,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(l,e){return e.label.includes(l)},onSelect:function(l){(0,s.cW)(v,h,C,l),w(l)}},y)),""===a||null==v?"":(0,c.jsx)(b.rU,{to:{pathname:"../".concat(a,"?id=").concat(E),state:v.buffer},children:"\u27a4"})]})}p.defaultProps={view:null,isHex:!1,reference:""}},23145:function(l,e,a){a.d(e,{Z:function(){return c}});var u=a(1413),n=a(29439),t=a(97788),v=a(83099),r=a(49389),o=a(72791),i=a(83282),b=a(80184),s=t.Z.Text;function c(l){var e=(0,o.useState)(""),a=(0,n.Z)(e,2),t=a[0],c=a[1],f=l.view,d=l.name,p=l.offset,h=l.type,C=null==f?0:(0,i.ij)(f,p,h),m=(0,o.useState)(C),y=(0,n.Z)(m,2),x=y[0],Z=y[1];return x!==C&&Z(C),(0,b.jsxs)(v.Z,{children:[(0,b.jsx)(s,{disabled:null==f,children:"".concat(d,":").concat(null==f?"":" 0x".concat(x.toString(16)," \u2192"))}),(0,b.jsx)(r.Z,(0,u.Z)({disabled:null==f,allowClear:!0,maxLength:2*i.Tz[h],prefix:"0x",value:t,onChange:function(l){var e=l.currentTarget.value;(/^[0-9a-f]+$/.test(e)||""===e)&&c(e)},onPressEnter:function(l){var e=parseInt(l.target.value,16);(0,i.cW)(f,p,h,e),Z(e)}},l))]})}c.defaultProps={view:null}},9933:function(l,e,a){a.d(e,{Z:function(){return v}});var u=a(1413),n=a(21951),t=(a(72791),a(80184));function v(l){return(0,t.jsx)(n.Z,(0,u.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(l,e){return e.label.includes(l)}},l))}},54688:function(l,e,a){a.r(e),a.d(e,{default:function(){return C}});var u=a(29439),n=(a(72791),a(57689)),t=a(11087),v=a(83099),r=a(33441),o=a(43292),i=a(79042),b=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2}],s=[{label:"(No one/Not referenced)",value:0},{label:"Eirika",value:1},{label:"Seth",value:2},{label:"Gilliam",value:3},{label:"Frantz",value:4},{label:"Moulder",value:5},{label:"Vanessa",value:6},{label:"Ross",value:7},{label:"Neimi",value:8},{label:"Colm",value:9},{label:"Garcia",value:10},{label:"Innes",value:11},{label:"Lute",value:12},{label:"Natasha",value:13},{label:"Cormag",value:14},{label:"Ephraim",value:15},{label:"Forde",value:16},{label:"Kyle",value:17},{label:"Amelia",value:18},{label:"Artur",value:19},{label:"Gerik",value:20},{label:"Tethys",value:21},{label:"Marisa",value:22},{label:"Saleh",value:23},{label:"Ewan",value:24},{label:"L'Arachel",value:25},{label:"Dozla",value:26},{label:"-",value:27},{label:"Rennac",value:28},{label:"Duessel",value:29},{label:"Myrrh",value:30},{label:"Knoll",value:31},{label:"Joshua",value:32},{label:"Syrene",value:33},{label:"Tana",value:34},{label:"Lyon",value:35},{label:"Orson",value:36},{label:"Glen",value:37},{label:"Selena",value:38},{label:"Valter",value:39},{label:"Riev",value:40},{label:"Caellach",value:41},{label:"Fado",value:42},{label:"Ismaire",value:43},{label:"Hayden",value:44},{label:"-",value:45},{label:"-",value:46},{label:"-",value:47},{label:"-",value:48},{label:"-",value:49},{label:"-",value:50},{label:"-",value:51},{label:"-",value:52},{label:"-",value:53},{label:"-",value:54},{label:"-",value:55},{label:"-",value:56},{label:"-",value:57},{label:"-",value:58},{label:"Leon's Summon",value:59},{label:"-",value:60},{label:"-",value:61},{label:"Knoll's Summon",value:62},{label:"Yuan's Summon",value:63},{label:"Lyon (Ch 17)",value:64},{label:"Morva (Ch 20)",value:65},{label:"Orson (Ch 5x)",value:66},{label:"Valter (Ch 15)",value:67},{label:"Selena (Ch 10B & 13B)",value:68},{label:"Valter (Prologue)",value:69},{label:"Breguet (Ch 1)",value:70},{label:"Bone (Ch 2)",value:71},{label:"Bazba (Ch 3)",value:72},{label:"Mummy (Ch 4)",value:73},{label:"Saar (Ch 5)",value:74},{label:"Novala (Ch 6)",value:75},{label:"Murray (Ch 7)",value:76},{label:"Tirado (Ch 8)",value:77},{label:"Binks (Ch 9A)",value:78},{label:"Pablo (Ch 10A)",value:79},{label:"Macdaire (Ch 12A)",value:80},{label:"Aias (Ch 13A)",value:81},{label:"Carlyle (Ch 14A)",value:82},{label:"Caellach (Ch 15)",value:83},{label:"Pablo (Ch 13A)",value:84},{label:"-",value:85},{label:"Gorgon (Ch 18)",value:86},{label:"Riev (Ch 19 & 20)",value:87},{label:"-",value:88},{label:"-",value:89},{label:"Gheb (Ch 9B)",value:90},{label:"Beran (Ch 10B)",value:91},{label:"Cyclops (Ch 12B)",value:92},{label:"Hellbone (Ch 11A)",value:93},{label:"Death Gargoyle (Ch 11B)",value:94},{label:"Mummy",value:95},{label:"-",value:96},{label:"-",value:97},{label:"-",value:98},{label:"-",value:99},{label:"-",value:100},{label:"-",value:101},{label:"Mountain Thief",value:102},{label:"-",value:103},{label:"O'Neill (Prologue)",value:104},{label:"Glen (Cutscene)",value:105},{label:"Zonta (Ch 5x)",value:106},{label:"Vigarde (Ch 14B)",value:107},{label:"Lyon (Ch Final)",value:108},{label:"Orson (Ch 16)",value:109},{label:"-",value:110},{label:"-",value:111},{label:"-",value:112},{label:"-",value:113},{label:"-",value:114},{label:"-",value:115},{label:"-",value:116},{label:"-",value:117},{label:"-",value:118},{label:"-",value:119},{label:"-",value:120},{label:"-",value:121},{label:"-",value:122},{label:"-",value:123},{label:"-",value:124},{label:"-",value:125},{label:"-",value:126},{label:"-",value:127},{label:"-",value:128},{label:"-",value:129},{label:"-",value:130},{label:"-",value:131},{label:"-",value:132},{label:"-",value:133},{label:"-",value:134},{label:"-",value:135},{label:"-",value:136},{label:"-",value:137},{label:"-",value:138},{label:"-",value:139},{label:"-",value:140},{label:"-",value:141},{label:"-",value:142},{label:"-",value:143},{label:"-",value:144},{label:"-",value:145},{label:"-",value:146},{label:"-",value:147},{label:"-",value:148},{label:"-",value:149},{label:"-",value:150},{label:"-",value:151},{label:"-",value:152},{label:"-",value:153},{label:"-",value:154},{label:"-",value:155},{label:"-",value:156},{label:"-",value:157},{label:"-",value:158},{label:"-",value:159},{label:"-",value:160},{label:"-",value:161},{label:"-",value:162},{label:"-",value:163},{label:"-",value:164},{label:"-",value:165},{label:"-",value:166},{label:"-",value:167},{label:"-",value:168},{label:"-",value:169},{label:"-",value:170},{label:"-",value:171},{label:"-",value:172},{label:"-",value:173},{label:"-",value:174},{label:"-",value:175},{label:"-",value:176},{label:"-",value:177},{label:"-",value:178},{label:"-",value:179},{label:"-",value:180},{label:"-",value:181},{label:"-",value:182},{label:"-",value:183},{label:"-",value:184},{label:"-",value:185},{label:"-",value:186},{label:"-",value:187},{label:"-",value:188},{label:"-",value:189},{label:"Demon King",value:190},{label:"-",value:191},{label:"Frelian",value:192},{label:"Frelian",value:193},{label:"-",value:194},{label:"-",value:195},{label:"-",value:196},{label:"Fado (Renais)",value:197},{label:"-",value:198},{label:"Hayden (Frelia)",value:199},{label:"Mansel (Rausten)",value:200},{label:"Klimt (Carcino)",value:201},{label:"Dara (Caer Pelyn)",value:202},{label:"Ismaire (Jehanna)",value:203},{label:"Pegasus Messenger",value:204},{label:"Rausten Knight",value:205},{label:"Rausten Knight",value:206},{label:"(Untested starting and beyond this point)",value:207},{label:"-",value:208},{label:"-",value:209},{label:"-",value:210},{label:"-",value:211},{label:"-",value:212},{label:"-",value:213},{label:"-",value:214},{label:"-",value:215},{label:"-",value:216},{label:"-",value:217},{label:"-",value:218},{label:"-",value:219},{label:"-",value:220},{label:"-",value:221},{label:"-",value:222},{label:"-",value:223},{label:"-",value:224},{label:"-",value:225},{label:"-",value:226},{label:"-",value:227},{label:"-",value:228},{label:"-",value:229},{label:"-",value:230},{label:"-",value:231},{label:"-",value:232},{label:"-",value:233},{label:"-",value:234},{label:"-",value:235},{label:"-",value:236},{label:"-",value:237},{label:"-",value:238},{label:"-",value:239},{label:"-",value:240},{label:"-",value:241},{label:"-",value:242},{label:"-",value:243},{label:"River Folk Child (F)",value:244},{label:"River Folk (F)",value:245},{label:"River Folk",value:246},{label:"River Folk (F)",value:247},{label:"River Folk Child",value:248},{label:"Renais Civilian Child (F)",value:249},{label:"Renais Civilian",value:250},{label:"Renais Civilian (F)",value:251},{label:"Old Civilian",value:252},{label:"Enemy",value:253},{label:"Wall",value:254},{label:"Snag",value:255}],c=a(83282),f=a(9933),d=a(23145),p=a(4220),h=a(80184);function C(){var l,e=(0,n.bx)(),a=(0,u.Z)(e,1)[0],C=(0,t.lr)(),m=(0,u.Z)(C,2),y=m[0],x=m[1],Z=y.get("id"),g=null;try{g=new DataView(a,10394644+16*Z,16)}catch(E){g=null}return(0,h.jsxs)(v.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,h.jsx)(r.Z,{message:"FE8 Ch 17 Eirika recruitment editor by Nintenlord",type:"info"}),(0,h.jsx)("div",{children:(0,h.jsx)(f.Z,{disabled:null==g,defaultValue:null!==(l=b.find((function(l){return l.value.toString()===Z})))&&void 0!==l?l:Z,onSelect:function(l){return x({id:l})},options:b})},Z),(0,h.jsx)(d.Z,{type:c.g.U8,view:g,name:"Event number",offset:2}),(0,h.jsx)(d.Z,{type:c.g.U32,view:g,name:"Pointer to event",offset:4}),(0,h.jsx)(p.Z,{isHex:!0,type:c.g.U8,reference:"CharacterEditor",options:s,view:g,name:"Recruiter",offset:8}),(0,h.jsx)(p.Z,{isHex:!0,type:c.g.U8,reference:"CharacterEditor",options:s,view:g,name:"Recruited",offset:9}),(0,h.jsx)(o.Z,{children:(0,h.jsx)(i.Z,{})})]})}},49389:function(l,e,a){a.d(e,{Z:function(){return N}});var u=a(87462),n=a(4942),t=a(81694),v=a.n(t),r=a(72791),o=a(71929),i=a(91940),b=function(l){var e,a=(0,r.useContext)(o.E_),t=a.getPrefixCls,b=a.direction,s=l.prefixCls,c=l.className,f=void 0===c?"":c,d=t("input-group",s),p=v()(d,(e={},(0,n.Z)(e,"".concat(d,"-lg"),"large"===l.size),(0,n.Z)(e,"".concat(d,"-sm"),"small"===l.size),(0,n.Z)(e,"".concat(d,"-compact"),l.compact),(0,n.Z)(e,"".concat(d,"-rtl"),"rtl"===b),e),f),h=(0,r.useContext)(i.aM),C=(0,r.useMemo)((function(){return(0,u.Z)((0,u.Z)({},h),{isFormItemInput:!1})}),[h]);return r.createElement("span",{className:p,style:l.style,onMouseEnter:l.onMouseEnter,onMouseLeave:l.onMouseLeave,onFocus:l.onFocus,onBlur:l.onBlur},r.createElement(i.aM.Provider,{value:C},l.children))},s=a(45394),c=a(29439),f=a(1413),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},p=a(54291),h=function(l,e){return r.createElement(p.Z,(0,f.Z)((0,f.Z)({},l),{},{ref:e,icon:d}))};h.displayName="EyeInvisibleOutlined";var C=r.forwardRef(h),m=a(24215),y=a(41818),x=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(u=Object.getOwnPropertySymbols(l);n<u.length;n++)e.indexOf(u[n])<0&&Object.prototype.propertyIsEnumerable.call(l,u[n])&&(a[u[n]]=l[u[n]])}return a},Z={click:"onClick",hover:"onMouseOver"},g=r.forwardRef((function(l,e){var a=(0,r.useState)(!1),t=(0,c.Z)(a,2),i=t[0],b=t[1],f=function(){l.disabled||b(!i)},d=function(a){var t=a.getPrefixCls,o=l.className,b=l.prefixCls,c=l.inputPrefixCls,d=l.size,p=l.visibilityToggle,h=x(l,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),C=t("input",c),m=t("input-password",b),g=p&&function(e){var a,u=l.action,t=l.iconRender,v=Z[u]||"",o=(void 0===t?function(){return null}:t)(i),b=(a={},(0,n.Z)(a,v,f),(0,n.Z)(a,"className","".concat(e,"-icon")),(0,n.Z)(a,"key","passwordIcon"),(0,n.Z)(a,"onMouseDown",(function(l){l.preventDefault()})),(0,n.Z)(a,"onMouseUp",(function(l){l.preventDefault()})),a);return r.cloneElement(r.isValidElement(o)?o:r.createElement("span",null,o),b)}(m),E=v()(m,o,(0,n.Z)({},"".concat(m,"-").concat(d),!!d)),w=(0,u.Z)((0,u.Z)({},(0,y.Z)(h,["suffix","iconRender"])),{type:i?"text":"password",className:E,prefixCls:C,suffix:g});return d&&(w.size=d),r.createElement(s.ZP,(0,u.Z)({ref:e},w))};return r.createElement(o.C,null,d)}));g.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(l){return l?r.createElement(m.Z,null):r.createElement(C,null)}};var E=g,w=a(11730),S=a(88834),P=a(30435),j=a(1815),O=a(61113),M=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(u=Object.getOwnPropertySymbols(l);n<u.length;n++)e.indexOf(u[n])<0&&Object.prototype.propertyIsEnumerable.call(l,u[n])&&(a[u[n]]=l[u[n]])}return a};var R=r.forwardRef((function(l,e){var a,t,i=l.prefixCls,b=l.inputPrefixCls,c=l.className,f=l.size,d=l.suffix,p=l.enterButton,h=void 0!==p&&p,C=l.addonAfter,m=l.loading,y=l.disabled,x=l.onSearch,Z=l.onChange,g=l.onCompositionStart,E=l.onCompositionEnd,R=M(l,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),k=r.useContext(o.E_),F=k.getPrefixCls,N=k.direction,B=r.useContext(j.Z),z=r.useRef(!1),A=f||B,T=r.useRef(null),L=function(l){var e;document.activeElement===(null===(e=T.current)||void 0===e?void 0:e.input)&&l.preventDefault()},D=function(l){var e,a;x&&x(null===(a=null===(e=T.current)||void 0===e?void 0:e.input)||void 0===a?void 0:a.value,l)},I=F("input-search",i),G=F("input",b),H="boolean"===typeof h?r.createElement(w.Z,null):null,U="".concat(I,"-button"),V=h||{},K=V.type&&!0===V.type.__ANT_BUTTON;t=K||"button"===V.type?(0,O.Tm)(V,(0,u.Z)({onMouseDown:L,onClick:function(l){var e,a;null===(a=null===(e=null===V||void 0===V?void 0:V.props)||void 0===e?void 0:e.onClick)||void 0===a||a.call(e,l),D(l)},key:"enterButton"},K?{className:U,size:A}:{})):r.createElement(P.Z,{className:U,type:h?"primary":void 0,size:A,disabled:y,key:"enterButton",onMouseDown:L,onClick:D,loading:m,icon:H},h),C&&(t=[t,(0,O.Tm)(C,{key:"addonAfter"})]);var _=v()(I,(a={},(0,n.Z)(a,"".concat(I,"-rtl"),"rtl"===N),(0,n.Z)(a,"".concat(I,"-").concat(A),!!A),(0,n.Z)(a,"".concat(I,"-with-button"),!!h),a),c);return r.createElement(s.ZP,(0,u.Z)({ref:(0,S.sQ)(T,e),onPressEnter:function(l){z.current||D(l)}},R,{size:A,onCompositionStart:function(l){z.current=!0,null===g||void 0===g||g(l)},onCompositionEnd:function(l){z.current=!1,null===E||void 0===E||E(l)},prefixCls:G,addonAfter:t,suffix:d,onChange:function(l){l&&l.target&&"click"===l.type&&x&&x(l.target.value,l),Z&&Z(l)},className:_,disabled:y}))})),k=a(66920),F=s.ZP;F.Group=b,F.Search=R,F.TextArea=k.Z,F.Password=E;var N=F}}]);
//# sourceMappingURL=54688.2a5bdf6e.chunk.js.map