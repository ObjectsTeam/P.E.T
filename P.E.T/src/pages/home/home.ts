import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanPage } from '../scan/scan';
import { ModalController } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { XiangqinPage } from '../xiangqin/xiangqin';
import { LingyangPage } from '../lingyang/lingyang';
import { ZhaolingPage } from '../zhaoling/zhaoling';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }
  qrscan() {
    // this.modalController.create('ScanPage').present();
    this.navCtrl.push('ScanPage');
  }
  gol(){
    this.modalCtrl.create('LocationPage').present();
  }
  go1(){
    this.navCtrl.push('XiangqinPage')
  }
  go2(){
    this.navCtrl.push('LingyangPage')
  }
  go3(){
    this.navCtrl.push('ZhaolingPage')
  }
}
