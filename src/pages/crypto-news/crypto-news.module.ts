import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CryptoNewsPage} from './crypto-news';
import {ComponentsModule} from "../../components/components.module";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@NgModule({
    declarations: [
        CryptoNewsPage,
    ],
    imports: [
        IonicPageModule.forChild(CryptoNewsPage),
        ComponentsModule
    ],
    providers: [
        InAppBrowser
    ]
})
export class CryptoNewsPageModule {
}
