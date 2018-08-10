import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,ToastOptions } from 'ionic-angular';
// import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
	toastOptions :ToastOptions;
	
	userData={username:'',password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams ,public authServiceProvider : AuthServiceProvider , public toast:ToastController) {
  	  
  }

  ionViewDidLoad() {
    
  }
	login()
	{

		let formData = new FormData();

		formData.append('username',this.userData.username);
		formData.append('password',this.userData.password);

		this.userData.username='';
		this.userData.password='';

		this.authServiceProvider.postData('login',formData)
		.subscribe((res:any) => {
			if(res)
			{
				let keys:any = Object.keys(res.data);
				JSON.stringify(res.data);
				console.log(res.data);
				for (let v of keys) {
					window.localStorage.setItem(v,res.data[v]);
				}
             	this.navCtrl.setRoot(HomePage);
         	}
	    },(err)=>
	    {
	    	JSON.stringify(err);
	    	this.toastOptions={
					message : err.error.message,
			  		duration:3000
			  	}
			
			this.toast.create(this.toastOptions).present();
	    });

	 // this.authServiceProvider.getData('base_data/classes').subscribe(res => {
  //       console.log(res);
  //     });
	}

}
