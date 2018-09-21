import {Injectable} from '@angular/core';
import {Api} from '../api/api';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CoinProvider {
    constructor(private api: Api,
                private http: HttpClient) {
    }

    public getAllCoin(): Promise<ArrayBuffer> {
        return this.api.get('ticker/?convert=EUR').toPromise();
    }

    public getUpcomingCoin() {
        return new Promise((resolve, reject) => {
            this.http.get('https://api.icowatchlist.com/public/v1/upcoming').subscribe(res => {
                resolve(res)
            }, err => {
                reject(err);
            })
        })
    }

    public getCrytptoNews() {
        return new Promise((resolve, reject) => {
            this.http.get('https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=d08830add58541029ba1c12de6597ee3&page=4&pageSize=100').subscribe(res => {
                resolve(res)
            }, err => {
                reject(err);
            })
        })
    }
}
