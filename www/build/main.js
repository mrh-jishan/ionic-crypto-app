webpackJsonp([7],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageHelper = /** @class */ (function () {
    function ImageHelper() {
        this.BASE_IMAGE_PATH = 'https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/';
        this.DEFAULT_EXTENSION = 'png';
    }
    ImageHelper.prototype.getCoinImage = function (coin) {
        return "" + this.BASE_IMAGE_PATH + coin.toLowerCase() + "." + this.DEFAULT_EXTENSION;
    };
    ImageHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ImageHelper);
    return ImageHelper;
}());

//# sourceMappingURL=image.helper.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PriceHelper = /** @class */ (function () {
    function PriceHelper(settingsProvider) {
        this.settingsProvider = settingsProvider;
    }
    PriceHelper.prototype.getPriceByCurrency = function (coin) {
        var currentCurrency = this.settingsProvider.getCacheValue('currency');
        return coin['price_' + currentCurrency.code];
    };
    PriceHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__["a" /* SettingsProvider */]])
    ], PriceHelper);
    return PriceHelper;
}());

//# sourceMappingURL=price.helper.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/converter/converter.module": [
		702,
		16
	],
	"../pages/crypto-news/crypto-news.module": [
		687,
		10
	],
	"../pages/favourite-coin/favourite-coin.module": [
		688,
		15
	],
	"../pages/home/home.module": [
		689,
		14
	],
	"../pages/settings/currency/currency.module": [
		690,
		13
	],
	"../pages/settings/language/language.module": [
		691,
		12
	],
	"../pages/settings/settings.module": [
		692,
		11
	],
	"../pages/upcoming-coin/upcoming-coin.module": [
		693,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constant__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_app_constant__["a" /* apiUrl */] + '/' + endpoint, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coin_card_coin_card__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_settings_list_settings__ = __webpack_require__(668);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__coin_card_coin_card__["a" /* CoinCardComponent */], __WEBPACK_IMPORTED_MODULE_3__list_settings_list_settings__["a" /* ListSettingsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__coin_card_coin_card__["a" /* CoinCardComponent */], __WEBPACK_IMPORTED_MODULE_3__list_settings_list_settings__["a" /* ListSettingsComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createTranslateLoader;
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_constant__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helper_image_helper__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helper_price_helper__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_providers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_components_module__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_converter_converter__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* IONIC / ANGULAR */









/* CONSTANT */

/* APP */

/* HELPER */


/* PROVIDER */

/* SHARED MODULES */


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_13__providers_providers__["c" /* SettingsProvider */](storage, {
        theme: __WEBPACK_IMPORTED_MODULE_9__app_constant__["d" /* availableTheme */].Light,
        currency: {
            code: 'usd',
            name: 'Dollar',
            symbol: '$'
        },
        language: {
            code: 'en',
            name: 'English'
        }
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* CryptocurrencyApp */], __WEBPACK_IMPORTED_MODULE_15__pages_converter_converter__["a" /* ConverterPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* CryptocurrencyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/crypto-news/crypto-news.module#CryptoNewsPageModule', name: 'CryptoNewsPage', segment: 'crypto-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favourite-coin/favourite-coin.module#FavouriteCoinPageModule', name: 'FavouriteCoinPage', segment: 'favourite-coin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/currency/currency.module#CurrencyPageModule', name: 'CurrencyPage', segment: 'currency', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upcoming-coin/upcoming-coin.module#UpcomingCoinPageModule', name: 'UpcomingCoinPage', segment: 'upcoming-coin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/converter/converter.module#ConverterPageModule', name: 'ConverterPage', segment: 'converter', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* CryptocurrencyApp */], __WEBPACK_IMPORTED_MODULE_15__pages_converter_converter__["a" /* ConverterPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_13__providers_providers__["b" /* CoinProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__helper_image_helper__["a" /* ImageHelper */],
                __WEBPACK_IMPORTED_MODULE_12__helper_price_helper__["a" /* PriceHelper */],
                { provide: __WEBPACK_IMPORTED_MODULE_13__providers_providers__["c" /* SettingsProvider */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinProvider = /** @class */ (function () {
    function CoinProvider(api, http) {
        this.api = api;
        this.http = http;
    }
    CoinProvider.prototype.getAllCoin = function () {
        return this.api.get('ticker/?convert=EUR').toPromise();
    };
    CoinProvider.prototype.getUpcomingCoin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://api.icowatchlist.com/public/v1/upcoming').subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CoinProvider.prototype.getCrytptoNews = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=d08830add58541029ba1c12de6597ee3&page=4&pageSize=100').subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CoinProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CoinProvider);
    return CoinProvider;
}());

//# sourceMappingURL=coinmarketcap.provider.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_image_helper__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_price_helper__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoinCardComponent = /** @class */ (function () {
    function CoinCardComponent(imageHelper, priceHelper, settingsProvider) {
        this.imageHelper = imageHelper;
        this.priceHelper = priceHelper;
        this.settingsProvider = settingsProvider;
        this.getSymbol();
    }
    CoinCardComponent.prototype.getSymbol = function () {
        var currency = this.settingsProvider.getCacheValue('currency');
        this.symbol = currency.symbol;
    };
    CoinCardComponent.prototype.getPriceColor = function (price) {
        switch (Math.sign(price)) {
            case 1:
                return 'price-up';
            case -1:
                return 'price-down';
            case 0:
                return 'price-no-change';
            default:
                return 'price-no-change';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CoinCardComponent.prototype, "coinData", void 0);
    CoinCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'coin-card',template:/*ion-inline-start:"/home/rabiul/ionic/ionic-cryptocurrency/src/components/coin-card/coin-card.html"*/'<ion-row>\n  <ion-col col-2>\n    <img src="{{imageHelper.getCoinImage(coinData.symbol)}}" height="32" width="32">\n  </ion-col>\n  <ion-col col-6 class=\'vertical-center\'>\n    <div>\n      <span class=\'bold\'>{{ coinData.symbol }}</span> |\n      <span>{{ coinData.name }}</span>\n    </div>\n  </ion-col>\n  <ion-col col-4 class=\'vertical-center\'>\n    <span class=\'bold\'>{{ priceHelper.getPriceByCurrency(coinData) }} {{symbol}}</span>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col col-4>\n    <span>1h: </span>\n    <span class=\'bold\' [ngClass]="getPriceColor(coinData.percent_change_1h)">{{ coinData.percent_change_1h }} %</span>\n  </ion-col>\n  <ion-col col-4>\n    <span>24h: </span>\n    <span class=\'bold\' [ngClass]="getPriceColor(coinData.percent_change_24h)">{{ coinData.percent_change_24h }} %</span>\n  </ion-col>\n  <ion-col col-4>\n    <span>7d: </span>\n    <span class=\'bold\' [ngClass]="getPriceColor(coinData.percent_change_7d)">{{ coinData.percent_change_7d }} %</span>\n  </ion-col>\n</ion-row>'/*ion-inline-end:"/home/rabiul/ionic/ionic-cryptocurrency/src/components/coin-card/coin-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__helper_image_helper__["a" /* ImageHelper */],
            __WEBPACK_IMPORTED_MODULE_2__helper_price_helper__["a" /* PriceHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["c" /* SettingsProvider */]])
    ], CoinCardComponent);
    return CoinCardComponent;
}());

