import {Component} from '@angular/core';
import {IonicPage, LoadingController, ToastController} from 'ionic-angular';
import {CoinProvider, SettingsProvider} from "../../providers/providers";
import {Storage} from "@ionic/storage";
import {ImageHelper} from "../../helper/image.helper";
import {PriceHelper} from "../../helper/price.helper";

/**
 * Generated class for the FavouriteCoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-favourite-coin',
    templateUrl: 'favourite-coin.html',
})
export class FavouriteCoinPage {

    private coinList: any = [];
    private loading: any;
    private symbol: string;

    constructor(
        private coinProvider: CoinProvider,
        private loadingCtrl: LoadingController,
        private imageHelper: ImageHelper,
        private priceHelper: PriceHelper,
        private settingsProvider: SettingsProvider,
        public toastCtrl: ToastController,
        public storage: Storage) {
        this.loadCoin();
        this.getSymbol();
    }

    private initLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }

    private async loadCoin(refresher?) {
        this.initLoading();
        await this.loading.present();
        await this.storage.get('myFavourite').then(res => {
            this.coinList = res;
        })

        if (refresher) refresher.complete();
        this.loading.dismiss();
    }

    private getSymbol() {
        const currency = this.settingsProvider.getCacheValue('currency');
        this.symbol = currency.symbol;
    }

    private getPriceColor(price: number): string {
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
    }


    async removeFavourite(coin) {
        var favorites = [];
        await this.storage.get('myFavourite').then(res => {
            if (res == null) {
                favorites = [];
            } else {
                favorites = res.filter((element) => {
                    return element.id !== coin.id;
                });
            }
        });

        await this.storage.set('myFavourite', favorites);
        this.loadCoin();
        this.presentToast();

    }

    presentToast() {
        const toast = this.toastCtrl.create({
            message: 'coin was removed successfully',
            duration: 3000
        });
        toast.present();
    }
}
