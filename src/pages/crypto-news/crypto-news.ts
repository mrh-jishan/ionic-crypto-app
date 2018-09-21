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


    // author: "Joseph Young"
    // content: "In seconds, the Bitcoin price has surged from $6,190 to $6,450, by more than 4 percent, after the dominant cryptocurrency remained in the low $6,100 region for more than 24 hours. The sudden increase in the price of Bitcoin on September 9 was not expected by … [+3093 chars]"
    // description: "In seconds, the Bitcoin price has surged from $6,190 to $6,450, by more than 4 percent, after the dominant cryptocurrency remained in the low $6,100 region for more than 24 hours. The sudden increase in the price of Bitcoin on September 9 was not expected by …"
    // publishedAt: "2018-09-09T10:40:33Z"
    // source: {id: "crypto-coins-news", name: "Crypto Coins News"}
    // title: "Bitcoin Price Surges From $6,190 to $6,450 in Seconds, What’s Next For BTC?"
    // url: "https://www.ccn.com/bitcoin-price-surges-from-6190-to-6450-in-seconds-whats-next-for-btc/"
    // urlToImage: "https://www.ccn.com/wp-content/uploads/2018/07/Bitcoin-price-spike-chart.jpg"

}