//# sourceMappingURL=coin-card.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_providers__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ListSettingsComponent = /** @class */ (function () {
    function ListSettingsComponent(settingsProvider) {
        this.settingsProvider = settingsProvider;
        this.values = [];
    }
    Object.defineProperty(ListSettingsComponent.prototype, "exec", {
        set: function (_a) {
            var fctToExectute = _a.fctToExectute, thisParent = _a.thisParent, keyDB = _a.keyDB;
            this.fctToExectute = fctToExectute;
            this.parent = thisParent;
            this.keyDB = keyDB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListSettingsComponent.prototype, "dataSetting", {
        set: function (data) {
            if (data.length > 0) {
                this.availableSettings = data;
                this.init();
            }
        },
        enumerable: true,
        configurable: true
    });
    ListSettingsComponent.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.settingsProvider.getValue(this.keyDB)];
                    case 1:
                        currentValue = _a.sent();
                        this.values = this.availableSettings.map(function (setting) {
                            return Object.assign(setting, {
                                isChecked: _this.isChecked(currentValue, setting.code)
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListSettingsComponent.prototype.isChecked = function (currentValue, value) {
        return currentValue.code === value;
    };
    ListSettingsComponent.prototype.save = function (selectedValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this.fctToExectute === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fctToExectute.call(this.parent, selectedValue)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ListSettingsComponent.prototype, "exec", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ListSettingsComponent.prototype, "dataSetting", null);
    ListSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'list-settings',template:/*ion-inline-start:"/home/rabiul/ionic/ionic-cryptocurrency/src/components/list-settings/list-settings.html"*/'<ion-list radio-group>\n  <ion-item *ngFor="let value of values">\n    <ion-label>{{value.name}}</ion-label>\n    <ion-radio (click)=\'save(value)\' [checked]="value.isChecked"></ion-radio>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/home/rabiul/ionic/ionic-cryptocurrency/src/components/list-settings/list-settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_providers__["c" /* SettingsProvider */]])
    ], ListSettingsComponent);
    return ListSettingsComponent;
}());

//# sourceMappingURL=list-settings.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptocurrencyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constant__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CryptocurrencyApp = /** @class */ (function () {
    function CryptocurrencyApp(platform, statusBar, splashScreen, settings, translate, config) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.settings = settings;
        this.translate = translate;
        this.config = config;
        this.rootPage = 'HomePage';
        this.platformReady();
    }
    CryptocurrencyApp.prototype.platformReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.settings.load()];
                    case 2:
                        _a.sent();
                        this.initLanguage();
                        this.initTranslation();
                        this.initActiveTheme();
                        this.statusBar.styleDefault();
                        this.splashScreen.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    CryptocurrencyApp.prototype.initActiveTheme = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var savedTheme;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.settings.getValue('theme')];
                    case 1:
                        savedTheme = _a.sent();
                        this.settings.setActiveTheme(savedTheme);
                        this.settings.getActiveTheme().subscribe(function (val) { return (_this.selectedTheme = val); });
                        if (savedTheme === __WEBPACK_IMPORTED_MODULE_6__app_constant__["d" /* availableTheme */].Dark)
                            this.statusBar.styleLightContent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CryptocurrencyApp.prototype.initLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savedLanguage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_6__app_constant__["e" /* defaultLanguage */]);
                        return [4 /*yield*/, this.settings.getValue('language')];
                    case 1:
                        savedLanguage = _a.sent();
                        if (savedLanguage) {
                            this.translate.use(savedLanguage.code);
                        }
                        else {
                            this.translate.use(__WEBPACK_IMPORTED_MODULE_6__app_constant__["e" /* defaultLanguage */]);
                            this.settings.setValue('language', __WEBPACK_IMPORTED_MODULE_6__app_constant__["e" /* defaultLanguage */]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CryptocurrencyApp.prototype.initTranslation = function () {
        var _this = this;
        // translation back button
        this.translate.stream(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    CryptocurrencyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], CryptocurrencyApp.prototype, "nav", void 0);
    CryptocurrencyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rabiul/ionic/ionic-cryptocurrency/src/app/app.html"*/'<ion-menu [class]="selectedTheme" [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>{{ \'MENU_TITLE\' | translate }}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item (click)="openPage(\'HomePage\')">\n                {{ \'MENU_HOME\' | translate }}\n            </button>\n            <button menuClose ion-item (click)="openPage(\'UpcomingCoinPage\')">\n                {{ \'UPCOMING_COIN\' | translate }}\n            </button>\n            <button menuClose ion-item (click)="openPage(\'CryptoNewsPage\')">\n                {{ \'CRYPTO_NEWS\' | translate }}\n            </button>\n            <button menuClose ion-item (click)="openPage(\'FavouriteCoinPage\')">\n                {{ \'FAVOURITE_COIN\' | translate }}\n            </button>\n            <button menuClose ion-item (click)="openPage(\'SettingsPage\')">\n                {{ \'MENU_SETTINGS\' | translate }}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/rabiul/ionic/ionic-cryptocurrency/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Config */]) === "function" && _g || Object])
    ], CryptocurrencyApp);
    return CryptocurrencyApp;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConverterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConverterPage = /** @class */ (function () {
    function ConverterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(this.navParams.get('data'));
    }
    ConverterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConverterPage');
    };
    ConverterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-converter',template:/*ion-inline-start:"/home/rabiul/ionic/ionic-cryptocurrency/src/pages/converter/converter.html"*/'<!--\n  Generated template for the ConverterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>converter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/rabiul/ionic/ionic-cryptocurrency/src/pages/converter/converter.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], ConverterPage);
    return ConverterPage;
    var _a, _b;
}());

