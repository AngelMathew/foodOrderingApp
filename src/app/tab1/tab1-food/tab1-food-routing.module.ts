import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1FoodPage } from './tab1-food.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1FoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1FoodPageRoutingModule {}
