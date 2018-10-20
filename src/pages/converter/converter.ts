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

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {

        console.log(this.navParams.get('data'));
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ConverterPage');
    }

}