//# sourceMappingURL=converter.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coinmarketcap_coinmarketcap_provider__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__coinmarketcap_coinmarketcap_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });




//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return availableLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return availableCurrency; });
/* unused harmony export defaultCurrency */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return availableTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiUrl; });
var availableLanguages = [
    {
        code: 'en',
        name: 'English'
    },
    {
        code: 'fr',
        name: 'Français'
    }
];
var defaultLanguage = 'en';
var availableCurrency = [
    {
        code: 'usd',
        name: 'Dollar',
        symbol: '$'
    },
    {
        code: 'eur',
        name: 'Euro',
        symbol: '€'
    }
];
var defaultCurrency = 'usd';
var availableTheme;
(function (availableTheme) {
    availableTheme["Dark"] = "dark-theme";
    availableTheme["Light"] = "light-theme";
})(availableTheme || (availableTheme = {}));
var apiUrl = 'https://api.coinmarketcap.com/v1';
//# sourceMappingURL=app.constant.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this.defaults = defaults;
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this.mergeDefaults(_this.defaults);
            }
            else {
                return _this.setAll(_this.defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    SettingsProvider.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    SettingsProvider.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY).then(function (settings) {
            return settings[key];
        });
    };
    SettingsProvider.prototype.getCacheValue = function (key) {
        return this.settings[key];
    };
    SettingsProvider.prototype.mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    SettingsProvider.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], Object])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map