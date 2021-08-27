import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Model/food.model';
import { HttpClient } from '@angular/common/http';
import { RapidService } from '../../services/rapid.service';
import { ViewCartComponent } from '../../view-cart/view-cart.component';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab-details',
  templateUrl: './tab-details.page.html',
  styleUrls: ['./tab-details.page.scss'],
})
export class TabDetailsPage implements OnInit {
  loadedFood: Food;
  rating = ['star', 'star', 'star', 'star', 'star-half-outline'];
  foodList;
  foodListCount = 0;
  showCart = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private http: HttpClient,
    private rapidService: RapidService,
    private router: Router,
    private cartService: CartService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.cartService.showCart.subscribe((show) => {
      this.showCart = show;
    });
    this.cartService.userData.subscribe((data) => {
      this.foodListCount = data.length;
      console.log('count', this.foodListCount);
    });
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('foodId')) {
        // redirect
        this.router.navigate(['/']);
        return;
      }
      const foodId = Number(paramMap.get('foodId'));
      this.loadedFood = this.foodService.getFood(foodId);
      // console.log(this.foodService.getFood(foodId));
    });
    this.rapidService.getFoodList().subscribe((data) => {
      this.foodList = data;
      console.log(data);
    });
  }

  async openViewCartModal() {
    const modal = await this.modalCtrl.create({
      component: ViewCartComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: { selectedSort: 'hi' },
    });
    return await modal.present();
  }
}
