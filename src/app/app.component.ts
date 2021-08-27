import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('inside splasj');
  }

  //   console.log('inside splash');
  //   SplashScreen.show({
  //     showDuration: 3000,
  //     autoHide: true,
  //     fadeInDuration: 100,
  //     fadeOutDuration: 3000,
  //   });
}
