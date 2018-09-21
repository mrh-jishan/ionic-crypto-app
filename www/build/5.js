webpackJsonp([5],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteCoinPageModule", function() { return FavouriteCoinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favourite_coin__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavouriteCoinPageModule = /** @class */ (function () {
    function FavouriteCoinPageModule() {
    }
    FavouriteCoinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favourite_coin__["a" /* FavouriteCoinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favourite_coin__["a" /* FavouriteCoinPage */]),
            ],
        })
    ], FavouriteCoinPageModule);
    return FavouriteCoinPageModule;
}());

//# sourceMappingURL=favourite-coin.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteCoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_image_helper__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_price_helper__ = __webpack_require__(310);
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






/**
 * Generated class for the FavouriteCoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavouriteCoinPage = /** @class */ (function () {
    function FavouriteCoinPage(coinProvider, loadingCtrl, imageHelper, priceHelper, settingsProvider, storage) {
        this.coinProvider = coinProvider;
        this.loadingCtrl = loadingCtrl;
        this.imageHelper = imageHelper;
        this.priceHelper = priceHelper;
        this.settingsProvider = settingsProvider;
        this.storage = storage;
        this.coinList = [];
        this.loadCoin();
        this.getSymbol();
    }
    FavouriteCoinPage.prototype.initLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    };
    FavouriteCoinPage.prototype.loadCoin = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initLoading();
                        return [4 /*yield*/, this.loading.present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('myFavourite').then(function (res) {
                                _this.coinList = res;
                            })];
                    case 2:
                        _a.sent();
                        if (refresher)
                            refresher.complete();
                        this.loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    FavouriteCoinPage.prototype.getSymbol = function () {
        var currency = this.settingsProvider.getCacheValue('currency');
        this.symbol = currency.symbol;
    };
    FavouriteCoinPage.prototype.getPriceColor = function (price) {
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
    FavouriteCoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourite-coin',template:/*ion-inline-start:"/home/rabiul/ionic-cryptocurrency/src/pages/favourite-coin/favourite-coin.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Favourite Coin</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="loadCoin($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n                               refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list [virtualScroll]="coinList">\n        <ion-grid class=\'coin-card\' *virtualItem="let coinData">\n            <ion-row>\n                <ion-col col-2>\n                    <img src="{{imageHelper.getCoinImage(coinData.symbol)}}" height="32" width="32">\n                </ion-col>\n                <ion-col col-6 class=\'vertical-center\'>\n                    <div>\n                        <span class=\'bold\'>{{ coinData.symbol }}</span> |\n                        <span>{{ coinData.name }}</span>\n                    </div>\n                </ion-col>\n                <ion-col col-4 class=\'vertical-center\'>\n                    <span class=\'bold\'>{{ priceHelper.getPriceByCurrency(coinData) }} {{symbol}}</span>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4>\n                    <span>1h: </span>\n                    <span class=\'bold\' [ngClass]="getPriceColor(coinData.percent_change_1h)">{{ coinData.percent_change_1h }} %</span>\n                </ion-col>\n                <ion-col col-4>\n                    <span>24h: </span>\n                    <span class=\'bold\' [ngClass]="getPriceColor(coinData.percent_change_24h)">{{ coinData.percent_change_24h }} %</span>\n                </ion-col>\n                <ion-col col-4>\n                    <span>7d: </span>\n                    <span class=\'bold\' [ngClass]="getPriceColor(coinData.percent_change_7d)">{{ coinData.percent_change_7d }} %</span>\n                </ion-col>\n            </ion-row>\n\n        </ion-grid>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rabiul/ionic-cryptocurrency/src/pages/favourite-coin/favourite-coin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CoinProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CoinProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__helper_image_helper__["a" /* ImageHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__helper_image_helper__["a" /* ImageHelper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__helper_price_helper__["a" /* PriceHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__helper_price_helper__["a" /* PriceHelper */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* SettingsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], FavouriteCoinPage);
    return FavouriteCoinPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=favourite-coin.js.map

/***/ })

});
//# sourceMappingURL=5.js.map