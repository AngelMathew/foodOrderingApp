import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  public tabHidden: boolean;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.foodService.showTab.subscribe((show) => {
      this.tabHidden = show;
      console.log(this.tabHidden);
    });
  }
}
