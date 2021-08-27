import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit {
  cartItems;
  foodListCount;
  constructor(
    private modalCtrl: ModalController,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.userData.subscribe((data) => {
      this.cartItems = data;
      this.foodListCount = data.length;
      console.log(data);
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  removeItem(item: any) {
    this.cartService.removeItemsFromCart(item);
    if (this.foodListCount === 0) {
      this.dismiss();
    }
  }
}
