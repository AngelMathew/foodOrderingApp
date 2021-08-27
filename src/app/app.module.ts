import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortFilterComponent } from './sort-filter/sort-filter.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

import { SplashPage } from './splash/splash.page';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, SortFilterComponent, ViewCartComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
