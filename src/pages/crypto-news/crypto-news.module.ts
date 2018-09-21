import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CryptoNewsPage} from './crypto-news';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    declarations: [
        CryptoNewsPage,
    ],
    imports: [
        IonicPageModule.forChild(CryptoNewsPage),
        ComponentsModule
    ],
})
export class CryptoNewsPageModule {
}
