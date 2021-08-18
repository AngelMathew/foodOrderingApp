import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabDetailsPage } from './tab-details.page';

const routes: Routes = [
  {
    path: '',
    component: TabDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabDetailsPageRoutingModule {}
