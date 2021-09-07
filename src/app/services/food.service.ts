import { EventEmitter, Injectable } from '@angular/core';
import { Food } from '../Model/food.model';
import { Promotion } from '../Model/promotion.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  showTab = new EventEmitter<boolean>();

  private foodArray: Food[] = [
    {
      id: 1,
      title: 'Pizza',
      restaurant: 'Fresh Queensway',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      deliveryFee: 2,
      deal: true,
      dealAmount: 10,
    },
    {
      id: 2,
      title: 'Sushi',
      restaurant: 'Jalearn',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1585144570564-9629fa5ab791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1627&q=80',
      deliveryFee: 1,
      deal: true,
      dealAmount: 20,
    },
    {
      id: 3,
      title: 'Tacos',
      restaurant: 'Sunrise Tacos',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80',
      deliveryFee: 1,
      deal: true,
      dealAmount: 3,
    },
    {
      id: 4,
      title: 'Fish & Chips',
      restaurant: 'California Sandwiches',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1565192259022-0427b058f372?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      deliveryFee: 0,
      deal: false,
      dealAmount: 6,
    },
    {
      id: 5,
      title: 'Vegan Pizza',
      restaurant: 'Freshii',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1565192259022-0427b058f372?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      deliveryFee: 1,
      deal: true,
      dealAmount: 15,
    },
    {
      id: 6,
      title: 'Galbi',
      restaurant: 'Insadong',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1528696353932-be229661fd48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      deliveryFee: 1,
      deal: true,
      dealAmount: 2,
    },
  ];

  private promotionArray: Promotion[] = [
    {
      id: 1,
      title: 'Get $25 off on your grocery order',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
      buttonTitle: 'Order Grocery',
    },
    {
      id: 1,
      title: 'Get a free item on selected orders',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      buttonTitle: 'Order Now',
    },
    {
      id: 1,
      title: '$10 off when you invite your friends',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80',
      buttonTitle: 'Invite Now',
    },
  ];
  constructor() {}

  getAllFood() {
    return [...this.foodArray];
  }

  getFood(foodId: number) {
    return {
      ...this.foodArray.find((food) => food.id === foodId),
    };
  }

  getAllPromotions() {
    return [...this.promotionArray];
  }
}
