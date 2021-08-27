import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.showSplash();
  }

  showSplash() {
    SplashScreen.show({
      showDuration: 5000,
      fadeInDuration: 100,
      fadeOutDuration: 3000,
      autoHide: true,
    });
  }
}
