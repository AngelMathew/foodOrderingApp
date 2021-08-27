import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapViewPageRoutingModule } from './map-view-routing.module';
import { MapViewPage } from './map-view.page';
import { SharedModule } from '../map-modal/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapViewPageRoutingModule,
    SharedModule,
  ],
  declarations: [MapViewPage],
})
export class MapViewPageModule {}
