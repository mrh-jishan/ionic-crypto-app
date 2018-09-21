import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CryptoNewsPage } from './crypto-news';

@NgModule({
  declarations: [
    CryptoNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(CryptoNewsPage),
  ],
})
export class CryptoNewsPageModule {}
