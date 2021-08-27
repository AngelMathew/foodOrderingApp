import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RapidService } from '../../services/rapid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1-food',
  templateUrl: './tab1-food.page.html',
  styleUrls: ['./tab1-food.page.scss'],
})
export class Tab1FoodPage implements OnInit {
  foodList;
  loadedFood;
  foodId: number;
  foodCount = 1;
  rand: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private rapidService: RapidService,
    private router: Router,
    private cartService: CartService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.rand = Math.floor(Math.random() * (5 - 1));
    this.cartService.userData.subscribe((data) => {
      // this.foodCount = data.length;
    });
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('foodListId')) {
        // redirect
        this.router.navigate(['/']);
        return;
      }
      const foodListId = Number(paramMap.get('foodListId'));
      this.foodId = Number(paramMap.get('foodId'));
      this.loadedFood = this.rapidService.getFoodListItem(foodListId);
    });
    this.loadedFood.subscribe((data) => {
      this.foodList = data;
      console.log(data);
    });
  }
  onAddToCart(item: any) {
    console.log(item);
    this.cartService.addData({
      name: item.name,
      price: item.ingredients.length,
      quantity: this.foodCount,
      totalPrice: item.ingredients.length,
    });
    this.loadingController
      .create({ keyboardClose: true, message: 'Adding' })
      .then((loadingEl) => {
        loadingEl.present();
        setTimeout(() => {
          loadingEl.dismiss();
        }, 1000);
      });
    this.router.navigate(['tabs/tab1/food/', this.foodId]);
  }
  onIncrementQuantity() {
    console.log('clicked');
    this.foodCount = this.foodCount + 1;
  }
  onDecrementQuantity() {
    if (this.foodCount > 1) {
      this.foodCount = this.foodCount - 1;
    }
  }
}
