"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[26823],{4220:function(l,e,a){a.d(e,{Z:function(){return d}});var u=a(1413),v=a(29439),r=a(44925),b=a(97788),n=a(83099),i=a(21951),t=a(72791),o=a(11087),m=a(83282),s=a(80184),y=["isHex","reference","view","name","offset","type","options"],c=b.Z.Text;function d(l){var e=l.isHex,a=l.reference,b=l.view,d=l.name,A=l.offset,h=l.type,f=l.options,g=(0,r.Z)(l,y),p=null==b?0:(0,m.ij)(b,A,h),C=(0,t.useState)(p),M=(0,v.Z)(C,2),x=M[0],Z=M[1];x!==p&&Z(p);var S=f.find((function(l){return l.value===x})),k=e?"0x".concat(x.toString(16)):x,E=void 0===S?k:S.label;return(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(c,{disabled:null==b,children:"".concat(d,":").concat(null==b?"":" ".concat(E," \u2192"))}),(0,s.jsx)(i.Z,(0,u.Z)({disabled:null==b,showSearch:!0,options:f,placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(l,e){return e.label.includes(l)},onSelect:function(l){(0,m.cW)(b,A,h,l),Z(l)}},g)),""===a||null==b?"":(0,s.jsx)(o.rU,{to:{pathname:"../".concat(a,"?id=").concat(x),state:b.buffer},children:"\u27a4"})]})}d.defaultProps={view:null,isHex:!1,reference:""}},3025:function(l,e,a){a.d(e,{Z:function(){return s}});var u=a(1413),v=a(29439),r=a(97788),b=a(83099),n=a(49389),i=a(72791),t=a(83282),o=a(80184),m=r.Z.Text;function s(l){var e=(0,i.useState)(""),a=(0,v.Z)(e,2),r=a[0],s=a[1],y=l.view,c=l.name,d=l.offset,A=l.length,h=null==y?"":(0,t.ij)(y,d,t.g.HEXA,A),f=(0,i.useState)(h),g=(0,v.Z)(f,2),p=g[0],C=g[1];return p!==h&&C(h),(0,o.jsxs)(b.Z,{children:[(0,o.jsx)(m,{disabled:null==y,children:"".concat(c,":").concat(null==y?"":" ".concat(p," \u2192"))}),(0,o.jsx)(n.Z,(0,u.Z)({disabled:null==y,allowClear:!0,value:r,maxLength:3*A-1,onChange:function(l){var e=l.currentTarget.value;""!==e&&(!/^[0-9a-f ]+$/.test(e)||/[0-9a-f]{3,}/.test(e)||/ {2,}/.test(e)||/ [0-9a-f] /.test(e)||/^[0-9a-f] /.test(e))||s(e.trimStart())},onPressEnter:function(l){var e=l.target.value.trim();(0,t.cW)(y,d,t.g.HEXA,e),C(e)}},l))]})}s.defaultProps={view:null}},9933:function(l,e,a){a.d(e,{Z:function(){return b}});var u=a(1413),v=a(21951),r=(a(72791),a(80184));function b(l){return(0,r.jsx)(v.Z,(0,u.Z)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:function(l,e){return e.label.includes(l)}},l))}},26823:function(l,e,a){a.r(e),a.d(e,{default:function(){return f}});var u=a(29439),v=(a(72791),a(57689)),r=a(11087),b=a(83099),n=a(33441),i=a(43292),t=a(79042),o=[{label:"Entry 0",value:0},{label:"Entry 1",value:1},{label:"Entry 2",value:2},{label:"Entry 3",value:3},{label:"Entry 4",value:4},{label:"Entry 5",value:5},{label:"Entry 6",value:6},{label:"Entry 7",value:7},{label:"Entry 8",value:8},{label:"Entry 9",value:9}],m=[{label:"None",value:0},{label:"Sigurd",value:1},{label:"Noish",value:2},{label:"Alec",value:3},{label:"Arden",value:4},{label:"Young Fin",value:5},{label:"Cuan",value:6},{label:"Mideel",value:7},{label:"Levin",value:8},{label:"Holyn",value:9},{label:"Azel",value:10},{label:"Jamuka",value:11},{label:"Claud",value:12},{label:"Beowulf",value:13},{label:"Lex",value:14},{label:"Dew",value:15},{label:"Diadora",value:16},{label:"Ethrin",value:17},{label:"Lachesis",value:18},{label:"Ira",value:19},{label:"Fury",value:20},{label:"Tiltyu",value:21},{label:"Sylvia",value:22},{label:"Edin",value:23},{label:"Bridget",value:24},{label:"Celice",value:25},{label:"Shanan",value:26},{label:"Rodolban",value:27},{label:"Asaello",value:28},{label:"Leaf",value:29},{label:"Johan",value:30},{label:"Sharlow",value:31},{label:"Hawk",value:32},{label:"Tristan",value:33},{label:"Adult Fin",value:34},{label:"Dimna",value:35},{label:"Hannibal",value:36},{label:"Aless",value:37},{label:"Amid",value:38},{label:"Oifaye",value:39},{label:"Daisy",value:40},{label:"Radney",value:41},{label:"Mana",value:42},{label:"Julia",value:43},{label:"Altenna",value:44},{label:"Femina",value:45},{label:"Linda",value:46},{label:"Laylea",value:47},{label:"Janne",value:48},{label:"Johalva",value:49},{label:"Skasaher",value:50},{label:"Faval",value:51},{label:"Corple",value:52},{label:"Sety",value:53},{label:"Delmud",value:54},{label:"Lester",value:55},{label:"Arthur",value:56},{label:"Patty",value:57},{label:"Lakche",value:58},{label:"Rana",value:59},{label:"Fee",value:60},{label:"Tinny",value:61},{label:"Lynn",value:62},{label:"Nanna",value:63},{label:"Gerrard",value:64},{label:"DiMaggio",value:65},{label:"Verdane Army",value:66},{label:"Verdane Army",value:67},{label:"Verdane Army",value:68},{label:"Verdane Army",value:69},{label:"Verdane Army",value:70},{label:"Verdane Army",value:71},{label:"Kinbois",value:72},{label:"Verdane Army",value:73},{label:"Verdane Army",value:74},{label:"Verdane Army",value:75},{label:"Verdane Army",value:76},{label:"Gandolf",value:77},{label:"Commander",value:78},{label:"Verdane Army",value:79},{label:"Verdane Army",value:80},{label:"Verdane Army",value:81},{label:"Sandima",value:82},{label:"Verdane Army",value:83},{label:"Verdane Army",value:84},{label:"Commander",value:85},{label:"Verdane Army",value:86},{label:"Thief",value:87},{label:"Elliot",value:88},{label:"Heirhein Army",value:89},{label:"Eltosian",value:90},{label:"Cross Knight",value:91},{label:"Commander",value:92},{label:"Boldor",value:93},{label:"Heirhein Army",value:94},{label:"Phillip",value:95},{label:"Heirhein Army",value:96},{label:"Heirhein Army",value:97},{label:"Heirhein Army",value:98},{label:"Heirhein Army",value:99},{label:"Heirhein Army",value:100},{label:"Heirhein Army",value:101},{label:"Elliot",value:102},{label:"Heirhein Army",value:103},{label:"Heirhein Army",value:104},{label:"Heirhein Army",value:105},{label:"Commander",value:106},{label:"Anphony Army",value:107},{label:"Thief",value:108},{label:"Mackily Army",value:109},{label:"Eve",value:110},{label:"Macbeth",value:111},{label:"Anphony Army",value:112},{label:"Anphony Army",value:113},{label:"Anphony Army",value:114},{label:"Voltz",value:115},{label:"Mercenary",value:116},{label:"Clement",value:117},{label:"Mackily Army",value:118},{label:"Mackily Army",value:119},{label:"Mackily Army",value:120},{label:"Commander",value:121},{label:"Mackily Army",value:122},{label:"Shagaar",value:123},{label:"Agusty Army",value:124},{label:"Agusty Army",value:125},{label:"Commander",value:126},{label:"Agusty Army",value:127},{label:"Commander",value:128},{label:"Agusty Army",value:129},{label:"Fury Squad",value:130},{label:"Zain",value:131},{label:"Agusty Army",value:132},{label:"Agusty Army",value:133},{label:"Agusty Army",value:134},{label:"Agusty Army",value:135},{label:"Eva",value:136},{label:"Alva",value:137},{label:"Shacoban",value:138},{label:"Madino Army",value:139},{label:"Madino Army",value:140},{label:"Madino Army",value:141},{label:"Madino Army",value:142},{label:"Madino Army",value:143},{label:"Commander",value:144},{label:"Madino Army",value:145},{label:"Commander",value:146},{label:"Madino Army",value:147},{label:"Commander",value:148},{label:"Madino Army",value:149},{label:"Commander",value:150},{label:"Madino Army",value:151},{label:"Commander",value:152},{label:"Madino Army",value:153},{label:"Commander",value:154},{label:"Madino Army",value:155},{label:"Pirate",value:156},{label:"Commander",value:157},{label:"Silvail Army",value:158},{label:"Eltosian",value:159},{label:"Cross Knight",value:160},{label:"Shagaar",value:161},{label:"Silvail Army",value:162},{label:"Silvail Army",value:163},{label:"Papilion",value:164},{label:"Thracia Army",value:165},{label:"Pirate",value:166},{label:"Pirate",value:167},{label:"Pirate",value:168},{label:"Pirate",value:169},{label:"Dobarl",value:170},{label:"Pirate",value:171},{label:"Pizarl",value:172},{label:"Pirate",value:173},{label:"Pirate",value:174},{label:"Pirate",value:175},{label:"Pirate",value:176},{label:"Alvis",value:177},{label:"Langobalt",value:178},{label:"Grao Ritter",value:179},{label:"Leptor",value:180},{label:"Gelp Ritter",value:181},{label:"Mahnya",value:182},{label:"Silesia Army",value:183},{label:"Maios",value:184},{label:"Thove Army",value:185},{label:"Thove Army",value:186},{label:"Commander",value:187},{label:"Thove Army",value:188},{label:"Cuvuli",value:189},{label:"Thove Army",value:190},{label:"Commander",value:191},{label:"Thove Army",value:192},{label:"Thove Army",value:193},{label:"Deetva",value:194},{label:"Deetva Squad",value:195},{label:"Pirate",value:196},{label:"Silesia Army",value:197},{label:"Dakar",value:198},{label:"Mahnya",value:199},{label:"Mahnya Squad",value:200},{label:"Pamela",value:201},{label:"Pamela Squad",value:202},{label:"Andrei",value:203},{label:"Beig Ritter",value:204},{label:"Civilian",value:205},{label:"Civilian",value:206},{label:"Donovan",value:207},{label:"Zaxon Army",value:208},{label:"Zaxon Army",value:209},{label:"Zaxon Army",value:210},{label:"Zaxon Army",value:211},{label:"Zaxon Army",value:212},{label:"Lamia",value:213},{label:"Mercenary",value:214},{label:"Mercenary",value:215},{label:"Mercenary",value:216},{label:"Mercenary",value:217},{label:"Mercenary",value:218},{label:"Langobalt",value:219},{label:"Child",value:220},{label:"Lubeck Army",value:221},{label:"Slayder",value:222},{label:"Lubeck Army",value:223},{label:"Commander",value:224},{label:"Lubeck Army",value:225},{label:"Lubeck Army",value:226},{label:"Thief",value:227},{label:"Commander",value:228},{label:"Lubeck Army",value:229},{label:"Lubeck Army",value:230},{label:"Lubeck Army",value:231},{label:"Vylon",value:232},{label:"Andrei",value:233},{label:"Beig Ritter",value:234},{label:"Vaha",value:235},{label:"Velthomer Army",value:236},{label:"Priest",value:237},{label:"Velthomer Army",value:238},{label:"Torabant",value:239},{label:"Magorn",value:240},{label:"Thracia Army",value:241},{label:"Lenster Army",value:242},{label:"Aida",value:243},{label:"Velthomer Army",value:244},{label:"Leptor",value:245},{label:"Freege Army",value:246},{label:"Freege Army",value:247},{label:"Freege Army",value:248},{label:"Freege Army",value:249},{label:"Freege Army",value:250},{label:"Freege Army",value:251},{label:"Freege Army",value:252},{label:"Freege Army",value:253},{label:"Commander",value:254},{label:"Rot Ritter",value:255},{label:"Commander",value:256},{label:"Rot Ritter",value:257},{label:"Commander",value:258},{label:"Rot Ritter",value:259},{label:"Alvis",value:260},{label:"Commander",value:261},{label:"Rot Ritter",value:262},{label:"Harold",value:263},{label:"Ganesha Army",value:264},{label:"Ganesha Army",value:265},{label:"Thief",value:266},{label:"Sophara Army",value:267},{label:"Isaac Army",value:268},{label:"Isaac Army",value:269},{label:"Sophara Army",value:270},{label:"Shumit",value:271},{label:"Rivough Army",value:272},{label:"Danan",value:273},{label:"Ganesha Army",value:274},{label:"Ganesha Army",value:275},{label:"Coutouzov",value:276},{label:"YiedMage",value:277},{label:"Yied Mage",value:278},{label:"Mercenary",value:279},{label:"Yied Mage",value:280},{label:"Commander",value:281},{label:"Alster Army",value:282},{label:"Alster Army",value:283},{label:"Thief",value:284},{label:"Blume",value:285},{label:"Alster Army",value:286},{label:"Darna Army",value:287},{label:"Ishtor",value:288},{label:"Melgen Army",value:289},{label:"Liza",value:290},{label:"Melgen Army",value:291},{label:"Melgen Army",value:292},{label:"Melgen Army",value:293},{label:"Melgen Army",value:294},{label:"Melgen Army",value:295},{label:"Melgen Army",value:296},{label:"Jabarro",value:297},{label:"Mercenary",value:298},{label:"Mercenary",value:299},{label:"Bramsel",value:300},{label:"Darna Army",value:301},{label:"Commander",value:302},{label:"Alster Army",value:303},{label:"Alster Army",value:304},{label:"Vanpa",value:305},{label:"Fetora",value:306},{label:"Eliu",value:307},{label:"High Mage",value:308},{label:"High Mage",value:309},{label:"High Mage",value:310},{label:"Muhammed",value:311},{label:"Conote Army",value:312},{label:"Conote Army",value:313},{label:"Conote Army",value:314},{label:"Priest",value:315},{label:"Ovo",value:316},{label:"Conote Army",value:317},{label:"Conote Army",value:318},{label:"Thief",value:319},{label:"Commander",value:320},{label:"Conote Army",value:321},{label:"Ishtar",value:322},{label:"Commander",value:323},{label:"Conote Army",value:324},{label:"Blume",value:325},{label:"Conote Army",value:326},{label:"Civilian",value:327},{label:"Civilian",value:328},{label:"Commander",value:329},{label:"Thracia Army",value:330},{label:"Coruta",value:331},{label:"Thracia Army",value:332},{label:"Commander",value:333},{label:"Thracia Army",value:334},{label:"Commander",value:335},{label:"Thracia Army",value:336},{label:"Maikov",value:337},{label:"Vanpa",value:338},{label:"Fetora",value:339},{label:"Eliu",value:340},{label:"Kapathogia Army",value:341},{label:"Kapathogia Army",value:342},{label:"Kapathogia Army",value:343},{label:"Kapathogia Army",value:344},{label:"Thracia Army",value:345},{label:"Thracia Army",value:346},{label:"Thief",value:347},{label:"Kanatz",value:348},{label:"Disler",value:349},{label:"Grutia Army",value:350},{label:"Mercenary",value:351},{label:"Mercenary",value:352},{label:"Torabant",value:353},{label:"Thracia Army",value:354},{label:"Judah",value:355},{label:"Commander",value:356},{label:"Grutia Army",value:357},{label:"Arion",value:358},{label:"Dragon Knight",value:359},{label:"Dragon Knight",value:360},{label:"Commander",value:361},{label:"Thracia Army",value:362},{label:"Commander",value:363},{label:"Thracia Army",value:364},{label:"Commander",value:365},{label:"Thracia Army",value:366},{label:"Musar",value:367},{label:"Imperial Army",value:368},{label:"Imperial Army",value:369},{label:"Imperial Army",value:370},{label:"Imperial Army",value:371},{label:"Lideel",value:372},{label:"Lideel Squad",value:373},{label:"Lideel Squad",value:374},{label:"Lideel Squad",value:375},{label:"Lideel Squad",value:376},{label:"Lideel Squad",value:377},{label:"Morrigan",value:378},{label:"Dark Mage",value:379},{label:"Pirate",value:380},{label:"Hilda",value:381},{label:"Dark Priest",value:382},{label:"Dark Mage",value:383},{label:"Dark Mage",value:384},{label:"Mercenary",value:385},{label:"Mercenary",value:386},{label:"Child",value:387},{label:"Child",value:388},{label:"Zagam",value:389},{label:"Dark Mage",value:390},{label:"Dark Mage",value:391},{label:"Dark Mage",value:392},{label:"Dark Mage",value:393},{label:"Dark Mage",value:394},{label:"Mercenary",value:395},{label:"Mercenary",value:396},{label:"Mercenary",value:397},{label:"Julius",value:398},{label:"Ishtar",value:399},{label:"Alvis",value:400},{label:"Rot Ritter",value:401},{label:"Rot Ritter",value:402},{label:"Rot Ritter",value:403},{label:"Dark Mage",value:404},{label:"Palmark",value:405},{label:"Child",value:406},{label:"Child",value:407},{label:"Commander",value:408},{label:"Rot Ritter",value:409},{label:"Rot Ritter",value:410},{label:"Commander",value:411},{label:"Rot Ritter",value:412},{label:"Rot Ritter",value:413},{label:"Commander",value:414},{label:"Rot Ritter",value:415},{label:"Rot Ritter",value:416},{label:"Rot Ritter",value:417},{label:"Dark Mage",value:418},{label:"Dark Mage",value:419},{label:"Robert",value:420},{label:"Mercenary",value:421},{label:"Mercenary",value:422},{label:"Mercenary",value:423},{label:"Mercenary",value:424},{label:"Mercenary",value:425},{label:"Boyce",value:426},{label:"Mercenary",value:427},{label:"Mercenary",value:428},{label:"Rodan",value:429},{label:"Edda Army",value:430},{label:"Edda Army",value:431},{label:"Edda Army",value:432},{label:"Edda Army",value:433},{label:"Yupheel",value:434},{label:"Dark Mage",value:435},{label:"Dark Mage",value:436},{label:"Fisher",value:437},{label:"Dozel Army",value:438},{label:"Dozel Army",value:439},{label:"Brian",value:440},{label:"Grao Ritter",value:441},{label:"Grao Ritter",value:442},{label:"Dagon",value:443},{label:"Scorpio",value:444},{label:"Beig Ritter",value:445},{label:"Beig Ritter",value:446},{label:"Hilda",value:447},{label:"Gelp Ritter",value:448},{label:"Gelp Ritter",value:449},{label:"Dark Priest",value:450},{label:"Dark Mage",value:451},{label:"Manfloy",value:452},{label:"Dark Mage",value:453},{label:"Julius",value:454},{label:"Eins",value:455},{label:"Zwei",value:456},{label:"Drei",value:457},{label:"Vier",value:458},{label:"Funf",value:459},{label:"Sechs",value:460},{label:"Seiben",value:461},{label:"Acht",value:462},{label:"Neun",value:463},{label:"Zehn",value:464},{label:"Elf",value:465},{label:"Zwolf",value:466},{label:"Arion",value:467},{label:"Dragon Knight",value:468},{label:"Ishtar",value:469},{label:"Meng",value:470},{label:"Maybell",value:471},{label:"Bleg",value:472},{label:"Barhara Army",value:473},{label:"Barhara Army",value:474},{label:"Barhara Army",value:475},{label:"Barhara Army",value:476},{label:"Baran",value:477},{label:"Coutouzov",value:478},{label:"Thief",value:479},{label:"Gazak",value:480},{label:"Clotho",value:481},{label:"Weissman",value:482},{label:"Shark",value:483},{label:"Hood",value:484},{label:"Bacchus",value:485},{label:"Emmile",value:486},{label:"Darez",value:487},{label:"Jirou",value:488},{label:"Mahatma",value:489},{label:"Lovin",value:490},{label:"Backnun",value:491},{label:"Milley",value:492},{label:"Hertzog",value:493},{label:"Chekov",value:494},{label:"Keimos",value:495},{label:"Marilyn",value:496},{label:"Taylor",value:497},{label:"Ripp",value:498},{label:"Perio",value:499},{label:"Trevic",value:500},{label:"Gellar",value:501},{label:"Bazan",value:502},{label:"Duma",value:503},{label:"Keller",value:504},{label:"Torton",value:505},{label:"Mario",value:506},{label:"Kemall",value:507},{label:"Karedin",value:508},{label:"Keith",value:509},{label:"Sangor",value:510},{label:"Nikita",value:511},{label:"Nene",value:512},{label:"Kraff",value:513},{label:"Nikias",value:514},{label:"Atlas",value:515},{label:"Jackal",value:516},{label:"Ripp",value:517},{label:"Greias",value:518},{label:"Geese",value:519},{label:"Lee",value:520},{label:"Shishel",value:521},{label:"Hawks",value:522},{label:"Nazar",value:523},{label:"Thief",value:524},{label:"Tolstoy",value:525},{label:"Botman",value:526},{label:"Kulyuge",value:527},{label:"Mansten",value:528},{label:"Kashim",value:529},{label:"Hepner",value:530},{label:"Randok",value:531},{label:"Volf",value:532},{label:"Duey",value:533},{label:"Fet",value:534},{label:"Marshak",value:535},{label:"Luis",value:536},{label:"Heste",value:537},{label:"Madah",value:538},{label:"Jismunt",value:539},{label:"Zenon",value:540},{label:"Jakson",value:541},{label:"Indra",value:542},{label:"Neizche",value:543},{label:"Apostle",value:544},{label:"Millia",value:545},{label:"Siron",value:546},{label:"Grein",value:547},{label:"Slayton",value:548},{label:"Torstar",value:549},{label:"Kanan",value:550},{label:"Hasman",value:551},{label:"Grantz",value:552},{label:"Krosloy",value:553},{label:"Rolan",value:554},{label:"Mashgli",value:555},{label:"Riva",value:556},{label:"Gloria",value:557},{label:"Nothe",value:558},{label:"Indra",value:559},{label:"Dares",value:560},{label:"Keimos",value:561},{label:"Marilyn",value:562},{label:"Zenon",value:563},{label:"Jakson",value:564},{label:"Torton",value:565},{label:"Mario",value:566},{label:"Kanan",value:567},{label:"Atlas",value:568},{label:"Zeus",value:569},{label:"Andrei",value:571},{label:"Young Trabant",value:572},{label:"Maios",value:575},{label:"Dakar",value:576},{label:"Pamela",value:577},{label:"Deetva",value:578},{label:"Donovan",value:579},{label:"Langobalt",value:580},{label:"Shumit",value:581},{label:"Reptor",value:582},{label:"Aida",value:587},{label:"Danan",value:589},{label:"Harold",value:590},{label:"Bramsel",value:591},{label:"Coutouzov",value:592},{label:"Jabarro",value:593},{label:"Ishtor",value:594},{label:"Liza",value:595},{label:"Blume",value:596},{label:"Vampa",value:597},{label:"Fetora",value:598},{label:"Eliu",value:599},{label:"Manya",value:600},{label:"Arion",value:603},{label:"Maikov",value:604},{label:"Ovo",value:605},{label:"Muhammed",value:606},{label:"Morrigan",value:607},{label:"Trabant",value:608},{label:"Musar",value:609},{label:"Disler",value:610},{label:"Kanatz",value:611},{label:"Eve",value:612},{label:"Judah",value:615},{label:"Hilda",value:616},{label:"Meng",value:617},{label:"Manfloy",value:620},{label:"Lideel",value:621},{label:"Alvis",value:622},{label:"Julius",value:623},{label:"Ishtar",value:625},{label:"Civilian",value:634},{label:"Azmule",value:635},{label:"Vylon",value:638},{label:"Young Oifaye",value:639},{label:"Levin",value:640},{label:"Young Shanan",value:641},{label:"Rahna",value:644},{label:"Slayder",value:666},{label:"Soldier",value:677},{label:"Civilian",value:683},{label:"Civilian",value:684},{label:"Civilian",value:685},{label:"Civilian",value:686},{label:"Civilian",value:687},{label:"Civilian",value:688},{label:"Civilian",value:689},{label:"Civilian",value:690},{label:"Civilian",value:691},{label:"Next",value:65535}],s=[{label:"Social Knight",value:0},{label:"Lance Knight",value:1},{label:"Arch Knight",value:2},{label:"Axe Knight",value:3},{label:"Free Knight",value:4},{label:"Trobadour",value:5},{label:"Lord Knight",value:6},{label:"Duke Knight",value:7},{label:"Master Knight",value:8},{label:"Male Paladin",value:9},{label:"Female Paladin",value:10},{label:"Bow Knight",value:11},{label:"Forrest Knight",value:12},{label:"Mage Knight",value:13},{label:"Great Knight",value:14},{label:"Pegasus Rider",value:15},{label:"Pegasus Knight",value:16},{label:"Falcon Knight",value:17},{label:"Dragon Rider",value:18},{label:"Dragon Knight",value:19},{label:"Dragon Master",value:20},{label:"Bow Fighter",value:21},{label:"Sword Fighter",value:22},{label:"Sword Master",value:23},{label:"Sniper",value:24},{label:"Forrest",value:25},{label:"General",value:26},{label:"Emperor",value:27},{label:"Baron",value:28},{label:"Soldier",value:29},{label:"Spear Soldier",value:30},{label:"Axe Soldier",value:31},{label:"Archer",value:32},{label:"Sword Soldier",value:33},{label:"Armor",value:34},{label:"Axe Armor",value:35},{label:"Bow Armor",value:36},{label:"Sword Armor",value:37},{label:"Barbarian",value:38},{label:"Axe Fighter",value:39},{label:"Mountain Thief",value:40},{label:"Warrior",value:41},{label:"Hunter",value:42},{label:"Pirate",value:43},{label:"Junior Lord",value:44},{label:"Male Mage Fighter",value:45},{label:"Prince",value:46},{label:"Princess",value:47},{label:"Female Mage Fighter",value:48},{label:"Queen",value:49},{label:"Dancer",value:50},{label:"Priest",value:51},{label:"Mage",value:52},{label:"Fire Mage",value:53},{label:"Thunder Mage",value:54},{label:"Wind Mage",value:55},{label:"High Priest",value:56},{label:"Bishop",value:57},{label:"Sage",value:58},{label:"Bard",value:59},{label:"Shaman",value:60},{label:"Dark Mage",value:61},{label:"Dark Bishop",value:62},{label:"Thief",value:63},{label:"Thief Fighter",value:64},{label:"Civilian",value:65},{label:"Child",value:66},{label:"Long Arch",value:67},{label:"Iron Arch",value:68},{label:"Killer Arch",value:69},{label:"Gold Arch",value:70},{label:"Dark Prince",value:71},{label:"None",value:255}],y=a(83282),c=a(9933),d=a(4220),A=a(3025),h=a(80184);function f(){var l,e=(0,v.bx)(),a=(0,u.Z)(e,1)[0],f=(0,r.lr)(),g=(0,u.Z)(f,2),p=g[0],C=g[1],M=p.get("id"),x=null;try{x=new DataView(a,1542317+16*M,16)}catch(Z){x=null}return(0,h.jsxs)(b.Z,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,h.jsx)(n.Z,{message:"FE4 Custom Battle Palette Editor by Lamia",type:"info"}),(0,h.jsx)("div",{children:(0,h.jsx)(c.Z,{disabled:null==x,defaultValue:null!==(l=o.find((function(l){return l.value.toString()===M})))&&void 0!==l?l:M,onSelect:function(l){return C({id:l})},options:o})},M),(0,h.jsx)(d.Z,{isHex:!0,type:y.g.U16,options:m,view:x,name:"Character",offset:0}),(0,h.jsx)(d.Z,{isHex:!0,type:y.g.U8,reference:"ClassEditor",options:s,view:x,name:"Class",offset:2}),(0,h.jsx)(A.Z,{length:1,view:x,name:"Palette",offset:3}),(0,h.jsx)(d.Z,{isHex:!0,type:y.g.U16,options:m,view:x,name:"Character",offset:4}),(0,h.jsx)(d.Z,{isHex:!0,type:y.g.U8,reference:"ClassEditor",options:s,view:x,name:"Class",offset:6}),(0,h.jsx)(A.Z,{length:1,view:x,name:"Palette",offset:7}),(0,h.jsx)(d.Z,{isHex:!0,type:y.g.U16,options:m,view:x,name:"Character",offset:8}),(0,h.jsx)(d.Z,{isHex:!0,type:y.g.U8,reference:"ClassEditor",options:s,view:x,name:"Class",offset:10}),(0,h.jsx)(A.Z,{length:1,view:x,name:"Palette",offset:11}),(0,h.jsx)(d.Z,{isHex:!0,type:y.g.U16,options:m,view:x,name:"Character",offset:12}),(0,h.jsx)(d.Z,{isHex:!0,type:y.g.U8,reference:"ClassEditor",options:s,view:x,name:"Class",offset:14}),(0,h.jsx)(A.Z,{length:1,view:x,name:"Palette",offset:15}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(t.Z,{})})]})}},49389:function(l,e,a){a.d(e,{Z:function(){return L}});var u=a(87462),v=a(4942),r=a(81694),b=a.n(r),n=a(72791),i=a(71929),t=a(91940),o=function(l){var e,a=(0,n.useContext)(i.E_),r=a.getPrefixCls,o=a.direction,m=l.prefixCls,s=l.className,y=void 0===s?"":s,c=r("input-group",m),d=b()(c,(e={},(0,v.Z)(e,"".concat(c,"-lg"),"large"===l.size),(0,v.Z)(e,"".concat(c,"-sm"),"small"===l.size),(0,v.Z)(e,"".concat(c,"-compact"),l.compact),(0,v.Z)(e,"".concat(c,"-rtl"),"rtl"===o),e),y),A=(0,n.useContext)(t.aM),h=(0,n.useMemo)((function(){return(0,u.Z)((0,u.Z)({},A),{isFormItemInput:!1})}),[A]);return n.createElement("span",{className:d,style:l.style,onMouseEnter:l.onMouseEnter,onMouseLeave:l.onMouseLeave,onFocus:l.onFocus,onBlur:l.onBlur},n.createElement(t.aM.Provider,{value:h},l.children))},m=a(45394),s=a(29439),y=a(1413),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},d=a(54291),A=function(l,e){return n.createElement(d.Z,(0,y.Z)((0,y.Z)({},l),{},{ref:e,icon:c}))};A.displayName="EyeInvisibleOutlined";var h=n.forwardRef(A),f=a(24215),g=a(41818),p=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a},C=function(l){return l?n.createElement(f.Z,null):n.createElement(h,null)},M={click:"onClick",hover:"onMouseOver"};var x=n.forwardRef((function(l,e){var a=(0,n.useState)(!1),r=(0,s.Z)(a,2),t=r[0],o=r[1],y=function(){l.disabled||o((function(l){return!l}))},c=function(a){var r=a.getPrefixCls,i=l.className,o=l.prefixCls,s=l.inputPrefixCls,c=l.size,d=l.visibilityToggle,A=void 0===d||d,h=p(l,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),f=r("input",s),x=r("input-password",o),Z=A&&function(e){var a,u=l.action,r=void 0===u?"click":u,b=l.iconRender,i=M[r]||"",o=(void 0===b?C:b)(t),m=(a={},(0,v.Z)(a,i,y),(0,v.Z)(a,"className","".concat(e,"-icon")),(0,v.Z)(a,"key","passwordIcon"),(0,v.Z)(a,"onMouseDown",(function(l){l.preventDefault()})),(0,v.Z)(a,"onMouseUp",(function(l){l.preventDefault()})),a);return n.cloneElement(n.isValidElement(o)?o:n.createElement("span",null,o),m)}(x),S=b()(x,i,(0,v.Z)({},"".concat(x,"-").concat(c),!!c)),k=(0,u.Z)((0,u.Z)({},(0,g.Z)(h,["suffix","iconRender"])),{type:t?"text":"password",className:S,prefixCls:f,suffix:Z});return c&&(k.size=c),n.createElement(m.ZP,(0,u.Z)({ref:e},k))};return n.createElement(i.C,null,c)})),Z=a(11730),S=a(88834),k=a(30435),E=a(1815),P=a(61113),D=function(l,e){var a={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&e.indexOf(u)<0&&(a[u]=l[u]);if(null!=l&&"function"===typeof Object.getOwnPropertySymbols){var v=0;for(u=Object.getOwnPropertySymbols(l);v<u.length;v++)e.indexOf(u[v])<0&&Object.prototype.propertyIsEnumerable.call(l,u[v])&&(a[u[v]]=l[u[v]])}return a};var R=n.forwardRef((function(l,e){var a,r,t=l.prefixCls,o=l.inputPrefixCls,s=l.className,y=l.size,c=l.suffix,d=l.enterButton,A=void 0!==d&&d,h=l.addonAfter,f=l.loading,g=l.disabled,p=l.onSearch,C=l.onChange,M=l.onCompositionStart,x=l.onCompositionEnd,R=D(l,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),w=n.useContext(i.E_),T=w.getPrefixCls,L=w.direction,H=n.useContext(E.Z),B=n.useRef(!1),F=y||H,K=n.useRef(null),j=function(l){var e;document.activeElement===(null===(e=K.current)||void 0===e?void 0:e.input)&&l.preventDefault()},z=function(l){var e,a;p&&p(null===(a=null===(e=K.current)||void 0===e?void 0:e.input)||void 0===a?void 0:a.value,l)},V=T("input-search",t),O=T("input",o),N="boolean"===typeof A?n.createElement(Z.Z,null):null,G="".concat(V,"-button"),I=A||{},J=I.type&&!0===I.type.__ANT_BUTTON;r=J||"button"===I.type?(0,P.Tm)(I,(0,u.Z)({onMouseDown:j,onClick:function(l){var e,a;null===(a=null===(e=null===I||void 0===I?void 0:I.props)||void 0===e?void 0:e.onClick)||void 0===a||a.call(e,l),z(l)},key:"enterButton"},J?{className:G,size:F}:{})):n.createElement(k.Z,{className:G,type:A?"primary":void 0,size:F,disabled:g,key:"enterButton",onMouseDown:j,onClick:z,loading:f,icon:N},A),h&&(r=[r,(0,P.Tm)(h,{key:"addonAfter"})]);var q=b()(V,(a={},(0,v.Z)(a,"".concat(V,"-rtl"),"rtl"===L),(0,v.Z)(a,"".concat(V,"-").concat(F),!!F),(0,v.Z)(a,"".concat(V,"-with-button"),!!A),a),s);return n.createElement(m.ZP,(0,u.Z)({ref:(0,S.sQ)(K,e),onPressEnter:function(l){B.current||z(l)}},R,{size:F,onCompositionStart:function(l){B.current=!0,null===M||void 0===M||M(l)},onCompositionEnd:function(l){B.current=!1,null===x||void 0===x||x(l)},prefixCls:O,addonAfter:r,suffix:c,onChange:function(l){l&&l.target&&"click"===l.type&&p&&p(l.target.value,l),C&&C(l)},className:q,disabled:g}))})),w=a(66920),T=m.ZP;T.Group=o,T.Search=R,T.TextArea=w.Z,T.Password=x;var L=T}}]);
//# sourceMappingURL=26823.25cf8b15.chunk.js.map