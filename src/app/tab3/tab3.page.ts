import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Share } from '@capacitor/share';
import { AlertController } from '@ionic/angular';
import { FoodService } from '../services/food.service';
import { Clipboard } from '@capacitor/clipboard';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  columns = Array(2);
  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    private foodService: FoodService
  ) {}

  ngOnInit() {
    console.log('inside');
    // this.cartService.itemCarts.subscribe((data) => {
    //   console.log('here', data);
    // });
  }
  ionViewWillEnter() {
    this.foodService.showTab.emit(true);
  }
  async showHelloToast() {
    await Toast.show({
      text: 'Text copied to clipboard!',
      position: 'top',
    });
  }

  async writeToClipboard() {
    await Clipboard.write({
      // eslint-disable-next-line id-blacklist
      string: 'eats-ang2123',
    });
    this.showHelloToast();
    this.checkClipboard();
  }

  async checkClipboard() {
    const { type, value } = await Clipboard.read();
    console.log(value);

    return value;
  }

  async openCapacitorSite() {
    try {
      await Share.share({
        title: 'Code',
        text: 'Share code with friends',
        url: 'http://ionicframework.com/',
        dialogTitle: 'Share with buddies',
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}
