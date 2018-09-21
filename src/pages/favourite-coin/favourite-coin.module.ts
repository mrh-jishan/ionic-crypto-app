import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavouriteCoinPage } from './favourite-coin';

@NgModule({
  declarations: [
    FavouriteCoinPage,
  ],
  imports: [
    IonicPageModule.forChild(FavouriteCoinPage),
  ],
})
export class FavouriteCoinPageModule {}
