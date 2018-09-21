import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UpcomingCoinPage} from './upcoming-coin';
import {ComponentsModule} from "../../components/components.module";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@NgModule({
    declarations: [
        UpcomingCoinPage,
    ],
    imports: [
        IonicPageModule.forChild(UpcomingCoinPage),
        ComponentsModule
    ], providers: [
        InAppBrowser
    ]
})
export class UpcomingCoinPageModule {
}
