import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        // loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        children: [
          {
            path: 'tab1',
            loadChildren: () =>
              import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
              },
              {
                path: 'food/:foodId',
                loadChildren: () =>
                  import('../tab1/tab-details/tab-details.module').then(
                    (m) => m.TabDetailsPageModule
                  ),
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                      import('../tab1/tab-details/tab-details.module').then(
                        (m) => m.TabDetailsPageModule
                      ),
                  },
                  {
                    path: 'foodList/:foodListId',
                    loadChildren: () =>
                      import('../tab1/tab1-food/tab1-food.module').then(
                        (m) => m.Tab1FoodPageModule
                      ),
                  },
                ],
              },
            ],
          },
          {
            path: 'food/:foodId',
            loadChildren: () =>
              import('../tab1/tab-details/tab-details.module').then(
                (m) => m.TabDetailsPageModule
              ),
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../tab1/tab-details/tab-details.module').then(
                    (m) => m.TabDetailsPageModule
                  ),
              },
              {
                path: 'foodList/:foodListId',
                loadChildren: () =>
                  import('../tab1/tab1-food/tab1-food.module').then(
                    (m) => m.Tab1FoodPageModule
                  ),
              },
            ],
          },
          // {
          //   path: 'foodList/:foodListId',
          //   loadChildren: () =>
          //     import('../tab1/tab1-food/tab1-food.module').then(
          //       (m) => m.Tab1FoodPageModule
          //     ),
          // },
        ],
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: '',
        redirectTo: '/home/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
