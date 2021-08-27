import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Food } from '../Model/food.model';
import { Promotion } from '../Model/promotion.model';
import { FoodService } from '../services/food.service';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from './../map-modal/map-modal.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { Placelocation } from '../Model/location.model';
import { of } from 'rxjs';
import { Geolocation } from '@capacitor/geolocation';
import { SortFilterComponent } from '../sort-filter/sort-filter.component';
import { SortService } from '../services/sort.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @Output() locationPick = new EventEmitter<Placelocation>();
  selectedLocationImage;
  food: Food[];
  promotions: Promotion[];
  currentLocation;
  isLoadingcurrentLocation = false;
  sortColumn = '';
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor(
    private foodService: FoodService,
    private modalCtrl: ModalController,
    private http: HttpClient,
    private sortService: SortService
  ) {}
  ngOnInit() {
    this.printCurrentPosition();
    this.sortService.sortString.subscribe((data) => {
      this.sortColumn = data;
    });
    // this.promotions = this.foodService.getAllPromotions();
    // this.food = this.foodService.getAllFood();
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SortFilterComponent,
      componentProps: { selectedSort: 'hi' },
    });
    return await modal.present();
  }

  printCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      // this.isLoadingcurrentLocation = true;
      const loc = this.getAddress(
        coordinates.coords.latitude,
        coordinates.coords.longitude
      );
      // this.currentLocation = coordinates;
      loc.subscribe((data) => {
        console.log('data', data);
        this.isLoadingcurrentLocation = true;
        this.currentLocation = data;
      });
    } catch (e) {
      console.log('Error', e);
    }
  };

  ionViewWillEnter() {
    console.log('ionViewWill');
    this.promotions = this.foodService.getAllPromotions();
    this.food = this.foodService.getAllFood();
  }

  onPickLocation() {
    this.modalCtrl.create({ component: MapModalComponent }).then((modalEl) => {
      modalEl.onDidDismiss().then((modalData) => {
        console.log(modalData.data);
        if (!modalData.data) {
          return;
        }
        const pickedLocation: Placelocation = {
          lat: modalData.data.lat,
          lng: modalData.data.lng,
          address: null,
          staticImageUrl: null,
        };
        // console.log('pick', pickedLocation);
        this.getAddress(modalData.data.lat, modalData.data.lng)
          .pipe(
            switchMap((address) => {
              pickedLocation.address = address;
              return of(
                this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14)
              );
            })
          )
          .subscribe((staticMapImageUrl) => {
            pickedLocation.staticImageUrl = staticMapImageUrl;
            this.selectedLocationImage = staticMapImageUrl;
            this.locationPick.emit(pickedLocation);
            this.currentLocation = pickedLocation.address;
          });
      });
      modalEl.present();
    });
  }

  private getAddress(lat: number, lng: number) {
    return this.http
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsAPIKey}`
      )
      .pipe(
        map((geoData: any) => {
          if (!geoData || !geoData.results || geoData.results.length === 0) {
            return null;
          }
          return geoData.results[0].formatted_address;
        })
      );
  }

  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap
    &markers=color:red%7Clabel:Place%7C${lat},${lng}
    &key=${environment.googleMapsAPIKey}`;
  }
}
