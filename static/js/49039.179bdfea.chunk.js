"use strict";(self.webpackChunknightmare=self.webpackChunknightmare||[]).push([[49039],{53551:(l,e,a)=>{a.d(e,{A:()=>s});var u=a(89379),v=a(53986),b=a(17313),n=a(64435),r=a(41976),t=a(65043),y=a(35475),E=a(64004),i=a(70579);const o=["isHex","reference","view","name","offset","type","options"],{Text:x}=b.A;function s(l){const{isHex:e,reference:a,view:b,name:s,offset:h,type:c,options:d}=l,C=(0,v.A)(l,o),g=null==b?0:(0,E.LF)(b,h,c),[A,m]=(0,t.useState)(g);A!==g&&m(g);const B=d.find((l=>l.value===A)),F=e?"0x".concat(A.toString(16)):A,f=void 0===B?F:B.label;return(0,i.jsxs)(n.A,{children:[(0,i.jsx)(x,{disabled:null==b,children:"".concat(s,":").concat(null==b?"":" ".concat(f," \u2192"))}),(0,i.jsx)(r.A,(0,u.A)({disabled:null==b,showSearch:!0,options:d,placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l),onSelect:l=>{(0,E.M9)(b,h,c,l),m(l)}},C)),""===a||null==b?"":(0,i.jsx)(y.N_,{to:{pathname:"../".concat(a,"?id=").concat(A),state:b.buffer},children:"\u27a4"})]})}s.defaultProps={view:null,isHex:!1,reference:""}},34871:(l,e,a)=>{a.d(e,{A:()=>n});var u=a(89379),v=a(41976),b=(a(65043),a(70579));function n(l){return(0,b.jsx)(v.A,(0,u.A)({showSearch:!0,style:{width:"100%"},placeholder:"Search to Select",optionFilterProp:"label",filterOption:(l,e)=>e.label.includes(l)},l))}},49039:(l,e,a)=>{a.r(e),a.d(e,{default:()=>h});a(65043);var u=a(73216),v=a(35475),b=a(64435),n=a(92135),r=a(33275),t=a(46974);const y=[{label:"Eirika",value:0},{label:"Seth",value:1},{label:"Gilliam",value:2},{label:"Frantz",value:3},{label:"Moulder",value:4},{label:"Vanessa",value:5},{label:"Ross",value:6},{label:"Neimi",value:7},{label:"Colm",value:8},{label:"Garcia",value:9},{label:"Innes",value:10},{label:"Lute",value:11},{label:"Natasha",value:12},{label:"Cougar",value:13},{label:"Ephraim",value:14},{label:"Forde",value:15},{label:"Kyle",value:16},{label:"Amelia",value:17},{label:"Artur",value:18},{label:"Gerik",value:19},{label:"Tethys",value:20},{label:"Marisa",value:21},{label:"Saleh",value:22},{label:"Ewan",value:23},{label:"L'Arachel",value:24},{label:"Dozla",value:25},{label:"-",value:26},{label:"Rennac",value:27},{label:"Duessel",value:28},{label:"Myrrh",value:29},{label:"Knoll",value:30},{label:"Joshua",value:31},{label:"Syrene",value:32},{label:"Tana",value:33},{label:"Lyon",value:34},{label:"Orson",value:35},{label:"Glen",value:36},{label:"Selena",value:37},{label:"Valter",value:38},{label:"Riev",value:39},{label:"Caellach",value:40},{label:"Fado",value:41},{label:"Ismaire",value:42},{label:"Hayden",value:43},{label:"-",value:44},{label:"-",value:45},{label:"-",value:46},{label:"-",value:47},{label:"-",value:48},{label:"-",value:49},{label:"-",value:50},{label:"-",value:51},{label:"-",value:52},{label:"-",value:53},{label:"-",value:54},{label:"-",value:55},{label:"-",value:56},{label:"-",value:57},{label:"Leon's Summon",value:58},{label:"-",value:59},{label:"-",value:60},{label:"Knoll's Summon",value:61},{label:"Yuan's Summon",value:62},{label:"Lyon (Ch 17)",value:63},{label:"Morva (Ch 20)",value:64},{label:"Orson (Ch 5x)",value:65},{label:"Valter (Ch 15)",value:66},{label:"Selena (Ch 10B & 13B)",value:67},{label:"Valter (Prologue)",value:68},{label:"Breguet (Ch 1)",value:69},{label:"Bone (Ch 2)",value:70},{label:"Bazba (Ch 3)",value:71},{label:"Mummy (Ch 4)",value:72},{label:"Saar (Ch 5)",value:73},{label:"Novala (Ch 6)",value:74},{label:"Murray (Ch 7)",value:75},{label:"Tirado (Ch 8)",value:76},{label:"Binks (Ch 9A)",value:77},{label:"Pablo (Ch 10A)",value:78},{label:"Macdaire (Ch 12A)",value:79},{label:"Aias (Ch 13A)",value:80},{label:"Carlyle (Ch 14A)",value:81},{label:"Caellach (Ch 15)",value:82},{label:"Pablo (Ch 13A)",value:83},{label:"-",value:84},{label:"Gorgon (Ch 18)",value:85},{label:"Riev (Ch 19 & 20)",value:86},{label:"-",value:87},{label:"-",value:88},{label:"Gheb (Ch 9B)",value:89},{label:"Beran (Ch 10B)",value:90},{label:"Cyclops (Ch 12B)",value:91},{label:"Hellbone (Ch 11A)",value:92},{label:"Death Gargoyle (Ch 11B)",value:93},{label:"Mummy",value:94},{label:"-",value:95},{label:"-",value:96},{label:"-",value:97},{label:"-",value:98},{label:"-",value:99},{label:"-",value:100},{label:"Mountain Thief",value:101},{label:"-",value:102},{label:"O'Neill (Prologue)",value:103},{label:"Glen (Cutscene)",value:104},{label:"Zonta (Ch 5x)",value:105},{label:"Vigarde (Ch 14B)",value:106},{label:"Leon (Ch Final)",value:107},{label:"Orson (Ch 16)",value:108},{label:"-",value:109},{label:"-",value:110},{label:"-",value:111},{label:"-",value:112},{label:"-",value:113},{label:"-",value:114},{label:"-",value:115},{label:"-",value:116},{label:"-",value:117},{label:"-",value:118},{label:"-",value:119},{label:"-",value:120},{label:"-",value:121},{label:"-",value:122},{label:"-",value:123},{label:"-",value:124},{label:"-",value:125},{label:"-",value:126},{label:"-",value:127},{label:"-",value:128},{label:"-",value:129},{label:"-",value:130},{label:"-",value:131},{label:"-",value:132},{label:"-",value:133},{label:"-",value:134},{label:"-",value:135},{label:"-",value:136},{label:"-",value:137},{label:"-",value:138},{label:"-",value:139},{label:"-",value:140},{label:"-",value:141},{label:"-",value:142},{label:"-",value:143},{label:"-",value:144},{label:"-",value:145},{label:"-",value:146},{label:"-",value:147},{label:"-",value:148},{label:"-",value:149},{label:"-",value:150},{label:"-",value:151},{label:"-",value:152},{label:"-",value:153},{label:"-",value:154},{label:"-",value:155},{label:"-",value:156},{label:"-",value:157},{label:"-",value:158},{label:"-",value:159},{label:"-",value:160},{label:"-",value:161},{label:"-",value:162},{label:"-",value:163},{label:"-",value:164},{label:"-",value:165},{label:"-",value:166},{label:"-",value:167},{label:"-",value:168},{label:"-",value:169},{label:"-",value:170},{label:"-",value:171},{label:"-",value:172},{label:"-",value:173},{label:"-",value:174},{label:"-",value:175},{label:"-",value:176},{label:"-",value:177},{label:"-",value:178},{label:"-",value:179},{label:"-",value:180},{label:"-",value:181},{label:"-",value:182},{label:"-",value:183},{label:"-",value:184},{label:"-",value:185},{label:"-",value:186},{label:"-",value:187},{label:"-",value:188},{label:"Demon King",value:189},{label:"-",value:190},{label:"Frelian",value:191},{label:"Frelian",value:192},{label:"-",value:193},{label:"-",value:194},{label:"-",value:195},{label:"Fado (Renais)",value:196},{label:"-",value:197},{label:"Hayden (Frelia)",value:198},{label:"Mansel (Rausten)",value:199},{label:"Klimt (Carcino)",value:200},{label:"Dara (Caer Pelyn)",value:201},{label:"Ismaire (Jehanna)",value:202},{label:"Pegasus Messenger",value:203},{label:"Rausten Knight",value:204},{label:"Rausten Knight",value:205},{label:"(Untested Beyond this point)",value:206},{label:"-",value:207},{label:"-",value:208},{label:"-",value:209},{label:"-",value:210},{label:"-",value:211},{label:"-",value:212},{label:"-",value:213},{label:"-",value:214},{label:"-",value:215},{label:"-",value:216},{label:"-",value:217},{label:"-",value:218},{label:"-",value:219},{label:"-",value:220},{label:"-",value:221},{label:"-",value:222},{label:"-",value:223},{label:"-",value:224},{label:"-",value:225},{label:"-",value:226},{label:"-",value:227},{label:"-",value:228},{label:"-",value:229},{label:"-",value:230},{label:"-",value:231},{label:"-",value:232},{label:"-",value:233},{label:"-",value:234},{label:"-",value:235},{label:"-",value:236},{label:"-",value:237},{label:"-",value:238},{label:"-",value:239},{label:"-",value:240},{label:"-",value:241},{label:"-",value:242},{label:"-",value:243},{label:"-",value:244},{label:"-",value:245},{label:"-",value:246},{label:"-",value:247},{label:"-",value:248},{label:"-",value:249},{label:"-",value:250},{label:"-",value:251},{label:"-",value:252},{label:"-",value:253},{label:"-",value:254},{label:"-",value:255},{label:"-",value:256},{label:"-",value:257},{label:"-",value:258},{label:"-",value:259},{label:"-",value:260},{label:"-",value:261},{label:"-",value:262},{label:"-",value:263},{label:"-",value:264},{label:"-",value:265},{label:"-",value:266},{label:"-",value:267},{label:"-",value:268},{label:"-",value:269},{label:"-",value:270},{label:"-",value:271},{label:"-",value:272},{label:"-",value:273},{label:"-",value:274},{label:"-",value:275},{label:"-",value:276},{label:"-",value:277},{label:"-",value:278},{label:"-",value:279},{label:"-",value:280},{label:"-",value:281},{label:"-",value:282},{label:"-",value:283},{label:"-",value:284},{label:"-",value:285},{label:"Entry 286",value:286},{label:"Entry 287",value:287},{label:"Entry 288",value:288},{label:"Entry 289",value:289},{label:"Entry 290",value:290},{label:"Entry 291",value:291},{label:"Entry 292",value:292},{label:"Entry 293",value:293},{label:"Entry 294",value:294},{label:"Entry 295",value:295},{label:"Entry 296",value:296},{label:"Entry 297",value:297},{label:"Entry 298",value:298},{label:"Entry 299",value:299},{label:"Entry 300",value:300},{label:"Entry 301",value:301},{label:"Entry 302",value:302},{label:"Entry 303",value:303},{label:"Entry 304",value:304},{label:"Entry 305",value:305},{label:"Entry 306",value:306},{label:"Entry 307",value:307},{label:"Entry 308",value:308},{label:"Entry 309",value:309},{label:"Entry 310",value:310},{label:"Entry 311",value:311},{label:"Entry 312",value:312},{label:"Entry 313",value:313},{label:"Entry 314",value:314},{label:"Entry 315",value:315},{label:"Entry 316",value:316},{label:"Entry 317",value:317},{label:"Entry 318",value:318},{label:"Entry 319",value:319},{label:"Entry 320",value:320},{label:"Entry 321",value:321},{label:"Entry 322",value:322},{label:"Entry 323",value:323},{label:"Entry 324",value:324},{label:"Entry 325",value:325},{label:"Entry 326",value:326},{label:"Entry 327",value:327},{label:"Entry 328",value:328},{label:"Entry 329",value:329},{label:"Entry 330",value:330},{label:"Entry 331",value:331},{label:"Entry 332",value:332},{label:"Entry 333",value:333},{label:"Entry 334",value:334},{label:"Entry 335",value:335},{label:"Entry 336",value:336},{label:"Entry 337",value:337},{label:"Entry 338",value:338},{label:"Entry 339",value:339},{label:"Entry 340",value:340},{label:"Entry 341",value:341},{label:"Entry 342",value:342},{label:"Entry 343",value:343},{label:"Entry 344",value:344},{label:"Entry 345",value:345},{label:"Entry 346",value:346},{label:"Entry 347",value:347},{label:"Entry 348",value:348},{label:"Entry 349",value:349},{label:"Entry 350",value:350},{label:"Entry 351",value:351},{label:"Entry 352",value:352},{label:"Entry 353",value:353},{label:"Entry 354",value:354},{label:"Entry 355",value:355},{label:"Entry 356",value:356},{label:"Entry 357",value:357},{label:"Entry 358",value:358},{label:"Entry 359",value:359},{label:"Entry 360",value:360},{label:"Entry 361",value:361},{label:"Entry 362",value:362},{label:"Entry 363",value:363},{label:"Entry 364",value:364},{label:"Entry 365",value:365},{label:"Entry 366",value:366},{label:"Entry 367",value:367},{label:"Entry 368",value:368},{label:"Entry 369",value:369},{label:"Entry 370",value:370},{label:"Entry 371",value:371},{label:"Entry 372",value:372},{label:"Entry 373",value:373},{label:"Entry 374",value:374},{label:"Entry 375",value:375},{label:"Entry 376",value:376},{label:"Entry 377",value:377},{label:"Entry 378",value:378},{label:"Entry 379",value:379},{label:"Entry 380",value:380},{label:"Entry 381",value:381},{label:"Entry 382",value:382},{label:"Entry 383",value:383},{label:"Entry 384",value:384},{label:"Entry 385",value:385},{label:"Entry 386",value:386},{label:"Entry 387",value:387},{label:"Entry 388",value:388},{label:"Entry 389",value:389},{label:"Entry 390",value:390},{label:"Entry 391",value:391},{label:"Entry 392",value:392},{label:"Entry 393",value:393},{label:"Entry 394",value:394},{label:"Entry 395",value:395},{label:"Entry 396",value:396},{label:"Entry 397",value:397},{label:"Entry 398",value:398},{label:"Entry 399",value:399},{label:"Entry 400",value:400},{label:"Entry 401",value:401},{label:"Entry 402",value:402},{label:"Entry 403",value:403},{label:"Entry 404",value:404},{label:"Entry 405",value:405},{label:"Entry 406",value:406},{label:"Entry 407",value:407},{label:"Entry 408",value:408},{label:"Entry 409",value:409},{label:"Entry 410",value:410},{label:"Entry 411",value:411},{label:"Entry 412",value:412},{label:"Entry 413",value:413},{label:"Entry 414",value:414},{label:"Entry 415",value:415},{label:"Entry 416",value:416},{label:"Entry 417",value:417},{label:"Entry 418",value:418},{label:"Entry 419",value:419},{label:"Entry 420",value:420},{label:"Entry 421",value:421},{label:"Entry 422",value:422},{label:"Entry 423",value:423},{label:"Entry 424",value:424},{label:"Entry 425",value:425},{label:"Entry 426",value:426},{label:"Entry 427",value:427},{label:"Entry 428",value:428},{label:"Entry 429",value:429},{label:"Entry 430",value:430},{label:"Entry 431",value:431},{label:"Entry 432",value:432},{label:"Entry 433",value:433},{label:"Entry 434",value:434},{label:"Entry 435",value:435},{label:"Entry 436",value:436},{label:"Entry 437",value:437},{label:"Entry 438",value:438},{label:"Entry 439",value:439},{label:"Entry 440",value:440},{label:"Entry 441",value:441},{label:"Entry 442",value:442},{label:"Entry 443",value:443},{label:"Entry 444",value:444},{label:"Entry 445",value:445},{label:"Entry 446",value:446},{label:"Entry 447",value:447},{label:"Entry 448",value:448},{label:"Entry 449",value:449},{label:"Entry 450",value:450},{label:"Entry 451",value:451},{label:"Entry 452",value:452},{label:"Entry 453",value:453},{label:"Entry 454",value:454},{label:"Entry 455",value:455},{label:"Entry 456",value:456},{label:"Entry 457",value:457},{label:"Entry 458",value:458},{label:"Entry 459",value:459},{label:"Entry 460",value:460},{label:"Entry 461",value:461},{label:"Entry 462",value:462},{label:"Entry 463",value:463},{label:"Entry 464",value:464},{label:"Entry 465",value:465},{label:"Entry 466",value:466},{label:"Entry 467",value:467},{label:"Entry 468",value:468},{label:"Entry 469",value:469},{label:"Entry 470",value:470},{label:"Entry 471",value:471},{label:"Entry 472",value:472},{label:"Entry 473",value:473},{label:"Entry 474",value:474},{label:"Entry 475",value:475},{label:"Entry 476",value:476},{label:"Entry 477",value:477},{label:"Entry 478",value:478},{label:"Entry 479",value:479},{label:"Entry 480",value:480},{label:"Entry 481",value:481},{label:"Entry 482",value:482},{label:"Entry 483",value:483},{label:"Entry 484",value:484},{label:"Entry 485",value:485},{label:"Entry 486",value:486},{label:"Entry 487",value:487},{label:"Entry 488",value:488},{label:"Entry 489",value:489},{label:"Entry 490",value:490},{label:"Entry 491",value:491},{label:"Entry 492",value:492},{label:"Entry 493",value:493},{label:"Entry 494",value:494},{label:"Entry 495",value:495},{label:"Entry 496",value:496},{label:"Entry 497",value:497},{label:"Entry 498",value:498},{label:"Entry 499",value:499},{label:"Entry 500",value:500},{label:"Entry 501",value:501},{label:"Entry 502",value:502},{label:"Entry 503",value:503},{label:"Entry 504",value:504},{label:"Entry 505",value:505},{label:"Entry 506",value:506},{label:"Entry 507",value:507},{label:"Entry 508",value:508},{label:"Entry 509",value:509},{label:"Entry 510",value:510},{label:"Entry 511",value:511}],E=[{label:"None/Generic",value:0},{label:"Neimi (Archer)",value:1},{label:"Amelia (Knight)",value:2},{label:"Gilliam (Knight)",value:3},{label:"Breguet (Knight)",value:4},{label:"Saar (Knight)",value:5},{label:"Marisa (Assassin)",value:6},{label:"Colm (Assassin)",value:7},{label:"Joshua (Assassin)",value:8},{label:"Bone (Brigand)",value:9},{label:"Bazba (Brigand)",value:10},{label:"Artur (Bishop)",value:11},{label:"Natasha (Bishop)",value:12},{label:"Moulder (Bishop)",value:13},{label:"Riev (Bishop)",value:14},{label:"???",value:15},{label:"Garcia (Hero)",value:16},{label:"Ross (Pirate)",value:17},{label:"Gerik (Hero)",value:18},{label:"Dozla (Berserker)",value:19},{label:"Ross (Berserker)",value:20},{label:"Tethys (Dancer)",value:21},{label:"Cormag (Wyvern Rider)",value:22},{label:"Cormag (Wyvern Lord)",value:23},{label:"Glen (Wyvern Lord)",value:24},{label:"Knoll (Druid)",value:25},{label:"Ewan (Druid)",value:26},{label:"Tana (FalcoKnight)",value:27},{label:"Vanessa (FalcoKnight)",value:28},{label:"Syrene (FalcoKnight)",value:29},{label:"Garcia (Fighter)",value:30},{label:"Ross (Fighter)",value:31},{label:"O'Neill (Prologue)",value:32},{label:"Gerik (Ranger)",value:33},{label:"Neimi (Ranger)",value:34},{label:"Beran (Ranger)",value:35},{label:"Amelia (General)",value:36},{label:"Gilliam (General)",value:37},{label:"Vigarde (General)",value:38},{label:"Tirado (General)",value:39},{label:"Forde (Great Knight)",value:40},{label:"Franz (Great Knight)",value:41},{label:"Gilliam (Great Knight)",value:42},{label:"Kyle (Great Knight)",value:43},{label:"Amelia (Great Knight)",value:44},{label:"Duessel (Great Knight)",value:45},{label:"Aias (Great Knight)",value:46},{label:"Lute (Mage)",value:47},{label:"Ewan (Mage)",value:48},{label:"Gerik (Mercenary)",value:49},{label:"Zonta (Mercenary)",value:50},{label:"Ewan (Mage Knight)",value:51},{label:"L'Arachel (Mage Knight)",value:52},{label:"Lute (Mage Knight)",value:53},{label:"Selena (Mage Knight)",value:54},{label:"Artur (Monk)",value:55},{label:"Joshua (Myrmidon)",value:56},{label:"Marisa (Myrmidon)",value:57},{label:"Amelia (Paladin)",value:58},{label:"Forde (Paladin)",value:59},{label:"Seth (Paladin)",value:60},{label:"Franz (Paladin)",value:61},{label:"Kyle (Paladin)",value:62},{label:"Orson (Paladin)",value:63},{label:"Vanessa (Peg Knight)",value:64},{label:"Tana (Peg Knight)",value:65},{label:"Ross (Hero)",value:66},{label:"Natasha (Cleric)",value:67},{label:"Colm (Rogue)",value:68},{label:"Moulder (Priest)",value:69},{label:"Rennac (Rogue)",value:70},{label:"Lute (Sage)",value:71},{label:"Artur (Sage)",value:72},{label:"Ewan (Sage)",value:73},{label:"???",value:74},{label:"Moulder (Sage)",value:75},{label:"Saleh (Sage)",value:76},{label:"Ewan (Druid)",value:77},{label:"Knoll (Shaman)",value:78},{label:"Novala (Shaman)",value:79},{label:"Ewan (Summoner)",value:80},{label:"Knoll (Summoner)",value:81},{label:"Innes (Sniper)",value:82},{label:"Neimi (Sniper)",value:83},{label:"Amelia (Cavalier)",value:84},{label:"Franz (Cavalier)",value:85},{label:"Kyle (Cavalier)",value:86},{label:"Forde (Cavalier)",value:87},{label:"Murray (Cavalier)",value:88},{label:"Ismaire (Swordmaster)",value:89},{label:"Hayden (Ranger)",value:90},{label:"Fado (General)",value:91},{label:"Joshua (Swordmaster)",value:92},{label:"Marisa (Swordmaster)",value:93},{label:"Colm (Thief)",value:94},{label:"Carlyle (Swordmaster)",value:95},{label:"L'Arachel (Valkyrie)",value:96},{label:"Natasha (Valkyrie)",value:97},{label:"L'Arachel (Troubadour)",value:98},{label:"Garcia (Warrior)",value:99},{label:"Ross (Warrior)",value:100},{label:"Binks (Warrior)",value:101},{label:"Tana (WyvernKnight)",value:102},{label:"Vanessa (WyvernKnight)",value:103},{label:"Cormag (WyvernKnight)",value:104},{label:"Valter (WyvernKnight)",value:105},{label:"Gheb (Berserker)",value:106},{label:"Pablo (Sage)",value:107},{label:"Caellach (Hero)",value:108},{label:"(Something beyond point?)",value:109},{label:"0x6E",value:110},{label:"0x6F",value:111},{label:"0x70",value:112},{label:"0x71",value:113},{label:"0x72",value:114},{label:"0x73",value:115},{label:"0x74",value:116},{label:"0x75",value:117},{label:"0x76",value:118},{label:"0x77",value:119},{label:"0x78",value:120},{label:"0x79",value:121},{label:"0x7A",value:122},{label:"0x7B",value:123},{label:"0x7C",value:124},{label:"0x7D",value:125},{label:"0x7E",value:126},{label:"0x7F",value:127},{label:"0x80",value:128},{label:"0x81",value:129},{label:"0x82",value:130},{label:"0x83",value:131},{label:"0x84",value:132},{label:"0x85",value:133},{label:"0x86",value:134},{label:"0x87",value:135},{label:"0x88",value:136},{label:"0x89",value:137},{label:"0x8A",value:138},{label:"0x8B",value:139},{label:"0x8C",value:140},{label:"0x8D",value:141},{label:"0x8E",value:142},{label:"0x8F",value:143},{label:"0x90",value:144},{label:"0x91",value:145},{label:"0x92",value:146},{label:"0x93",value:147},{label:"0x94",value:148},{label:"0x95",value:149},{label:"0x96",value:150},{label:"0x97",value:151},{label:"0x98",value:152},{label:"0x99",value:153},{label:"0x9A",value:154},{label:"0x9B",value:155},{label:"0x9C",value:156},{label:"0x9D",value:157},{label:"0x9E",value:158},{label:"0x9F",value:159},{label:"0xA0",value:160},{label:"0xA1",value:161},{label:"0xA2",value:162},{label:"0xA3",value:163},{label:"0xA4",value:164},{label:"0xA5",value:165},{label:"0xA6",value:166},{label:"0xA7",value:167},{label:"0xA8",value:168},{label:"0xA9",value:169},{label:"0xAA",value:170},{label:"0xAB",value:171},{label:"0xAC",value:172},{label:"0xAD",value:173},{label:"0xAE",value:174},{label:"0xAF",value:175},{label:"0xB0",value:176},{label:"0xB1",value:177},{label:"0xB2",value:178},{label:"0xB3",value:179},{label:"0xB4",value:180},{label:"0xB5",value:181},{label:"0xB6",value:182},{label:"0xB7",value:183},{label:"0xB8",value:184},{label:"0xB9",value:185},{label:"0xBA",value:186},{label:"0xBB",value:187},{label:"0xBC",value:188},{label:"0xBD",value:189},{label:"0xBE",value:190},{label:"0xBF",value:191},{label:"0xC0",value:192},{label:"0xC1",value:193},{label:"0xC2",value:194},{label:"0xC3",value:195},{label:"0xC4",value:196},{label:"0xC5",value:197},{label:"0xC6",value:198},{label:"0xC7",value:199},{label:"0xC8",value:200},{label:"0xC9",value:201},{label:"0xCA",value:202},{label:"0xCB",value:203},{label:"0xCC",value:204},{label:"0xCD",value:205},{label:"0xCE",value:206},{label:"0xCF",value:207},{label:"0xD0",value:208},{label:"0xD1",value:209},{label:"0xD2",value:210},{label:"0xD3",value:211},{label:"0xD4",value:212},{label:"0xD5",value:213},{label:"0xD6",value:214},{label:"0xD7",value:215},{label:"0xD8",value:216},{label:"0xD9",value:217},{label:"0xDA",value:218},{label:"0xDB",value:219},{label:"0xDC",value:220},{label:"0xDD",value:221},{label:"0xDE",value:222},{label:"0xDF",value:223},{label:"0xE0",value:224},{label:"0xE1",value:225},{label:"0x62",value:98},{label:"0xE3",value:227},{label:"0xE4",value:228},{label:"0xE5",value:229},{label:"0xE6",value:230},{label:"0xE7",value:231},{label:"0xE8",value:232},{label:"0xE9",value:233},{label:"0xEA",value:234},{label:"0xEB",value:235},{label:"0xEC",value:236},{label:"0xED",value:237},{label:"0xEE",value:238},{label:"0xEF",value:239},{label:"0xF0",value:240},{label:"0xF1",value:241},{label:"0xF2",value:242},{label:"0xF3",value:243},{label:"0xF4",value:244},{label:"0xF5",value:245},{label:"0xF6",value:246},{label:"0xF7",value:247},{label:"0xF8",value:248},{label:"0xF9",value:249},{label:"0xFA",value:250},{label:"0xFB",value:251},{label:"0xFC",value:252},{label:"0xFD",value:253},{label:"0xFE",value:254},{label:"0xFF",value:255}];var i=a(64004),o=a(34871),x=a(53551),s=a(70579);function h(){var l;const[e]=(0,u.KC)(),[a,h]=(0,v.ok)(),c=a.get("id");let d=null;try{d=new DataView(e,9825956+7*c,7)}catch(C){d=null}return(0,s.jsxs)(b.A,{direction:"vertical",align:"center",style:{width:"100%"},children:[(0,s.jsx)(n.A,{message:"FE8 Palette Association Editor by Zeld and Zephyr",type:"info"}),(0,s.jsx)("div",{children:(0,s.jsx)(o.A,{disabled:null==d,defaultValue:null!==(l=y.find((l=>l.value.toString()===c)))&&void 0!==l?l:c,onSelect:l=>h({id:l}),options:y})},c),(0,s.jsx)(x.A,{isHex:!0,type:i.pe.U8,reference:"BattlePaletteReference",options:E,view:d,name:"Trainee Palette",offset:0}),(0,s.jsx)(x.A,{isHex:!0,type:i.pe.U8,reference:"BattlePaletteReference",options:E,view:d,name:"Base Palette",offset:1}),(0,s.jsx)(x.A,{isHex:!0,type:i.pe.U8,reference:"BattlePaletteReference",options:E,view:d,name:"Second Base Palette (For Trainees)",offset:2}),(0,s.jsx)(x.A,{isHex:!0,type:i.pe.U8,reference:"BattlePaletteReference",options:E,view:d,name:"First Promotion Palette",offset:3}),(0,s.jsx)(x.A,{isHex:!0,type:i.pe.U8,reference:"BattlePaletteReference",options:E,view:d,name:"Second Promotion Palette",offset:4}),(0,s.jsx)(x.A,{isHex:!0,type:i.pe.U8,reference:"BattlePaletteReference",options:E,view:d,name:"Third Promotion Palette",offset:5}),(0,s.jsx)(x.A,{isHex:!0,type:i.pe.U8,reference:"BattlePaletteReference",options:E,view:d,name:"Fourth Promotion Palette",offset:6}),(0,s.jsx)(r.A,{children:(0,s.jsx)(t.A,{})})]})}}}]);
//# sourceMappingURL=49039.179bdfea.chunk.js.map