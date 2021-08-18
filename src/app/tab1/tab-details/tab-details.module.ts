import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabDetailsPageRoutingModule } from './tab-details-routing.module';

import { TabDetailsPage } from './tab-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabDetailsPageRoutingModule
  ],
  declarations: [TabDetailsPage]
})
export class TabDetailsPageModule {}
