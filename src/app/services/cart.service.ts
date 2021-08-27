import { EventEmitter, Injectable } from '@angular/core';
import { CartItems } from '../Model/cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private _itemCarts = new BehaviorSubject<CartItems[]>([]);
  userDataSource: BehaviorSubject<CartItems[]> = new BehaviorSubject([]);
  showCartSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userData = this.userDataSource.asObservable();
  showCart = this.showCartSource.asObservable();

  constructor() {}
  updateShowCart(data) {
    this.showCartSource.next(data);
  }

  updateUserData(data) {
    this.userDataSource.next(data);
  }

  addData(dataObj: CartItems) {
    const currentValue = this.userDataSource.value;
    const updatedValue = [...currentValue, dataObj];
    this.userDataSource.next(updatedValue);
    this.showCartSource.next(true);
    console.log('inside srvice', this.userData);
  }

  removeItemsFromCart(items) {
    const newItem = items;
    const existingItem = this.userDataSource.value.find(
      (item: any) => item.id === newItem.id
    );
    const updatedValue = this.userDataSource.value.filter(
      (item: any) => item.name !== newItem.name
    );
    this.userDataSource.next(updatedValue);
    this.showCartSource.next(true);
  }
}
// }
