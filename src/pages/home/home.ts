import {Component} from '@angular/core';
import {IonicPage, LoadingController} from 'ionic-angular';
import {CoinProvider} from '../../providers/providers';
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    private coinList: any = [];
    private coinListFiltered: any = [];
    private searchText: string;
    private loading: any;

    constructor(private coinProvider: CoinProvider,
                private loadingCtrl: LoadingController,
                public storage: Storage) {
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
        this.coinList = await this.coinProvider.getAllCoin();
        this.coinListFiltered = this.coinList;
        if (refresher) refresher.complete();
        this.loading.dismiss();
    }

    private filterCoins(val: any) {
        return function (coin: any) {
            return (
                coin.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                coin.symbol.toLowerCase().indexOf(val.toLowerCase()) > -1
            );
        };
    }

    private onInputSearch(ev: any) {
        if (this.coinList) {
            this.coinListFiltered = this.coinList;
            let val = ev.target.value;
            if (val && val.trim() !== '') {
                this.coinListFiltered = this.coinList.filter(this.filterCoins(val));
            }
        }
    }

    async addToFavourite(coin) {
        var favorites = [];
        await this.storage.get('myFavourite').then(res => {
            if (res == null) {
                favorites = [];
            } else {
                favorites = res;
            }
        });

        await favorites.push(coin);
        await this.storage.set('myFavourite', favorites);

    }
}
