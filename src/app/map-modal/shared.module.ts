import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MapModalComponent } from './map-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MapModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [MapModalComponent],
  entryComponents: [MapModalComponent],
})
export class SharedModule {}
