import { Component, OnInit } from '@angular/core';
import { Food } from '../Model/food.model';
import { Promotion } from '../Model/promotion.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  food: Food[];
  promotions: Promotion[];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor(private foodService: FoodService) {}
  ngOnInit() {
    // this.promotions = this.foodService.getAllPromotions();
    // this.food = this.foodService.getAllFood();
  }
  ionViewWillEnter() {
    console.log('ionViewWill');
    this.promotions = this.foodService.getAllPromotions();
    this.food = this.foodService.getAllFood();
  }
}
