import {Component} from '@angular/core';
import {IonicPage, LoadingController} from 'ionic-angular';
import {CoinProvider} from "../../providers/providers";
import {InAppBrowser} from '@ionic-native/in-app-browser';


/**
 * Generated class for the UpcomingCoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-upcoming-coin',
    templateUrl: 'upcoming-coin.html',
})
export class UpcomingCoinPage {

    private coinList: any = [];
    private loading: any;

    constructor(
        private coinProvider: CoinProvider,
        private iab: InAppBrowser,
        private loadingCtrl: LoadingController) {
        this.loadCoin();
    }

    private initLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }

    private async loadCoin(refresher?) {
        this.initLoading();
        await this.loading.present();
        await this.coinProvider.getUpcomingCoin().then((res: any) => {
            this.coinList = res.ico.upcoming;
        });
        if (refresher) refresher.complete();
        this.loading.dismiss();
    }

    openInBrowser(coin) {
        this.iab.create(coin.website_link);
    }
}
