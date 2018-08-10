import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	userData:any={name:'',email:'',username:''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	if(window.localStorage.getItem('access_token') === "undefined" || window.localStorage.getItem('access_token') === null) {
      navCtrl.setRoot(LoginPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.userData.username=window.localStorage.getItem('username');
    this.userData.name=window.localStorage.getItem('name');
    this.userData.email=window.localStorage.getItem('email');
  }

}
