"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[12901],{23145:function(e,l,a){a.d(l,{Z:function(){return b}});var n=a(1413),t=a(29439),r=a(97788),o=a(83099),i=a(49389),u=a(72791),c=a(83282),s=a(80184),v=r.Z.Text;function b(e){var l=(0,u.useState)(""),a=(0,t.Z)(l,2),r=a[0],b=a[1],d=e.view,f=e.name,p=e.offset,m=e.type,g=null==d?0:(0,c.ij)(d,p,m),h=(0,u.useState)(g),y=(0,t.Z)(h,2),Z=y[0],x=y[1];return Z!==g&&x(g),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(v,{disabled:null==d,children:"".concat(f,":").concat(null==d?"":" 0x".concat(Z.toString(16)," \u2192"))}),(0,s.jsx)(i.Z,(0,n.Z)({disabled:null==d,allowClear:!0,maxLength:2*c.Tz[m],prefix:"0x",value:r,onChange:function(e){var l=e.currentTarget.value;(/^[0-9a-f]+$/.test(l)||""===l)&&b(l)},onPressEnter:function(e){var l=parseInt(e.target.value,16);(0,c.cW)(d,p,m,l),x(l)}},e))]})}b.defaultProps={view:null}},9933:function(e,l,a){a.d(l,{Z:function(){return o}});var n=a(1413),t=a(21951),r=(a(72791),a(80184));function o(e){return(0,r.jsx)(t.Z,(0,n.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(e,l){return l.label.includes(e)}},e))}},12901:function(e,l,a){a.r(l),a.d(l,{default:function(){return p}});var n=a(29439),t=(a(72791),a(57689)),r=a(11087),o=a(83099),i=a(33441),u=a(43292),c=a(79042),s=[{label:"Eliwood Lord",value:0},{label:"Lyn Lord",value:1},{label:"Hector Lord",value:2},{label:"Eliwood Lord Knight (only by class name)",value:3},{label:"Lyn Blade Lord (only by class name)",value:4},{label:"Hector Great Lord (only by class name)",value:5},{label:"Eliwood Lord Knight",value:6},{label:"Lyn Blade Lord",value:7},{label:"Hector Great Lord",value:8},{label:"Mercenary",value:9},{label:"Mercenary (F)",value:10},{label:"Hero",value:11},{label:"Hero (F)",value:12},{label:"Swordfighter",value:13},{label:"Swordfighter (F)",value:14},{label:"Swordmaster",value:15},{label:"Swordmaster (F)",value:16},{label:"Fighter",value:17},{label:"Warrior",value:18},{label:"Armour Knight",value:19},{label:"Armour Knight (F)",value:20},{label:"General",value:21},{label:"General (F)",value:22},{label:"Archer",value:23},{label:"Archer (F)",value:24},{label:"Sniper",value:25},{label:"Sniper (F)",value:26},{label:"Monk",value:27},{label:"Sister",value:28},{label:"Bishop",value:29},{label:"Bishop (F)",value:30},{label:"Mage",value:31},{label:"Mage (F)",value:32},{label:"Sage",value:33},{label:"Sage (F)",value:34},{label:"Shaman",value:35},{label:"Shaman (F)",value:36},{label:"Druid",value:37},{label:"Druid (F)",value:38},{label:"Socialknight",value:39},{label:"Socialknight (F)",value:40},{label:"Paladin",value:41},{label:"Paladin (F)",value:42},{label:"Troubadour",value:43},{label:"Valkyrie",value:44},{label:"Nomad",value:45},{label:"Nomad (F)",value:46},{label:"Nomad Trooper",value:47},{label:"Nomad Trooper (F)",value:48},{label:"Pegasus Knight",value:49},{label:"Falcon Knight",value:50},{label:"Dragon Knight",value:51},{label:"Dragon Knight (F)",value:52},{label:"Dragon Master",value:53},{label:"Dragon Master (F)",value:54},{label:"Soldier",value:55},{label:"Mountain Thief",value:56},{label:"Pirate",value:57},{label:"Berserker",value:58},{label:"Thief",value:59},{label:"Thief (F)",value:60},{label:"Assassin",value:61},{label:"Civilian",value:62},{label:"Dancer",value:63},{label:"Bard",value:64},{label:"Archsage",value:65},{label:"Magic Seal",value:66},{label:"Transporter Tent",value:67},{label:"Dark Druid",value:68},{label:"Fire Dragon",value:69},{label:"Civilian",value:70},{label:"Civilian (F)",value:71},{label:"Child",value:72},{label:"Brammimond",value:73},{label:"Peer",value:74},{label:"Peer (F)",value:75},{label:"Prince",value:76},{label:"Queen",value:77},{label:"Hung Leila",value:78},{label:"Corsair",value:79},{label:"Prince (Tactician)",value:80},{label:"Fallen Prince",value:81},{label:"Prince facing upward",value:82},{label:"Fallen Ninian",value:83},{label:"Fallen Ice Dragon",value:84},{label:"Fallen Warrior",value:85},{label:"Child",value:86},{label:"Child (F)",value:87},{label:"Transporter w/ Horse",value:88},{label:"Uber Sage",value:89},{label:"Archer in Ballista",value:90},{label:"Archer in Iron Ballista",value:91},{label:"Archer in Killer Ballista",value:92},{label:"Empty Ballista",value:93},{label:"Empty Iron Ballista",value:94},{label:"Empty Killer Ballista",value:95},{label:"Empty (Make a custom class!)",value:96},{label:"Empty (Make a custom class!)",value:97},{label:"Empty (Make a custom class!)",value:98},{label:"Empty (Make a custom class!)",value:99}],v=a(83282),b=a(9933),d=a(23145),f=a(80184);function p(){var e,l=(0,t.bx)(),a=(0,n.Z)(l,1)[0],p=(0,r.lr)(),m=(0,n.Z)(p,2),g=m[0],h=m[1],y=g.get("id"),Z=null;try{Z=new DataView(a,13226356+8*y,8)}catch(x){Z=null}return(0,f.jsxs)(o.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,f.jsx)(i.Z,{message:"FE 7 Map sprite pointer table editor by Nintenlord",type:"info"}),(0,f.jsx)("div",{children:(0,f.jsx)(b.Z,{disabled:null==Z,defaultValue:null!==(e=s.find((function(e){return e.value.toString()===y})))&&void 0!==e?e:y,onSelect:function(e){return h({id:e})},options:s})},y),(0,f.jsx)(d.Z,{type:v.g.U32,view:Z,name:"Animation pointer",offset:0}),(0,f.jsx)(d.Z,{type:v.g.U32,view:Z,name:"Another pointer",offset:4}),(0,f.jsx)(u.Z,{children:(0,f.jsx)(c.Z,{})})]})}},49389:function(e,l,a){a.d(l,{Z:function(){return j}});var n=a(87462),t=a(4942),r=a(81694),o=a.n(r),i=a(72791),u=a(71929),c=a(91940),s=function(e){var l,a=(0,i.useContext)(u.E_),r=a.getPrefixCls,s=a.direction,v=e.prefixCls,b=e.className,d=void 0===b?"":b,f=r("input-group",v),p=o()(f,(l={},(0,t.Z)(l,"".concat(f,"-lg"),"large"===e.size),(0,t.Z)(l,"".concat(f,"-sm"),"small"===e.size),(0,t.Z)(l,"".concat(f,"-compact"),e.compact),(0,t.Z)(l,"".concat(f,"-rtl"),"rtl"===s),l),d),m=(0,i.useContext)(c.aM),g=(0,i.useMemo)((function(){return(0,n.Z)((0,n.Z)({},m),{isFormItemInput:!1})}),[m]);return i.createElement("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.aM.Provider,{value:g},e.children))},v=a(45394),b=a(29439),d=a(1413),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},p=a(54291),m=function(e,l){return i.createElement(p.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:l,icon:f}))};m.displayName="EyeInvisibleOutlined";var g=i.forwardRef(m),h=a(24215),y=a(41818),Z=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a},x={click:"onClick",hover:"onMouseOver"},C=i.forwardRef((function(e,l){var a=(0,i.useState)(!1),r=(0,b.Z)(a,2),c=r[0],s=r[1],d=function(){e.disabled||s(!c)},f=function(a){var r=a.getPrefixCls,u=e.className,s=e.prefixCls,b=e.inputPrefixCls,f=e.size,p=e.visibilityToggle,m=Z(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),g=r("input",b),h=r("input-password",s),C=p&&function(l){var a,n=e.action,r=e.iconRender,o=x[n]||"",u=(void 0===r?function(){return null}:r)(c),s=(a={},(0,t.Z)(a,o,d),(0,t.Z)(a,"className","".concat(l,"-icon")),(0,t.Z)(a,"key","passwordIcon"),(0,t.Z)(a,"onMouseDown",(function(e){e.preventDefault()})),(0,t.Z)(a,"onMouseUp",(function(e){e.preventDefault()})),a);return i.cloneElement(i.isValidElement(u)?u:i.createElement("span",null,u),s)}(h),w=o()(h,u,(0,t.Z)({},"".concat(h,"-").concat(f),!!f)),E=(0,n.Z)((0,n.Z)({},(0,y.Z)(m,["suffix","iconRender"])),{type:c?"text":"password",className:w,prefixCls:g,suffix:C});return f&&(E.size=f),i.createElement(v.ZP,(0,n.Z)({ref:l},E))};return i.createElement(u.C,null,f)}));C.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?i.createElement(h.Z,null):i.createElement(g,null)}};var w=C,E=a(11730),F=a(88834),S=a(23707),P=a(1815),M=a(61113),k=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};var L=i.forwardRef((function(e,l){var a,r,c=e.prefixCls,s=e.inputPrefixCls,b=e.className,d=e.size,f=e.suffix,p=e.enterButton,m=void 0!==p&&p,g=e.addonAfter,h=e.loading,y=e.disabled,Z=e.onSearch,x=e.onChange,C=e.onCompositionStart,w=e.onCompositionEnd,L=k(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),O=i.useContext(u.E_),T=O.getPrefixCls,j=O.direction,B=i.useContext(P.Z),N=i.useRef(!1),A=d||B,D=i.useRef(null),z=function(e){var l;document.activeElement===(null===(l=D.current)||void 0===l?void 0:l.input)&&e.preventDefault()},I=function(e){var l,a;Z&&Z(null===(a=null===(l=D.current)||void 0===l?void 0:l.input)||void 0===a?void 0:a.value,e)},K=T("input-search",c),R=T("input",s),H="boolean"===typeof m?i.createElement(E.Z,null):null,G="".concat(K,"-button"),Q=m||{},U=Q.type&&!0===Q.type.__ANT_BUTTON;r=U||"button"===Q.type?(0,M.Tm)(Q,(0,n.Z)({onMouseDown:z,onClick:function(e){var l,a;null===(a=null===(l=null===Q||void 0===Q?void 0:Q.props)||void 0===l?void 0:l.onClick)||void 0===a||a.call(l,e),I(e)},key:"enterButton"},U?{className:G,size:A}:{})):i.createElement(S.Z,{className:G,type:m?"primary":void 0,size:A,disabled:y,key:"enterButton",onMouseDown:z,onClick:I,loading:h,icon:H},m),g&&(r=[r,(0,M.Tm)(g,{key:"addonAfter"})]);var _=o()(K,(a={},(0,t.Z)(a,"".concat(K,"-rtl"),"rtl"===j),(0,t.Z)(a,"".concat(K,"-").concat(A),!!A),(0,t.Z)(a,"".concat(K,"-with-button"),!!m),a),b);return i.createElement(v.ZP,(0,n.Z)({ref:(0,F.sQ)(D,l),onPressEnter:function(e){N.current||I(e)}},L,{size:A,onCompositionStart:function(e){N.current=!0,null===C||void 0===C||C(e)},onCompositionEnd:function(e){N.current=!1,null===w||void 0===w||w(e)},prefixCls:R,addonAfter:r,suffix:f,onChange:function(e){e&&e.target&&"click"===e.type&&Z&&Z(e.target.value,e),x&&x(e)},className:_,disabled:y}))})),O=a(66920),T=v.ZP;T.Group=s,T.Search=L,T.TextArea=O.Z,T.Password=w;var j=T}}]);
//# sourceMappingURL=12901.a24ac833.chunk.js.map