webpackJsonp([0],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingCoinPageModule", function() { return UpcomingCoinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upcoming_coin__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpcomingCoinPageModule = /** @class */ (function () {
    function UpcomingCoinPageModule() {
    }
    UpcomingCoinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upcoming_coin__["a" /* UpcomingCoinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upcoming_coin__["a" /* UpcomingCoinPage */]),
            ],
        })
    ], UpcomingCoinPageModule);
    return UpcomingCoinPageModule;
}());

//# sourceMappingURL=upcoming-coin.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingCoinPage; });
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
 * Generated class for the UpcomingCoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpcomingCoinPage = /** @class */ (function () {
    function UpcomingCoinPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UpcomingCoinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpcomingCoinPage');
    };
    UpcomingCoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upcoming-coin',template:/*ion-inline-start:"/home/rabiul/ionic-cryptocurrency/src/pages/upcoming-coin/upcoming-coin.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Upcoming-Coin</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <!--<ion-searchbar [(ngModel)]="searchText" [showCancelButton]="shouldShowCancel" (ionInput)="onInputSearch($event)"-->\n                   <!--(ionCancel)="onCancel($event)">-->\n    <!--</ion-searchbar>-->\n    <!--<ion-refresher (ionRefresh)="loadCoin($event)">-->\n        <!--<ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"-->\n                               <!--refreshingText="Refreshing...">-->\n        <!--</ion-refresher-content>-->\n    <!--</ion-refresher>-->\n    <!--<ion-list [virtualScroll]="coinListFiltered">-->\n        <!--<ion-grid class=\'coin-card\' *virtualItem="let coin">-->\n            <!--<coin-card [coinData]=\'coin\'></coin-card>-->\n        <!--</ion-grid>-->\n    <!--</ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/home/rabiul/ionic-cryptocurrency/src/pages/upcoming-coin/upcoming-coin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UpcomingCoinPage);
    return UpcomingCoinPage;
}());

//# sourceMappingURL=upcoming-coin.js.map

/***/ })

});
//# sourceMappingURL=0.js.map