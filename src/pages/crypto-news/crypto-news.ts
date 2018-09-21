import {Component} from '@angular/core';
import {IonicPage, LoadingController} from 'ionic-angular';
import {CoinProvider} from "../../providers/providers";

/**
 * Generated class for the CryptoNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-crypto-news',
    templateUrl: 'crypto-news.html',
})
export class CryptoNewsPage {

    private coinList: any = [];
    private loading: any;

    constructor(
        private coinProvider: CoinProvider,
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
        await this.coinProvider.getCrytptoNews().then((res: any) => {
            this.coinList = res.articles;
        });
        if (refresher) refresher.complete();
        this.loading.dismiss();
    }
}
