import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Model/food.model';

@Component({
  selector: 'app-tab-details',
  templateUrl: './tab-details.page.html',
  styleUrls: ['./tab-details.page.scss'],
})
export class TabDetailsPage implements OnInit {
  loadedFood: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private router: Router
  ) {}

  ngOnInit() {
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
  }
}
