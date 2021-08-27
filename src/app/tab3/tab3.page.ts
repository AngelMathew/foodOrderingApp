import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  columns = Array(2);
  constructor(private cartService: CartService) {}

  ngOnInit() {
    console.log('inside');
    // this.cartService.itemCarts.subscribe((data) => {
    //   console.log('here', data);
    // });
  }
}
