import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ConverterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-converter',
    templateUrl: 'converter.html',
})
export class ConverterPage {

    data: any;

    btcValue = 0;
    usdValue = 0;
    // price_btc: "1.0"
    // price_eur: "5698.16695793"
    // price_usd: "6691.83012073"

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
        this.data = this.navParams.get('data');
        this.btcValue = this.data.price_btc;
        this.usdValue = this.data.price_usd;
    }

    ionViewDidLoad() {
    }

    BTCChageValue(value) {
        this.usdValue = value * this.data.price_usd;
    }

    USDChageValue(value) {
        this.btcValue = value / this.data.price_btc;
    }

}
