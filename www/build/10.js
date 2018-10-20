webpackJsonp([10],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoNewsPageModule", function() { return CryptoNewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crypto_news__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CryptoNewsPageModule = /** @class */ (function () {
    function CryptoNewsPageModule() {
    }
    CryptoNewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crypto_news__["a" /* CryptoNewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crypto_news__["a" /* CryptoNewsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], CryptoNewsPageModule);
    return CryptoNewsPageModule;
}());

//# sourceMappingURL=crypto-news.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InAppBrowserObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InAppBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @hidden
 */
var InAppBrowserObject = (function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options)
                    .map(function (key) { return key + "=" + options[key]; })
                    .join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            window.open(url, target);
            console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    /**
     * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
     * if the InAppBrowser was already visible.
     */
    /**
       * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
       * if the InAppBrowser was already visible.
       */
    InAppBrowserObject.prototype.show = /**
       * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
       * if the InAppBrowser was already visible.
       */
    function () { };
    /**
     * Closes the InAppBrowser window.
     */
    /**
       * Closes the InAppBrowser window.
       */
    InAppBrowserObject.prototype.close = /**
       * Closes the InAppBrowser window.
       */
    function () { };
    /**
     * Hides an InAppBrowser window that is currently shown. Calling this has no effect
     * if the InAppBrowser was already hidden.
     */
    /**
       * Hides an InAppBrowser window that is currently shown. Calling this has no effect
       * if the InAppBrowser was already hidden.
       */
    InAppBrowserObject.prototype.hide = /**
       * Hides an InAppBrowser window that is currently shown. Calling this has no effect
       * if the InAppBrowser was already hidden.
       */
    function () { };
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    /**
       * Injects JavaScript code into the InAppBrowser window.
       * @param script {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    InAppBrowserObject.prototype.executeScript = /**
       * Injects JavaScript code into the InAppBrowser window.
       * @param script {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    function (script) {
        return;
    };
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    /**
       * Injects CSS into the InAppBrowser window.
       * @param css {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    InAppBrowserObject.prototype.insertCSS = /**
       * Injects CSS into the InAppBrowser window.
       * @param css {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    function (css) {
        return;
    };
    /**
     * A method that allows you to listen to events happening in the browser.
     * @param event {string} Name of the event
     * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    /**
       * A method that allows you to listen to events happening in the browser.
       * @param event {string} Name of the event
       * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
       */
    InAppBrowserObject.prototype.on = /**
       * A method that allows you to listen to events happening in the browser.
       * @param event {string} Name of the event
       * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
       */
    function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () {
                return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
            };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InAppBrowserObject.prototype, "show", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InAppBrowserObject.prototype, "close", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InAppBrowserObject.prototype, "hide", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], InAppBrowserObject.prototype, "executeScript", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], InAppBrowserObject.prototype, "insertCSS", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], InAppBrowserObject.prototype, "on", null);
    return InAppBrowserObject;
}());

/**
 * @name In App Browser
 * @description Launches in app Browser
 * @usage
 * ```typescript
 * import { InAppBrowser } from '@ionic-native/in-app-browser';
 *
 * constructor(private iab: InAppBrowser) { }
 *
 *
 * ...
 *
 *
 * const browser = this.iab.create('https://ionicframework.com/');
 *
 * browser.executeScript(...);
 *
 * browser.insertCSS(...);
 * browser.on('loadstop').subscribe(event => {
 *    browser.insertCSS({ code: "body{color: red;" });
 * });
 *
 * browser.close();
 *
 * ```
 * @classes
 * InAppBrowserObject
 * @interfaces
 * InAppBrowserEvent
 * InAppBrowserOptions
 */
var InAppBrowser = (function (_super) {
    __extends(InAppBrowser, _super);
    function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param  url {string}     The URL to load.
       * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
       * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       * @returns {InAppBrowserObject}
       */
    InAppBrowser.prototype.create = /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param  url {string}     The URL to load.
       * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
       * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       * @returns {InAppBrowserObject}
       */
    function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowser.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /**
     * @name In App Browser
     * @description Launches in app Browser
     * @usage
     * ```typescript
     * import { InAppBrowser } from '@ionic-native/in-app-browser';
     *
     * constructor(private iab: InAppBrowser) { }
     *
     *
     * ...
     *
     *
     * const browser = this.iab.create('https://ionicframework.com/');
     *
     * browser.executeScript(...);
     *
     * browser.insertCSS(...);
     * browser.on('loadstop').subscribe(event => {
     *    browser.insertCSS({ code: "body{color: red;" });
     * });
     *
     * browser.close();
     *
     * ```
     * @classes
     * InAppBrowserObject
     * @interfaces
     * InAppBrowserEvent
     * InAppBrowserOptions
     */
    InAppBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
            pluginName: 'InAppBrowser',
            plugin: 'cordova-plugin-inappbrowser',
            pluginRef: 'cordova.InAppBrowser',
            repo: 'https://github.com/apache/cordova-plugin-inappbrowser',
            platforms: ['AmazonFire OS', 'Android', 'Browser', 'iOS', 'macOS', 'Windows']
        })
    ], InAppBrowser);
    return InAppBrowser;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(694);
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
 * Generated class for the CryptoNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CryptoNewsPage = /** @class */ (function () {
    function CryptoNewsPage(coinProvider, iab, loadingCtrl) {
        this.coinProvider = coinProvider;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.coinList = [];
        this.loadCoin();
    }
    CryptoNewsPage.prototype.initLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    };
    CryptoNewsPage.prototype.loadCoin = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initLoading();
                        return [4 /*yield*/, this.loading.present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.coinProvider.getCrytptoNews().then(function (res) {
                                _this.coinList = res.articles;
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
    CryptoNewsPage.prototype.openInBrowser = function (coin) {
        this.iab.create(coin.url);
    };
    CryptoNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crypto-news',template:/*ion-inline-start:"/home/rabiul/ionic/ionic-cryptocurrency/src/pages/crypto-news/crypto-news.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Crypto-News</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="loadCoin($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n                               refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list [virtualScroll]="coinList">\n        <ion-grid class=\'coin-card\' *virtualItem="let coin" (click)="openInBrowser(coin)">\n\n            <ion-row>\n                <ion-col col-2 class=\'vertical-center\'>\n                    <img src="{{coin.urlToImage}}" height="80" width="80">\n                </ion-col>\n                <ion-col col-10>\n                    <ion-row>\n                        <ion-col>\n                            <span class=\'bold\'>Title: </span>\n                            <span>{{ coin.title }}</span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <span class=\'bold\'>Author: </span>\n                            <span>{{ coin.author }}</span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <span class="bold">Published At: </span>\n                            <span>{{ coin.publishedAt | date }}</span>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rabiul/ionic/ionic-cryptocurrency/src/pages/crypto-news/crypto-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CoinProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CryptoNewsPage);
    return CryptoNewsPage;
}());

//# sourceMappingURL=crypto-news.js.map

/***/ })

});
//# sourceMappingURL=10.js.map