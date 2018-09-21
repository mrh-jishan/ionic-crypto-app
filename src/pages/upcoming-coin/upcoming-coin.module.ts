import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UpcomingCoinPage} from './upcoming-coin';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    declarations: [
        UpcomingCoinPage,
    ],
    imports: [
        IonicPageModule.forChild(UpcomingCoinPage),
        ComponentsModule
    ],
})
export class UpcomingCoinPageModule {
}
