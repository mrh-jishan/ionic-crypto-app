import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingCoinPage } from './upcoming-coin';

@NgModule({
  declarations: [
    UpcomingCoinPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingCoinPage),
  ],
})
export class UpcomingCoinPageModule {}
