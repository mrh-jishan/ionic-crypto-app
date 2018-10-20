webpackJsonp([7],{116:function(n,t,e){"use strict";e(151),e(186);var a=e(57);e.d(t,"a",function(){return a.a})},118:function(n,t,e){"use strict";e.d(t,"a",function(){return a});e(2);var a=function(){function n(){this.BASE_IMAGE_PATH="https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/",this.DEFAULT_EXTENSION="png"}return n.prototype.getCoinImage=function(n){return""+this.BASE_IMAGE_PATH+n.toLowerCase()+"."+this.DEFAULT_EXTENSION},n}()},119:function(n,t,e){"use strict";e.d(t,"a",function(){return a});e(2);var a=function(){function n(n){this.settingsProvider=n}return n.prototype.getPriceByCurrency=function(n){return n["price_"+this.settingsProvider.getCacheValue("currency").code]},n}()},121:function(n,t,e){"use strict";e.d(t,"c",function(){return o}),e.d(t,"e",function(){return i}),e.d(t,"b",function(){return l}),e.d(t,"d",function(){return a}),e.d(t,"a",function(){return u});var a,o=[{code:"en",name:"English"},{code:"fr",name:"Français"}],i="en",l=[{code:"usd",name:"Dollar",symbol:"$"},{code:"eur",name:"Euro",symbol:"€"}];!function(n){n.Dark="dark-theme",n.Light="light-theme"}(a||(a={}));var u="https://api.coinmarketcap.com/v1"},151:function(n,t,e){"use strict";e.d(t,"a",function(){return i});e(2);var a=e(80),o=e(121),i=function(){function n(n){this.http=n}return n.prototype.get=function(n,t,e){if(e||(e={params:new a.g}),t){e.params=new a.g;for(var i in t)e.params.set(i,t[i])}return this.http.get(o.a+"/"+n,e)},n}()},177:function(n,t,e){"use strict";e.d(t,"a",function(){return l});e(2),e(89),e(81),e(113);var a=e(121),o=this&&this.__awaiter||function(n,t,e,a){return new(e||(e=Promise))(function(o,i){function l(n){try{r(a.next(n))}catch(n){i(n)}}function u(n){try{r(a.throw(n))}catch(n){i(n)}}function r(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(l,u)}r((a=a.apply(n,t||[])).next())})},i=this&&this.__generator||function(n,t){function e(e){return function(l){return function(e){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,o&&(i=o[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(o,e[1])).done)return i;switch(o=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return u.label++,{value:e[1],done:!1};case 5:u.label++,o=e[1],e=[0];continue;case 7:e=u.ops.pop(),u.trys.pop();continue;default:if(i=u.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){u=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){u.label=e[1];break}if(6===e[0]&&u.label<i[1]){u.label=i[1],i=e;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(e);break}i[2]&&u.ops.pop(),u.trys.pop();continue}e=t.call(n,u)}catch(n){e=[6,n],o=0}finally{a=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,l])}}var a,o,i,l,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l},l=function(){function n(n,t,e,a,o,i){this.platform=n,this.statusBar=t,this.splashScreen=e,this.settings=a,this.translate=o,this.config=i,this.rootPage="HomePage",this.platformReady()}return n.prototype.platformReady=function(){return o(this,void 0,void 0,function(){return i(this,function(n){switch(n.label){case 0:return[4,this.platform.ready()];case 1:return n.sent(),[4,this.settings.load()];case 2:return n.sent(),this.initLanguage(),this.initTranslation(),this.initActiveTheme(),this.statusBar.styleDefault(),this.splashScreen.hide(),[2]}})})},n.prototype.initActiveTheme=function(){return o(this,void 0,void 0,function(){var n,t=this;return i(this,function(e){switch(e.label){case 0:return[4,this.settings.getValue("theme")];case 1:return n=e.sent(),this.settings.setActiveTheme(n),this.settings.getActiveTheme().subscribe(function(n){return t.selectedTheme=n}),n===a.d.Dark&&this.statusBar.styleLightContent(),[2]}})})},n.prototype.initLanguage=function(){return o(this,void 0,void 0,function(){var n;return i(this,function(t){switch(t.label){case 0:return this.translate.setDefaultLang(a.e),[4,this.settings.getValue("language")];case 1:return(n=t.sent())?this.translate.use(n.code):(this.translate.use(a.e),this.settings.setValue("language",a.e)),[2]}})})},n.prototype.initTranslation=function(){var n=this;this.translate.stream(["BACK_BUTTON_TEXT"]).subscribe(function(t){n.config.set("ios","backButtonText",t.BACK_BUTTON_TEXT)})},n.prototype.openPage=function(n){this.nav.setRoot(n)},n}()},178:function(n,t,e){"use strict";e.d(t,"a",function(){return a});e(2),e(358),e(113),e(356);var a=function(){return function(){}}()},186:function(n,t,e){"use strict";e.d(t,"a",function(){return a});e(2),e(151);var a=function(){function n(n,t){this.api=n,this.http=t}return n.prototype.getAllCoin=function(){return this.api.get("ticker/?convert=EUR").toPromise()},n.prototype.getUpcomingCoin=function(){var n=this;return new Promise(function(t,e){n.http.get("https://api.icowatchlist.com/public/v1/upcoming").subscribe(function(n){t(n)},function(n){e(n)})})},n.prototype.getCrytptoNews=function(){var n=this;return new Promise(function(t,e){n.http.get("https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=d08830add58541029ba1c12de6597ee3&page=4&pageSize=100").subscribe(function(n){t(n)},function(n){e(n)})})},n}()},202:function(n,t){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=202},237:function(n,t,e){function a(n){var t=o[n];return t?e.e(t[1]).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var o={"../pages/crypto-news/crypto-news.module.ngfactory":[655,1],"../pages/favourite-coin/favourite-coin.module.ngfactory":[656,5],"../pages/home/home.module.ngfactory":[657,4],"../pages/settings/currency/currency.module.ngfactory":[658,3],"../pages/settings/language/language.module.ngfactory":[659,2],"../pages/settings/settings.module.ngfactory":[660,6],"../pages/upcoming-coin/upcoming-coin.module.ngfactory":[661,0]};a.keys=function(){return Object.keys(o)},a.id=237,n.exports=a},356:function(n,t,e){"use strict";e.d(t,"a",function(){return i});e(2),e(116);var a=this&&this.__awaiter||function(n,t,e,a){return new(e||(e=Promise))(function(o,i){function l(n){try{r(a.next(n))}catch(n){i(n)}}function u(n){try{r(a.throw(n))}catch(n){i(n)}}function r(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(l,u)}r((a=a.apply(n,t||[])).next())})},o=this&&this.__generator||function(n,t){function e(e){return function(l){return function(e){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,o&&(i=o[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(o,e[1])).done)return i;switch(o=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return u.label++,{value:e[1],done:!1};case 5:u.label++,o=e[1],e=[0];continue;case 7:e=u.ops.pop(),u.trys.pop();continue;default:if(i=u.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){u=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){u.label=e[1];break}if(6===e[0]&&u.label<i[1]){u.label=i[1],i=e;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(e);break}i[2]&&u.ops.pop(),u.trys.pop();continue}e=t.call(n,u)}catch(n){e=[6,n],o=0}finally{a=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,l])}}var a,o,i,l,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l},i=function(){function n(n){this.settingsProvider=n,this.values=[]}return Object.defineProperty(n.prototype,"exec",{set:function(n){var t=n.thisParent,e=n.keyDB;this.fctToExectute=n.fctToExectute,this.parent=t,this.keyDB=e},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"dataSetting",{set:function(n){n.length>0&&(this.availableSettings=n,this.init())},enumerable:!0,configurable:!0}),n.prototype.init=function(){return a(this,void 0,void 0,function(){var n,t=this;return o(this,function(e){switch(e.label){case 0:return[4,this.settingsProvider.getValue(this.keyDB)];case 1:return n=e.sent(),this.values=this.availableSettings.map(function(e){return Object.assign(e,{isChecked:t.isChecked(n,e.code)})}),[2]}})})},n.prototype.isChecked=function(n,t){return n.code===t},n.prototype.save=function(n){return a(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return"function"!=typeof this.fctToExectute?[3,2]:[4,this.fctToExectute.call(this.parent,n)];case 1:t.sent(),t.label=2;case 2:return[2]}})})},n}()},358:function(n,t,e){"use strict";e.d(t,"a",function(){return a});e(2),e(116);var a=function(){function n(n,t,e){this.imageHelper=n,this.priceHelper=t,this.settingsProvider=e,this.getSymbol()}return n.prototype.getSymbol=function(){var n=this.settingsProvider.getCacheValue("currency");this.symbol=n.symbol},n.prototype.getPriceColor=function(n){switch(Math.sign(n)){case 1:return"price-up";case-1:return"price-down";case 0:default:return"price-no-change"}},n}()},360:function(n,t,e){"use strict";t.b=function(n){return new a.a(n,"./assets/i18n/",".json")},t.c=function(n){return new i.a(n,{theme:o.d.Light,currency:{code:"usd",name:"Dollar",symbol:"$"},language:{code:"en",name:"English"}})},e.d(t,"a",function(){return l});e(2),e(89),e(81),e(122);var a=e(369),o=(e(113),e(121)),i=e(116),l=function(){return function(){}}()},361:function(n,t,e){"use strict";function a(n){return i._26(0,[i._22(402653184,1,{nav:0}),(n()(),i._3(1,0,null,null,76,"ion-menu",[["role","navigation"]],[[8,"className",0]],null,null,d.b,d.a)),i._20(6144,null,y.a,null,[b.a]),i._2(3,245760,null,2,b.a,[v.a,i.k,k.a,w.a,i.D,C.a,P.l,T.a,E.a],{content:[0,"content"]},null),i._22(335544320,2,{menuContent:0}),i._22(335544320,3,{menuNav:0}),(n()(),i._24(-1,0,["\n    "])),(n()(),i._3(7,0,null,0,11,"ion-header",[],null,null,null,null,null)),i._2(8,16384,null,0,N.a,[k.a,i.k,i.D,[2,S.a]],null,null),(n()(),i._24(-1,null,["\n        "])),(n()(),i._3(10,0,null,null,7,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,x.b,x.a)),i._2(11,49152,null,0,D.a,[k.a,i.k,i.D],null,null),(n()(),i._24(-1,3,["\n            "])),(n()(),i._3(13,0,null,3,3,"ion-title",[],null,null,null,j.b,j.a)),i._2(14,49152,null,0,A.a,[k.a,i.k,i.D,[2,D.a],[2,O.a]],null,null),(n()(),i._24(15,0,["",""])),i._17(131072,B.j,[B.k,i.g]),(n()(),i._24(-1,3,["\n        "])),(n()(),i._24(-1,null,["\n    "])),(n()(),i._24(-1,0,["\n    "])),(n()(),i._3(20,0,null,0,56,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,F.b,F.a)),i._2(21,4374528,[[2,4]],0,H.a,[k.a,w.a,T.a,i.k,i.D,E.a,C.a,i.x,[2,S.a],[2,L.a]],null,null),(n()(),i._24(-1,1,["\n        "])),(n()(),i._3(23,0,null,1,52,"ion-list",[],null,null,null,null,null)),i._2(24,16384,null,0,M.a,[k.a,i.k,i.D,w.a,P.l,T.a],null,null),(n()(),i._24(-1,null,["\n            "])),(n()(),i._3(26,0,null,null,8,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var a=!0,o=n.component;if("click"===t){a=!1!==i._15(n,32).close()&&a}if("click"===t){a=!1!==o.openPage("HomePage")&&a}return a},I.b,I.a)),i._2(27,1097728,null,3,U.a,[K.a,k.a,i.k,i.D,[2,G.a]],null,null),i._22(335544320,4,{contentLabel:0}),i._22(603979776,5,{_buttons:1}),i._22(603979776,6,{_icons:1}),i._2(31,16384,null,0,V.a,[],null,null),i._2(32,16384,null,0,R.a,[v.a],{menuClose:[0,"menuClose"]},null),(n()(),i._24(33,2,["\n                ","\n            "])),i._17(131072,B.j,[B.k,i.g]),(n()(),i._24(-1,null,["\n            "])),(n()(),i._3(36,0,null,null,8,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var a=!0,o=n.component;if("click"===t){a=!1!==i._15(n,42).close()&&a}if("click"===t){a=!1!==o.openPage("UpcomingCoinPage")&&a}return a},I.b,I.a)),i._2(37,1097728,null,3,U.a,[K.a,k.a,i.k,i.D,[2,G.a]],null,null),i._22(335544320,7,{contentLabel:0}),i._22(603979776,8,{_buttons:1}),i._22(603979776,9,{_icons:1}),i._2(41,16384,null,0,V.a,[],null,null),i._2(42,16384,null,0,R.a,[v.a],{menuClose:[0,"menuClose"]},null),(n()(),i._24(43,2,["\n                ","\n            "])),i._17(131072,B.j,[B.k,i.g]),(n()(),i._24(-1,null,["\n            "])),(n()(),i._3(46,0,null,null,8,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var a=!0,o=n.component;if("click"===t){a=!1!==i._15(n,52).close()&&a}if("click"===t){a=!1!==o.openPage("CryptoNewsPage")&&a}return a},I.b,I.a)),i._2(47,1097728,null,3,U.a,[K.a,k.a,i.k,i.D,[2,G.a]],null,null),i._22(335544320,10,{contentLabel:0}),i._22(603979776,11,{_buttons:1}),i._22(603979776,12,{_icons:1}),i._2(51,16384,null,0,V.a,[],null,null),i._2(52,16384,null,0,R.a,[v.a],{menuClose:[0,"menuClose"]},null),(n()(),i._24(53,2,["\n                ","\n            "])),i._17(131072,B.j,[B.k,i.g]),(n()(),i._24(-1,null,["\n            "])),(n()(),i._3(56,0,null,null,8,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var a=!0,o=n.component;if("click"===t){a=!1!==i._15(n,62).close()&&a}if("click"===t){a=!1!==o.openPage("FavouriteCoinPage")&&a}return a},I.b,I.a)),i._2(57,1097728,null,3,U.a,[K.a,k.a,i.k,i.D,[2,G.a]],null,null),i._22(335544320,13,{contentLabel:0}),i._22(603979776,14,{_buttons:1}),i._22(603979776,15,{_icons:1}),i._2(61,16384,null,0,V.a,[],null,null),i._2(62,16384,null,0,R.a,[v.a],{menuClose:[0,"menuClose"]},null),(n()(),i._24(63,2,["\n                ","\n            "])),i._17(131072,B.j,[B.k,i.g]),(n()(),i._24(-1,null,["\n            "])),(n()(),i._3(66,0,null,null,8,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var a=!0,o=n.component;if("click"===t){a=!1!==i._15(n,72).close()&&a}if("click"===t){a=!1!==o.openPage("SettingsPage")&&a}return a},I.b,I.a)),i._2(67,1097728,null,3,U.a,[K.a,k.a,i.k,i.D,[2,G.a]],null,null),i._22(335544320,16,{contentLabel:0}),i._22(603979776,17,{_buttons:1}),i._22(603979776,18,{_icons:1}),i._2(71,16384,null,0,V.a,[],null,null),i._2(72,16384,null,0,R.a,[v.a],{menuClose:[0,"menuClose"]},null),(n()(),i._24(73,2,["\n                ","\n            "])),i._17(131072,B.j,[B.k,i.g]),(n()(),i._24(-1,null,["\n        "])),(n()(),i._24(-1,1,["\n    "])),(n()(),i._24(-1,0,["\n"])),(n()(),i._24(-1,null,["\n\n"])),(n()(),i._24(-1,null,["\n"])),(n()(),i._3(80,0,null,null,2,"ion-nav",[["swipeBackEnabled","false"]],[[8,"className",0]],null,null,X.b,X.a)),i._20(6144,null,y.a,null,[Y.a]),i._2(82,4374528,[[1,4],["content",4]],0,Y.a,[[2,S.a],[2,L.a],E.a,k.a,w.a,i.k,i.x,i.D,i.i,P.l,q.a,[2,z.a],T.a,i.l],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null),(n()(),i._24(-1,null,["\n"]))],function(n,t){var e=t.component;n(t,3,0,i._15(t,82));n(t,32,0,"");n(t,42,0,"");n(t,52,0,"");n(t,62,0,"");n(t,72,0,"");n(t,82,0,"false",e.rootPage)},function(n,t){var e=t.component;n(t,1,0,e.selectedTheme);n(t,10,0,i._15(t,11)._sbPadding);n(t,15,0,i._25(t,15,0,i._15(t,16).transform("MENU_TITLE")));n(t,20,0,i._15(t,21).statusbarPadding,i._15(t,21)._hasRefresher);n(t,33,0,i._25(t,33,0,i._15(t,34).transform("MENU_HOME")));n(t,43,0,i._25(t,43,0,i._15(t,44).transform("UPCOMING_COIN")));n(t,53,0,i._25(t,53,0,i._15(t,54).transform("CRYPTO_NEWS")));n(t,63,0,i._25(t,63,0,i._15(t,64).transform("FAVOURITE_COIN")));n(t,73,0,i._25(t,73,0,i._15(t,74).transform("MENU_SETTINGS")));n(t,80,0,e.selectedTheme)})}Object.defineProperty(t,"__esModule",{value:!0});var o=e(47),i=e(1),l=e(360),u=e(66),r=e(345),s=e(346),c=e(347),f=e(348),_=e(349),g=e(350),h=e(351),p=e(352),m=e(353),d=e(652),y=e(44),b=e(100),v=e(32),k=e(3),w=e(6),C=e(35),P=e(10),T=e(13),E=e(12),N=e(115),S=e(7),x=e(653),D=e(46),j=e(354),A=e(77),O=e(45),B=e(76),F=e(355),H=e(30),L=e(29),M=e(58),I=e(188),U=e(25),K=e(22),G=e(51),V=e(79),R=e(149),X=e(654),Y=e(70),q=e(42),z=e(24),W=e(177),$=e(81),J=e(89),Q=e(57),Z=i._1({encapsulation:2,styles:[],data:{}}),nn=i.Z("ng-component",W.a,function(n){return i._26(0,[(n()(),i._3(0,0,null,null,1,"ng-component",[],null,null,null,a,Z)),i._2(1,49152,null,0,W.a,[w.a,$.a,J.a,Q.a,B.k,k.a],null,null)],null,null)},{},{},[]),tn=e(19),en=e(162),an=e(27),on=e(80),ln=e(141),un=e(143),rn=e(161),sn=e(37),cn=e(117),fn=e(180),_n=e(68),gn=e(50),hn=e(166),pn=e(95),mn=e(170),dn=e(164),yn=e(123),bn=e(190),vn=e(151),kn=e(186),wn=e(118),Cn=e(119),Pn=e(344),Tn=e(163),En=e(150),Nn=e(165),Sn=e(178),xn=e(122),Dn=i._0(l.a,[u.b],function(n){return i._11([i._12(512,i.i,i.W,[[8,[r.a,s.a,c.a,f.a,_.a,g.a,h.a,p.a,m.a,nn]],[3,i.i],i.v]),i._12(5120,i.u,i._21,[[3,i.u]]),i._12(4608,tn.l,tn.k,[i.u,[2,tn.t]]),i._12(5120,i.b,i._5,[]),i._12(5120,i.s,i._13,[]),i._12(5120,i.t,i._16,[]),i._12(4608,o.c,o.q,[tn.c]),i._12(6144,i.H,null,[o.c]),i._12(4608,o.f,en.a,[]),i._12(5120,o.d,function(n,t,e,a,i){return[new o.k(n,t),new o.o(e),new o.n(a,i)]},[tn.c,i.x,tn.c,tn.c,o.f]),i._12(4608,o.e,o.e,[o.d,i.x]),i._12(135680,o.m,o.m,[tn.c]),i._12(4608,o.l,o.l,[o.e,o.m]),i._12(6144,i.F,null,[o.l]),i._12(6144,o.p,null,[o.m]),i._12(4608,i.K,i.K,[i.x]),i._12(4608,o.h,o.h,[tn.c]),i._12(4608,o.i,o.i,[tn.c]),i._12(4608,an.k,an.k,[]),i._12(4608,an.c,an.c,[]),i._12(4608,on.i,on.o,[tn.c,i.z,on.m]),i._12(4608,on.p,on.p,[on.i,on.n]),i._12(5120,on.a,function(n){return[n]},[on.p]),i._12(4608,on.l,on.l,[]),i._12(6144,on.j,null,[on.l]),i._12(4608,on.h,on.h,[on.j]),i._12(6144,on.b,null,[on.h]),i._12(4608,on.f,on.k,[on.b,i.q]),i._12(4608,on.c,on.c,[on.f]),i._12(5120,B.g,l.b,[on.c]),i._12(4608,B.c,B.e,[]),i._12(4608,B.i,B.d,[]),i._12(4608,B.b,B.a,[]),i._12(4608,B.n,B.n,[]),i._12(4608,B.k,B.k,[B.n,B.g,B.c,B.i,B.b,B.l,B.m]),i._12(4608,ln.a,ln.a,[E.a,k.a]),i._12(4608,un.a,un.a,[E.a,k.a]),i._12(4608,rn.a,rn.a,[]),i._12(4608,K.a,K.a,[]),i._12(4608,sn.a,sn.a,[w.a]),i._12(4608,C.a,C.a,[k.a,w.a,i.x,T.a]),i._12(4608,cn.a,cn.a,[E.a,k.a]),i._12(5120,tn.g,fn.c,[tn.r,[2,tn.a],k.a]),i._12(4608,tn.f,tn.f,[tn.g]),i._12(5120,_n.b,_n.d,[E.a,_n.a]),i._12(5120,z.a,z.b,[E.a,_n.b,tn.f,gn.b,i.i]),i._12(4608,hn.a,hn.a,[E.a,k.a,z.a]),i._12(4608,pn.a,pn.a,[E.a,k.a]),i._12(4608,mn.a,mn.a,[E.a,k.a,z.a]),i._12(4608,dn.a,dn.a,[k.a,w.a,T.a,E.a,P.l]),i._12(4608,yn.a,yn.a,[E.a,k.a]),i._12(4608,q.a,q.a,[w.a,k.a]),i._12(5120,bn.a,bn.c,[bn.b]),i._12(4608,vn.a,vn.a,[on.c]),i._12(4608,kn.a,kn.a,[vn.a,on.c]),i._12(4608,J.a,J.a,[]),i._12(4608,$.a,$.a,[]),i._12(4608,wn.a,wn.a,[]),i._12(5120,Q.a,l.c,[bn.a]),i._12(4608,Cn.a,Cn.a,[Q.a]),i._12(512,tn.b,tn.b,[]),i._12(512,i.l,Pn.a,[]),i._12(256,k.b,{},[]),i._12(1024,Tn.a,Tn.b,[]),i._12(1024,w.a,w.b,[o.b,Tn.a,i.x]),i._12(1024,k.a,k.c,[k.b,w.a]),i._12(512,T.a,T.a,[w.a]),i._12(512,v.a,v.a,[]),i._12(512,E.a,E.a,[k.a,w.a,[2,v.a]]),i._12(512,P.l,P.l,[E.a]),i._12(256,_n.a,{links:[{loadChildren:"../pages/crypto-news/crypto-news.module.ngfactory#CryptoNewsPageModuleNgFactory",name:"CryptoNewsPage",segment:"crypto-news",priority:"low",defaultHistory:[]},{loadChildren:"../pages/favourite-coin/favourite-coin.module.ngfactory#FavouriteCoinPageModuleNgFactory",name:"FavouriteCoinPage",segment:"favourite-coin",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/currency/currency.module.ngfactory#CurrencyPageModuleNgFactory",name:"CurrencyPage",segment:"currency",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/language/language.module.ngfactory#LanguagePageModuleNgFactory",name:"LanguagePage",segment:"language",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/upcoming-coin/upcoming-coin.module.ngfactory#UpcomingCoinPageModuleNgFactory",name:"UpcomingCoinPage",segment:"upcoming-coin",priority:"low",defaultHistory:[]}]},[]),i._12(512,i.h,i.h,[]),i._12(512,En.a,En.a,[i.h]),i._12(1024,gn.b,gn.c,[En.a,i.q]),i._12(1024,i.c,function(n,t,e,a,i,l,u,r,s,c,f,_,g){return[o.s(n),Nn.a(t),rn.b(e,a),dn.b(i,l,u,r,s),gn.d(c,f,_,g)]},[[2,i.w],k.a,w.a,T.a,k.a,w.a,T.a,E.a,P.l,k.a,_n.a,gn.b,i.x]),i._12(512,i.d,i.d,[[2,i.c]]),i._12(131584,i.f,i.f,[i.x,i.X,i.q,i.l,i.i,i.d]),i._12(512,i.e,i.e,[i.f]),i._12(512,o.a,o.a,[[3,o.a]]),i._12(512,an.j,an.j,[]),i._12(512,an.d,an.d,[]),i._12(512,an.i,an.i,[]),i._12(512,fn.a,fn.a,[]),i._12(512,Sn.a,Sn.a,[]),i._12(512,on.e,on.e,[]),i._12(512,on.d,on.d,[]),i._12(512,B.h,B.h,[]),i._12(512,xn.a,xn.a,[]),i._12(512,l.a,l.a,[]),i._12(256,on.m,"XSRF-TOKEN",[]),i._12(256,on.n,"X-XSRF-TOKEN",[]),i._12(256,B.m,void 0,[]),i._12(256,B.l,void 0,[]),i._12(256,u.a,W.a,[]),i._12(256,tn.a,"/",[]),i._12(256,bn.b,null,[])])});Object(i.Q)(),Object(o.j)().bootstrapModuleFactory(Dn)},57:function(n,t,e){"use strict";e.d(t,"a",function(){return o});e(2);var a=e(372),o=(e.n(a),e(122),function(){function n(n,t){this.storage=n,this.SETTINGS_KEY="_settings",this.defaults=t,this.theme=new a.BehaviorSubject("light-theme")}return n.prototype.setActiveTheme=function(n){this.theme.next(n)},n.prototype.getActiveTheme=function(){return this.theme.asObservable()},n.prototype.load=function(){var n=this;return this.storage.get(this.SETTINGS_KEY).then(function(t){return t?(n.settings=t,n.mergeDefaults(n.defaults)):n.setAll(n.defaults).then(function(t){n.settings=t})})},n.prototype.setValue=function(n,t){return this.settings[n]=t,this.storage.set(this.SETTINGS_KEY,this.settings)},n.prototype.getValue=function(n){return this.storage.get(this.SETTINGS_KEY).then(function(t){return t[n]})},n.prototype.getCacheValue=function(n){return this.settings[n]},n.prototype.mergeDefaults=function(n){for(var t in n)t in this.settings||(this.settings[t]=n[t]);return this.setAll(this.settings)},n.prototype.setAll=function(n){return this.storage.set(this.SETTINGS_KEY,n)},n}())}},[361]);