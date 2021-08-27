import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1FoodPageRoutingModule } from './tab1-food-routing.module';

import { Tab1FoodPage } from './tab1-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1FoodPageRoutingModule
  ],
  declarations: [Tab1FoodPage]
})
export class Tab1FoodPageModule {}
