import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
})
export class FeedsPage {

  public nome_usuario:string = "William Felipe";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisValores(num1:number,num2:number):void {
    //alert(num1+ num2);
  }

  ionViewDidLoad() {
   // this.somaDoisValores(10,15);
  }

}
