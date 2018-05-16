import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
  }
  num=0;
  number=1
  next(){
    this.number--;
    if(this.number<1){
      this.number=1;
    }
  }
  add(){
    this.number++;
  }
  gobuy(){
    this.navCtrl.push('BuyPage')
  }
}
