import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: ProfilePage },
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];



    this.checkPreviousAuthorization();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  checkPreviousAuthorization(): void { 
    if(window.localStorage.getItem('access_token') === "undefined" || window.localStorage.getItem('access_token') === null){
      this.rootPage = LoginPage;
    } else {
      this.rootPage = HomePage;
    }
  } 

  logout() {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('access_token');
        this.nav.setRoot(LoginPage);
    }   
}
