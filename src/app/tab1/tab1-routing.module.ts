import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'tab-details',
    loadChildren: () => import('./tab-details/tab-details.module').then( m => m.TabDetailsPageModule)
  },
  {
    path: 'tab1-food',
    loadChildren: () => import('./tab1-food/tab1-food.module').then( m => m.Tab1FoodPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
