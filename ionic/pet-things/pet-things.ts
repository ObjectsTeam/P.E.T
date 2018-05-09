import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PetThingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pet-things',
  templateUrl: 'pet-things.html',
})
export class PetThingsPage {
  itemArr=[
    {
      'title':'软件学院',
      'title1':'河北师范大学软件学院软件学院软件学院',
      'title2':'123',
      'Bgimg':"assets/imgs/gou.jpg",
      'img':"assets/imgs/logo.png"
    },
    {
      'title':'软件学院2',
      'title1':'123',
      'title2':'123',
      'Bgimg':"assets/imgs/gou.jpg",
      'img':"assets/imgs/logo.png"
    },
    {
      'title':'软件学院3',
      'title1':'123',
      'title2':'123',
      'Bgimg':"assets/imgs/gou.jpg",
      'img':"assets/imgs/logo.png"
    }
  ]
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetThingsPage');
  }

}
